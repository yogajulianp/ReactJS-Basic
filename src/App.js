import { useEffect, useState } from 'react';
import './App.css';
import Feature from './pages/Feature';
import Header from './components/Header/index';
import Home from './pages/Home';
import Footer from './components/Footer/index';
import Contact from './pages/Contact';
import Product from './pages/Product';

function App() {
  const [menu, setMenu] = useState(1);
  console.log(menu);
  // let title;
  // useEffect(() => {
  //   title = "contoh useEffect"
  // }, [])


  const content = () => {
    if (menu === 1) {return <Home/>}
    else if(menu === 2) {return <Feature />}
    else if (menu === 3) {return <Contact/>}
    else if (menu === 4) {return <Product/>}
  }

  return (
    <div className="App">
      <Header onClick={setMenu} />
      {content()}
     <Footer/>
    </div>
  );
}

export default App;
