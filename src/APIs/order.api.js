import axios from "axios";
import {
  setLocalStorage,
  STORAGE,
  removeLocalStorage,
  getLocalStorage,
} from "../Utils/storage";
import baseUrl from "./config";

function getStatus(setListStatus) {
  axios({
    method: "get",
    url: `${baseUrl}order/get-status`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      setListStatus(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getPayment(setListPayment) {
  axios({
    method: "get",
    url: `${baseUrl}order/get-payment`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      setListStatus(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getOrderTransport(setListOrderTransport) {
  axios({
    method: "get",
    url: `${baseUrl}order/get-order-transport`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      return res.body;
    })
    .then((body) => {
      setListOrderTransport(body);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getOrderReceived(setListOrderReceived) {
  axios({
    method: "get",
    url: `${baseUrl}order/get-order-received`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      return res.body;
    })
    .then((body) => {
      setListOrderReceived(body);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getOrderOrdered(setListOrderOrdered) {
  axios({
    method: "get",
    url: `${baseUrl}order/get-order-ordered`,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      return res.body;
    })
    .then((body) => {
      setListOrderOrdered(body);
    })
    .catch((err) => {
      console.log(err);
    });
}

function getInforOrder(Data) {
  axios({
    method: "post",
    url: `${baseUrl}order/get-infor-order`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createOrder(Data) {
  axios({
    method: "post",
    url: `${baseUrl}order/create-rder`,
    data: Data,
    headers: {
      Authorization: `${getLocalStorage(STORAGE.USER_TOKEN)}`,
    },
  })
    .then((res) => res.data)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export {
  createOrder,
  getInforOrder,
  getStatus,
  getPayment,
  getOrderOrdered,
  getOrderReceived,
  getOrderTransport,
};
