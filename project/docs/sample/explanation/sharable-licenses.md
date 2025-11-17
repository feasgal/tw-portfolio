# How sharable licenses work

Sharable licenses allow multiple clients to use a pool of seats.

## Core model

-   A license has **N seats**.
-   Seats live in a **location**: USB, Server, or Cloud.
-   Clients **lease** seats from the server while the app runs.
-   Leases **expire or return** when the client disconnects or closes the app.

## Discovery and access

-   Public servers advertise on the LAN using discovery.
-   Private servers require a **password** and a config file or address.
-   Identity policies let admins record **who** uses seats.

## Lifecycle

1.   Admin allocates seats to the server.
1.   Client connects and requests a seat.
1.   Server grants a lease if a seat is free and policy allows it.
1.   Client releases the seat when done, or after a timeout.

## Trade-offs

-   **Server**: central control and telemetry. Requires reliable LAN.
-   **USB**: portable and offline. Harder to audit.
-   **Cloud**: simple to start. Requires continuous internet access.

## See also

-   [Server Admin settings](/sample/reference/server-admin.md)
-   [No seats available](/sample/troubleshooting/no-seats.md)
