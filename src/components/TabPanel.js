import PropTypes from 'prop-types';
import React from 'react';
import cx from 'clsx';

const DEFAULT_CLASS = 'react-tabs__tab-panel';

const TabPanel = props => {
  const {
    children,
    className,
    forceRender,
    id,
    selected,
    selectedClassName,
    tabId,
    ...attributes
  } = props;

  return (
    <div
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...attributes}
      className={cx(className, {
        [selectedClassName]: selected,
      })}
      role="tabpanel"
      id={id}
      aria-labelledby={tabId}
    >
      {forceRender || selected ? children : null}
    </div>
  );
};

TabPanel.defaultProps = {
  children: null,
  className: DEFAULT_CLASS,
  forceRender: false,
  selectedClassName: `${DEFAULT_CLASS}--selected`,
};

TabPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  forceRender: PropTypes.bool,
  id: PropTypes.string.isRequired, // private
  selected: PropTypes.bool.isRequired, // private
  selectedClassName: PropTypes.string,
  tabId: PropTypes.string.isRequired, // private
};

TabPanel.tabsRole = 'TabPanel';

export default TabPanel;
