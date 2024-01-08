import {fileURLToPath} from 'url'
import * as services from '../../services/v1/category'
import {handleError} from '../../utils'

const __filename = fileURLToPath(import.meta.url)

export const create = async (req, res) => {
	const errLocation = `${__filename} #CtrCreateCategory()`

	try {
		const response = await services.createCategory(req.body)

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

export default create
