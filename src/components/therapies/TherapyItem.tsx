import { TherapyContent } from "../../lib/therapies";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  therapy: TherapyContent;
};

export default function TherapyItem({ therapy }: Props) {
  const [showText, setShowText] = useState(false);
  return (
    <Link href={"/terapi-cesitleri/" + therapy.slug}>
      <a className="link" onMouseEnter={() => setShowText(true)} onMouseLeave={() => setShowText(false)}>
        <div className="img-wrapper">
          <Image layout="fill" src={therapy.img1 ? therapy.img1 : "/images/psikoloji.jpg"} objectFit="cover" />
          {/* <Date date={parseISO(post.date)} /> */}
        </div>
        <h3>{therapy.title}</h3>
        <p>{therapy.seo_description}</p>
        <button>Devamı</button>
        <style jsx>
          {`
            a {
              display: grid;
              position: relative;
              grid-template-columns: 1fr;
              grid-template-rows: 125px 100px 1fr;
              align-items: center;
              justify-items: center;
              color: white;
            }
            .img-wrapper {
              width: 100%;
              grid-column: 1 / -1;
              grid-row: 1 / -1;
              height: 350px;
              position: relative;
              cursor: pointer;
            }
            h3 {
              z-index: 1;
              padding: 0 1rem;
              margin: 0;
              grid-column: 1 / -1;
              grid-row: 1 / span 1;
              position: relative;
              text-align: center;
              font-size: 2rem;
            }
            p {
              z-index: 1;
              grid-column: 1 / -1;
              grid-row: 2 / span 1;
              padding: 0 1em;
              max-width: 500px;
              position: relative;
              text-align: center;
              margin: 0;
              opacity: 1;
              transition: opacity 0.4s ease-in-out;
              display: none;
              line-height: 1.5;
            }
            button {
              z-index: 1;
              grid-column: 1 / -1;
              grid-row: 3 / span 1;
              font-size: var(--text-md);
              padding: 0.3em 1.2em;
              background-color: var(--dark-color-secondary);
              border: none;
              color: white;
              cursor: pointer;
              text-transform: uppercase;
              font-weight: 600;
              letter-spacing: 1px;
              border-radius: 2px;
            }
            .link::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              box-shadow: 0 0 100px inset rgba(0, 0, 0, 0.5), 0 0 0 400px inset rgba(0, 0, 0, 0.6);
              transition: opacity 0.3s ease-in-out;
            }
            .link:hover::after {
              opacity: 1;
            }
            @media (min-width: 310px) {
              p {
                display: block;
              }
            }
            @media (min-width: 769px) {
              p {
                opacity: ${showText ? 1 : 0};
                line-height: 1.9;
              }
              .link::after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                box-shadow: 0 0 100px inset rgba(0, 0, 0, 1), 0 0 0 400px inset rgba(0, 0, 0, 0.8);
                opacity: 0.4;
                transition: opacity 0.3s ease-in-out;
              }
            }
            @media (min-width: 500px) {
              a {
                grid-template-columns: 1fr;
                grid-template-rows: 125px 100px 1fr;
              }
              h3 {
                font-size: 2.4rem;
                padding: 1em 1em 0;
              }
            }
          `}
        </style>
      </a>
    </Link>
  );
}
