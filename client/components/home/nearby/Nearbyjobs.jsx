import React,{useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator,FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import useFetch from '../../../hooks/useFetch'
import styles from './nearbyjobs.style'
import { COLORS ,SIZES} from '../../../constants/index'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'




const NearbyJobs = () => {
  const router = useRouter();
 const {data,isLoading,error}=useFetch('search',{
  query:'React developer',
  num_pages:1
 })

  return (
    <View style={styles?.container}>
      <View style={styles.header}>
      <Text style={styles?.headerTitle}>Nearby jobs</Text>
      <TouchableOpacity><Text style={styles.headerBtn}>Show All</Text></TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? 
        (<ActivityIndicator size="large" colors={COLORS.primary}/>) : 
        error ? (<Text>Something went wrong...</Text>) :
       
        data?.map(job=>{
          return (
          <NearbyJobCard 
          handleNavigate={()=>router?.push(`/job-details/${job?.job_id}`)}
           job={job} 
           key={`nearby-job-${job?.job_id}`}/>
        )})
        }
      </View>
    </View>
  )
}

export default NearbyJobs;