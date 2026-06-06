import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginSubmit() {
    const router = useRouter();
    const onHome = () => {
        router.navigate("/")
    }
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <View>
                <Text>Welcome To the App</Text>
                <Text className='text-red-500' onPress={onHome}>
                    Back to Home
                </Text>
            </View>
        </SafeAreaView>
    )
}