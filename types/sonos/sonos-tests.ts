import sonos from 'sonos';

// sonos.DeviceDiscovery
const discovery = new sonos.DeviceDiscovery();
discovery.deviceDiscovery({timeout: 2000}, () => {});
discovery.destroy(() => {});

// sonos.Helpers
sonos.Helpers.TimeToSeconds("00:03:34");

// sonos.Sonos
const device: sonos.Sonos = new sonos.Sonos("192.168.1.19", 4);
device.getAllGroups();
