/**

 get-context.js 
 Copyright 2024 Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/

module.exports = function(RED) {
    function GetContextNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        this.contextType = config.contextType;

        node.on('input', function(msg) {
            // Check if context type is selected correctly
            if (config.contextType === "flow" || config.contextType === "global") {
                // Get context variable
                if (msg.topic) {
                    var context;
                    if (config.contextType === "flow") {
                        context = node.context().flow;
                    } else if (config.contextType === "global") {
                        context = node.context().global;
                    }
                    var value = context.get(msg.topic);
                    // Output the value if found
                    if (value !== undefined) {
                        msg.payload = value;
                        node.send(msg);
                        // Update node status to "ok"
                        node.status({ fill: "green", shape: "dot", text: "Variable retrieved" });
                    } else {
                        node.error("Variable not found in context", msg);
                        node.status({ fill: "red", shape: "ring", text: "Variable not found" });
                    }
                } else {
                    node.error("Missing topic in the message", msg);
                    node.status({ fill: "red", shape: "ring", text: "Missing topic" });
                }
            } else {
                node.error("Invalid context type selected", msg);
                node.status({ fill: "red", shape: "ring", text: "Invalid context type" });
            }
        });
    }
    RED.nodes.registerType("get-context", GetContextNode);
}

