import React,{useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator,FlatList } from 'react-native'
import PopularJobsCard from '../../common/cards/popular/PopularJobCard'
import { useRouter } from 'expo-router'
import useFetch from '../../../hooks/useFetch'


import styles from './popularjobs.style'

import { COLORS,SIZES } from '../../../constants/index'


const Popularjobs = () => {
  const router = useRouter();
 const {data,isLoading,error}=useFetch('search',{
  query:'React developer',
  num_pages:1
 })

 const [selectedJob, setSelectedJob] = useState();
 const handleCardPress = (item) => {
  router.push(`/job-details/${item.job_id}`);
  setSelectedJob(item.job_id);
};

  
  return (
    <View className={styles?.container}>
      <View className={styles.header}>
      <Text className={styles.headerTitle}>Popularjobs</Text>
      <TouchableOpacity><Text className={styles.headerBtn}>Show All</Text></TouchableOpacity>
      </View>
      <View className={styles.cardsContainer}>
        {isLoading ? 
        (<ActivityIndicator size="large" colors={COLORS.primary}/>) : 
        error ? (<Text>Something went wrong...</Text>) :
        <FlatList
        data={data}
        renderItem={(item)=><PopularJobsCard selectedJob={selectedJob} item={item?.item}  handleCardPress={handleCardPress}/>}
        keyExtractor={(item)=>item?.job_id}
        contentContainerStyle={{columnGap:SIZES.medium}}
        horizontal
        />}
      </View>
    </View>
  )
}

export default Popularjobs