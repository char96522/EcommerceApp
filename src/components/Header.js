import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'
 

const Header = ({ isCart }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={() => navigation.navigate("HOME_STACK")} style={styles.appContainer}>
        {isCart ? (<Ionicons name={"chevron-back"} color={"#E96E6E"} size={24} />) : (<Image source={require('../assets/apps.jpeg')} style={styles.appIcon} />

        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.myCart}>My Cart</Text>
      }
      <Image source={require('../assets/dp1.jpeg')} style={styles.dpIcon} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  appContainer: {
    backgroundColor: "fff",
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    width: 28,
    height: 28
  },
  dpIcon: {
    width: 44,
    height: 44,
    borderRadius: 22
  },
  myCart: {
    fontSize: 28,
    color: '#000'
  }
})