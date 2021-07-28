import PropTypes from 'prop-types';

import style from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={style.section}>
      <h2 className={style.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
