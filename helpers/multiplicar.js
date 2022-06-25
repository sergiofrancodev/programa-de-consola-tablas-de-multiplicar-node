const fs = require('fs');
const colors = require('colors');
const { number } = require('yargs');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;

            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
            
        }

        if (listar) {
            console.log('=================='.green);
            console.log(colors.bgBlack.white('TABLA DEL ', base));
            console.log('=================='.green);
            console.log(consola);

        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla del ${base}`;
        

    } catch (error) {

        throw error;

    }
}

module.exports = {
    crearArchivo,
};