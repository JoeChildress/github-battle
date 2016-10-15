var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  
  //allows for access to router info without it being passed down
  contextTypes: {
    router: React.PropTypes.object.isRequired
  }, 
  getInitialState: function () {
    return { 
      username: ''
    }
  },
  handleUpdateUser: function (e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    
    //caches username when button pressed
    var username = this.state.username; 
    
    //clears the username
    this.setState({
      username: ''
    });
    
    //if route has playerName param go to battle
    if (this.props.routeParams.playerOne) {
      
      //go to /battle with queries passed in 
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne, //passed in url
          playerTwo: this.state.username  //from current state
        }
      })
    } else {
      // got to /playerTwo with added playerName
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function () {
    return (
      <Prompt 
        onSubmitUser = {this.handleSubmitUser}
        onUpdateUser = {this.handleUpdateUser}
        header = {this.props.route.header}
        username = {this.state.username}
      />
    )
  }
});

module.exports = PromptContainer;