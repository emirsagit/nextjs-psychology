import config from "../../lib/config";
export default function Title() {
  return (
    <section>
      <img src="/images/hand.png" alt="hand" width="1000" height="613" />
      <div className="text">
        <span className="handle">Yalnız Değilsiniz...</span>
        <h1>
          <span className="fancy">Klinik Psikolog</span>
          <br />
          {config.author}
        </h1>
      </div>
      <style jsx>{`
        section {
          padding: var(--section-padding-y) 0;
        }
        img {
          filter: drop-shadow(-2px 24px 12px rgba(17, 12, 46, 0.3))
            drop-shadow(-2px 24px 100px rgba(17, 12, 46, 0.2));
          margin-bottom: var(--padding-between-items);
          width: 85%;
        }
        h1 {
          margin-top: 0;
          text-transform: uppercase;
        }
        .fancy {
          font-weight: 200;
          font-family: var(--font-primary);
          text-transform: capitalize;
        }
        .handle {
          display: inline-block;
          letter-spacing: 0.05em;
          font-weight: 200;
        }
        .text {
          padding-left: 13%;
          padding-right: 2%;
        }

        @media (min-width: 769px) {
          section {
            display: grid;
            grid-template-columns: 40% 1fr;
            grid-template-areas: "image text";
            align-items: center;
          }
          .text {
            grid-area: text;
            padding-left: 5%;
          }
          h1 {
            grid-area: title;
          }
          .handle {
            grid-area: span;
          }
        }
      `}</style>
    </section>
  );
}
