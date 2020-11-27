import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: { [key: string]: string }) {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {
      ...query,
    },
  };
}
export default getUrlWithParamsConfig;
