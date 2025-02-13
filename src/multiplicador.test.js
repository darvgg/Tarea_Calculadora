import multilicar from "./multiplicador.js";

describe("Multiplicar", () => {
  it("deberia multiplicar dos numeros", () => {
    expect(multilicar(3, 2)).toEqual(6);
  });
});