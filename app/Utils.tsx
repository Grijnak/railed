import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export default function useMemoizedSelector(
  selector: (state: RootState) => any,
) {
  return useSelector(useMemo(() => selector, [selector]));
}
