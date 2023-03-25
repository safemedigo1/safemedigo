import { ContextProvider } from "@/context/store";
import "@/styles/globals.scss";
import NoSsr from "@mui/base/NoSsr";
import CssBaseline from "@mui/material/CssBaseline";
import { Layout } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <NoSsr>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NoSsr>
    </ContextProvider>
  );
}
