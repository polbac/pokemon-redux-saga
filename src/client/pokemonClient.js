import { API_LIST_URL, DELAY } from "../config";

export const getList = () => {
    return new Promise((resolve, reject) => {
      fetch(API_LIST_URL)
        .then(req => req.json())
        .then(listResponse => {
          setTimeout(resolve(listResponse), DELAY);
        });
    });
  }

  export const getDetail = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(req => req.json())
        .then(detailResponse => {
          setTimeout(resolve(detailResponse), DELAY);
        });
    });
  }
