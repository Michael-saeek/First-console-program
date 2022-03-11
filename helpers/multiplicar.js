const fs = require('fs')

const createFile = ( base = 5, nameFile, listar = false) => {

    const promesa = new Promise( (resolve, reject) => {

        if (typeof base == 'number' && base <= 10 ) {

            console.clear()
          
        
            let outputText = ''
        
            for (let i = 1; i <= 10; i++ ) {
                outputText += (`${base} x ${i} = ${base*i}\n`)
            }

            if (listar == true) {
                resolve (nameFile)
                console.log(outputText) 
            } else {

                console.log('==============')
                console.log(`'Tabla multiplicar del ${base}; '`)
                console.log('==============')

                fs.writeFileSync(`${nameFile}del${base}.txt`, outputText,  )
                console.log(`Tabla del ${base} creada !`)
                resolve (nameFile)
            }
         
            // lo que retorna aqui me lo envia al .then

        } else {
            reject ('El parametro recebido no es un numero o es mayor al número 10')
        }

       
    })

    return promesa;

}

module.exports = {
    crearArchivo: createFile
}