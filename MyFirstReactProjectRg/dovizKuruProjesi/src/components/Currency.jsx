import React, { useState } from "react";
import "../css/currency.css";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_r1Aik9ZaIN3yr4i5vI3HSECkIesgtrfQldDmHDbQ";

function Currency() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exChange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    console.log(response.data.data[toCurrency]);
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="currency-div">
      <h1>DÖVİZ KURU UYGULAMASI</h1>
      <div className="currency">
        <div className="currency-select-wrapper">
          <select
            className="currency-option from-currency-option"
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amountInput"
          ></input>
        </div>
        <div className="arrow-wrapper">
          <FaArrowCircleRight style={{ fontSize: "24px", color: "#000" }} />
        </div>
        <div className="currency-select-wrapper">
          <select
            onChange={(e) => setToCurrency(e.target.value)}
            className="currency-option to-currency-option"
          >
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
          <input
            type="number"
            value={result}
            onChange={(e) => setResult(e.target.value)}
            className="result"
          ></input>
        </div>
        <button onClick={exChange} className="btnKurHesapla">
          Kur Hesapla
        </button>
      </div>
    </div>
  );
}

export default Currency;
