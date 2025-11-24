
import { Text, TouchableOpacity, View} from 'react-native';
import { appColors } from '../../design/colors';
import { Touchable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function Footer() {
  return (

        <View style={{ flex:0.05 ,marginTop:10,flexDirection:'row', backgroundColor: appColors.background}}>
       
          <TouchableOpacity style={{alignItems:"center",justifyContent:'center',margin:2, backgroundColor:appColors.background,flex:1}}>
             <Feather name="home" size={24} color="black"  />
          </TouchableOpacity>
          <TouchableOpacity style={{margin:2,backgroundColor:appColors.background,flex:1}}>
             <Text>
               cart
             </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:2,backgroundColor:appColors.background,flex:1}}>
             <Text>
               search
             </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{margin:2,backgroundColor:appColors.background,flex:1}}>
             <Text>
               account
             </Text>
          </TouchableOpacity>
        </View>

  );
}

