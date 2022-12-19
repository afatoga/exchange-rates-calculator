export const getRates = () =>
  fetch("http://0.0.0.0:3000/rates", {
    method: "GET",
  }).then((res) => {
    return res.json();
  });
