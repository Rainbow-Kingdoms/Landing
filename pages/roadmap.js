import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>Rainbow Kingdoms</title>
        <meta
          name="description"
          content="Rainbow Kingdoms - Mint NFT Playing Cards, S2E & P2E"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="container mx-auto py-24">
          <div className="text-center px-3 lg:px-0">
            <Image
              src="/assets/roadmap.png"
              height={524}
              width={524}
              alt="Rainbow Kingdoms"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
