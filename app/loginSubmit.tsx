import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginSubmit() {

    const [visible, setVisible] = useState(false)
    const router = useRouter();
    const onHome = () => {
        router.navigate("/")
    }
    const names = ["Ram", "lax", "bar", "shat", "max", "super", "d", "dew", "Ram", "lax", "bar", "shat", "max", "super", "d", "dew"]
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <View>
                <Text>Welcome To the App</Text>
                <Text className='text-red-500' onPress={onHome}>
                    Back to Home
                </Text>
                <TouchableOpacity className='bg-blue-400 flex items-center p-2 rounded-lg' onPress={() => setVisible(true)}>
                    <Text >
                        Open Modal
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Modal */}

            <ReactNativeModal
                isVisible={visible}
                onBackdropPress={() => setVisible(false)}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                style={{
                    // borderWidth: 2,
                    // borderColor: "blue",
                    borderRadius: 22,
                    margin: 0,
                    padding: 0

                }}
            >
                <View
                    className='flex-1 items-center justify-center bg-white'
                >
                    <Text>
                        Welcome Nipun!
                    </Text>

                    <TouchableOpacity className='bg-black text-white flex items-center p-2 rounded-lg' onPress={() => setVisible(false)}>
                        <Text className='text-white'>
                            close Modal
                        </Text>
                    </TouchableOpacity>
                </View>
            </ReactNativeModal>
        </SafeAreaView >
    )
}