/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import RNCollapsible from 'react-native-collapsible';
import _ from 'lodash';
import { Icon } from '../';

import { connectStyle } from '@shoutem/theme';

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
    onChange: () => null,
    multiCollapse: false,
  };

  static propTypes = {
    onChange: PropTypes.func,
    headerComponent: PropTypes.func,
    contentComponent: PropTypes.func,
    multiCollapse: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.object,
  };

  static Item;

  state = {
    sections: {},
  };

  componentWillMount() {
    this.getDefaultExpandedSections();
  }

  shouldComponentUpdate(nextState) {
    return !_.isEqual(nextState.sections, this.state.sections);
  }

  getDefaultExpandedSections = () => {
    const { children } = this.props;

    React.Children.map(children, (child, index) => {
      const key = child.key || `section${index}`;
      if (child.props.expanded) {
        this.toggle(key);
      }
    });
  }

  isSectionActive = (key) => {
    return this.state.sections[key];
  }

  toggle = (key) => {
    const { multiCollapse } = this.props;

    this.setState({
      sections: {
        ...this.state.sections,
        ..._.assign(
          ...(!multiCollapse && _.mapValues(this.state.sections, () => false)),
        ),
        [key]: this.state.sections[key] ? !this.state.sections[key] : true,
      },
    });
  }

  onChange = (key) => {
    this.toggle(key);
    this.props.onChange(key);
  }

  renderHeader = (section) => {
    const { style, headerComponent } = this.props;
    const { key, title } = section;
    const isActive = this.isSectionActive(key);

    return (
      <TouchableOpacity
        onPress={() => this.onChange(key)}
        activeOpacity={0.8}
      >
        {!headerComponent
          ? (
            <View style={style.header}>
              <Text>{title}</Text>
            </View>
          ) : headerComponent(title, isActive)
        }
      </TouchableOpacity>
    );
  }

  renderContent = (section) => {
    const { style, contentComponent } = this.props;
    const { key, content } = section;
    const isActive = this.isSectionActive(key);

    return (
      <RNCollapsible collapsed={!isActive}>
        {!contentComponent
          ? content
          : contentComponent(content, isActive)
        }
      </RNCollapsible>
    );
  }

  renderSections = () => {
    const { children } = this.props;

    return React.Children.map(children, (child, index) => {
      const key = child.key || `section${index}`;

      return {
        key,
        title: child.props.header,
        content: child.props.children,
      };
    });
  }

  render() {
    const style = { ...this.props.style };
    delete style.header;

    const sections = this.renderSections();

    return (
      <View style={style}>
        {sections.map((section) => (
          <View key={section.key}>
            {this.renderHeader(section)}
            {this.renderContent(section)}
          </View>
        ))}
      </View>
    );
  }
}

Accordion.Item = AccordionItem;

const StyledAccordion = connectStyle('lh.ui.Accordion')(Accordion);

export { StyledAccordion as Accordion };
