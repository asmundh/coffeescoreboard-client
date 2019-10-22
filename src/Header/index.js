import React from 'react';
import {
  string,
} from 'prop-types';

const Header = (props) => {
  const { headerTitle } = props;
  return (
    <div id="header" className="sticky">
      <h1 id="header-title">{headerTitle}</h1>
    </div>
  );
};

Header.propTypes = {
  headerTitle: string.isRequired,
};

export default Header;
