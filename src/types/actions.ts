export const LAOD_QUESTION = 'LAOD_QUESTION'
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION'

export interface ILaodQuestion {
	type: typeof LAOD_QUESTION
	payload: any
}
export interface ISetQuestion {
	type: typeof SET_CURRENT_QUESTION
	payload: any
}

export type IAppActionTypes = ILaodQuestion | ISetQuestion // add more actions here pipe seperated
