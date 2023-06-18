import Image from 'next/image';
import Navbar from './components/navbar/Navbar';
import Seccion from './components/seccion/Seccion';
import Footer from './components/footer/Footer';
export default function Home() {
  return (
    <div>
    <Navbar></Navbar>
    <Seccion></Seccion>
    <Footer></Footer>
   
    </div>
  )
}
