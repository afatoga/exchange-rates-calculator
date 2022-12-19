import React, { useState } from "react";
import { FormGroup, SubmitButton, Title } from "./Form.styles";
import { useQuery } from "@tanstack/react-query";
import { getRates } from "../../../api/queries";
import { TRate } from "../../../api/Rates";

type TProps = {
  title: string;
};

export const Form = (props: TProps) => {
  const [amount, setAmount] = useState<number | "">("");
  const [secondCurrency, setSecondCurrency] = useState<string>("");
  const [conversionResult, setConversionResult] = useState<number | null>(null);

  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       staleTime: Infinity,
  //     },
  //   },
  // })

  const { isLoading, error, data } = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
    enabled: amount !== 0,
  });

  const convert = () => {
    //const data = await queryClient.ensureQueryData({queryKey: ['rates'], queryFn: getRates} )

    if (typeof amount !== "number" || amount <= 0)
      return alert("provide value bigger than 0");
    if (!secondCurrency.length) return alert("choose currency");
    if (!data) return alert("connection error");

    const conversionRule: TRate | undefined = data.data.find(
      (item: TRate) => item.code === secondCurrency
    );
    if (!conversionRule) return alert("unknown currency");

    let result =
      conversionRule.rate >= 1
        ? amount / conversionRule.rate
        : conversionRule.rate / amount;

    setConversionResult(result);
  };

  const amountHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setConversionResult(null); //reset
    const newValue: string = event.currentTarget.value;
    if (!newValue.length) return setAmount("");
    setAmount(parseFloat(newValue));
  };

  const currencyHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setConversionResult(null); //reset
    setSecondCurrency(event.target.value);
  };

  return (
    <>
      <Title>{props.title}</Title>
      <form onSubmit={(event) => event.preventDefault()}>
        <FormGroup>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min={0}
            value={amount}
            onChange={amountHandler}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="currency">Currency</label>
          <select id={"currency"} onChange={currencyHandler}>
            <option value=""> - </option>
            {data?.data.map((item: TRate) => (
              <option key={item.code} value={item.code}>
                {item.code}
              </option>
            ))}
          </select>
        </FormGroup>

        <SubmitButton onClick={convert}>Convert</SubmitButton>
      </form>
      {conversionResult && (
        <p>
          Amount of {`${amount}`} CZK is {`${conversionResult.toFixed(4)}`}{" "}
          {`${secondCurrency}`}
        </p>
      )}
    </>
  );
};
