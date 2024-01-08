import {fileURLToPath} from 'url'
import Category from '../../../models/Category'

const __filename = fileURLToPath(import.meta.url)

const retrieveCategory = async (payload) => {
	console.log('Invoke #retrieveCategory()', payload, __filename)

	try {
		const response = await Category.findOne({
			_id: payload.id,
			deleted_at: null
		})

		if (!Category) {
			const error = 'Cannot find Category'

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

export default retrieveCategory
