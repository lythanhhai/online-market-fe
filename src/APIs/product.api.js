import axios from "axios";
import {
  setLocalStorage,
  STORAGE,
  removeLocalStorage,
  getLocalStorage,
} from "../Utils/storage";
import baseUrl from "./config";

function getProduct(Data, navigate, setErr) {
  axios({
    method: "get",
    url: `${baseUrl}auth/login`,
    data: Data,
  })
    .then((res) => res.data)
    .then((data) => {
      if (data.message) {
        setErr(data.message);
      } else {
        setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
        setLocalStorage(STORAGE.USER_TOKEN, data.accessToken);
        setLocalStorage("EXPIRE", JSON.stringify(new Date()));
        navigate("/home");
      }
    })
    .catch((err) => {
      setErr(err);
      console.log(err);
    });
}

function searchProductByKeyword(keyword, setData) {
  axios({
    method: "get",
    url: `${baseUrl}auth/search-product/${keyword}`,
  })
    .then((res) => res.data)
    .then((data) => {
      return data.body;
    })
    .then((body) => {
      // console.log(body);
      setData(body);
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchProductByCategory(idCategory, setData) {
  // console.log(getLocalStorage(STORAGE.USER_TOKEN).split(".")[2]);
  axios({
    method: "get",
    url: `${baseUrl}auth/search-product-by-category-id/${idCategory}`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => {
      return res.data;
    })
    .then((data) => data.body)
    .then((body) => {
      setData(body);
    })
    .catch((err) => {
      console.log(err);
    });
}

export { getProduct, searchProductByCategory, searchProductByKeyword };
