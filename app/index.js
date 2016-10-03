//var USER_DATA = {
//  name : 'Joe Childress',
//  username: 'joechildress',
//  image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSRSwJMJeSiQPscRcBUIZV6ZptLhUlCgnFUBtJD3S3wSKWlHxChlQ'
//}


var React = require('react');
var ReactDOM = require('react-dom');

var routes= require('./config/routes');


ReactDOM.render(  
  routes,
  document.getElementById('app')
);


//var ProfilePic = React.createClass({
//  render: function () {
//      return (
//        <img src={this.props.imgUrl} style={{ height: 100, width: 100 }} />
//      )
//  }
//});
//
//var ProfileName = React.createClass({
//  render: function () {
//    return (
//      <div>{this.props.name}</div>
//    )
//  }
//});
//
//var Link = React.createClass({
//  changeURL: function () {
//    window.location.replace(this.props.href)
//  },
//  render: function () {
//    return (
//      <span 
//      style={{color: 'blue', cursor : 'pointer'}}
//      onClick={this.changeURL}>
//        {this.props.children}
//      </span>
//    )
//  }
//});
//
//var ProfileLink = React.createClass({
//  render: function () {
//    return (
//      <div>
//        <Link href={'https://www.github.com/' + this.props.username}>
//          {this.props.username}
//        </Link>
//      </div>
//    )
//  }
//});
//
//
//var MyContainer= React.createClass({
//  render: function () {
//    
//    console.log(this.props.user);
//    return(
//      <div>
//        <ProfilePic imgUrl={this.props.user.image} />
//        <ProfileName name={this.props.user.name} />
//        <ProfileLink username={this.props.user.username} />
//      </div>
//    )
//  }
//});

//ReactDOM.render(
//  <MyContainer user={USER_DATA} />,
//  document.getElementById('app')
//);
