# Make the server private

Hide your server from LAN discovery so only users with the details you provide can connect. Use this in managed networks, across VPNs/subnets, or any time you want explicit control over who can find the server.

!!! goal

    Disable LAN discovery and require clients to connect by configuration file or address.

## Before you start

Sign in to **Server Admin** with admin rights. Decide whether you’ll distribute a **client configuration file** or the **server address and port**, and make sure you have the current access password ready to share securely.

## Steps

1. Open **Server Admin**.
2. Go to **Discovery**.
3. Turn off **Advertise on local network**.
4. Apply changes.
5. Share a client configuration file or the server address (and password) with users.

!!! outcome

    The server no longer appears under **Discovered** in the Hub; users connect using the file or address you provide.

## See also

- [Export a client configuration file](/sample/how-to/server/export-config.md)
- [Connect a client to a private server](/sample/tutorials/connect-private-client.md)
