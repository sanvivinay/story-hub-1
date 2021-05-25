import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub</Text>
        </TouchableOpacity>

        <Text style={styles.displayText}>
         read a story here
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'grey',
    flex: 1,
    fontFamily: 'Berlin Sans FB Demi',
  },
  header: {
    backgroundColor: 'lightblue',
  },
  headerText: {
    fontFamily: 'Berlin Sans FB Demi',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
    fontFamily: 'Berlin Sans FB Demi',
    fontSize: 20,
    padding: 15,
    textAlign: 'center',
  },
});
