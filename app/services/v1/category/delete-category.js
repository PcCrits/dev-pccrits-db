import {fileURLToPath} from 'url'
import mongoose from 'mongoose'
import Category from '../../../models/Category'

const __filename = fileURLToPath(import.meta.url)

const deleteCategory = async (payload) => {
	console.log('Invoke #deleteCategory()', payload, __filename)

	const session = await mongoose.startSession()
	session.startTransaction()

	try {
		const response = await Category.findOne({_id: payload.id, deleted_at: null})

		if (!response) {
			const error = 'Category you are trying to delete was not found'

			return {status_code: 400, error}
		}
 
		await Category.findByIdAndUpdate(payload.id, {
			deleted_at: new Date()
		})
		
		session.commitTransaction()
		session.endSession()

		return {
			status_code: 200,
			success: true
		}
	} catch (error) {
		console.log(error)

		session.abortTransaction()
		session.endSession()

		return {status_code: 400, error: error.message}
	}
}

export default deleteCategory
