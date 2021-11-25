(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{1797:function(o,e,t){"use strict";t.r(e);var r=t(26),a=Object(r.a)({},(function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[r("h1",{attrs:{id:"execute-workflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#execute-workflow"}},[o._v("#")]),o._v(" Execute Workflow")]),o._v(" "),r("p",[o._v("The Execute Workflow node is used to run a different workflow on the host machine that runs n8n.")]),o._v(" "),r("h2",{attrs:{id:"node-reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[o._v("#")]),o._v(" Node Reference")]),o._v(" "),r("p",[o._v("The Execute Workflow node has two properties:")]),o._v(" "),r("ul",[r("li",[r("em",[r("strong",[o._v("Source")])]),o._v(": This field is used to specify from where to get the workflow's information.\n"),r("ul",[r("li",[o._v("Database")]),o._v(" "),r("li",[o._v("Local File")]),o._v(" "),r("li",[o._v("Parameter")]),o._v(" "),r("li",[o._v("URL")])])]),o._v(" "),r("li",[r("em",[r("strong",[o._v("Workflow")])]),o._v(": This field contains information about the workflow, such as the workflow ID, URL, or a file.")])]),o._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[o._v("#")]),o._v(" Example Usage")]),o._v(" "),r("p",[o._v("This workflow allows you to execute another workflow on the host machine using the Execute Workflow node. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/588",target:"_blank",rel:"noopener noreferrer"}},[o._v("workflow"),r("OutboundLink")],1),o._v(" on n8n.io. This example usage workflow would use the following nodes.")]),o._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[o._v("Start")])],1),o._v(" "),r("li",[r("a",{attrs:{href:""}},[o._v("Execute Workflow")])])]),o._v(" "),r("p",[o._v("The final workflow should look like the following image.")]),o._v(" "),r("p",[r("img",{attrs:{src:t(663),alt:"A workflow with the Execute Workflow node"}})]),o._v(" "),r("h3",{attrs:{id:"_1-start-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[o._v("#")]),o._v(" 1. Start node")]),o._v(" "),r("p",[o._v("The start node exists by default when you create a new workflow.")]),o._v(" "),r("h3",{attrs:{id:"_2-execute-workflow-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-execute-workflow-node"}},[o._v("#")]),o._v(" 2. Execute Workflow node")]),o._v(" "),r("ol",[r("li",[o._v("Enter the ID of the workflow that you want to execute in the "),r("em",[r("strong",[o._v("Workflow ID")])]),o._v(" field. You can find instructions on how to obtain the ID of a workflow in the FAQs below.")]),o._v(" "),r("li",[o._v("Click on "),r("em",[r("strong",[o._v("Execute Node")])]),o._v(" to run the workflow.")])]),o._v(" "),r("h2",{attrs:{id:"faqs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[o._v("#")]),o._v(" FAQs")]),o._v(" "),r("h3",{attrs:{id:"how-do-i-find-the-workflow-id"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-find-the-workflow-id"}},[o._v("#")]),o._v(" How do I find the workflow ID?")]),o._v(" "),r("ol",[r("li",[o._v("Open the workflow for which you want to get the workflow ID.")]),o._v(" "),r("li",[o._v("Copy the number after "),r("code",[o._v("workflow/")]),o._v(" in your URL and paste that in the "),r("em",[r("strong",[o._v("Workflow ID")])]),o._v(" field.")])]),o._v(" "),r("h3",{attrs:{id:"how-does-data-get-passed-from-one-workflow-to-another"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-does-data-get-passed-from-one-workflow-to-another"}},[o._v("#")]),o._v(" How does data get passed from one workflow to another?")]),o._v(" "),r("p",[o._v("Let's say, that there's a Execute Workflow node in "),r("strong",[o._v("Workflow A")]),o._v(". The Execute Workflow node calls another workflow, "),r("strong",[o._v("Workflow B")]),o._v(".")]),o._v(" "),r("ul",[r("li",[o._v("The Execute Workflow node passes the data to the Start node of "),r("strong",[o._v("Workflow B")]),o._v(".")]),o._v(" "),r("li",[o._v("The last node of "),r("strong",[o._v("Workflow B")]),o._v(" sends the data back to the Execute Workflow node in "),r("strong",[o._v("Workflow A")]),o._v(".")])])])}),[],!1,null,null,null);e.default=a.exports},663:function(o,e,t){o.exports=t.p+"assets/img/workflow.8697b30a.png"}}]);