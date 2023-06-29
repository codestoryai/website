import localFont from "next/font/local";

const parse = localFont({
  src: [
    {
      path: "./fonts/Parse Grotesk Mono/AFParseGroteskMono-Thin.otf",
      weight: "100",
    },
    {
      path: "./fonts/Parse Grotesk Mono/AFParseGroteskMono-Light.otf",
      weight: "300",
    },
    {
      path: "./fonts/Parse Grotesk Mono/AFParseGroteskMono-Regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/Parse Grotesk Mono/AFParseGroteskMono-Bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/Parse Grotesk Mono/AFParseGroteskMono-Black.otf",
      weight: "900",
    },
  ],
});

export { parse };
