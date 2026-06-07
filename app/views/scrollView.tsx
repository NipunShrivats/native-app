import React from 'react'
import { ScrollView, Text } from 'react-native'

const ScrollViewPage = () => {
    const names = ["Ram", "lax", "bar", "shat", "max", "super", "d", "dew", "Ram", "lax", "bar", "shat", "max", "super", "d", "dew"]
    return (
        <ScrollView horizontal className='border-2 border-green-500 border-solid'>
            {
                names.map((name, index) => {
                    return (
                        <Text key={index}
                            className='border-2 border-red-500 border-solid p-[10rem]'>
                            {name}
                        </Text>
                    )
                })
            }
        </ScrollView>

    )
}

export default ScrollViewPage