import Head from "next/head";
import Layout from "../components/layout";

//Notifications component
const Notifications = () => {
  return (
    <>
      <Head>
        <title>Notifications</title>
        <link rel="icon" href="../images/favicon.png" />
      </Head>

      <Layout>
        <h1> Notifications</h1>
      </Layout>
    </>
  );
};

// export component
export default Notifications;
