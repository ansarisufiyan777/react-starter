import {LAOD_QUESTION, IAppActionTypes} from '../types/actions'

export const loadQuestions = (): IAppActionTypes => ({
	type: LAOD_QUESTION,
	payload: {},
})
