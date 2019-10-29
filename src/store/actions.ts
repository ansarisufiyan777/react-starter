import {LAOD_DATA, IAppActionTypes} from '../types/actions'

export const loadQuestions = (): IAppActionTypes => ({
	type: LAOD_DATA,
	payload: {},
})
