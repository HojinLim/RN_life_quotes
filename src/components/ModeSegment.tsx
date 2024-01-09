import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {SegmentedButtons, Text} from 'react-native-paper';

const ModeSegment = ({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) => {
  const [value, setValue] = React.useState('all');

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    // 부모 컴포넌트로 값 전달
    onValueChange && onValueChange(newValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={handleValueChange}
        buttons={[
          {
            icon: 'alpha-a',
            value: 'all', // '전체' 대신 다른 값을 지정
            label: 'All',
            checkedColor: 'gold',
            uncheckedColor: 'black',
            disabled: false,

            style: {backgroundColor: 'white'},
          },
          {
            icon: 'star',
            value: 'favorite', // '전체' 대신 다른 값을 지정
            label: 'favorite',
            checkedColor: 'gold',
            uncheckedColor: 'black',
            style: {backgroundColor: 'white'},
          },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginHorizontal: 15,
  },
});

export default ModeSegment;
