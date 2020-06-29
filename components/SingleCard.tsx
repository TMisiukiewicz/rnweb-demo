import React from 'react'
import { View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

interface Props {
    title: string;
    image: string;
    text: string;
}

const SingleCard = ({title, image, text}: Props) => {
    return (
        <Card style={{marginBottom: 15}}>
            <Card.Cover source={{uri: image}} />
            <Card.Content>
                <Title>{title}</Title>
                <Paragraph>{text}</Paragraph>
            </Card.Content>
        </Card>
    )
}

export default SingleCard;