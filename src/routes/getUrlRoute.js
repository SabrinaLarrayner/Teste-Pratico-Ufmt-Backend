import express  from "express";
import GetUrlController from "../controllers/getUrlController.js";

const router = express.Router();

router.get("/getUrl", GetUrlController.listUrl)


export default router;