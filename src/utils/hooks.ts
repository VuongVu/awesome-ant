import { useSelector, shallowEqual, TypedUseSelectorHook } from 'react-redux';

import { AppState } from 'types/redux-state';

export const useReduxSelector: TypedUseSelectorHook<AppState> = (selector: any) =>
    useSelector(selector, shallowEqual);
