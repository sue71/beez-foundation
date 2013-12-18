(function () {
    return {
        "app": {
            // Static Server
            "stat": {
                "compress": true, // gzip
                "port": 1109, // listen port
                "header": { // Add response header
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Methods": "GET, OPTIONS",
                    "Access-Control-Allow-Headers": "*"
                },
                "include": { // Setting in the configuration file of a different environment
                    "path": "./local",
                    "from": null
                }

            },
            // Mock Server
            "mock": {
                "use": true, // ON / OFF
                "compress": true, // gzip
                "port": 1121, // listen port
                "include": { // RESTful information
                    "path": "./mockdata" // mockdata directory
                },
                "header": { // Add response header
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Methods": "GET, OPTIONS",
                    "Access-Control-Allow-Headers": "*"
                }
            }
        },
        "stats": {
            // Web Design, which is available from the beez-foundation
            "public": {
                "path": "./public",
                "from": "./static" // @see http://nodejs.org/docs/latest/api/path.html#path_path_resolve_from_to
            },
            // Local-PC /tmp directory (example setting :p
            "tmp": {
                "path": "/tmp"
            }
        }
    };
}());
