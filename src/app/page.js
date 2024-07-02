import 'bootstrap/dist/css/bootstrap.css'
import Script from "next/script";
import HeroPage from './component/hero';
import MainDashPage from './component/maindash';
export default function Home() {
  return (
    <div className="w-screen row col-12 g-1 bg-dark">
      <HeroPage/>
      <MainDashPage/>
    </div >
  );
}
