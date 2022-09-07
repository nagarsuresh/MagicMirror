/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "clock",
			position: "top_left",
      config: {
        timeFormat: 12
      }
		},
		{
			module: "reminders",
			header: "Reminders",
			position: "bottom_right",
			config: {
        path: 'https://gist.githubusercontent.com/nagarsuresh/83898c5c25727a553067ff675ea31889/raw/b22b20df7ee454c42d992c8da43cef1733fea977/todolist.json'
			}
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "bottom_right",
			config: {
        tableClass: "medium",
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
        timeFormat: 12,
        units: "imperial",
				weatherProvider: "openweathermap",
				type: "current",
				location: "Fremont",
				locationID: "5350734", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "3dc3b6c2080d2263715012354b7459ed"
			}
		},
    {
      module: 'MMM-Unsplash',
      position: 'fullscreen_below',
      config: {
        opacity: 0.3,
        orientation: 'landscape',
        updateInterval: 1800,
        width: 2000,
        height: 1500,
        collections: 'Oxi7Mdg1ec8',
        apiKey: 'e6YMcU3ObNb7iEW08m4FtjDFbYP7Je8eeKi5iZEXXwI'
      }
    },
    {
			module: "monthcalendar",
			position: "bottom_left",
		},

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
