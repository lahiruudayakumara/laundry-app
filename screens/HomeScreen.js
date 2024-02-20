import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'

const HomeScreen = () => {
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState("We are loading Your Location");
    const [locationServicesEnabled, setLocationServicessEnabled] = useState(false);
    const chIeckfLocationEnable = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if(!enabled) {
            Alert.alert(
            'Location Services not enabled',
            'Please enable the location services',
            [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        } else {
            setLocationServicessEnabled(enabled);
        }
    }
    const getCurrentLocation = async () => {
        let {status} = await Location.requestBackgroundPermissionsAsync();
        if(status !== granted) {
            Alert.alert(
                'Permission denied',
                'Allow the app to use the location services',
                [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
        }

    } 
    useEffect(() => {
        chIeckfLocationEnable();
        getCurrentLocation();
    },[])
  return (
    <SafeAreaView>
        <Text>Home</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const style = StyleSheet.create({})
