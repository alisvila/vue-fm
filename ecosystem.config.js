module.exports = {
    apps : [
        {
          name: "server",
          script: "./server.js",
          watch: true,
          env: {
              "PORT": 4000,
              "NODE_ENV": "development"
          },
          env_production: {
              "PORT": 1022,
              "NODE_ENV": "production",
          }
        }
    ]
  }