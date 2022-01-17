const fs = require("fs");
const util = require("util")

// var novaFuncao = util.promisify(antigaFuncao)

class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepath){
        /*
        fs.readFile(filepath, "utf-8", (error, data) => {
            if(error){
                console.log(error);
            } else{
                console.log(data);
            }
        });
        */
       try{
        return await this.reader(filepath, "utf-8");
       } catch(err) {
        return undefined;
       }
       
    }
}

module.exports = Reader;