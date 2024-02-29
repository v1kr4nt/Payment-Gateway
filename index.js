const express = require("express");
const axios = require("axios");
const port = 3002;
const app = express();
const uniqid = require("uniqid");

const HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const MERCHANT_ID = "PGTESTPAYUAT";
const SALT_INDEX = 1;
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
const APP_BE_URL = "http://localhost:3002";

app.get("/", (req, res) => {
  res.send("App is working");
});

app.get("/pay", (req, res) => {
  const endPoint = "/pg/v1/pay";

  const merchantTransactionId = uniqid();
  const userId = 123;

  const payLoad = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: merchantTransactionId,
    merchantUserId: userId,
    amount: 30000,
    redirectUrl: `${APP_BE_URL}/payment/validate/${merchantTransactionId}`,
    redirectMode: "REDIRECT",
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

//   const xVerify = 

  const options = {
    method: "post",
    url: `${HOST_URL}${endPoint}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {},
  };
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
