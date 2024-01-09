const { connectDB } = require('./server');

// Connect to the DB
connectDB();

// Middleware init
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

// Launch the server
const server = app.listen(8080,()=>console.log("listening"));