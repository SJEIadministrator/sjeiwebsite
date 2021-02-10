import PropTypes from 'prop-types';
import React from 'react';
import cx from 'clsx';

const TabList = () => {
 const { children, className, ...attributes } = this.props;

    return (
      <ul {...attributes} className={cx(className)} role="tablist">
        {children}
      </ul>
    );
  }
  Tablist.defaultProps = {
    className: 'react-tabs__tab-list',
  };

  Tablist.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
  };

TabList.tabsRole = 'TabList';

export default Tablist;
