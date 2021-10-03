import React from "react";
import { PostContent } from "../../../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "../../pagination/Pagination";
import { TagContent } from "../../../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
    show: boolean;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  const paginationEl = pagination.show ? (
    <Pagination
      current={pagination.current}
      pages={pagination.pages}
      link={{
        href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
        as: (page) => (page === 1 ? null : "/posts/page/" + page),
      }}
    />
  ) : (
    ""
  );

  return (
    <section>
      <ul className="categories">
        <li>
          <TagLink tag={{ slug: "all", name: "All" }} active={true} />
        </li>
        {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} active={false} />
          </li>
        ))}
      </ul>
      <div className={"posts"}>
        {posts.map((it, i) => (
          <div key={i} className="post-item">
            <PostItem post={it} />
          </div>
        ))}
      </div>
      <div className="pagination">{paginationEl}</div>
      <style jsx>{`
        .categories {
          list-style-type: none;
          width: 100%;
          margin: 0 auto;
          padding: 0;
          width: var(--section-width);
          display: flex;
          flex-wrap: wrap;
          gap: 1em;
        }
        .posts {
          display: flex;
          flex-direction: column;
          gap: 2em;
        }
        .post-item {
          box-shadow: 0 0 1px var(--dark-color-primary);
          width: 90%;
          margin: 0 auto;
        }
        .pagination {
          margin-top: 2rem;
        }
        button {
          font-size: var(--text-sm: 0.875rem);
          padding: 0.3em 1.2em;
          background-color: var(--light-color-secondary);
          border: 1px solid var(--dark-color-primary);
          color: var(--dark-color-primary);
          cursor: pointer;
          text-transform: capitalize;
          border-radius: 2px;
          opacity: 0.7;
        }
        button:hover {
          opacity: 1;
          box-shadow: black 0 0 2px;
        }
        .categories {
          margin-bottom: var(--padding-between-items);
        }
        @media (min-width: 769px) {
          section {
            margin: 0 auto;
            max-width: 1200px;
            width: var(--section-width);
          }
          .pagination {
            grid-column: 2 / 3;
          }
          .posts {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1.5rem;
          }
          .post-item {
            width: calc(50% - 1.5rem);
          }
        }
        @media (min-width: 1100px) {
          .post-item {
            width: calc(100% / 3 - 1.5rem);
          }
        }
      `}</style>
    </section>
  );
}
