type enviromentUrl = 'dev' | 'pro';

const enviromentUrls = {
  dev: 'http://localhost:8000',
  pro: 'https://natours-api.herokuapp.com',
};

const enviroment: enviromentUrl = 'pro';

export const getEnviromentUrl = () => {
  return enviromentUrls[enviroment];
};
