import React from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Stack, Button, IconButton } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
const Wrap = styled.article`
  width: 100vw;
  height: 100vh;
  background-image: ${({ bgImage }) => `url('/images/${bgImage}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem 0;
  flex-direction: column;
`;
const ButtonStyled = styled(Button)`
  background-color: ${({ dark }) => (dark ? "#f33654" : "#f4f4f4")} !important;
  color: ${({ dark }) => (dark ? "#fff" : "#111")} !important;
  border-radius: 50px !important;
  font-weight: 600 !important;
  padding: 0 !important;
  width: 200px;
  height: 40px !important;
  font-size: 13px !important;
`;
const animateArrowDown = keyframes`
  0%, 10%, 20%, 30%, 50%, 70%, 90%, 100% {
    transform: translateY(0);
  }
  40%{
    transform:translateY(5px);
  }
  60% {
    transform: translateY(3px)
  }
`;

const ArrowDown = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  height: 30px;
  overflow: hidden;

  & .icon {
    animation: ${animateArrowDown} 0.5s ease-in-out infinite;
  }
`;

const Section = ({
  title,
  desc,
  leftButton,
  rightButton,
  icon,
  bgImage,
  firstSection,
  id,
}) => {
  return (
    <Wrap bgImage={bgImage} id={id}>
      <Stack
        textAlign="center"
        width="90vw"
        mx="auto"
        mt={`${firstSection ? "40px" : null}`}
      >
        <Typography variant="h4">{title}</Typography>
        {desc && (
          <Typography variant="subtitle1" sx={{ textTransform: "capitalize" }}>
            {desc}
          </Typography>
        )}
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: "14px", sm: "20px" },
        }}
      >
        <ButtonStyled disableElevation variant="contained">
          {leftButton}
        </ButtonStyled>
        {rightButton && (
          <ButtonStyled disableElevation dark variant="contained">
            {rightButton}
          </ButtonStyled>
        )}
      </Stack>
      {icon && (
        <ArrowDown>
          <IconButton>
            <MdKeyboardArrowDown
              color="white"
              fontSize="30px"
              className="icon"
            />
          </IconButton>
        </ArrowDown>
      )}
    </Wrap>
  );
};

export default Section;
