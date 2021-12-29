import { useEffect, useState } from "react";
import BottomCards from "../components/BottomCards";
import MiddleCards from "../components/MiddleCards";
import TopCards from "../components/TopCards";
import {
  DB_GRAPHQL_URL, LOJA_1_TOKEN, LOJA_2_TOKEN,
  LOJA_3_TOKEN, LOJA_4_TOKEN, LOJA_5_TOKEN
} from '../utils/externalUrls';
import getData from '../utils/getData';
import { getStorageNameQuery } from '../utils/queryTypes';

const GeneralVision = () => {
  const [lojasNames, setLojasNames] = useState([]);
  const [lojasData, setLojasData] = useState([]);

  const puttingDataInsideObj = async (obj, data) => ({ [obj]: data });

  // useEffect(() => {
  //   const promisingNames = async () =>
  //     Promise.all([
  //       Promise.resolve(getData(DB_GRAPHQL_URL, LOJA_1_TOKEN, getStorageNameQuery)),
  //       Promise.resolve(getData(DB_GRAPHQL_URL, LOJA_2_TOKEN, getStorageNameQuery)),
  //       Promise.resolve(getData(DB_GRAPHQL_URL, LOJA_3_TOKEN, getStorageNameQuery)),
  //       Promise.resolve(getData(DB_GRAPHQL_URL, LOJA_4_TOKEN, getStorageNameQuery)),
  //       Promise.resolve(getData(DB_GRAPHQL_URL, LOJA_5_TOKEN, getStorageNameQuery)),])
  //       .then((values) => { setLojasNames(values); });
  //   promisingNames();
  // }, []);
  // useEffect(() => {
  //   const promisingObjs = () => lojasNames.forEach(({ data: { me: { name } } }, index) => {
  //     console.log(name, `LOJA_${index + 1}_TOKEN`);
  //   });
  //   promisingObjs();
  // }, [lojasNames]);
  return (
    <div className='GeneralVision-main-wrapper'>
    {console.log(Object.values(LOJA_1_TOKEN))}
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