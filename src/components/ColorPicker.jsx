import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'
const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3' >
      <SketchPicker
        color={snap.color}
        disableleAlpha
        presetColors={[
        '#FFFFFF', // White
        '#000000', // Black
        '#FF0000', // Red
        '#00FF00', // Green
        
        '#CCCCCC', // Light Gray
        '#888888', // Medium Gray
        '#333333', // Dark Gray
        '#2196F3', // Material Design Primary (Blue)
        '#FFC107', // Material Design Secondary (Yellow)
        '#F44336', // Material Design Red
        '#4CAF50', // Material Design Green
        '#3F51B5', // Material Design Indigo
        '#FF5722', // Material Design Deep Orange
        '#795548', // Material Design Brown
        '#9C27B0', // Material Design Purple
        '#673AB7',]
      }
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
