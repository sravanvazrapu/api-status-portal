module.exports = function sanitize(data) {
  return data.map(api => ({
    name: api.name,
    uptime: api.uptime,
    latency: api.latency,
    status: api.status,
    lastChecked: api.lastChecked
  }));
};
