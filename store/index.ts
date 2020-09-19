import { combineReducers } from "redux";
import { currentCityReducer } from './currentCity/reducers'

export const rootReducer = combineReducers({
  currentCity: currentCityReducer
})

export type RootState = ReturnType<typeof rootReducer>
