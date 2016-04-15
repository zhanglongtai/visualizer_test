import React            from 'react';
import VtkRenderer      from 'paraviewweb/src/React/Renderers/VtkRenderer';
import ControlPanel     from './ControlPanel';

export default React.createClass({
  displayName: 'ParaViewWeb/Visualizer',

  propTypes: {
    proxyManager: React.PropTypes.object,
  },

  componentDidMount() {
    this.props.proxyManager.setImageProvider(this.refs.renderer.binaryImageStream);
  },

  render() {
    const { proxyManager } = this.props;

    return (
      <div className="container">
        <ControlPanel className="fileloader" proxyManager={ proxyManager } />
        <VtkRenderer ref="renderer" { ...proxyManager.getNetworkAdapter() } className="viewport" />
      </div>
    );
  },
});
