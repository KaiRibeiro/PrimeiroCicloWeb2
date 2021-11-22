var React = require("react");
var Footer = require("./shared/footer");
var Header = require("./shared/header");

function Pessoas(props) {
  return (
    <>
      <html>
        <head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
          <link href="/stylesheets/description.css" rel="stylesheet" />
          <link href="/stylesheets/people.css" rel="stylesheet" />
          <title>{props.title}</title>
        </head>
        <body>
          <Header
            nameHome={props.nameHome}
            nameDescription={props.nameDescription}
            nameTechnologies={props.nameTechnologies}
            namePeople={props.namePeople}
            nameContact={props.nameContact}
            currentUser={props.currentUser}
          ></Header>
          <div className="container">
            <h1 className="text-center">{props.namePeople}</h1>
            <div className="row justify-content-center">
              <div className="card">
                <h5 className="card-title text-center">
                  Kaique Ribeiro de Campos
                </h5>
                <img className="card-img-top" src="./images/kaique-2.jpg" />
                <div className="card-body d-flex justify-content-between">
                  <a className="nav-link" href="https://github.com/KaiRibeiro">
                    <i className="bi bi-github">GitHub</i>
                  </a>
                  <a className="nav-link" href="https://www.linkedin.com/in/kaiquecampos/">
                      <i className="bi bi-linkedin">Linkedin</i>
                  </a>
                  <a className="nav-link" href="https://kairibeiro.github.io/">
                     <i className="bi bi-person-fill">Portfólio</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer className="row justify-content-end"></Footer>
        </body>
      </html>
    </>
  );
}

module.exports = Pessoas;
