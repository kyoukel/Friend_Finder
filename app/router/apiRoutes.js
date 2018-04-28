const router = require('express').Router();
const matches = require('../database').data.matches
const sumUp = (array) => {
  return array
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

const getUserScores = (object) => {
  return Object.keys(object)
    .map(key => object[key])
    .map(val => parseInt(val))
}

router
  .get("/matches", (req, res, next) => {
    res.json({
      matches: matches
    })
  })

  .post("/matches", (req, res, next) => {
    const {name, ...options} = req.body;
    const getSurveyScores = getUserScores(options);
    res.json(matches
      .map(match => {
        match.diff = Math.abs(sumUp(match.scores) - sumUp(getSurveyScores))
        return match
      }).sort((a,b) => a.diff > b.diff)[0]
    )
  })

  module.exports = router;