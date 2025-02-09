import React from "react";
import { TextContainer, WordGradient, VenueText, StyledButton, titleWords } from "./GradientTextStyles.js";

const GradientText = () => {
  return (
    <>
      <TextContainer>
        {titleWords.map((word, index) => (
          <WordGradient key={index} $startColor={word.startColor} $endColor={word.endColor} $delay={word.delay}>
            {word.text}
          </WordGradient>
        ))}
      </TextContainer>

      <VenueText>
        BIT SINDRI-DHANBAD <br />
        JHARKHAND, INDIA
      </VenueText>

      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <StyledButton>Register Now</StyledButton>
      </div>
    </>
  );
};

export default GradientText;
