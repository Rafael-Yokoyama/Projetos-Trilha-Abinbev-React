import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  loadAllCurrenciesRequest,
  loadCurrencyRequest,
} from "../../store/ducks/currency/actions";

import CircularProgress from "@material-ui/core/CircularProgress";
import { Container } from "./styles";

const Currency = () => {
  const dispatch = useDispatch();

  const [token] = useState<string | null>(localStorage.getItem("token"));

  const { allCurrencies, loading} = useSelector(
    (state: any) => state.currency
  );

  useEffect(() => {
    dispatch(loadAllCurrenciesRequest());
  }, []);

  return (
    <>
      <Container>
        {!token && <Redirect to="/cadastro" />}
        <h1>Currencies</h1>
        <h3> SEE DETAILS </h3>
        {loading && <CircularProgress />}

        <div className="div">
          {allCurrencies !== {} &&
            Object.keys(allCurrencies).map((item: string) => (
              <ul key={allCurrencies[item]?.currency_code}>
                <li>Name: {allCurrencies[item]?.name}</li>
                <li>Symbol: {allCurrencies[item]?.symbol}</li>
                <li>Country Code: {allCurrencies[item]?.country_code}</li>
                <li>Country: {allCurrencies[item]?.country_name}</li>
              </ul>
            ))}
        </div>
      </Container>
    </>
  );
};

export default Currency;
