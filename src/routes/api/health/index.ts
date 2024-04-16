import { Request, Response } from 'express'
import dotenv from 'dotenv'
import logger from "../../../lib/logger.js";
dotenv.config({path:`.env.${process.env.NODE_ENV}`})

export const get = (req:Request, res:Response) => {
    res.removeHeader('X-Powered-By')
    res.setHeader('Date', '')
    res.setHeader('Last-Modified', '')
    logger.info('Health check info')
    logger.warn('Health check warn')
    logger.error('Health check error')
    res.send('ok')
}
