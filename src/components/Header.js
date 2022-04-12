import styled from "styled-components";
import { Stack, Typography, Link, IconButton } from "@mui/material";
import { MdOutlineMenu } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useState } from "react";
const HeaderStyled = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img``;

const LinkStyled = styled(Link).attrs({
  variant: "subtitle1",
  underline: "none",
})`
  color: #111 !important;
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <HeaderStyled>
      <a href="/">
        <Logo src="/images/logo.svg" alt="logo" />
      </a>

      {/* items */}
      <Stack
        component="nav"
        direction="row"
        gap="35px"
        flex="1"
        justifyContent="center"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <LinkStyled href="#model-s">Model S</LinkStyled>
        <LinkStyled href="#model-y">Model Y</LinkStyled>
        <LinkStyled href="#model-3">Model 3</LinkStyled>
        <LinkStyled href="#model-x">Model X</LinkStyled>
        <LinkStyled href="#access">Accessories</LinkStyled>
      </Stack>
      {/* items */}
      <Stack direction="row" alignItems="center" gap="4px">
        <Typography variant="body2">SHOP TESLA ACCOUNT</Typography>
        <IconButton onClick={() => setToggle(true)}>
          <MdOutlineMenu fontSize="18px" />
        </IconButton>
      </Stack>
      {/* sidebar */}
      <Sidebar toggle={toggle} setToggle={setToggle} />
      {/* sidebar */}
    </HeaderStyled>
  );
};

export default Header;
