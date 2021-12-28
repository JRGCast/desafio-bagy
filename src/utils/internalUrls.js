import EmojiPeopleTwoToneIcon from '@mui/icons-material/EmojiPeopleTwoTone';
import InsightsTwoToneIcon from '@mui/icons-material/InsightsTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import PriceCheckTwoToneIcon from '@mui/icons-material/PriceCheckTwoTone';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import StarHalfTwoToneIcon from '@mui/icons-material/StarHalfTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';


export const landingPageUrl = '/';
export const generalVUrl = '/visaogeral';
export const storesUrl = '/lojas';
export const salesUrl = '/vendas';
export const clientsUrl = '/clientes';
export const productsUrl = '/produtos';
export const planNAchvmntsUrl = '/planosemetas';
export const configsUrl = '/configuracoes';
export const loginUrl = '/login'

export const allUrlsArr = [
  { name: 'Landing Page', path: '/' },
  { name: 'Visão Geral', path: generalVUrl, icon: <InsightsTwoToneIcon /> },
  { name: 'Lojas', path: storesUrl, icon: <StoreTwoToneIcon /> },
  { name: 'Vendas', path: salesUrl, icon: <PriceCheckTwoToneIcon /> },
  { name: 'Clientes', path: clientsUrl, icon: <EmojiPeopleTwoToneIcon /> },
  { name: 'Produtos', path: productsUrl, icon: <ShoppingBasketTwoToneIcon /> },
  { name: 'Planos e Metas', path: planNAchvmntsUrl, icon: <StarHalfTwoToneIcon /> },
  { name: 'Configurações', path: configsUrl, icon: <SettingsSuggestTwoToneIcon /> },
  { name: 'Sair', path: '/', icon: <LogoutTwoToneIcon /> }
];