import Head from "next/head";
import Layout from "../components/layout";

//Account page component
const Accounts = () => {

  // return jsx
  return (
    <>
      <Head>
        <title>Accounts</title>
        <link rel="icon" href="../images/favicon.png" />
      </Head>

      <Layout>Accounts page</Layout>
    </>
  );
};

// export component
export default Accounts;
