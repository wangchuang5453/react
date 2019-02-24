import React, { Component } from "react";
import PublicHeader from '../../components/header/header';
import './home.less';
class Home extends Component {
  render() {
    return (
      <main className="home-container">
        <PublicHeader title='首页' record/>
        <div>content</div>
      </main>
    );
  }
}
export default Home;
