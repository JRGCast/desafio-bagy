import { useEffect, useState } from "react";
import BottomCards from "../components/BottomCards";
import MiddleCards from "../components/MiddleCards";
import TopCards from "../components/TopCards";
import { DB_GRAPHQL_URL, LOJAS_TOKENS } from '../utils/externalUrls';
import getData from '../utils/getData';
import { getAllQuery, getStorageNameQuery } from '../utils/queryTypes';

const {
  LOJA_1_TOKEN, LOJA_2_TOKEN,
  LOJA_3_TOKEN, LOJA_4_TOKEN, LOJA_5_TOKEN } = LOJAS_TOKENS;
const GeneralVision = () => {
  const [lojasNames, setLojasNames] = useState([]);
  const [lojasData, setLojasData] = useState([]);
  const [dadosPincados, setDadosPincados] = useState([]);

  const puttingDataInsideObj = async (obj, data) => ({ [obj]: data });

  useEffect(() => {
    const promisingNames = async () =>
      Promise.all([
        Promise.resolve(getData(DB_GRAPHQL_URL, LOJA_1_TOKEN, getStorageNameQuery)),
        Promise.resolve(getData(DB_GRAPHQL_URL, LOJA_2_TOKEN, getStorageNameQuery)),
        Promise.resolve(getData(DB_GRAPHQL_URL, LOJA_3_TOKEN, getStorageNameQuery)),
        Promise.resolve(getData(DB_GRAPHQL_URL, LOJA_4_TOKEN, getStorageNameQuery)),
        Promise.resolve(getData(DB_GRAPHQL_URL, LOJA_5_TOKEN, getStorageNameQuery)),])
        .then((values) => { setLojasNames(values); });
    promisingNames();
  }, []);
  useEffect(() => {
    const promisingDatas = async () => {
      const mapping = await Promise.all(
        lojasNames.map(async (item, index) => {
          const storeName = item.data?.me?.name.replaceAll(' ', '_');
          const currToken = LOJAS_TOKENS[`LOJA_${index + 1}_TOKEN`];
          const storeData = await Promise.resolve(getData(DB_GRAPHQL_URL, currToken, getAllQuery));
          const joiningObj = puttingDataInsideObj(storeName, storeData.data);
          return joiningObj;
        })
      );
      setLojasData(mapping);
    };
    promisingDatas();
  }, [lojasNames]);

  useEffect(() => {
    const importantDataMapping = lojasData.map((item, index) => {
      let result = [];
      const consolidatedOrders = (item[`Loja_do_testinho_${index + 1}`]).getConsolidatedOrders;
      const currObj = {};
      const details = consolidatedOrders.map(data => {
        const {
          consolidatedOrderId, createdAt, discountCouponPercentage, discountCouponText, products, price
        } = data;
        const dataObj = {
          consolidatedOrderId, createdAt, discountCouponPercentage, discountCouponText, products, price
        };
        return dataObj;
      });
      const sortByOrderId = details.sort((a, b) => (a.consolidatedOrderId > b.consolidatedOrderId) ? 1 : ((b.consolidatedOrderId > a.consolidatedOrderId) ? -1 : 0));
      currObj[`Loja_do_testinho_${index + 1}`] = sortByOrderId;
      result.push(currObj);
      return result;
    });
    setDadosPincados(importantDataMapping);
  }, [lojasData]);

  // data to cards
  // top card
  let totalStores;
  let starStore;
  let totalIncome;
  let goals;

  // middle card
  let date;

  if (dadosPincados.length > 0) {
    // top card res
    totalStores = lojasData.length;
    let mapRawPrices = dadosPincados.map((item, index) => item[0][`Loja_do_testinho_${index + 1}`].map(({ price }) => price));
    let mapUnitedPrices = mapRawPrices.map(item => item.reduce((price, currVal) => price += currVal, 0));
    let starStoreIndex = mapUnitedPrices.indexOf(mapUnitedPrices.reduce((acc, currV) => Math.max(acc, currV)));
    starStore = `Loja do testinho ${starStoreIndex + 1}`;
    totalIncome = mapUnitedPrices.reduce((price, currVal) => price += currVal, 0);
    goals = totalIncome + totalIncome * 0.1;
    // middle card res
    date = dadosPincados.map((item, index) => ({
      [`Loja_do_testinho_${index + 1}`]: item[0][`Loja_do_testinho_${index + 1}`]
        .map(({ createdAt }) => (createdAt.split('T')[0]))
    }));
  }


  console.log('reduce', date);

  return (
    <div className='GeneralVision-main-wrapper'>
      <header>
        <h1>Página Visão Geral</h1>
        <TopCards totalStores={ totalStores } totalIncome={ totalIncome } starStore={ starStore } goals={ goals } />
      </header>
      <MiddleCards date={ date } />
      <BottomCards />
    </div>
  );
};

export default GeneralVision;