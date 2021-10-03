import Form from "../contact/Form";
import ContactInfo from "../contact/ContactInfo";

export default function Contact() {
  return (
    <section id="iletisim">
      <h2>CONTACT</h2>
      <div className="container">
        <ContactInfo />
        <Form />
      </div>
      <style jsx>{`
        section {
          background-color: var(--dark-color-primary);
          color: var(--light-color-secondary);
          padding: var(--section-padding-y) 0;
          margin: 0 auto;
          width: 100%;
        }
        h2 {
          widht: var(--section-width);
          margin: 0.2em 0 1em;
          text-align: center;
          font-weight: 900;
          font-family: var(--font-primary);
          text-align: center;
          color: white;
        }
        .container {
          width: var(--section-width);
          margin: 0 auto;
        }
        @media (min-width: 769px) {
          .container {
            display: grid;
            max-width: 900px;
            grid-template-columns: 375px minmax(300px, 400px);
            gap: 20px;
            margin: 0 auto;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
