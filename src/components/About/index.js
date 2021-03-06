import React, { Component } from 'react'
import PropTypes from 'prop-types'

class About extends Component {
  render() {
    return (
      <div>
        <strong>Client</strong>
        <p>Version: <a target="_blank" href={`https://github.com/seripap/darkwire-client/releases/tag/${process.env.VERSION}`}>{process.env.VERSION}</a><br />
        Commit SHA: <a target="_blank" href={`https://github.com/seripap/darkwire-client/commit/${process.env.COMMIT_SHA}`}>{process.env.COMMIT_SHA}</a></p>
        <strong>Server</strong>
        <p>Version: <a target="_blank" href={`https://github.com/seripap/darkwire-server/releases/tag/${this.props.serverVersion}`}>{this.props.serverVersion}</a><br />
        Commit SHA: <a target="_blank" href={`https://github.com/seripap/darkwire-server/commit/${this.props.serverSHA}`}>{this.props.serverSHA}</a></p>
        <br />
        <p>This software uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto" target="_blank" rel="noopener noreferrer">Web Cryptography API</a> to
        encrypt data which is transferred using <a href="https://en.wikipedia.org/wiki/WebSocket" target="_blank" rel="noopener noreferrer">secure WebSockets</a>.
          Messages are never stored on a server or sent over the wire in plain-text.</p>
        <p>We believe in privacy and transparency.
        &nbsp;<a href="https://github.com/seripap/darkwire.io" target="_blank" rel="noopener noreferrer">View the source code and documentation on GitHub.</a></p>

        <p className="bold">WARNING: Darkwire does not mask IP addresses nor can verify the integrity of parties recieving messages.
        &nbsp;Proceed with caution and always confirm recipients before starting a chat session.</p>
        <p>Please also note that <strong>ALL CHATROOMS</strong> are public.
        &nbsp;Anyone can guess your room URL. If you need a more-private room, use the lock feature or set the URL manually by entering a room ID after &quot;darkwire.io/&quot;.
        </p>
        <p>Questions/comments? Email us at hello[at]darkwire.io</p>
        <p>Found a bug or want a new feature? <a href="https://github.com/seripap/darkwire.io/issues" target="_blank" rel="noopener noreferrer">Open a ticket on Github</a>.</p>
        <br />
        <h4>Donate</h4>
        <br />
        <p>Darkwire is maintained and hosted by two developers with full-time jobs. If you get some value
        from this service we would appreciate any donation you can afford. We use these funds for
        server and DNS costs. Thank you!
        </p>
        <strong>Bitcoin</strong>
        <p>189sPnHGcjP5uteg2UuNgcJ5eoaRAP4Bw4</p>
        <strong>Ethereum</strong>
        <p>0xD6e3D881036903999E2c0480fe9d2c20600C1c28</p>
        <strong>Litecoin</strong>
        <p>LUViQeSggBBtYoN2qNtXSuxYoRMzRY8CSX</p>
        <strong>PayPal:</strong>
        <br />
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="UAH5BCLA9Y8VW" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    )
  }
}

About.propTypes = {
  serverVersion: PropTypes.string.isRequired,
  serverSHA: PropTypes.string.isRequired,
}

export default About
