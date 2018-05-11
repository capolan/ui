import React from 'react';
import { ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';
import {
  Title,
  FormGroup,
  Label,
  TextInput,
  Button,
  Text,
  Switch,
  Checkbox,
  Radio,
} from '@lighthouseit/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: '#f2f2f2',
  },
});

export default class App extends React.Component {
  state = {
    switch: false,
    checkbox: false,
    radio: false,
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Title styleName="h-center">LIGHTHOUSE UI COMPONENTS</Title>

        <ScrollView>
          <TextInput styleName="sm-gutter" placeholder="Username or email" />
          <TextInput styleName="sm-gutter" placeholder="Password" secureTextEntry />

          <FormGroup styleName="blocked inline sm-gutter">
            <Label>Email</Label>
            <TextInput placeholder="Enter your email" />
          </FormGroup>

          <FormGroup styleName="blocked multiline sm-gutter">
            <Label>Message</Label>
            <TextInput placeholder="Enter your message" multiline />
          </FormGroup>

          <FormGroup styleName="sm-gutter">
            <Label>Label</Label>
            <TextInput placeholder="Enter something" />
          </FormGroup>

          <FormGroup styleName="blocked inline sm-gutter">
            <Label>Switch</Label>
            <Switch
              value={this.state.switch}
              onValueChange={value => this.setState({ switch: value })}
            />
          </FormGroup>

          <FormGroup styleName="blocked inline sm-gutter">
            <Label>Checkbox</Label>
            <Checkbox
              value={this.state.checkbox}
              onValueChange={value => this.setState({ checkbox: value })}
            />
          </FormGroup>

          <FormGroup styleName="blocked inline sm-gutter">
            <Label>Radio</Label>
            <Radio
              value={this.state.radio}
              onValueChange={value => this.setState({ radio: value })}
            />
          </FormGroup>

          <Button styleName="sm-gutter">
            <Text>NORMAL</Text>
          </Button>

          <Button styleName="sm-gutter">
            <Text>NORMAL WITH ICON</Text>
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
