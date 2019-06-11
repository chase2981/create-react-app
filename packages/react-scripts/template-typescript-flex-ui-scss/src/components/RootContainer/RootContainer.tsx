import { connect } from 'react-redux'
// import { connect } from '@twilio/flex-ui';
import { addLeadCard, updateLeadCard, updateComment } from '../../actions'
import { RootContainerComponent } from './RootContainerComponent'

const mapStateToProps = (state, ownProps) => {
    if (!state || !state.flex)
        return {};
    return {
        session: state.flex.session,
        worker: state.flex.worker,
    }
}

const mapDispatchToProps = {
    updateLeadCard: updateLeadCard,
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootContainerComponent)