var _0x29d7=['queueNumber','write','addressFactor','varType','value','UDINT','Data\x20written\x20successfully','writeData','write\x20msg','getHexFromInt','getHexFromDint','getHexFromUdint','Out\x20of\x20Range\x20Input:\x20','\x20for\x20data\x20type\x20','number','isFinite','isFloat','getHexFromFloat','checkVariableType','writeCoils','writeCoil','writeRegisters','writeRegister','FSM\x20Not\x20Ready\x20To\x20Write\x20At\x20State\x20','writeModbus','queue\x20write\x20msg','\x20Addr:\x20','\x20Q:\x20','queue\x20response\x20activate\x20sending','initialized','setMaxListeners','reconnect','close\x20node','registerForModbus','registeredNodeList','keys','deregisterForModbus','registerType','SE_Modbus-Client','httpAdmin','/serialports','auth','needsPermission','serial.read','serialport','list','json','async','0\x20to\x2065,535','-2,147,483,648\x20to\x202,147,483,647','0\x20to\x204,294,967,295','3.4E\x20+/-\x2038\x20(7\x20digits)','true/false\x20or\x200/1','nodes','modbus-serial','clienttype','bufferCommands','stateLogEnabled','tcpHost','tcpPort','tcpType','serialPort','serialBaudrate','serialDatabits','serialStopbits','serialParity','serialType','serialConnectionDelay','unit_id','commandDelay','clientTimeout','reconnectTimeout','isFirstInitOfConnection','closingModbus','client','bufferCommandList','sendAllowed','unitSendingAllowed','messageAllowedStates','messagesAllowedStates','serverInfo','statlyMachine','createStatelyMachine','start:\x20','getMachineState','FSM\x20events:','clear','set','checkUnitId','stringify','serial\x20sending\x20and\x20wait','get','length','callModbus','msg','sequentialDequeueCommand','shift','isInteger','queue\x20check\x20is\x20not\x20a\x20unit','empty','dequeueCommand','indexOf','dequeue\x20command\x20disallowed\x20state','checkQueuesAreEmpty','updateServerinfo','tcp','Serial@','\x20bit/s','default\x20Unit-Id:\x20','settings','verbose','internalDebug','onNEW','\x20new:\x20','onINIT','after\x20event:\x20','\x20old:\x20','initQueue','connectClient','error','client\x20connection\x20error','\x20ms','event:\x20','emit','mbinit','onCONNECTED','activate','onACTIVATED','mbactive','queue','onQUEUEING','mbqueue','onOPENED','onCLOSED','break','try\x20to\x20reconnect\x20by\x20init\x20in\x20','init','connection\x20closed','message','wrong\x20unit-id\x20(0..255)','failure','TCP\x20RTU\x20buffered\x20port','connectTcpRTUBuffered','setTCPConnectionOptions','catch','TCP\x20port','modbusTcpErrorHandling','wrong\x20unit-id\x20serial\x20(1..247)','RTU','RTU\x20port\x20serial','modbusSerialErrorHandling','RTU\x20buffered\x20port\x20serial','connectRTUBuffered','then','setSerialConnectionOptions','setTimeout','connect','setTCPConnected','modbusSerialDebug','modbus\x20tcp\x20connected\x20on\x20','openserial','openSerialClient','modbusErrorHandling','modbusErrorHandling:\x20','errno','networkErrors','includes','modbusTcpErrorHandling:\x20','modbusSerialErrorHandling:\x20','OPENED','time\x20to\x20open\x20Unit\x20','modbus\x20connection\x20opened','setID','_port','close','wrong\x20state\x20on\x20connect\x20serial\x20','onModbusClose','modbus\x20closed\x20port','getQueueNumber','pushToQueueByUnitId','queueUnit','push\x20to\x20Queue\x20by\x20Unit-Id','payload','push','readModbusTags','FSM\x20Not\x20Ready\x20To\x20Read','queue\x20read\x20msg','read','read\x20msg','mapSeries','tags','address','match','split','getReadFCCode','getQuantity','REAL','getDesimalsToFloat','data','DINT','getDesimalsToDint','DWORD','getDesimalsToUdint','INT','getDesimalsToInt','UINT','WORD','getDesimalsToUint','BOOL','BOOLEAN','getBoolean','readCoils','readDiscreteInputs','readInputRegisters','Unknown\x20Address','readModbus','FSM\x20Not\x20Ready\x20To\x20Read\x20At\x20State\x20','queueUnitId','getTimeout','activateSending','readHoldingRegisters','quantity','Function\x20Code\x20Unknown','writeModbusTags','FSM\x20Not\x20Ready\x20To\x20Write'];(function(_0x46ed5d,_0x4f4c12){var _0x2308a4=function(_0x573528){while(--_0x573528){_0x46ed5d['push'](_0x46ed5d['shift']());}};_0x2308a4(++_0x4f4c12);}(_0x29d7,0x110));var _0x308c=function(_0x35a052,_0x519eeb){_0x35a052=_0x35a052-0x0;var _0x4fe57b=_0x29d7[_0x35a052];return _0x4fe57b;};module['exports']=function(_0x57ae5e){const _0x5ced40=require('../src/modbus-client-core');const _0x7c0d0a=require('../src/utils');const _0x4a4982=require(_0x308c('0x0'));const _0x3e1695={'INT':'-32,768\x20to\x2032,767','UINT':_0x308c('0x1'),'WORD':_0x308c('0x1'),'DINT':_0x308c('0x2'),'UDINT':_0x308c('0x3'),'DWORD':_0x308c('0x3'),'REAL':_0x308c('0x4'),'BOOLEAN':_0x308c('0x5')};function _0x33b501(_0x2e3f22){_0x57ae5e[_0x308c('0x6')]['createNode'](this,_0x2e3f22);const _0x2e4292=require(_0x308c('0x7'));const _0x210d5e=0x0;const _0x532811=0x1;const _0x1b53ee=0x1;const _0x3de837=0x1f4;const _0x3d03f1=0x3e8;const _0x16346d=0x7d0;this[_0x308c('0x8')]=_0x2e3f22[_0x308c('0x8')];this[_0x308c('0x9')]=_0x2e3f22[_0x308c('0x9')];this[_0x308c('0xa')]=_0x2e3f22[_0x308c('0xa')];this['tcpHost']=_0x2e3f22[_0x308c('0xb')];this[_0x308c('0xc')]=parseInt(_0x2e3f22[_0x308c('0xc')],0xa)||0x1f6;this[_0x308c('0xd')]=_0x2e3f22['tcpType'];this[_0x308c('0xe')]=_0x2e3f22[_0x308c('0xe')];this['serialBaudrate']=_0x2e3f22[_0x308c('0xf')];this[_0x308c('0x10')]=_0x2e3f22[_0x308c('0x10')];this[_0x308c('0x11')]=_0x2e3f22[_0x308c('0x11')];this[_0x308c('0x12')]=_0x2e3f22[_0x308c('0x12')];this[_0x308c('0x13')]=_0x2e3f22['serialType'];this[_0x308c('0x14')]=parseInt(_0x2e3f22[_0x308c('0x14')],0xa)||_0x3de837;this[_0x308c('0x15')]=parseInt(_0x2e3f22['unit_id'],0xa)||_0x1b53ee;this['commandDelay']=parseInt(_0x2e3f22[_0x308c('0x16')],0xa)||_0x532811;this['clientTimeout']=parseInt(_0x2e3f22[_0x308c('0x17')],0xa)||_0x3d03f1;this[_0x308c('0x18')]=parseInt(_0x2e3f22[_0x308c('0x18')],0xa)||_0x16346d;const _0x2828ae=this;_0x2828ae[_0x308c('0x19')]=!![];_0x2828ae[_0x308c('0x1a')]=![];_0x2828ae[_0x308c('0x1b')]=null;_0x2828ae[_0x308c('0x1c')]=new Map();_0x2828ae[_0x308c('0x1d')]=new Map();_0x2828ae[_0x308c('0x1e')]=[];_0x2828ae[_0x308c('0x1f')]=_0x5ced40[_0x308c('0x20')];_0x2828ae[_0x308c('0x21')]='';_0x2828ae[_0x308c('0x22')]=null;_0x2828ae[_0x308c('0x22')]=_0x5ced40[_0x308c('0x23')]();_0x58f727(_0x308c('0x24')+_0x2828ae[_0x308c('0x22')][_0x308c('0x25')]());_0x58f727(_0x308c('0x26')+_0x2828ae['statlyMachine']['getMachineEvents']());_0x2828ae['initQueue']=function(){_0x2828ae['bufferCommandList'][_0x308c('0x27')]();_0x2828ae[_0x308c('0x1d')][_0x308c('0x27')]();_0x2828ae['unitSendingAllowed']=[];for(let _0x17f458=0x0;_0x17f458<=0xff;_0x17f458++){_0x2828ae[_0x308c('0x1c')][_0x308c('0x28')](_0x17f458,[]);_0x2828ae[_0x308c('0x1d')][_0x308c('0x28')](_0x17f458,!![]);}};_0x2828ae[_0x308c('0x29')]=function(_0x22b400){return _0x22b400>=0x0&&_0x22b400<=0xff;};const _0x45eebc=function(_0x1df1c3,_0x3bbf43,_0x1cd4d4){if(_0x1df1c3){_0x2828ae['sendAllowed']['set'](_0x1cd4d4,![]);_0x42e87c(JSON[_0x308c('0x2a')]({'type':_0x308c('0x2b'),'unitid':_0x1cd4d4,'queueLength':_0x2828ae['bufferCommandList'][_0x308c('0x2c')](_0x1cd4d4)[_0x308c('0x2d')],'sendAllowedForNext':_0x2828ae[_0x308c('0x1d')][_0x308c('0x2c')](_0x1cd4d4),'delay':_0x2828ae['commandDelay']}));if(_0x2828ae[_0x308c('0x1c')][_0x308c('0x2c')](_0x1cd4d4)['length']>0x0){_0x2828ae['unitSendingAllowed']['push'](_0x1cd4d4);}_0x3bbf43=![];_0x1df1c3[_0x308c('0x2e')](_0x1df1c3[_0x308c('0x2f')],_0x1df1c3['cb'],_0x1df1c3['cberr']);}return _0x3bbf43;};_0x2828ae[_0x308c('0x30')]=function(){let _0x3e5bab=null;let _0x210ed1=!![];const _0x3dad36=parseInt(_0x2828ae[_0x308c('0x1e')][_0x308c('0x31')](),0xa);if(Number[_0x308c('0x32')](_0x3dad36)&&_0x2828ae[_0x308c('0x1c')][_0x308c('0x2c')](_0x3dad36)[_0x308c('0x2d')]>0x0){_0x42e87c(JSON['stringify']({'type':'queue\x20check','unitid':_0x3dad36,'sendAllowed':_0x2828ae[_0x308c('0x1d')][_0x308c('0x2c')](_0x3dad36),'queueLength':_0x2828ae[_0x308c('0x1c')][_0x308c('0x2c')](_0x3dad36)[_0x308c('0x2d')]}));if(_0x2828ae[_0x308c('0x1d')][_0x308c('0x2c')](_0x3dad36)){_0x3e5bab=_0x2828ae[_0x308c('0x1c')]['get'](_0x3dad36)['shift']();_0x210ed1=_0x45eebc(_0x3e5bab,_0x210ed1,_0x3dad36);}}else{_0x42e87c(JSON['stringify']({'type':_0x308c('0x33'),'unitid':_0x3dad36}));}if(_0x210ed1){_0x2828ae[_0x308c('0x22')][_0x308c('0x34')]();}};_0x2828ae[_0x308c('0x35')]=function(){const _0xd4a3eb=_0x2828ae[_0x308c('0x22')]['getMachineState']();if(_0x2828ae[_0x308c('0x1f')][_0x308c('0x36')](_0xd4a3eb)===-0x1){_0x42e87c(JSON[_0x308c('0x2a')]({'state':_0xd4a3eb,'message':_0x308c('0x37'),'delay':_0x2828ae[_0x308c('0x16')]}));}else{_0x42e87c(JSON[_0x308c('0x2a')]({'state':_0xd4a3eb,'message':'dequeue\x20command\x20'+_0x2828ae[_0x308c('0x8')],'delay':_0x2828ae['commandDelay']}));_0x2828ae[_0x308c('0x30')]();}if(_0x2828ae[_0x308c('0x38')]()){_0x2828ae[_0x308c('0x22')][_0x308c('0x34')]();}};_0x2828ae[_0x308c('0x38')]=function(){let _0x504762=!![];for(let _0x5b306b=0x0;_0x5b306b<=0xff;_0x5b306b++){_0x504762&=_0x2828ae[_0x308c('0x1c')][_0x308c('0x2c')](_0x5b306b)[_0x308c('0x2d')]>0x0;}return _0x504762;};_0x2828ae[_0x308c('0x39')]=function(){if(_0x2828ae[_0x308c('0x8')]===_0x308c('0x3a')){_0x2828ae['serverInfo']='TCP@'+_0x2828ae[_0x308c('0xb')]+':'+_0x2828ae[_0x308c('0xc')];}else{_0x2828ae['serverInfo']=_0x308c('0x3b')+_0x2828ae[_0x308c('0xe')]+':'+_0x2828ae[_0x308c('0xf')]+_0x308c('0x3c');}_0x2828ae[_0x308c('0x21')]+=_0x308c('0x3d')+_0x2828ae[_0x308c('0x15')];};function _0x267246(_0x210a32){if(_0x57ae5e[_0x308c('0x3e')][_0x308c('0x3f')]){_0x2828ae['warn']('Client\x20->\x20'+_0x210a32+'\x20'+_0x2828ae[_0x308c('0x21')]);}}function _0xd019c(_0x2e9839){if(_0x57ae5e[_0x308c('0x3e')][_0x308c('0x3f')]){_0x5ced40[_0x308c('0x40')]('Client\x20->\x20'+_0x2e9839+'\x20'+_0x2828ae[_0x308c('0x21')]);}}function _0x58f727(_0x8b7566){if(_0x2828ae[_0x308c('0xa')]){_0xd019c(_0x8b7566);}}function _0x42e87c(_0xab718c){if(_0x2828ae[_0x308c('0x9')]){_0xd019c(_0xab718c);}}_0x2828ae[_0x308c('0x22')][_0x308c('0x41')]=function(_0x331b8f,_0x3fc3a1,_0x1987d4){_0x58f727('after\x20event:\x20'+_0x331b8f+'\x20old:\x20'+_0x3fc3a1+_0x308c('0x42')+_0x1987d4);};_0x2828ae[_0x308c('0x22')][_0x308c('0x43')]=function(_0x523ab5,_0x4288af,_0x2574e5){_0x58f727(_0x308c('0x44')+_0x523ab5+_0x308c('0x45')+_0x4288af+'\x20new:\x20'+_0x2574e5);_0x2828ae[_0x308c('0x39')]();_0x2828ae[_0x308c('0x46')]();try{if(_0x2828ae[_0x308c('0x19')]){_0x2828ae['isFirstInitOfConnection']=![];setTimeout(_0x2828ae[_0x308c('0x47')],_0x3de837);}else{setTimeout(_0x2828ae['connectClient'],_0x2828ae[_0x308c('0x18')]);}}catch(_0x1811b1){_0x2828ae[_0x308c('0x48')](_0x1811b1,{'payload':_0x308c('0x49')});}_0x267246('reconnect\x20in\x20'+_0x2828ae[_0x308c('0x18')]+_0x308c('0x4a'));_0xd019c(_0x308c('0x4b')+_0x523ab5+_0x308c('0x45')+_0x4288af+'\x20new:\x20'+_0x2574e5);_0x2828ae[_0x308c('0x4c')](_0x308c('0x4d'));};_0x2828ae[_0x308c('0x22')][_0x308c('0x4e')]=function(_0x2e6656,_0x2d032f,_0x43c8c1){_0x58f727(_0x308c('0x4b')+_0x2e6656+'\x20old:\x20'+_0x2d032f+_0x308c('0x42')+_0x43c8c1);_0x2828ae[_0x308c('0x4c')]('mbconnected');_0x2828ae[_0x308c('0x22')][_0x308c('0x4f')]();};_0x2828ae[_0x308c('0x22')][_0x308c('0x50')]=function(_0x3749b1,_0x90aa3,_0x2c7729){_0x58f727(_0x308c('0x4b')+_0x3749b1+_0x308c('0x45')+_0x90aa3+'\x20new:\x20'+_0x2c7729);_0x2828ae[_0x308c('0x4c')](_0x308c('0x51'));if(_0x2828ae['bufferCommands']){_0x2828ae[_0x308c('0x22')][_0x308c('0x52')]();}};_0x2828ae[_0x308c('0x22')][_0x308c('0x53')]=function(_0x9ee30a,_0x2b20e8,_0x334aa7){_0x58f727(_0x308c('0x4b')+_0x9ee30a+_0x308c('0x45')+_0x2b20e8+_0x308c('0x42')+_0x334aa7);setTimeout(_0x2828ae[_0x308c('0x35')],_0x2828ae[_0x308c('0x16')]);_0x2828ae[_0x308c('0x4c')](_0x308c('0x54'));};_0x2828ae['statlyMachine'][_0x308c('0x55')]=function(_0x136648,_0x26e951,_0x30b320){_0xd019c('event:\x20'+_0x136648+_0x308c('0x45')+_0x26e951+_0x308c('0x42')+_0x30b320);_0x2828ae['emit']('mbopen');};_0x2828ae[_0x308c('0x22')][_0x308c('0x56')]=function(_0x2566fd,_0x3c5e71,_0x16db84){_0x58f727('event:\x20'+_0x2566fd+_0x308c('0x45')+_0x3c5e71+'\x20new:\x20'+_0x16db84);_0x2828ae[_0x308c('0x4c')]('mbclosed');_0x2828ae[_0x308c('0x22')][_0x308c('0x57')]();};_0x2828ae[_0x308c('0x22')]['onFAILED']=function(_0x2c88fa,_0x236103,_0x11b8c6){_0x58f727(_0x308c('0x4b')+_0x2c88fa+_0x308c('0x45')+_0x236103+_0x308c('0x42')+_0x11b8c6);_0x2828ae['emit']('mberror','FSM\x20Reset\x20On\x20State\x20'+_0x236103);_0x2828ae[_0x308c('0x22')][_0x308c('0x57')]();};_0x2828ae[_0x308c('0x22')]['onBROKEN']=function(_0x3f5e68,_0x4b11ef,_0x3f9bf1){_0x58f727(_0x308c('0x4b')+_0x3f5e68+_0x308c('0x45')+_0x4b11ef+'\x20new:\x20'+_0x3f9bf1);_0x2828ae['emit']('mbbroken');if(_0x2828ae[_0x308c('0x18')]<=0x0){_0x2828ae[_0x308c('0x18')]=_0x16346d;}_0x267246(_0x308c('0x58')+_0x2828ae[_0x308c('0x18')]+_0x308c('0x4a'));setTimeout(_0x2828ae[_0x308c('0x22')][_0x308c('0x59')],_0x2828ae[_0x308c('0x18')]);};_0x2828ae['connectClient']=function(){if(_0x2828ae[_0x308c('0x1b')]){try{_0x2828ae['client']['close'](function(){_0xd019c(_0x308c('0x5a'));});}catch(_0xca61b2){_0xd019c(_0xca61b2[_0x308c('0x5b')]);}}_0x2828ae[_0x308c('0x1b')]=null;_0x2828ae[_0x308c('0x1b')]=new _0x2e4292();if(_0x2828ae[_0x308c('0x8')]===_0x308c('0x3a')){if(!_0x2828ae[_0x308c('0x29')](_0x2828ae['unit_id'])){_0x2828ae[_0x308c('0x48')](new Error(_0x308c('0x5c')),{'payload':_0x2828ae[_0x308c('0x15')]});_0x2828ae['statlyMachine'][_0x308c('0x5d')]();return;}switch(_0x2828ae[_0x308c('0xd')]){case'TPC-RTU-BUFFERED':_0xd019c(_0x308c('0x5e'));_0x2828ae['client'][_0x308c('0x5f')](_0x2828ae[_0x308c('0xb')],{'port':_0x2828ae[_0x308c('0xc')],'autoOpen':!![]})['then'](_0x2828ae[_0x308c('0x60')])[_0x308c('0x61')](_0x2828ae['modbusTcpErrorHandling']);break;default:_0xd019c(_0x308c('0x62'));_0x2828ae[_0x308c('0x1b')]['connectTCP'](_0x2828ae[_0x308c('0xb')],{'port':_0x2828ae[_0x308c('0xc')],'autoOpen':!![]})['then'](_0x2828ae[_0x308c('0x60')])[_0x308c('0x61')](_0x2828ae[_0x308c('0x63')]);}}else{if(!_0x2828ae[_0x308c('0x29')](_0x2828ae[_0x308c('0x15')])){_0x2828ae[_0x308c('0x48')](new Error(_0x308c('0x64')),{'payload':_0x2828ae[_0x308c('0x15')]});_0x2828ae[_0x308c('0x22')][_0x308c('0x5d')]();return;}if(!_0x2828ae[_0x308c('0xe')]){_0x2828ae[_0x308c('0x48')](new Error('wrong\x20serial\x20port'),{'payload':_0x2828ae[_0x308c('0xe')]});_0x2828ae[_0x308c('0x22')][_0x308c('0x5d')]();return;}switch(_0x2828ae['serialType']){case _0x308c('0x65'):_0xd019c(_0x308c('0x66'));_0x2828ae['client']['connectRTU'](_0x2828ae[_0x308c('0xe')],{'baudRate':parseInt(_0x2828ae[_0x308c('0xf')],0xa),'dataBits':parseInt(_0x2828ae[_0x308c('0x10')],0xa),'stopBits':parseInt(_0x2828ae[_0x308c('0x11')],0xa),'parity':_0x2828ae[_0x308c('0x12')],'autoOpen':![]})['then'](_0x2828ae['setSerialConnectionOptions'])[_0x308c('0x61')](_0x2828ae[_0x308c('0x67')]);break;default:_0xd019c(_0x308c('0x68'));_0x2828ae['client'][_0x308c('0x69')](_0x2828ae[_0x308c('0xe')],{'baudRate':parseInt(_0x2828ae[_0x308c('0xf')],0xa),'dataBits':parseInt(_0x2828ae['serialDatabits'],0xa),'stopBits':parseInt(_0x2828ae[_0x308c('0x11')],0xa),'parity':_0x2828ae[_0x308c('0x12')],'autoOpen':![]})[_0x308c('0x6a')](_0x2828ae[_0x308c('0x6b')])[_0x308c('0x61')](_0x2828ae[_0x308c('0x67')]);break;}}};_0x2828ae[_0x308c('0x60')]=function(){_0x2828ae[_0x308c('0x1b')]['setID'](_0x2828ae[_0x308c('0x15')]);_0x2828ae[_0x308c('0x1b')][_0x308c('0x6c')](_0x2828ae[_0x308c('0x17')]);_0x2828ae['statlyMachine'][_0x308c('0x6d')]();};_0x2828ae[_0x308c('0x6e')]=function(){_0x5ced40[_0x308c('0x6f')](_0x308c('0x70')+_0x2828ae[_0x308c('0xb')]);};_0x2828ae['setSerialConnectionOptions']=function(){_0x2828ae[_0x308c('0x22')][_0x308c('0x71')]();setTimeout(_0x2828ae[_0x308c('0x72')],parseInt(_0x2828ae[_0x308c('0x14')],0xa));};_0x2828ae[_0x308c('0x73')]=function(_0x3a6de0){if(_0x3a6de0[_0x308c('0x5b')]){_0x5ced40['modbusSerialDebug'](_0x308c('0x74')+_0x3a6de0[_0x308c('0x5b')]);}else{_0x5ced40[_0x308c('0x6f')]('modbusErrorHandling:\x20'+JSON[_0x308c('0x2a')](_0x3a6de0));}if(_0x3a6de0[_0x308c('0x75')]&&_0x5ced40[_0x308c('0x76')][_0x308c('0x77')](_0x3a6de0['errno'])){_0x2828ae[_0x308c('0x22')][_0x308c('0x5d')]();}};_0x2828ae['modbusTcpErrorHandling']=function(_0x4caac1){if(_0x4caac1[_0x308c('0x5b')]){_0x5ced40['modbusSerialDebug']('modbusTcpErrorHandling:\x20'+_0x4caac1[_0x308c('0x5b')]);}else{_0x5ced40[_0x308c('0x6f')](_0x308c('0x78')+JSON[_0x308c('0x2a')](_0x4caac1));}if(_0x4caac1[_0x308c('0x75')]&&_0x5ced40[_0x308c('0x76')][_0x308c('0x77')](_0x4caac1['errno'])){_0x2828ae['statlyMachine'][_0x308c('0x5d')]();}};_0x2828ae['modbusSerialErrorHandling']=function(_0x3fac8b){if(_0x3fac8b['message']){_0x5ced40['modbusSerialDebug']('modbusSerialErrorHandling:\x20'+_0x3fac8b[_0x308c('0x5b')]);}else{_0x5ced40[_0x308c('0x6f')](_0x308c('0x79')+JSON[_0x308c('0x2a')](_0x3fac8b));}_0x2828ae['statlyMachine'][_0x308c('0x5d')]();};_0x2828ae[_0x308c('0x72')]=function(){if(_0x2828ae[_0x308c('0x22')]['getMachineState']()===_0x308c('0x7a')){_0xd019c(_0x308c('0x7b')+_0x2828ae['unit_id']);_0x5ced40[_0x308c('0x6f')](_0x308c('0x7c'));_0x2828ae[_0x308c('0x1b')][_0x308c('0x7d')](_0x2828ae[_0x308c('0x15')]);_0x2828ae[_0x308c('0x1b')][_0x308c('0x6c')](parseInt(_0x2828ae['clientTimeout'],0xa));_0x2828ae[_0x308c('0x1b')][_0x308c('0x7e')]['on'](_0x308c('0x7f'),_0x2828ae['onModbusClose']);_0x2828ae[_0x308c('0x22')][_0x308c('0x6d')]();}else{_0xd019c(_0x308c('0x80')+_0x2828ae['statlyMachine'][_0x308c('0x25')]());_0x5ced40[_0x308c('0x6f')]('modbus\x20connection\x20not\x20opened\x20state\x20is\x20%s',_0x2828ae[_0x308c('0x22')][_0x308c('0x25')]());_0x2828ae[_0x308c('0x22')][_0x308c('0x5d')]();}};_0x2828ae[_0x308c('0x81')]=function(){_0x267246('modbus\x20closed\x20port');_0x5ced40['modbusSerialDebug'](_0x308c('0x82'));_0x2828ae[_0x308c('0x22')]['close']();};_0x2828ae[_0x308c('0x83')]=function(){const _0x46be45=parseInt(_0x2828ae[_0x308c('0x15')],0xa);if(Number['isInteger'](_0x46be45)){return _0x2828ae[_0x308c('0x1c')]['get'](_0x46be45)[_0x308c('0x2d')];}else{return _0x2828ae['bufferCommandList'][_0x308c('0x2c')](_0x2828ae[_0x308c('0x15')])[_0x308c('0x2d')];}};_0x2828ae[_0x308c('0x84')]=function(_0x32dd68,_0x1ff8fe,_0xe4f479,_0x43a049){const _0x357a02=parseInt(_0x2828ae[_0x308c('0x15')],0xa);if(Number[_0x308c('0x32')](_0x357a02)){_0x1ff8fe[_0x308c('0x85')]=_0x357a02;_0x42e87c(JSON['stringify']({'info':_0x308c('0x86'),'message':_0x1ff8fe[_0x308c('0x87')],'unit':_0x357a02}));if(_0x2828ae['unitSendingAllowed'][_0x308c('0x36')](_0x357a02)===-0x1){_0x2828ae['unitSendingAllowed'][_0x308c('0x88')](_0x357a02);}_0x2828ae[_0x308c('0x1c')][_0x308c('0x2c')](_0x357a02)[_0x308c('0x88')]({'callModbus':_0x32dd68,'msg':_0x1ff8fe,'cb':_0xe4f479,'cberr':_0x43a049});}else{_0x1ff8fe[_0x308c('0x85')]=_0x2828ae[_0x308c('0x15')];_0x42e87c(JSON['stringify']({'info':'push\x20to\x20Queue\x20by\x20default\x20Unit-Id','message':_0x1ff8fe['payload'],'unit':_0x2828ae[_0x308c('0x15')]}));if(_0x2828ae[_0x308c('0x1e')][_0x308c('0x36')](_0x2828ae[_0x308c('0x15')])===-0x1){_0x2828ae[_0x308c('0x1e')]['push'](_0x2828ae['unit_id']);}_0x2828ae[_0x308c('0x1c')]['get'](_0x2828ae['unit_id'])['push']({'callModbus':_0x32dd68,'msg':_0x1ff8fe,'cb':_0xe4f479,'cberr':_0x43a049});}};_0x2828ae['on'](_0x308c('0x89'),function(_0x22bd94,_0x505d62,_0x3a9456){const _0x9fb7b5=_0x2828ae[_0x308c('0x22')]['getMachineState']();if(_0x2828ae[_0x308c('0x1f')][_0x308c('0x36')](_0x9fb7b5)===-0x1){_0x3a9456(_0x308c('0x8a'),_0x22bd94);return;}if(_0x2828ae[_0x308c('0x9')]){_0x22bd94['queueNumber']=_0x2828ae[_0x308c('0x83')]();_0x2828ae[_0x308c('0x84')](_0x2828ae[_0x308c('0x89')],_0x22bd94,_0x505d62,_0x3a9456);_0x2828ae[_0x308c('0x22')][_0x308c('0x52')]();_0x42e87c(JSON['stringify']({'msg':_0x22bd94,'state':_0x9fb7b5,'info':_0x308c('0x8b'),'queueLength':_0x2828ae['bufferCommandList'][_0x308c('0x2c')](_0x22bd94['queueUnit'])['length']}));}else{_0x2828ae[_0x308c('0x89')](_0x22bd94,_0x505d62,_0x3a9456);}});_0x2828ae[_0x308c('0x89')]=function(_0x86d21c,_0x1890ea){if(!_0x2828ae[_0x308c('0x1b')]){return;}if(!_0x2828ae[_0x308c('0x9')]){_0x2828ae[_0x308c('0x22')][_0x308c('0x8c')]();}_0x2828ae[_0x308c('0x1b')]['setTimeout'](_0x2828ae['clientTimeout']);_0x42e87c(JSON[_0x308c('0x2a')]({'msg':_0x86d21c,'info':_0x308c('0x8d'),'unitid':_0x86d21c['queueUnitId'],'timeout':_0x2828ae[_0x308c('0x1b')]['getTimeout'](),'state':_0x2828ae[_0x308c('0x22')][_0x308c('0x25')]()}));const _0x4f3b92=[];_0x4a4982[_0x308c('0x8e')](_0x86d21c['payload'][_0x308c('0x8f')],function(_0x2946ff,_0xdfba3e){const _0x54fcea=_0x2946ff[_0x308c('0x90')][_0x308c('0x91')](/\d+/)[0x0];const _0x396b4c=_0x2946ff['address'][_0x308c('0x92')](_0x54fcea)[0x0];const _0x3a3654=_0x2946ff['addressFactor'];const _0x35ce6f=_0x2946ff['varType'];_0xec9bac(_0x7c0d0a[_0x308c('0x93')](_0x396b4c),parseInt(_0x54fcea,0xa),_0x7c0d0a[_0x308c('0x94')](_0x35ce6f),_0x35ce6f,_0x3a3654,function(_0x5cd2eb){_0x2946ff['readData']=_0x5cd2eb;_0x4f3b92['push'](_0x2946ff);_0xdfba3e();},function(_0x5761f6){_0x2946ff[_0x308c('0x48')]=_0x5761f6['message']||_0x5761f6;_0x4f3b92[_0x308c('0x88')](_0x2946ff);_0xdfba3e();});},function(){_0x1890ea(_0x4f3b92);_0x2828ae['activateSending'](_0x86d21c);});};function _0xec9bac(_0x5ca064,_0x4be2ac,_0x45df88,_0x1b9329,_0x538cff,_0x3a09eb,_0x494bd7){let _0x5caf69=_0x4be2ac;if(_0x45df88===0x2&&_0x538cff===0x2){_0x5caf69=_0x5caf69*_0x538cff;}const _0x10ceda=function(_0x55cb99){if(_0x1b9329===_0x308c('0x95')){_0x3a09eb([_0x7c0d0a[_0x308c('0x96')](_0x55cb99[_0x308c('0x97')])]);}else if(_0x1b9329===_0x308c('0x98')){_0x3a09eb([_0x7c0d0a[_0x308c('0x99')](_0x55cb99[_0x308c('0x97')])]);}else if(_0x1b9329==='UDINT'||_0x1b9329===_0x308c('0x9a')){_0x3a09eb([_0x7c0d0a[_0x308c('0x9b')](_0x55cb99[_0x308c('0x97')])]);}else{_0x3a09eb(_0x55cb99['data']);}};const _0x317f6a=function(_0x2bf097){if(_0x1b9329===_0x308c('0x9c')){_0x3a09eb([_0x7c0d0a[_0x308c('0x9d')](_0x2bf097[_0x308c('0x97')])]);}else if(_0x1b9329===_0x308c('0x9e')||_0x1b9329===_0x308c('0x9f')){_0x3a09eb([_0x7c0d0a[_0x308c('0xa0')](_0x2bf097[_0x308c('0x97')])]);}else if(_0x1b9329===_0x308c('0xa1')||_0x1b9329==='EBOOL'||_0x1b9329===_0x308c('0xa2')){_0x3a09eb([_0x7c0d0a[_0x308c('0xa3')](_0x2bf097['data'])]);}else{_0x3a09eb(_0x2bf097[_0x308c('0x97')]);}};try{switch(_0x5ca064){case 0x1:_0x2828ae[_0x308c('0x1b')][_0x308c('0xa4')](parseInt(_0x5caf69,0xa),_0x45df88)[_0x308c('0x6a')](function(_0x476f13){_0x3a09eb(_0x476f13[_0x308c('0x97')]);})[_0x308c('0x61')](function(_0x245064){_0x494bd7(_0x245064);_0x2828ae['modbusErrorHandling'](_0x245064);});break;case 0x2:_0x2828ae['client'][_0x308c('0xa5')](parseInt(_0x5caf69,0xa),_0x45df88)['then'](function(_0x32555a){_0x3a09eb(_0x32555a[_0x308c('0x97')]);})[_0x308c('0x61')](function(_0x125a94){_0x494bd7(_0x125a94);_0x2828ae[_0x308c('0x73')](_0x125a94);});break;case 0x3:_0x2828ae[_0x308c('0x1b')]['readHoldingRegisters'](parseInt(_0x5caf69,0xa),_0x45df88)[_0x308c('0x6a')](function(_0x49f8de){if(_0x45df88>0x1){_0x10ceda(_0x49f8de);}else{_0x317f6a(_0x49f8de);}})['catch'](function(_0x2efe77){_0x494bd7(_0x2efe77);_0x2828ae[_0x308c('0x73')](_0x2efe77);});break;case 0x4:_0x2828ae[_0x308c('0x1b')][_0x308c('0xa6')](parseInt(_0x5caf69,0xa),_0x45df88)[_0x308c('0x6a')](function(_0x759f48){if(_0x45df88>0x1){_0x10ceda(_0x759f48);}else{_0x317f6a(_0x759f48);}})[_0x308c('0x61')](function(_0x913dcd){_0x494bd7(_0x913dcd);_0x2828ae[_0x308c('0x73')](_0x913dcd);});break;default:_0x494bd7(_0x308c('0xa7'));break;}}catch(_0x4773d3){_0x5ced40[_0x308c('0x40')](_0x4773d3[_0x308c('0x5b')]);_0x2828ae[_0x308c('0x73')](_0x4773d3);_0x494bd7(_0x4773d3);}}_0x2828ae['on'](_0x308c('0xa8'),function(_0x55cee3,_0x3f4b6d,_0x41f3f8){const _0x1c9b5f=_0x2828ae[_0x308c('0x22')][_0x308c('0x25')]();if(_0x2828ae[_0x308c('0x1f')][_0x308c('0x36')](_0x1c9b5f)===-0x1){_0x41f3f8(new Error(_0x308c('0xa9')+_0x1c9b5f),_0x55cee3);return;}if(_0x2828ae[_0x308c('0x9')]){_0x55cee3['queueNumber']=_0x2828ae[_0x308c('0x83')]();_0x2828ae[_0x308c('0x84')](_0x2828ae[_0x308c('0xa8')],_0x55cee3,_0x3f4b6d,_0x41f3f8);_0x2828ae['statlyMachine']['queue']();_0x42e87c(JSON[_0x308c('0x2a')]({'state':_0x1c9b5f,'info':_0x308c('0x8b'),'message':_0x55cee3[_0x308c('0x87')],'queueLength':_0x2828ae[_0x308c('0x1c')][_0x308c('0x2c')](_0x55cee3[_0x308c('0x85')])[_0x308c('0x2d')]}));}else{_0x2828ae[_0x308c('0xa8')](_0x55cee3,_0x3f4b6d,_0x41f3f8);}});_0x2828ae[_0x308c('0xa8')]=function(_0x545e5c,_0x3467a4,_0x198020){if(!_0x2828ae[_0x308c('0x1b')]){return;}if(!_0x2828ae[_0x308c('0x9')]){_0x2828ae[_0x308c('0x22')]['read']();}_0x2828ae[_0x308c('0x1b')][_0x308c('0x6c')](_0x2828ae[_0x308c('0x17')]);_0x42e87c(JSON['stringify']({'info':_0x308c('0x8d'),'message':_0x545e5c[_0x308c('0x87')],'unitid':_0x545e5c[_0x308c('0xaa')],'timeout':_0x2828ae['client'][_0x308c('0xab')](),'state':_0x2828ae[_0x308c('0x22')][_0x308c('0x25')]()}));try{switch(parseInt(_0x545e5c[_0x308c('0x87')]['fc'],0xa)){case 0x1:_0x2828ae['client'][_0x308c('0xa4')](parseInt(_0x545e5c[_0x308c('0x87')][_0x308c('0x90')],0xa),parseInt(_0x545e5c[_0x308c('0x87')]['quantity'],0xa))[_0x308c('0x6a')](function(_0x12a336){_0x2828ae[_0x308c('0xac')](_0x545e5c);_0x3467a4(_0x12a336,_0x545e5c);})[_0x308c('0x61')](function(_0x3e1031){_0x2828ae[_0x308c('0xac')](_0x545e5c);_0x198020(_0x3e1031,_0x545e5c);_0x2828ae['modbusErrorHandling'](_0x3e1031);});break;case 0x2:_0x2828ae[_0x308c('0x1b')][_0x308c('0xa5')](parseInt(_0x545e5c['payload'][_0x308c('0x90')],0xa),parseInt(_0x545e5c[_0x308c('0x87')]['quantity'],0xa))[_0x308c('0x6a')](function(_0x9e78b2){_0x2828ae[_0x308c('0xac')](_0x545e5c);_0x3467a4(_0x9e78b2,_0x545e5c);})['catch'](function(_0x22298d){_0x2828ae[_0x308c('0xac')](_0x545e5c);_0x198020(_0x22298d,_0x545e5c);_0x2828ae[_0x308c('0x73')](_0x22298d);});break;case 0x3:_0x2828ae[_0x308c('0x1b')][_0x308c('0xad')](parseInt(_0x545e5c['payload'][_0x308c('0x90')],0xa),parseInt(_0x545e5c['payload'][_0x308c('0xae')],0xa))[_0x308c('0x6a')](function(_0x5ce988){_0x2828ae['activateSending'](_0x545e5c);_0x3467a4(_0x5ce988,_0x545e5c);})[_0x308c('0x61')](function(_0x5e1ce7){_0x2828ae['activateSending'](_0x545e5c);_0x198020(_0x5e1ce7,_0x545e5c);_0x2828ae['modbusErrorHandling'](_0x5e1ce7);});break;case 0x4:_0x2828ae['client'][_0x308c('0xa6')](parseInt(_0x545e5c['payload']['address'],0xa),parseInt(_0x545e5c[_0x308c('0x87')][_0x308c('0xae')],0xa))[_0x308c('0x6a')](function(_0x4683c4){_0x2828ae[_0x308c('0xac')](_0x545e5c);_0x3467a4(_0x4683c4,_0x545e5c);})['catch'](function(_0x411298){_0x2828ae['activateSending'](_0x545e5c);_0x198020(_0x411298,_0x545e5c);_0x2828ae[_0x308c('0x73')](_0x411298);});break;default:_0x2828ae[_0x308c('0xac')](_0x545e5c);_0x198020(new Error(_0x308c('0xaf')),_0x545e5c);_0x5ced40['internalDebug']('Function\x20Code\x20Unknown\x20%s',_0x545e5c[_0x308c('0x87')]['fc']);break;}}catch(_0x1a4912){_0x5ced40[_0x308c('0x40')](_0x1a4912[_0x308c('0x5b')]);_0x2828ae['modbusErrorHandling'](_0x1a4912);}};_0x2828ae['on'](_0x308c('0xb0'),function(_0x33f326,_0x7ca01a,_0x160e81){const _0x1d2394=_0x2828ae[_0x308c('0x22')]['getMachineState']();if(_0x2828ae[_0x308c('0x1f')][_0x308c('0x36')](_0x1d2394)===-0x1){_0x160e81(_0x308c('0xb1'),_0x33f326);return;}if(_0x2828ae['bufferCommands']){_0x33f326[_0x308c('0xb2')]=_0x2828ae[_0x308c('0x83')]();_0x2828ae[_0x308c('0x84')](_0x2828ae[_0x308c('0xb0')],_0x33f326,_0x7ca01a,_0x160e81);_0x2828ae['statlyMachine'][_0x308c('0x52')]();_0x42e87c(JSON[_0x308c('0x2a')]({'msg':_0x33f326,'state':_0x1d2394,'info':'queue\x20write\x20msg','queueLength':_0x2828ae['bufferCommandList'][_0x308c('0x2c')](_0x33f326[_0x308c('0x85')])[_0x308c('0x2d')]}));}else{_0x2828ae[_0x308c('0xb0')](_0x33f326,_0x7ca01a,_0x160e81);}});_0x2828ae[_0x308c('0xb0')]=function(_0x14f812,_0xe4ae64){if(!_0x2828ae[_0x308c('0x1b')]){return;}if(!_0x2828ae[_0x308c('0x9')]){_0x2828ae[_0x308c('0x22')][_0x308c('0xb3')]();}_0x2828ae['client'][_0x308c('0x6c')](_0x2828ae[_0x308c('0x17')]);const _0x4b3753=[];_0x4a4982[_0x308c('0x8e')](_0x14f812[_0x308c('0x87')][_0x308c('0x8f')],function(_0x24d6ee,_0x4ff9f3){const _0x292a61=_0x24d6ee[_0x308c('0x90')][_0x308c('0x91')](/\d+/)[0x0];const _0x2c3077=_0x24d6ee[_0x308c('0x90')]['split'](_0x292a61)[0x0];const _0x5063cb=_0x24d6ee[_0x308c('0xb4')];let _0x337a11=_0x7c0d0a['getWriteFCCode'](_0x2c3077);const _0x33c2b6=_0x24d6ee[_0x308c('0xb5')];if(_0x7c0d0a['checkVariableType'](_0x33c2b6)){_0x24d6ee[_0x308c('0xb6')]=_0x24d6ee[_0x308c('0xb6')];}else if(_0x33c2b6===_0x308c('0x9c')||_0x33c2b6===_0x308c('0x9e')||_0x33c2b6===_0x308c('0x9f')){_0x24d6ee[_0x308c('0xb6')]=_0x24d6ee[_0x308c('0xb6')];}else if(_0x33c2b6==='REAL'||_0x33c2b6==='DINT'||_0x33c2b6===_0x308c('0xb7')||_0x33c2b6===_0x308c('0x9a')){_0x337a11=_0x337a11+0xa;_0x24d6ee[_0x308c('0xb6')]=_0x24d6ee[_0x308c('0xb6')];}else{_0x24d6ee['value']=_0x24d6ee[_0x308c('0xb6')];}try{_0x575c8f(_0x337a11,_0x292a61,_0x35c0cc(_0x24d6ee['value'],_0x33c2b6),_0x33c2b6,_0x5063cb,function(){_0x24d6ee['msg']=_0x308c('0xb8');_0x4b3753[_0x308c('0x88')](_0x24d6ee);_0x4ff9f3();},function(_0x307fe8){_0x24d6ee['error']=_0x307fe8[_0x308c('0x5b')]||_0x307fe8;_0x24d6ee[_0x308c('0xb9')]=null;_0x4b3753[_0x308c('0x88')](_0x24d6ee);_0x4ff9f3();});}catch(_0x63ac58){_0x24d6ee['error']=_0x63ac58['message'];_0x24d6ee[_0x308c('0xb9')]=null;_0x4b3753[_0x308c('0x88')](_0x24d6ee);_0x4ff9f3();}},function(){_0xe4ae64(_0x4b3753);_0x2828ae[_0x308c('0xac')](_0x14f812);});_0x42e87c(JSON[_0x308c('0x2a')]({'msg':_0x14f812,'info':_0x308c('0xba'),'unitid':_0x14f812[_0x308c('0xaa')],'timeout':_0x2828ae['client']['getTimeout'](),'state':_0x2828ae[_0x308c('0x22')]['getMachineState']()}));};const _0x2b7fd8=function(_0x3e9ee5,_0x93fb31){return(_0x3e9ee5==='UINT'||_0x3e9ee5===_0x308c('0x9f'))&&(_0x93fb31>=0x0&&_0x93fb31<=0xffff);};const _0x34c5c8=function(_0xdfb29a,_0x43ef7d){return(_0xdfb29a==='UDINT'||_0xdfb29a===_0x308c('0x9a'))&&(_0x43ef7d>=0x0&&_0x43ef7d<=0xffffffff);};const _0x2a55ab=function(_0x498f64,_0x3f0560){let _0x375082,_0x571180;if(_0x498f64==='INT'&&(_0x3f0560>=-0x8000&&_0x3f0560<=0x7fff)){_0x571180=parseInt(_0x7c0d0a[_0x308c('0xbb')](_0x3f0560),0x10);}else if(_0x2b7fd8(_0x498f64,_0x3f0560)){_0x571180=parseInt(_0x7c0d0a['getHexFromUInt'](_0x3f0560),0x10);}else if(_0x498f64===_0x308c('0x98')&&(_0x3f0560>=-0x80000000&&_0x3f0560<=0x7fffffff)){_0x375082=_0x7c0d0a[_0x308c('0xbc')](_0x3f0560);_0x571180=_0x375082;}else if(_0x34c5c8(_0x498f64,_0x3f0560)){_0x375082=_0x7c0d0a[_0x308c('0xbd')](_0x3f0560);_0x571180=_0x375082;}else{throw Error(_0x308c('0xbe')+_0x3f0560+_0x308c('0xbf')+_0x498f64+'\x20('+_0x3e1695[_0x498f64]+')');}return _0x571180;};function _0x35c0cc(_0x40bbbc,_0x1b784f){if(_0x7c0d0a['checkVariableType'](_0x1b784f)){return _0x40bbbc;}else{if(typeof _0x40bbbc===_0x308c('0xc0')&&Number[_0x308c('0xc1')](_0x40bbbc)){let _0x202b69;if(_0x7c0d0a[_0x308c('0xc2')](_0x40bbbc)&&_0x1b784f===_0x308c('0x95')){const _0x22f778=_0x7c0d0a[_0x308c('0xc3')](_0x40bbbc);_0x202b69=_0x22f778;}else if(typeof _0x40bbbc===typeof!![]&&_0x7c0d0a[_0x308c('0xc4')](_0x1b784f)){_0x202b69=_0x40bbbc;}else{_0x202b69=_0x2a55ab(_0x1b784f,_0x40bbbc);}return _0x202b69;}else{throw Error('Value\x20to\x20write\x20not\x20provided');}}}function _0x575c8f(_0x4bbc96,_0x403038,_0x5f224a,_0x24fd55,_0x40594c,_0x234c58,_0x36f8c2){let _0x201a8b=_0x403038;if(_0x24fd55===_0x308c('0x95')||_0x24fd55===_0x308c('0x98')||_0x24fd55===_0x308c('0xb7')||_0x24fd55===_0x308c('0x9a')){_0x201a8b=_0x201a8b*_0x40594c;}try{switch(_0x4bbc96){case 0xf:_0x2828ae['client'][_0x308c('0xc5')](parseInt(_0x201a8b,0xa),_0x5f224a)[_0x308c('0x6a')](function(_0x524b79){_0x234c58(_0x524b79[_0x308c('0x97')]);})[_0x308c('0x61')](function(_0x3a9547){_0x36f8c2(_0x3a9547);_0x2828ae[_0x308c('0x73')](_0x3a9547);});break;case 0x5:_0x2828ae['client'][_0x308c('0xc6')](parseInt(_0x201a8b,0xa),_0x5f224a)['then'](function(_0x23b310){_0x234c58(_0x23b310[_0x308c('0x97')]);})[_0x308c('0x61')](function(_0x194cb9){_0x36f8c2(_0x194cb9);_0x2828ae[_0x308c('0x73')](_0x194cb9);});break;case 0x10:_0x2828ae[_0x308c('0x1b')][_0x308c('0xc7')](parseInt(_0x201a8b,0xa),_0x5f224a)['then'](function(_0x5dd27f){_0x234c58(_0x5dd27f[_0x308c('0x97')]);})['catch'](function(_0xa84984){_0x36f8c2(_0xa84984);_0x2828ae[_0x308c('0x73')](_0xa84984);});break;case 0x6:_0x2828ae[_0x308c('0x1b')][_0x308c('0xc8')](parseInt(_0x201a8b,0xa),_0x5f224a)[_0x308c('0x6a')](function(_0x282f3d){_0x234c58(_0x282f3d[_0x308c('0x97')]);})[_0x308c('0x61')](function(_0x5444ab){_0x36f8c2(_0x5444ab);_0x2828ae['modbusErrorHandling'](_0x5444ab);});break;default:_0x36f8c2(_0x308c('0xa7'));break;}}catch(_0x18dd59){_0x5ced40['internalDebug'](_0x18dd59['message']);_0x2828ae[_0x308c('0x73')](_0x18dd59);_0x36f8c2(_0x18dd59);}}_0x2828ae['on']('writeModbus',function(_0x363746,_0x298722,_0x3dc016){const _0x234e80=_0x2828ae[_0x308c('0x22')][_0x308c('0x25')]();if(_0x2828ae[_0x308c('0x1f')][_0x308c('0x36')](_0x234e80)===-0x1){_0x3dc016(new Error(_0x308c('0xc9')+_0x234e80),_0x363746);return;}if(_0x2828ae[_0x308c('0x9')]){_0x363746[_0x308c('0xb2')]=_0x2828ae[_0x308c('0x83')]();_0x2828ae['pushToQueueByUnitId'](_0x2828ae[_0x308c('0xca')],_0x363746,_0x298722,_0x3dc016);_0x2828ae[_0x308c('0x22')]['queue']();_0x42e87c(JSON[_0x308c('0x2a')]({'state':_0x234e80,'info':_0x308c('0xcb'),'message':_0x363746[_0x308c('0x87')],'queueLength':_0x2828ae[_0x308c('0x1c')][_0x308c('0x2c')](_0x363746['queueUnit'])[_0x308c('0x2d')]}));}else{_0x2828ae['writeModbus'](_0x363746,_0x298722,_0x3dc016);}});_0x2828ae['writeModbus']=function(_0x45cf2c,_0x3f408d,_0x22be30){if(!_0x2828ae[_0x308c('0x1b')]){return;}if(!_0x2828ae[_0x308c('0x9')]){_0x2828ae['statlyMachine'][_0x308c('0xb3')]();}_0x2828ae['client'][_0x308c('0x6c')](_0x2828ae[_0x308c('0x17')]);_0x42e87c(JSON[_0x308c('0x2a')]({'info':_0x308c('0xba'),'message':_0x45cf2c[_0x308c('0x87')],'unitid':_0x45cf2c[_0x308c('0xaa')],'timeout':_0x2828ae[_0x308c('0x1b')][_0x308c('0xab')](),'state':_0x2828ae[_0x308c('0x22')][_0x308c('0x25')]()}));try{switch(parseInt(_0x45cf2c[_0x308c('0x87')]['fc'],0xa)){case 0xf:if(parseInt(_0x45cf2c['payload'][_0x308c('0xb6')]['length'],0xa)!==parseInt(_0x45cf2c[_0x308c('0x87')][_0x308c('0xae')],0xa)){_0x2828ae[_0x308c('0xac')](_0x45cf2c);_0x22be30(new Error('Quantity\x20should\x20be\x20less\x20or\x20equal\x20to\x20coil\x20payload\x20array\x20length:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x45cf2c[_0x308c('0x87')][_0x308c('0xb6')]['length']+_0x308c('0xcc')+_0x45cf2c[_0x308c('0x87')]['address']+_0x308c('0xcd')+_0x45cf2c[_0x308c('0x87')]['quantity']),_0x45cf2c);}else{_0x2828ae[_0x308c('0x1b')][_0x308c('0xc5')](parseInt(_0x45cf2c[_0x308c('0x87')][_0x308c('0x90')],0xa),_0x45cf2c[_0x308c('0x87')]['value'])[_0x308c('0x6a')](function(_0x30da5e){_0x2828ae['activateSending'](_0x45cf2c);_0x3f408d(_0x30da5e,_0x45cf2c);})[_0x308c('0x61')](function(_0x7e4323){_0x2828ae[_0x308c('0xac')](_0x45cf2c);_0x22be30(_0x7e4323,_0x45cf2c);_0x2828ae[_0x308c('0x73')](_0x7e4323);});}break;case 0x5:if(_0x45cf2c[_0x308c('0x87')][_0x308c('0xb6')]){_0x45cf2c[_0x308c('0x87')][_0x308c('0xb6')]=!![];}else{_0x45cf2c['payload'][_0x308c('0xb6')]=![];}_0x2828ae[_0x308c('0x1b')][_0x308c('0xc6')](parseInt(_0x45cf2c[_0x308c('0x87')]['address'],0xa),_0x45cf2c[_0x308c('0x87')][_0x308c('0xb6')])[_0x308c('0x6a')](function(_0x5ce11d){_0x2828ae['activateSending'](_0x45cf2c);_0x3f408d(_0x5ce11d,_0x45cf2c);})[_0x308c('0x61')](function(_0x3bb741){_0x2828ae[_0x308c('0xac')](_0x45cf2c);_0x22be30(_0x3bb741,_0x45cf2c);_0x2828ae[_0x308c('0x73')](_0x3bb741);});break;case 0x10:if(parseInt(_0x45cf2c['payload'][_0x308c('0xb6')]['length'],0xa)!==parseInt(_0x45cf2c['payload'][_0x308c('0xae')],0xa)){_0x2828ae[_0x308c('0xac')](_0x45cf2c);_0x22be30(new Error('Quantity\x20should\x20be\x20less\x20or\x20equal\x20to\x20register\x20payload\x20array\x20length:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x45cf2c[_0x308c('0x87')][_0x308c('0xb6')][_0x308c('0x2d')]+_0x308c('0xcc')+_0x45cf2c['payload'][_0x308c('0x90')]+_0x308c('0xcd')+_0x45cf2c[_0x308c('0x87')]['quantity']),_0x45cf2c);}else{_0x2828ae[_0x308c('0x1b')][_0x308c('0xc7')](parseInt(_0x45cf2c['payload'][_0x308c('0x90')],0xa),_0x45cf2c[_0x308c('0x87')][_0x308c('0xb6')])['then'](function(_0x1b0fc0){_0x2828ae[_0x308c('0xac')](_0x45cf2c);_0x3f408d(_0x1b0fc0,_0x45cf2c);})['catch'](function(_0x4aa3ca){_0x2828ae['activateSending'](_0x45cf2c);_0x22be30(_0x4aa3ca,_0x45cf2c);_0x2828ae[_0x308c('0x73')](_0x4aa3ca);});}break;case 0x6:_0x2828ae['client'][_0x308c('0xc8')](parseInt(_0x45cf2c[_0x308c('0x87')][_0x308c('0x90')],0xa),parseInt(_0x45cf2c[_0x308c('0x87')][_0x308c('0xb6')],0xa))[_0x308c('0x6a')](function(_0x56712f){_0x2828ae['activateSending'](_0x45cf2c);_0x3f408d(_0x56712f,_0x45cf2c);})['catch'](function(_0x31061f){_0x2828ae[_0x308c('0xac')](_0x45cf2c);_0x22be30(_0x31061f,_0x45cf2c);_0x2828ae[_0x308c('0x73')](_0x31061f);});break;default:_0x2828ae[_0x308c('0xac')](_0x45cf2c);_0x22be30(new Error('Function\x20Code\x20Unknown'),_0x45cf2c);_0x5ced40['internalDebug']('Function\x20Code\x20Unknown\x20%s',_0x45cf2c[_0x308c('0x87')]['fc']);break;}}catch(_0x259b0e){_0x5ced40[_0x308c('0x40')](_0x259b0e['message']);_0x2828ae[_0x308c('0x73')](_0x259b0e);}};_0x2828ae[_0x308c('0xac')]=function(_0x15c46c){if(_0x2828ae[_0x308c('0x9')]){_0x2828ae['sendAllowed'][_0x308c('0x28')](_0x15c46c[_0x308c('0x85')],!![]);_0x42e87c(JSON[_0x308c('0x2a')]({'info':_0x308c('0xce'),'message':_0x15c46c[_0x308c('0x87')],'queueLength':_0x2828ae[_0x308c('0x1c')][_0x308c('0x2d')]}));}_0x2828ae[_0x308c('0x22')][_0x308c('0x4f')]();};_0xd019c(_0x308c('0xcf'));_0x2828ae[_0x308c('0xd0')](_0x210d5e);_0x2828ae['on'](_0x308c('0xd1'),function(){_0x2828ae['statlyMachine']['failure']()[_0x308c('0x7f')]();});_0x2828ae['on'](_0x308c('0x7f'),function(_0x1a0200){_0x2828ae[_0x308c('0x22')]['failure']()['stop']();_0xd019c(_0x308c('0xd2'));if(_0x2828ae[_0x308c('0x1b')]){_0x2828ae[_0x308c('0x1b')][_0x308c('0x7f')](function(){_0xd019c(_0x308c('0x5a'));_0x1a0200();})[_0x308c('0x61')](function(_0x5379a5){_0xd019c(_0x5379a5['message']);_0x1a0200();});}else{_0x1a0200();}});_0x2828ae['registeredNodeList']={};_0x2828ae[_0x308c('0xd3')]=function(_0x23e7b7){_0x2828ae[_0x308c('0xd4')][_0x23e7b7['id']]=_0x23e7b7;if(Object[_0x308c('0xd5')](_0x2828ae[_0x308c('0xd4')])['length']===0x1){_0x2828ae[_0x308c('0x1a')]=![];_0x2828ae[_0x308c('0x22')]['init']();}};_0x2828ae[_0x308c('0xd6')]=function(_0x581e45,_0x40fe19){delete _0x2828ae[_0x308c('0xd4')][_0x581e45['id']];if(_0x2828ae[_0x308c('0x1a')]){_0x40fe19();}if(Object[_0x308c('0xd5')](_0x2828ae[_0x308c('0xd4')])[_0x308c('0x2d')]===0x0){_0x2828ae[_0x308c('0x1a')]=!![];if(_0x2828ae[_0x308c('0x1b')]){_0x2828ae['client'][_0x308c('0x7f')](function(){_0x2828ae[_0x308c('0x22')][_0x308c('0x7f')]()[_0x308c('0x57')]()['stop']();_0x40fe19();})[_0x308c('0x61')](function(_0x1a2698){_0x2828ae[_0x308c('0x22')][_0x308c('0x5d')]()['stop']();_0xd019c(_0x1a2698[_0x308c('0x5b')]);_0x40fe19();});}else{_0x40fe19();}}else{_0x40fe19();}};}_0x57ae5e[_0x308c('0x6')][_0x308c('0xd7')](_0x308c('0xd8'),_0x33b501);_0x57ae5e[_0x308c('0xd9')]['get'](_0x308c('0xda'),_0x57ae5e[_0x308c('0xdb')][_0x308c('0xdc')](_0x308c('0xdd')),function(_0x2ae85f,_0xa1363b){const _0x4889a9=require(_0x308c('0xde'));_0x4889a9[_0x308c('0xdf')](function(_0x2fac1f,_0x3d25a3){if(_0x2fac1f){_0xa1363b['json']({'success':![]});}else{_0xa1363b[_0x308c('0xe0')]({'success':!![],'ports':_0x3d25a3});}});});};