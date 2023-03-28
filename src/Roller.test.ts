import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

describe("Roller tests", ()=> {
  test("Description", () => {
  });

describe("Roller tests", () => {
test("No Roll Test", () => {
    const roller = new Roller(6);
    const result = roller.last();
    expect(result).toBe(0);
   });
  });

describe("Roller tests", () => {
  test("Roll 5 and get 5 Test", () => {
    const roller = new Roller(6);
    const result = roller.roll(4);
    const result2 = roller.roll(5);
    expect(result2).toBe(5);
    const expectans = roller.last();	
    expect(expectans).toBe(5);
  });
});

describe("Roller tests", () => {
  test("Roll 5 Test", () => {
    const roller = new Roller(6);
    const result = roller.roll(5);
    expect(result).toBe(5);

  });
});

describe("Roller tests", () => {
  test("Roll invalid -1 Test", () => {
    const roller = new Roller(6);
    const result = roller.roll(-1);
    expect(result).toBe(0);

  });
});




});