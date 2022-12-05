import axios from "axios";
import {
  setLocalStorage,
  STORAGE,
  removeLocalStorage,
  getLocalStorage,
} from "../Utils/storage";
import baseUrl from "./config";

function getItem() {
  axios({
    method: "get",
    url: `${baseUrl}cart/get-item`,
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getItemById(idItem) {
  axios({
    method: "get",
    url: `${baseUrl}cart/get-item/${idItem}`,
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getItemOrder(idOrder) {
  axios({
    method: "get",
    url: `${baseUrl}cart/get-item-order/${idOrder}`,
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function addItemToCart(Data) {
  axios({
    method: "post",
    url: `${baseUrl}cart/add-item`,
    data: Data,
  })
    .then((res) => res.data)
    .then((data) => {
      return data.body;
    })
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateItemInCart(Data) {
  axios({
    method: "put",
    url: `${baseUrl}auth/update-item`,
    data: Data,
  })
    .then((res) => res.data)
    .then((data) => {
      return data.body;
    })
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteItemInCart(idItem) {
  // console.log(getLocalStorage(STORAGE.USER_TOKEN).split(".")[2]);
  axios({
    method: "delete",
    url: `${baseUrl}cart/delete-item/${idItem}`,
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

export {
  getItem,
  getItemById,
  getItemOrder,
  addItemToCart,
  deleteItemInCart,
  updateItemInCart,
};
