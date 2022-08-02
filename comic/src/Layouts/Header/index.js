import React from "react";
import styled from "styled-components";
import PrimarySearchAppBar from "./AppBar";

export default function Header() {
  return (
    <>
      {/* <HeaderStyle>
        <span className="logo">Comic</span>
      </HeaderStyle> */}
      <PrimarySearchAppBar />
    </>
  );
}
const HeaderStyle = styled.div`
  .logo {
    font-size: 2.5rem;
    background: linear-gradient(to right, #ffc93c 0%, #ff6a3c 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;
