import { useQuery } from "@tanstack/react-query";
import {
  Title,
  Table,
  TableLine,
  Cell,
  RateCell,
  HeadingCell,
} from "./Rates.styles";

type TRate = {
  country: string;
  currency: string;
  code: string;
  amount: number;
  rate: number;
};

export const Rates = () => {
  const today = new Date().toLocaleDateString();

  const { isLoading, error, data } = useQuery({
    queryKey: ["rates"],
    queryFn: () =>
      fetch("http://0.0.0.0:3000/rates", {
        method: "GET",
      }).then((res) => {
        return res.json();
      }),
  });

  return (
    <>
      <Title>Exchange rates on {today}</Title>
      {error && "connection error"}
      {isLoading && "loading..."}
      {data?.data.length && (
        <>
          <Table>
            <thead>
              <tr>
                <HeadingCell>Country</HeadingCell>
                <HeadingCell>Currency</HeadingCell>
                <HeadingCell>Code</HeadingCell>
                <HeadingCell align={"right"}>Rate</HeadingCell>
              </tr>
            </thead>
            <tbody>
              {data.data.map((line: TRate) => {
                return (
                  <TableLine key={line.code}>
                    <Cell>{line.country}</Cell>
                    <Cell>{line.currency}</Cell>
                    <Cell>{line.code}</Cell>
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
