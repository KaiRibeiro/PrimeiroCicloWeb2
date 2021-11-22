var React = require("react");
var Footer = require("./shared/footer");
var Header = require("./shared/header");

function Description(props) {
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
          <div className="container">
            <h1 className="text-center">
              {props.nameDescription}
            </h1>
            <h3 className="text-center">
              body<span className="fw-bold">overflow</span>
            </h3>
            <h2 className="text-center my2">
              É um projeto de um sistem de controle e acompanhamento de treinos
              corporais, dietas e evolução corporal. Com foco na exibição
              detalhada de informações da evolução.
            </h2>
            <div className="row justify-content-center">
              <div className="card">
                <h5 className="card-title text-center">Dietas</h5>
                <img className="card-img-top" src="./images/dieta.jpg" />
                <div className="card-body">
                  <p className="card-text my-2">
                    O sistema terá a funcionalidade de cadastro de dietas,
                    fazendo o acompanhamento diário. Contabilizando as calorias
                    diárias, macro nutrientes e progresso.
                  </p>
                </div>
              </div>

              <div className="card  my-1 m-3 p-2">
                <h5 className="card-title text-center">Treinos</h5>
                <img className="card-img-top" src="./images/treinos.jpg" />
                <div className="card-body">
                  <p className="card-text my-2">
                    O sistema terá a funcionalidade de cadastro de treinos,
                    fazendo o acompanhamento durante o período estabelecido.
                    Informará sugestões de novos exercícios baseadas na
                    cobertura dos grupos musculares.
                  </p>
                </div>
              </div>

              <div className="card  my-1 m-3 p-2">
                <h5 className="card-title text-center">Evolução Corporal</h5>
                <img className="card-img-top" src="./images/muscle.jpg" />
                <div className="card-body">
                  <p className="card-text my-2">
                    A partir do cadastro de treinos, informações corporais como
                    peso, altura, e medidas, o sistema mostrará informações
                    detalhas da evolução corporal em determinado período de
                    tempo, sugerindo novos treinos e ajustes na dieta a partir
                    dos resultados.
                  </p>
                </div>
              </div>

              <div className="card  my-1 m-3 p-2">
                <h5 className="card-title text-center">Dashboard</h5>
                <img className="card-img-top" src="./images/dashboard.jpg" />
                <div className="card-body">
                  <p className="card-text my-2">
                    O sistema possuirá uma tela de dashboard apresentando informações revelantes de todas as funcionalidades existentes, assim permitindo um acompanhamento rápido por meio do usuário.
                  </p>
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

module.exports = Description;
