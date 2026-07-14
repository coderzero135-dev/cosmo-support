# Cosmo (Naxo)

**Category:** Cosmo

## Setup

| Setting | Value |
|---------|-------|
| TPM | N/A |
| Secure Boot | OFF |
| Virtualization | OFF |
| Defender | OFF |
| Firewall | OFF |
| Exploit Protection | OFF |

## Windows Compatibility

- Apex, EFT, Rust — ALL versions
- DayZ — 25h2 & 24h2 NOT supported

## Requirements

- UEFI BIOS
- Visuals installed (*visual)
- Core Isolation off
- Fastboot disabled in BIOS & Windows

## Errors & Fixes

| Error | Fix |
|-------|-----|
| Hyper-V error | Use the <code>*cosmohyperv</code> command. |
| Fastboot / Hiberboot | Open cmd as admin and run:<br><code>reg add "HKLM\System\CurrentControlSet\Control\Session Manager\Power" /v "HiberbootEnabled" /t REG_DWORD /d "1" /f</code><br>Then run <code>powercfg -h on</code><br>Then: Control Panel → Hardware and Sound → Change What Power Buttons Do → Turn Off Fast Start Up. |
| Mapping driver failed | Add the file to <code>C:\Windows\System32\drivers</code> then restart PC.<br><a href="https://mega.nz/file/TB1A0bbZ#oLP83kATOQzucyzfaHrtAE4-JD5-U3OblZ1VnzXVwDY" target="_blank">Download file</a> |
| Driver does not seem to be running — contact support | Open <code>Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management</code> and remove <code>LargePageDrivers</code>. Then check <code>C:\Windows\System32\drivers</code> and delete PMAD again. |

## Note

Can't fix the issue? @Senior Support — use the <code>*naxoticket</code> command to add Naxo.

## Variants

- **Spoofer**
- **Apex**
- **Rust**
- **EFT**
- **Battlefront 2**
- **Left 4 Dead 2**
- **Team Fortress 2**
- **Minecraft**
- **Among Us**

