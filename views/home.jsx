var React = require("react");
var Footer = require("./shared/footer");
var Header = require("./shared/header");

function Home(props) {
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
          <link href="/stylesheets/home.css" rel="stylesheet" />
          <link href="/stylesheets/header.css" rel="stylesheet" />
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
          <main className="Resumo d-flex flex-column justify-content-center align-items-center">
            <div className="Resumo d-flex flex-column justify-content-center align-items-center">
              <div className="tituloResumo">
                <h1>{props.nameHome}</h1>
              </div>
              <div className="textoResumo">
                <p>
                  body<span className="fw-bold">overflow</span> é um projeto de
                  um sistem de controle e acompanhamento de treinos corporais,
                  dietas e evolução corporal. Com foco na exibição detalhada de
                  informações da evolução.
                </p>
              </div>
              <img className="miniLogo" src="/images/bigLogo.png" />
            </div>
          </main>
          <Footer className="row justify-content-end"></Footer>
        </body>
      </html>
    </>
  );
}

module.exports = Home;
