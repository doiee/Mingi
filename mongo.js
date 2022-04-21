const mongoose = require("mongoose");
const mongoPass = `mongodb+srv://Jihan:${process.env['MongoPass']}@jihan.olglf.mongodb.net/GBF?retryWrites=true&w=majority`

module.exports = async () => {
  await mongoose.connect(mongoPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  return mongoose;
}