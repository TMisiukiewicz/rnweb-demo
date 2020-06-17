import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Topbar from '../components/Topbar';
import { useCamera } from '../hooks/useCamera';
import { Button } from 'react-native-paper';
import { AppCamera } from '../components/AppCamera';

export const Camera = () => {
    const {hasPermission, type, requestPermission, changeCamera} = useCamera();
    
    return (
        <View style={styles.container}>
          <Topbar title="Camera" />
          <View style={styles.cameraContainer}>
            {hasPermission === null && (
                <Button icon="camera" mode="contained" onPress={requestPermission}>Enable camera</Button>
            )}
            {hasPermission === false && (
                <Text>Camera access denied :(</Text>
            )}
            {hasPermission && (
                <AppCamera type={type} onCameraChange={changeCamera} />
            )}
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    cameraContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})