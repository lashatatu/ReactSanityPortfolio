import React from 'react';
import { Link } from 'react-router-dom';
import { Skills } from '../container';

const Uses = () => {
  return (
    <div>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <h2 className={'head-text'}>
          HOME
        </h2>
      </Link>
      <Skills/>
    </div>
  );
};

export default Uses;