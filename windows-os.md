# Setting up the Windows Subsystem for Linux

## What is the Windows Subsystem for Linux (WSL)?

"The Windows Subsystem for Linux lets developers run a GNU/Linux environment -- including most command line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup." - [Microsoft](https://docs.microsoft.com/en-us/windows/wsl/about)

It is a feature of Windows 10 that enables you to run native Linux command-line tools directly on Windows, alongside your traditional Windows desktop and apps. Using WSL requires fewer resources (CPU, memory, and storage) than a full virtual machine or dualboot setup.

## Why would I use WSL instead of just natively developing on Windows?
Some cross-platform tools were built assuming that the environment in which they run behaves like Linux. The Node.js runtime runtime environment is actually ported to, and runs well on, Windows. However, not all of the libraries are ported over to support Windows and many of them have Linux-specific dependencies.

Being comfortable with common Linux command-line tools is an expected skill for any software engineer. A lot of the resources and documentation found online is also written with a Linux-environment in mind, so not having to translate Linux commands to their Windows equivalents is one less thing to think about when learning the curriculum material.

---

## Instructions
Note that these instructions are adapted from the [manual installation steps](https://docs.microsoft.com/en-us/windows/wsl/install-win10#manual-installation-steps) via Microsoft's documentation.

### 1. Ensure that your machine is running Windows 10, updated to **Version 2004**, **Build 18362** or higher. These instructions also assume your machine is running with an Intel or AMD CPU (**not** ARM-based).
### 2. Enable the "Windows Subsystem for Linux" optional feature.
   1. Click the Start Menu, search for PowerShell, and Run as Administrator. A terminal window should open up.

   2. Copy this command, paste it into PowerShell, and run it.
   ```
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   ```

### 3. Enable Virtual Machine feature
   1. You should still have the PowerShell terminal window open. If not, refer to the instructions above and ensure that you Run as Administrator.

   2. Copy this command, paste it into PowerShell, and run it.
   ```
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```
   
   3. Restart your machine.
   
   4. _Important!_ Your machine will require virtualization features in order to enable the Virtual Machine feature on Windows. If you encounter an error [similar to this one](https://docs.microsoft.com/en-us/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed), you will need to enable virtualization in your computer's BIOS. The process for doing this will vary from machine to machine, so you may need to do some additional research. Here is [an example](https://www.bleepingcomputer.com/tutorials/how-to-enable-cpu-virtualization-in-your-computer-bios/) of what you might have to do. Searching on Google for "Enable CPU virtualization in BIOS" and your computer's make and model may also prove to be helpful. **When making any changes to a computer's BIOS settings, please follow the directions extremely carefully! Do not change any other settings unless you know exactly what they do.**

### 4. Download the Linux kernel update package
   1. Download the latest package [here](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi). If you prefer, you can find that link directly from Microsoft's [site](https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package).
   
   2. Run the update package in the previous step. Double click to run - you will be prompted for elevated permission, select 'yes' to approve this installation.
   
### 5. Set WSL 2 as your default version
   1. Open PowerShell (no need to Run as Administrator)
   
   2. Copy this command, paste it into PowerShell, and run it.
   ```
   wsl --set-default-version 2
   ```