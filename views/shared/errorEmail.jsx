var React = require('react');

function ErrorEmail(props) {
  return (
    <>
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        </head>
        <body>
          <div className="container-fluid">
            <h1>Erro no email</h1>
            <pre>{props.errorMessage}</pre>
            <a href="/">Voltar para a página inicial</a>
          </div>
        </body>
      </html>
    </>
  )
}

module.exports = ErrorEmail;