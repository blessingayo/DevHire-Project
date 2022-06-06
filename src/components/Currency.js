import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/DevHireStyle/Currency.css";
const currencyData = "https://api.terawork.com/resources";

const Currency = ({ setCurrency: changeCurrency }) => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    async function getAllCurrency() {
      const r = await axios.get(currencyData);
      console.log(r.data.data.currencies);
      setCurrency(r.data.data.currencies);
    }
    getAllCurrency();
  }, []);

  return (
    <div className="currency">
      <div className="copyright">
        &copy;<span>2022 DevHire</span>
      </div>
      <div>
        <select
          className="select"
          onChange={(e) =>
            changeCurrency(
              currency.find((curr) => curr.short == e.target.value)
            )
          }
        >
          {currency.map((curr) => {
            return <option value={curr.short}>{curr.name}</option>;
          })}
        </select>
      </div>
    </div>

    /* {favorite.map((developer, i) => { */
  );
};

export default Currency;
