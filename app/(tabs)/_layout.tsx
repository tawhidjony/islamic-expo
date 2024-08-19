import { getItem } from '@/asyncStorage'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React, { useEffect, useState } from 'react'

type Props = {}

const TabLayout = (props: Props) => {
    const [showOnbordaring, setShowOnbordaring] = useState<boolean>(false)
    useEffect(() => {
        checkIfAlreadyOnboarded()
    }, [])

    const checkIfAlreadyOnboarded = async () => {
        let onboarded = await getItem('onboarded')
        if (onboarded == '1') {
            setShowOnbordaring(false)
        } else {
            setShowOnbordaring(true)
        }
    }

    if (showOnbordaring == null) {
        return null;
    }

    if (showOnbordaring) {
        return (
            <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', tabBarStyle: { height: 60 } }}>
                <Tabs.Screen name='index' options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <Feather name='home' size={24} color={color} />,
                    tabBarLabelStyle: { fontSize: 13, height: 18, lineHeight: 12 },
                    headerShown: false,
                }} />
                <Tabs.Screen name='category' options={{
                    title: "Category",
                    tabBarIcon: ({ color }) => <MaterialIcons name="category" size={24} color={color} />,
                    tabBarLabelStyle: { fontSize: 13, height: 18, lineHeight: 12 },
                }}

                />
                <Tabs.Screen name='cart' options={{
                    title: "Cart",
                    tabBarIcon: ({ color }) => <Feather name='shopping-cart' size={24} color={color} />,
                    tabBarLabelStyle: { fontSize: 13, height: 18, lineHeight: 12 },
                }} />
                <Tabs.Screen name='profile' options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => <Feather name='user' size={24} color={color} />,
                    tabBarLabelStyle: { fontSize: 13, height: 18, lineHeight: 12 },

                }} />
            </Tabs>
        )
    } else {
        return (
            <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', tabBarStyle: { height: 60 } }}>
                <Tabs.Screen name='index' options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <Feather name='home' size={24} color={color} />,
                    tabBarLabelStyle: { fontSize: 13, height: 18, lineHeight: 12 },
                    headerShown: false,
                }} />
                <Tabs.Screen name='category' options={{
                    title: "Category",
                    tabBarIcon: ({ color }) => <MaterialIcons name="category" size={24} color={color} />,
                    tabBarLabelStyle: { fontSize: 13, height: 18, lineHeight: 12 },
                }}

                />
                <Tabs.Screen name='cart' options={{
                    title: "Cart",
                    tabBarIcon: ({ color }) => <Feather name='shopping-cart' size={24} color={color} />,
                    tabBarLabelStyle: { fontSize: 13, height: 18, lineHeight: 12 },
                }} />
                <Tabs.Screen name='profile' options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => <Feather name='user' size={24} color={color} />,
                    tabBarLabelStyle: { fontSize: 13, height: 18, lineHeight: 12 },

                }} />
            </Tabs>
        )
    }


}

export default TabLayout