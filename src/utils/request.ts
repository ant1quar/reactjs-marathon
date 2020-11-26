import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, query: { [key: string]: string }) {
  const url = Url.format(getUrlWithParamsConfig(endpoint, query));
  const data = await fetch(url).then((res) => res.json());
  return data;
}

export default req;
