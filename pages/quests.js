import Head from "next/head";
import Layout from "../components/layout";

//Quests Page component
const Quests = () => {
  return (
    <>
      <Head>
        <title>Quests</title>
        <link rel="icon" href="../images/favicon.png" />
      </Head>

      <Layout>
        <h1>Quests Page</h1>
      </Layout>
    </>
  );
};

// export component
export default Quests;
