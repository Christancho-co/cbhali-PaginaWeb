export default function ContactForm() {
  return (
    <section className="cnform">
      <img className="cnform__bg" src="/images/contact/form-bg.webp" alt="Papaya and grapefruit on a wooden table" />
      <form className="cnform__card" action="#" method="post">
        <h2>Get in touch</h2>
        <input type="text" name="name" placeholder="Full Name" />
        <input type="email" name="email" placeholder="Email Adress" />
        <input type="text" name="subject" placeholder="Subject" />
        <input type="text" name="product" placeholder="Prefered product (Optional)" />
        <textarea name="message" placeholder="Your Message" rows={4} />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
