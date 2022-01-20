import React, {forwardRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {s} from 'react-native-size-matters';

import styles from './styles';

interface Props {
  ref: React.Ref<RBSheet>;
  children: React.ReactChild;
  height?: number;
  onClose?: (arg: boolean) => void;
}

const BottomSheet = forwardRef<Props>(
  ({children, height = 600, onClose}, ref) => {
    return (
      <RBSheet
        height={s(height)}
        openDuration={100}
        ref={ref}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{...styles}}
        animationType="slide"
        onClose={onClose}>
        {children}
      </RBSheet>
    );
  },
);

export default BottomSheet;
