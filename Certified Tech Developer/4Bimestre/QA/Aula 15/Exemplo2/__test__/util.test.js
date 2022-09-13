const PATH = "../util.js";
const { arrEstados } = require(PATH);
const { arrDias } = require(PATH);
const { expReg } = require(PATH);

test("São Paulo no array", () => {
  expect(arrEstados()).toContain("São Paulo");
});

test("Array dia com 7 elementos", () => {
  expect(arrDias()).toHaveLength(7);
});
