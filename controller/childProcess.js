
const {fork, exec,spawn, execFile} = require("child_process")

module.exports.execProc = async()=>{



}

module.exports.spawnProc = async()=>{
    var progs = {
        list:'ls',
        copy:'cp',
        folder:'mkdir'
    }
    console.log('first----> spawn')
    //  will run a command on different process , 
    // command  to ls(to see all files in current directory)
    // const ls = spawn('ls',[])
    // const ls = spawn('ls', ['-lh', '/usr']);
    const ls = spawn(progs.list, ['-lh', '/usr']);

    ls.stdout.on("data",(data)=>{
        console.log(data)
    })
    ls.stderr.on("error",(error)=>{
        console.log(error,"erooorrr========>")
    })
    ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
}

module.exports.forkProc = async()=>{

}
module.exports.execProcProc = async()=>{

}