import React from "react";
import { Box, Container } from "@mui/material";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ErrorPage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "100vh",
        }}
      >
        <h1>Ooooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the {` `}
          <Link href="/">Homepage</Link>
        </p>
      </Box>
    </Container>
  );
};

export default ErrorPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar"])),
    },
  };
}
