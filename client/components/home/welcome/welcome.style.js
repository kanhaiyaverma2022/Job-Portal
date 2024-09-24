import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: "w-[100%]",
  userName: "font-regular text-xxl text-secondary"
   
  ,
  welcomeMessage: 
    " font-bold text-xLarge text-primary mt-[2px]"
   
  ,
  searchContainer: 
  "flex justify-center items-center flex-row mt-large h-[50px] ",
  searchWrapper:
  "flex-1 bg-white mr-small justify-center items-center rounded-xl h-[100%]" ,
  searchInput:
  
  "font-regular w-[100%] h-[100%] px-medium",
  searchBtn: 
  "w-12 h-[100%] bg-tertiary rounded-xl flex justify-center items-center",
  searchBtnImage:"w-[50%] h-[50%]  tintColor-white" ,
  tabsContainer:"w-[100%] mt-4",
  tab: (activeJobType, item) => (
    `px-small py-xSmall rounded-3xl  border ${activeJobType === item ? 'border-secondary': 'border-gray2'}`),
  tabText: (activeJobType, item) => (`font-medium ${ activeJobType === item ? 'text-secondary': 'text-gray2'}`),
});

export default styles;
