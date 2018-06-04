// tslint:disable:jsx-no-multiline-js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import RNAccordion from 'react-native-collapsible/Accordion';

import { connectStyle } from '@shoutem/theme';
import { connectAnimation } from '@shoutem/animation';

class AccordionItem extends Component {
  static propTypes = {
    header: PropTypes.string,
  };

  render() {
    return null;
  }
}

class Accordion extends Component {
  static propTypes = {
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onChange: PropTypes.func,
    headerComponent: PropTypes.func,
    contentComponent: PropTypes.func,
    children: PropTypes.node,
    style: PropTypes.object,
  };

  static Item;

  renderHeader = (section, index, isActive) => {
    const { style, headerComponent } = this.props;

    if (headerComponent) {
      return headerComponent(section.title, isActive);
    }

    return (
      <View style={style.header}>
        <Text>{section.title}</Text>
      </View>
    );
  }

  renderContent = (section, index, isActive) => {
    const { style, contentComponent } = this.props;

    if (contentComponent) {
      return contentComponent(section.content, isActive);
    }

    return section.content;
  }

  onChange = (idx) => {
    const { onChange, children } = this.props;
    let key;
    React.Children.map(children, (child, index) => {
      if (idx === index) {
        key = child.key || `${index}`;
      }
    });
    if (onChange) {
      onChange(key);
    }
  }

  render() {
    const { children, defaultActiveKey, activeKey } = this.props;
    const style = { ...this.props.style };
    delete style.header;
    delete style.content;

    let defaultActiveSection;
    let activeSection;
    const headers = React.Children.map(children, (child, index) => {
      const key = child.key || `${index}`;
      if (key === defaultActiveKey) {
        defaultActiveSection = index;
      }
      if (key === activeKey) {
        activeSection = index;
      }
      return {
        title: child.props.header,
        content: child.props.children,
      };
    });

    return (
      <View style={style}>
        <RNAccordion
          sections={headers}
          activeSection={activeSection}
          initiallyActiveSection={defaultActiveSection}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          onChange={this.onChange}
          duration={0}
          underlayColor="transparent"
        />
      </View>
    );
  }
}

Accordion.Item = AccordionItem;

const AnimatedAccordion = connectAnimation(Accordion);
const StyledAccordion = connectStyle('lh.ui.Accordion')(AnimatedAccordion);

export { StyledAccordion as Accordion };
