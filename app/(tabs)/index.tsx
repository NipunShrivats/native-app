import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        {/* <Link href="../about">Go to About</Link> */}
      </View>
    </SafeAreaView>
  );
}
