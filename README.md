# Gatsby Review

Review of Gatsby - following along from FEM class "Introduction to Gatsby"

Gatsby removes boilerplate for getting started and deploying app.

Gatsby is an orchestration layer for taming the content mesh and its many sources of data.

"It's a Progressive Web App generator designed to make the right thing the easy thing"

They claim that "the monolithic CMS is dying..." I dunno. Headless, etc. I get it, there are use cases.

He notes there is headless WordPress. Obviously Contentful is another example.

They call this the "Content Mesh". You can bring it in from various sites and normalize it all.

## Details

- Follows PRPL pattern
- **Generates only static assets - no server required**
- Optimizes and lazy-loads assets
- lets developers keep control. (vs. create-react-app, for ex.)

### Notes to self

New React fragment cool:

```
<>
component
</>
```

To observe data -

```
{posts.map((post) => (
  <pre>{JSON.stringify(post, null, 2)}</pre>
))}

```

Rather than extraneous divs.

### Custom hooks to retrieve GraphQL data

Here is an example of using a custom hook to retrieve the data we want once, and then we can re-use that data retrieval across the app - a very scalable approach.

### MDX

A way to enable React components inside of markdown.
