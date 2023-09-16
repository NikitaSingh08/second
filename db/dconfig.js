const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/bookgeeks");
mongoose.set('strictQuery', false);
