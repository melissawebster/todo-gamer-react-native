import { StyleSheet } from "react-native"
import { View, Text } from "react-native"

function Item({ item }) {
    return (
        <View style={styles.itemView}>
            <Text style={styles.itemText}>{item}</Text>
        </View>
    )
 }

export default Item

const styles = StyleSheet.create({
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