import config from "../../lib/config";
export default function ContactBtns() {
  return (
    <>
      <a title="Whatsapp" href={`https://wa.me/${config.phone}`} target="_blank" rel="noopener" className="whatsapp">
        <img src="/images/whatsapp.svg" width="105" height="105" alt="whatsapp link" />
      </a>
      <a title="Mesajınız" href="#iletisim" className="message">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="32"
          height="32"
          className="svg"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
        Message
      </a>
      <style jsx>{`
        .whatsapp {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 4;
          width: 50px;
        }

        .message {
          position: fixed;
          display: flex;
          bottom: 20px;
          left: 0;
          background-color: black;
          color: white;
          z-index: 2;
          padding: 0.2em 0.5em;
          font-weight: 900;
          letter-spacing: 1px;
          border-radius: 0 5px 5px 0;
          font-size: var(--text-lg);
          cursor: pointer;
        }

        .svg {
          margin-right: 0.4em;
        }

        @media (min-width: 769px) {
          .whatsapp {
            width: 60px;
          }
        }
      `}</style>
    </>
  );
}
