import React, { useState } from "react";
import Script from "next/script";
import { ThemeProvider } from "fictoan-react";

import "video-react/dist/video-react.css";
import { CrucibleLightTheme } from "../styles/Crucible.light.theme";
import { CrucibleDarkTheme } from "../styles/Crucible.dark.theme";
import { GlobalStyle } from "../styles/Global.styled";

//  Local assets  =============================================================
import "../styles/fonts.css";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }) {
  let [currentTheme, setCurrentTheme] = useState("dark");

  const toggleTheme = () => {
    if (currentTheme === "light") {
      setDocsTheme("dark");
    } else {
      setDocsTheme("light");
    }
  };

  const setDocsTheme = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };

  const modifiedPageProps = { ...pageProps, toggleTheme };

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="ga-analytics">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `}
      </Script>

      <ThemeProvider theme={currentTheme === "light" ? CrucibleLightTheme : CrucibleDarkTheme}>
        <GlobalStyle />

        <Header />
        <Component {...modifiedPageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
