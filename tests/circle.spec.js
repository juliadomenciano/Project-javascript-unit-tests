/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

const size = Object.keys(circle(3)).length;
const area = parseFloat((circle(3).area).toFixed(2));
const obj = (Object.values(circle(3)));
const values = obj.forEach((item, index, arr) => {
  arr[index] = (item.toFixed(2)).toString();
});
  

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    expect(circle('')).toEqual(undefined);
    expect(typeof circle(3)).toEqual('object');
    expect(size).toBe(3);
    expect(circle()).toEqual(undefined);
    expect(circle(2)).toHaveProperty('circumference', 12.56);
    expect(area).toEqual(28.26);
    expect(obj).toEqual(['3.00', '28.26', '18.84']);
  });
});
