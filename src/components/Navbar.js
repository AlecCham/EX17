import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#f8c291' }}>
      <div className="container">
        <Link className="navbar-brand" to="/home" style={{ color: 'chocolate' }}>Little Village</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home" style={{ color: 'chocolate' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="aboutus" style={{ color: 'chocolate' }}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="gallery" style={{ color: 'chocolate' }}>Gastronomic Gems</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contactus" style={{ color: 'chocolate' }}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="login" style={{ color: 'chocolate' }}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    </>
  );
}

export default Navbar;