import { GetStaticProps } from "next";
import { Layout, OpenGraphMeta, BasicMeta, TwitterCardMeta, BlogPostList } from "../../components/index";
import config from "../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../lib/posts";
import { listTags, TagContent } from "../../lib/tags";

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
  const url = "/posts";
  const title = "Posts";
  return (
    <Layout>
      <h1 className="h1">Posts</h1>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <BlogPostList posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
    show: true,
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
