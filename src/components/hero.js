import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const ImageBackground = styled("div")`
  background-image: url("/images/pink-puppy.jpg");
  background-size: calc(100% / 3);
`;

const TextBox = styled("div")`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;
  height: 50vh;

  + * {
    margin-top: 0;
  }

  h1 {
    text-shadow: 1px 1px 1px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <ImageBackground>
      <TextBox>
        <h1>Gatsby Demo &hearts;</h1>
        <p>
          Hello there. <Link to="/about">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  );
};
export default Hero;
