import React from "react";
import { Box, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

const primary = purple[500]; // #f44336

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "",
      }}
    >
      <Typography variant="h1" style={{ color: "#004d40" }}>
        The URL or page not found 404!!
      </Typography>
    </Box>
  );
};

export default ErrorPage;
