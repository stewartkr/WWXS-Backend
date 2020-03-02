const testData = { // TODO: Associate records
  users: [
    {
      username: 'kris',
      password: 'admin',
      role: 'dev',
      groupId: 1
    },
    {
      username: 'erik',
      password: 'admin',
      role: 'dev',
      groupId: 1
    },
    {
      username: 'john',
      password: 'password',
      role: 'user',
      groupId: 2
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
      mac: 'FF-FF-FF-FF-FF-FF',
      groupId: 1
    },
    {
      name: 'salish',
      mac: '12:34:56:78:9A:BC',
      groupId: 2
    }
  ],
  data: [
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random(),
      buoyId: 1,
      userId: 1
    },
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random(),
      buoyId: 1,
      userId: 1
    },
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random(),
      buoyId: 1,
      userId: 1
    },
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random(),
      buoyId: 2,
      userId: 1
    },
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random(),
      buoyId: 2,
      userId: 1
    },
    {
      timestamp: Date.now(),
      surfTemp: Math.random() * 100,
      surfSalinity: Math.random(),
      surfInsolation: Math.random(),
      depthTurbidity: Math.random(),
      buoyId: 2,
      userId: 1
    }
  ]
};

module.exports = testData;
