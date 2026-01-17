import { ObjectId } from "mongodb"

const { dbConnect, collections } = require("@/lib/dbConnect")

export const getProduct =async () =>{
    const products = await dbConnect(collections.PRODUCTS).find().toArray()

    return products
}

export const getSingleProducts = async(id) =>{
    if (id.length!= 24){
        return {}
    }

    const query = {_id: new ObjectId(id)}

    const product = await dbConnect(collections.PRODUCTS).findOne(query)

    return {...product, _id:product._id.toString()} || {}
} 