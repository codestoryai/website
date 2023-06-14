"use client";

import {
  Box,
  Card,
  CardBody,
  Center,
  Grid,
  GridItem,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Center height="100vh" paddingX="24">
      <Grid width="full" templateColumns="repeat(12,minmax(0,1fr))" gap={4}>
        <GridItem position="relative" colStart={3} colSpan={8}>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            textAlign="center"
            lineHeight="tall"
          >
            Plan. Debug.
            <br />
            Reason.
          </Text>
          <Box position="absolute" inset={0} display="flex" alignItems="center">
            <Card
              height={20}
              width="100%"
              borderRadius="2xl"
              opacity={0.9}
              backgroundColor={["transparent"]}
              backdropFilter="auto"
              backdropBlur="6px"
              variant="outline"
            >
              <CardBody>
                <Stack direction="row" h="full">
                  <Skeleton width={1} />
                  <Text fontSize="2xl" marginLeft={2}>
                    Placeholder
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        </GridItem>
      </Grid>
    </Center>
  );
}
