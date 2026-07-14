# VOLT

**Category:** Products

## Setup

| Setting | Value |
|---------|-------|
| TPM | OFF |
| Secure Boot | OFF |
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
- *pin removed for TPM
- HVIX & HVAX in System32 (usually only removed if user used Kane before)

## Errors & Fixes

| Error | Fix |
|-------|-----|
| Framework error | Install .NET 7.0.5 Runtime:<br><a href="https://builds.dotnet.microsoft.com/dotnet/Runtime/7.0.5/dotnet-runtime-7.0.5-win-x64.exe" target="_blank">x64</a> · <a href="https://builds.dotnet.microsoft.com/dotnet/Runtime/7.0.5/dotnet-runtime-7.0.5-win-x86.exe" target="_blank">x86</a> |
| No ESP — DayZ & EFT | DayZ: Settings → Video → disable Postprocess Antialiasing & Hardware Antialiasing.<br>EFT: Settings → Game → disable "Autoclean RAM". |
| Keybinds for Rust Lite | F5 = ESP · F6 = No Recoil · F9 = Remove Walls |
| Legacy BIOS / Boot part not GPT | <a href="https://youtu.be/a54sqzcDrUU?si=Lj2PE-bUK2bLBMEg" target="_blank">YouTube guide</a> |
| Errors requiring Windows reinstall | Error 1, 3, 4, 5, 6, 7 (all related to boot partitions). |
| HVIX / HVAX not found | Run <code>sfc /scannow</code> in CMD as admin. |

## Variants

- **Rust Full/Lite**
- **EFT**
- **DBD**
- **DayZ**

