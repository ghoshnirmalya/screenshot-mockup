import React from "react";
import Head from "next/head";
import Index from "@/components/pages/index";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Screenshot Mockup - Generate mockups for your screenshots</title>
      </Head>
      <Index />
    </>
  );
};

export default IndexPage;
