import Content from './fragments/contact';
import Sidebar from './fragments/sidebar/sidebar';
import './styles.css';


function Contact() {
  let data = "ini adalah isi konten";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
        <Sidebar />
      </section>
      
    </div>
  );
}

export default Contact;
