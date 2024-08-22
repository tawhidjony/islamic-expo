import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

interface IconDataProps {
    href?: any;
    icon?: any;
}
interface IconCardProps {
    href?: any;
    icon?: any;
}

const IconCard = ({ icon, href }: IconCardProps) => {
    return (
        <LinearGradient colors={['#2C9D61', '#17653F']} style={{ borderRadius: 10, borderWidth: 1, borderColor: "#B3E7C5" }} className="h-20 justify-center items-center" >
            <TouchableOpacity onPress={() => router.push(href)} >
                {icon}
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default IconCard