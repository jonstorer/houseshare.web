var defaultEnv = {
  port: 4040
};

var env = {
  local: JSON.parse(JSON.stringify(defaultEnv))
};

module.exports = env[process.env.NODE_ENV] || env.local;
