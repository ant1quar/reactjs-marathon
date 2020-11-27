export default interface Config {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: {
      [key: string]: {
        method: 'GET' | 'POST' | 'DELETE';
        uri: {
          pathname: string;
        };
      };
    };
  };
}
