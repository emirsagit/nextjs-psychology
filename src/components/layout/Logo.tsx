import Link from "next/link";
import Image from "next/image";
import Burger from "./Burger";
import { InstagramTop, MailWithNumberTop, PhoneWithNumberTop } from "../contact/social";
import config from "../../lib/config";

export default function Logo() {
  return (
    <>
      {/* <hr className="firstHr" /> */}
      <div className="container">
        <Link href="/">
          <a className="image-wrapper">
            <Image
              src="/images/logo.svg"
              alt="logo"
              layout="responsive"
              width="300"
              height="105"
              className="image-wrapper"
            />
          </a>
        </Link>
      </div>
      {/* <hr className="secondHr" /> */}
      <div className="wrapper">
        <Burger />
        <ul className="list-d-flex">
          <li>
            <InstagramTop href={config.instagram_account} color="#1B1C1D" width="24" />
          </li>
          <li>
            <PhoneWithNumberTop href={config.phone} color="#1B1C1D" showNumber={false} width="24" />
          </li>
          <li>
            <MailWithNumberTop href={config.email} color="#1B1C1D" showNumber={false} width="24" />
          </li>
        </ul>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90%;
          max-width: 1000px;
          margin: 0 auto;
          justify-content: space-between;
        }

        .wrapper {
          display: flex;
          justify-content: space-between;
          width: 90%;
          margin: .4em auto 0;
        }

        .image-wrapper {
          width: 100%;
          margin: 1.5em 0;
        }

        .list-d-flex {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          list-style-type: none;
          margin: 0;
          margin-left: auto;
          padding: 0;
        }

        .list-d-flex > li {
          margin-right: 2em;
        }

        .list-d-flex > li:last-child {
          margin-right: 0;
        }

        @media (min-width: 769px) {
          .wrapper {
            margin: 0 auto 0.7em;
            max-width: 1000px; 
          }
          .image-wrapper {
            width: 50%;
            justify-self: center;
          }
          .container {
            justify-content: space-between;
          }
          .list-d-flex {
            margin: 0 auto;
          }
u        }
        @media (min-width: 1200px) {
          .image-wrapper {
            width: 40%;
          }
        }
      `}</style>
    </>
  );
}
