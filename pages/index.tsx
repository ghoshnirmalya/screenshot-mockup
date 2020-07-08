import React from "react";
import Head from "next/head";
import Index from "@/components/pages/index";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Index />
    </>
  );
};

export default IndexPage;
