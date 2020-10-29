const argv = require("./config/yargs").argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
let comando = argv._[0];
switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite)
            .then((tabla) => console.log(`La tabla es:${tabla}`))
            .catch((err) => console.log(err));
        break;
    case "crear":
        console.log("crear");
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo crado:${archivo}`))
            .catch((err) => console.log(err));
        break;
    default:
        console.log("comando no reconocido");
        break;
}
console.log(argv);

// let argv2 = process.argv;
// console.log('limite', argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];