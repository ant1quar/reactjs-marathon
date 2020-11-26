import config from '../config';
import { QueryParams } from '../models/route';

function getUrlWithParamsConfig(endpointConfig: string, query: QueryParams) {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };
}
export default getUrlWithParamsConfig;
