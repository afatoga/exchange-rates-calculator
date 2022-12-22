import { useQuery } from "@tanstack/react-query";
import { getRates } from "../../../api/queries";
import {
  Title,
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
        <>
          <Table>
            <thead>
              <tr>
                <HeadingCell>Country</HeadingCell>
                <HeadingCell>Currency</HeadingCell>
                <HeadingCell>Code</HeadingCell>
                <HeadingCell align={"right"}>Amount</HeadingCell>
                <HeadingCell align={"right"}>Rate</HeadingCell>
              </tr>
            </thead>
            <tbody>
              {data.map((line: TRate) => {
                return (
                  <TableLine key={line.code}>
                    <Cell>{line.country}</Cell>
                    <Cell>{line.currency}</Cell>
                    <Cell>{line.code}</Cell>
                    <Cell align={"right"}>{line.amount}</Cell>
                    <RateCell>{line.rate}</RateCell>
                  </TableLine>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};
