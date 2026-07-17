export default function Studio() {
  return (
    <>
      <div className="studio__fade only-m" />
      <div className="studio__video">
        <img src="/images/home/video-thumb.webp" alt="CB RUGS — Seres del Multiverso, making of video" />
      </div>

      <img className="studio__team" src="/images/home/team.webp" alt="The CB Hali team" />

      <form className="news" action="#" method="post">
        <h3 className="news__title">Subscribe to our Newsletter</h3>
        <input className="news__field news__field--name" type="text" name="name" placeholder="Name" />
        <input className="news__field news__field--email" type="email" name="email" placeholder="Email Adress" />
        <button className="news__submit" type="submit">Subscribe</button>
      </form>
    </>
  );
}
