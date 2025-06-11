import { Request, Response } from 'express';
import Company from '../models/company.model';


const getListCompany = async (req: Request, res: Response) => {
    const companies = Company.find({})
    res.json(companies)
}

export default { getListCompany }
