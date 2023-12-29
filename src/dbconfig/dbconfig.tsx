const mongoose=require("mongoose");

export async function connect() {
    try{
        mongoose.connect(process.env.dbURL!);
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log("MongoDB connected successfully");
        })

        connection.on('error', ()=>{
            console.log("MongoDB connection error !! Make sure url is correct & mongodb is running");
            process.exit();
        })
    }catch(error){
        console.log("something went wrong !");
        console.log(error);
    }
}