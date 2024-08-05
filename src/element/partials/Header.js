const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
          <a className="navbar-brand" href="/">Facegram</a>
          <div className="navbar-nav">
              <a className="nav-link" href="/profile">@{localStorage.getItem('username')}</a>
              <a className="nav-link" href="/login">Logout</a>
          </div>
      </div>
  </nav>
  )
}

export default Header