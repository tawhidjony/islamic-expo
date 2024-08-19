import { Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";


const HomeTab = () => {
    return (
        <SafeAreaView>
            <View className="flex justify-center items-center h-screen bg-gradient-to-r from-primary-500 to-primary-700">
                <Text>Hello Home Tab</Text>
            </View>
        </SafeAreaView>
    )
}
export default HomeTab;
