
// streams - the process 
// buffer - chunk of data that is transfering/passing 
// readable - to read
// writable - to write 
// duplex - to both
// transform - to transfer 


const fs = require("fs")
const {Duplex} = require("stream")

module.exports.read = async (req,res) =>{
    try{
        readfile = fs.ReadStream("./myDataFile.txt",'utf8')
        
        readfile.on("data",(datachunk)=>{
            console.log("===================================================>>")
            // console.log(JSON.stringify(datachunk))
        })
        readfile.on("end",()=>{
            console.log("END")
        })
        res.sendStatus(200)
        readfile.on('error', (err) => {
            console.error('An error occurred:', err);
          });
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
    }

}

module.exports.write = async (req,res) =>{
    try{
        writefile = fs.WriteStream("outful.txt")
        writefile.write("fdafadfd")
        writefile.write("dsf") 
        writefile.write("asssssss")
        
        writefile.end()
        res.sendStatus(200)
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
    }

}

