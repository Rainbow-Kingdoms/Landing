import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Preview() {
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
        <div className="container mx-auto py-2">
          <div className="text-center px-3 lg:px-0">
            <div className="block md:hidden">
              <Image
                src="/assets/roadmap.png"
                height={700}
                width={700}
                alt="Rainbow Kingdoms"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
