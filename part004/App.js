import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name : 'shaun', key: 1 },
    { name : 'yoshi', key: 2 },
    { name : 'mario', key: 3 },
    { name : 'luigi', key: 4 },
    { name : 'peach', key: 5 },
    { name : 'toad', key: 6 },
    { name : 'bowser', key: 7 }
  ])


  return (
    <View style={styles.container}>
      {/* <ScrollView>
        { people.map((item) => {
              return (
                <View key={item.key}>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
              )
          }) }
      </ScrollView> */}

      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding:30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});
