import MyButton from '@/components/MyButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {

    const router = useRouter();
    const onLogin = () => {
        router.navigate("/signup")
    }
    const onHome = () => {
        router.navigate("/")
    }
    const onLoginSubmit = () => {
        router.navigate("/loginSubmit")
    }
    return (
        <SafeAreaView className="flex-1 items-center">
            <Image source={require('@/assets/images/login.png')} style={{ width: "100%", height: 300 }} resizeMode="cover" />
            <View className="flex items-center justify-cente w-full p-[.5rem] gap-[.5rem]">
                <TextInput placeholder="Enter your Email"
                    className="border border-black rounded-md w-[100%]"
                />
                <TextInput placeholder="Enter your Password"
                    className="border border-black rounded-md w-[100%]" />
                <MyButton btnName={"Login"} onPress={onLoginSubmit} secondPress={onHome} secondtext={"Go to Home"} />
            </View>
        </SafeAreaView>
    )
}