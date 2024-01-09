import {fileURLToPath} from 'url'
import * as services from '../../services/v1/profile'
import {handleError} from '../../utils'

const __filename = fileURLToPath(import.meta.url)

export const update = async (req, res) => {
	const errLocation = `${__filename} #CtrUpdateProfile()`

	try {
		const payload = {filter: {_id: req.params.id}, data: {...req.body}}
		const response = await services.updateProfile(payload)

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

export default update
