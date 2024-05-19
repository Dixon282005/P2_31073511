  /* GET home page. */
  const toIndex = (req, res, next) => {
  res.render('index', { title: "Mi CV | Dixon Ramos", skill1 : "HTML", skill2 : "CSS", skill3 : "JavaScript", skill4 : "Python", skill5 : "Nodejs", skill6 : "Django"});
};

  
module.exports = toIndex;

