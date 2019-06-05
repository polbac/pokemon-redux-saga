import { API_LIST_URL, DELAY } from "../config";

export default {
  cache: {},
  getList() {
    return new Promise((resolve, reject) => {
      fetch(API_LIST_URL)
        .then(req => req.json())
        .then(listResponse => {
          setTimeout(resolve(listResponse), DELAY);
        });
    });
  },
  getDetail(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(req => req.json())
        .then(detailResponse => {
          setTimeout(resolve(detailResponse), DELAY);
        });
    });
  },
};
