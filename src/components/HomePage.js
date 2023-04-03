import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import LocationButton from './LocationButton';

export default function HomePage(props) {
    return (
        <View style={styles.mainView}>
            <CustomButton
                title="Open Camera"
                color='#0080ff'
                onPressFunction={() => { props.navigation.navigate('Camera') }}
            />
            <LocationButton />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    }
})