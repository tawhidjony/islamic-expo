import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const HomeTab = (props: Props) => {
  return (
    <SafeAreaView className='flex bg-primary-50 h-screen' >
      <Text>HomeTab</Text>
    </SafeAreaView>
  )
}

export default HomeTab