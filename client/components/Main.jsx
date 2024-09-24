import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import { useRouter, Stack, router } from 'expo-router';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '.';
import { COLORS } from '../constants/index';
import { menu } from '../constants/icons';
import { profile } from '../constants/images';

const Main = () => {
  const [searchTerm, setSearchTerm]=useState("")
 
  return (
    <SafeAreaView className="flex-1 bg-lightWhite justify-between items-start">
      <Stack.Screen 
         options={{headerShadowVisible:false 
         ,headerStyle:{backgroundColor:COLORS.lightWhite},
         headerLeft: ()=>(<ScreenHeaderBtn iconUrl={menu} dimension={"60%"}/>),
         headerRight:()=>(<ScreenHeaderBtn iconUrl={profile} dimension="100%"/>),
         headerTitle: ""}}
        />
           <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
         <View className='flex-1 p-medium  border w-full'>
           <Welcome 
           searchTerm={searchTerm}
           setSearchTerm={setSearchTerm}
           handleClick={()=>{
            if(searchTerm){
              router.push(`/search/${searchTerm}`)
            }
           }}/>
           <Popularjobs />
           <Nearbyjobs />
         </View>

        </ScrollView>
       

      </SafeAreaView>
   
  )
}

export default Main




// import React from 'react';
// import { View, Text, SafeAreaView, ScrollView} from 'react-native';
// import { useRouter, Stack } from 'expo-router';
// import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '.';
// import { COLORS } from '../constants';
// import { menu } from '../constants/icons';
// import { profile } from '../constants/images';

// const Main = () => {

//   return (
//     <SafeAreaView className="flex-1 bg-lightWhite justify-between items-start">
//        <Stack.Screen 
//         options={{headerShadowVisible:false 
//         ,headerStyle:{backgroundColor:COLORS.lightWhite},
//         headerLeft: ()=>(<ScreenHeaderBtn iconUrl={menu} dimension="60%"/>),
//         headerRight:()=>(<ScreenHeaderBtn iconUrl={profile} dimension="100%"/>),
//         headerTitle: ""}}
//        />
//        <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
//         <View className='flex-1 p-medium  border w-full'>
//           <Welcome />
//           <Popularjobs />
//           <Nearbyjobs />


//         </View>

//        </ScrollView>
//     </SafeAreaView>
   
//   )
// }

// export default Main
