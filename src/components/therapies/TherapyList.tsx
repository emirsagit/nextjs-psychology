import { TherapyContent } from "../../lib/therapies";
import TherapyItem from "./TherapyItem";

type Props = {
  therapies: TherapyContent[];
};

export default function TherapyList({ therapies }: Props) {
  return (
    <section>
      <div className={"categories"}>
        {therapies.map((it, i) => (
          <div key={i}>
            <TherapyItem therapy={it} />
          </div>
        ))}
      </div>
      <style jsx>{`
        section {
          padding: 0 0 var(--section-padding-y);
          max-width: 1200px;
          width: var(--section-width);
          margin: 0 auto;
        }
        .categories {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1em;
        }
        button {
          font-size: var(--text-sm: 0.875rem);
          padding: 0.3em 1.2em;
          background-color: var(--light-color-secondary);
          border: 1px solid var(--dark-color-primary);
          color: var(--dark-color-primary);
          cursor: pointer;
          text-transform: capitalize;
          border-radius: 2px;
          opacity: 0.7;
        }
        button:hover {
          opacity: 1;
          box-shadow: black 0 0 2px;
        }
        .active {
          opacity: 1;
          box-shadow: black 0 0 2px;
        }
        @media (min-width: 769px) {
          .categories {
            display: flex;
            max-width: 1000px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
