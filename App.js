
import { View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyle } from './design/globalStyles.js';


import Header from './components/layout/Header'
import Body from './components/layout/Body.js';
import Footer from './components/layout/Footer.js';
const { width, height } = Dimensions.get('window')

export default function App() {
  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={{ flex: 1,width:width }}>
       <Header/>
       <Body/>
       <Footer/>
      </View>
    </SafeAreaView>

  );
}

