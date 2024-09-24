import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  
  btnContainer: "w-[40px] h-[40px] bg-white rounded-lg flex justify-center items-center",
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small/1.25,
  }),
});

export default styles;
