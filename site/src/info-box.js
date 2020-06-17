import React from "react";
import { Header, Container, Icon } from "semantic-ui-react";

export default function InfoBox(props) {
  return (
    <Container
      style={{
        position: "absolute",
        width: 300,
        maxWidth: '50%',
        left: 5,
        top: 5,
        padding: 5,
        maxHeight: "50%",
        zIndex: 1,
        backgroundColor: "#fff",
        pointerEvents: "auto",
        overflowY: "auto",
        overflow: "visible",
      }}
    >
      <Header as="h4">Serverless Quantized Mesh</Header>
      <p>
        Uses{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kylebarron/pymartini"
        >
          <Icon name="github" />
          <code>pymartini</code>
        </a>{" "}
        for mesh generation,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kylebarron/quantized-mesh-encoder"
        >
          <Icon name="github" />
          <code>quantized-mesh-encoder</code>
        </a>{" "}
        for encoding to quantized mesh,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kylebarron/dem-tiler"
        >
          <Icon name="github" />
          <code>dem-tiler</code>
        </a>{" "}
        for the serverless API, and{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://deck.gl">
          <code>deck.gl</code>
        </a>{" "}
        for rendering. You can also easily overlay a texture source, e.g. Mapbox
        Satellite tiles, with deck.gl.{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kylebarron/quantized-mesh-encoder/tree/master/site"
        >
          <Icon name="github" />
          Example source.
        </a>
      </p>
    </Container>
  );
}