import { View, Dimensions,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { globalStyle } from '../../design/globalStyles';

import Body from '../../components/layout/Body';
import UsersList from '../../components/users/UsersList.js';

const { width, height } = Dimensions.get('window')


export default function App() {
 
  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={{ flex: 1, width: width }}>
        <UsersList />
      </View>
        {/* <Body /> */}
    </SafeAreaView> 
      

  );
}

