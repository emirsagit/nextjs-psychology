import { PostContent } from "../../../lib/posts";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
        <div className="img-wrapper">
          <Image layout="fill" src={post.image ? post.image.src : "/images/psikoloji.jpg"} objectFit="cover" />
        </div>
        <style jsx>
          {`
            .img-wrapper {
              width: 100%;
              height: 350px;
              position: relative;
              cursor: pointer;
              margin: 0.5em auto;
            }
            @media (min-width: 769px) {
              .img-wrapper {
                margin: 0 auto;
              }

              .img-wrapper::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                box-shadow: 0 0 0 400px inset rgba(0, 0, 0, 0.3);
                opacity: 1;
              }
              .img-wrapper:hover::after {
                opacity: 0;
              }
            }
          `}
        </style>
      </a>
    </Link>
  );
}
