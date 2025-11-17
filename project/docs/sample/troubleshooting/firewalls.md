# Firewalls

Connections fail or drop due to filtering.

## Confirm

-   Clients can ping the server host.
-   Server port and mDNS are open on both host and client.

## Likely causes and fixes

1.   **Host firewall blocks**  
   Allow inbound TCP on the server's port. Allow mDNS. Create outbound rules on clients.
1.   **Third-party security suites**  
   Add allow rules or disable for a test.
1.   **Corporate firewall or segmentation**  
   Use a [private server connection](/sample/tutorials/connect-private-client.md) and open the server port between subnets.

## See also

-   [Server not discovered](/sample/troubleshooting/discovery.md)
-   [Add a private server by IP address](/sample/how-to/client/add-by-ip.md)
