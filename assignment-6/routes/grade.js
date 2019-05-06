const express = require('express');

const grades = require('../grades');
const router = express.Router();

router.get('/', (req, res, next) => res.send(grades));

function gMiddleware(req, res, next) {

    const id = req.params.id || -1;
    const available = grades.find(g => g.id == id);
    if(available) return next();
    else next({
        status : 404,
        message : 'Grade with id ${id} is not found'
    });
}

//GET , retrieve an existibg grade entity with the given id
router.get('/:id', gMiddleware, (req, res, next) => {

    const id = req.params.id;
    const g = grades[id-1];
    res.send(g);
});

//POST , add a new grade entity
router.post('/', (req, res, next) => {
    const g = req.boday;
    g.id = g.id || Math.ceil(Math.random()*10 + grades.length);
    grades.push(g);
    res.redirect('/grades');
});

router.delete('/:id', gMiddleware, (req, res, next) => {

    const id = req.params.id;
    grades.splice(id,1);
    res.redirect('/api/grades');
});
module.exports = router;