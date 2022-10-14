import Head from 'next/head'
import {Box, Button, Heading, HStack, Text} from "@chakra-ui/react"

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Ansh Patel</title>
        <meta name="description" content="My personal website"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Box style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column'
      }}>

        <Heading py={4} as="h1" size="2xl">Ansh Patel</Heading>

        <Text>Currently studying at University of Minnesota, Twin Cities</Text>

        <HStack my={4}>
          <Button colorScheme={"linkedin"}>
            <a href="https://www.linkedin.com/in/anshmpatel/" target="_blank" rel="noreferrer">LinkedIn</a>
          </Button>
          <Button colorScheme={"purple"}>
            <a href="https://github.com/anshpatelcs" target="_blank" rel="noreferrer">GitHub</a>
          </Button>
        </HStack>

        <pre>hi@anshpa.tel</pre>

      </Box>
    </Box>
  )
}
