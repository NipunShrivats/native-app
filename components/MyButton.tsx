import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface MyButtonProps {
    btnName: string;
    onPress: () => void;
    secondPress?: () => void;
    secondtext?: string;

    thirdtext?: string;
    thirdPress?: () => void;
}
const MyButton: React.FC<MyButtonProps> = ({ btnName, onPress, secondPress, secondtext, thirdtext,
    thirdPress }) => {

    return (
        <View >
            <TouchableOpacity className="bg-blue-500 p-4 rounded-md" onPress={() => onPress()}>
                <Text className="text-white text-center font-bold w-[10rem]">
                    {btnName || "N/A"}
                </Text>
            </TouchableOpacity>
            {
                secondtext &&
                <View className="flex-row gap-1 pt-4">
                    <Text>Go to</Text>
                    {
                        secondPress &&
                        <Text onPress={() => secondPress()}
                            className={"text-red-500"}>{secondtext}</Text>
                    }
                </View>
            }
            {
                thirdtext &&
                <View className="flex-row gap-1 pt-4">
                    <Text>Go to</Text>
                    {
                        thirdPress &&
                        <Text onPress={() => thirdPress()}
                            className={"text-red-500"}>{thirdtext}</Text>
                    }
                </View>
            }


        </View>
    );
};

export default MyButton;
