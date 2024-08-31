import { Sum } from "../Sum";


test("Sum function should calculate the sum of two numbers" , () => {
    const result = Sum(3,5);

    //Assertion
    expect(result).toBe(8);
});