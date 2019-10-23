import React from 'react'
import {connect} from 'react-redux'
import {loadQuestions} from '../store/actions'
import '../styles/Main.scss'
import Chat from './Chat'

type IProps = {
	loadQuestions: () => void
	name: ''
}

type IState = {}

class Main extends React.Component<IProps, IState> {
	componentDidMount() {
		this.props.loadQuestions()
	}
	render() {
		const {name} = this.props

		console.log('Hello questions', name)
		return (
			<div className="main">
				<div className="header">{name}</div>
				<Chat></Chat>
				<div className="footer">
					<input type="text" />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state: any, ownProps) => {
	return {
		name: state.state.collect.name,
		ownProps,
	}
}

const mapDispatchToProps = {
	loadQuestions,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main)
