import React from 'react'
import {connect} from 'react-redux'
import {loadQuestions} from '../store/actions'
import '../styles/Main.scss'
import ConentBody from './ContentBody'

type IProps = {
	loadQuestions: () => void
	body: ''
	footer: ''
	header: ''
}

type IState = {}

class Main extends React.Component<IProps, IState> {
	componentDidMount() {
		this.props.loadQuestions()
	}
	render() {
		const {header, footer} = this.props
		return (
			<div className="main">
				<div className="header">{header}</div>
				<ConentBody></ConentBody>
				<div className="footer">{footer}</div>
			</div>
		)
	}
}

const mapStateToProps = (state: any, ownProps) => {
	return {
		body: state.state.data.body,
		footer: state.state.data.footer,
		header: state.state.data.header,
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
