import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native'

export default function App() {

  const [enteredItem, setEnteredItem] = useState('')
  const [itemsList, setItemsList] = useState([])

  function handleEnteredItem(enteredText) {
      setEnteredItem(enteredText)
  }

  function handleItemsList() {
    setItemsList((currentItemsList) => 
        [...currentItemsList, 
        { text: enteredItem, key: Math.random().toString() }
        ]
    )
  }

  useEffect(() => {
    console.log(enteredItem)
  }, [enteredItem])
 
  useEffect(() => {
    console.log(itemsList)
  }, [itemsList])

  return (
    <View style={styles.appView}>
      <View style={styles.inputView}>
        <TextInput 
          style={styles.textInputView} 
          placeholder='Your Courses goal!'
          onChangeText={handleEnteredItem} 
        />
        <Button 
          title="Add Goal"
          onPress={handleItemsList} 
        />
      </View>
      <View style={styles.itemsView}>
        <FlatList 
          data={itemsList} 
          style={styles.flatList} 
          renderItem={(itemData) => {
            return (
              <View style={styles.itemView}>
                <Text style={styles.itemText}>{itemData.item.text}</Text>
              </View>
            )
          }} 
          alwaysBounceVertical={false}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  inputView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
  },
  textInputView: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '65%',
    padding: 9,
  },
  itemsView: {
    backgroundColor: 'green',
    marginBottom: 30,
    flex: 4,
    alignItems: 'center',
  },
  flatList: {
    width: '100%'
  },
  itemView: {
    width: '100%',
    marginBottom: 8,
    padding: 15,
    backgroundColor: 'red',
  },
  itemText: {
    textAlign: 'center',
    color: 'white',
  },
})
