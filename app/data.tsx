import { Box, Text } from "@chakra-ui/react";

import { Code, CodeBlock } from "@/components/code";

export const sampleQueries = [
  {
    query: "🧑‍💻 I want to add generatedAt as a filter on reports page",
    response: (
      <Box fontSize={["md", "lg", "xl"]}>
        🧙 The report page filter is currently implemented at{" "}
        <Code colorScheme="green" textDecoration="underline">
          /components/reports/filter.tsx
        </Code>
        . In order to introduce the new filter, first add{" "}
        <Code colorScheme="green">generatedAt</Code> to the type definition for{" "}
        <Code colorScheme="green">ReportFilterInput</Code>:<br />
        <CodeBlock
          code={`type ReportFilterInput = {
  id: string;
  testDate: Date;
  generatedAt: Date; // <-- add this line
}`}
          language="tsx"
        />
        <br />
        Then, update the <Code colorScheme="green">ReportFilter</Code> method to
        have a new state variable <Code colorScheme="green">generatedAt</Code>{" "}
        and update the <Code colorScheme="green">callback</Code> method to add
        the <Code colorScheme="green">generatedAt</Code> filter as so:
        <br />
        <CodeBlock
          code={`generatedAt: generatedAt?.toDate(),`}
          language="tsx"
        />
      </Box>
    ),
  },
  {
    query: "🧑‍💻 Memory usage is spiking on prod on every file upload",
    response: (
      <Box fontSize={["md", "lg", "xl"]}>
        <Text>
          🧙 File uploads are currently handled by the{" "}
          <Code colorScheme="green">upload</Code> method inside the{" "}
          <Code colorScheme="green">BillsRepository</Code> class. The file is
          read using Pandas as
          <CodeBlock
            code={`df: DataFrame = pd.read_csv(csv_file, encoding="ISO-8859-1", engine="python", dtype=dtypes)`}
            language="python"
          />
          after which several validations are run using the built-in
          vectorization operation from <Code colorScheme="green">df</Code> using{" "}
          <Code colorScheme="green">numpy</Code> and finally the dataframe is
          converted to CSV with
          <CodeBlock
            code={`df.to_csv(csv_buffer, index=False)`}
            language="python"
          />
          before being uploaded to S3.
          <br />
          <br />
          There seem to be 3 big bottlenecks here:
          <br />
          1. The entire file is read into memory as a Pandas DataFrame which
          could consume a lot of memory if large files are uploaded (say, over
          100k entries).
          <br />
          2. Vectorization can result in temporary Series, with a corresponding
          increase in memory usage proportional to the Series size.
        </Text>
      </Box>
    ),
  },
  {
    query: "🧑‍💻 Walk me through the payment processing consumer",
    response: (
      <Box fontSize={["md", "lg", "xl"]}>
        <Text>
          🧙 This codebase is using the{" "}
          <Code colorScheme="green">RichardKnop/machinery</Code> package to
          create worker threads that act as SQS message consumers. Every
          consumer implements the <Code colorScheme="green">Consumer</Code> type
          that is defined as below:
          <CodeBlock
            code={`type Consumer interface {
	Details() ConsumerDetails
}

type ConsumerDetails struct {
	Q        string
	Task     string
	Consumer ConsumerFunctionType // consumer function
}`}
            language="go"
          />
        </Text>
      </Box>
    ),
  },
];
