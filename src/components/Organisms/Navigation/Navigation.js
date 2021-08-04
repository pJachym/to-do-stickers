import React from "react";
import { Wrapper, Logo, StyledLink } from "./Navigation.styles";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <p>
          <span>Stickers</span>
        </p>
      </Logo>
      <StyledLink to="/stickers">Stickers</StyledLink>
      <StyledLink to="/add-sticker">Add sticker</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
