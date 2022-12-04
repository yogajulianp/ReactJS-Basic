import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';
import './styles.css';
//import Footer from '../../components/Footer/index';

function Home() {
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

export default Home;
