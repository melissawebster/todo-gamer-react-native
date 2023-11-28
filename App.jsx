import { useState, useEffect } from 'react'
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native'
import Item from './components/Item'

export default function App() {

  const [enteredItem, setEnteredItem] = useState('')
  const [itemsList, setItemsList] = useState([])

  function handleEnteredItem(enteredText) {
      setEnteredItem(enteredText)
  }

  function handleItemsList() {
    setItemsList((currentItemsList) => 
        [...currentItemsList, enteredItem]
    )
  }

  function handleRemoveItem(itemToRemove) {
    setItemsList((currentItemsList) => 
      currentItemsList.filter((item, index) => item !== itemToRemove || index !== currentItemsList.indexOf(itemToRemove))
    );
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
          placeholder='Type here...'
          onChangeText={handleEnteredItem} 
        />
        <Button 
          color='#0F380F'
          title="ADD TASK"
          onPress={handleItemsList}
        />
      </View>
      <View style={styles.itemsView}>
      <FlatList 
        data={itemsList} 
        style={styles.flatList} 
        renderItem={({ item }) => { 
          return <Item item={item} onPress={() => handleRemoveItem(item)} />
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
    backgroundColor: '#0F380F',
  },
  inputView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
    backgroundColor: '#306230',
  },
  textInputView: {
    borderWidth: 0.8,
    borderColor: '#8BAC0F',
    width: '65%',
    padding: 5,
    backgroundColor: '#DCF7BB',
  },
  itemsView: {
    marginBottom: 30,
    flex: 4,
    alignItems: 'center',
  },
  flatList: {
    width: '80%'
  },
})
