import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import ElevatedCards from './ElevatedCards';

export default function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }

    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Kya haal hai?
                    </Text>
                </View>
                <View style={styles.imageView}>
                    <Image
                        source={{
                            uri: 'https://cdn.dribbble.com/users/2407274/screenshots/4962798/media/a67743ee39d2c703313e7658a6a6c075.png'
                        }}
                        style={styles.cardImage}
                    />
                </View>
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={4}>
                        "Kya haal hai?" is a common greeting in Hindi and Urdu, which translates to "How are you?" in English. It is a casual and friendly way to inquire about someone's well-being and is widely used in everyday conversations in India, Pakistan, and among South Asian communities worldwide. This phrase reflects the cultural emphasis on social connections and interpersonal relationships, as it shows genuine interest in the other person's state of mind and health. Whether used in person, over the phone, or in written communication, "kya haal hai?" helps to foster warmth and camaraderie among individuals.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://www.quora.com/What-does-kyaa-haal-hai-mean')}>
                        <Text>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        height: 500,
        width: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 300,
        width: 300,
        borderRadius: 10,
        marginBottom: 10
    },
    imageView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bodyContainer: {
        padding: 10,

    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
})