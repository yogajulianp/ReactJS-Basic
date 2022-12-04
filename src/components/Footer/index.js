import logo from '../../logo.svg';
import './styles.css';

function Footer(prop) {


  return(
    <div>
      <footer className='header-wrapper'>
        <img src={logo} alt="logo" />
        <h3 className='header-title' >Copy Right by Yoga Prasutiyo - 2022</h3>
        
      </footer>
    </div>
  );
}

export default Footer;