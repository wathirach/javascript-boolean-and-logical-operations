import fs from "fs/promises";

describe("Boolean & Logical Operations tests cases", () => {
  test("Exercise 1: isOver18,hasNoCriminalBlacklist และ isThai ต้องมีค่าเป็น Boolean Value ", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return {isOver18,hasNoCriminalBlacklist,isThai,isAllow}`;

    const func = new Function(code);
    const { isOver18, hasNoCriminalBlacklist, isThai } = func();

    expect(typeof isOver18).toBe("boolean");
    expect(typeof hasNoCriminalBlacklist).toBe("boolean");
    expect(typeof isThai).toBe("boolean");
  });

  test("Exercise 1: isAllow ต้องมีค่าที่ถูกต้อง", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return {isAllow}`;

    const func = new Function(code);
    const { isAllow } = func();
    let answer;
    const splitAnswer = isAllow.toString();
    console.log(splitAnswer);
    console.log("isAllow :", isAllow);

    for (let isOver18 = 0; isOver18 <= 1; isOver18++) {
      for (
        let hasNoCriminalBlacklist = 0;
        hasNoCriminalBlacklist <= 1;
        hasNoCriminalBlacklist++
      ) {
        for (let isThai = 0; isThai <= 1; isThai++) {
          answer = isAllow == (isOver18 && hasNoCriminalBlacklist);
        }
      }
    }

    expect(answer).toEqual(true);
  });
});
