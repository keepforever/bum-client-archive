import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import ME_QUERY from '../graphql/query/ME_QUERY'

class Home extends Component {

  render () {
    console.log('\n', `${__dirname}`, '\n', '\n', this.props )
    return (
        <h1>Hello Home</h1>
    );
  }
}

export default graphql(ME_QUERY)(Home)
