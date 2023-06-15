FROM nodered/node-red:2.0.6
LABEL maintainer="walter20020110@gmail.com"

#env variables
    ENV TZ=Europe/Budapest
#    ENV http_proxy=http://165.225.200.15:80
#    ENV https_proxy=http://165.225.200.15:80
#    ENV NODE_TLS_REJECT_UNAUTHORIZED=0
    ENV SE=/se-nodes

#switch to 'root'
    USER root
	RUN mkdir ${SE}
#packages
    RUN npm config set strict-ssl false
    RUN npm install node-red-dashboard
    RUN npm install node-red-node-mysql
    RUN npm install node-red-contrib-mssql
    RUN npm install node-red-contrib-telegrambot
    RUN npm install node-red-contrib-modbus
    RUN npm install node-red-contrib-modbustcp
    RUN npm install node-red-contrib-modbus-tcp-ip
    #SE_http_proxy requirments
    RUN npm install follow-redirects
    RUN npm install mustache
    RUN npm install hash-sum
    RUN npm install url
    RUN npm install querystring
    RUN npm install cookie
# SE_http_proxy & Wonderware_upload
    COPY nodes /data/nodes

# ଘ(੭*ˊᵕˋ)੭*  Schneider Nodes  *੭)ˊᵕˋ*੭(ଘ
    # Aveva insight 2.1.0
        COPY aveva-insight-2-1-0 ${SE}/aveva-insight-2-1-0
        RUN npm link ${SE}/aveva-insight-2-1-0
    # Machine advisor 2.0.0
        COPY machine-advisor-2-0-0 ${SE}/machine-advisor-2-0-0
        RUN npm link ${SE}/machine-advisor-2-0-0
    # Modbus 3.0.0
        COPY modbus-3-0-0 ${SE}/modbus-3-0-0
        RUN npm link ${SE}/modbus-3-0-0
    # Harmony Hub 1.0.0
        COPY harmony-hub-1-0-0 ${SE}/harmony-hub-1-0-0
        RUN npm link ${SE}/harmony-hub-1-0-0

#back to normal oser 'node-red'
    USER node-red