import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegsiterSubmit() {
    const router = useRouter();
    const onLogin = () => {
        router.navigate("/login")
    }
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <View>
                <Text>You have been registered!</Text>
                <Text className='text-red-500' onPress={onLogin}>
                    Login to continue
                </Text>
            </View>
        </SafeAreaView>
    )
}