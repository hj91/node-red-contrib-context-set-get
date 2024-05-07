/**

 set-context.js 
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
    function SetContextNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        this.contextType = config.contextType;

        node.on('input', function(msg) {
            // Check if context type is selected correctly
            if (config.contextType === "flow" || config.contextType === "global") {
                // Set context variable
                if (msg.topic && msg.payload) {
                    if (config.contextType === "flow") {
                        node.context().flow.set(msg.topic, msg.payload);
                    } else if (config.contextType === "global") {
                        node.context().global.set(msg.topic, msg.payload);
                    }
                    // Update node status
                    node.status({fill:"green",shape:"dot",text:"Variable set"});
                } else {
                    node.error("Missing topic or payload in the message", msg);
                    node.status({fill:"red",shape:"ring",text:"Missing topic or payload"});
                }
            } else {
                node.error("Invalid context type selected", msg);
                node.status({fill:"red",shape:"ring",text:"Invalid context type"});
            }
        });
    }
    RED.nodes.registerType("set-context",SetContextNode);
}

