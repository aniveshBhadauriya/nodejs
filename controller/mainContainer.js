


const login = async (req, res)=>{

    req.session.userId = Math.random(5000)
    res.sendStatus(200)


}

const auth = async (req, res)=>{
    console.log(req.session.userId,"---")

    if(req.session.userId){

        res.sendStatus(200)
    }
    else{
        res.sendStatus(401)
    }


}

module.exports = {login, auth}