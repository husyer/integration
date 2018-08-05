import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justify ? props.justify : 'center' };
  flex-direction: ${props => props.direction  ? props.direction : 'row' };
  align-items: ${props => props.align  ? props.align : 'stretch ' };
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  padding-top: 20px;
  `
  export default Container;
