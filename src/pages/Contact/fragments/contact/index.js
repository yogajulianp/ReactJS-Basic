import './styles.css';

function Contact (prop) {
  
  return(
    <section>
      <h1 className='content-wrapper'>Kontak Kami</h1>
      <p>{prop.data}</p>
    </section>
  );
}

export default Contact;