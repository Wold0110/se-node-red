<b>1. Overview</b>

SE Machine Advisor node is a publishing node that collects data in Common Message Structure format from collecting
node. It converts data to user configurable Tango/Charlie format and pushes the
data to EcoStruxure Machine Advisor application.

NOTE: You should have EcoStruxure Machine Advisor account to push the data to
EcoStruxure Machine Advisor application.

<b>Package Content</b>

| Component | Version |
|:-----------:|:---------:|
| se-node-red-machine_advisor | 2.0.0 |


<b>2. Features</b>

v2.0.0:

* Node Configuration
* Store & Forward
* Common Message Structure
* Schneider Look & Feel
* Logging

<b>3. Operating System</b>

This app can be installed on the following platforms with the version of NodeJS: 10.15.3 and Node-Red 0.20.7

* Linux Yocto (V1.00.010 and above)

<b>4. Hardware Requirements</b>

* Magelis HMIBSC Reference HMIBSCEA53D1L0T HMIBSC with ARM, Linux Yocto

<b>5. Software Requirements</b>

Observe these minimum software requirements for functioning of the SE Machine Advisor node:

* Node.js V10.15.3
* Node-RED server V0.20.7
* Npm (Node package manager) V6.4.1
* Node-RED application is supported in any browser with V8 engine or similar (for instance- Google Chrome V73.0 and Firefox V66.0)

NOTE: The software versions mentioned above support the SE Nodes installation. Other versions do not support it. 


<b>6. Installation</b>

The Linux based Edge Boxes (for example, HMIBSC) have in-built Node-RED-as-a-Service. This means Node.js, Node-Red and python are pre-installed in the OS image.

<b>Online installation</b>

Installation of SE Machine Advisor node through Schneider Electric Repository

Run below commands

```sh
    npm set registry https://wain05400.apa.gad.schneider-electric.com:4878/
    npm config rm proxy
    npm config rm http-proxy
    npm config rm https-proxy
    cd .node-red
    npm install se-node-red-machine_advisor
```

<b>Offline installation</b>
* Download the Machine_Advisor_V2.0.0_Offline.zip file from the below link
</br><a href="https://schneider-electric.box.com/s/xsmgvjhjo4km8jwlsn8qyprgb0gy8bv6" target="_blank">https://schneider-electric.box.com/s/xsmgvjhjo4km8jwlsn8qyprgb0gy8bv6</a>
* Unzip the Machine_Advisor_V2.0.0_Offline.zip file into folder

    Run below command
    ```sh
        sh se-node-red-machine_advisor_offline_install.sh
    ```

    <b>NOTE: The node package is saved in the User directory</b>
    
    (for example: \<User Directory\>/se-node-red-machine_advisor/)
* After installation restart the Node-RED server

<b>7. Uninstallation</b>

<b>Online uninstallation</b>

If SE Machine Advisor Node is installed using online installation process, below is the process to uninstall

* Delete the nodes from the flow
* Run the below command to uninstall
    ```sh
        cd .node-red
        npm uninstall se-node-red-machine_advisor
    ```

<b>Offline uninstallation</b>

If SE Machine Advisor Node is installed using offline installation process, below is the process to uninstall

* Delete the nodes from the flow
* For offline uninstallation process 'se-node-red-machine_advisor_offline_uninstall' file is required
 and the 'se-node-red-machine_advisor_offline_uninstall' file will be available in the User directory
 
    ( for example: \<User Directory\>)

    Run below command
     ```sh
        sh se-node-red-machine_advisor_offline_uninstall.sh
     ```

* After uninstallation restart the Node-RED server

<b>8. Help Manual</b>

* SE Machine Advisor node user manual can be downloaded using the Help Icon in the top right menu.

<b>9. License</b>

* SE Machine Advisor node is available under Schneider Electric license.
* The license file can be downloaded using the License Icon in the top right menu

<b>10. Information</b>

* Supported Language is English only.

<b>11. Limitations</b>

1.  Node-RED application is supported in any browser with V8 engine or similar (for instance: Google Chrome V73.0 and Firefox V66.0).
2.  Node-RED web page is only available in English, irrespective of the system language.
3.  When the user wants to do the offline installation, the internet should be disabled. It takes longer to install if internet is enabled. 
4. If the Store and forward file is deleted, the stored data in the file will be lost as it is not pushed
to cloud
5. When Modbus / Hamrmony-Hub (CMS ) input are having datatype Boolean (values as True / False ) and String to push this valiue to Machine Advisor cloud the Machine Advisor cloud not accepting the values.

<b>12. Known Issues</b>
* NA
