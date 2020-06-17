import { useState, useCallback } from 'react';
import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions';

export const useCamera = () => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const requestPermission = useCallback(async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        setHasPermission(status === 'granted');
    }, []);

    const changeCamera = useCallback(() => {
        setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
    }, [type]);

    return {
        hasPermission,
        type,
        requestPermission,
        changeCamera
    }
}