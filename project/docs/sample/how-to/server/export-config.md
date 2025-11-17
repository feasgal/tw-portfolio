# Export a client configuration file

When your server is **private** (discovery disabled) or clients connect across VPNs/subnets, the fastest, least-error-prone way to onboard users is a **client configuration file**. It packages the connection details your users need, so they can import once in the Hub and connect without typing addresses or ports.

Use this when you want predictable, repeatable client setup, especially in labs or managed environments.

!!! goal

    Create a file clients can import to connect to your private server.

## Before you start

Confirm the server shows **Online** in Server Admin and you have the current **access password**.

## Steps

1. Open **Server Admin** on the server host.
2. Go to **Client access** or **Connections**.
3. Select **Export client configuration**.
4. Save the file and share it securely with users.

!!! outcome

    Clients can import the file in Acme License Hub and connect without discovery or manual addressing.

## See also

- Client setup: [Add a private server with a config file](/sample/how-to/client/add-with-config.md)
- Server admin: [Make the server private](/sample/how-to/server/private-server.md)
