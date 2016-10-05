var React = require('react');

function ConfirmBattle (props) {
  
  //conditional
  return props.isLoading === true
  ? <p> Loading! </p>
  : <p> Confirm Battle! </p>
}

module.exports = ConfirmBattle;