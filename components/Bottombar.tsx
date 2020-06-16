import React, { useState, useCallback } from 'react'
import { BottomNavigation } from 'react-native-paper'
import Home from '../screens/Home';

export const Bottombar = () => {
    const [state, setState] = useState({
        index: 0,
        routes: [
            {key: 'home', title: 'Home', icon: 'home'}
        ]
    })

    const changeIndex = useCallback((index) => {
        setState({
            ...state,
            index
        });
    }, [state]);

    const renderScene = BottomNavigation.SceneMap({
        home: Home
    })

    return (
        <BottomNavigation navigationState={state} onIndexChange={changeIndex} renderScene={renderScene} />
    )
}
