/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

const arya = {
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: ['Not today', 'A girl has no name.']
}
const brienne = {
  name: 'Brienne Tarth',
  class: 'Knight',
  phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']
}
const melissandre = {
  name: 'Melissandre',
  class: 'Necromancer',
  phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']
}
describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    expect(getCharacter()).toBe(undefined);
    expect(getCharacter('Arya')).toEqual(arya);
    expect(getCharacter('Brienne')).toEqual(brienne);
    expect(getCharacter('Melissandre')).toEqual(melissandre);
    expect(getCharacter('melissandre')).not.toEqual(undefined);
    expect(getCharacter('abc')).toEqual(undefined);
  });
});
