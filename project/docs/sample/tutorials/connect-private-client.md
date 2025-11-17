# Connect a client to a private server

**Time:** ~10 minutes  

!!! example "What you'll accomplish"

    A client connected to a **private** Acme license server using a configuration file (recommended for first-time setup).

!!! checklist "You need"
    - Acme License Hub installed on the client
    - A client configuration file from your admin
    - The server’s access password (if required)
    - Network reachability to the server (same LAN or routed/VPN)

## Step 1: Get server details

1. Obtain the **client configuration file** from your admin.  
2. Ensure the server is **Online** (ask your admin if unsure).

## Step 2: Import the configuration (recommended)

1. Open **Acme License Hub** on the client.
2. Go to **Servers** → **Add** → **Import configuration**.
3. Select the file from your admin.

**The server entry now appears under Private.**

## Step 3: Connect

1. Select the server under **Private** and click **Connect**.
2. Enter the access password if prompted.

**The server entry now shows Connected.**

## Step 4: Prove access

1. Launch a protected app on the client.
2. Confirm the app starts without a license error.

!!! success

    The app runs and the server remains **Connected** in the Hub.

## Troubleshooting

- Cannot connect or times out → check routes/VPN and open paths. See **[VPN and subnets](/sample/troubleshooting/vpn.md)** and **[Firewalls](/sample/troubleshooting/firewalls.md)**.
- Server entry missing after import → the file is invalid or stale. Ask your admin for a fresh configuration.
- Password prompt fails → confirm the current access password with your admin.

## Next steps

- **How-to** → [Export a client configuration file](/sample/how-to/server/export-config.md)
- **How-to** → [Add a private server by IP address](/sample/how-to/client/add-by-ip.md)
