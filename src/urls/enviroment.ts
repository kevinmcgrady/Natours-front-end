type enviromentUrl = 'dev' | 'pro';

const enviromentUrls = {
  dev: 'http://localhost:8000',
  pro: '',
};

const enviroment: enviromentUrl = 'dev';

export const getEnviromentUrl = () => {
  return enviromentUrls[enviroment];
};
