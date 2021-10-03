import { PhoneWithNumber, MailWithNumber } from "../contact/social/index";
import config from "../../lib/config";

type Props = {
  bgColor?: string;
};

export default function Break({ bgColor }: Props) {
  return (
    <div className="container">
      <div className="d-flex">
        <p>
          Randevu:{" "}
          <PhoneWithNumber href={config.phone} color="var(--dark-color-primary)" showSvg={false} fontSize="14px" />
        </p>
        <p>
          <MailWithNumber href={config.email} color="var(--dark-color-primary)" showSvg={false} fontSize="14px" />
        </p>
      </div>
      <style jsx>
        {`
          .container {
            background-color: ${bgColor ? bgColor : "var(--dark-color-secondary)"};
            width: 100%;
            padding-top: .5em;
          }
          .d-flex {
            display: flex;
            width: var(--section-width);
            max-width: 1000px;
            margin: 0 auto;
            justify-content: center;
            flex-direction: column;
            font-size="14px"
          }
          p {
            display: flex;
            letter-spacing: .5px;
            justify-content: center;
            align-items: baseline;
            margin: 0;
          }
          .d-flex:last-child {
            padding-bottom: .5em;
          }
          @media (min-width: 769px) {
            .container {
              padding-top: 0;
            }
            .d-flex {
              flex-direction: row;
              justify-content: space-between;
              align-items: baseline;
            }
            p {
              margin: 0.5em 0;
            }
            .d-flex:last-child {
              padding-bottom: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
