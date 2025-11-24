
import { Text, View} from 'react-native';
import { appColors } from '../../design/colors';


export default function Header() {
  return (

        <View style={{ flex:0.05, backgroundColor: appColors.background}}>
          <Text>Header</Text>
        </View>

  );
}

