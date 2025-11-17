# Add a private server by IP address

When discovery is disabled or you’re connecting across VPNs/subnets, add the server directly by address. Use this when you can’t use a configuration file or need to target a specific host and port.

!!! goal

    Connect to a private server by entering its IP/hostname and port in Acme License Hub.

## Before you start

Confirm you have the server’s IP or hostname, the TCP port if your admin specifies one, and the access password if required. Make sure the client can reach the server over the network (same LAN or a routed/VPN path).

## Steps

1. Open **Acme License Hub** on the client.
2. Go to **Servers** → **Add** → **By address**.
3. Enter the **IP/hostname** and **port** (if provided).
1. Save and and confirm the new entry under **Private**.
4. Select the server and click **Connect**.
5. Enter the access password if prompted.

!!! outcome

    The server appears under **Private** and shows **Connected** without LAN discovery. You can launch protected software on the client machine without licensing errors.

## See also

- [Add a private server with a config file](/sample/how-to/client/add-with-config.md)
- [Make the server private](/sample/how-to/server/private-server.md)
- [VPN and subnets](/sample/troubleshooting/vpn.md)
- [Firewalls](/sample/troubleshooting/firewalls.md)
