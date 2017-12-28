import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

//scss
const cx = classNames.bind(styles);

const PageTemplates = ({header, body, footer}) => {
  return (
    <div className={cx('template')}>
      <header>
        {header}
      </header>
      <div>
        {body}
      </div>
      <footer>
        {footer}
      </footer>
    </div>
  )
}

export default PageTemplates;
