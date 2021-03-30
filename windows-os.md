# Setting up the Windows Subsystem for Linux

## What is Windows Subsystem for Linux (WSL)

"The Windows Subsystem for Linux lets developers run a GNU/Linux environment -- including most command line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup." - [Microsoft](https://docs.microsoft.com/en-us/windows/wsl/about)

It is a feature of Windows 10 that enables you to run native Linux command-line tools directly on Windows, alongside your traditional Windows desktop and apps. Using WSL requires fewer resources (CPU, memory, and storage) than a full virtual machine or dualboot setup.

## Why would I use WSL instead of just natively developing on Windows?
Some cross-platform tools were built assuming that the environment in which they run behaves like Linux. The Node.js runtime runtime environment is actually ported to, and runs well on, Windows. However, not all of the libraries are ported over to support Windows and many of them have Linux-specific dependencies.

Being comfortable with common Linux command-line tools is an expected skill for any software engineer. A lot of the resources and documentation found online is also written with a Linux-environment in mind, so not having to translate Linux commands to their Windows equivalents is one less thing to think about when learning the curriculum material.

