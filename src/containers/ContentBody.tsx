import React from 'react'
import {connect} from 'react-redux'
import '../styles/ContentBody.scss'
type IProps = {
	body: ''
}

type IState = {}

class ConentBody extends React.Component<IProps, IState> {
	componentDidMount() {}
	render() {
		const {body} = this.props
		return <div className="content-body">{body}</div>
	}
}

const mapStateToProps = (state: any, ownProps) => {
	return {
		body: state.state.data.body,
		ownProps,
	}
}

const mapDispatchToProps = {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConentBody)
