import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function TabLayout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: "Home",
                    title: "Home"
                }}
            />
            <Drawer.Screen
                name="search"
                options={{
                    drawerLabel: "Search",
                    title: "Search"
                }}
            />
            <Drawer.Screen
                name="profile"
                options={{
                    drawerLabel: "Profile",
                    title: "Profile"
                }}
            />
            <Drawer.Screen
                name="settings"
                options={{
                    drawerLabel: "Settings",
                    title: "Settings"
                }}
            />
        </Drawer >);
}