import './Home.css';
import Constellations from './Box';
import Header from './Header';
import Footer from './Footer';
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Header/>
    <body>
        <Constellations/>
    </body>
    <Footer/>    
    </>
  );
}
export default Home;
