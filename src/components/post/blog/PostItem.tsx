import { PostContent } from "../../../lib/posts";
import { format, formatISO } from "date-fns";
import config from "../../../lib/config";
import Link from "next/link";
import Image from "next/image";

import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
        <div className="container">
          <div className="img-wrapper">
            <Image
              layout="responsive"
              src={post.image ? post.image.src : `/images/psikoloji.jpg`}
              width="1080"
              height="1080"
              className="post-layout-image"
              alt={post.image ? post.image.alt : "psikoloji"}
            />
          </div>
          <div className="meta content-padding">
            <Image layout="fixed" src={"/images/author.jpg"} width="50px" height="50px" className="meta-image" />
            <p className="author">Psikolog {config.author}</p>
            <time dateTime={formatISO(parseISO(post.date))} className="time">
              <span>{format(parseISO(post.date), "dd.MM.yyyy")}</span>
            </time>
          </div>
          <h2 className="content-padding h2">{post.title}</h2>
          <p className="content content-padding">{post.seo_description}</p>
          <style jsx>
            {`
              .container {
                width: 100%;
                margin: 0 auto;
                cursor: pointer;
              }
              .container:hover {
                color: black;
              }
              .img-wrapper {
                cursor: pointer;
                box-shadow: 0 0 1px var(--dark-color-primary);
              }
              .content-padding {
                padding: 1rem 1rem 0;
              }
              .meta {
                display: grid;
                grid-template-columns: 50px 1fr;
                grid-template-rows: 25px 25px;
                margin: 0;
                font-size: var(--text-sm);
              }
              .author {
                grid-column: 2 / 3;
                grid-row: 1 / 2;
                margin: 0;
                padding: 0 0.5em;
              }
              .time {
                grid-column: 2 / 3;
                grid-row: 2 / 3;
                padding: 0 0.5em;
                opacity: 0.6;
              }
              .content {
                grid-column: 1 / -1;
                grid-row: 3 / 4;
                margin: 0;
                padding-bottom: 1rem;
              }
              h2 {
                font-weight: 600;
                font-size: 1.7rem;
                margin: 0;
                font-family: var(--font-primary);
                text-transform: capitalize;
              }
              @media (min-width: 769px) {
                .container {
                  width: 100%;
                }
              }
            `}
          </style>
        </div>
      </a>
    </Link>
  );
}
