import { Element } from 'react-scroll'
import Navibar from './Navibar';
import Home from "./Home";
import Services from './Services';
import Faq from "./Faq";
import Image from 'react-bootstrap/Image'
import brand from "./Brand.png"
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navibar />
      <div className="container">
        <Image
          fluid
          alt="Marque de commerce"
          src={brand}
          className="px-5 d-inline-block align-middle"
        />
      </div>
      <Home />
      <Element name="services" className="element">
        <Services />
      </Element>
      <Element name="faq" className="element">
        <Faq />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
