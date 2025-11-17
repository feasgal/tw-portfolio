# VPN and subnets

Clients on VPN or different subnets cannot see or reach the server.

## Confirm

-   Client can reach the server IP with `ping` or `traceroute`.
-   The server is reachable on its TCP port from the client network.

## Likely causes and fixes

1.   **mDNS does not cross subnets**  
   Use a [private server connection](/sample/tutorials/connect-private-client.md) or configure a discovery proxy.
1.   **VPN split tunneling**  
   Disable split tunneling or add routes to the server LAN.
1.   **Blocked ports**  
   Open the server's TCP port across the VPN.
1.   **NAT or address overlap**  
   Use unique address ranges and proper routes.

## See also

-   [Add a private server by IP address](/sample/how-to/client/add-by-ip.md)
-   [Firewalls](/sample/troubleshooting/firewalls.md)
