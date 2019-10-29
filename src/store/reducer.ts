import {
	LAOD_DATA,
	IAppActionTypes
} from '../types/actions'
const initialState = {
	data: {},
}

export const reducer = (
	state = initialState,
	{ type, payload }: IAppActionTypes
) => {
	switch (type) {
		case LAOD_DATA:
			return { ...state, loading: true }
		case LAOD_DATA + '_RECEIVED':
			return { ...state, data: payload, loading: false }
		default:
			return state
	}
}
