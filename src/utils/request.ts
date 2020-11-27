import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';
import { QueryParams } from '../models/route';

async function req<T>(endpoint: string, query: QueryParams): Promise<T> {
  const url = Url.format(getUrlWithParamsConfig(endpoint, query));
  const data = await fetch(url).then((res) => res.json());
  return data;
}

export default req;
