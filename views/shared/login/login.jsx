var React = require("react");

function Login() {
  return (
    <>
      <body className="d-flex flex-column justify-content-center align-items-center">
        <div className="bigLogo">
          <img src="/images/bigLogo.png"></img>
        </div>
        <main className="formulario-login">
          <form action="/login" method="POST">
            <div className="form-group">
              <label className="fw-bold lead" htmlFor="iptUsuario">
                Usario
              </label>
              <input
                type="text"
                className="form-control"
                id="iptUsuario"
                placeholder="Usuário"
                name="user"
                required
              />
            </div>
            <div className="form-group">
              <label className="fw-bold lead" htmlFor="iptSenha">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="iptSenha"
                placeholder="Senha"
                name="password"
                required
              />
            </div>
            <button type="submit" className="w-100 btn btn-lg fw-bold" id="btnEntrar">
              Entrar
            </button>
          </form>
        </main>
      </body>
    </>
  );
}

module.exports = Login;
