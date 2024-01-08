import {fileURLToPath} from 'url'
import * as services from '../../services/v1/category'
import {handleError} from '../../utils'

const __filename = fileURLToPath(import.meta.url)

export const retrieve = async (req, res) => {
	const errLocation = `${__filename} #CtrRetrieveCategory()`

	try {
		const response = await services.retrieveCategory({...req.params})

		const {status_code: statusCode, message, data, error} = response
		
		if (statusCode !== 200) {
			return res.status(statusCode).send({success: false, status_code: statusCode, message, error})
		}

		return res.status(statusCode).send({
			success: true,
			status_code: statusCode,
			data
		})
	} catch (err) {
		return handleError(err, res, {
			printTrace: true,
			useUUID: true,
			errLocation
		})
	}
}

export default retrieve
