import { createAction } from "@reduxjs/toolkit";


export const increaseProgress = createAction('INCREASING_PROGRESS');
export const resetProgress = createAction('END_TURN_BAR');