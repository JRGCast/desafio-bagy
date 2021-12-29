import '../sass/main.scss';
const BottomCards = () => {
  return (
    <div className='BottomCards-main-wrapper'>
      <section className='BottomCards-total-shoppings BottomCards-card'>
        <h4>Total de Compras</h4>
        <p>Valor Geral</p>
        <hr />
        <table className='BottomCards-table'>
          <thead>
            <tr>
              <th>Lojas</th>
              <th>Total Compras</th>
              <th>Total Faturado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estilo pri</td>
              <td>250 compras</td>
              <td>R$4.000,00</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='BottomCards-total-shoppings-details BottomCards-card'>
        <h4>Detalhamento</h4>
        <hr /><br />
        <table className='BottomCards-table'>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Loja</th>
              <th>Preço Unitário</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brincos #23</td>
              <td>Estilo Pri</td>
              <td>R$29,90</td>
              <td>17/07/2020</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BottomCards;