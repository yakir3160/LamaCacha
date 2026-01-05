import { useState } from 'react';
import { TextInput, View,Switch ,Text,TouchableOpacity, Keyboard, Platform} from 'react-native';
import { CustomButton } from '../reusables/CustomButton.js';
import { globalStyle } from '../../design/globalStyles.js';
import { KeyboardDoneBar } from '../reusables/KeyboardDoneBar.js';

import { SelectInput } from '../reusables/SelectInput.js';
import * as Yup from 'yup';

const userSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    selectedValue: Yup.string().required('Please select an option'),
});

export const FormExample = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");



    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={globalStyle.form}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#393E41' }}>Register</Text>
            <TextInput
                placeholder="Enter your name"
                value={name}
                keyboardType='default'
                autoCapitalize='words'
                onChangeText={text => setName(text)}
                style={globalStyle.input}
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                inputAccessoryViewID="doneToolbar"
            />
            <TextInput
                placeholder="Enter your email"
                value={email}
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={text => setEmail(text)}
                style={globalStyle.input}
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                inputAccessoryViewID="doneToolbar"
            />
            <SelectInput
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                values={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                    { label: "Option 3", value: "option3" },
                    { label: "Option 4", value: "option4"}
                ]}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={globalStyle.input}
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
                inputAccessoryViewID="doneToolbar"
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' , marginTop: 10 ,backgroundColor:'#f0f0f0',padding:10,borderRadius:10}}>
                <Switch
                    value={isEnabled}
                    onValueChange={toggleSwitch}
                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
                    trackColor={{ false: "#767577", true: "#01c577ff" }}
                    thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                />
                <Text style={{ marginLeft: 10, fontSize: 16, color: '#393E41' }}>
                    Enable Notifications
                </Text>
            </View>
            <CustomButton onPress={() => {}} text="Submit" />
            <CustomButton onPress={() => {alert('Delete')}} text="Delete" color="#ff0000" textColor="#000" />
            {Platform.OS === 'ios' && <KeyboardDoneBar />}
        </View>
    )
};
