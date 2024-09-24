
import { View ,Text} from 'react-native'
import { Slot,Stack } from 'expo-router'
 import React ,{ useCallback }from 'react'

 import { useFonts } from 'expo-font';
 import * as SplashScreen from 'expo-splash-screen'


   const _layout = () => {
   const [fontLoaded]=useFonts({
     "DMRegular": require("../assets/fonts/DMSans-Regular.ttf"),
     "DMBold": require("../assets/fonts/DMSans-Bold.ttf"),
     "DMMedium": require("../assets/fonts/DMSans-Medium.ttf"),
   })
      const onLayoutRootView = useCallback(async()=>{
     if(fontLoaded){
       await SplashScreen.hideAsync()
       }
   },[fontLoaded])

   if (!fontLoaded){
     return <Text className="text-black bg-red-100">Font Loading...</Text>
   }
  return (
    <Stack >
      <Stack.Screen onLayout={onLayoutRootView} name='index' options={{headerShown:true}}/>
      
    </Stack>
   
  )
}

export default _layout



// import {Stack} from 'expo-router'
// import React ,{ useCallback }from 'react'
// import { Text } from 'react-native';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen'

// SplashScreen.preventAutoHideAsync();
// const _layout = () => {
//   const [fontLoaded]=useFonts({
//     "DMRegular": require("../assets/fonts/DMSans-Regular.ttf"),
//     "DMbold": require("../assets/fonts/DMSans-Bold.ttf"),
//     "DMmedium": require("../assets/fonts/DMSans-Medium.ttf"),
//   })

//   const onLayoutRootView = useCallback(async()=>{
//     if(fontLoaded){
//       await SplashScreen.hideAsync()
//       }
//   },[fontLoaded])

//   if (!fontLoaded){
//     return <Text className="text-black bg-red-100">Font Loading...</Text>
//   }
//   return (
//     <Stack onLayout={onLayoutRootView}/>
//   )
// }

// export default _layout

