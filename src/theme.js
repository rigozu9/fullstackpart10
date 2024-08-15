import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#E0E0E0',
      textSecondary: '#6C7680',
      primary: '#1D1F21',
      secondary: '#88A8C2',
      appBarColor: '#151718',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      heading: 18,
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System',
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    avatarImage: {
      width: 50,
      height: 50,
      borderRadius: 4,
      marginRight: 15,
    },
  };
  
export default theme;