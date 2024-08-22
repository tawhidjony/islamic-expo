import Logo from '@/assets/images/onborder/caliography.svg';
import { setItem } from '@/asyncStorage';
import { router, useNavigation } from 'expo-router';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
type Props = {}

const OnBoardScreen = (props: Props) => {
  const navigation = useNavigation()
  const handleSubmit = async () => {
    await setItem('onboarded', '1')
    router.push('/(tabs)')
  }
  return (
    <Onboarding
      onDone={handleSubmit}
      bottomBarColor='#187d4b'
      pages={[
        {
          backgroundColor: '#1a9f5d',
          image: <Logo width={250} height={250} />,
          title: 'এমন কারো সঙ্গী হোন যে আপনাকে আল্লাহর কথা স্মরণ করিয়ে দেয়। ',
          subtitle: 'ড. বিলাল ফিলিপ্স',

        },
        {
          backgroundColor: '#1a9f5d',
          image: <Logo width={250} height={250} />,
          title: 'আপনি যদি ইসলামকে চর্চা না করেন, দয়াকরে ইসলাম সম্পর্কে কিছু বলতে আসবেন না',
          subtitle: 'ডা: জাকির নায়িক',
        },
        {
          backgroundColor: '#1a9f5d',
          image: <Logo width={250} height={250} />,
          title: 'আল্লাহকে ভয় করো, কেননা যে তাকে ভয় করে সে কখনো একাকীত্ব অনুভব করে না।',
          subtitle: 'উমার ইবনুল খাত্তাব (রাদিয়াল্লাহু আনহু)',
        },

      ]}
    />
  )
}

export default OnBoardScreen