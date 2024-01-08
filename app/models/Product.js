import mongoose, {model, Schema} from 'mongoose'

export const productSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Field `name` is required']
		},
		description: {
			type: String,
			required: [true, 'Field `description` is required']
		},
		in_stock: {
			type: Number,
			required: [true, 'Field `stock` is required']
		},
		images: {
			type: [String]
		},
		category: {
			type: String,
			ref: 'Category'
		},
		rate: {
			type: String
		},
		price: {
			type: mongoose.Types.Decimal128
		},
		currency: {
			type: String
		},
		color: {
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

export default model('Product', productSchema)
