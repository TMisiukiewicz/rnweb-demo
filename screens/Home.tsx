import React from 'react'
import { View } from 'react-native';
import {Text} from 'react-native-paper';
import Topbar from '../components/Topbar';

const Home = () => {
    return (
        <View>
            <Topbar title="Hello world" subtitle="Pagepro demo" />
            <Text>Hello</Text>
        </View>
    )
}

export default Home;