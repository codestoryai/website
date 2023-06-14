import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

export const Typewriter = ({ text = "" }) => {
  const [visibleText, setVisibleText] = useState<string>("");
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    let cursorInterval = setInterval(() => setCursorVisible((v) => !v), 500);
    let typeInterval = setInterval(() => {
      setVisibleText((v) => {
        if (v.length < text.length) {
          return text.slice(0, v.length + 1);
        } else {
          clearInterval(typeInterval);
        }
        return v;
      });
    }, 10);
    return () => {
      clearInterval(cursorInterval);
      clearInterval(typeInterval);
    };
  }, [text]);

  return (
    <Text
      whiteSpace="pre-wrap"
      overflowY="hidden"
      fontSize={["lg", "xl", "xl", "xl", "2xl"]}
      color="#eebc59"
    >
      {visibleText}
      <span style={{ visibility: cursorVisible ? "visible" : "hidden" }}>
        |
      </span>
    </Text>
  );
};
