import React, { Component } from 'react';
import HomeContainer from '../../components/HomepageContainer';
import '../../components/Menu/index.css';
import Menu from '../../components/menu';

class Home extends Component {
  static async getInitialProps(ctx) {
    return { name: 'pmm' };
  }
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (<HomeContainer>
      <Menu />
      <h1>Home</h1>
    </HomeContainer>);
  }
}
 
export default Home;