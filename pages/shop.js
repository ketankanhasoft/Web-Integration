import Head from "next/head";
import Layout from "../components/layout";

//Shop Page component
const Shop = () => {

  // return jsx
  return (
    <>
      <Head>
        <title>Shop</title>
        <link rel="icon" href="../images/favicon.png" />
      </Head>

      <Layout>
        <h1>Shop</h1>
      </Layout>
    </>
  );
};

// export component
export default Shop;
