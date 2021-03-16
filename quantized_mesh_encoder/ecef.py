import numpy as np

from .constants import WGS84


def to_ecef(positions, ellipsoid=WGS84):
    """Convert positions to earth-centered, earth-fixed coordinates

    Ported from
    https://github.com/loicgasser/quantized-mesh-tile/blob/master/quantized_mesh_tile/llh_ecef.py
    under the MIT license.

    Originally from
    https://github.com/bistromath/gr-air-modes/blob/9e2515a56609658f168f0c833a14ca4d2332713e/python/mlat.py#L73-L86
    under the BSD-3 clause license.

    Args:
        - positions: expected to be an ndarray with shape (-1, 3)
        - ellisoid: a dict that defines an ellipsoid with with "a" and "b" values. Defaults to WGS84
    from latitude-longitude-height to ecef
    """
    lon = positions[:, 0]
    lat = positions[:, 1]
    alt = positions[:, 2]

    lat *= np.pi / 180
    lon *= np.pi / 180

    n = lambda arr: ellipsoid.a / np.sqrt(
        1 - ellipsoid.e2 * (np.square(np.sin(arr))))
    nlat = n(lat)

    x = (nlat + alt) * np.cos(lat) * np.cos(lon)
    y = (nlat + alt) * np.cos(lat) * np.sin(lon)
    z = (nlat * (1 - ellipsoid.e2) + alt) * np.sin(lat)

    # Do I need geoid correction?
    # https://github.com/bistromath/gr-air-modes/blob/9e2515a56609658f168f0c833a14ca4d2332713e/python/mlat.py#L88-L92
    return np.vstack([x, y, z]).T
