import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Camera } from 'expo-camera'
import { Button } from 'react-native-paper'

interface Props {
    type: string;
    onCameraChange: () => void
}

export const AppCamera = ({type, onCameraChange}: Props) => {
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.cameraContainer}>
                    {Platform.OS !== 'web' && (
                        <Button mode="contained" icon="autorenew" style={styles.button} onPress={onCameraChange}>Change camera</Button>
                    )}
                </View>
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    camera: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    button: {
        position: 'relative',
        bottom: 150,
    },
    cameraContainer: {
        alignSelf: 'center',
        width: '50%',
    }
})