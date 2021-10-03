import Link from "next/link";
import { useRouter } from "next/router";
import { NavigationContext } from "../../context/navigation";
import { useContext, useState } from "react";
import Image from "next/image";
import { getTherapiesLink } from "../../lib/therapies";
import DropDown from "./DropDown";
import Arrows from "./Arrows";

export default function Navigation() {
  const router = useRouter();
  const { active, burgerClick } = useContext(NavigationContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const therapies = getTherapiesLink();

  function handleClick() {
    setShowDropdown(false);
    burgerClick(false);
  }

  return (
    <div className="wrapper">
      <ul className={"container " + (active ? "active" : "")}>
        <li className="image-wrapper">
          <Image src="/images/nav-icon.svg" alt="logo" layout="responsive" width="200" height="190" />
        </li>
        <li>
          <Link href="/">
            <a className={router.pathname === "/" ? "active-link" : null} onClick={() => handleClick()}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <a onClick={() => handleClick()}>About</a>
          </Link>
        </li>
        <li onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          <Link href="/services">
            <a
              className={router.pathname.startsWith("/services") ? "active-link dropdown-link" : "dropdown-link"}
              onClick={() => handleClick()}
            >
              Services
              <Arrows showDropdown={showDropdown} />
            </a>
          </Link>
          <ul className="dropdown-container">
            {therapies.map((therapy) => {
              return <DropDown therapy={therapy} handleClick={handleClick} key={therapy.path} />;
            })}
          </ul>
        </li>
        <li>
          <Link href="/posts">
            <a className={router.pathname.startsWith("/posts") ? "active-link" : null} onClick={() => handleClick()}>
              Posts
            </a>
          </Link>
        </li>
        <li>
          <a href="#contact" onClick={() => handleClick()}>
            Contact
          </a>
        </li>
      </ul>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container {
            width: var(--section-width);
            max-width: 1000px;
            margin: auto;
            margin: 0;
            position: fixed;
            top: 0;
            right: 70%;
            left: 0;
            bottom: 0;
            list-style: none;
            flex-direction: column;
            justify-content: flex-start;
            padding: 100px 0 0 1.5em;
            transform: translateX(-100%);
            transition: 0.3s ease-in-out;
            width: 70%;
            line-height: 1;
            background-color: var(--dark-color-primary);
            z-index: 3;
            display: flex;
            overflow: auto;
            padding-bottom: 2em;
          }
          .dropdown-container {
            list-style: none;
            padding-left: 0.5em;
            margin-top: 1.3em;
            margin-bottom: -0.5em;
            color: white;
          }
          .image-wrapper {
            width: 40%;
            margin: 0 auto 1rem;
          }
          .dropdown-link {
            display: flex;
            align-items: center;
          }
          .active {
            display: flex;
            transform: translateX(0);
            opacity: 1;
          }
          li {
            margin-bottom: 1.5rem;
            padding: 0 1.5rem 0 0;
            color: var(--light-color-primary);
            position: relative;
          }
          li:last-child {
            margin-bottom: 0;
          }
          a {
            color: white;
            font-size: var(--text-md);
            text-transform: uppercase;
            letter-spacing: 1.1px;
          }

          @media (min-width: 769px) {
            .wrapper {
              border: 1px solid rgba(0, 0, 0, 0.1);
              border-left: none;
              border-right: none;
            }
            .active-link {
              font-weight: 600;
            }
            .dropdown-container {
              visibility: ${showDropdown ? "visible" : "hidden"};
              opacity: ${showDropdown ? 1 : 0};
              flex-direction: column;
              position: absolute;
              padding: 0.5em 0;
              background-color: var(--light-color-secondary);
              z-index: 5;
              width: 200px;
              height: max-content;
              border-top: 1px solid var(--dark-color-primary);
              border-radious: 2px;
              transition: visibility 0.1s, opacity 0.3s ease-in-out;
              color: var(--dark-color-primary);
              margin-top: 0;
            }
            .image-wrapper {
              display: none;
            }
            li {
              margin-bottom: 0;
              font-size: 2rem;
            }
            a {
              color: var(--dark-color-primary);
              opacity: 80%;
              font-size: var(--text-sm);
            }
            a:hover {
              opacity: 100%;
            }
            .container {
              flex-direction: row;
              transform: translateX(0);
              margin: 1.5em auto;
              position: static;
              width: 100%;
              background-color: var(--light-color-secondary);
              padding: 0;
              justify-content: space-around;
              width: var(--section-width);
              align-items: center;
              overflow: visible;
              padding-bottom: 0;
            }
            li {
              font-size: 1rem;
              padding-bottom: 0;
            }
          }
          @media (min-width: 1100px) {
            ul {
              justify-content: center;
            }
            li {
              margin-right: 2em;
            }
            li:last-sibling {
              margin-right: 0;
            }
            li:last-child {
              margin-right: 0;
            }
            a {
              font-size: var(--text-md);
            }
          }
        `}
      </style>
    </div>
  );
}
