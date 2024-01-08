import {fileURLToPath} from 'url'
import mongoose from 'mongoose'
import Product from '../../../models/Product'

const __filename = fileURLToPath(import.meta.url)

const deleteProduct = async (payload) => {
	console.log('Invoke #deleteProduct()', payload, __filename)

	const session = await mongoose.startSession()
	session.startTransaction()

	try {
		await Product.findByIdAndUpdate(payload.id, {
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

export default deleteProduct
