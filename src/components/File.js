import React from "react";

export class File extends React.Component {
  render() {
    const { name, mimeType } = this.props;
    return (
      <div>
        {name} ({mimeType})
      </div>
    );
  }
}
