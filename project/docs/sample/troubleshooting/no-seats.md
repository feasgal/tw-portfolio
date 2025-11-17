# No seats available

Clients connect but get a denial due to lack of seats.

## Confirm

-   The license is allocated to the **Server**.
-   The number of **active leases** matches the seat count.
-   Client appears under **Connections** or **Statistics**.

## Likely causes and fixes

1.   **All seats in use**  
   Deactivate on idle machines or add seats.
1.   **Per-client limits**  
   Increase the **max leases per client** in Server Admin.
1.   **Lease not released**  
   Wait for timeout or restart the client machine.
1.   **Wrong license location**  
   Move the seat from machine or Cloud to an Acme dongle attached to the Server.

## See also

-   [Allocate seats to a USB on the server](/sample/how-to/server/allocate-seats.md)
-   [View server statistics](/sample/how-to/server/stats.md)
