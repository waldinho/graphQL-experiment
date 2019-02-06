import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          <b>{this.props.link.description}</b> - {this.props.link.url}
        </div>
      </div>
    )
  }
}

export default Link