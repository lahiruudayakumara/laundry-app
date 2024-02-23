import { Alert, Pressable, SafeAreaView, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { MaterialIcons, Feather } from '@expo/vector-icons'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import DressItem from '../components/DressItem'

const HomeScreen = () => {
    const services = [
        {
            id: "5",
            image: "https://static.massimodutti.net/3/photos//2024/V/0/2/p/0153/346/405/0153346405_1_1_16.jpg?t=1699011436394&impolicy=massimodutti-itxmediumhigh&imwidth=500&imformat=chrome",
            name: "Shirt",
            quantity: 0,
            price: 10,
        },
        {
            id: "6",
            image: "https://assets.burberry.com/is/image/Burberryltd/F1B9775E-C5BE-4BF0-BF7A-B91A7A90F0E4?$BBY_V3_SL_1$&wid=1501&hei=1500",
            name: "T-Shirt",
            quantity: 0,
            price: 10,
        },
        {
            id: "6",
            image: "https://cdn.shopify.com/s/files/1/0477/2131/6519/products/1-208557_1024x.jpg?v=1690382120",
            name: "Dresses",
            quantity: 0,
            price: 10,
        },
        {
            id: "6",
            image: "https://assemblylabel.com/cdn/shop/products/c01a596fd3cb4413bad785724b510096_600x.jpg?v=1693190679",
            name: "Jeans",
            quantity: 0,
            price: 10,
        },
    ];

    const [displayCurrentAddress, setDisplayCurrentAddress] = useState("We are loading Your Location");
    const [locationServicesEnabled, setLocationServicessEnabled] = useState(false);
    useEffect(() => {
        chIeckfLocationEnable();
        getCurrentLocation();
    }, [])
    const chIeckfLocationEnable = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            Alert.alert(
                'Location Services not enabled',
                'Please enable the location services',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
        } else {
            setLocationServicessEnabled(enabled);
        }
    }
    const getCurrentLocation = async () => {
        let { status } = await Location.requestBackgroundPermissionsAsync();
        if (status !== "granted") {
            Alert.alert(
                'Permission denied',
                'Allow the app to use the location services',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            );
        }

        const { coords } = await Location.getCurrentPositionAsync();
        console.log(coords);
        if (coords) {
            const { latitude, longitude } = coords;

            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });

            console.log(response);

            for (let item of response) {
                let address = `${item.name} ${item.city} ${item.postalCode}`;
                setDisplayCurrentAddress(address);
            }
        }
    }

    return (
        <SafeAreaView style={{backgroundColor: "#F0F0F0", flex:1}}>
           <ScrollView>
                {/* Location & Profile */}
                <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
                    <MaterialIcons name='location-on' size={30} color="#fd5c63" />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
                        <Text>{displayCurrentAddress}</Text>
                    </View>

                    <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                            source={{
                                url: "https://lh3.googleusercontent.com/a/ACg8ocKu1oXiXNBNelgrvPIvjQ3kuNNbhYh3TEa5Tp9wqKiJ6PU=s96-c"
                            }}
                        />
                    </Pressable>
                </View>
                {/* Search Bar */}
                <View
                    style={{
                        padding: 10,
                        margin: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderWidth: 0.8,
                        borderColor: "#c0c0c0",
                        borderRadius: 7,
                    }}>
                    <TextInput placeholder='Search for items or More' />
                    <Feather name='search' size={24} color="#fd5c63" />
                </View>

                {/* Image Carousel */}
                <Carousel />

                {/* Available Service */}
                <Services/>

                {/* Render all the Products */}
                {services.map((item, index) => (
                    <DressItem item={item} key={index} />
                ))}
           </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const style = StyleSheet.create({})
