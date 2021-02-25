import React from 'react';
import cn from 'classnames';

import classes from './UniversityCard.module.scss';

const UniversityCard = ({
  className,
  data,
  onSave = () => {},
  isSaved,
  onRemove = () => {},
}) => {
  const { name, country, web_pages, alpha_two_code } = data || {};
  return (
    <div
      className={cn(
        classes.wrapper,
        {
          [classes.isSaved]: isSaved,
        },
        className
      )}
    >
      <h1>
        {name}{' '}
        <button
          type="button"
          className={classes.save}
          onClick={() => {
            if (!isSaved) {
              onSave();
            } else {
              onRemove();
            }
          }}
        >
          {isSaved ? 'Remove' : 'Save'}
        </button>
      </h1>
      <p>Country: {country}</p>
      <p>Code: {alpha_two_code}</p>
      <p>
        Web page:{' '}
        <a
          href={web_pages}
          target="_blank"
          rel="noreferrer"
          className={classes.website}
        >
          {web_pages}
        </a>
      </p>
    </div>
  );
};

export default UniversityCard;
