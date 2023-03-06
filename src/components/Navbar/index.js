import Logo from '../../images/NavBarLogo.png';
import './index.css';

export default function index() {


  
  const showMenu = ()=>{
      var navLinks = document.getElementById("navLinks");
      navLinks.style.right="0";
  }
  const hideMenu = ()=>{
      var navLinks = document.getElementById("navLinks");
      navLinks.style.right="-200px";
  }


  return (
    <nav>
      <a href="index.html">
        <img className = "w-36" src = {Logo} alt="IIT-KGP Logo"/>
      </a>
      <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="publication.html">RESEARCH</a></li>
                <li><a href="group.html">GROUP</a></li>
                <li><a href="profile.html">BIOSKETCH</a></li>
                <li><a href="gallery.html">GALLERY</a></li>
            </ul>
        </div>
      <i className="fa fa-bars" onClick={showMenu}></i>
    </nav>
  );
}
