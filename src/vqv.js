const vqv = (name, age) => {
  if (name !== undefined || age !== undefined) {
    return `Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  } 
   return undefined;
};

module.exports = vqv;
