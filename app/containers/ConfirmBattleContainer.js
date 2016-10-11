var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

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
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    
    //previous method returns a promise we can add 
    .then(function (players) {
      this.setState({
        isLoading: false,
        playersInfo: [ players[0], players[1] ]
      
      });
      
      //passing in this to inner function to retain this is same as outer 
    }.bind(this))
  },
  handleInitiateBattle: function () {
    this.context.router.push({
      pathname: '/results',
      
      //router allows pushing state through to this new route
      state: {
        playerInfo: this.state.playersInfo
      }
    });
  },
  render: function () {
    return (
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    );
  }
      
});
    
module.exports = ConfirmBattleContainer;