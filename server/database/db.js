import mongoose from "mongoose"
// when there is a chance of exception use try catch
const DBConnection = async () => {

    const MONODB_URI = `mongodb://user:codeforraj@ac-5xhu9ea-shard-00-00.zxbs9np.mongodb.net:27017,ac-5xhu9ea-shard-00-01.zxbs9np.mongodb.net:27017,ac-5xhu9ea-shard-00-02.zxbs9np.mongodb.net:27017/?ssl=true&replicaSet=atlas-ctj0dh-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
        console.log("db connected successfully")
    } catch (error) {
        console.log('error while connecting db', error.message)
    }
}

export default DBConnection;