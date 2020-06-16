import React from 'react'
import { View, Text } from 'react-native'
import Topbar from '../components/Topbar'

export const News = () => {
    return (
        <View>
            <Topbar title="News feed" subtitle="Let's read something" />
            <Text>News</Text>
        </View>
    )
}
