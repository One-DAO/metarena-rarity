export const config = {
  env: "production",
  LOCAL_API_URL: "localhost:3000",
  API_URL: "metarena-rarity.vercel.app",
  COLLECTION_NAME: "Metarenas",
  COLLECTION_TITLE: "Metarenas",
  COLLECTION_DESCRIPTION:
    "Metarenas are the digital equivalent of stadiums, consisting of mutable NFTs that represent virtual venues in the esports metaverse and are the foundation for hosting experiences, earning token rewards, and building communities. Every Arena is unique and resides in its own region of the map called Districts. The first 1,000 Metarenas live in the Metropunk District, each with varying rarity and traits.",
  COLLECTION_IMG_LINK: "https://punkscape.xyz/og.png",
  CONTRACT: {
    // if you're not sure, set CONTRACT: {}, will remove opensea link
    CHAIN: "matic", //possible values of ethereum, matic (polygon), klatyn, solana
    ADDRESS: "0x86640CC8C305f10BB88Daa970932d2d48de39811",
  },
  WEIGHTS: {},
};
