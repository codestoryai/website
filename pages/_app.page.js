import React, { useState } from "react";
import Script from "next/script";
import "video-react/dist/video-react.css";
import { GlobalStyle } from "../styles/Global.styled";

//  Local assets  =============================================================
import "../styles/fonts.css";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";
import { themeCssVars } from "@/styles/theme";

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
    <div>
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

      <GlobalStyle />

      <Header />
      <Component {...modifiedPageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
