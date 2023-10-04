import Head from "next/head";
import Layout from "../components/layout";

//Leaderboard component
const Leaderboard = () => {
  return (
    <>
      <Head>
        <title>Leaderboard</title>
        <link rel="icon" href="../images/favicon.png" />
      </Head>

      <Layout>
        <h1>Leaderboard</h1>
      </Layout>
    </>
  );
};

// export component
export default Leaderboard;
