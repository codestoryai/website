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
  Show,
  SlideFade,
  Spacer,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Typewriter } from "@/components/typewriter";

import { sampleQueries } from "./data";

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
      width="100vw"
      minHeight="100vh"
      overflow="hidden"
      paddingX={[4, 8, 8, 8, 24]}
      paddingY={[4, 6, 6, 6, 8]}
      color="white"
      backgroundColor="#121919"
      backgroundImage={`url("/bg.svg")`}
      backgroundSize={"cover"}
    >
      <Flex>
        <Box>
          <Text fontSize={["xl", "2xl", "2xl", "2xl", "3xl"]} fontWeight="bold">
            CodeStory.AI
          </Text>
          <Badge backgroundColor="#eebc59">Coming soon!</Badge>
        </Box>
        <Spacer />
        <Show above="sm">
          <Tooltip label="COMING SOON!" aria-label="COMING SOON!">
            <Card
              variant="outline"
              backgroundColor="transparent"
              paddingY="4"
              paddingX="8"
              cursor="not-allowed"
            >
              <Stack direction="row" alignItems="center" justify="center">
                <Text color="white">Download for</Text>
                <Image
                  src="/vscode.svg"
                  width={40}
                  height={40}
                  alt="VSCode logo"
                />
              </Stack>
            </Card>
          </Tooltip>
        </Show>
      </Flex>
      <Center flex="1">
        <Grid width="full" templateColumns="repeat(12,minmax(0,1fr))" gap={4}>
          <GridItem
            position="relative"
            colStart={[1, 2, 2, 2, 3]}
            colSpan={[12, 10, 10, 10, 8]}
          >
            <Text
              fontSize={["xl", "3xl", "3xl", "3xl", "5xl"]}
              fontWeight="bold"
              textAlign="center"
            >
              Plan. Debug. Reason.
            </Text>
            <Card
              height={["75px", "75px", "90px", "90px", "75px"]}
              width="100%"
              borderRadius={["lg", "xl", "xl", "xl", "2xl"]}
              opacity={0.9}
              backgroundColor={["transparent"]}
              backdropFilter="auto"
              backdropBlur="6px"
              variant="outline"
              marginY="2"
            >
              <CardBody padding={["2", "3", "3", "3", "4"]}>
                <Fade in={true} key={sampleQueries[activeQuery].query}>
                  <Typewriter
                    key={sampleQueries[activeQuery].query}
                    text={sampleQueries[activeQuery].query}
                  />
                </Fade>
              </CardBody>
            </Card>
            <Text
              fontSize={["xl", "3xl", "3xl", "3xl", "5xl"]}
              fontWeight="bold"
              textAlign="center"
            >
              Within your IDE.
            </Text>
          </GridItem>
          <GridItem
            colStart={[1, 2, 2, 2, 4]}
            colSpan={[12, 10, 10, 10, 6]}
            marginY="4"
          >
            <SlideFade
              in={true}
              offsetY="200px"
              reverse={false}
              key={sampleQueries[activeQuery].query}
            >
              <Card
                height="40vh"
                bgColor="131c1c"
                color="white"
                overflow="hidden"
                variant="outline"
                backgroundColor="#121919"
                borderColor="rgb(238, 188, 89)"
                boxShadow="0 0 16px rgba(238, 188, 89, 0.6);"
              >
                <CardBody>{sampleQueries[activeQuery].response}</CardBody>
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  height="25%"
                  backgroundImage="linear-gradient(to bottom, rgba(19, 28, 28, 0), rgba(26, 28, 28, 1));"
                />
              </Card>
            </SlideFade>
          </GridItem>
          <GridItem colStart={[1, 2, 2, 2, 4]} colSpan={[12, 10, 10, 10, 6]}>
            <Center>
              <Text fontSize={["lg", "xl", "xl", "xl", "2xl"]} marginRight={3}>
                Backed by
              </Text>
              <Show above="sm">
                <Image
                  src="/yc_logo.svg"
                  width={200}
                  height={200}
                  alt="Y Combinator Logo"
                />
              </Show>
              <Show below="sm">
                <Image
                  src="/yc_logo.svg"
                  width={150}
                  height={150}
                  alt="Y Combinator Logo"
                />
              </Show>
            </Center>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
}
