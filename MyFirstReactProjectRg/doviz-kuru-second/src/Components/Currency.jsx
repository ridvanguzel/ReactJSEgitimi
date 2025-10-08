import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "enter own api key";
function Currency() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [fromCurrencyValue, setFromCurrencyValue] = useState(0);
  const [toCurrency, setToCurrency] = useState("TRY");
  const [toCurrencyValue, setToCurrencyValue] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    console.log(response.data.data[toCurrency]);
    const result = (response.data.data[toCurrency] * fromCurrencyValue).toFixed(
      2
    );
    setToCurrencyValue(result);
  };

  return (
    <>
      <div>
        <select onChange={(e) => setFromCurrency(e.target.value)}>
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <input
          type="number"
          value={fromCurrencyValue}
          onChange={(e) => setFromCurrencyValue(e.target.value)}
        ></input>
        <FaArrowCircleRight />
        <select onChange={(e) => setToCurrency(e.target.value)}>
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input
          type="number"
          value={toCurrencyValue}
          onChange={(e) => setToCurrencyValue(e.target.value)}
        ></input>
        <button onClick={exchange}>Hesapla</button>
      </div>
    </>
  );
}

export default Currency;
