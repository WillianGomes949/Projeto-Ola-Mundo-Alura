import {  } from 'react-router-dom';
import styles from './Menu.module.css';
import MenuLink from '../menuLink';

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">
          Inicio
        </MenuLink>
        <MenuLink to="/sobreMim">
          Sobre Mim
        </MenuLink>
       
      </nav>
    </header>
  );
}
