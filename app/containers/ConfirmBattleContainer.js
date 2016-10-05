var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading : true,
      playersInfo: []
    }
  },
  componentDidMount: function () {
    
    //get query values
    var query = this.props.location.query;
    
    //fetch player info from github and update state
  },
  render: function () {
    return (
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        playerInfo={this.state.playersInfo} />
    );
  }
      
});
    
module.exports = ConfirmBattleContainer;