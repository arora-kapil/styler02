import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Trending Images</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Lizard</Text>
                    <Text style={styles.cardLabel}>AI Generated Image</Text>
                    <Text style={styles.cardDescription}>Beautifyl! Isnt it?</Text>
                    <Text style={styles.cardFooter}>Beware</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: '90%',
        borderRadius: 8,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    cardElevated: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    cardImage: {
        height: 200,
        width: '100%',
        marginBottom: 8
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 16,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        padding: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6
    },
    cardFooter: {
        color: '#000000',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,
    },
    cardDescription: {
        color: '#242B2E'
    }
});
