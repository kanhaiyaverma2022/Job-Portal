import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'


import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} className={`${styles.btnContainer}`}>
    <Image source={iconUrl} resizeMode='cover' 
    style={styles.btnImg(dimension)}/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn