import { Box } from "@chakra-ui/react";
import { Highlight } from "prism-react-renderer";

export const CodeBlock = (props: { code: string; language: string }) => {
  return (
    <Box
      marginY={2}
      fontSize={["md", "lg"]}
      border="1px"
      borderColor="whiteAlpha.600"
    >
      <Highlight {...props}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre style={{ ...style, padding: "10px", overflow: "auto" }}>
            {tokens.map((line, i) => (
              <Box key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </Box>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};
