
import { Pressable, Text } from 'react-native';

interface UiButtonProps {
    title: string;
    onPress?: () => void;
}

export const UiButton = ({ title, onPress }: UiButtonProps) => {
    return (
        <Pressable onPress={onPress} className='px-4 py-5 w-1/2 rounded-3xl border border-primary-300 ' >
            <Text className='text-lg px-4'>{title}</Text>
        </Pressable>
    )
}
