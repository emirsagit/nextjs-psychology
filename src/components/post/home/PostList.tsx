import React, { useState } from "react";
import { PostContent } from "../../../lib/posts";
import PostItem from "./PostItem";
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
  let [currentPosts, setCurrentPost] = useState(posts.slice(0, 6));
  let [selectedTag, setSelectedTag] = useState("all");

  function handleClick(e) {
    const { value } = e.target;
    setSelectedTag(value);
    setCurrentPost(value === "all" ? posts : posts.filter((it) => it.tags && it.tags.includes(value)).slice(0, 6));
  }

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
      <h2>Posts</h2>
      <div className={"categories"}>
        <button value="all" onClick={handleClick} className={selectedTag === "all" && "active"}>
          All
        </button>
        {tags.map((it, i) => (
          <button key={i} value={it.slug} onClick={handleClick} className={it.slug === selectedTag && "active"}>
            {it.name}
          </button>
        ))}
      </div>
      <div className={"posts"}>
        {currentPosts.map((it, i) => (
          <div key={i}>
            <PostItem post={it} />
          </div>
        ))}
        {paginationEl}
      </div>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          padding: var(--section-padding-y) 0;
          max-width: 1200px;
          width: var(--section-width);
          margin: 0 auto;
        }
        h2 {
          text-align: center;
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
        .active {
          opacity: 1;
          box-shadow: black 0 0 2px;
        }
        .categories {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.3em;
          margin-bottom: var(--padding-between-items);
        }
        @media (min-width: 400px) {
          .posts {
            display: grid;
            grid-template-columns: repeat(auto-fill, 350px);
            justify-content: center;
          }
        }
        @media (min-width: 769px) {
          .categories {
            display: flex;
          }
        }
      `}</style>
    </section>
  );
}
