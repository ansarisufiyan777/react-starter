import React from 'react'
import {connect} from 'react-redux'
import {loadQuestions} from '../store/actions'
import '../styles/Chat.scss'
type IProps = {
	questions: []
	currentQuestion: {}
	answeredQuestions: []
}

type IState = {}

class Chat extends React.Component<IProps, IState> {
	componentDidMount() {}
	render() {
		const {questions, currentQuestion, answeredQuestions} = this.props
		return (
			<div className="chat">
				Length: {questions && questions.length}
				Current Question: {JSON.stringify(currentQuestion)}
				Answered Question: {answeredQuestions && answeredQuestions.length}
			</div>
		)
	}
}

const mapStateToProps = (state: any, ownProps) => {
	return {
		questions: state.state.collect.questions,
		currentQuestion: state.state.collect.currentQuestion,
		answeredQuestions: state.state.collect.answeredQuestions,
		ownProps,
	}
}

const mapDispatchToProps = {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat)
