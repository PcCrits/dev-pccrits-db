import {fileURLToPath} from 'url'
import User from '../../../models/User'

const __filename = fileURLToPath(import.meta.url)

const retrieveProfile = async (payload) => {
	console.log('Invoke #retrieveProfile()', payload, __filename)

	try {
		const response = await User.findOne({
			_id: payload.id,
			deleted_at: null
		})

		if (!response) {
			const error = 'Cannot find Profile'

			return {status_code: 400, error}
		}
		
		return {
			status_code: 200,
			success: true,
			data: response
		}
	} catch (error) {
		console.log(error)

		return {status_code: 400, error: error.message}
	}
}

export default retrieveProfile
