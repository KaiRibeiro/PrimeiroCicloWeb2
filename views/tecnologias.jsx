var React = require("react");
var Footer = require("./shared/footer");
var Header = require("./shared/header");

function Tecnologias(props) {
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
              {props.nameTechnologies}
            </h1>
            <div className="row justify-content-center">
              <div className="card">
                <h5 className="card-title text-center">MongoDB</h5>
                <img className="card-img-top" src="./images/mongo.png" />
              </div>

              <div className="card  my-1 m-3 p-2">
                <h5 className="card-title text-center">Express</h5>
                <img className="card-img-top" src="./images/express.png" />
              </div>

              <div className="card  my-1 m-3 p-2">
                <h5 className="card-title text-center">React</h5>
                <img className="card-img-top" src="./images/react.jpg" />
              </div>

              <div className="card  my-1 m-3 p-2">
                <h5 className="card-title text-center">Node.Js</h5>
                <img className="card-img-top" src="./images/node.jpg" />
              </div>
            </div>
          </div>
          <Footer className="row justify-content-end"></Footer>
        </body>
      </html>
    </>
  );
}

module.exports = Tecnologias;
