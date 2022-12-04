import Content from './fragments/content';
import './styles.css';

function Feature() {
  let data = "ini adalah isi feature";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default Feature;
