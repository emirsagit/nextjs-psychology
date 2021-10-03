import { TherapylinkContent } from "../../lib/therapies";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  therapy: TherapylinkContent;
  handleClick: any;
};

export default function DropDown({ therapy, handleClick }: Props) {
  const { query } = useRouter();

  return (
    <Link href={therapy.path}>
      <a onClick={() => handleClick()} className="link">
        <li key={therapy.path} className={query.service === therapy.slug ? "active-link" : null}>
          {therapy.title}
        </li>
        <style jsx>
          {`
            li {
              font-size: var(--text-md);
              margin-bottom: 1.3em;
              color: white;
            }
            @media (min-width: 769px) {
              li {
                padding: 0.5em 0;
                font-weight: 400;
                widht: 100%;
                text-align: center;
                margin-bottom: 0;
                color: var(--dark-color-primary);
              }
              li:hover {
                background-color: var(--dark-color-primary);
                color: white;
              }
              .active-link {
                background-color: var(--dark-color-primary);
                color: white;
              }
            }
          `}
        </style>
      </a>
    </Link>
  );
}
