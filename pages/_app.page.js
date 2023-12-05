import React, { useState } from "react";
import Script from "next/script";
import "video-react/dist/video-react.css";
import { GlobalStyle } from "../styles/Global.styled";
import styled, { keyframes } from "styled-components";

//  Local assets  =============================================================
import "../styles/fonts.css";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";
import { themeCssVars } from "@/styles/theme";
import { motion, AnimatePresence } from "framer-motion";

const animateIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`;

const generateAnimationStyles = () => {
  let styles = "";
  for (let i = 1; i <= 20; i++) {
    styles += `
      *:nth-child(${i}) {
        animation-delay: ${i * 0.1}s;
      }
    `;
  }
  return styles;
};

const Animated = styled.div`
  opacity: 1;
  animation: ${animateIn} 1s ease;
  * {
    animation: ${animateIn} 1s ease;
  }

  ${generateAnimationStyles()}
`;

function MyApp({ Component, pageProps }) {
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
      <Animated>
        <Component {...pageProps} />
      </Animated>
      <Footer />
    </div>
  );
}

export default MyApp;
