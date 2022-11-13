import { Link } from 'react-router-dom';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <section className={s.section}>
      <p className={s.text}>© All rights reserved, 2022</p>
      <Link to={'/author'} className={s.link}>
        Author
      </Link>
    </section>
  );
};

export default Footer;
