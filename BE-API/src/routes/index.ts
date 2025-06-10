import { Router } from "express"
import companyRoutes from "./company-route"
const routes = Router();

routes.use("/company", companyRoutes)


export default routes; 