var React = require("react");

function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark">
        <a className="navbar-brand" href="/home">
          <img
            className="miniLogo"
            src="/images/miniLogo.png"
            width="50"
            height="50"
            alt="logo"
          />
          body<span className="fw-bold">overflow</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                {props.nameHome}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/description">
                {props.nameDescription}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/technologies">
                {props.nameTechnologies}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/people">
                {props.namePeople}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                {props.nameContact}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/configuration">
                Configuração
              </a>
            </li>
          </ul>
          <span className="navbar-text user text-white">
            <span className="fw-bold">Usuário Logado:</span> {props.currentUser}
          </span>
        </div>
        <a className="navbar-brand" href="/logout">
            LOGOUT
        </a>
      </nav>
    </>
  );
}

module.exports = Header;
