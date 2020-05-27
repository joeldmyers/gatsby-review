import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => {
  return (
    <>
      <Layout>
        <Link to="/about">About</Link>

        <h2>Read my Blog</h2>
      </Layout>
    </>
  );
};
