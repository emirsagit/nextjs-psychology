import config from "../../lib/config";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} {config.author}
      </p>
      <style jsx>{`
        footer {
          background-color: var(--dark-color-primary);
          display: flex;
          color: var(--light-color-secondary);
          border-top: var(--dark-color-secondary) 2px solid;
          font-size: var(--text-sm);
          padding: 0.2em;
        }
        p {
          margin: 0;
          text-align: center;
          width: 100%;
        }
        @media (min-width: 769px) {
          footer {
            padding: 0.4em;
          }
        }
      `}</style>
    </footer>
  );
}
