import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => {
        setSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => alert(error));
  };

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
      <p className="info">Contact Form</p>
      <ul>
        <li>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            placeholder="Name"
            required
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            placeholder="Email"
            required
          />
        </li>
        <li>
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
          />
        </li>
        <li>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
        </li>
        <li>
          <button type="submit" disabled={submitting}>
            <span className={submitting ? "lds-dual-ring" : ""}></span>
            {!submitting && "Submit"}
          </button>
          {isSubmitted ? <span className="success">Thanks for message.</span> : ""}
        </li>
      </ul>
      <style jsx>
        {`
          form {
            margin-top: 1em;
          }
          label {
            display: block;
            cursor: pointer;
          }
          .info {
            font-size: var(--text-lg);
            text-align: center;
            margin: 0 0 0.3em;
            color: white;
            font-weight: 600;
          }
          ul {
            padding: 0;
            list-style-type: none;
            display: grid;
            max-width: 400px;
            gap: 0.8em;
            margin: 0 auto;
          }
          input,
          textarea {
            width: 100%;
            padding: 0.5em 0.5em;
            border-radius: 2px;
            border: none;
            background-color: var(--light-color-secondary);
          }
          button {
            border: 0;
            width: 100px;
            height: 30px;
            border-radius: 2px;
            cursor: pointer;
            color: var(--dark-color-primary);
          }
          button:hover {
            filter: brightness(85%);
          }
          .success {
            background-color: green;
            font-size: var(--text-sm);
            margin-left: 0.5em;
            font-weight: 600;
            padding: 0.2em 0.5em;
          }
          .lds-dual-ring {
            display: inline-block;
          }
          .lds-dual-ring:after {
            content: " ";
            display: block;
            width: 20px;
            height: 20px;
            margin: 4px;
            border-radius: 50%;
            border: 2px solid #fff;
            border-color: #fff transparent #fff transparent;
            animation: lds-dual-ring 1.2s linear infinite;
          }
          @keyframes lds-dual-ring {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </form>
  );
}
