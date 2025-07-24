module.exports = async function getStatusData() {
  return [
    {
      name: 'Orders API',
      status: 'Healthy',
      uptime: '99.98%',
      latency: '110ms',
      lastChecked: new Date(),
      internalDebugInfo: 'should be removed'
    },
    {
      name: 'Inventory API',
      status: 'Degraded',
      uptime: '97.25%',
      latency: '330ms',
      lastChecked: new Date(),
      internalDebugInfo: 'should be removed'
    }
  ];
};
