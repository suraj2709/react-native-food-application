import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onInputUpdate, onTermSubmit }) => {
    return (
        <View style={styles.containerStyle}>
            <Feather
                name='search'
                style={styles.iconStyle}
            />
            <TextInput
                placeholder='Search for Restaurant'
                style={styles.inputStyle}
                value={term}
                onChangeText={newTerm => onInputUpdate(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        height: 50,
        backgroundColor: "#d1d1d1",
        flexDirection: 'row',
        margin: 10,
        paddingHorizontal: 15,
        borderRadius: 10
    },
    iconStyle: {
        fontSize: 20,
        alignSelf: 'center'
    },
    inputStyle: {
        paddingLeft: 10,
        flex: 1
    }

})

export default SearchBar;