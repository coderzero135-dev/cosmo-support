# Vortex

**Category:** Products

## Setup

| Setting | Value |
|---------|-------|
| TPM | N/A · ON for games that require it |
| Secure Boot | OFF |
| Virtualization | ON |
| Defender | OFF |
| Firewall | OFF |
| Exploit Protection | OFF |

## Windows Compatibility

- ALL Windows versions

## Requirements

- *visual for all visuals
- Hyper-V enabled in Windows Features
- BIOS UEFI & Disks GPT
- All antivirus uninstalled (VGK, FaceIT, McAfee, etc.)
- Core Isolation disabled

## Errors & Fixes

| Error | Fix |
|-------|-----|
| InitWindows Error | Press F2 for injector ONLY after you see Discord overlay banner. Do NOT be in a Discord call. Have legacy overlay disabled. |
| LoadHyperVisor Error | Hypervisor not loaded properly. Follow this <a href="https://youtu.be/XYVeHy5u4j4" target="_blank">video guide</a>. |
| Error: Craft UEFI | Make a partition (GPT) in Disk Management and boot from there. If not working, reinstall Windows. |
| Blackscreen Initialization | Disable TPM and re-check all setup for HyperVisor use. |
| Bad Image Libs | From the loader folder, copy <code>libcrypto-1_1-x64.dll</code> and <code>libssl-1_1-x64.dll</code> into <code>C:\Windows\System32</code> and <code>C:\Windows\INF</code> |
| Secure Boot bypass Valorant fix | <a href="https://gofile.io/d/JPNqIp" target="_blank">Download fix</a>.<br>1. Drop <code>WBCL.dat</code> in <code>C:\Windows\System32</code><br>2. Run <code>Start.exe</code> as admin<br>3. Run <code>Secure Boot Fix.bat</code> |
| Unsupported 16-Bit Application | Screenshot of disabled Defender (Real-time Protection). Third-party AV must be removed. Disable firewall completely. Delete YouTube/Discord bypassing tools. Use VPN for launching. |

## Variants

- **BO6/WZ**
- **Fortnite**
- **Rust**
- **PUBG**
- **Apex**
- **DBD**
- **DayZ**
- **Valorant**
- **Marvel Rivals**
- **Arena Breakout**
- **Squad**
- **Hunt: Showdown**
- **SCUM**
- **Warface**

