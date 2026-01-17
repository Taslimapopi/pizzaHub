"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { name, email, password } = payload;
  // check user
  const isExist = await dbConnect(collections.USERS).findOne({ email });

  // if (isExist) return null;

  if (isExist) {
      return {
        acknowledged: false,
        message: "User already exists",
      };
    }

  // create user
  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };

  // insert user

  const result = await dbConnect(collections.USERS).insertOne(newUser);

  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

export const logInUser = async (payload) =>{
  const {email, password} = payload
  if (!email|| !password) return null
  const user  = await dbConnect(collections.USERS).findOne({email})

  if(!user) return null

  const isMatched = await bcrypt.compare(password,user.password)

  if(isMatched){
    return user
  }else{
    return null
  }
}
