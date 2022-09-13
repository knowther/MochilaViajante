const { generateText } = require("../util.js");

describe("provas de saída de dados", () =>{

    test('Saída com dados', ()=> {
        const text = generateText('Johnny', 21);
        expect(text).toBe("Johnny (21 years old)");
        const text2 = generateText('Daniel', 30);
        expect(text2).toBe("Daniel (30 years old)")
    })

    it("Saída com dados vazios", () =>{
        const text = generateText('', null);
        expect(text).toBe(' (null years old)')
    })

    test("Saída sem dados", () => {
        const text = generateText();
        expect(text).toBe("undefined (undefined years old)");
      });
})


