import Head from "next/head";
import Layout from "../components/layout";

//Club page component
const Club = () => {

  // return jsx
  return (
    <>
      <Head>
        <title>Club</title>
        <link rel="icon" href="../images/favicon.png" />
      </Head>

      <Layout>
        <h1>Club</h1>
      </Layout>
    </>
  );
};

// export component
export default Club;
