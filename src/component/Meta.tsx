import Head from "next/head";

export default function Meta() {
  return (
    <>
      <Head>
        <title>SkyScraperSkill</title>
        <meta name="description" content="This is the homepage of my awesome website." />
        <meta name="keywords" content="Next.js, SEO, React" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="My Awesome Website - Home" />
        <meta property="og:description" content="This is the homepage of my awesome website." />
        <meta property="og:image" content="/images/og-image.jpg" />
      </Head>
    </>
  );
}
