import {fileURLToPath} from 'url'
import mongoose from 'mongoose'
import Category from '../../../models/Category'

const __filename = fileURLToPath(import.meta.url)

const updateCategory = async (payload) => {
	console.log('Invoke #updateCategory()', payload, __filename)

	const session = await mongoose.startSession()
	session.startTransaction()

	try {
		const {filter, data} = payload

		const response = await Category.findOneAndUpdate(filter, data, {new: true})

		if (!response) {
			const error = 'Category you are trying to update was not found'

			return {status_code: 400, error}
		}

		session.commitTransaction()
		session.endSession()

		return {
			status_code: 200,
			success: true,
			data: response
		}
	} catch (error) {
		console.log(error)

		session.abortTransaction()
		session.endSession()

		return {status_code: 400, error: error.message}
	}
}

export default updateCategory
