import {getSaludo} from "../../base/02-template-string";

async function funcAsync() {
    return await fetch('https://jsonplaceholder.typicode.com/posts');
}

describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo debe retornar Hola Pepe', () => {

        // Esta es la variable que no se sabe cual es el valor
        const  saludo = getSaludo('Pepe');

        // .toBe compara como un '==='
        expect(saludo).toBe('!Hola Pepe');
    });

    test('los objetos deben ser iguales', () => {
        const  objeto1 = {
            id: 1,
            name: 'Hola',
        };

        const  objeto2 = {
            id: 1,
            name: 'Hola',
        };

        // Si se utiliza .toBe la prueba falla pq no funciona con los objetos, hay que utilizar .toEqual
        // expect(objeto1).toBe(objeto2);
        expect(objeto1).toEqual(objeto2);
    });

    test('los objetos deben ser los mismos', () => {

        const  objetos = [{id: 1, age: 12}, {id: 2, age: 13}];

        const obj1 = objetos[1];

        // Cuando se trate de comparar que es el MISMO objeto y no uno de igual valor se puede usar el .toBe
        expect(obj1).toBe(objetos[1]);

        // Para este caso se deberia usar el .toEqual
        // const obj1 = {...objetos[1]};
        // expect(obj1).toEqual(objetos[1]);
    });

    test('saludo debe ser un srting', () => {

        // Esta es la variable que no se sabe cual es el valor
        const  saludo = getSaludo('Pepe');

        // .toBe compara como un '==='
        expect(typeof saludo).toBe('string');
    });

    test('testing con func asincronas (.then)', (done) => {

        // Para trabajar con funciones asincronas, sin hacer asincrono el 'test' ES necesario poner el 'done()'
        // para que espere a que se resuelva la promesa
        funcAsync().then((rsp) => {
            expect(rsp.status).toBe(200);
            done();
        });
    });

    test('testing con func asincronas (await)', async () => {

        // Para trabajar con funciones asincronas haciendo asincrono el 'test' NO ES necesario poner el 'done()'
        // para que espere a que se resuelva la promesa, para esto tenemos el await
        const rsp = await funcAsync();

        expect(rsp.status).toBe(200);
    });

});
