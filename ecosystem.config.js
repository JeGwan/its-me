module.exports = {
  apps: [
    {
      name: "its-me",
      script: "yarn start -p 3002",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      log_date_format: "YY-MM-DD HH:mm:ss ",
    },
  ],
};
