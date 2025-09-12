import express from "express";

const app = express();
app.set("view engine", "ejs");
app.use(express.json())
app.use(express.static('views'))
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/submit", (req, res) => {
    const { name, email, contact, address, subject } = req.body;
    res.send(`
        <h1>Student Information Received</h1>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Contact:</b> ${contact}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Subject Interested:</b> ${subject}</p>
    `);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});



