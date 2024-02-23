import React from 'react'
import { Pressable, ScrollView, View, Text, Image } from 'react-native'

const Services = () => {
    const services = [
        {
            id: "0",
            image: "https://static.vecteezy.com/system/resources/previews/026/721/203/original/washing-machine-and-laundry-laundry-sticker-png.png",
            name: "Washing",
        },
        {
            id: "1",
            image: "https://hellogiggles.com/wp-content/uploads/sites/7/2020/04/14/how-to-do-laundry.png",
            name: "Laundry",
        },
        {
            id: "2",
            image: "https://img.freepik.com/premium-vector/electric-iron-ironing-board-isolated-background-flat-vector-illustration_529344-739.jpg",
            name: "Wash & Iron",
        },
        {
            id: "3",
            image: "https://www.ttnpalawan.com/cdn/shop/products/laundry_detergent_2_large.png?v=1568441484",
            name: "Cleaning",
        },
    ]
  return (
    <View style={{padding:10}}>
        <Text style={{fontSize:16, fontWeight: "500", marginBottom:7}}>Services Available</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {services.map((service,index) => (
                <Pressable style={{margin:10, backgroundColor: "white", padding:20, borderRadius:7}} key={index}>
                    <Image source={{url: service.image}} style={{width:70, height: 70}} />
                    <Text style={{textAlign: "center", marginTop: 10}}>{service.name}</Text>
                </Pressable>
            ))}
        </ScrollView>
    </View>
  )
}

export default Services
