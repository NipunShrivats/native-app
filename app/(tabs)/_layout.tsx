// import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

// // WORKING in IOS
// export default function TabLayout() {
//   return (
//     <NativeTabs>
//       <NativeTabs.Trigger name="index">
//         <Label>Home</Label>
//         <Icon sf="house.fill" />
//       </NativeTabs.Trigger>

//       <NativeTabs.Trigger name="search">
//         <Icon sf="magnifyingglass" />
//         <Label>Search</Label>
//       </NativeTabs.Trigger>

//       <NativeTabs.Trigger name="saved">
//         <Icon sf="bookmark" />
//         <Label>Saved</Label>
//       </NativeTabs.Trigger>

//       <NativeTabs.Trigger name="profile">
//         <Icon sf="person" />
//         <Label>Profile</Label>
//       </NativeTabs.Trigger>
//     </NativeTabs>
//   );
// }
// -----------------------------------------

import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // no weird header
      }}
    >

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <View
                className="border-2 border-black border-solid w-[4rem]
                flex items-center justify-center h-[4rem] rounded-full bg-black mb-10 "
              >
                <Ionicons name="home" size={size} color={"white"} />
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
