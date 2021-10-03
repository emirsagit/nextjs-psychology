import config from "../../lib/config";
export default function ContactBtns() {
  return (
    <div className="container">
      <a title="Phone" href={`tel:+${config.phone}`} target="_blank" rel="noopener" className="phone">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </a>
      <a title="Email" href={`mailto:${config.email}`} target="_blank" rel="noopener" className="mail">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </a>
      <style jsx>
        {`
          .container {
            display: flex;
            align-items: center;
            position: fixed;
            bottom: 0;
            height: 50px;
            z-index: 4;
            background-color: white;
            width: 100%;
          }
          a {
            width: 50%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            margin: 0;
          }
          .phone {
            background-color: #009a74;
          }
          .mail {
            background-color: var(--dark-color-secondary);
          }
          @media (min-width: 769px) {
            .container {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}
