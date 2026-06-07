import React from 'react'
import { FlatList, Text, View } from 'react-native'

const names = ["Ram", "lax", "bar", "shat", "max", "super", "d", "dew", "Ram", "lax", "bar", "shat", "max", "super", "d", "dew"]
const FlatListPage = () => {
    return (

        <FlatList
            // horizontal
            ListHeaderComponent={
                <View>
                    <Text>
                        header
                    </Text>
                </View>
            }
            ListFooterComponent={
                <View>
                    <Text>
                        footer
                    </Text>
                </View>
            }
            numColumns={2}
            data={names}
            renderItem={({ item }) => {
                return (
                    <View
                        className=''>
                        <Text className='border-2 border-red-500 border-solid p-[2rem]'>{item}</Text>
                    </View>)

            }} />
    )
}

export default FlatListPage