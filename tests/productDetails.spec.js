const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function')
    expect(productDetails()).toEqual(expect.arrayContaining([]))
    expect(productDetails().length).toEqual(2)
    expect(typeof productDetails()[0]).toBe('object')
    expect(productDetails('a','b')[0]).not.toEqual(productDetails('a','b')[1])
    expect(productDetails('a','b')[0].details.productId).toBe('a123')

  });
});
