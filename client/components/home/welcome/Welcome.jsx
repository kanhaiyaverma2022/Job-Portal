import React, { useState } from 'react';
import { router, useRouter } from 'expo-router';
import {  Text, View, FlatList,TextInput, TouchableOpacity,Image } from 'react-native';
import { jobTypes } from '../../../utilis/dummyData';


import styles from '../welcome/welcome.style';
import { icons, SIZES } from '../../../constants';
import { search } from '../../../constants/icons';


const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const [activeJobType, setActiveJobType] = useState("Software Engineer")
  return (
    <>
    <View className={`${styles.container}`}>
      <Text className={`${styles.userName}`}>Hello Kanhaiya</Text>
      <Text className={`${styles.welcomeMessage}`}>Find your perfect job</Text>
    </View>
    <View  className={`${styles.searchContainer}`}>
      <View className={`${styles.searchWrapper}`}>
        <TextInput 
        className={`${styles.searchInput}`}
        value={searchTerm}
        onChangeText={(text)=>setSearchTerm(text)}
        placeholder='What are you looking for?'/>
      </View>
      <TouchableOpacity className={`${styles.searchBtn}`} onPress={handleClick}>
        <Image
        source={search}
        resizeMode='contain'
        className={`${styles.searchBtnImage}`}
        style={{tintColor:"white"}}
        />
      </TouchableOpacity>
    </View>
    <View className={`${styles.tabsContainer}`}>
    <FlatList 
        data={jobTypes}
        keyExtractor={(item)=>item}
        renderItem={({item})=>( 
          <TouchableOpacity 
          className={`${styles.tab(activeJobType,item)}`}
          onPress={()=>{
            setActiveJobType(item);
            router.push(`search/${item}`)
          }}
          >
            <Text>{item}</Text>

          </TouchableOpacity>

  )}
  contentContainerStyle={{columnGap:SIZES.small}}
  horizontal/>
      </View>
    </>
  )
}

export default Welcome