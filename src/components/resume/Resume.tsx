import Image from "next/image";
import { useState, useRef } from "react";
import config from "../../lib/config";

export default function Resume() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollEl = useRef(null);
  const scrollBtns = useRef(null);

  function handleScroll() {
    const { scrollHeight, clientHeight, scrollTop } = scrollEl.current;
    let scrollTopMax = scrollHeight - clientHeight;
    setScrollPosition(Math.ceil(scrollTop / (scrollTopMax / clientHeight)));
  }

  function scrollToEdu(e) {
    e.preventDefault;
    const { scrollHeight, clientHeight } = scrollEl.current;
    let rect = scrollEl.current.getBoundingClientRect();
    let height = e.clientY - rect.top;
    let scrollTopMax = scrollHeight - clientHeight;
    scrollEl.current.scrollTop = (height * scrollTopMax) / clientHeight;
  }

  return (
    <section id="about">
      <div className="image-container">
        <Image layout="responsive" src="/images/author.jpg" width="500" height="749" alt={config.author} />
      </div>
      <div className="buttons-container" ref={scrollBtns} onClick={(e) => scrollToEdu(e)}>
        <button className="btn btn1" title="Hakkımda" aria-label="Hakkımda">
          About
        </button>
        <button className="btn btn2" title="Eğitimlerim" aria-label="Eğitimlerim">
          Education
        </button>
      </div>
      <div className="content-wrapper">
        <div className="content" onScroll={handleScroll} ref={scrollEl}>
          <div className="scrollAboutSection">
            <span>About</span>
            <h1>{config.author}</h1>
            <h2>Clinical Doctor</h2>
            <p>
              Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit
              amet dui. Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
              neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere
              blandit. Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
              in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut
              libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            </p>
            <p>
              Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit
              amet dui. Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
              neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere
              blandit.
            </p>
          </div>
          <div className="scrollEduSection">
            <p className="title">Education</p>
            <p>
              Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit
              amet dui. Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
              neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere
              blandit. Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
              in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut
              libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          section {
            display: grid;
            grid-template-columns: 1fr 20px;
            grid-template-rows: 1fr min-content;
            padding: 1.5em 0 var(--section-padding-y);
            justify-content: center;
            align-items: center;
            max-width: 1000px;
            position: relative;
            width: 90%;
            margin: 0 auto;
          }

          .buttons-container {
            display: grid;
            grid-template-rows: 175px 175px;
            justify-content: center;
            align-items: center;
            position: relative;
            background: transparent;
            background: rgba(0, 0, 0, 0.8);
            opacity: 0.9;
            grid-row: 2/3;
            grid-column: 2/3;
            margin-top: 1em;
            margin-right: 5%;
            cursor: pointer;
          }

          .buttons-container:after {
            content: "";
            position: absolute;
            background: rgba(0, 0, 0, 1);
            top: 0;
            right: 0;
            height: ${scrollPosition}px;
            left: 0;
            width: 100%;
          }

          .btn {
            transform: rotate(90deg);
            display: block;
            height: 20px;
            border: none;
            z-index: 5;
            background: transparent;
            color: white;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 600;
            font-size: 13px;
            cursor: pointer;
          }

          btn1 {
            grid-row: 1 / 2;
          }

          btn2 {
            grid-row: 2 / 3;
          }

          .image-container {
            grid-column: 1 / -1;
            grid-row: 1 / 2;
            order: 1;
            display: block;
            width: 100%;
            margin: 0 auto;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          }

          .content-wrapper {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            order: 2;
            margin-top: 1em;
          }

          .content {
            margin-top: 1em;
            height: 350px;
            overflow-y: scroll;
            position: relative;
            padding-right: 1.5em;
            width: 100%;
            box-shadow: 0 2px 10px -10px black;
            overflow: -moz-scrollbars-none;
            scrollbar-width: none;
            margin: 0 auto;
          }

          .content::-webkit-scrollbar {
            display: none;
          }

          span {
            font-size: 2.4rem;
            opacity: 0.8;
            margin-bottom: 0.8rem;
            display: block;
          }

          h1,
          h2,
          .title {
            font-size: 1.2rem;
            margin: 0 0 0.5em;
            font-family: var(primary-font);
            font-weight: 900;
          }

          h2 {
            margin-bottom: 1.8rem;
          }

          @media (min-width: 769px) {
            section {
              grid-template-columns: 1fr 20px 1fr;
              grid-template-rows: 1fr;
              padding: var(--section-padding-y) 0;
              margin: 0 auto;
            }

            .image-container {
              order: 2;
              width: 100%;
              grid-column: 3 / 4;
              grid-row: 1 / 2;
              margin-left: 3em;
            }

            .content-wrapper {
              margin-top: 0;
              grid-column: 1 / 2;
              grid-row: 1 / 2;
              width: 100%;
              order: 1;
            }

            .buttons-container {
              grid-column: 2 / 3;
              grid-row: 1 / 2;
              margin-top: 0;
            }
          }
        `}
      </style>
    </section>
  );
}
