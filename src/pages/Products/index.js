import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Products extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    console.tron.log('hey');
    return (
      <View>
        <Text> prop </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
