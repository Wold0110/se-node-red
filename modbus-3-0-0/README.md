# 1. Overview

The SE Modbus Tag node is an evolution of the SE Modbus Basic node. SE Modbus node V3.0.0 is a package of three nodes namely SE Modbus Read, SE Modbus Write and SE Modbus Tag node.

  1. SE Modbus Read node: This node is used to read the data from modbus devices using modbus
  TCP or modbus Serial communication protocol.
  2. SE Modbus Write node: This node is used to write the data to modbus devices using the
  modbus TCP or modbus serial communication protocol.
  3. SE Modbus Tag node: This node can import tags that are exported from EcoStruxure Control
  Expert or any other PLC configuration software to perform a read/write operation


The output of SE Modbus nodes is in Common Message Structure format.

Henceforth, we will refer this package as SE Modbus nodes in the document.


## Package Content

| Component | Version |
|:-----------:|:---------:|
| se-node-red-modbus | 3.0.0 |


# 2. Features


## General :
* Node Configuration
* Common Message Structure
* Schneider Look & Feel
* Logging
* Context Monitoring Use case
* EULA & Node Licenses
* User Manuals
* Supported Hardware : HMIBSC (v011 image)
* Node Installation modes – Online and Offline Installation

## Modbus Node v3.0.0 Features:

* Import xsy file, xml file and csv file to read/write tags
* Configure tag names
* Support for additional five data types : UINT, WORD, DINT, UDINT, DWORD
* Supported Hardware : HMI BMP (Standard Image)

# 3. Operating System

This app can be installed on the following platforms with the version of NodeJS: 10.15.3 and Node-Red 0.20.7

* Microsoft Windows 10
* Linux Yocto (V1.00.010 and above)

# 4. Hardware Requirements

* Magelis HMIBMP Reference HMIBMPHI74D4801 HMIBMP with 4 expansion
slots, Intel Core i7
* Magelis HMIBSC Reference HMIBSCEA53D1L0T HMIBSC with ARM, Linux Yocto

# 5. Software Requirements

Observe these minimum software requirements for functioning of the SE Modbus node:

* Node.js V10.15.3
* Node-RED server V0.20.7
* Npm (Node package manager) V6.4.1
* Node-RED application is supported in any browser with V8 engine or similar (for instance- Google Chrome V73.0 and Firefox V66.0)

NOTE: The software versions mentioned above support the SE Nodes installation. Other versions do not support it. 


# 6. Installation

## 6.1 Windows Installation

### Prerequisite

1. Node.js and Node-RED
    * Install Node.js v10.15.3. It can be downloaded from below link <br/> [https://nodejs.org/en/](https://nodejs.org/en/) 
  
2. Install Node-RED
    * Run "npm install -g node-red" command on command prompt to install Node-RED.

3. Python v2.7 should be installed(make sure you set environment variable for python27).

4. After installing Python, please run batch file as Administrator. Download batch file from below link 
    [http://wain05400.apa.gad.schneider-electric.com:81/wiki/index.php/File:Pre_modbus_serial_lib.bat](http://wain05400.apa.gad.schneider-electric.com:81/wiki/index.php/File:Pre_modbus_serial_lib.bat)

    During running the batch file command prompt will be launched where the following information need to be entered

    Is proxy used (yes/no)? yes
    Proxy details: http://gateway.schneider.zscaler.net:9480/ (Schneider Electric India proxy)

    For Schneider Electric proxy across the world, refer the link below:

    [http://wain05400.apa.gad.schneider-electric.com:81/wiki/index.php/%28Proxy_List%29](http://wain05400.apa.gad.schneider-electric.com:81/wiki/index.php/%28Proxy_List%29)

### **Online installation**

Installation of SE Modbus node through Schneider Electric Repository

Run below commands

```sh
npm set registry https://wain05400.apa.gad.schneider-electric.com:4878/
npm config rm proxy
npm config rm http-proxy
npm config rm https-proxy
cd .node-red
npm install se-node-red-modbus
```

### **Offline installation**

* Download the Modbus_V3.0.0_Offline.zip file from the below link
<br/> [https://schneider-electric.box.com/s/xsmgvjhjo4km8jwlsn8qyprgb0gy8bv6](https://schneider-electric.box.com/s/xsmgvjhjo4km8jwlsn8qyprgb0gy8bv6)

* Unzip the Modbus_V3.0.0_Offline.zip file into folder

    Run the below batch file
    ```sh
    se-node-red-modbus_offline_install.bat
    ```

    **NOTE: The node package is saved in the User directory**
    
    (for example: \<User Directory\>/se-node-red-modbus/)

* After installation restart the Node-RED server

## 6.2 Linux Installation
The Linux based Edge Boxes (for example, HMIBSC) have in-built Node-RED-as-a-Service. This means Node.js, Node-Red and python are pre-installed in the OS image.

### **Online installation**

Installation of SE Modbus node through Schneider Electric Repository

Run below commands

```sh
    npm set registry https://wain05400.apa.gad.schneider-electric.com:4878/
    npm config rm proxy
    npm config rm http-proxy
    npm config rm https-proxy
    cd .node-red
    npm install se-node-red-modbus
```

### **Offline installation**

* Download the Modbus_V3.0.0_Offline.zip file from the below link
</br>[https://schneider-electric.box.com/s/xsmgvjhjo4km8jwlsn8qyprgb0gy8bv6](https://schneider-electric.box.com/s/xsmgvjhjo4km8jwlsn8qyprgb0gy8bv6)
* Unzip the Modbus_V3.0.0_Offline.zip file into folder

    Run below command
    ```sh
        sh se-node-red-modbus_offline_install.sh
    ```

    **NOTE: The node package is saved in the User directory** (for example: \<User Directory\>/se-node-red-modbus/)
* After installation restart the Node-RED server

# 7. Uninstallation

## 7.1 Windows Uninstallation

### Online uninstallation

If SE Modbus Node is installed using online installation process, below is the process to uninstall

* Delete the nodes from the flow
* Run the below command to uninstall
    ```sh
        cd .node-red
        npm uninstall se-node-red-modbus
    ```

### Offline uninstallation

If SE Modbus Node is installed using offline installation process, below is the process to uninstall

* Delete the nodes from the flow
* For offline uninstallation process 'se-node-red-modbus_offline_uninstall' file is required
and the 'se-node-red-modbus_offline_uninstall' file will be available in the User directory

    ( for example: \<User Directory\>)

    Run the below batch file
    ```sh
        se-node-red-modbus_offline_uninstall.bat
    ```

* After uninstallation restart the Node-RED server

## 7.2 Linux Uninstallation

### Online uninstallation

If SE Modbus Node is installed using online installation process, below is the process to uninstall

* Delete the nodes from the flow
* Run the below command to uninstall
    ```sh
        cd .node-red
        npm uninstall se-node-red-modbus
    ```

### Offline uninstallation

If SE Modbus Node is installed using offline installation process, below is the process to uninstall

* Delete the nodes from the flow
* For offline uninstallation process 'se-node-red-modbus_offline_uninstall' file is required
and the 'se-node-red-modbus_offline_uninstall' file will be available in the User directory

    ( for example: \<User Directory\>)

    Run below command
    ```sh
        sh se-node-red-modbus_offline_uninstall.sh
    ```

* After uninstallation restart the Node-RED server

# 8. Help Manual

* SE Modbus node user manual can be downloaded using the Help Icon in the top right menu.

# 9. License

* SE Modbus node is available under Schneider Electric license.
* The license file can be downloaded using the License Icon in the top right menu

# 10. Information

* Supported Language is English only.
* Node-RED Editor Debug window shows maximum 1000 register values only.
* When user wants to write Boolean data from inject node and provides value array other than 0 and 1 if the PLC is accepting the values other than 0 and 1 as a Boolean type then modbus write will be successful
* When you launch a Node-RED server, it takes time to get started, in order to avoid this refer to Commissioning of Node-RED procedure (TechPub Document page 51- steps 11 to 14).

# 11. Limitations

SE Modbus nodes have the following limitations:
1. Node-RED application is supported in any browser with V8 engine or similar (for example: Google chrome V73.0, Firefox V66.0)
2. Node-RED web page is only available in English, irrespective of the system language.
3. Modbus protocol limitations to read data from a modbus device are as follows:
    *  Read Coil Status: 2000
    *  Read Input Status: 2000
    *  Read Holding Registers: 125
    *  Read Input Registers: 125
4. Modbus protocol limitations to write data from a modbus device are as follows:
    *  Force Single Coil: 1
    *  Preset Single Register: 1
    *  Force Multiple Coils: 1968
    *  Preset Multiple Registers: 123
5. When the user wants to do the offline installation, the internet should be disabled. It takes longer to install if the internet is enabled.
6. For optimum performance, in one Edge Box, consider deploying 4 SE Modbus Read nodes (with maximum 125 holding registers) along with publishing nodes. In this scenario, 4 SE Modbus Read nodes will enable overall 500 tags to be read.
7. SE Modbus Tag node can import maximum of 500 tags to be read. For optimum performance, in one Edge Box, consider deploying 4 SE Modbus Tag nodes with maximum 500 tags configured per node.
8. SE Modbus node supports 8 data types which are INT, UINT, WORD, REAL, DINT, UDINT, DWORD and BOOLEAN. Other data types are not supported.
9. Modbus Serial communication with BSC Box could not be established using USB to serial converter cable (TCSMCNAM3M002P) due to unavailability of driver for Linux platform.


# 12. Known Issues

* Modbus TCP communication with M340 PLC device has connection issue with BSC Box (Linux kernel Environment) in the following cases
    1. Two different Node-RED Servers(running in two boxes) try to access the same M340
    2. One Node-RED Server(running in one box) tries to access any other TCP device along with one M340
* Performance degradation may occur when  node usage is not per the performance  model mentioned in the Section 11(Limitation 6 and 7).  This may  be improved  once  the mitigation is put in place with upgraded version of node modbus-serial v8.0.0. Next release version of the node will include a patch fix to upgrade certain libraries.
