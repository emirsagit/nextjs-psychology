import { TherapyContent } from "../../../lib/therapies";
import Image from "next/image";

type Props = {
  therapy: TherapyContent;
};

export default function TherapyLayout({ therapy }: Props) {
  return (
    <section>
      <article className="container">
        <div className="img-wrapper">
          <Image layout="fill" src={therapy.img1 ? therapy.img1 : "/images/psikoloji.jpg"} objectFit="cover" />
        </div>
        <p className="body">{therapy.body}</p>
        <hr />
        <div className="list-img-wrapper">
          <Image layout="fill" src={therapy.img2 ? therapy.img2 : "/images/psikoloji.jpg"} objectFit="cover" />
        </div>
        <p className="list-title">{therapy.list_title}</p>
        <ul className="list">
          {therapy.list.map((item) => {
            return (
              <li className="list-item" key={item}>
                {item}
              </li>
            );
          })}
        </ul>
      </article>
      <hr />
      <style jsx>
        {`
          section {
            color: white;
            background-color: var(--dark-color-primary);
            overflow: hidden;
          }
          .container {
            display: grid;
            margin: 0 auto 0;
            padding: 0 0 var(--section-padding-y);
            letter-spacing: 1px;
            grid-template-rows: 100px 150px 1fr 4.7em 200px min-content min-content;
            grid-template-columns: 40px 1fr 1fr 40px;
            grid-template-areas:
              "image image image image"
              "image image image image"
              "offset body body offset2"
              "hr hr hr hr"
              "offset3 imgTwo imgTwo offset4"
              "title title title title"
              "list list list list";
          }
          .img-wrapper {
            grid-area: image;
            position: relative;
          }
          .body {
            grid-area: body;
            color: white;
            line-height: 1.9;
            margin: 2em auto 4em;
          }
          hr {
            grid-area: hr;
            color: white;
            width: 100%;
            margin: 0 auto;
          }
          .list-img-wrapper {
            grid-area: imgTwo;
            position: relative;
            z-index: 1;
          }
          .list-title {
            grid-area: title;
            width: var(--section-width);
            color: white;
            text-align: left;
            padding: 0 1rem;
            font-size: var(--text-lg);
            font-weight: 600;
            margin: 2rem auto 1rem;
            line-height: 1.4;
          }
          .list {
            grid-area: list;
            color: white;
            list-style-type: circle;
            font-size: var(--text-md);
            margin-left: 1em;
            padding-right: 2em;
          }
          @media (min-width: 990px) {
            .list-title {
              font-size: var(--text-xl);
              font-weight: 600;
              text-align: left;
            }
            .background {
              background-color: var(--dark-color-primary);
              display: block;
              grid-column: 1 / -1;
              grid-row: 2 / 6;
              content: "";
            }
            .list {
              grid-area: list;
              color: white;
              list-style-type: circle;
              padding: 0;
              padding-right: 2em;
            }
            .body {
              margin: auto;
            }
            .container {
              width: 90%;
              margin: 0 auto;
              padding: 5em 0;
              grid-template-columns: 100px 50px 2fr 50px 2fr 50px 100px;
              grid-template-rows: 100px 300px 5em 5em 5em min-content min-content;
              grid-template-areas:
                "image image image offset body body offset2"
                "image image image offset body body offset2"
                "image image image offset6 body body offset2"
                "offset7 offset7 offset7 offset7 offset7 offset7 offset7"
                "hr hr hr hr hr hr hr"
                "offset3 title title imgTwo imgTwo imgTwo imgTwo"
                "offset3 list list imgTwo imgTwo imgTwo imgTwo";
            }
          }
        `}
      </style>
    </section>
  );
}
