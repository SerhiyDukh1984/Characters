import s from './Author.module.css';

const Author = () => {
  return (
    <>
      <div className={s.author}>
        <img
          src="https://www.printsalon.ua/images/products/view/nakleyka-ehali-kazaki.jpg"
          alt="photo"
          width="300"
        />

        <div className={s.info}>
          <h1 className={s.title}>
            <span className={s.text}>Name:</span> Serhiy Dukh
          </h1>
          <ul className={s.list}>
            <li className={s.item}>
              <a
                className={s.link}
                href="https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D1%96%D0%B9-%D0%B4%D1%83%D1%85/"
              >
                LinkedIn
              </a>
            </li>
            <li className={s.item}>
              <a className={s.link} href="https://github.com/SerhiyDukh1984">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Author;
