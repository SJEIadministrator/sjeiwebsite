import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'clsx';

const DEFAULT_CLASS = 'react-tabs__tab';

export default class Tab extends Component {
  
  componentDidMount() {
    this.checkFocus();
  }

  componentDidUpdate() {
    this.checkFocus();
  }

  checkFocus() {
    const { selected, focus } = this.props;
    if (selected && focus) {
      this.node.focus();
    }
  }
 

  render() {
    const {
      children,
      className,
      disabled,
      disabledClassName,
      focus, // unused
      id,
      panelId,
      selected,
      selectedClassName,
      tabIndex,
      tabRef,
      ...attributes
    } = this.props;

    return (
      <li
        {...attributes}
        className={cx(className, {
          [selectedClassName]: selected,
          [disabledClassName]: disabled,
        })}
        ref={node => {
          this.node = node;
          if (tabRef) tabRef(node);
        }}
        role="tab"
        id={id}
        aria-selected={selected ? 'true' : 'false'}
        aria-disabled={disabled ? 'true' : 'false'}
        aria-controls={panelId}
        tabIndex={tabIndex || (selected ? '0' : null)}
      >
        {children}
      </li>
    );
  }
}

Tab.defaultProps = {
  children: 
  className: DEFAULT_CLASS,
  disabledClassName: `${DEFAULT_CLASS}--disabled`,
  focus: false,
  id: null,
  panelId: null,
  selected: false,
  selectedClassName: `${DEFAULT_CLASS}--selected`,
};

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  disabled: PropTypes.bool.isRequired,
  tabIndex: PropTypes.string.isRequired,
  disabledClassName: PropTypes.string,
  focus: PropTypes.bool, // private
  id: PropTypes.string, // private
  panelId: PropTypes.string, // private
  selected: PropTypes.bool, // private
  selectedClassName: PropTypes.string,
  tabRef: PropTypes.func.isRequired, // private
};

Tab.tabsRole = 'Tab';
