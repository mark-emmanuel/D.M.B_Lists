/**
 * @author Mark Emmanuel
 * @author Dahn Balan
 */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//used from: https://callstack.github.io/react-native-paper/list-accordion.html
import { List } from 'react-native-paper';


const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);


  return (
    //<List.Section title="Accordions">
    <List.Section style={styles.container}>
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
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
    justifyContent: 'space-evenly',
  }
});

// This was the orgininal code that was created by npm create
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Our To-do list app</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
