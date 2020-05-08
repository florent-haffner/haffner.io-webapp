import http from './abstract.service';

const getServersState = () => {
  return http.get('');
};

export default {
  getServersState,
};
