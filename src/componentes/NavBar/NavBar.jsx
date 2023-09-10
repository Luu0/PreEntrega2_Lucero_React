import carrito from "../../assets/carrito.png"

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Inicio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Categorias</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>

    <div className="d-flex">
      <button type="button" className="btn btn-dark"><img src={carrito}></img></button>
      <p className="text-light">4</p>
    </div>
   
  </div>
</nav>
  )
}

export default NavBar