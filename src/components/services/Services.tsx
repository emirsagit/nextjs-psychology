import Image from "next/image";

export default function Services() {
  return (
    <section id="calisma-alanlarim">
      <Image layout="fill" src="/images/bg-home.jpg" objectFit="cover" objectPosition="left center" />
      <h2>Services</h2>
      <div className="grid-container">
        <img src="/images/fancy.png" className="image-left" alt="fancy" loading="lazy" />
        <ul>
          <li>Depression</li>
          <li>Vestibulum</li>
          <li>Malesuada</li>
          <li>Pretium malesuada depression</li>
          <li>Pretium malesuada depression</li>
          <li>Pretium malesuada depression</li>
          <li>Pretium depression</li>
          <li>Pretium malesuada </li>
          <li>Pretium depression</li>
        </ul>
        <img src="/images/fancy.png" className="image-right" alt="fancy" loading="lazy" />
      </div>
      <style jsx>
        {`
          section {
            background-color: var(--dark-color-primary);
            padding: var(--section-padding-y) 5%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-attachment: fixed;
            color: white;
            letter-spacing: 0.5px;
          }

          section::after {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            content: "";
            width: 100%;
            height: 100%;
            z-index: 1;
            // background-color: #0e1d32;
            background-color: var(--dark-color-primary);
            opacity: 0.9;
          }

          img {
            display: none;
            z-index: 2;
          }

          h2 {
            z-index: 2;
          }

          .grid-container {
            z-index: 2;
          }

          @media (min-width: 800px) {
            .grid-container {
              display: flex;
              width: 100%;
            }
            ul {
              display: grid;
              grid-template-columns: 350px 350px;
              margin: 0 auto;
              align-items: center;
            }
          }

          @media (min-width: 1270px) {
            h2 {
              max-width: 800px;
              margin: 0 auto 1em;
              align-self: flex-start;
            }
            .grid-container {
              display: grid;
              grid-template-columns: 200px 1fr 200px;
              align-items: center;
              width: 100%;
            }
            ul {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
              margin: 0 auto;
              justify-content: center;
              width: 100%;
            }
            img {
              display: block;
            }
            .image-left {
              transform: rotate(90deg);
            }
            .image-right {
              transform: rotate(270deg);
            }
          }
        `}
      </style>
    </section>
  );
}
