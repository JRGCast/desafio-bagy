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
          const joiningObj = puttingDataInsideObj(storeName, storeData);
          return joiningObj;
        })
      );
      setLojasData(mapping);
    };
    promisingDatas();
  }, [lojasNames]);

  return (
    <div className='GeneralVision-main-wrapper'>
      <header>
        <h1>Página Visão Geral</h1>
        <TopCards />
      </header>
      <MiddleCards />
      <BottomCards />
    </div>
  );
};

export default GeneralVision;