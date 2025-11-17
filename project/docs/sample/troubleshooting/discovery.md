# Server not discovered

The server does not appear under **Discovered** in the Hub.

## Confirm

-   Server is **Online** in Server Admin.
-   Client and server are on the same subnet.
-   Discovery is set to **Public** on the server.

## Likely causes and fixes

1.   **Bonjour/mDNS blocked or absent**  
   Install or enable mDNS on the client OS. Allow mDNS through host firewalls.
1.   **Different subnets or VLANs**  
   Discovery is broadcast-limited. Use a [private server connection](/sample/tutorials/connect-private-client.md) across subnets.
1.   **Host firewalls**  
   Allow the server's TCP port and mDNS on both ends. See [Firewalls](/sample/troubleshooting/firewalls.md).
1.   **Server offline**  
   Restart the service on the host.
1.   **Name conflicts**  
   Rename the server to a unique name and retry.

## See also

-   [Auto-connect to a public server](/sample/how-to/client/auto-connect.md)
-   [VPN and subnets](/sample/troubleshooting/vpn.md)
