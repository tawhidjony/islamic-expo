import IconCard from '@/components/tabs/home/IconCard';
import { Feather, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = {}

const { width: screenWidth } = Dimensions.get('window');
const dataCarousel = [
  {
    id: 1,
    dowa: "রাব্বানা আ’তিনা ফিদ্দুনিয়া হাছানাতাঁও ওয়াফিল আখিরাতি হাছানাতাঁও ওয়াক্বিনা আজাবান্নার।",
    ans: "অর্থঃ হে আল্লাহ্ তুমি আমাকে ইহকালীন যাবতীয় সুখ-শান্তি ও পরকালীন যাবতীয় সুখ-শান্তি প্রদান কর। আর দোজখের আগুন থেকে আমাকে রক্ষা কর।"

  },
  {
    id: 2,
    dowa: "রাব্বানা আ’তিনা ফিদ্দুনিয়া হাছানাতাঁও ওয়াফিল আখিরাতি হাছানাতাঁও ওয়াক্বিনা আজাবান্নার।",
    ans: "অর্থঃ হে আল্লাহ্ তুমি আমাকে ইহকালীন যাবতীয় সুখ-শান্তি ও পরকালীন যাবতীয় সুখ-শান্তি প্রদান কর। আর দোজখের আগুন থেকে আমাকে রক্ষা কর।"

  },
  {
    id: 3,
    dowa: "রাব্বানা আ’তিনা ফিদ্দুনিয়া হাছানাতাঁও ওয়াফিল আখিরাতি হাছানাতাঁও ওয়াক্বিনা আজাবান্নার।",
    ans: "অর্থঃ হে আল্লাহ্ তুমি আমাকে ইহকালীন যাবতীয় সুখ-শান্তি ও পরকালীন যাবতীয় সুখ-শান্তি প্রদান কর। আর দোজখের আগুন থেকে আমাকে রক্ষা কর।"

  },
]



const HomeTab = (props: Props) => {

  return (
    <SafeAreaView className='flex bg-primary-50 h-full w-full' >
      <LinearGradient colors={['#26c174', '#1a9f5d', '#187d4b']} className='h-full'>
        <View className='w-full py-4 px-6 mx-auto h-[10%]'>
          <View className='flex flex-row justify-between items-center'>
            <View>
              <Text className='text-xl text-primary-100'>নামাজের সময়</Text>
              <Text className='text-lg text-primary-100'>আসর</Text>
            </View>
            <View>
              <Ionicons name='notifications-circle-outline' size={35} color={"white"} />
            </View>
          </View>
        </View>
        <View className='w-4/5 py-6 mx-auto h-[15%]' >
          <Text className='text-3xl text-center text-primary-100 font-bold'>ফজিলতপূর্ণ  দোয়া ও আমল </Text>
        </View>
        <View className='w-full h-[22%]'>
          <View >
            <Carousel
              data={dataCarousel}
              width={screenWidth}
              height={250}
              autoPlay={true}
              autoPlayInterval={10000}
              loop={true}
              renderItem={({ item }) => (
                <View className='p-4 space-y-4'>
                  <Text className='text-xl text-center text-primary-100' >{item.dowa}</Text>
                  <Text className='text-md text-center text-primary-100 mt-4'>{item.ans}</Text>
                </View>
              )}
            />
          </View>
        </View>
        <View className='h-[50%] flex-1 rounded-tl-3xl rounded-tr-3xl w-5/6 mx-auto '>
          <Text className='text-2xl text-center pt-2' ></Text>
          <View className="flex-row flex-wrap">
            <View className="w-1/3 p-4">
              <IconCard icon={<Ionicons name="book-outline" size={30} color={"#fff"} />} href={"(tabs)/category"} />
            </View>
            <View className="w-1/3 p-4">
              <IconCard icon={<FontAwesome6 name="mosque" size={30} color={"#fff"} />} />
            </View>
            <View className="w-1/3 p-4">
              <IconCard icon={<FontAwesome5 name="quran" size={30} color={"#fff"} />} />
            </View>
            <View className="w-1/3 p-4">
              <IconCard icon={<Feather name="youtube" size={30} color={"#fff"} />} />
            </View>
            <View className="w-1/3 p-4">
              <IconCard icon={<Feather name="info" size={30} color={"#fff"} />} />
            </View>
            <View className="w-1/3 p-4">
              <IconCard icon={<FontAwesome5 name="quran" size={30} color={"#fff"} />} />
            </View>
            <View className="w-1/3 p-4">
              <IconCard icon={<Ionicons name="book-outline" size={30} color={"#fff"} />} />
            </View>
            <View className="w-1/3 p-4">
              <IconCard icon={<FontAwesome6 name="mosque" size={30} color={"#fff"} />} />
            </View>
            <View className="w-1/3 p-4">
              <IconCard icon={<FontAwesome5 name="quran" size={30} color={"#fff"} />} />
            </View>
          </View>
        </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default HomeTab
