import styled from "styled-components";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import { CgClose } from "react-icons/cg";
const SidebarStyled = styled.aside`
  position: fixed;
  top: 0;
  right: ${({ toggle }) => (toggle ? "0" : "-100%")};
  z-index: 9999;
  width: 250px;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 50px 10px 0 10px;
  display: flex;
  flex-direction: column;
  transition: right 0.4s ease-in;
`;
const LinkStyled = styled(Link).attrs({
  variant: "subtitle2",
  underline: "none",
})`
  color: #111 !important;
  padding: 8px 0;
  border-bottom: 1px solid #aaa;

  &:last-of-type {
    border-bottom: none;
  }
`;
const IconClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
const Sidebar = ({ toggle, setToggle }) => {
  return (
    <SidebarStyled toggle={toggle}>
      <LinkStyled href="#">Model S</LinkStyled>
      <LinkStyled href="#">Model 3</LinkStyled>
      <LinkStyled href="#">Model X</LinkStyled>
      <LinkStyled href="#">Model Y</LinkStyled>
      <LinkStyled href="#">Existing Inventory</LinkStyled>
      <LinkStyled href="#">Used Inventory</LinkStyled>
      <LinkStyled href="#">Trade-in</LinkStyled>
      <LinkStyled href="#">Cybertrack</LinkStyled>
      <LinkStyled href="#">Roodster</LinkStyled>
      <LinkStyled href="#">Semi</LinkStyled>
      <LinkStyled href="#">Utilities</LinkStyled>
      <LinkStyled href="#">Test Drive</LinkStyled>

      <IconClose>
        <IconButton onClick={() => setToggle(false)}>
          <CgClose fontSize="18px" color="#111" />
        </IconButton>
      </IconClose>
    </SidebarStyled>
  );
};

export default Sidebar;
