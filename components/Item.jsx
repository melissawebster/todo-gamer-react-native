import { StyleSheet, View, Text, Pressable } from "react-native"

function Item({ item, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.itemView}>
                <Text style={styles.itemText}>{item}</Text>
            </View>
        </Pressable>
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