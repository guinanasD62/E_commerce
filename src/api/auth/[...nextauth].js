// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "../../../app/authconfig";
import { User } from "../../../lib/models";
import { connectToDb } from "../../../lib/utils";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    await connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const options = {
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await login(credentials);
        if (user) {
          return { id: user._id, name: user.username };
        }
        return null;
      },
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
