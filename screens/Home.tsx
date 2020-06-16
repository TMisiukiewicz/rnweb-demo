import React, { useRef, useEffect, useCallback } from 'react'
import { View, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import Topbar from '../components/Topbar';
import * as Animatable from 'react-native-animatable';
import * as Linking from 'expo-linking';

const Home = () => {
    const onLongLogoPress = useCallback(async () => {
        const url = 'https://pagepro.co';
        if(Linking.canOpenURL(url)) {
            Linking.openURL(url);
        }
    }, []);

    return (
        <View style={styles.container}>
            <Topbar title="Hello world" subtitle="Pagepro demo" />
            <View style={styles.logoContainer}>
                <TouchableOpacity
                    onLongPress={onLongLogoPress}
                >
                    <Animatable.Image
                    source={{uri: 'https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.0-9/34583357_10156199791337870_3567612351039406080_n.png?_nc_cat=101&_nc_sid=85a577&_nc_ohc=6cGG88CtH6wAX_ONA_p&_nc_ht=scontent.fwaw3-2.fna&oh=d80a8e7da1da8126fda5e1eb68b95af4&oe=5F10266A'}}
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={styles.logo}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00263a',
        height: '100%',
    },
    logo: {
        width: 150,
        height: 150,
    },
    logoContainer: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Home;