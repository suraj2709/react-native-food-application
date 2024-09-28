import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

const SecondScreen = ({ route }) => {
    const { id } = route.params;
    const [result, setResult] = useState(null);

    const getResult = async () => {
        const results = await yelp.get(`/${id}`);
        setResult(results.data);
    }

    useEffect(() => {
        getResult();
    }, []);
    
    if (! result) {
        return null;
    }

    return (
        <View>
            <Text> Results for {result.name}</Text>
            <FlatList 
                keyExtractor={item => item}
                data={result.photos}
                renderItem={({ item }) => {
                    console.log("item", item)
                    return <Image style={styles.imageStyle} source={{ uri: item }} />
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
    }
})

export default SecondScreen;