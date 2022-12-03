import PropTypes from 'prop-types'
const MyComponent = props => {
    return <div>나의 새롭고 멋진 {props.name}컴포넌트</div>;
};
MyComponent.defaultProps ={
    name:'기본 이름'
}
MyComponent.propTypes ={
    name:PropTypes.number
}
export default MyComponent;