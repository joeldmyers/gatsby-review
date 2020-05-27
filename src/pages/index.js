import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import usePosts from "../hooks/use-posts";

export default () => {
  const posts = usePosts();
  return (
    <>
      <Layout>
        <Link to="/about">About</Link>
        <h2>Read my Blog</h2>
        {posts.map((post) => (
          <pre>{JSON.stringify(post, null, 2)}</pre>
        ))}
      </Layout>
    </>
  );
};
