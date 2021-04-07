import Link from "next/link";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Flex w='full' justify="center" align="center">Welcome</Flex>
    </>
  );
}
