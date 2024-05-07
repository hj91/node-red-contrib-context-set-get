# node-red-contrib-context-set-get

This Node-RED module provides nodes for setting and getting context variables within your Node-RED flows using `msg.payload` as variable value and `msg.topic` as variable name. For getting values of already set variable, only `msg.topic` is required.

## Description

Node-RED offers powerful capabilities for data processing and flow control. Context variables serve as a means to store and access data across multiple nodes within a flow. The `set-context` node allows you to set context variables based on incoming messages, while the `get-context` node retrieves context variables based on specified topics.

## Installation

You can install this Node-RED module using the Node-RED Palette Manager, or by manually copying the module files to the appropriate directory.

## Usage

### Set Context Node (`set-context`)

The `set-context` node sets context variables based on incoming messages. It provides the option to specify whether the context variable should be stored in the flow or global context. This node is useful for dynamically updating context variables based on the data received by your flow.

### Get Context Node (`get-context`)

The `get-context` node retrieves context variables based on specified topics. It allows you to access context variables stored in either the flow or global context. This node is helpful for fetching context variables and using them within your flow for decision-making or data processing.

## Working

### Set Context Node:

1. **Receiving Messages**: Listens for incoming messages.
2. **Extracting Data**: Parses the incoming message to extract the variable name and value from `msg.topic` and `msg.payload` respectively.
3. **Setting Context Variable**: Sets the context variable based on the extracted variable name and value.
4. **Context Type**: Allows the user to specify whether the context variable should be stored in the flow or global context.
5. **Status Update**: Updates the node status to indicate whether the variable is successfully set or if there are any errors.

### Get Context Node:

1. **Receiving Requests**: Listens for incoming messages containing the variable name to retrieve.
2. **Retrieving Context Variable**: Retrieves the context variable based on the specified variable name.
3. **Context Type**: Allows the user to specify whether the context variable is stored in the flow or global context.
4. **Output**: Sends the retrieved context variable as `msg.payload` to the next node in the flow.
5. **Status Update**: Updates the node status to indicate whether the variable is successfully retrieved or if there are any errors.

These operations allow users to dynamically set and retrieve context variables within their Node-RED flows, enabling flexible data processing and flow control.

## Potential Use Cases

- **State Management**: Maintain the state of your application or workflow using context variables.
- **Dynamic Configuration**: Update configurations dynamically based on incoming data.
- **Data Aggregation**: Aggregate data from multiple sources and store it in context variables for further processing.
- **Decision Making**: Use context variables to make decisions within your flow based on the current state or conditions.

## How it Differs from Change Node and Functions

The `node-red-contrib-context-set-get` nodes offer distinct advantages over the built-in Change node and Function node:

- **Ease of Use**: Simplifies the process of setting and getting context variables without requiring JavaScript code.
- **Visibility**: Provides a clear visual representation of context variable operations within the Node-RED flow editor.
- **Context Management**: Specifically designed for managing context variables, offering dedicated nodes for setting and getting variable values.

## License

This module is licensed under the GNU General Public License, Version 3.0. See the [LICENSE](LICENSE) file for details.

## Author

- **Harshad Joshi**
- GitHub: [hj91](https://github.com/hj91)

