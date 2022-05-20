<b>1. Overview</b>

SE Harmony Hub node is a data collecting node using Modbus communication protocol (TCP or
Serial). SE Harmony Hub node is connected to the Harmony Hub gateway which retrieves
sensors data which are commissioned and connected wirelessly to the gateway. SE Harmony Hub
Node extracts the sensors data from the gateway and displays it on the web page to monitor the
latest data at the specified time intervals. The data from sensors will be in Common Message
Structure (CMS) format

<b>Package Content</b>

| Component	| Version |
|:-----------:|:---------:|
| se-node-red-harmony_hub	| 1.0.0 |

<b>2. Features </b>

V1.0.0 :

* Node Configuration
* Harmony Hub Webpage – Pairing Sensors & Diagnosis
* Common Message Structure
* Schneider Look & Feel
* Logging

<b>3. Operating System</b>

This application can be installed on the following platforms with the version of NodeJS: 10.15.3 and Node-Red 0.20.7
* Windows 10 (Standard Image-HMIBMP)

<b>4. Hardware Requirements</b>

* Magelis HMIBMP Reference HMIBMPHI74D4801 HMIBMP with 4 expansion slots, i7, 8GB, 500 GB HDD 

<b>5. Software Requirements</b>

Observe these minimum software requirements for functioning of the SE Harmony Hub node:

*  Node.js V10.15.3
*  Node-RED server V0.20.7
*  Npm (Node package manager) V6.4.1
*  Python V2.7 (online installation mode only)
*  Node-RED application is supported in any browser with V8 engine or similar (for instance- Google Chrome V73.0 and Firefox V66.0) 

NOTE: The software versions mentioned above support the SE Nodes installation. Other versions
do not support it.

<b>6. Installation</b>

Prerequisites for SE Harmony Hub node installation:

* Installation of Supported Node.js version

    1.	Download the Windows installer from the Nodes.js® web site. </br><a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a>
    2.	Run the installer (the .msi file you downloaded in the previous step.)
    3.	Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
    4.  Restart your computer. You won’t be able to run Node.js® until you restart your computer.


* Installation of Supported Node-RED version
    1.	Check out http://nodered.org/docs/getting-started/ for full instructions on getting started. 
    2.	In Schneider network, set the registry to https://registry.npmjs.org/ by executing below npm command.
    ```sh
        npm config set registry https://registry.npmjs.org/
    ```

    3. Set Proxy
        
    Set the proxy to your network proxy (e.g. https://yourproxy:xxxx/) by executing below npm command.
    ```sh
        npm config set proxy http://gateway.schneider.zscaler.net:9480/
    ```

    For Schneider Electric proxy across the world, refer the link below:

    http://wain05400.apa.gad.schneider-electric.com:81/wiki/index.php/%28Proxy_List%29

Make sure the registry and proxy are configured

Run below npm command to install Node-RED

```sh
    npm install -g --unsafe-perm node-red@0.20.7
    node-red
```

<b>Installation of SE Harmony Hub node through Schneider Electric Repository (Windows system only)</b>

* At present, online installation is possible only inside Schneider Electric corporate network.
* Installation of the nodes through NPM repository while inside Schneider Electric corporate network requires the following batch file to be run to handle the installation of the dependencies for SE Harmony Hub node 

1. To run the batch file below are Pre-Requisites
    *  Python 2.7.x need to be installed
    *  Set Environment variable in the system 
    *  Download python 2.7.x from below link
    https://www.python.org/downloads/release/python-2712/ 

2. After installing Python, please run batch file as Administrator. Download batch file from below link 
http://wain05400.apa.gad.schneider-electric.com:81/wiki/index.php/File:Pre_modbus_serial_lib.bat

3. During running the batch file command prompt will be launched where the following information need to be entered
  *  Is proxy used (yes/no)?  yes
  *  Proxy details: http://gateway.schneider.zscaler.net:9480/ (Schneider Electric India proxy)

Note: The execution of the batch file requires some time.

After the batch file execution is completed, install the nodes as follows

Launch command prompt and run below commands
 ```sh
    npm set registry https://wain05400.apa.gad.schneider-electric.com:4878/
	npm config rm proxy
	npm config rm https-proxy
    npm config rm http-proxy
    cd .node-red
    npm install se-node-red-harmony_hub
```

<b>Automated Offline installation </b>

*  Download the Harmony_Hub_V1.0.0_Offline.zip file from the below link
</br><a href="https://schneider-electric.app.box.com/s/xsmgvjhjo4km8jwlsn8qyprgb0gy8bv6" target="_blank">https://schneider-electric.app.box.com/s/xsmgvjhjo4km8jwlsn8qyprgb0gy8bv6</a>
*  Unzip the Harmony_Hub_V1.0.0_Offline.zip file into folder
*  Windows
    ```sh
        click on se-node-red-harmony_hub_offline_install.bat file
    ```
*  Linux
    ```sh
        sh se-node-red-harmony_hub_offline_install.sh
    ```

<b>NOTE: The node package is saved in the User directory (for example:
C:\Users\\\<User Name>\se-node-red-harmony_hub\)</b>

<b>7. Uninstallation</b>

If SE Harmony Hub Node or slave node(Configured in SE Harmony Hub) are present in node flow follow these steps to uninstall

<b>Online uninstallation</b>
*  Delete the nodes from the flow
*  Delete slave node(Configured in SE Harmony Hub ) from configuration menu option present in Node-RED webpage.
*  Open the Command Prompt and run the below command to uninstall
 ```sh
  cd .node-red
  npm uninstall se-node-red-harmony_hub
```

If SE Harmony Hub Node is installed using offline installation process, below is the process to uninstall

<b>Offline uninstallation</b>
*  For offline uninstallation process 'se-node-red-harmony_hub_offline_uninstall' file is required
 and the 'se-node-red-harmony_hub_offline_uninstall' file will be available in the User directory ( for example: C:\Users\\\<User Name>\)

    In Windows:
    ```sh
        Click on se-node-red-harmony_hub_offline_uninstall.bat
    ```

    In Linux:
    Run below command
    ```sh
        sh se-node-red-harmony_hub_offline_uninstall.sh
    ```


*  After uninstallation restart the Node-RED server

<b>8. Help Manual</b>

* SE Harmony Hub node user manual can be downloaded using the Help Icon in the top right menu.

<b>9. License</b>

* SE Harmony Hub node is available under Schneider Electric license.
* The license file can be downloaded using the License Icon in the top right menu.

<b>10. Information</b>

* Supported Language is English only.
 
<b>11. Best Practices</b> (for further information refer help manual)
* Run Node-RED-as-a-service
* Use Browser wisely 
* Stop unused services 

<b>12. Limitations</b>

1.	Operating system anything less than Windows 10 is not supported.
2.	Node-RED application is supported in any browser with Javascript V8 engine or similar (for instance; Google chrome V73.0, Firefox V66.0).
3.	Node-RED web page is only available in English language, irrespective of the system language.
4.	SE Harmony Hub node will not work on Node.js® unstable versions and 6.x.x, 8.x.x and 12.x.x versions. Node will work only on Node.js 10.15.3 and Node-RED 0.20.7 version.
5.	If the user removes the sensor using the HMI of Harmony Hub gateway, the pairing status of the sensor will continue to show as "Paired" on the web page unless the node is re-deployed. 
6.	The Harmony Hub serial gateway with firmware version 3.26 is disconnected if the queue control delay is increased to 200 ms on the configuration page.
7.	If two nodes are connected to the same gateway, one node would not receive a response from the gateway , the node stays in the connected state and does not collect sensor data. This is a limitation of the firmware.
8.	When you launch a Node-RED server, it takes time to get started
Please follow the steps mentioned below to overcome this issue:
    * Open Task Manager
    * Search for the Nodejs in the "Background Process" 
    * Right click on nodejs task and click on "End Task" to kill the process 
    * Now the Node-RED server starts running
9.	In SE Harmony Hub V1.0.0 node, the lowest poll rate possible is 5 seconds . If 35 or more sensors are paired, it is recommended to keep the poll rate to 10 seconds or higher to avoid data loss.
10.	Harmony Hub web page application has minimum screen resolution supported for 1360 x 768 pixel and if you go below this resolution, scrollbar will appear.
11.	When the user wants to perform offline installation, internet should be disabled. It takes longer to install if internet is enabled. 
12.	In SE Harmony Hub V1.0.0 node, SPS ( push button ) is not supported.
13.	It is not possible to rename the sensors already paired, the user has to delete and add sensors. 
14.	During pairing of sensors with gateway, below operations are not recommended - 
    - Do not perform any deployment in the Node-Red environment
    - Do not refresh Harmony Hub Webpage


<b>13. Known Issues</b>

* During Power cycle of Harmony Hub Serial Gateway, the node gets disconnected. In this scenario user needs to re-deploy to re-establish the connection. 