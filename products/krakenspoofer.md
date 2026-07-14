# Kraken Spoofer

**Category:** Products

## Setup

| Setting | Value |
|---------|-------|
| TPM | N/A |
| Secure Boot | N/A |
| Virtualization | ON |
| Defender | OFF |
| Firewall | OFF |
| Exploit Protection | OFF |

## Windows Compatibility

- ALL Windows versions

## Requirements

- UEFI BIOS
- Visuals installed (*visual)
- Core Isolation off
- *defendercontrol

## Errors & Fixes

| Error | Fix |
|-------|-----|
| No Hardware Virtualization Capabilities Found | Enable virtualization in BIOS/UEFI (VTx/VTd Intel / SVM AMD). |
| Hyper-V is enabled | Windows Hyper-V is running. Go to "Turn Windows Features On or Off" and disable it. |
| Loader stuck at 11% | In PowerShell as admin:<br><code>Get-Volume \| Where-Object DriveLetter \| ForEach-Object { $drive = $_.DriveLetter; chkdsk "$drive`:" /F }</code><br>Restart PC with all anti-cheats & anti-virus disabled. |

