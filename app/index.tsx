import MyButton from "@/components/MyButton";
import { BlurView } from 'expo-blur';
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

import { Poppins_600SemiBold_Italic as pbi, Poppins_400Regular_Italic as pri, useFonts } from "@expo-google-fonts/poppins";

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
SplashScreen.preventAutoHideAsync();
export default function Index() {
  const router = useRouter();
  const onContinue = () => {
    router.navigate("/signup");
  };

  const [loaded, error] = useFonts({
    pri,
    pbi
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])



  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Image
        source={require("@/assets/images/homepage.png")}
        className="w-full h-full absolute"
        resizeMode="cover"
      />
      <BlurView className="flex-1 w-full h-full items-center justify-center"
        tint="dark">
        <View className="flex items-center">
          <MyButton btnName={"Continue"} onPress={onContinue} />
          <Text className="text-orange-600" style={{
            fontFamily: "pbi",
            fontSize: 20
          }}>
            Welcome Sir
          </Text>
        </View>

        <Text>
          Hello
        </Text>
      </BlurView>
    </SafeAreaView>
  );
}
