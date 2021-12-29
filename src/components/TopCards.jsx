import { useEffect, useState } from 'react';
import '../sass/main.scss';
import { DB_GRAPHQL_URL, LOJA_1_TOKEN, LOJA_2_TOKEN, LOJA_3_TOKEN, LOJA_4_TOKEN, LOJA_5_TOKEN } from '../utils/externalUrls';
import getData from '../utils/getData';
import { getAllQuery, getStorageNameQuery } from '../utils/queryTypes';
const TopCards = () => {
  const [dataLoja1, setDataLoja1] = useState([]);
  const [dataLoja2, setDataLoja2] = useState([]);
  const [dataLoja3, setDataLoja3] = useState([]);
  const [dataLoja4, setDataLoja4] = useState([]);
  const [dataLoja5, setDataLoja5] = useState([]);

  useEffect(() => {
    Promise.all([
      getData(DB_GRAPHQL_URL, LOJA_1_TOKEN, getStorageNameQuery, setDataLoja1),
      getData(DB_GRAPHQL_URL, LOJA_2_TOKEN, getStorageNameQuery, setDataLoja2),
      getData(DB_GRAPHQL_URL, LOJA_3_TOKEN, getStorageNameQuery, setDataLoja3),
      getData(DB_GRAPHQL_URL, LOJA_4_TOKEN, getStorageNameQuery, setDataLoja4),
      getData(DB_GRAPHQL_URL, LOJA_5_TOKEN, getStorageNameQuery, setDataLoja5),])
      .then((values) => {
        console.log(values);
      });
  }, []);

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