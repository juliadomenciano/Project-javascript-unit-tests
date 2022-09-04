const createMenu = require('../src/restaurant');
 
describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    
    expect(typeof createMenu().fetchMenu).toEqual('function');
   
    expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toEqual({"drink": {}, "food": {}});

    expect(createMenu({food: {coxinha: 3.9}, drink: {agua: 3.9}}).fetchMenu()).toEqual({food: {coxinha: 3.9}, drink: {agua: 3.9}});
    
    expect(createMenu({ food: {}, drink: {} }).consumption).toEqual([]);
   
    const obj = createMenu('objetoQualquer');
    obj.order('coxinha');

    expect(obj.consumption).toEqual(['coxinha']);
   
    obj.order("agua");
    obj.order("sopa");
    obj.order("sashimi");

    expect(obj.consumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi']);

    const obj2 = createMenu('objetoQualquer');
    obj2.order('coxinha');
    obj2.order("agua");
    obj2.order("coxinha");

    expect(obj2.consumption).toEqual(['coxinha', 'agua', 'coxinha']);
  
    const final = createMenu({ food: { coxinha: 3.9}, drink: { agua: 3.9} });
    
    final.order('coxinha');
    final.order("agua");
    final.order("coxinha");

    expect(final.pay({ food: { coxinha: 3.9}, drink: { agua: 3.9} })).toEqual(12.87);

  });
});
