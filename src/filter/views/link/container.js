import { connect } from 'react-redux';
import { setFilter } from '../../actions';
import Link from './Link';

//  ownProps 本身由上级组件传递过来的props
const mapStateToProps = (state, ownProps) =>( {
  active: state.filter === ownProps.filter
}) 

//  ownProps 本身由上级组件传递过来的props
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: ()=>{
    dispatch(setFilter(ownProps.filter))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Link);