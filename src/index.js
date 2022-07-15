import React from "react";
import ReactDOM from "react-dom";
import ChatWidget from "./components/chat";

let init = null;

export default {
  config: (config) => {
    init = config;
  },
  widgets: {
    myWidget: {
      new: () => {
        return {
          render: () => {
            ReactDOM.render(
              <ChatWidget
                clientKey={init.clientKey}
                headerTitle={init.headerTitle}
                selector={"#chat-app"}
              />,
              document.querySelector("#chat-app")
            );
          },
          unmount() {
            ReactDOM.unmountComponentAtNode(
              document.querySelector("#chat-app")
            );
          },
        };
      },
    },
  },
};
