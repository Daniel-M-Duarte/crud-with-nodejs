const fs = require('fs');
const path = require('path');

// Criando uma pasta
fs.mkdir(path.join(__dirname, "Pasta"), (error) =>{
    if (error) return console.log('Erro: ', error);
    console.log('Pasta criada com sucesso!!');
});

fs.writeFile
(path.join(__dirname, '/pasta', "test.txt"), "Hello node",
(error) =>{
    if(error) return console.log('Error: ', error);
    console.log('Arquivo criado com sucesso!!');

    fs.appendFile
    (path.join(__dirname, '/pasta', "test.txt"), " Hello world !!",
    (error) =>{
        if(error) return console.log('Error: ', error);
        console.log('Arquivo modificado com sucesso!!');
    });

    fs.readFile
    (path.join(__dirname, '/pasta', 'test.txt'), "utf8", (error, data) =>{
        if(error) return console.log('Erro: ', error);
        console.log(data);
    })       
    
});


