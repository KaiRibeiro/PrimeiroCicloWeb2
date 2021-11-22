var React = require('react');
var Footer = require('./shared/footer');
var Login = require('./shared/login/login');

function Index(props) {
  return <>
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <link href="/stylesheets/login.css" rel="stylesheet" />
        <title>{props.title}</title>
      </head>
      <body>
        <Login></Login>
        <Footer className="row justify-content-end"></Footer>
      </body>
    </html>

  </>
}

module.exports = Index;