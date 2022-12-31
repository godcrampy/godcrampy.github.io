function MenuBar() {
  return (
    <nav id="menu-bar">
      <span className="nav-bar-item">
        <a className="link" href="/">
          Home
        </a>
      </span>

      <span className="nav-bar-item">
        <a className="link" href="/essay/">
          Essays
        </a>
      </span>

      <span className="nav-bar-item">
        <a className="link" href="/work/">
          Work
        </a>
      </span>
    </nav>
  );
}

export default MenuBar;
