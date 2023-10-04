import Head from "next/head";
import Layout from "../components/layout";

//Adventures page component
const Adventures = () => {

  // return jsx
  return (
    <>
      <Head>
        <title>Adventures</title>
        <link rel="icon" href="../images/favicon.png" />
      </Head>

      <Layout>
        <h1>Adventures</h1>
      </Layout>
    </>
  );
};

// export component
export default Adventures;
