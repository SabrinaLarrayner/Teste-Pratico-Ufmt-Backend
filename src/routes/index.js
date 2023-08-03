import express  from "express";
import getUrl from "./getUrlRoute.js"

const routes = (app) => {
    app.route('/').get((req,res) => {
        console.log("Entrou")
        res.status(200).send({title:"HomePage"})
    })

    app.use(
        express.json(),
        getUrl
    )
}

export default routes