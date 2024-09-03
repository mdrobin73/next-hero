import connectDB from "@/lib/connectDB"


export const POST = async (request) => {
    try {
        const newUser = await request.json();
        const db =  await connectDB();
        const userCollection = await db.collection("users");
        const res = await userCollection.insertOne(newUser);
        return Response.json({message: "New user created successfully."})
    } catch (error) {
        return Response.json({message: "Something went wrong."})
    }
}