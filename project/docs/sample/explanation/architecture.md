# Individual use

This page explains how Acme licensing works for a single user.

## What this system is for

**Acme License Hub** allows you to run software protected by Acme. You redeem entitlements to your account and activate them to a location your machine can reach. This allows you to run protected apps, which verify the license via the installed **Acme License Engine**.

## Components

**Acme License Hub**  

:    Desktop app for signing in, redeeming, activating/deactivating, and viewing license state.

**Acme License Engine**  

:    The runtime installed on your machine that licensed apps use to check entitlements.

**Locations**  

:    Where an active seat lives:

     - **Acme dongle**: hardware you control, attached by USB.
     - **Acme Cloud**: a session you open in Hub; available while signed in.

**License → activations**  
:    A license may allow more than one activation. This allows more than one machine at a time to launch the software.


## Choosing a location

| Primary need                       | Recommended location   | Why                                                    |
| ---------------------------------- | ---------------------- | ------------------------------------------------------ |
| Portable and offline               | **Local Acme dongle**  | Works without internet; easy to move between machines. |
| Always-online and minimal hardware | **Acme License Cloud** | No USB key; sign in where you work.                    |

There is no single “best” option; pick based on where you spend most of your time.

## Boundaries and failure domains

Think in layers when something fails:

1. **Location presence**: Is the dongle connected, or is the Cloud session open?
1. **Reachability**: Does the Engine see that location (USB recognized, internet up)?
1. **Eligibility**: Is the license Cloud-enabled or intended for dongle use?

## Security and privacy

Entitlements remain in a protected location (dongle or Cloud). Apps receive an authorization, not raw secrets. Your sign-in controls access to Cloud; physical custody and account sign-in control access to a dongle.

## Related reading

* Individual tasks: [Redeem an activation code](../how-to/licenses/redeem.md), [Activate a license](../how-to/licenses/activate.md), [Deactivate a license](../how-to/licenses/deactivate.md)
* Cloud use: [Start or end a Cloud session](../how-to/licenses/session.md)
* Hardware care: [Repair an Acme dongle](../how-to/licenses/repair.md)


