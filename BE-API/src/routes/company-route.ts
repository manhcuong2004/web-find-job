import { Router } from "express"
import { Request, Response } from 'express';
import companyControllers from '../controllers/company-controller'
const companyRoutes = Router();

companyRoutes.get("/", companyControllers.getListCompany)


export default companyRoutes; 