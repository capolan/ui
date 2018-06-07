/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import RNCollapsible from 'react-native-collapsible';
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
  static defaultProps = {
    duration: 150,
  };

  static propTypes = {
    duration: PropTypes.number,
    activeKey: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
  };

  static Item;

  renderHeader = (section, index, isActive) => {
    const { style } = this.props;

    if (React.isValidElement(section.title)) {
      return section.title;
    }

    return (
      <View style={style.header}>
        <Text style={style.headerText}>{section.title}</Text>
      </View>
    );
  }

  renderContent = (section) => {
    if (!React.isValidElement(section.content)) return null;

    return section.content;
  }

  onChange = (idx) => {
    const { children } = this.props;
    let key;
    React.Children.map(children, (child, index) => {
      if (idx === index) {
        key = child.key || `${index}`;
      }
    });
  }

  render() {
    const { children, defaultActiveKey, activeKey, duration } = this.props;
    const style = { ...this.props.style };
    delete style.header;

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
          duration={duration}
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
