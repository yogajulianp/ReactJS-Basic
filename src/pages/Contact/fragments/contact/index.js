import './styles.css';

function Contact () {
  let data = "ini adalah isi kontak";
  return(
    <section>
      <h1 className='content-wrapper'>Kontak Kami</h1>
      <p>{data}</p>
    </section>
  );
}

export default Contact;