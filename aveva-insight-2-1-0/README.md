<b>1. Overview</b>

SE Aveva Insight node is a publishing node that collects data in Common Message Structure (CMS) format from collection node (Ex. SE Harmony Hub which collects data from Harmony Hub gateway), It converts into Aveva Insight data format and pushes the data to the Aveva Insight Cloud.

You must Sign-Up to AVEVA cloud and create a Data Source.

<b>Package Content</b>

| Component | Version |
|:-----------:|:---------:|
| se-node-red-aveva_insight | 2.1.0 |

<b>2. Features</b>

v2.1.0:

* Bug fix - Store & Forward - Store & Forward data pushed from node not reflecting in the Aveva Insight dashboard
* Log files made Readonly for all users - only node can write into the file

v2.0.0:

* Node Configuration
* Store and Forward
* Common Message Structure
* Schneider Look & Feel
* Logging

<b>3. Operating System</b>

This app can be installed on the following platforms with the version of NodeJS: 10.15.3 and Node-Red 0.20.7
* Windows 10 (Standard Image-HMIBMP)
* Linux Yocto (V1.00.010 and above)

<b>4. Hardware Requirements</b>

* Magelis HMIBMP Reference HMIBMPHI74D4801 HMIBMP with 4 expansion slots, i7, 8GB, 500 GB HDD 
* Magelis HMIBSC Reference HMIBSCEA53D1L0T HMIBSC with ARM, Linux Yocto

<b>5. Software Requirements</b>

Observe these minimum software requirements for functioning of the Aveva Insight node:

* Node.js V10.15.3
* Node-RED server V0.20.7
* Npm (Node package manager) V6.4.1
* Node-RED application is supported in any browser with V8 engine or similar (for instance- Google Chrome V73.0 and Firefox V66.0)

NOTE: The software versions mentioned above support the SE Nodes installation. Other versions do not support it. 
 
<b>6. Installation</b>

Prerequisites for SE Aveva Insight node installation:

* Installation of Supported Node.js version

    1.  Download the Windows installer from the Nodes.js® web site. </br><a href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a>
    2.  Run the installer (the .msi file you downloaded in the previous step.)
    3.  Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
    4.  Restart your computer. You won’t be able to run Node.js® until you restart your computer.

* Installation of Supported Node-RED version
    1.  Check out http://nodered.org/docs/getting-started/ for full instructions on getting started. 
    2.  In Schneider network, set the registry to https://registry.npmjs.org/ by executing below npm command.
        ```sh
            npm config set registry https://registry.npmjs.org/
        ```
    3. Set the proxy to your network proxy (e.g. https://yourproxy:xxxx/) by executing below npm command.
        ```sh
            npm config set proxy http://gateway.schneider.zscaler.net:9480/
        ```

        For Schneider Electric proxy across the world, refer the link below:
        
        http://wain05400.apa.gad.schneider-electric.com:81/wiki/index.php/%28Proxy_List%29

        Make sure the set registry and proxy are configured

        Run below npm command to install Node-RED (v0.20.7)
        ```sh
            npm install -g --unsafe-perm node-red@0.20.7
        ```

<b>Online installation</b>

Installation of SE Aveva Insight node through Schneider Electric Repository (Windows system only)

At present, online installation is possible only inside Schneider Electric corporate network.

Launch command prompt and run below commands
```sh
    npm set registry https://wain05400.apa.gad.schneider-electric.com:4878/
    npm config rm proxy
    npm config rm http-proxy
    npm config rm https-proxy
    cd .node-red
    npm install se-node-red-aveva_insight
```

<b>Automated Offline installation</b>
* Download the Aveva-Insight_V2.1.0_Offline.zip file by clicking on the Download Icon in the top right menu or from the below link
</br><a href="https://schneider-electric.box.com/s/xsmgvjhjo4km8jwlsn8qyprgb0gy8bv6" target="_blank">https://schneider-electric.box.com/s/xsmgvjhjo4km8jwlsn8qyprgb0gy8bv6</a>
* Unzip the Aveva-Insight_V2.1.0_Offline.zip file into folder

    For Windows
    ```sh  
        Click on se-node-red-aveva_insight_offline_install.bat file
    ```
    
    For Linux
        
    Run below command
    ```sh
        sh se-node-red-aveva_insight_offline_install.sh
    ```

    <b>NOTE: The node package is saved in the User directory</b>
    
    (for example: C:/Users/\<User Name\>/se-node-red-aveva_insight/)
* After installation restart the Node-RED server

<b>7. Uninstallation</b>

<b>Online uninstallation</b>

If SE Aveva Insight Node is installed using online installation process, below is the process to uninstall

* Delete the nodes from the flow
* Open the Command Prompt and run the below command to uninstall
    ```sh
        cd .node-red
        npm uninstall se-node-red-aveva_insight
    ```

<b>Offline uninstallation</b>

If SE Aveva Insight Node is installed using offline installation process, below is the process to uninstall

* Delete the nodes from the flow
* For offline uninstallation process 'se-node-red-aveva_insight_offline_uninstall' file is required
 and the 'se-node-red-aveva_insight_offline_uninstall' file will be available in the User directory
 
    ( for example: C:/Users/\<User Name\>/)

    For Windows:
    ```sh
        Click on se-node-red-aveva_insight_offline_uninstall.bat file
    ```
    
    For Linux:
    Run below command
     ```sh
        sh se-node-red-aveva_insight_offline_uninstall.sh
     ```

* After uninstallation restart the Node-RED server

<b>8. Help Manual</b>

* SE Aveva Insight node user manual can be downloaded using the Help Icon in the top right menu.

<b>9. License</b>

* SE Aveva Insight node is available under Schneider Electric license.
* The license file can be downloaded using the License Icon in the top right menu

<b>10. Information</b>

* Supported Language is English only.
* User needs to Signup for Aveva Insight Cloud, create a datasource and copy the end of datasource to push data
* For detailed information for generating token and if the token expires, please refer Help Manual
* User can update meta data information(e.g, unit, data type) from the Aveva dashboard. Node will not send the meta data.
    

<b>11. Best Practices </b> (for further information refer help manual)

* Run Node-RED-as-a-service
* Use Browser wisely 
* Stop unused services 

<b>12. Limitations</b>
1.  Operating system anything less than Windows 10 is not supported.
2.  Node-RED application is supported in any browser with V8 engine or similar (for instance: Google Chrome V73.0 and Firefox V66.0).
3.  Node-RED web page is only available in English, irrespective of the system language.
4.  SE Aveva Insight will not work on Node.js® unstable versions and 6.x.x, 8.x.x and 12.x.x versions.
5. SE Aveva Insight node should work on Node.js 10.15.3 and Node-RED 0.20.7 version only.
6.  When you launch a Node-RED server, it takes time to get started
Please follow the steps mentioned below to overcome this issue:
    * Open Task Manager
    * Search for the Nodejs in the "Background Process" 
    * Right click on nodejs task and click on "End Task" to kill the process 
    * Now the Node-RED server starts running 

7.   Based on the AVEVA Insight subscription of the user, the maximum number of tags pushed through one SE Aveva Insight node cannot exceed the limit defined for a Data Source. E.g: If AVEVA Insight user has subscribed 1000 tags per Data Source and the node attempts to push more than 1000 tags data in to the Data Source. In such instances, the Store-and-Forward functionality assumes that the data has been successfully pushed and that the files stored were are deleted. However, the user will not be notified that the data push has been unsuccessful.
8.  When the user wants to do the offline installation, the internet should be disabled. It takes longer to install if internet is enabled. 

<b>13. Known Issues</b>
* NA

