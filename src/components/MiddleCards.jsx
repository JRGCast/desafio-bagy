import '../sass/main.scss'
import GraphicChart from "./GraphicChart";

const data = [{ name: 'Page A', uv: 400, pv: 900, amt: 2400 }, { name: 'Page B', uv: 800, pv: 2400, amt: 2400 }, { name: 'Page C', uv: 100, pv: 500, amt: 2400 }];
const MiddleCards = () => {
  return (
    <div className='MiddleCards-main-wrapper'>
      <section >
        <h4>Total Faturamento Mensal</h4>
        <GraphicChart data={ data } />
      </section>
      <section>
        <div>
          <h5>Loja</h5>
          <p>Estilo Pri</p>
        </div>
        <div>
          <h5>Mês</h5>
          <p>Julho</p>
        </div>
        <div>
          <h5>Ano</h5>
          <p>2020</p>
        </div>
        <div>
          <h5>Total Faturamento</h5>
          <p>R$45.000</p>
        </div>
        <div>
          <h5>Análise Comparativa</h5>
          <p>Positivo</p>
        </div>
      </section>
    </div>
  );
};

export default MiddleCards;