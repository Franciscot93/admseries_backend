import { Router } from "express";
import { getSeries,getSerie,createSerie,updateSerie,deleteSerie,getUser } from "../controllers/series.controllers.js";
const router=Router()

router.get(`/api/series`,getSeries)

router.get(`/api/series/:idSerie`,getSerie)

router.post(`/api/series`,createSerie)

router.put(`/api/series/:idSerie`,updateSerie)

router.delete(`/api/series/:idSerie`,deleteSerie)

router.get(`/api/users`,getUser)

export default router