import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'view': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'black' }],
    'display': 'inline-block'
  },
  'textView': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'fontFamily': 'monospace',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'pre-wrap'
  },
  'svg-square': {
    'fill': 'yellow',
    'stroke': 'black'
  },
  '#speed': {
    'transform': 'rotate(180deg)'
  }
});
