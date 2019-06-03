/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  LayoutChangeEvent
} from 'react-native'

const App: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    console.log(`width: ${width}, height: ${height}`)
  }

  return (
    <View style={s.container}>
      <StatusBar
        // translucent
        translucent={false}
        barStyle="dark-content"
        backgroundColor="rgba(0, 0, 0, 0.5)"
      />
      <Text>I’m underneath the status bar</Text>
      <TouchableOpacity onPress={openModal}>
        <Text style={s.marginTop}>Press me to open the modal</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        // transparent={false}
        transparent
        visible={isModalOpen}
        onRequestClose={closeModal}
      >
        <View onLayout={onLayout} style={s.modalViewContainer}>
          <Text>I should be underneath the status bar</Text>
          <TouchableOpacity onPress={closeModal}>
            <Text style={s.marginTop}>Press me to close the modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalViewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  marginTop: {
    marginTop: 50
  }
});

export default App
