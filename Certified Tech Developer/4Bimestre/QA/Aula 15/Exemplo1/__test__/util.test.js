const PATH = "../util.js";
const { generateText } = require(PATH);
const { createElement } = require(PATH);
const { validateInput } = require(PATH);

describe("provas de saída de dados", () => {
  test("Saída com dados", () => {
    const text = generateText("Johnny", 21);
    expect(text).toBe("Johnny (21 years old)");
    const text2 = generateText("Daniel", 30);
    expect(text2).toBe("Daniel (30 years old)");
  });

  it("Saída com dados vazios", () => {
    const text = generateText("", null);
    expect(text).toBe(" (null years old)");
  });

  test("Saída sem dados", () => {
    const text = generateText();
    expect(text).toBe("undefined (undefined years old)");
  });
});

describe("prova de elemento criado", () => {
  test("Elemento existe", () => {
    const element = createElement(
      "li",
      generateText("Johnny (21 years old)"),
      "user-item"
    );
    expect(element).toBeTruthy();
  });

  it("Elemento criado sem dados", () => {
    const element = createElement("li", generateText(), "user-item");
    expect(element.textContent).toBe("undefined (undefined years old)");
  });
});

describe("prova de não aceitar valores inválidos", () => {
  test("Validate Input function text", () => {
    const ret = validateInput("texto");
    expect(ret).toBeTruthy();
  });
  test("Validate Input function empty", () => {
    const ret = validateInput();
    expect(ret).toBeFalsy();
  });
  test("Validate Input function number", () => {
    const ret = validateInput(null, true, false);
    expect(ret).toBeFalsy();
  });
  test("Validate Input function text empty", () => {
    const ret = validateInput(" ", true, false);
    expect(ret).toBeFalsy();
  });
  test("Validate Input function text NaN", () => {
    const ret = validateInput(NaN, false, true);
    expect(ret).toBeFalsy();
  });
});

describe('Validate Create element',() => {
    test('Create new element with data', () => {
        const element = createElement('li', "exampleElement", 'user-item');
        expect(element.textContent).toMatch(/exampleElement/);
    });
    test('Create new element without data', () => {
        const element = createElement(null);
        expect(element.textContent).toBe("");
    });
})