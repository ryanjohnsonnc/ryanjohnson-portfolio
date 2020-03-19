import React from "react";
import styled from "@emotion/styled";

const LogoContainer = styled("div")`
    color: black;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
`

const Logo = () => (
  <LogoContainer>
    Ryan Johnson
  </LogoContainer>
);

export default Logo;
