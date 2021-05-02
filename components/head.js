import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "Home Hub";
  const description = "Home Hub is a IoT based dashboard displaying information about the local environment.";
  const keywords = "iot, hackathon, nodemcu, web dashboard";
  const author = "BLAHAJGang";
  const twitter = "@blahaj";
  //const image = "/ogimage.png";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:url" content="home-hub.tech" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      {children}
    </Head>
  );
}
