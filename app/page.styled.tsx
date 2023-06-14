import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const TypeWriterText = styled(Text)`
  overflow: hidden;
  border-right: 0.15em solid #a0aec0;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: typing 1s steps(40, end), blink-caret 0.75s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #a0aec0;
    }
  }
`;
