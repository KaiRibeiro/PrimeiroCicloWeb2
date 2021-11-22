var React = require("react");
var Footer = require("./shared/footer");
var Header = require("./shared/header");

function Contato(props) {
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
          <link href="/stylesheets/contato.css" rel="stylesheet" />
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
          <div className="conteudo row justify-content-md-center">
            <form action="/sendemail" method="POST">
              <h2 className="text-white fw-bold mt-2">Mande Uma Mensagem</h2>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mt-2"
                  id="iptEmail"
                  placeholder="para@email.com"
                  name="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-2"
                  id="iptAssunto"
                  placeholder="Assunto"
                  name="assunto"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control mt-2"
                  id="iptMensagem"
                  rows="5"
                  placeholder="Mensagem"
                  name="mensagem"
                ></textarea>
              </div>
              <button type="submit" className="w-100 btn btn-lg fw-bold" id="btnEntrar">
              Enviar
            </button>
            </form>
          </div>
          <Footer className="row justify-content-end"></Footer>
        </body>
      </html>
    </>
  );
}

module.exports = Contato;
