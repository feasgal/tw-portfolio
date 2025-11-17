# Set up your first Acme license server

**Time:** ~15 minutes  

!!! example "What you'll accomplish"

    A single **Acme License server** on a LAN with one client leasing a seat from an **Acme dongle** attached to the server host.


!!! checklist "You need"
    - Admin rights on both machines
    - Stable LAN (wired preferred)
    - Windows or macOS host for the server that stays powered on
    - **Acme License Engine** and **Acme License Hub** installed on the server host
    - **Acme dongle** plugged into the server host (avoid multiport USB adapters)
    - One license with sharable seats in your account

## Step 1: Start and name the server

1. On the server host, open **Server Admin**.
2. Give the server a unique name.
3. Set a strong **access password** and save.

**The server is now identified and protected.**

## Step 2: Enable discovery for the first run

1. In **Server Admin → Discovery**, set **Public** (advertise on LAN).
2. Apply changes.

**The server is now visible on the LAN.**

## Step 3: Activate seats to the server’s dongle

!!! warning inline end

    For server leasing, seats must be activated to the **Acme dongle** attached to the server host—not to another location.

1. Ensure the **Acme dongle** is connected directly to the server host.
2. On the server host, open **Acme License Hub** and sign in.
3. Find your license under **Available**.
4. Choose **Activate** and target the dongle.
5. Wait for activation to complete.

**License seats are now present on the server’s dongle.**

## Step 4: Verify status

1. In **Server Admin**, open **Status** or **Statistics** and confirm **Online**.
2. In **Acme License Hub** on the server host, confirm the license appears on the **Acme dongle**.

## Step 5: Connect a client on the same subnet

1. On a client machine, open **Acme License Hub** → **Servers**.
2. Under **Discovered**, select your server and click **Connect**.
3. Enter the access password if prompted.
4. Confirm that the server entry shows **Connected**.

## Step 6: Prove a lease

1. On the client, launch a protected app.
2. In **Server Admin → Statistics**, confirm **1 active lease**.

!!! success

     The app launches without errors, and the server shows an active lease while the app runs.

## Troubleshooting

- Server not listed under **Discovered** → see [Server not discovered](/sample/troubleshooting/discovery.md).
- Client connects but no seats → seats may be on the wrong location. Ensure activation targeted the **Acme dongle** on the server host. See [No seats available](/sample/troubleshooting/no-seats.md).
- Connection blocked → see [Firewalls](/sample/troubleshooting/firewalls.md).

## Next steps

- [Export a client configuration file](/sample/how-to/server/export-config.md)
- [Make the server private](/sample/how-to/server/private-server.md)
- [Require client identity](/sample/how-to/server/require-identity.md)
