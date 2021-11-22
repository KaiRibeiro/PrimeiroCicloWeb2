var express = require("express");
var router = express.Router();
const config = require("../config");
const passport = require("passport");
var nodemailer = require("nodemailer");

isLogged = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

let transporter = nodemailer.createTransport({
  service: config.mail.service,
  auth: {
    user: config.mail.usermail,
    pass: config.mail.passmail,
  },
});


/* GET login page. */
router.get("/", function (req, res, next) {
  let nameHome =
    req.cookies.nameHome == (undefined || null)
      ? config.names.home
      : req.cookies.nameHome;
  let nameDescription =
    req.cookies.nameDescription == (undefined || null)
      ? config.names.description
      : req.cookies.nameDescription;
  let nameTechnologies =
    req.cookies.nameTechnologies == (undefined || null)
      ? config.names.technologies
      : req.cookies.nameTechnologies;
  let namePeople =
    req.cookies.namePeople == (undefined || null)
      ? config.names.people
      : req.cookies.namePeople;
  let nameContact =
    req.cookies.nameContact == (undefined || null)
      ? config.names.contact
      : req.cookies.nameContact;

  res.cookie("nameHome", nameHome);
  res.cookie("nameDescription", nameDescription);
  res.cookie("nameTechnologies", nameTechnologies);
  res.cookie("namePeople", namePeople);
  res.cookie("nameContact", nameContact);

  res.render("index", { title: "Body Overflow" });
});

/* GET home page. */
router.get("/home", isLogged, (req, res, next) => {
  res.render("home", {
    title: "Body Overflow",
    nameHome: req.cookies.nameHome,
    nameDescription: req.cookies.nameDescription,
    nameTechnologies: req.cookies.nameTechnologies,
    namePeople: req.cookies.namePeople,
    nameContact: req.cookies.nameContact,
    currentUser: req.user,
  });
});

/* GET description page. */
router.get("/description", isLogged, function (req, res, next) {
  res.render("description", {
    title: "Body Overflow",
    nameHome: req.cookies.nameHome,
    nameDescription: req.cookies.nameDescription,
    nameTechnologies: req.cookies.nameTechnologies,
    namePeople: req.cookies.namePeople,
    nameContact: req.cookies.nameContact,
    currentUser: req.user,
  });
});

/* GET pessoas page. */
router.get("/people", isLogged, function (req, res, next) {
  res.render("pessoas", {
    title: "Body Overflow",
    nameHome: req.cookies.nameHome,
    nameDescription: req.cookies.nameDescription,
    nameTechnologies: req.cookies.nameTechnologies,
    namePeople: req.cookies.namePeople,
    nameContact: req.cookies.nameContact,
    currentUser: req.user,
  });
});

/* GET tecnologias page. */
router.get("/technologies", isLogged, function (req, res, next) {
  res.render("tecnologias", {
    title: "Body Overflow",
    nameHome: req.cookies.nameHome,
    nameDescription: req.cookies.nameDescription,
    nameTechnologies: req.cookies.nameTechnologies,
    namePeople: req.cookies.namePeople,
    nameContact: req.cookies.nameContact,
    currentUser: req.user,
  });
});

/* GET contato page. */
router.get("/contact", isLogged, function (req, res, next) {
  res.render("contato", {
    title: "Body Overflow",
    nameHome: req.cookies.nameHome,
    nameDescription: req.cookies.nameDescription,
    nameTechnologies: req.cookies.nameTechnologies,
    namePeople: req.cookies.namePeople,
    nameContact: req.cookies.nameContact,
    currentUser: req.user,
  });
});

/* GET configuracao page. */
router.get("/configuration", isLogged, function (req, res, next) {
  res.render("configuracao", {
    title: "Body Overflow",
    nameHome: req.cookies.nameHome,
    nameDescription: req.cookies.nameDescription,
    nameTechnologies: req.cookies.nameTechnologies,
    namePeople: req.cookies.namePeople,
    nameContact: req.cookies.nameContact,
    currentUser: req.user,
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/",
    failureMessage: true,
  })
);

router.get("/resetconfig", (req, res, next) => {
  res.cookie("nameHome", config.names.home);
  res.cookie("nameDescription", config.names.description);
  res.cookie("nameTechnologies", config.names.technologies);
  res.cookie("namePeople", config.names.people);
  res.cookie("nameContact", config.names.contact);
  res.redirect("/configuration");
});

router.post("/updateconfig", function (req, res) {
  let nameHome = req.body.nameHome;
  let nameDescription = req.body.nameDescription;
  let namePeople = req.body.namePeople;
  let nameContact = req.body.nameContact;
  let nameTechnologies = req.body.nameTechnologies;

  res
    .cookie("nameHome", nameHome)
    .cookie("nameDescription", nameDescription)
    .cookie("namePeople", namePeople)
    .cookie("nameContact", nameContact)
    .cookie("nameTechnologies", nameTechnologies)
    .redirect("/configuration");
});

router.post("/sendemail", function (req, res) {
  let email = req.body.email;
  let assunto = req.body.assunto;
  let mensagem = req.body.mensagem;
  console.log(email);

  transporter
    .sendMail({
      from: config.mail.usermail,
      to: email,
      subject: assunto,
      text: mensagem,
    }, (error,info) => {
      if(error) {
        console.log("error");
      } else {
        console.log("Sucesso");
        res.redirect('/contact')
      }
    })
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
