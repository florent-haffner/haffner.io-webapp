import http from './abstract.service';

const getAllByUUID = uuid => {
  return http.get(`chatbot/${uuid}`);
};

const create = data => {
  return http.put(`chatbot`, data);
};

export default {
  getAllByUUID,
  create,
};
