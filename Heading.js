//Heading.js
//todos 큰 제목
import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const Heading = () => (
  //stateless
  <View style={styles.header}>
    <Text style={styles.headerText}>todos</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(175, 47,47,0.25)',
    fontWeight: '100',
  },
});

export default Heading;
