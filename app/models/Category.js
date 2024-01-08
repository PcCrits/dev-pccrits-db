import {model, Schema} from 'mongoose'

export const categorySchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Field `name` is required']
		},
		description: {
			type: String
		},
		image: {
			type: String
		},
		deleted_at: {
			type: Date,
			default: null
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
)

export default model('Category', categorySchema)
