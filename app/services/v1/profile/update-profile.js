import {fileURLToPath} from 'url'
import mongoose from 'mongoose'
import User from '../../../models/User'

const __filename = fileURLToPath(import.meta.url)

const updateProfile = async (payload) => {
	console.log('Invoke #updateProfile()', payload, __filename)

	const session = await mongoose.startSession()
	session.startTransaction()

	try {
		const {filter, data} = payload

		const response = await User.findOneAndUpdate(filter, data, {new: true})

		if (!response) {
			const error = 'Profile you are trying to update was not found'

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

export default updateProfile
