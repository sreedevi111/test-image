import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>Hello World</Text>
      <Image source={{url:'https://pixabay.com/images/search/cool%20wallpaper/'}} style={{width:150, height:150}}/>
    </View>
  )
}
export default App
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})