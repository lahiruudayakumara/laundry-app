import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const DressItem = ({item}) => {
  return (
    <View>
      <Pressable 
            style={{
                backgroundColor: "#F8F8F8",
                borderRadius:8, padding:10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                margin:14
            }}
        >
        <View>
            <Image
                style={{ width: 70, height: 70 }}
                source={{url: item.image }}
            />
        </View>
        <View> 
            <Text>{item.name}</Text>
            <Text>Rs.{item.price}</Text>
        </View>
        <Pressable style={{width:80}}>
            <Text 
                style={{
                    borderColor:"gray",
                    borderRadius:6,
                    borderWidth: 0.8,
                    marginVertical: 10,
                    color:"#088F8F",
                    textAlign: "center",
                    padding:5
                }}
            >
                Add
            </Text>
        </Pressable>
      </Pressable>
    </View>
  )
}

export default DressItem

const styles = StyleSheet.create({})