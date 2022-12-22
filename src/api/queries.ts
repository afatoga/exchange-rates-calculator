import { TRate } from "./Rates";

export const getRates = (): Promise<TRate[]> =>
  fetch("http://0.0.0.0:3000/rates", {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ data: TRate[] }>;
    })
    .then((obj) => obj.data);
