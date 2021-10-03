import Link from "next/link";
import { TagContent } from "../../../lib/tags";

type Props = {
  tag: TagContent;
  active: boolean;
};
export default function Tag({ tag, active }: Props) {
  return (
    <Link
      href={tag.slug === "all" ? "/posts" : "/posts/tags/[[...slug]]"}
      as={tag.slug === "all" ? "/posts" : `/posts/tags/${tag.slug}`}
    >
      <a className={active ? "active" : "passive"}>
        #{tag.name}
        <style jsx>{`
          a {
            font-size: var(--text-sm);
            padding: 0.4em 0.7em;
            background-color: var(--light-color-secondary);
            color: var(--dark-color-primary);
            cursor: pointer;
            text-transform: capitalize;
            font-weight: 900;
            border: 1px solid var(--dark-color-primary);
            border-radius: 3px;
          }
          a:hover {
            opacity: 1;
            box-shadow: var(--dark-color-primary) 0 0 6px;
          }
          .active {
            opacity: 1;
            box-shadow: var(--dark-color-primary) 0 0 6px;
          }
          .passive {
            opacity: 0.7;
          }
        `}</style>
      </a>
    </Link>
  );
}
