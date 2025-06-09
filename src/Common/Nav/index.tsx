import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.scss';

function NavBar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (<nav className={styles.nav}>
    <ul>
      <Link to="/" className={pathname === "/" ? styles.active : ""}>Home</Link>
    </ul>
    <ul>
      <Link to="/calculator" className={pathname === "/calculator" ? styles.active : ""}>Calculator</Link>
    </ul>
    <ul>
      <Link to="/infinite_scroll" className={pathname === "/infinite_scroll" ? styles.active : ""}>Infinite Scroll</Link>
    </ul>
    <ul>
      <Link to="/css" className={pathname === "/css" ? styles.active : ""}>CSS Examples</Link>
    </ul>
  </nav >)
};

export default NavBar;