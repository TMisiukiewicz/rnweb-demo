import React, { useState, useCallback } from 'react'
import { BottomNavigation } from 'react-native-paper'
import Home from '../screens/Home';
import { News } from '../screens/News';
import { Camera } from '../screens/Camera';

export const Bottombar = () => {
    const [state, setState] = useState({
        index: 0,
        routes: [
            {key: 'home', title: 'Home', icon: 'home'},
            {key: 'news', title: 'News', icon: 'newspaper'},
            {key: 'camera', title: 'Camera', icon: 'camera'},
        ]
    })

    const changeIndex = useCallback((index) => {
        setState({
            ...state,
            index
        });
    }, [state]);

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        news: News,
        camera: Camera
    })

    return (
        <BottomNavigation navigationState={state} onIndexChange={changeIndex} renderScene={renderScene} />
    )
}
