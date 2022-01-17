class Processor{
    static Process(data){
        var dividir = data.split("\r\n");
        var rows =[];

        dividir.forEach(row => {
            var array = row.split(",");
            rows.push(array);
        });

        return rows;
    }
}

module.exports = Processor;