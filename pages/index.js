import Head from "next/head";
import Layout from "../components/layout";

// index component
const Index = ({ teams }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="../images/favicon.png" />
      </Head>

      <main>
        <Layout />
      </main>
    </>
  );
};

// export component
export default Index;
