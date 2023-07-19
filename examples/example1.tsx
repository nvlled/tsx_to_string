import {
  h,
  toString,
  ComponentChildren,
} from "https://deno.land/x/jsx_to_string/mod.ts";

function Layout({
  title,
  children,
}: {
  title: string;
  children: ComponentChildren;
}) {
  return (
    <html>
      <head>
        <title>{title} Example</title>
        <link rel="stylesheet" href="assets/style.css" />
      </head>
      <body>
        <div className="contents">
          <h1
            style={{
              color: "tomato",
              backgroundColor: "#222",
              textAlign: "center",
            }}
          >
            Example
          </h1>
          {children}
        </div>
      </body>
    </html>
  );
}

const homePage = (
  <Layout title={"Home"}>
    <p>This is an example page.</p>
  </Layout>
);

console.log(toString(homePage));
