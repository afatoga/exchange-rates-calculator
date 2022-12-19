import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/rates", cors(), async (req: Request, res: Response) => {
  const response = await fetch(
    "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt",
    {
      method: "GET",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "text/plain",
      },
      referrerPolicy: "no-referrer",
    }
  );

  const textOutput = await response.text();
  let lines = textOutput.split("\n");
  lines.splice(0, 2);
  if (!lines[lines.length - 1]) lines.splice(lines.length - 1, 1);
  // lines = lines.filter((item:string) => item.length); // another option

  const parsed = lines.map((singleLine: string) => {
    let item = singleLine.split("|");

    return {
      country: item[0],
      currency: item[1],
      amount: parseInt(item[2]),
      code: item[3],
      rate: parseFloat(item[4]),
    };
  });

  //console.log(parsed);

  res.send({ data: parsed });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
