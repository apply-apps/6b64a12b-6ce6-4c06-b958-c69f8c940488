// Filename: index.js
// Combined code from all files

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

const LetterDisplay = ({ letter }) => {
    return (
        <View style={styles.letterBox}>
            <Text style={styles.letter}>{letter}</Text>
        </View>
    );
};

export default function App() {
    const [currentLetter, setCurrentLetter] = useState(null);
    const [loading, setLoading] = useState(false);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    useEffect(() => {
        fetchLetter();
    }, []);

    const fetchLetter = () => {
        setLoading(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * letters.length);
            setCurrentLetter(letters[randomIndex]);
            setLoading(false);
        }, 1000);
    };

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <LetterDisplay letter={currentLetter} />
                    <Button title="Next Letter" onPress={fetchLetter} />
                </>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    letterBox: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
    },
});