const NavBar = ({ totalCounters }) => {
   return (
      <nav className="navbar navbar-light bg-warning">
         <span className="navbar-brand mb-1 ml-5 h1">
            Navbar{" "}
            <span className="badge badge-pill badge-primary">
               {totalCounters}
            </span>
         </span>
      </nav>
   );
};

export default NavBar;
