(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1873:function(e,t,o){"use strict";o.r(t);var r=o(26),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"convertkit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#convertkit"}},[e._v("#")]),e._v(" ConvertKit")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.convertkit.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ConvertKit"),r("OutboundLink")],1),e._v(" is a fully-featured email marketing platform. ConvertKit can be used to build an email list, send email broadcasts, automate sequences, create segments, and build landing pages.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/ConvertKit/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"basic-operations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),r("Resource",{attrs:{node:"n8n-nodes-base.convertKit"}}),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to add a subscriber to a form, create a tag and add the subscriber to the tag using the ConvertKit node. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/642",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),r("li",[r("a",{attrs:{href:""}},[e._v("ConvertKit")])])]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(858),alt:"A workflow with the ConvertKit node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),r("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),r("h3",{attrs:{id:"_2-convertkit-node-addsubscriber-form"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-convertkit-node-addsubscriber-form"}},[e._v("#")]),e._v(" 2. ConvertKit node (addSubscriber: form)")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the ConvertKit node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/ConvertKit/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Select the form from the "),r("em",[r("strong",[e._v("Form ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the email address in the "),r("em",[r("strong",[e._v("Email")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(859),alt:"Using the ConvertKit node to add a subscriber to a form"}})]),e._v(" "),r("div",{pre:!0},[r("h3",{pre:!0,attrs:{id:"_3-convertkit1-node-create-tag"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-convertkit1-node-create-tag"}},[e._v("#")]),e._v(" 3. ConvertKit1 node (create: tag)")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the previous ConvertKit node.")]),e._v(" "),r("li",[e._v("Select 'Tag' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Enter the tag name in the "),r("em",[r("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[r("img",{attrs:{src:o(860),alt:"Using the ConvertKit node to create a tag"}})]),e._v(" "),r("div",{pre:!0},[r("h3",{pre:!0,attrs:{id:"_4-convertkit2-node-add-tagsubscriber"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-convertkit2-node-add-tagsubscriber"}},[e._v("#")]),e._v(" 4. ConvertKit2 node (add: tagSubscriber)")]),e._v(" "),r("ol",[r("li",[e._v("Select the credentials that you entered in the previous ConvertKit node.")]),e._v(" "),r("li",[e._v("Select 'Tag Subscriber' from the "),r("em",[r("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select 'Add' from the "),r("em",[r("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Select the tag from the "),r("em",[r("strong",[e._v("Tag ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Email")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Select the following in the "),r("em",[r("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > ConvertKit > Output Data > JSON > subscriber > email_address. You can also add the following expression: "),r("code",[e._v('{{$node["ConvertKit"].json["subscriber"]["email_address"]}}')]),e._v(".")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[r("img",{attrs:{src:o(861),alt:"Using the ConvertKit node to add the subscriber to the tag"}})])],1)}),[],!1,null,null,null);t.default=n.exports},858:function(e,t,o){e.exports=o.p+"assets/img/workflow.1dcc8624.png"},859:function(e,t,o){e.exports=o.p+"assets/img/ConvertKit_node.999c03da.png"},860:function(e,t,o){e.exports=o.p+"assets/img/ConvertKit1_node.195fc5bc.png"},861:function(e,t,o){e.exports=o.p+"assets/img/ConvertKit2_node.9bf6beda.png"}}]);