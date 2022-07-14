import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import MonstersIndex from "../utils/MonstersIndex";

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
        <div className="container mx-auto py-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Monster
                </th>
                <th scope="col" className="py-3 px-6">
                  Loot
                </th>
                <th scope="col" className="py-3 px-6">
                  Damage
                </th>
                <th scope="col" className="py-3 px-6">
                  HP
                </th>
                <th scope="col" className="py-3 px-6">
                  EXP
                </th>
                <th scope="col" className="py-3 px-6">
                  Rarity
                </th>
                <th scope="col" className="py-3 px-6">
                  Level
                </th>
              </tr>
            </thead>

            <tbody>
              {MonstersIndex.map((m, i) => (
                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Image src={m.image} height={50} width={25} />
                    <div className="ml-4">{m.name}</div>
                  </th>
                  <td className="py-4 px-6">
                    {m.loot.map((n, i) => (
                      <div className="mr-2" key={i}>{n.name}</div>
                    ))}
                  </td>
                  <td className="py-4 px-6">{`${m.dmg[0]} to ${m.dmg[1]}`}</td>
                  <td className="py-4 px-6">{m.hp}hp</td>
                  <td className="py-4 px-6">{m.xp}xp</td>
                  <td className="py-4 px-6">{m.rarity}</td>
                  <td className="py-4 px-6">{m.lvl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
}
