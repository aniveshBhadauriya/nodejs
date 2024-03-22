
const routes = require("express").Router()
const {login , auth } = require("./../controller/mainContainer")
const stre = require("./../controller/bufferStreams")
const child = require("./../controller/childProcess")
routes.get("/login",login)
routes.get("/auth",auth)
routes.get("/read",stre.read)
routes.get("/write",stre.write)

routes.get("/exec",child.execProc)
routes.get("/fork",child.forkProc)
routes.get("/spawn",child.spawnProc)



module.exports = routes;