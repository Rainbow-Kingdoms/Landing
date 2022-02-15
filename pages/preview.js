import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import ReactImageZoom from "react-image-zoom";

const props = {
  width: 780,
  height: 585,
  zoomWidth: 780,
  zoomPosition: "original",
  img: "/assets/preview.png",
};

const propsMobile = {
  width: 390,
  height: 292,
  zoomWidth: 375,
  zoomPosition: "original",
  img: "/assets/preview.png",
};

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
        <div className="container mx-auto py-20">
          <div className="md:flex justify-center items-center hidden">
            <div className="overflow-hidden">
              <ReactImageZoom {...props} />
            </div>
          </div>

          <div className="flex justify-center items-center md:hidden">
            <div className="overflow-hidden">
              <ReactImageZoom {...propsMobile} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
