import React, { useEffect } from "react"
import { Text as RNText, TextProps as RNTextProps } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

export interface TextProps extends RNTextProps {
  text?: string
  children?: React.ReactNode
}

export function TextWithOpacity({text, testID}: TextProps) {
  const sv = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: sv.value,
  }))
  useEffect(() => {
    sv.value = withTiming(1, { duration: 1000 });
  });

  return (
    <Animated.View testID={'container'} style={animatedStyle}>
      <RNText testID={testID}>
        {text}
      </RNText>
    </Animated.View>
  )
}