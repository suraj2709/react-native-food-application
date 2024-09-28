import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResultList from '../components/ResultList';

const HomeScreen = ({ navigation }) => {
    const [term, setTerm] = useState("");
    const [restaurants, errorMessage, searchRestaurant] = useRestaurants();
    const filterResultsByPrice = (price) => {
        return restaurants.filter(result => {
            return result.price === price;
        })
    }

    
    return (
        <>
            <SearchBar
                term={term}
                onInputUpdate={setTerm}
                onTermSubmit={() => searchRestaurant(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null }

            <ScrollView style={styles.containerStyle}>
                <ResultList title="Cost Effective" results={filterResultsByPrice("$")} />
                <ResultList title="Bit Pricer" results={filterResultsByPrice("$$")} />
                <ResultList title="Big Splendor" results={filterResultsByPrice("$$$")} />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: 15,
    },
})

export default HomeScreen;