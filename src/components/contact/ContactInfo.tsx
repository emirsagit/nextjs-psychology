import config from "../../lib/config";
import { Whatsapp, Instagram, Youtube, Facebook, Twitter, MailWithNumber, PhoneWithNumber } from "./social/index";
export default function ContactInfo() {
  return (
    <div className="container">
      <div className="alignment">
        <MailWithNumber href={config.email} fontSize="var(--text-lg)" marginBottom="0.5em" />
        <PhoneWithNumber href={config.phone} fontSize="var(--text-lg)" marginBottom="0.5em" />
      </div>
      <div className="d-flex">
        <Instagram href={config.instagram_account} />
        <Whatsapp href={`https://wa.me/${config.phone}`} />
        <Youtube href={config.youtube_account} />
        <Facebook href={config.facebook_account} />
        <Twitter href={config.twitter_account} />
      </div>
      <style jsx>
        {`
          .d-flex {
            display: flex;
            justify-content: space-between;
            max-width: 250px;
            flex-wrap: wrap;
            margin: 0 auto;
          }
          .alignment {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .alignment:last-child {
            margin: 5em;
          }
          @media (min-width: 769px) {
            .alignment,
            .d-flex {
              margin: 0;
              align-items: flex-start;
            }
            .alignment > * {
              margin: 5em;
            }
          }
        `}
      </style>
    </div>
  );
}
