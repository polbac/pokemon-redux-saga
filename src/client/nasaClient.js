import { API_URL_WITH_KEY, DELAY } from "../config";

export default {
  cache: {},
  getList() {
    return new Promise((resolve, reject) => {
      if (this.cache[API_URL_WITH_KEY]) {
        resolve(this.cache[API_URL_WITH_KEY]);
        return;
      }
      fetch(API_URL_WITH_KEY)
        .then(req => req.json())
        .then(nasaResponse => {
          this.cache[API_URL_WITH_KEY] = nasaResponse;
          setTimeout(resolve(this.cache[API_URL_WITH_KEY]), DELAY);
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
      fetch(API_URL_WITH_KEY)
        .then(req => req.json())
        .then(nasaResponse => {
          const detailData = nasaResponse.find(item => item.identifier === id);
          this.cache[id] = detailData;
          setTimeout(resolve(this.cache[id]), DELAY);
        });
    });
  },
};
