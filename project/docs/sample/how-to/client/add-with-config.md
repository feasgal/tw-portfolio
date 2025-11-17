# Add a private server with a config file

For private servers, the simplest and most reliable onboarding is importing a configuration file from your administrator. It avoids typos and locks in the correct settings.

!!! goal

    Import a client configuration file so the Hub can connect to a private server.

## Before you start

Get the configuration file from your administrator and, if required, the access password. Ensure the client machine can reach the server over the network (LAN or routed/VPN path).

## Steps

1. Open **Acme License Hub** on the client.
1. Go to **Servers** → **Add** → **Import configuration**.
1. Select the file from your administrator and confirm the new entry under **Private**.
1. Select the server and click **Connect**.
1. Enter the access password if prompted.

!!! outcome

    The server appears under **Private** and shows **Connected** without LAN discovery. You can launch protected software on the client machine without licensing errors.

## See also

- [Export a client configuration file](/sample/how-to/server/export-config.md)
- [Make the server private](/sample/how-to/server/private-server.md)
- [VPN and subnets](/sample/troubleshooting/vpn.md)
- [Firewalls](/sample/troubleshooting/firewalls.md)
