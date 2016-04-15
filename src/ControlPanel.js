import React from 'react';

export default React.createClass({
  displayName: 'ParaViewWeb/ControlPanel',

  propTypes: {
    proxyManager: React.PropTypes.object,
  },

  componentWillMount() {
    this.getFile();
  },

  getFile() {
    var path = '/home/tiger/Projects/ParaViewWeb/visualizer_test/static/can.ex2';
    this.props.proxyManager.open(path);
  },

  render() {
    return (
      <div className="aaa"></div>
    );
  },
});
