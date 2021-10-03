import { GetStaticProps } from "next";
import {
  Layout,
  OpenGraphMeta,
  BasicMeta,
  TwitterCardMeta,
  Resume,
  Services,
  HomePostList,
} from "../components/index";

import { countPosts, listPostContent, PostContent } from "../lib/posts";
import { listTags, TagContent } from "../lib/tags";
import config from "../lib/config";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
    show: boolean;
  };
};

export default function Index({ posts, tags, pagination }: Props) {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div>
        <Resume />
        <Services />
        <HomePostList posts={posts} tags={tags} pagination={pagination} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, 50);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
    show: false,
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
