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
          return <Item item={itemData.item} />
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
})
