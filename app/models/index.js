import {connect as connectDb, disconnect as disconnectDb, set} from 'mongoose'

import UserModel from './User'
import CategoryModel from './Category'
import ProductModel from './Product'
import { dbUrl } from '../utils/constance'


set('strictQuery', true)

export const User = UserModel
export const Product = ProductModel
export const Category = CategoryModel
// export const Address = AddressModel
// export const Organization = OrganizationModel

export const connect = async () => {
 await connectDb(dbUrl)
}

export const disconnect = async () => disconnectDb()
