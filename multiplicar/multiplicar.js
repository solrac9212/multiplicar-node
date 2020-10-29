const fs = require('fs');
var colors = require('colors');




let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introduciodo ${base}  no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introduciodo ${limite}  no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {


            data += (`${base} * ${i} = ${base*i} \n`);
        }
        // const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`.green)
        });

    });



}


let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introduciodo ${base}  no es un numero`);
            return;
        }
        let data = '';
        console.log('================');
        console.log(`=======tabla de ${base}=========`.green);
        console.log('================');

        for (let i = 1; i <= limite; i++) {


            data += (`${base} * ${i} = ${base*i} \n`);
        }
        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}