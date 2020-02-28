const testData = { // TODO: Associate records
  users: [
    {
      username: 'kris',
      password: 'admin',
      role: 'dev'
    },
    {
      username: 'erik',
      password: 'admin',
      role: 'dev'
    },
    {
      username: 'john',
      password: 'password',
      role: 'user'
    }
  ],
  groups: [
    {
      name: 'default'
    },
    {
      name: 'group1'
    }
  ],
  buoys: [
    {
      name: 'proto',
      mac: 'FF-FF-FF-FF-FF-FF'
    },
    {
      name: 'salish',
      mac: '12:34:56:78:9A:BC'
    }
  ],
  data: [
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random()
    },
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random()
    },
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random()
    },
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random()
    },
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random()
    },
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random()
    }
  ]
};

module.exports = testData;
