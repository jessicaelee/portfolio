import { Link, useLocation, Outlet } from 'react-router-dom';
import Page from "../Common/Page";
import styles from "./Items.module.scss"


function InfiniteScroll() {
  const location = useLocation();
  const pathname = location.pathname;

  return <Page title="Infinite Scroll" description="">
    <div className={styles.nav}>
      <ul>
        <Link to="react" className={pathname === "/infinite_scroll/react" ? styles.active : ""}>React</Link>
      </ul>
      <ul>
        <Link to="vanilla" className={pathname === "/infinite_scroll/vanilla" ? styles.active : ""}>Vanilla JS</Link>
      </ul>
    </div>
    <Outlet />


  </Page>
};

export default InfiniteScroll;