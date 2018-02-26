import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const {
        headerContentStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        headerTextSyle,
        ImageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextSyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source={{ uri: image }}
                    style={ImageStyle}
                />
            </CardSection>

            <CardSection>
                <Button />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        marginTop: 10
    },
    headerTextSyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 60,
        width: 60
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 3,
        marginRight: 10,
        marginTop: 3,
        marginBottom: 3
    },
    ImageStyle: {
        height: 200,
        flex: 1,
        width: null
    }
};


export default AlbumDetails;
