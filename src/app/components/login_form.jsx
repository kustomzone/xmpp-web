let React   = require('react');
let Reflux  = require('reflux');
let mui     = require('material-ui');
let Actions = require('../actions');

let TextField    = mui.TextField;
let RaisedButton = mui.RaisedButton;

let LoginForm = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  getInitialState () {
    return {
      jid:      '',
      password: '',
      error:    '',
    };
  },

  handleKeyUp (e) {
    if (e.keyCode === 13) {
      this._submit();
    }
  },

  handleClick () {
    this._submit();
  },

  _submit () {
    if (this.state.jid.length === 0) {
      this.setState({ error: 'A Jabber ID is required' });
      return;
    }

    Actions.login(this.state.jid, this.state.password);
  },

  handleJidChange (e) {
    this.setState({
      jid:   e.target.value,
      error: '',
    });
  },

  handlePasswordChange (e) {
    this.setState({
      password: e.target.value,
    });
  },

  render () {
    return (
      <div className="login-form" onKeyUp={this.handleKeyUp}>
        <p className="info-text">You can login to XMPP Web with an account on any XMPP server. <a href="https://xmpp.net/directory.php" target="_blank">Choose to your heart's content from the IM&nbsp;Observatory!</a></p>

        <div className="input-group">
          <TextField fullWidth={true} hintText="Jabber ID" value={this.state.jid} onChange={this.handleJidChange} errorText={this.state.error} />
        </div>

        <div className="input-group">
          <TextField fullWidth={true} hintText="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </div>

        <div className="form-actions">
          <RaisedButton label="Login" primary={true} onClick={this.handleClick} />
        </div>
      </div>
    );
  },

});

module.exports = LoginForm;
