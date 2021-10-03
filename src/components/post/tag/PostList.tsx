import React from "react";
import { PostContent } from "../../../lib/posts";
import PostItem from "../blog/PostItem";
import TagLink from "../blog/TagLink";
import Pagination from "../../pagination/Pagination";
import { TagContent } from "../../../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  tag: TagContent;
  pagination: {
    current: number;
    pages: number;
    show: boolean;
  };
};
export default function PostList({ posts, tags, tag, pagination }: Props) {
  const paginationEl = pagination.show ? (
    <Pagination
      current={pagination.current}
      pages={pagination.pages}
      link={{
        href: () => "/yazilar/tags/[[...slug]]",
        as: (page) => (page === 1 ? "/yazilar/tags/" + tag.slug : `/yazilar/tags/${tag.slug}/${page}`),
      }}
    />
  ) : (
    ""
  );

  return (
    <section>
      <ul className="categories">
        <li>
          <TagLink tag={{ slug: "tamamı", name: "Tamamı" }} active={false} />
        </li>
        {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} active={it.slug === tag.slug} />
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
