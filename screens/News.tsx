import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import Topbar from '../components/Topbar'
import news from '../news';
import SingleCard from '../components/SingleCard';

export const News = () => {
    return (
        <>
            <Topbar title="News feed" subtitle="Let's read something" />
            <FlatList
            data={news}
            renderItem={({item}) => <SingleCard {...item} />}
            keyExtractor={item => item.id.toString()}
            />
        </>
    )
}
