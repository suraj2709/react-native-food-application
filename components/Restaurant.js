import { Image, StyleSheet, Text, View } from "react-native";

export default function Restaurant ({ restaurant }) {
    // console.log(restaurant.image_url)
    return (
        <View style={styles.containerStyle}>
            <Image
                style={styles.imageStyle}
                source={{ uri: restaurant.image_url }}
            />
            <Text style={styles.titleStyle}>{restaurant.name}</Text>
            <Text>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 5,
    },
    containerStyle: {
        marginRight: 15
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 14
    }
})