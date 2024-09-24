import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'
import job_image from '../../../../assets/images/image.png'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utilis/handyFunctions';

const PopularJobCard = ({item,selectedJob, handleCardPress}) => {
 
  const validLogo = checkImageURL(item?.employer_logo) ? { uri: item.employer_logo } : job_image;
  return (
    <TouchableOpacity
    style={styles.container(selectedJob,item)}
    onPress={()=>{handleCardPress(item)}}>
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image 
        source={validLogo}
        resizeMode='contain'
        style={styles.logoImage}
        />  
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.companyName}>{item?.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.jobName(selectedJob,item)}>
          {item?.job_title}
        </Text>
        <Text style={styles?.location}>{item?.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard