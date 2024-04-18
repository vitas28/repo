import React from "react";
import data from "../data.json";
import { Folder } from "./Folder";
import { File } from "./File";

export class Browser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      data,
      expandedFolders: this.props.expandedFolders || [],
    };
  }

  isExpanded = (path) => {
    return this.state.expandedFolders.includes(path);
  };

  // doesn't work
  filterData = (data, query) => {
    if (!query) return data;

    return data
      .filter((item) => {
        if (item.type === "FILE") {
          return item.name.toLowerCase().includes(query.toLowerCase());
        }
        if (item.type === "FOLDER") {
          item.children = this.filterData(item.children, query);
          return item.children.length > 0;
        }
        return false;
      })
      .map((item) => {
        if (item.type === "FOLDER" && item.children) {
          return { ...item, children: this.filterData(item.children, query) };
        }
        return item;
      });
  };

  updateSearchQuery = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { searchQuery, data } = this.state;
    const filteredData = searchQuery
      ? this.filterData(data, searchQuery)
      : data;

    return (
      <div>
        {/* SEACH FUNCTIONALITY IS NOT FINISHED */}
        {/* <input
            type="text"
            value={searchQuery}
            onChange={this.updateSearchQuery}
          /> */}
        <div>
          {filteredData.map((item, index) =>
            item.type === "FOLDER" ? (
              <Folder
                key={item.name + index}
                name={item.name}
                children={item.children}
                isExpanded={this.isExpanded(item.name)}
              />
            ) : (
              <File
                key={item.name + index}
                name={item.name}
                mimeType={item.mime}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

// Usage example:
// <MyBrowser expandedFolders={['/Path', '/Path/1st', '/Path/2nd']} />
