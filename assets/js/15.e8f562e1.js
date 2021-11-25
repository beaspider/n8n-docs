(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1073:function(e,t,o){e.exports=o.p+"assets/img/workflow.3ad449c4.png"},1074:function(e,t,o){e.exports=o.p+"assets/img/Matrix_node.7209671a.png"},1075:function(e,t,o){e.exports=o.p+"assets/img/Matrix1_node.780b63e2.png"},1076:function(e,t,o){e.exports=o.p+"assets/img/Matrix2_node.6ca6b63c.png"},1077:function(e,t,o){e.exports=o.p+"assets/img/IF_node.a339c6df.png"},1078:function(e,t,o){e.exports=o.p+"assets/img/Matrix3_node.7928c247.png"},1079:function(e,t,o){e.exports=o.p+"assets/img/Matrix4_node.01ad1442.png"},1080:function(e,t,o){e.exports=o.p+"assets/img/NoOp_node.bfe2918b.png"},1948:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"matrix"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#matrix"}},[e._v("#")]),e._v(" Matrix")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://matrix.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Matrix"),r("OutboundLink")],1),e._v(" is an open standard for interoperable, decentralized, real-time communication over IP.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Matrix/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.matrix"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create a room, invite members from a different room, and send a message to the room that we created using the Matrix node. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/724",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Matrix")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/IF/"}},[e._v("IF")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("No Operation, do nothing")])],1)]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1073),alt:"A workflow with the Matrix node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-matrix-node-create-room"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-matrix-node-create-room"}},[e._v("#")]),e._v(" 2. Matrix node (create: room)")]),e._v(" "),r("p",[e._v("This node will create a new room called "),r("code",[e._v("n8n")]),e._v(" on the Matrix server.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Matrix node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Matrix/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("div",{pre:!0},[r("ol",{pre:!0,attrs:{start:"2"}},[r("li",[e._v("Select 'Room' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter "),r("code",[e._v("n8n")]),e._v(" in the "),r("em",[r("strong",[e._v("Room Name")])]),e._v(" field. You can also enter a different name for the room.")]),e._v(" "),r("li",[e._v("Enter an alias for the room in the "),r("em",[r("strong",[e._v("Room Alias")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node creates a room "),r("code",[e._v("n8n")]),e._v(" with an alias "),r("code",[e._v("#discussion-n8n:matrix.org")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1074),alt:"Using the Matrix node to create a room"}})]),e._v(" "),r("h3",{attrs:{id:"_3-matrix1-node-me-account"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-matrix1-node-me-account"}},[e._v("#")]),e._v(" 3. Matrix1 node (me: account)")]),e._v(" "),r("p",[e._v("This node will get your account information from the Matrix server. We are doing this because Matrix will send an invite to all members of the room, including you. Since you are already a member of the room, you will get an error. We will use the data from this node later on to make sure that you don't send an invite to yourself.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Account' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node returns your user ID.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1075),alt:"Using the Matrix node to get your account information"}})]),e._v(" "),r("h3",{attrs:{id:"_3-matrix2-node-getall-roommember"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-matrix2-node-getall-roommember"}},[e._v("#")]),e._v(" 3. Matrix2 node (getAll: roomMember)")]),e._v(" "),r("p",[e._v("This node will return the information of all the members in a room.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Room Member' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select a room from the "),r("em",[r("strong",[e._v("Room ID")])]),e._v(" dropdown list. We will invite the members of this room later on in the workflow.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node returns the information of all the members in the room that we specified. The output of this node will be passed on to the next nodes in the workflow.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1076),alt:"Using the Matrix node to get the information of the members in a room"}})]),e._v(" "),r("h3",{attrs:{id:"_4-if-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-if-node"}},[e._v("#")]),e._v(" 4. IF node")]),e._v(" "),r("p",[e._v("This node will compare your user ID with the user ID of other members. If the user IDs are not equal, the output will be true.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Condition")])]),e._v(" and select 'String'.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Value 1")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Matrix1 > Output Data > JSON > user_id. You can also add the following expression: "),r("code",[e._v('{{$node["Matrix1"].json["user_id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Select 'Not Equal' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Value 2")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Matrix2 > Output Data > JSON > user_id. You can also add the following expression: "),r("code",[e._v('{{$node["Matrix2"].json["user_id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node returns the information of all the members of the room except your own.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1077),alt:"Using the IF node to compare your user id with the user id of the members in a room"}})]),e._v(" "),r("h3",{attrs:{id:"_4-matrix3-node-invite-room"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-matrix3-node-invite-room"}},[e._v("#")]),e._v(" 4. Matrix3 node (invite: room)")]),e._v(" "),r("p",[e._v("This node will send an invitation to the members returned by the previous node to join the room that we created using the Matrix node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Connect the node to the 'true' output of the IF node")]),e._v(" "),r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Room' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Invite' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Room ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Matrix > Output Data > JSON > room_id. You can also add the following expression: "),r("code",[e._v('{{$node["Matrix"].json["room_id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("User ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > IF > Output Data > JSON > user_id. You can also add the following expression: "),r("code",[e._v('{{$node["IF"].json["user_id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node sends an invite to join the "),r("code",[e._v("n8n")]),e._v(" room to the members of the other room.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1078),alt:"Using the Matrix node to send an invite to join the room"}})]),e._v(" "),r("h3",{attrs:{id:"_5-matrix4-node-create-message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-matrix4-node-create-message"}},[e._v("#")]),e._v(" 5. Matrix4 node (create: message)")]),e._v(" "),r("p",[e._v("This node will send a message to the new room that we created using the Matrix node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Room ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Matrix > Output Data > JSON > room_id. You can also add the following expression: "),r("code",[e._v('{{$node["Matrix"].json["room_id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Enter a message in the "),r("em",[r("strong",[e._v("Text")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node sends a message to the room that we created with the Matrix node.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1079),alt:"Using the Matrix node to send a message to the room we created"}})]),e._v(" "),r("h3",{attrs:{id:"_6-noop-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-noop-node"}},[e._v("#")]),e._v(" 6. NoOp node")]),e._v(" "),r("p",[e._v("Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow. We've added this as it can sometimes help others with a better understanding of the workflow, visually.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Create a "),r("em",[r("strong",[e._v("NoOp")])]),e._v(" node connected to the 'false' output of the IF node.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[r("img",{attrs:{src:o(1080),alt:"Using the NoOp node"}})]),e._v(" "),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),r("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=n.exports}}]);