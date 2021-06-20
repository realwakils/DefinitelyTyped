// Type definitions for node-sonos 1.14
// Project: https://github.com/bencevans/node-sonos
// Definitions by: realwakils <https://github.com/realwakils>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Sonos {
    constructor(host: string, port?: number);

    currentTrack(): Promise<void>;
    deviceDescription(): Promise<void>;
    flush(): Promise<void>;
    getCurrentState(): Promise<void>;
    getLEDState(): Promise<void>;
    getMusicLibrary(): Promise<void>;
    getMuted(): Promise<void>;

    /**
     * @deprecated Doesn't work if you upgraded to Sonos v9.1. Check-out getAllGroups() for some replacement.
     */
    getTopology(): Promise<void>;
    getVolume(): Promise<void>;
    getZoneAttrs(): Promise<void>;
    getZoneInfo(): Promise<void>;
    getQueue(): Promise<void>;
    next(): Promise<void>;
    parseDIDL(): Promise<void>;
    pause(): Promise<void>;
    play(): Promise<void>;
    togglePlayback(): Promise<void>;
    previous(): Promise<void>;
    queue(): Promise<void>;
    queueNext(): Promise<void>;
    request(): Promise<void>;
    seek(): Promise<void>;
    setLEDState(): Promise<void>;
    setMuted(): Promise<void>;
    setName(): Promise<void>;
    getPlayMode(): Promise<void>;
    setPlayMode(): Promise<void>;
    setVolume(): Promise<void>;
    stop(): Promise<void>;
    setSpotifyRegion(): Promise<void>;
    alarmClockService(): Promise<void>;
    joinGroup(): Promise<void>;
    leaveGroup(): Promise<void>;
    getAllGroups(): Promise<void>;
    startListening(): Promise<void>;
    stopListening(): Promise<void>;
    CurrentTrack(): Promise<void>;
    NextTrack(): Promise<void>;
    PlayState(): Promise<void>;
    PlaybackStopped(): Promise<void>;
    AVTransport(): Promise<void>;
    Volume(): Promise<void>;
    Muted(): Promise<void>;
    RenderingControl(): Promise<void>;
}

export class DeviceDiscovery {
    /**
     * destroy
     * @param callback A callback
     * @returns A void promise
     */
    destroy(callback: () => void): Promise<void>;

    /**
     * deviceDiscovery
     * @param options An option object. Example: {timeout: 30}
     * @returns DeviceDiscovery
     */
    deviceDiscovery(options?: { timeout: number }, listener?: () => void): DeviceDiscovery;
}

export namespace Helpers {
    /**
     * Wrap in UPnP Envelope
     * @param body The SOAP body
     * @returns A Soap Envelop
     */
    function CreateSoapEnvelop(body: string): string;

    /**
     * Encodes characters not allowed within html/xml tags, for use with nester xml.
     * @param input input
     * @returns output
     */
    function EncodeXML(input: string): string;

    /**
     * Converts parentID to upnp cass
     * @param parentID The id of the parent
     * @returns object.item.audioItem.musicTrack
     */
    function GetUpnpClass(parentID: string): string;

    /**
     * Generate custom metadata, to be used with the play and/or setAVTransportURI
     * @param streamUri The playback uri
     * @returns any
     */
    function GenerateCustomMetadata(streamUri: string, itemId: string, duration: string, title: string, artist: string, album: string, coverUrl: string, parentId: string): any;

    /**
     * Creates object with uri and metadata from playback uri
     * @param uri The playback uri
     * @returns Object, { uri: uri, metadata: metadata }
     */
    function GenerateLocalMetadata(uri: string, title: string, region: string): { uri: any, metadata: any };

    /**
     * Creates object with uri and metadata from playback uri
     * @param uri The playback uri (currently supporst Spotify, TuneIn)
     * @returns Object, options {uri: Spotify uri, metadata: metadata}
     */
    function GenerateMetadata(uri: string, title: string, region: string): { uri: any, metadata: any };

    /**
     * Parse DIDL into track structure
     * @param didl Parse DIDL into track structure
     * @returns object
     */
    function ParseDIDL(didl: string, host: string, port: number): {};

    /**
     * Convert a time string to seconds
     * @param time string, like 00:03:34
     * @returns number of seconds like 214
     */
    function TimeToSeconds(time: string): number;

    /**
     * Convert the playbackstate to a bit more readable
     * @param state Sonos playback state
     * @returns string
     */
    function TranslateState(state: string): string;

    /**
     * ParseXml
     * @param input
     * @returns Promise
     */
    function ParseXml(input: string): Promise<object>;
}

export namespace SonosListener {
    /**
     * Start the listener, has to be called before subscribing
     * @returns void
     */
    function startListener(): void;

    /**
     * Stop the listener and unsubscribes for all events. Very important to call or you'll get wrong notifications
     * @returns void
     */
    function stopListener(): void;

    /**
     * Subscribe to all events for this device.
     * @param device Pass in the Sonos device, it will be the eventemitter
     */
    function subscribeTo(device: Sonos): void;
}

export namespace DeviceSubscription {
    /**
     * Subscribe to specific endpoint for this device
     * @param endpoint What endpoint do we need to subscribe to?
     */
    function addSubscription(endpoint: string): void;

    /**
     * Renew all subscriptions for this device
     */
    function renewAllSubscriptions(): void;

    /**
     * Renew a single subscription
     * @param sid Subscription id you want to renew
     */
    function renewSubscription(sid: string): void;

    /**
     * Does this deivce have a subscription with a specific sid
     * @param sid Subscription id
     */
    function hasSubscription(sid: string): void;

    /**
     * This will be called by the SonosListener for device specific devices
     * @param endpoint The endpoint used for the subscription
     * @param body The body of the event
     */
    function handleNotification(endpoint: string, body: string): void;

    /**
     * Cancel all the subscriptions for this device. Important to stop the notifications from returing.
     */
    function cancelAllSubscriptions(): void;

    /**
     * Cancel a single subscription
     * @param sid string
     */
    function cancelSubscription(sid: string): void;

    /**
     * Convert the Timeout header to datetime (legacy code...)
     * @param timeout Timeout header
     */
    function headerToDateTime(timeout: string): void;
}

export as namespace sonos;
