import React from "react";
import styled from "styled-components";
import heroWave1Image from "../../images/waves/hero-wave1.svg";
import heroWave2Image from "../../images/waves/hero-wave2.svg";
import heroWave3Image from "../../images/waves/hero-wave3.svg";
import heroWave3DarkImage from "../../images/waves/hero-wave3-dark.svg";

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave
        src={heroWave1Image}
        style={{ top: "100px", filter: "blur(60px)" }}
      />
      <Wave src={heroWave2Image} style={{ top: "350px" }} />
      <BottomWave src={heroWave3Image} style={{ top: "550px" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Wave = styled.img`
  position: absolute;
  z-index: -1;
  @media (min-width: 1440px) {
    width: 100%;
  }
`;

const BottomWave = styled(Wave)`
  @media (prefers-color-scheme: dark) {
    content: url(${heroWave3DarkImage});
  }
`;

const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`;
