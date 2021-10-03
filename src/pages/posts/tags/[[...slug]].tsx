import { GetStaticPaths, GetStaticProps } from "next";
import { Layout, OpenGraphMeta, BasicMeta, TwitterCardMeta, TagPostList } from "../../../components/index";
import config from "../../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../../lib/posts";
import { getTag, listTags, TagContent } from "../../../lib/tags";
import Head from "next/head";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  tag: TagContent;
  page?: string;
  pagination: {
    current: number;
    pages: number;
    show: boolean;
  };
};
export default function Index({ posts, tags, tag, pagination, page }: Props) {
  const url = `/yazilar/tags/${tag.name}` + (page ? `/${page}` : "");
  const title = tag.name;
  const description = `Özel ilgi alanı ${tag.name} olan Klinik Psikolog ${config.author}'un bu konuda yazdığı tüm yazılara ulaşabilirsiniz. `;
  return (
    <Layout>
      <h1 className="h1">Yazılarım</h1>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <TagPostList posts={posts} tags={tags} tag={tag} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queries = params.slug as string[];
  const [slug, page] = [queries[0], queries[1]];
  const posts = listPostContent(page ? parseInt(page as string) : 1, config.posts_per_page, slug);
  const tags = listTags();
  const tag = getTag(slug);
  const pagination = {
    current: page ? parseInt(page as string) : 1,
    pages: Math.ceil(countPosts(slug) / config.posts_per_page),
    show: true,
  };
  const props: {
    posts: PostContent[];
    tags: TagContent[];
    tag: TagContent;
    pagination: { current: number; pages: number; show: boolean };
    page?: string;
  } = { posts, tag, pagination, tags };
  if (page) {
    props.page = page;
  }
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listTags().flatMap((tag) => {
    const pages = Math.ceil(countPosts(tag.slug) / config.posts_per_page);
    return Array.from(Array(pages).keys()).map((page) =>
      page === 0
        ? {
            params: { slug: [tag.slug] },
          }
        : {
            params: { slug: [tag.slug, (page + 1).toString()] },
          }
    );
  });
  return {
    paths: paths,
    fallback: false,
  };
};
