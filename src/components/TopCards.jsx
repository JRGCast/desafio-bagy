import '../sass/main.scss';

const TopCards = ({ totalStores, totalIncome, starStore, goals }) => {

  let formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const verifyPropsData = (propsData, currency) => {
    if (propsData) {
      if (currency) return formatter.format(propsData);
      return propsData;
    } else {
      return 'Carregando dados...';
    }
  };


  return (
    <div className='TopCards-main-wrapper'>
      <section className='TopCards-total-stores TopCards-card'>
        <h4>Total de Lojas</h4>
        <p>{ verifyPropsData(totalStores) }</p>
      </section>
      <section className='TopCards-total-income TopCards-card'>
        <h4>Faturamento Total</h4>
        <p>{ verifyPropsData(totalIncome, true) }</p>
      </section>
      <section className='TopCards-star-store TopCards-card'>
        <h4>Loja Destaque</h4>
        <p>{ verifyPropsData(starStore) }</p>
      </section>
      <section className='TopCards-goals TopCards-card'>
        <h4>Meta Mensal</h4>
        <p>{ verifyPropsData(goals, true) }</p>
      </section>
    </div>
  );
};

export default TopCards;