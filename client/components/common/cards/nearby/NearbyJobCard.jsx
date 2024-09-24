import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import job_image from '../../../../assets/images/image.png';  // This is a fallback image
import styles from './nearbyjobcard.style';
import { checkImageURL } from '../../../../utilis/handyFunctions';

const NearbyJobCard = ({ job, handleNavigate }) => {
  // Check if the employer_logo is valid using the utility function
  const validLogo = job?.employer_logo ?  {uri:job?.employer_logo}  : job_image;


  return (
   
    <TouchableOpacity
      
      style={styles.container}
      onPress={handleNavigate}
    >
      {/* Image Section */}
      <View style={styles.logoContainer}>
        <Image
          source={validLogo}
          resizeMode='contain'
          style={styles?.logoImage}
        />
      </View>

      {/* Text Section */}
      

      <View style={styles?.textContainer}>
        <Text numberOfLines={1} style={styles?.jobName}>
          {job?.job_title}
        </Text>
        <Text style={styles.jobType}>
          {job?.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
