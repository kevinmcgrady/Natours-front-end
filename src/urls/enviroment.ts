type enviromentUrl = 'dev' | 'pro';

const enviromentUrls = {
  dev: `http://localhost:8000`,
  pro: 'https://natours-api.herokuapp.com',
};

let enviroment: enviromentUrl;

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  enviroment = 'dev';
} else if (process.env.NODE_ENV === 'production') {
  enviroment = 'pro';
}

export const getEnviromentUrl = () => {
  return enviromentUrls[enviroment];
};
