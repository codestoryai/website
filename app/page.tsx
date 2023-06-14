"use client";

import {
  Badge,
  Box,
  Card,
  CardBody,
  Center,
  Fade,
  Flex,
  Grid,
  GridItem,
  SlideFade,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { TypeWriterText } from "./page.styled";

const sampleQueries = [
  {
    query: "I want to add a generated_at filter to the reports page",
    response: <Text>Response 1</Text>,
  },
  {
    query: "CPU usage is spiking on production on every file upload",
    response: <Text>Response 2</Text>,
  },
  {
    query: "Open payment consumer for Credit Card transactions",
    response: <Text>Response 3</Text>,
  },
];

export default function Home() {
  const [activeQuery, setActiveQuery] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuery((activeQuery + 1) % sampleQueries.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeQuery]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      paddingX="24"
      paddingY="8"
      color="white"
      backgroundColor="#121919"
      backgroundImage="url(/confetti.svg)"
    >
      <Flex>
        <Box>
          <Text fontSize="3xl" fontWeight="bold">
            CodeStory.AI
          </Text>
          <Badge backgroundColor="#eebc59">Coming soon!</Badge>
        </Box>
        <Spacer />
        <Card variant="outline" backgroundColor="transparent" padding="4">
          <Stack direction="row" alignItems="center" justify="center">
            <Text color="white">Download for</Text>
            <Image src="/vscode.svg" width={40} height={40} alt="VSCode logo" />
          </Stack>
        </Card>
      </Flex>
      <Center flex="1">
        <Grid width="full" templateColumns="repeat(12,minmax(0,1fr))" gap={4}>
          <GridItem position="relative" colStart={3} colSpan={8}>
            <Text fontSize="6xl" fontWeight="bold" textAlign="center">
              Plan. Debug. Reason.
            </Text>
            <Card
              height={20}
              width="100%"
              borderRadius="2xl"
              opacity={0.9}
              backgroundColor={["transparent"]}
              backdropFilter="auto"
              backdropBlur="6px"
              variant="outline"
              marginY={"-2"}
            >
              <CardBody>
                <Stack direction="row" h="full">
                  <Fade in={true} key={sampleQueries[activeQuery].query}>
                    <TypeWriterText
                      fontSize="2xl"
                      marginLeft={2}
                      fontWeight="bold"
                      color="#eebc59"
                    >
                      {sampleQueries[activeQuery].query}
                    </TypeWriterText>
                  </Fade>
                </Stack>
              </CardBody>
            </Card>
            <Text fontSize="6xl" fontWeight="bold" textAlign="center">
              Within your IDE.
            </Text>
          </GridItem>
          <GridItem colStart={4} colSpan={6}>
            <SlideFade
              in={true}
              offsetY="200px"
              reverse={false}
              key={sampleQueries[activeQuery].query}
            >
              <Card
                height="md"
                bgGradient="linear(to-b, #131c1c, #1a1c1c)"
                color="white"
              >
                <CardBody>{sampleQueries[activeQuery].response}</CardBody>
              </Card>
            </SlideFade>
          </GridItem>
          <GridItem colStart={4} colSpan={6}>
            <Center>
              <Text fontSize={"2xl"} marginRight={3}>
                Backed by
              </Text>
              <Image
                src="/yc_logo.svg"
                width={200}
                height={200}
                alt="Y Combinator Logo"
              />
            </Center>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}
