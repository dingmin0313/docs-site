(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{211:function(t,e,o){"use strict";o.r(e);var i=o(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[t._m(0),t._v(" "),o("p",[t._v("As a systems programmer or application developer, you install Zowe CLI on your PC. You can use either of the following methods to install Zowe CLI.")]),t._v(" "),t._m(1),t._v(" "),o("p",[t._v("Install Zowe CLI on PCs that are running a Windows, Linux, or macOS operating system.")]),t._v(" "),t._m(2),t._v(" "),o("ol",[o("li",[o("p",[o("router-link",{attrs:{to:"./cli-precli.html"}},[t._v("Address the prerequisites")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[o("router-link",{attrs:{to:"./zoegettingstarted.html"}},[t._v("Obtain the Project Zoe installation files")]),t._v(", which includes the zowe-cli-bundle.zip file. Use FTP to distribute the zowe-cli-bundle.zip file to client workstations.")],1)]),t._v(" "),t._m(3),t._v(" "),o("li",[o("p",[t._v("Issue the following command to install Zowe CLI on your PC:")]),t._v(" "),t._m(4),o("p",[o("strong",[t._v("Note:")]),t._v(" On Linux systems, you might need to append "),o("code",[t._v("sudo")]),t._v(" to your "),o("code",[t._v("npm")]),t._v(" commands so that you can issue the install and uninstall commands. For more information, see "),o("router-link",{attrs:{to:"./cli-troubleshootinginstallingcli.html"}},[t._v("Troubleshooting Installing Zowe CLI")]),t._v(".")],1),t._v(" "),o("p",[t._v("Zowe CLI is installed on your PC. See "),o("router-link",{attrs:{to:"./cli-installplugins.html"}},[t._v("Installing Plug-ins")]),t._v(" for information about the commands for installing plug-ins from the package.")],1)]),t._v(" "),o("li",[t._m(5),t._v(" "),o("p",[o("strong",[t._v("Note:")]),t._v(" For information about how to create a profile, see "),o("router-link",{attrs:{to:"./cli-createaprofile.html"}},[t._v("Creating a Zowe CLI profile")]),t._v(".")],1),t._v(" "),o("p",[o("strong",[t._v("Tip:")]),t._v(" Zowe CLI profiles contain information that is required for the product to interact with remote systems. For example, host name, port, and user ID. Profiles let you target unique systems, regions, or instances for a command. Most Zowe CLI "),o("router-link",{attrs:{to:"./cli-commandgroups.html"}},[t._v("command groups")]),t._v(" require a Zowe CLI "),o("code",[t._v("zosmf")]),t._v(" profile.")],1)])]),t._v(" "),o("p",[t._v("After you install and configure Zowe CLI, you can issue the "),o("code",[t._v("bright --help")]),t._v(" command to view a list of available commands. For moreinformation, see "),o("router-link",{attrs:{to:"./cli-howtodisplaybrightsidehelp.html"}},[t._v("Display Help")]),t._v(".")],1),t._v(" "),t._m(6),t._v(" "),o("p",[t._v("If your PC is connected to the Internet, you can use the following method to install Zowe CLI from an npm registry.")]),t._v(" "),t._m(7),t._v(" "),o("ol",[t._m(8),t._v(" "),o("li",[o("p",[t._v("Issue the following command to install Zowe CLI from the registry:")]),t._v(" "),t._m(9),o("p",[t._v("Zowe CLI is installed on your PC. For information about plug-ins for Zowe CLI, see "),o("router-link",{attrs:{to:"./cli-extending.html"}},[t._v("Extending Zowe CLI")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[t._v("Create a "),o("code",[t._v("zosmf")]),t._v(" profile so that you can issue commands that communicate with z/OSMF. For information about how to create a profile, see "),o("router-link",{attrs:{to:"./cli-createaprofile.html"}},[t._v("Creating a Zowe CLI profile")]),t._v(".")],1),t._v(" "),o("p",[o("strong",[t._v("Tip:")]),t._v(" Zowe CLI profiles contain information that is required for the product to interact with remote systems. For example, host name, port, and user ID. Profiles let you target unique systems, regions, or instances for a command. Most Zowe CLI "),o("router-link",{attrs:{to:"./cli-commandgroups.html"}},[t._v("command groups")]),t._v(" require a Zowe CLI "),o("code",[t._v("zosmf")]),t._v(" profile.")],1)])]),t._v(" "),o("p",[t._v("After you install and configure Zowe CLI, you can issue the "),o("code",[t._v("bright --help")]),t._v(" command to view a list of available commands. For more information, see "),o("router-link",{attrs:{to:"./cli-howtodisplaybrightsidehelp.html"}},[t._v("How to display Zowe CLI help")]),t._v(".")],1),t._v(" "),o("p",[o("strong",[t._v("Note:")]),t._v(" You might encounter problems when you attempt to install\nZowe CLI depending on your operating system and\nenvironment. For more information and workarounds, see "),o("router-link",{attrs:{to:"./cli-troubleshootinginstallingcli.html"}},[t._v("Troubleshooting installing Zowe CLI")]),t._v(".")],1),t._v(" "),t._m(10),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"./cli-setenvironmentvariables.html"}},[t._v("Setting environment variables for Zowe CLI")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"./cli-uninstallcli.html"}},[t._v("Uninstalling Zowe CLI")])],1)]),t._v(" "),t._m(11),t._v(" "),o("p",[t._v("Profiles are a Zowe CLI functionality that let you store configuration information for use on multiple commands. You can create a profile that contains your username, password, and connection details for a particular mainframe system, then reuse that profile to avoid typing it again on every command. You can switch between profiles to quickly target different mainframe\nsubsystems.")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),o("p",[o("strong",[t._v("Note:")]),t._v(" After you create a profile, verify that it can communicate with z/OSMF. For more information, see "),o("router-link",{attrs:{to:"./cli-validateInstallation.html"}},[t._v("Test Connection to z/OSMF")]),t._v(".")],1),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),o("p",[t._v("After you create a profile, run a test to verify that Zowe CLI can communicate properly with z/OSMF. You can test your default profile and any other Zowe CLI profile that you created.")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),o("p",[t._v("The commands return a success or failure message and display information about your z/OSMF server. For example, the z/OSMF version number and a list of installed plug-ins. Report any failure to your systems administrator and use the information for diagnostic purposes.")]),t._v(" "),t._m(22),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"./cli-createaprofile.html"}},[t._v("Creating a Zowe CLI profile")])],1)]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),o("p",[t._v("You can set the log level to adjust the level of detail that is written to log files:")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"installing-zowe-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing Zowe CLI")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-zowe-cli-from-local-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-zowe-cli-from-local-package","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Zowe CLI from local package")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Follow these steps:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Open a command line window. For example, Windows Command Prompt. Browse to the directory where you downloaded the Zowe CLI installation bundle (.zip file). Issue the following command to unzip the files:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("unzip zowe-cli-bundle.zip\n")])])]),e("p",[this._v("The command expands four TGZ packages into your working directory - Zowe CLI, one plug-in, and the odbc_cli folder.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm install -g zowe-cli-core-1.0.1.tgz\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create a "),e("code",[this._v("zosmf")]),this._v(" profile so that you can issue commands that communicate with z/OSMF.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-zowe-cli-from-bintray-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-zowe-cli-from-bintray-registry","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Zowe CLI from Bintray registry")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Follow these steps:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Issue the following command to set the registry to the Zowe CLI scoped package on Bintray. In addition to setting the scoped registry, your non-scoped registry must be set to an npm registry that includes all of the dependencies for Zowe CLI, such as the global npm registry:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm config set @brightside:registry https://api.bintray.com/npm/ca/brightside\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npm install -g @brightside/core@latest\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("More information:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"creating-a-zowe-cli-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-zowe-cli-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a Zowe CLI profile")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Important!")]),this._v(" A "),e("code",[this._v("zosmf")]),this._v(" profile is required to issue most Zowe CLI commands. The first profile that you create becomes your default profile. When you issue any command that requires\na "),e("code",[this._v("zosmf")]),this._v(" profile, the command executes using your default profile\nunless you specify a specific profile name on that command.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Follow these steps:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("To create a "),e("code",[this._v("zosmf")]),this._v(" profile, issue the following command."),e("br"),this._v("\nRefer to the available options in the help text to define your profile:"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("bright profiles create zosmf-profile --help\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"testing-zowe-cli-connection-to-z-osmf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing-zowe-cli-connection-to-z-osmf","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing Zowe CLI connection to z/OSMF")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After you configure a Zowe CLI "),e("code",[this._v("zosmf")]),this._v(" profile to connect to z/OSMF on your mainframe systems, you can issue a command at any time to receive diagnostic information from the server and confirm that your profile can communicate with z/OSMF.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Tip:")]),this._v(" In this documentation we provide command syntax to help you create a basic profile. We recommend that you append "),e("code",[this._v("--help")]),this._v(" to the end of commands in the product to see the complete set of commands and options available to you. For example, issue "),e("code",[this._v("bright profiles --help")]),this._v(" to learn more about how to list profiles, switch your default profile, or create different profile types.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Default profile")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("Verify that you can use your default profile to communicate with z/OSMF by issuing the following command:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("bright zosmf check status\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Specific profile")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("Verify that you can use a specific profile to communicate with\nz/OSMF by issuing the following command:")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("bright zosmf check status --zosmf-profile <profile_name>\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("More information:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"setting-environmental-variables-for-zowe-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-environmental-variables-for-zowe-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting environmental variables for Zowe CLI")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can set environment variables on your operating system to modify Zowe CLI behavior, such as the log level and the location of the "),e("em",[this._v(".brightside")]),this._v(" directory, where the logs, profiles, and plug-ins are\nstored. Refer to your PC operating system documentation for information\nabout how to set environmental variables.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"set-log-levels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-log-levels","aria-hidden":"true"}},[this._v("#")]),this._v(" Set log levels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Important!")]),this._v(' Setting the log level to TRACE or ALL may result in "sensitive" data being logged. For example, command line arguments will be logged when TRACE is set.')])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",[o("thead",[o("tr",[o("th",[t._v("Environmental Variable")]),t._v(" "),o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("Values")]),t._v(" "),o("th",[t._v("Default")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("BRIGHTSIDE_APP_LOG_LEVEL")]),t._v(" "),o("td",[t._v("Zowe CLI logging level")]),t._v(" "),o("td",[t._v("Log4JS log levels (OFF, TRACE, DEBUG, INFO, WARN, ERROR, FATAL)")]),t._v(" "),o("td",[t._v("DEBUG")])]),t._v(" "),o("tr",[o("td",[t._v("BRIGHTSIDE_IMPERATIVE_LOG_LEVEL")]),t._v(" "),o("td",[t._v("Imperative CLI Framework logging level")]),t._v(" "),o("td",[t._v("Log4JS log levels (OFF, TRACE, DEBUG, INFO, WARN, ERROR, FATAL)")]),t._v(" "),o("td",[t._v("DEBUG")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"set-the-brightside-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-the-brightside-directory","aria-hidden":"true"}},[this._v("#")]),this._v(" Set the .brightside directory")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can set the location on your PC where Zowe CLI creates the "),e("em",[this._v(".brightside")]),this._v(" directory, which contains log files, profiles, and plug-ins for the product:")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",[o("thead",[o("tr",[o("th",[t._v("Environmental Variable")]),t._v(" "),o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("Values")]),t._v(" "),o("th",[t._v("Default")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("BRIGHTSIDE_CLI_HOME")]),t._v(" "),o("td",[t._v("Zowe CLI home directory location")]),t._v(" "),o("td",[t._v("Any valid path on your PC")]),t._v(" "),o("td",[t._v("Your PC default home directory")])])])])}],!1,null,null,null);e.default=r.exports}}]);