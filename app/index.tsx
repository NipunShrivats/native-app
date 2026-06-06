import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
export default function Index() {

  const router = useRouter();
  const onContinue = () => {
    router.navigate("/signup");
  }
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Image source={require('@/assets/images/homepage.png')} className="w-full h-full absolute" resizeMode="cover" />
      <View>
        <MyButton btnName={"Continue"} onPress={onContinue} />
      </View>
    </SafeAreaView>
  )
}
