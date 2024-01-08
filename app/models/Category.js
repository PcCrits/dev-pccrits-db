import {model, Schema} from 'mongoose'

export const categorySchema = new Schema(
	{
		name: {
			type: String
		},
		description: {
			type: String
		},
		image: {
			type: String
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
