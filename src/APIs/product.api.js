import axios from "axios";
import {
  setLocalStorage,
  STORAGE,
  removeLocalStorage,
  getLocalStorage,
} from "../Utils/storage";
import baseUrl from "./config";

function getAllProduct(setListProduct) {
  axios({
    method: "get",
    url: `${baseUrl}product/get-all-product`,
  })
    .then((res) => res.data)
    .then((data) => {
      return data.body;
    })
    .then((body) => {
      setListProduct(body);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getAllCategory(setListCategory) {
  axios({
    method: "get",
    url: `${baseUrl}product/get-all-category`,
  })
    .then((res) => res.data)
    .then((data) => {
      setListCategory(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchProductByKeyword(keyword, setData) {
  axios({
    method: "get",
    url: `${baseUrl}product/search-product/${keyword}`,
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
    url: `${baseUrl}product/search-product-by-category-id/${idCategory}`,
    // headers: {
    //   Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    // },
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

export {
  getAllProduct,
  searchProductByCategory,
  searchProductByKeyword,
  getAllCategory,
};