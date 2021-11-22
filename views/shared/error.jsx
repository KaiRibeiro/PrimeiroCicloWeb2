var React = require('react');

function Error(props) {
  return (
    <>
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        </head>
        <body>
          <div className="container-fluid">
            <h1>Algo não funcionou como esperado</h1>
            <h2>{props.status}</h2>
            <pre>{props.error.stack}</pre>
            <a href="/">Voltar para a página inicial</a>
          </div>
        </body>
      </html>
    </>
  )
}

module.exports = Error;