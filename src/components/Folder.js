import React from "react";
import { File } from "./File";

export class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props?.expandedFolders?.includes(this.props.path),
    };
  }

  toggle = () => {
    this.setState((prevState) => ({ expanded: !prevState.expanded }));
  };

  render() {
    const { name, children, path, expandedFolders } = this.props;
    const { expanded } = this.state;
    return (
      <div>
        <div onClick={this.toggle}>
          {name} {expanded ? "-" : "+"}
        </div>
        {expanded && (
          <div style={{ marginLeft: "20px" }}>
            {children.map((child) =>
              child.type === "FOLDER" ? (
                <Folder
                  key={child.name}
                  name={child.name}
                  children={child.children}
                  path={`${path}/${child.name}`}
                  expandedFolders={expandedFolders}
                />
              ) : (
                <File
                  key={child.name}
                  name={child.name}
                  mimeType={child.mime}
                />
              )
            )}
          </div>
        )}
      </div>
    );
  }
}
