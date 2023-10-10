import "@/styles/globals.scss";
import "@/styles/content-styles.css";

import NoSsr from "@mui/base/NoSsr";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import Script from "next/script";
import { Layout } from "../components";
import "nprogress/nprogress.css";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";
import "../styles/nprogress.css";
import { appWithTranslation } from "next-i18next";
import { Toaster } from "react-hot-toast";
import { Quicksand, Tajawal } from "@next/font/google";
import theme from "../styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { AppContext } from "../components/AppContext";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const taiwal = Tajawal({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function App({ Component, pageProps }) {
  const router = useRouter();

  const [treatmentSlugContexts, setTreatmentSlugContexts] = useState("default");
  return (
    <>
      <AppContext.Provider
        value={{ treatmentSlugContexts, setTreatmentSlugContexts }}
      >
        <ThemeProvider theme={theme}>
          <main
            className={`${
              router.locale === "ar" ? taiwal.className : quicksand.className
            }`}
            dir={`${router.locale === "ar" ? "rtl" : "ltr"}`}
          >
            <NoSsr>
              <CssBaseline />
              <Layout>
                <Head>
                  <meta name="description" content="Your description" />
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <Script id="google-tag-manager" strategy="afterInteractive">
                  {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K26NKMK');
      `}
                </Script>
                <Toaster
                  toastOptions={{
                    duration: 4000,
                    success: {
                      style: {
                        color: "#004747",
                        fontWeight: "bold",
                      },
                      iconTheme: {
                        primary: "#004747",
                        secondary: "#ffffff",
                      },
                    },
                    error: {
                      style: {
                        color: "red",
                        fontWeight: "bold",
                      },
                    },
                  }}
                />
                <Component {...pageProps} />
              </Layout>
            </NoSsr>
          </main>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default appWithTranslation(App);

App.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  return { ...appProps };
};
