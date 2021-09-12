import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import Logo from "./Logo";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <div className="wrapper">
      <Logo />
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null} onClick={() => setActive(!active)}>
                about
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={router.pathname.startsWith("/posts") ? "active" : null}
                onClick={() => setActive(!active)}
              >
                blog
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .wrapper {
            width: var(--section-width);
            margin: auto;
            padding: 1em 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .container {
            background-color: var(--dark-color-primary);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
          }
          ul {
            width: 100%;
            text-align: left;
            list-style: none;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            z-index: 1;
            transform: translateY(100%);
            transition: opacity 200ms;
            width: var(--section-width);
          }
          .active {
            opacity: 1;
            transform: translateY(0);
            color: var(--light-color-secondary);
          }
          li {
            margin-bottom: 1.75rem;
            font-size: 2rem;
            padding: 0 1.5rem 0 0;
            color: var(--light-color-primary);
          }
          li:last-child {
            margin-bottom: 0;
          }
          a {
            color: var(--light-color-primary);
            font-size: var(--text-lg);
            text-transform: capitalize;
          }

          @media (min-width: 769px) {
            .container {
              opacity: 1;
              position: static;
              width: 60%;
              background-color: var(--light-color-secondary);
            }
            .active {
              color: var(--dark-color-primary);
            }
            li {
              margin-bottom: 0;
              margin-right: 1.2em;
            }
            li:last-child {
              margin-right: 0;
            }
            a {
              color: var(--dark-color-primary);
              opacity: 80%;
            }
            a:hover {
              opacity: 100%;
            }
            ul {
              flex-direction: row;
              transform: translateY(0);
              display: flex;
            }
            li {
              font-size: 1rem;
              padding: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
