import BottomCards from "../components/BottomCards";
import TopCards from "../components/TopCards";

const GeneralVision = () => {
  return (
    <div className='GeneralVision-main-wrapper'>
      <header>
        <h1>Página Visão Geral</h1>
        <TopCards />
      </header>
      <BottomCards/>
    </div>
  );
};

export default GeneralVision;