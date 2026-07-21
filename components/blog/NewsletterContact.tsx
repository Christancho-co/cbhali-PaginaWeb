export default function NewsletterContact() {
  return (
    <section className="blnews">
      <span className="blnews__mark" aria-hidden="true">CB</span>

      <form className="blnews__form" action="#" method="post">
        <h3>Subscribe to our Newsletter</h3>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email Adress" />
        <button type="submit">Subscribe</button>
      </form>

      <div className="blnews__contact">
        <h4>Contact Details</h4>
        <p>CB Hali</p>
        <p>info@cbhali.com</p>
        <p>Carrera 49c #79-183</p>
        <p>BARRANQUILLA</p>
        <p>Visitas con cita previa.</p>
      </div>

      <p className="blnews__signature">Crafted For Visionaries.</p>
    </section>
  );
}
