import PropTypes from 'prop-types';
import React from 'react';
import cx from 'clsx';

const TabList = props => {
  const { children, className, ...attributes } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ul {...attributes} className={cx(className)} role="tablist">
      {children}
    </ul>
  );
};

TabList.defaultProps = {
  className: 'react-tabs__tab-list',
};

TabList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

TabList.tabsRole = 'TabList';

export default TabList;
