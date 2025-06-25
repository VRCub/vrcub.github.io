import React, { PureComponent } from "react";
import { init } from "@waline/client";

import "@waline/client/waline.css";

export default class Comment extends PureComponent {
  constructor(props) {
    super(props);
    this._commentRef = React.createRef();
  }

  async componentDidMount() {
    if (typeof window === "undefined") {
      return;
    }
    if (!this._commentRef.current) {
      return;
    }

    this.Waline = init({
      el: this._commentRef.current,
      serverURL: "https://pl.ncols.cn",
      visitor: true,
      path: this.props.id,
      dark: 'html[data-theme="dark"]',
    });
  }

  render() {
    return <div className="comment-area" ref={this._commentRef} />;
  }
}