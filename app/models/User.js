import {model, Schema} from 'mongoose'

const addressInfo = {
	billing: Boolean,
	default: Boolean,
	street_name: String,
	house_number: Number,
	zip_code: String,
	city: String,
	country: String
}

export const userSchema = new Schema(
	{
		first_name: {
			type: String
		},
		last_name: {
			type: String
		},
		email: {
			type: String,
			required: [true, 'Field `email` is required']
		},
		email_verified: {
			type: Boolean,
			required: [true, 'Field `email_verified` is required'],
			default: false
		},
		age: {
			type: String
		},
		gender: {
			type: String
		},
		profile_image: {
			type: String
		},
		address: [addressInfo],
		user_type: {
			type: String,
			required: [true, 'Field `user_type` is required']
		},
		password: {
			type: String,
			required: [true, 'Field `password` is required']
		},
		salt: {
			type: String,
			required: [true, 'Field `salt` is required']
		},
		password_reset_token: {
			type: String
		},
		metadata: {
			type: Object
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
)

export default model('User', userSchema)
