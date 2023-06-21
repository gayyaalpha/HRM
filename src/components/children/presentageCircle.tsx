import { View, Text } from 'react-native'
import React from 'react'
import ProgressCircle from 'react-native-progress-circle'

const PresentageCircle = () => {
  return (
    <View>
      <ProgressCircle
            percent={30}
            radius={100}
            borderWidth={12}
            color="#019BFF"
            shadowColor="#999"
            bgColor="#08254D"
        >
            <Text style={{ fontSize: 48 ,color:'white', fontWeight:'bold' }}>{'30%'}</Text>
            <Text style={{ fontSize: 14 ,color:'#00A3FF' }}>{"   MONTHLY\nATTENDENCE"}</Text>
        </ProgressCircle>
    </View>
  )
}

export default PresentageCircle