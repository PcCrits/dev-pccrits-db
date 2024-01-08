import {fileURLToPath} from 'url'
import mongoose from 'mongoose'
import Category from '../../../models/Category'

const __filename = fileURLToPath(import.meta.url)

const createCategory = async (payload) => {
	console.log('Invoke #createCategory()', payload, __filename)

	const session = await mongoose.startSession()
	session.startTransaction()

	try {
		const {name} = payload

		const exist = await Category.findOne({name, deleted_at: null})

		if (exist) {
			const error = `Name "${name}" was already in used`
			return {status_code: 400, error}
		}

		const response = await Category.create(payload)

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

export default createCategory
