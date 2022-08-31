/**
 * @author Dahn Balan
 * @author Mark Emmanuel
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//used from: https://callstack.github.io/react-native-paper/list-accordion.html
import { List, Drawer, TextInput } from 'react-native-paper';


const MyComponent = () => {

  // This isn't showing up, i'll look into it later
  <Drawer.CollapsedItem
    icon="inbox"
    label="Inbox"
  />

  const [expanded, setExpanded] = React.useState(true);
  // This is for the items in the list
  const [active, setActive] = React.useState('');
  // This is for the list folder to expand
  const handlePress = () => setExpanded(!expanded);
  // This is for text input
  const [text, setText] = React.useState("");


  return (
    //<List.Section title="Accordions">
    <List.Section style={styles.container}>

      <Text style={{ justifyContent: 'center' }}>experiments 🤷‍♂️</Text>

      <List.Accordion
        //title="Uncontrolled Accordiion"
        title="List 1"
        left={props => <List.Icon {...props} icon="folder" />}>
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
        <TextInput placeholder='add list item here'
          value={text}
          onChangeText={text => setText(text)}
        />
      </List.Accordion>

      <List.Accordion
        //title="Controlled Accordion"
        title="List 2"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          onPress={() => setActive('second')}
        />
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});

