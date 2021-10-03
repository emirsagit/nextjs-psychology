import { format, formatISO, parseISO } from "date-fns";
import config from "../../../../lib/config";
import Image from "next/image";
import styles from "../../../../../public/styles/content.module.css";
import { Layout, OpenGraphMeta, BasicMeta, TwitterCardMeta, JsonLdMeta, Copyright, TagButton } from "../../../index";
import { getTag } from "../../../../lib/tags";

type Props = {
  post: any;
  children: React.ReactNode;
};
export default function PostLayout({ post, children }: Props) {
  const date = parseISO(post.date);
  const { slug, seo_title, seo_description, title, image, tags } = post;
  const keywords = tags.map((it) => getTag(it).name);
  return (
    <Layout>
      <BasicMeta url={`/posts/${slug}`} keywords={keywords} title={seo_title} description={seo_description} />
      <TwitterCardMeta url={`/posts/${slug}`} title={seo_title} description={seo_description} />
      <OpenGraphMeta url={`/posts/${slug}`} title={seo_title} description={seo_description} />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={seo_title}
        keywords={keywords}
        date={date}
        author=""
        description={seo_description}
      />
      <div className={"container"}>
        <div className="img-wrapper">
          <Image layout="responsive" src={image ? image.src : "/images/img1.jpg"} width="1080" height="1080" />
        </div>
        <article>
          <header>
            <h1>{title}</h1>
            <div className="metadata">
              <div className="author">
                <Image
                  layout="fixed"
                  src={"/images/author.jpg"}
                  width="40px"
                  height="40px"
                  className="meta-image"
                />
                <p>{config.author}</p>
              </div>
              <time dateTime={formatISO(date)} className="date">
                <span>{format(date, "dd.MM.yyyy")}</span>
              </time>
            </div>
          </header>
          <div className={styles.content}>{children}</div>
          <ul className={"tag-list"}>
            {tags.map((it, i) => (
              <li key={i}>
                <TagButton tag={getTag(it)} />
              </li>
            ))}
          </ul>
        </article>
        <footer>
          <Copyright />
        </footer>
      </div>
      <style jsx>
        {`
          .container {
            max-width: 50rem;
            width: 100%;
            z-index: 0;
            margin: 3rem auto;
          }
          header {
            padding: 0 2rem;
          }
          .metadata {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1em 0;
            font-size: var(--text-sm);
          }
          .img-wrapper {
            width: 100%;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
          }
          .author {
            display: flex;
            align-items: center;
          }
          .metadata p {
            margin: 0;
            padding-left: 0.5em;
          }
          .date {
            opacity: 0.7;
          }
          article {
            flex: 1 0 auto;
          }
          h1 {
            margin: 1.5rem 0 0.5rem;
            font-size: 2.25rem;
          }
          .tag-list {
            list-style: none;
            text-align: right;
            margin: 1.75rem 0 0 0;
            padding: 0;
            padding: 0 2rem;
          }
          .tag-list li {
            display: inline-block;
            margin-left: 0.5rem;
          }
          .social-list {
            margin-top: 3rem;
            text-align: center;
          }

          @media (min-width: 769px) {
            .container {
              display: flex;
              flex-direction: column;
              box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            header {
              padding: 0 6rem;
            }
          }
        `}
      </style>
    </Layout>
  );
}
