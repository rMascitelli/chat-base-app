const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="chatbase-logo" src="/chatbase-logo.png" />
      <div className="links">
        <a className="nav-link" href="/">Home</a>
        <a className="create-account-button" href="/create">Create Account</a>
      </div>
    </nav>
  );
}

function MascotLogo() {
  return(
    <div>
    <img className="mascot-logo" src={"https://i.imgur.com/qWcHuT8.jpeg"} alt={'Logo'} />
    <p style={{"font-size":"5px"}}> Our mascot: Phil </p>
    </div>
  );
}

export {Navbar, MascotLogo}
