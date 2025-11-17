# License server

This page explains how Acme’s server feature enables a shared pool of seats for many users.

## What this adds to the individual model

Shared licensing layers a **server** on top of individual components. Seats live on an Acme dongle you control, but clients obtain **leases** over the network.

Key constraint: for shared use, seats must be on an **Acme dongle attached to the server host**. Clients lease from that server across the LAN/VPN.

## Components

**Server**  

:    Mediates clients and seats, enforces access policy, tracks leases and denials.

**Server’s Acme dongle**  

:    Holds the seats to be shared. Physical control of this device is part of the security model.

**Clients**  

:    Workstations running protected apps. They connect to the server and request leases.

**Lease**

:    Time-bound record that links a specific seat to that client.

**Acme License Hub**  

:    Used by administrators and users to view state and connect clients to servers.

## Connection models

How clients **find** the server is a separate concern from how licenses are enforced.

In pilot scenarios on a single subnet, **Public** discovery minimizes setup and reduces addressing errors. In production (especially in managed networks, multi-subnet, or VPN environments), **Private** connections provide tighter change control and predictable onboarding.

**Public (discoverable)**  
The server advertises on the local subnet. Clients select it from **Discovered**.  
Pros: minimal client setup; reduces input errors on a single subnet.  
Cons: limited to the local subnet; broader visibility on the LAN.

**Private**  
No LAN announcement. Clients import a configuration file or enter the server address/port.  
Pros: works across subnets/VPNs; predictable onboarding; clearer access boundaries.  
Cons: requires distribution of the config/address; slightly more setup effort.

Discovery affects **findability only**. Authorization still depends on password, identity, and seat availability.

## Server lease lifecycle

When a protected app launches on a client, the licensing runtime contacts the server and asks for authorization. The request identifies the product and the client; the server evaluates current seat availability and policy (access password, client identity, per-client limits). If the checks pass, the server issues a lease to that client.

While the app runs, the client renews its lease at intervals. Renewals are lightweight and tolerate brief network hiccups. A normal app exit releases the lease immediately. After crashes or power loss, the server reclaims the seat when the lease timeout elapses.

Denials map to clear categories:  

- **Inventory**: all seats are in use.  
- **Policy**: per-client limits or schedules block the request.  
- **Authentication/identity**: password missing/invalid or required identity not provided.  
- **Eligibility**: the product/version isn't permitted for server leasing.  
- **Topology**: the initial request succeeds but renewals can't round-trip due to routing, VPN, or firewall rules.

This lifecycle keeps license secrets in the server’s location (the attached dongle) and exposes only short-lived authorization to clients, enabling central control and audit without distributing licenses to endpoints.

## Identity, access, and audit

Identity, access, and audit sit above the licensing flows and describe who may connect and how usage is attributed.

An access password is the first gate: clients that know it can present themselves; others are rejected before any license logic runs. If the server requires client identity (typically a username, a machine name, or both), that identity is attached to each connection and lease, turning anonymous consumption into attributable activity. After admission, the server evaluates availability and per-client limits, issuing a time-bound lease or recording a denial with a reason. Audit is the record of these events (connections, leases, renewals, releases, denials), summarized into trends and peaks for planning and compliance. The trade-off is a small prompt at connection time in exchange for clear accountability and capacity signals.

Discovery (public or private) only affects how clients find the server; admission and attribution are controlled here.

## Network boundaries

Licensing relies on three layers: basic IP reachability to the server, the application TCP port used for authorization, and optional multicast DNS for public discovery. Public discovery is limited to a single subnet or VLAN. Private connections don't use broadcast and work across routed networks and VPNs.

If the server’s TCP port is blocked by firewall settings, clients may see the server but can't obtain leases. If multicast DNS is blocked, the **Discovered** list stays empty even though direct connections can succeed.

On VPNs, split tunneling, policy-based routing, or overlapping address space can interrupt lease renewals. Renewals are small and periodic, but persistent loss or jitter causes clients to drop and reconnect.

A compact way to reason about failures: confirm reachability first (routes, VPN, firewall), then admission policy (password, identity), then availability (seats, limits).

## Capacity and planning

Seats define concurrency. A pool of N seats allows up to N active leases at once. But demand is spiky, so planning focuses on peak simultaneous use rather than headcount or averages.

Server statistics help you plan by showing concurrent clients, denials, and time-of-day patterns. If denials cluster at peak times, you have two levers:

-   Increase capacity by adding seats.
-   Reduce peak demand with policy such as per-client caps, schedules, or faster seat recycling.

The right balance depends on cost, user impact, and how predictable your workload is.

## When a server fits

A server fits when many people share the same products and you need central control, attribution, and predictable allocation. It assumes a stable LAN or a well-managed VPN, and seats stored on the server host’s dongle so clients can lease across the network. This model favors labs, classrooms, and studios that plan around peak concurrency and want audit trails.

## When individual licensing fits

Individual licensing fits when work is mostly solo or mobile, or when connectivity is unreliable. A local dongle favors offline use and portability. A Cloud session favors always-online machines with minimal setup. Both avoid running a server and reduce operational overhead.

## Related reading

- Server concepts and controls: [Server Admin settings](../reference/server-admin.md)  
- Client connection options: [Add a private server with a config file](../how-to/client/add-with-config.md), [Add a private server by IP address](../how-to/client/add-by-ip.md), [Auto-connect to a public server](../how-to/client/auto-connect.md)  
- Network troubleshooting: [Server not discovered](../troubleshooting/discovery.md), [VPN and subnets](../troubleshooting/vpn.md), [Firewalls](../troubleshooting/firewalls.md)  
- Operations: [Make the server private](../how-to/server/private-server.md), [Export a client configuration file](../how-to/server/export-config.md), [View server statistics](../how-to/server/stats.md)
