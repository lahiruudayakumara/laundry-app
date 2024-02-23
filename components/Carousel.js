import { StyleSheet, View, Text } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'

const Carousel = () => {
    const images = [
        "https://cdni.iconscout.com/illustration/premium/thumb/laundry-room-4849635-4034204.png",
        "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
        "https://t3.ftcdn.net/jpg/02/61/72/92/360_F_261729260_GvCuivXjo8ubRPYADGX5ITU2eKRHqV4w.jpg",
    ];
  return (
    <View>
        <SliderBox 
            images={images}  
            autoPlay 
            circleLoop 
            dotColor={'#13274F'} 
            inactiveDotColor="#90A4AE" 
            ImageComponentStyle={{
                borderRadius: 6,
                width: "94%",
            }}
        />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})
