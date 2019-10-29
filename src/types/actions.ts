export const LAOD_DATA = 'LAOD_QUESTION'
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION'

export interface ILaodQuestion {
	type: typeof LAOD_DATA
	payload: any
}
export type IAppActionTypes = ILaodQuestion  // add more actions here pipe seperated
