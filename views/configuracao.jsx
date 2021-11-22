var React = require("react");
var Footer = require("./shared/footer");
var Header = require("./shared/header");

function Configuracao(props) {
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
          <link href="/stylesheets/configuration.css" rel="stylesheet" />
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
            <h1 className="text-center">Configuração</h1>

            <form action="/updateconfig" method="POST">
              <div className="form-group">
                <label htmlFor="homeName">Início</label>
                <input
                  type="text"
                  name="nameHome"
                  className="form-control"
                  value={props.nameHome}
                />

                <label htmlFor="descriptionName">Descrição</label>
                <input
                  type="text"
                  name="nameDescription"
                  className="form-control"
                  value={props.nameDescription}
                />

                <label htmlFor="peopleName">People</label>
                <input
                  type="text"
                  name="namePeople"
                  className="form-control"
                  value={props.namePeople}
                />

                <label htmlFor="contactName">Contatos</label>
                <input
                  type="text"
                  name="nameContact"
                  className="form-control"
                  value={props.nameContact}
                />

                <label htmlFor="technologiesName">Tecnologias</label>
                <input
                  type="text"
                  name="nameTechnologies"
                  className="form-control"
                  value={props.nameTechnologies}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-4 mb-4 btnAtualizar">
                Atualizar
              </button>
            </form>

            <form action="/resetconfig" method="GET">
              <button type="submit" className="btn btn-secondary">
                Restaurar Valores
              </button>
            </form>
          </div>
          <Footer className="row justify-content-end"></Footer>
        </body>
      </html>
    </>
  );
}

module.exports = Configuracao;
