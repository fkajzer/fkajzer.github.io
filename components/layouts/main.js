import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

import Navbar from "../navbar";
import Model from "../3d-model";
import NoSsr from "../no-ssr";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Filip Kajzer - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <Model />
        </NoSsr>

        {children}
      </Container>
    </Box>
  );
};

export default Main;
