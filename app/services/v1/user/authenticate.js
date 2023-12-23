import {fileURLToPath} from 'url'
import {User} from '../../../models'
import {password} from '../../../utils'

const __filename = fileURLToPath(import.meta.url)
const {decryptPassword} = password

const authenticate = async (payload) => {
	console.log('Invoke #authenticate()', payload, __filename)

	try {
		const user = await User.findOne({email: payload.email})

		if (!user) {
			return {
				status_code: 401,
				message: 'User not found',
				data: user
			}
		}

		const passwordMatched = await decryptPassword(payload.password, user.password)

		if (!passwordMatched) {
			return {
				status_code: 401,
				message: 'Invalid credentials',
				data: user
			}
		}

		return {
			status_code: 200,
			message: 'User authenticated',
			data: user
		}
	} catch (error) {
		console.log(error)

		return {status_code: 400, message: error.message}
	}
}


export default authenticate
