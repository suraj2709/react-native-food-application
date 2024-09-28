import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Restaurant from './Restaurant';

export default function ({ title, results }) {
    if (! results.length) {
        return null;
    }

    const navigation = useNavigation();

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item}) => {
                    return <TouchableOpacity onPress={() => {
                        navigation.navigate("Second", { id: item.id })
                    }}>
                        <Restaurant restaurant={item} />
                    </TouchableOpacity>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5
    },
    containerStyle: {
        marginVertical: 5
    }
})