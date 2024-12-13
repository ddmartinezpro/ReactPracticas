
describe('Pruebas en el archivo demo.test.js', () => {
   test('deben ser iguales los strings', () => {
       // Esta es la variable que no se sabe cual es el valor
       const string1 = 'Hola Mundo';

       // Este es el valor que se espera de la variable
       const string2 = 'Hola Mundo';

       // .toBe compara como un '==='
       expect(string1).toBe(string2);
   })
});
