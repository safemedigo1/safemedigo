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
      ...(await serverSideTranslations(locale, [
        "home",
        "navbar",
        "hero_section",
        "search_section",
        "help_section",
        "why_safemedigo",
        "treatments_section",
        "most_popular",
        "patient_stories",
        "safety_standards_section",
        "why_turky_section",
        "contact_details",
        "sec_navbar",
        "page_header_comp",
        "safety_standards_page",
        "blogs_page",
      ])),
    },
  };
}
