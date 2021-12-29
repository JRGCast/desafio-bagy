import '../sass/main.scss';

const TopCards = () => {


  return (
    <div className='TopCards-main-wrapper'>
      <section className='TopCards-total-stores TopCards-card'>
        <h4>Total de Lojas</h4>
        <p>5</p>
      </section>
      <section className='TopCards-total-income TopCards-card'>
        <h4>Faturamento Total</h4>
        <p>999999</p>
      </section>
      <section className='TopCards-star-store TopCards-card'>
        <h4>Loja Destaque</h4>
        <p>Ipiranga</p>
      </section>
      <section className='TopCards-goals TopCards-card'>
        <h4>Meta Mensal</h4>
        <p>10</p>
      </section>
    </div>
  );
};

export default TopCards;