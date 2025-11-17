# Require client identity

Capture who is using seats by requiring each client to present an identity at connection time. Use this for auditing, per-user limits, or when you need accountability in shared labs.

!!! goal

    Enforce client identity collection during connection for auditing and control.

## Before you start

Sign in to **Server Admin** with admin rights. Decide which identity you’ll require—**username**, **machine name**, or **both**—and how you’ll communicate that requirement to users (for example, in onboarding notes or a config file).

## Steps

1. Open **Server Admin**.
2. Go to **Access control** or **Identity**.
3. Enable **Require client identity**.
4. Choose the identity source (**username**, **machine name**, or **both**).
5. Apply changes.

!!! outcome

    Clients must present identity during connection; identities appear in statistics and logs for auditing.

## See also

- [View server statistics](/sample/how-to/server/stats.md)
- [Require a server password](/sample/how-to/server/require-password.md)
