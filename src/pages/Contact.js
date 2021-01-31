import React from "react";
import Contact from "../components/Contact/index";

function ContactPage() {
  return (
    <section class="section">
      <div class="container has-text-centered">
        <article class="about-me-content">
          <h1>I'd love to hear from you!</h1>
          <br />
          <Contact />
        </article>
      </div>
    </section>
  );
}

export default ContactPage;
