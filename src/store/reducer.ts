import {
	LAOD_QUESTION,
	IAppActionTypes,
	SET_CURRENT_QUESTION,
} from '../types/actions'
const initialState = {
	collect: {},
	questions: [],
	currentQuestion: {},
	answeredQuestions: [],
}

export const reducer = (
	state = initialState,
	{type, payload}: IAppActionTypes
) => {
	switch (type) {
		case LAOD_QUESTION:
			return {...state, loading: true}
		case LAOD_QUESTION + '_RECEIVED':
			return {...state, collect: payload.collect, loading: false}
		case SET_CURRENT_QUESTION:
			return {...state, currentQuestion: payload}
		default:
			return state
	}
}
