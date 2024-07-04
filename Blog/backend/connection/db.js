const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Blog', {
  useNewUrlParser: true,
}).then(() => {
  console.log("Connected");
}).catch((error) => {
  console.log(error);
});

