import { Request, Response } from 'express';
const getListCompany = async (req: Request, res: Response) => {
    res.send("OK con bò")
}

export default { getListCompany }