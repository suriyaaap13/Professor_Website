import Logo from '../../images/NavBarLogo.png';
import Link from '../Link';
import './index.css';
import useNavigation from '../../hooks/use-navigation';

export default function Navbar() {

  const { currentPath } = useNavigation();
  
  const showMenu = ()=>{
      var navLinks = document.getElementById("navLinks");
      navLinks.style.right="0";
  }
  const hideMenu = ()=>{
      var navLinks = document.getElementById("navLinks");
      navLinks.style.right="-200px";
  }
  const links = [
    {
      label: 'HOME',
      path: '/'
    },
    {
      label: 'PUBLICATION',
      path: '/publication'
    },
    {
      label: 'RESEARCH',
      path: '/research'
    },
    {
      label: 'GROUP',
      path: '/group'
    },
    {
      label: 'BIOSKETCH',
      path: '/bio'
    },
    {
      label: 'GALLERY',
      path: '/gallery'
    }
  ];

  const renderedLinks = links.map((link)=>{
    return <Link key={link.path} to={link.path}>{link.label}</Link>
  });

  let finalClassName = '';
  if(currentPath === '/'){
    finalClassName += 'bg-transparent';
  }

  return (
    <nav className={finalClassName}>
      <a href="index.html">
        <img className = "w-36" src = {Logo} alt="IIT-KGP Logo"/>
      </a>
      <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
                {renderedLinks}
            </ul>
        </div>
      <i className="fa fa-bars" onClick={showMenu}></i>
    </nav>
  );
}
