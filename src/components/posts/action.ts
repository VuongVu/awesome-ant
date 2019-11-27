import { createAction } from '@reduxjs/toolkit';

import * as constants from './constant';

export const loadPosts = createAction(constants.LOAD_POSTS);
