(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1829:function(e,t,o){"use strict";o.r(t);var a=o(26),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"webhook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhook"}},[e._v("#")]),e._v(" Webhook")]),e._v(" "),a("p",[e._v("The Webhook node is one of the most powerful nodes in n8n. It allows you to create "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Webhook",target:"_blank",rel:"noopener noreferrer"}},[e._v("webhooks"),a("OutboundLink")],1),e._v(" which can be used to receive data from apps and services when an event occurs. It is a Trigger node, which means that it serves as the starting point for an n8n workflow. This allows several different services to connect to n8n and run a workflow when data is received.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),a("ol",[a("li",[e._v("When using the Webhook node on the localhost, ensure that n8n is running with the "),a("RouterLink",{attrs:{to:"/getting-started/installation/#n8n-with-tunnel"}},[e._v("tunnel")]),e._v(" mode.")],1),e._v(" "),a("li",[e._v("When working with a Production webhook, please ensure that you have saved and activated the workflow. Don’t forget that the data flowing through the webhook won’t be visible in the Editor UI with the Production webhook.")])])]),e._v(" "),a("p",[e._v("Webhook nodes can be used as triggers for workflows when we want to receive data and run a workflow based on the data. The Webhook node also supports returning the data generated at the end of a workflow. This makes it very useful to build a workflow to process data and return the results, like an API endpoint.")]),e._v(" "),a("p",[e._v("While building or testing a workflow, we recommend that you use a test webhook URL. Using a test webhook ensures that you can view the incoming data in the Editor UI, which is useful for debugging. Make sure that you click on the "),a("em",[e._v("Execute Node")]),e._v(" button to register the webhook before sending the data to the test webhook. The test webhook stays active for 120 seconds.")]),e._v(" "),a("p",[e._v("🎥 The following playlist will help you learn how to use the Webhook node in n8n.")]),e._v(" "),a("div",{staticClass:"video-container"},[a("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed//videoseries?list=PLlET0GsrLUL5niZQDjW56b_AxpvnEZyps",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),a("h2",{attrs:{id:"node-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),a("p",[e._v("First of all, in the parameters section, we have the Webhook URLs. Clicking on that will reveal the URLs for the webhook. Here you have two options, let’s understand the difference between them.")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("Webhook URLs")])]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Production")]),e._v(": A Production webhook is only registered when a workflow has been activated (via the switch on the top right of the page). You will never see its data in the Editor UI. To save the executions, you can either set that as a global default or you can specify that on a per-workflow basis in the workflow settings. You will then see the data from the workflow under ‘Past Executions’.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Test")]),e._v(": A Test webhook is only registered in the time between executing a workflow via the UI and until the first call gets made (when it displays “waiting for Webhook call”). After the Test webhook gets called for the first time, it displays the data in the Editor UI, and then gets deactivated.")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Authentication:")]),e._v(" The Webhook node supports two methods of authenticating a request that it receives.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("Basic Auth")]),a("OutboundLink")],1),e._v(" — A method of authentication where the specified username and password must be passed along with the request.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("Header Auth")]),a("OutboundLink")],1),e._v(" — A method of authentication where the specified header parameter must be passed along with the request. This method can be used when you want to authenticate using an API key or an access token, for example."),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("Credential Data")]),e._v(" required for Header Auth credentials will vary on the type used. For example, if you need to provide an "),a("code",[e._v("Authorization: Bearer <token>")]),e._v(" header, the Credential Data "),a("code",[e._v("Name")]),e._v(" would be "),a("code",[e._v("Authorization")]),e._v(" and the "),a("code",[e._v("Value")]),e._v(" would be "),a("code",[e._v("Bearer <token>")]),e._v(".")])])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("HTTP Method:")]),e._v(" The Webhook node supports receiving two types of "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP Requests"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("GET Request")]),a("OutboundLink")],1),e._v(" — GET requests are typically used to request data from a resource. This type of request is typically used to retrieve data from a service.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("POST Request")]),a("OutboundLink")],1),e._v(" — POST requests are typically used to send data to a resource for a create/update operation. This type of request is typically used to send data to a service.")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Path:")]),e._v(" By default, this field contains a randomly generated webhook URL path, to avoid conflicts with other webhook nodes. You can also manually specify a URL path if necessary. A good example would be if you were using n8n to prototype an API; and wanted consistent endpoint URLs.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Response Code:")]),e._v(" Allows you to customize the "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP response code"),a("OutboundLink")],1),e._v(" that the Webhook node will return upon successful execution.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Response When:")]),e._v(" This dropdown list allows you to select between two response modes.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Webhook received:")]),e._v(" When this option is selected, the Webhook node will return the specified response code along with the message “Workflow got started.”.")]),e._v(" "),a("li",[a("strong",[e._v("Last node finishes:")]),e._v(" When this option is selected, the Webhook node will return the specified response code along with the data output from the last node executed in the workflow.")])])])]),e._v(" "),a("p",[a("strong",[e._v("Optional Parameters:")]),e._v(" The Webhook node also supports several optional methods that can be used during configuration.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/Response_header",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("Response Headers")]),a("OutboundLink")],1),e._v(" — This option allows you to specify additional headers in the Webhook response.")]),e._v(" "),a("li",[a("strong",[e._v("Raw Body")]),e._v(" — This option is used to specify when the Webhook node will receive data in a RAW format, such as JSON or XML.")]),e._v(" "),a("li",[a("strong",[e._v("Binary Data")]),e._v(" — This option is available only when the Webhook node is set to receive POST requests. Setting this to ‘true’ lets the Webhook node know that it will receive binary data (such as an image/audio). You can use this option when you expect to receive a file via your Webhook node.")])]),e._v(" "),a("p",[a("strong",[e._v("Conditional Parameters:")]),e._v(" The Webhook node also supports several other parameters, that are used only in certain configurations.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Response Data:")]),e._v(" This option is available only when set to respond when ‘Last node finishes’. It allows you to choose which data to return:\n"),a("ul",[a("li",[a("strong",[e._v("All Entries")]),e._v(" — Choose this option to return all the data generated by the last node in the workflow, as an array.")]),e._v(" "),a("li",[a("strong",[e._v("First Entry JSON")]),e._v(" — Choose this option to return the first data entry of the last node in the workflow, as a JSON object.")]),e._v(" "),a("li",[a("strong",[e._v("First Entry Binary")]),e._v(" — Choose this option to return the binary data of the first entry of the last node in the workflow, as a binary file.")])])])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to receive the weather information of a city using the Webhook and the OpenWeatherMap nodes. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/807",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:""}},[e._v("Webhook")])]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/OpenWeatherMap/"}},[e._v("OpenWeatherMap")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1)]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(742),alt:"A workflow with the Webhook node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-webhook-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-webhook-node"}},[e._v("#")]),e._v(" 1. Webhook node")]),e._v(" "),a("p",[e._v("This node will trigger the workflow. We will make a GET request to the Test URL and pass on a query parameter "),a("code",[e._v("city")]),e._v(". We will use the value of this query parameter in the next node in the workflow.")]),e._v(" "),a("ol",[a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Webhook URLs")])]),e._v(" and select the 'Test' tab.")]),e._v(" "),a("li",[e._v("Copy the displayed URL. We will make a GET request to this URL later on.")]),e._v(" "),a("li",[e._v("Select 'Last Node' from the "),a("em",[a("strong",[e._v("Response Mode")])]),e._v(". This will return the data from the last executed node.")]),e._v(" "),a("li",[e._v("Select 'All Entries' from the "),a("em",[a("strong",[e._v("Response Data")])]),e._v(". This will return all the entries of the last executed node.")]),e._v(" "),a("li",[e._v("Save the workflow to register the webhook.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")]),e._v(" "),a("li",[e._v("In a new browser tab, paste the URL you copied in the previous step and append it with "),a("code",[e._v("?city=Berlin")]),e._v(". Your URL should look similar to the following URL:"),a("code",[e._v("https://your-n8n.url/webhook/path?city=Berlin")]),e._v(". We are passing a query parameter "),a("code",[e._v("city")]),e._v(" and assigning it the value "),a("code",[e._v("Berlin")]),e._v(".")]),e._v(" "),a("li",[e._v("Press Enter (or Return) to make a request to the Test Webhook URL.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node triggers the workflow and receives a query parameter. We will use the value of the query parameter in the next node in the workflow.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(743),alt:"Using the Webhook node to trigger the workflow"}})]),e._v(" "),a("h3",{attrs:{id:"_2-openweathermap-node-current-weather"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-openweathermap-node-current-weather"}},[e._v("#")]),e._v(" 2. OpenWeatherMap node (Current Weather)")]),e._v(" "),a("p",[e._v("This node will return data about the current weather for the city that we received in the previous node.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the OpenWeatherMap node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/OpenWeatherMap/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("City")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"3"}},[a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Webhook > Output Data > JSON > query > city. You can also add the following expression: "),a("code",[e._v('{{$node["Webhook"].json["query"]["city"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node returns data about the current weather in Berlin.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(744),alt:"Using the OpenWeatherMap node to get weather updates for Berlin"}})]),e._v(" "),a("h3",{attrs:{id:"_3-set-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),a("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets returned to the workflow. We will set the value of "),a("code",[e._v("temp")]),e._v(" and "),a("code",[e._v("description")]),e._v(" in this node.")]),e._v(" "),a("div",{pre:!0},[a("ol",[a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("temp")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > OpenWeatherMap > Output Data > JSON > main > temp. You can also add the following expression: "),a("code",[e._v('{{$node["OpenWeatherMap"].json["main"]["temp"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" and select 'String' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("description")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > OpenWeatherMap > Output Data > JSON > weather > [Item: 0] > description. You can also add the following expression: "),a("code",[e._v('{{$node["OpenWeatherMap"].json["weather"][0]["description"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Toggle "),a("em",[a("strong",[e._v("Keep Only Set")])]),e._v(" to "),a("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),a("p",[e._v("In the screenshot below, you will notice that the node sets the values of "),a("code",[e._v("temp")]),e._v(" and "),a("code",[e._v("description")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:o(745),alt:"Using the Set node to set the values for temp and description"}})]),e._v(" "),a("p",[e._v("Save the workflow and execute it again by clicking on the "),a("em",[a("strong",[e._v("Execute Workflow")])]),e._v(" button in the Editor UI. This time you will receive the temperature and description as the response in the browser.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),a("p",[e._v("This example workflow uses the Webhook node, which is a Trigger node. You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered every time a GET request is sent to the "),a("em",[a("strong",[e._v("Production")])]),e._v(" webhook URL.")])]),e._v(" "),a("h2",{attrs:{id:"faqs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),a("h3",{attrs:{id:"where-to-find-the-webhook-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-find-the-webhook-urls"}},[e._v("#")]),e._v(" Where to find the Webhook URLs?")]),e._v(" "),a("p",[e._v("The Webhook node has two URLs - Test URL and Production URL.\nTo get these URLs, follow the steps mentioned below.")]),e._v(" "),a("ol",[a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Webhook URLs")])]),e._v(". By default, the node displays the Production URL.")]),e._v(" "),a("li",[e._v("If you want the Test URL, click on the "),a("em",[a("strong",[e._v("Test")])]),e._v(" tab.")]),e._v(" "),a("li",[e._v("To copy the URL, click on the displayed URL.")])]),e._v(" "),a("p",[e._v("Here is a GIF demonstrating how to retrieve the test and production webhook URLs in n8n.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(746),alt:"Retrieving the Test and Production URLs from the Webhook node"}})]),e._v(" "),a("h3",{attrs:{id:"how-to-use-the-http-request-node-to-trigger-the-webhook-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-the-http-request-node-to-trigger-the-webhook-node"}},[e._v("#")]),e._v(" How to use the HTTP Request node to trigger the Webhook node?")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node is used to make HTTP requests to the URL you specify. To use the HTTP Request node to trigger the Webhook node, follow the steps mentioned below.")],1),e._v(" "),a("ol",[a("li",[e._v("Create a new workflow.")]),e._v(" "),a("li",[e._v("Add the HTTP Request node to the workflow.")]),e._v(" "),a("li",[e._v("Select the appropriate method from the "),a("em",[a("strong",[e._v("Request Method")])]),e._v(" dropdown list. For example, if you have selected GET as the HTTP method in your Webhook node, select GET as the request method in the HTTP Request node.")]),e._v(" "),a("li",[e._v("Copy the URL from the Webhook node, and paste it in the "),a("em",[a("strong",[e._v("URL")])]),e._v(" field in the HTTP Request node.")]),e._v(" "),a("li",[e._v("Execute the workflow with the Webhook node if you're using the Test URL.")]),e._v(" "),a("li",[e._v("Execute the HTTP Request node.")])]),e._v(" "),a("p",[e._v("Here is a video demonstrating how to send a request to a Webhook based workflow using the HTTP Request node:")]),e._v(" "),a("div",{staticClass:"video-container"},[a("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube-nocookie.com/embed/WLIDTRJGfWw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),a("h3",{attrs:{id:"how-to-use-route-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-route-parameters"}},[e._v("#")]),e._v(" How to use route parameters?")]),e._v(" "),a("p",[e._v("You can add route parameters to the webhook URL path. This is useful when you are creating an API. The "),a("em",[e._v("Path")]),e._v(" field can take the following values:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("/:variable")])]),e._v(" "),a("li",[a("code",[e._v("/path/:variable")])]),e._v(" "),a("li",[a("code",[e._v("/:variable/path")])]),e._v(" "),a("li",[a("code",[e._v("/:variable1/path/:variable2")])]),e._v(" "),a("li",[a("code",[e._v("/:variable1/:variable2")])])]),e._v(" "),a("h3",{attrs:{id:"how-to-use-curl-to-trigger-the-webhook-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-curl-to-trigger-the-webhook-node"}},[e._v("#")]),e._v(" How to use cURL to trigger the Webhook node?")]),e._v(" "),a("p",[e._v("You can use "),a("a",{attrs:{href:"https://curl.se/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cURL"),a("OutboundLink")],1),e._v(" to make HTTP requests that will trigger the Webhook node. To use cURL, make sure that you have installed it on your machine. You can follow "),a("a",{attrs:{href:"https://www.booleanworld.com/curl-command-tutorial-examples/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this guide"),a("OutboundLink")],1),e._v(" to install cURL on your machine.\nBased on your use-case, you can make an HTTP request with or without any parameters. You can also send files with the HTTP request using cURL.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" In the following commands, replace "),a("code",[e._v("https://your-n8n.url/webhook/path")]),e._v(" with your webhook URL.")]),e._v(" "),a("ul",[a("li",[a("h4",{attrs:{id:"make-an-http-request-without-any-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-an-http-request-without-any-parameters"}},[e._v("#")]),e._v(" Make an HTTP request without any parameters")])])]),e._v(" "),a("p",[e._v("To make a GET request without any parameters, use the following command in your terminal.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --request GET https://your-n8n.url/webhook/path\n")])])]),a("p",[e._v("To make a POST request, use the following command.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --request POST https://your-n8n.url/webhook/path\n")])])]),a("ul",[a("li",[a("h4",{attrs:{id:"make-an-http-request-with-body-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-an-http-request-with-body-parameter"}},[e._v("#")]),e._v(" Make an HTTP request with body parameter")])])]),e._v(" "),a("p",[e._v("To make an HTTP request with a body parameter, use the following command.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --request GET https://your-n8n.url/webhook/path --data "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'key=value'")]),e._v("\n")])])]),a("ul",[a("li",[a("h4",{attrs:{id:"make-an-http-request-with-header-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-an-http-request-with-header-parameter"}},[e._v("#")]),e._v(" Make an HTTP request with header parameter")])])]),e._v(" "),a("p",[e._v("To make an HTTP request with a header parameter, use the following command.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --request GET https://your-n8n.url/webhook/path --header "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'key=value'")]),e._v("\n")])])]),a("ul",[a("li",[a("h4",{attrs:{id:"make-an-http-request-to-send-a-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-an-http-request-to-send-a-file"}},[e._v("#")]),e._v(" Make an HTTP request to send a file")])])]),e._v(" "),a("p",[e._v("To send a file with the HTTP request, use the following command.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" --request GET https://your-n8n.url/webhook/path --from "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'key=@/path/to/file'")]),e._v("\n")])])]),a("p",[e._v("Replace "),a("code",[e._v("/path/to/file")]),e._v(" with the path of the file you want to send.")]),e._v(" "),a("h3",{attrs:{id:"how-to-send-a-response-of-type-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-send-a-response-of-type-string"}},[e._v("#")]),e._v(" How to send a response of type "),a("code",[e._v("string")]),e._v("?")]),e._v(" "),a("p",[e._v("To send a response of type string, follow the steps mentioned below.")]),e._v(" "),a("ol",[a("li",[e._v("Select 'Last Node' from the "),a("em",[a("strong",[e._v("Response Mode")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select 'First Entry JSON' from the "),a("em",[a("strong",[e._v("Response Data")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on 'Add Option' and select 'Property Name' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter the name of the property that contains the response.")]),e._v(" "),a("li",[e._v("Connect a Set node to the Webhook node.")]),e._v(" "),a("li",[e._v("In the Set node, click on 'Add Value' and select 'String'.")]),e._v(" "),a("li",[e._v("Enter the name of the property in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field. The name should match the property name from step 4.")]),e._v(" "),a("li",[e._v("Enter the string value in the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Toggle "),a("em",[a("strong",[e._v("Keep Only Set")])]),e._v(" to "),a("code",[e._v("true")]),e._v(".")])]),e._v(" "),a("p",[e._v("When the Webhook gets called, it will send the string response that was set in the Set node.")]),e._v(" "),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),a("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=r.exports},742:function(e,t,o){e.exports=o.p+"assets/img/workflow.740798e1.png"},743:function(e,t,o){e.exports=o.p+"assets/img/Webhook_node.353afb93.png"},744:function(e,t,o){e.exports=o.p+"assets/img/OpenWeatherMap_node.1b68bd9b.png"},745:function(e,t,o){e.exports=o.p+"assets/img/Set_node.6e0dd6b2.png"},746:function(e,t,o){e.exports=o.p+"assets/img/webhook-url.7d32248f.gif"}}]);