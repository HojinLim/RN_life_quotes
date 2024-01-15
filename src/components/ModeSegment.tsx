import SegmentedControl, {
  NativeSegmentedControlIOSChangeEvent,
} from '@react-native-segmented-control/segmented-control';
import * as React from 'react';
import {NativeSyntheticEvent, StyleSheet} from 'react-native';

const ModeSegment = ({
  onValueChange,
}: {
  onValueChange: (
    value: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>,
  ) => void;
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleValueChange = (
    newValue: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>,
  ) => {
    setSelectedIndex(newValue.nativeEvent.selectedSegmentIndex);
    // 부모 컴포넌트로 값 전달
    onValueChange && onValueChange(newValue);
  };

  return (
    <SegmentedControl
      style={styles.container}
      values={['all', 'favorite']}
      selectedIndex={selectedIndex}
      activeFontStyle={{color: 'gold'}}
      onChange={handleValueChange}
      fontStyle={{fontWeight: '900'}}
      tabStyle={{
        borderWidth: 2,
        margin: 1,
        borderRadius: 15,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginHorizontal: 15,
    minHeight: 50,
    borderRadius: 18,
  },
});

export default ModeSegment;
