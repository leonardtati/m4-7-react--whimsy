/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes } from "styled-components";

import { random, range, sample } from "../../utils";

import Particle from "../Particle";

const ConfettiPiece = ({ angle, distance, color }) => {
  const size = 25;

  return (
    <CenteredWithinParent>
      <Particle
        angle={angle}
        startDistance={distance * 0.55}
        endDistance={distance}
      >
        <Circle
          style={{
            width: size,
            height: size,
            background: color
          }}
        />
      </Particle>
    </CenteredWithinParent>
  );
};

const warmKeyframe = keyframes`
  0% { background: black; }
  25% {color : black}
  100 { background: brown; }
  200% { background: brown; }
`;

const CenteredWithinParent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  animation: ${warmKeyframe} 1000ms infinite;
`;

export default ConfettiPiece;
