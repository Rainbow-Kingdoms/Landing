import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
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
                src="/assets/sublogga.png"
                height={700}
                width={700}
                alt="Rainbow Kingdoms"
              />
            </div>
            <div className="flex items-center justify-center -top-20 md:top-0 relative">
              <div>
                <div className="leading-normal text-gray-200 text-base md:text-xl lg:text-2xl mb-6">
                  Mint NFT Playing Cards, S2E & P2E
                </div>
                <button
                  id="navAction"
                  className="mx-auto lg:mx-0 hover:underline text-black bg-white font-extrabold rounded lg:mt-0 py-2 px-4 shadow"
                >
                  Mint Cards
                </button>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/assets/sublogga.png"
                  height={700}
                  width={700}
                  alt="Rainbow Kingdoms"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
