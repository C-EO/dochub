import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";

export default function BlogIndex({ more = "Read more" }) {
  return getPagesUnderRoute("/blog").map((page) => {
    // Alias `<a>` to avoid it being replaced by MDX components.
    // const A = "a";
    return (
      <div className="">
      <h3>
        <Link href={page.route} style={{ color: "inherit", textDecoration: "none" }} className="block font-semibold mt-8 text-2xl">
          {page.meta?.title || page.frontMatter?.title || page.name}
        </Link>
        </h3>
        <p className="opacity-80" style={{ marginTop: ".5rem" }}>
          {page.frontMatter?.description}{" "}
          <span className="inline-block">
            <Link href={page.route}>{more + " →"}</Link>
          </span>
        </p>
        {page.frontMatter?.date ? (
          <p className="opacity-50 text-sm">{page.frontMatter.date}</p>
        ) : null}
      </div>
    );
  });
};
