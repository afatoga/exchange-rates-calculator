import { useQuery } from "@tanstack/react-query";
import { getRates } from "../../../api/queries";
import {
  Title,
  TableContainer,
  Table,
  TableLine,
  Cell,
  RateCell,
  HeadingCell,
} from "./Rates.styles";

import { TRate } from "../../../api/Rates";

export const Rates = () => {
  const today = new Date().toLocaleDateString();

  const { isLoading, error, data } = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
  });

  return (
    <>
      <Title>CZK Exchange rates on {today}</Title>
      {error && "connection error"}
      {isLoading && "loading..."}
      {data?.length && (
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <HeadingCell width={"10%"}>Code</HeadingCell>
                <HeadingCell mobileHidden={true} width={"16%"}>
                  Currency
                </HeadingCell>
                <HeadingCell width={"20%"} mobileHidden={true}>
                  Country
                </HeadingCell>
                <HeadingCell align={"right"} width={"10%"}>
                  Amount
                </HeadingCell>
                <HeadingCell align={"right"} width={"16%"}>
                  Rate
                </HeadingCell>
              </tr>
            </thead>
            <tbody>
              {data.map((line: TRate) => {
                return (
                  <TableLine key={line.code}>
                    <Cell>{line.code}</Cell>
                    <Cell mobileHidden={true}>{line.currency}</Cell>
                    <Cell mobileHidden={true}>{line.country}</Cell>
                    <Cell align={"right"}>{line.amount}</Cell>
                    <RateCell>{line.rate.toFixed(3)}</RateCell>
                  </TableLine>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
