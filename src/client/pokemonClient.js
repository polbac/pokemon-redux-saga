import { API_LIST_URL, DELAY } from "../config";

export default {
  cache: {},
  getList() {
    return new Promise((resolve, reject) => {
      if (this.cache[API_LIST_URL]) {
        resolve(this.cache[API_LIST_URL]);
        return;
      }
      fetch(API_LIST_URL)
        .then(req => req.json())
        .then(nasaResponse => {
          this.cache[API_LIST_URL] = nasaResponse;
          setTimeout(resolve(this.cache[API_LIST_URL]), DELAY);
        });
    });
  },
  getDetail(id) {
    console.log(this.cache);
    return new Promise((resolve, reject) => {
      if (this.cache[id]) {
        resolve(this.cache[id]);
        return;
      }
      fetch(API_LIST_URL)
        .then(req => req.json())
        .then(nasaResponse => {
          const detailData = nasaResponse.find(item => item.identifier === id);
          this.cache[id] = detailData;
          setTimeout(resolve(this.cache[id]), DELAY);
        });
    });
  },
};
