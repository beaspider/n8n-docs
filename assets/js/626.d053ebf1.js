(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{2135:function(e,t,a){"use strict";a.r(t);var o=a(26),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telemetry"}},[e._v("#")]),e._v(" Telemetry")]),e._v(" "),a("p",[e._v("n8n collects selected usage and performance data to help us diagnose problems and improve the platform. We take care to keep this data anonymous and to avoid collecting sensitive data. Read about how this information is stored and processed in our "),a("a",{attrs:{href:"https://n8n.io/legal/privacy",target:"_blank",rel:"noopener noreferrer"}},[e._v("privacy policy"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"what-we-collect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-we-collect"}},[e._v("#")]),e._v(" What we collect")]),e._v(" "),a("ul",[a("li",[e._v("Error codes and messages of failed executions (excluding any payload data, and not for custom nodes)")]),e._v(" "),a("li",[e._v("The graph of a workflow (types of nodes used and how they are connected)")]),e._v(" "),a("li",[e._v("From node parameters, only:\n"),a("ul",[a("li",[e._v("The 'resource' and 'operation' that a node is set to (if applicable)")]),e._v(" "),a("li",[e._v("The domain for HTTP nodes (but no path, query parameters or other information)")])])]),e._v(" "),a("li",[e._v("The number of workflow executions and their status")]),e._v(" "),a("li",[e._v("Details on how the UI is used (e.g. navigation, nodes panel searches)")]),e._v(" "),a("li",[e._v("Diagnostic information\n"),a("ul",[a("li",[e._v("n8n version")]),e._v(" "),a("li",[e._v("Selected settings:\n"),a("ul",[a("li",[e._v("DB_TYPE")]),e._v(" "),a("li",[e._v("N8N_VERSION_NOTIFICATIONS_ENABLED")]),e._v(" "),a("li",[e._v("N8N_DISABLE_PRODUCTION_MAIN_PROCESS")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/reference/environment-variables.html#executions"}},[e._v("Execution variables")])],1),e._v(" "),a("li",[e._v("N8N_BASIC_AUTH_ACTIVE")])])]),e._v(" "),a("li",[e._v("OS, RAM, and CPUs")]),e._v(" "),a("li",[e._v("Anonymous instance ID")])])])]),e._v(" "),a("h2",{attrs:{id:"what-we-don-t-collect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-we-don-t-collect"}},[e._v("#")]),e._v(" What we don’t collect")]),e._v(" "),a("p",[e._v("We do not collect private or sensitive information, such as:")]),e._v(" "),a("ul",[a("li",[e._v("Personally identifiable information")]),e._v(" "),a("li",[e._v("Credential information")]),e._v(" "),a("li",[e._v("Node parameters (except 'resource' and 'operation')")]),e._v(" "),a("li",[e._v("Execution data")]),e._v(" "),a("li",[e._v("Sensitive settings (e.g. endpoints, ports, DB connections, username/password)")]),e._v(" "),a("li",[e._v("Error payloads")])]),e._v(" "),a("h2",{attrs:{id:"how-collection-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-collection-works"}},[e._v("#")]),e._v(" How collection works")]),e._v(" "),a("p",[e._v("Telemetry is collected anonymously, with most data sent to n8n as events that generate it occur. Workflow execution counts and an instance pulse are sent periodically (every 6 hours).")]),e._v(" "),a("h2",{attrs:{id:"opting-out-of-telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opting-out-of-telemetry"}},[e._v("#")]),e._v(" Opting out of telemetry")]),e._v(" "),a("p",[e._v("Telemetry collection is enabled by default. To disable it you can configure the following environment variables.")]),e._v(" "),a("p",[e._v("To opt out of telemetry events:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_DIAGNOSTICS_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false\n")])])]),a("p",[e._v("To opt out of checking for new versions of n8n:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_VERSION_NOTIFICATIONS_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("false\n")])])]),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/getting-started/installation/advanced/configuration.html#how-to-set"}},[e._v("configuration")]),e._v(" for more info on how to set environment variables.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);