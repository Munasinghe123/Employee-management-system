const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const userRoutes = require('./Routes/userRoutes');
const UserModel = require('./Model/userModel')
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your React app's origin
    credentials: true
}));

// Session configuration
app.use(session({
    secret: 'sliit',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://jaya:employee@employee.7h8nmby.mongodb.net/sessions',
        collectionName: 'sessions',
    }),
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));
app.post("/newUser", (req, res) => {
    const newUser = new UserModel(req.body);

    newUser.save()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        });
});

app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user && user.password === password) {
        req.session.user = user;
        res.json({ user: {
            email: user.email,
            id: user._id,
         } });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.post("/api/auth/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Failed to log out' });
        }
        res.json({ message: 'Logged out' });
    });
});

app.get("/api/auth/check-session", (req, res) => {
    if (req.session.user) {
        res.json({ user: req.session.user });
    } else {
        res.status(401).json({ message: 'No session' });
    }
});




// Routes
app.use("/users", userRoutes);


mongoose.connect("mongodb+srv://jaya:employee@employee.7h8nmby.mongodb.net/?retryWrites=true&w=majority&appName=employee")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3001, () => {
            console.log("Server is running on port 3001");
        });
    })
    .catch(err => console.log(err));
