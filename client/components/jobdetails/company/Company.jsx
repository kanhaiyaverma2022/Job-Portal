import React from 'react'
import { View, Text ,Image} from 'react-native'
import { location_icon } from '../../../constants/icons';
import styles from './company.style';
import job_image from '../../../assets/images/image.png';


const Company = ({companyLogo,jobTitle,companyName, location}) => {
 
  const validLogo = companyLogo ?  {uri:companyLogo} : job_image ;
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={validLogo} style={styles?.logoImage}/>
      </View>
      <View style={styles?.jobTitleBox}>
        <Text style={styles?.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image source={location_icon} resizeMode="contain" style={styles.locationImage}/>
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
      
    </View>
  )
}

export default Company