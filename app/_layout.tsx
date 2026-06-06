import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (

    <Stack>
      {/* <Stack.Screen name="index" />       */}
      {/* <Stack.Screen name="about/about" /> */}
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="(drawer)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="loginSubmit" options={{ headerShown: false }} />
      <Stack.Screen name="regsiterSubmit" options={{ headerShown: false }} />

    </Stack>

  )
}
