const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
    console.log(course);
});


const port = process.env.PORT || 3000;
// app.listen(3000, () => console.log(`Listening on port 3000!!...`)); 

app.listen(port, () => console.log(`Listening on port ${port}...`));

