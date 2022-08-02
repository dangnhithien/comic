import { Container } from "@mui/material";
import Header from "Layouts/Header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Container maxWidth="sm">
        <Header />
        {children}
      </Container>
    </>
  );
};

export default Layout;
