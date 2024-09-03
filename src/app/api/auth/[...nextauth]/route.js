import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import { getMaxAge } from "next/dist/server/image-optimizer";

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,

    session: {
        strategy: "jwt",
        getMaxAge: "30 * 24 * 60 * 60"
    },

    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", required: true, placeholder: "Email" },

                password: { label: "Password", type: "password", required: true, placeholder: "Password" }
            },

            async authorize(credentials) {

                const { email, password } = credentials;

                if (!credentials) {
                    return null;
                }

                if (email) {
                    // const currentUser = users.find((user) => user.email === email);
                    const db = await connectDB();
                    const currentUser = await db.collection("users").findOne({ email });
                    console.log(currentUser);

                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser;
                        }
                    }
                }
                return null;
            },
        }),

        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),

        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
        }),

        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],

    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type
            }
            return token
        },

        async session({ session, token }) {
            session.user.type = token.type
            return session
        },
    }
}

const handler = NextAuth(authOptions);

// const users = [
//     {
//         id: 1,
//         name: "Robin",
//         email: "robin@gmail.com",
//         type: "admin",
//         password: "password",
//         image: "https://picsum.photos/200"
//     },
//     {
//         id: 2,
//         name: "Rifat",
//         email: "rifat@gmail.com",
//         type: "moderator",
//         password: "password",
//         image: "https://picsum.photos/200"
//     },
//     {
//         id: 1,
//         name: "Dihan",
//         email: "dihan@gmail.com",
//         type: "Lead",
//         password: "password",
//         image: "https://picsum.photos/200"
//     },
// ]

export { handler as GET, handler as POST }