import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>About Me</h1>
    <p>
      This is a demo blog made by Joel Myers, following along on Intro to Gatsby
      from Front End Masters
    </p>
    <Link to="/">&larr; back home</Link>
  </Layout>
);
