(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1135:function(e,t,o){e.exports=o.p+"assets/img/workflow.b8a18472.png"},1136:function(e,t,o){e.exports=o.p+"assets/img/Orbit_node.9bd761f3.png"},1137:function(e,t,o){e.exports=o.p+"assets/img/Orbit1_node.a0f8c5d2.png"},1138:function(e,t,o){e.exports=o.p+"assets/img/Orbit2_node.fd707214.png"},1139:function(e,t,o){e.exports=o.p+"assets/img/Orbit3_node.1e0d8593.png"},1977:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"orbit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#orbit"}},[e._v("#")]),e._v(" Orbit")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://orbit.love",target:"_blank",rel:"noopener noreferrer"}},[e._v("Orbit"),r("OutboundLink")],1),e._v(" is a platform for managing and growing communities.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Orbit/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.orbit"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to create a new member and update their information in Orbit using the Orbit node. It also allows you to create a note and a post for the new member in Orbit. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/765",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("Orbit")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1135),alt:"A workflow with the Orbit node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-orbit-node-upsert-member"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-orbit-node-upsert-member"}},[e._v("#")]),e._v(" 2. Orbit node (upsert: member)")]),e._v(" "),r("p",[e._v("This node will create a new member in a workspace in Orbit. We will use the GitHub identity to create a new member.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Orbit node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Orbit/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select 'Upsert' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select the workspace where you want to create a new member from the "),r("em",[r("strong",[e._v("Workspace")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Identity")])]),e._v(" button.")]),e._v(" "),r("li",[e._v("Select 'GitHub' from the "),r("em",[r("strong",[e._v("Source")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Username' from the "),r("em",[r("strong",[e._v("Search By")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the GitHub username of the member in the "),r("em",[r("strong",[e._v("Username")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node creates a new member in a workspace in Orbit using the GitHub identity.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1136),alt:"Using the Orbit node to create a new member in a workspace in Orbit"}})]),e._v(" "),r("h3",{attrs:{id:"_3-orbit1-node-update-member"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-orbit1-node-update-member"}},[e._v("#")]),e._v(" 3. Orbit1 node (update: member)")]),e._v(" "),r("p",[e._v("This node will update the tags of the member that we created in the previous node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Update' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Workspace")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Orbit > Parameters > workspaceId. You can also add the following expression: "),r("code",[e._v('{{$node["Orbit"].parameter["workspaceId"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Member ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Orbit > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["Orbit"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the "),r("em",[r("strong",[e._v("Add Field")])]),e._v(" button and select 'Tags to Add'.")]),e._v(" "),r("li",[e._v("Enter the tags in the "),r("em",[r("strong",[e._v("Tags to Add")])]),e._v(" field. You can add multiple tags by separating them with a comma.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node updates the information of the new member that we created in the previous node. The node adds the tags "),r("code",[e._v("n8nConf")]),e._v(" and "),r("code",[e._v("MLH")]),e._v(" to the new member.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1137),alt:"Using the Orbit node to add tags to a member"}})]),e._v(" "),r("h3",{attrs:{id:"_4-orbit2-node-create-note"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-orbit2-node-create-note"}},[e._v("#")]),e._v(" 4. Orbit2 node (create: note)")]),e._v(" "),r("p",[e._v("This node will create a note for the member that we created using the Orbit node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Note' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Workspace")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Orbit > Parameters > workspaceId. You can also add the following expression: "),r("code",[e._v('{{$node["Orbit"].parameter["workspaceId"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Member ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Orbit > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["Orbit"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Enter a note in the "),r("em",[r("strong",[e._v("Note")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node creates a note for the member that we created using the Orbit node.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1138),alt:"Using the Orbit node to create a note for a member"}})]),e._v(" "),r("h3",{attrs:{id:"_5-orbit3-node-create-post"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-orbit3-node-create-post"}},[e._v("#")]),e._v(" 5. Orbit3 node (create: post)")]),e._v(" "),r("p",[e._v("This node will create a post for the member that we created using the Orbit node.")]),e._v(" "),r("div",{pre:!0},[r("ol",[r("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),r("li",[e._v("Select 'Post' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Workspace")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Orbit > Parameters > workspaceId. You can also add the following expression: "),r("code",[e._v('{{$node["Orbit"].parameter["workspaceId"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Member ID")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Orbit > Output Data > JSON > id. You can also add the following expression: "),r("code",[e._v('{{$node["Orbit"].json["id"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Enter a URL for the post in the "),r("em",[r("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node creates a post for the member that we created using the Orbit node.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1139),alt:"Using the Orbit node to create a post for a member"}})]),e._v(" "),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),r("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=n.exports}}]);