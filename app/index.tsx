import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
export default function Index() {
  return (
    <SafeAreaView>
      {/* <Redirect href="/(tabs)" /> */}
      <Redirect href="/(drawer)" />
    </SafeAreaView>
  )
}
