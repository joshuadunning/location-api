import pino from 'pino'
import dotenv from 'dotenv'
dotenv.config({path:`.env.${process.env.NODE_ENV}`})

if(
    process.env.NODE_ENV !== 'development'
){
    pino.transport({
        targets:[
            {
                target: '@logtail/pino',
                options: {sourceToken: process.env.LOGTAIL_SOURCE_TOKEN }
            }
        ]
    })
}
const logger = pino.pino()

export default logger
