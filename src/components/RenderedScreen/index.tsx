import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { SlideInRight } from 'react-native-reanimated';

interface Props {
  children: ReactNode;
  isFirst: boolean;
}


export const RenderedScreen = ({ children, isFirst }: Props) => {
  return (
    <Animated.View 
      style={styles.container} 
      entering={!isFirst ? SlideInRight: undefined}
    >
      {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
})
