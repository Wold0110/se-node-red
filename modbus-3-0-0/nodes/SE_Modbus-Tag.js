var _0x15ea=['logError','msg','message','Timed\x20out','FSM\x20Reset\x20On\x20State\x20EMPTY','Device\x20is\x20not\x20connected','reconnect','COM\x20Port\x20in\x20use','COM\x20Port\x20is\x20already\x20opened','Modbus\x20exception\x201','Illegal\x20Function\x20Code','Modbus\x20exception\x202','Illegal\x20Data\x20Address','Modbus\x20exception\x203','Illegal\x20Data\x20Value','Slave\x20Device\x20Failure','FSM\x20Not\x20Ready\x20To\x20Read','Read\x20Error','FSM\x20Not\x20Ready\x20To\x20Write','registerType','SE_Modbus-Tag','exports','nodes','createNode','../src/logging','../src/modbus-basics','getNode','server','timeoutID','intervalID','init_var','name','clienttype','toUpperCase','tcpHost','unit_id','registerForModbus','configError','setNodeStatusTo','onModbusConnect','connected','modbusPollingRead','rate','rateUnit','NODE\x20Name::','\x20:NODE\x20ID::','\x20::connected','onModbusClose','disconnected','connecting','mbinit','onModbusInit','mbclosed','client','active','alltags','parse','filter','length','isReadResponseReceived','polling','emit','readModbusTags','onModbusReadDone','onModbusReadError','send','Tags\x20not\x20imported','buildMessage',':NODE\x20ID::','\x20::','count','readErrorCount','\x20out\x20of\x20','\x0a\x20\x20\x20\x20\x20\x20\x20parameters\x20have\x20been\x20read\x20successfully','isAnyError','\x20parameters\x20have\x20been\x20read\x20successfully','success','output','keys','payload','write','map','hasOwnProperty','value','address','topic','onModbusFlexWriteDone','onModbusWriteError','Invalid\x20count\x20of\x20input','error','isArray','action','write\x20key\x20is\x20missing\x20in\x20input','Wrong\x20input\x20format','writeMessage','logInfo','\x0a\x20\x20\x20\x20\x20\x20\x20parameters\x20have\x20been\x20written\x20successfully','writeErrorCount','\x20parameters\x20have\x20been\x20written\x20successfully','\x20of\x20','close','statlyMachine','INIT','status','reset'];(function(_0x30e2c7,_0x3ff39d){var _0x48c7a7=function(_0x553adb){while(--_0x553adb){_0x30e2c7['push'](_0x30e2c7['shift']());}};_0x48c7a7(++_0x3ff39d);}(_0x15ea,0x1b9));var _0x14e9=function(_0x27c18e,_0x790608){_0x27c18e=_0x27c18e-0x0;var _0xabe62f=_0x15ea[_0x27c18e];return _0xabe62f;};module[_0x14e9('0x0')]=function(_0x141354){function _0x3f5d88(_0x28556d){_0x141354[_0x14e9('0x1')][_0x14e9('0x2')](this,_0x28556d);const _0x5058aa=this,_0x1b7988=require(_0x14e9('0x3')),_0x70630=require(_0x14e9('0x4')),_0x91cd58=require('../src/tagconfig');const _0x3f598a=_0x141354['nodes'][_0x14e9('0x5')](_0x28556d[_0x14e9('0x6')]);let _0x520ce9='';_0x5058aa[_0x14e9('0x7')]=null;_0x5058aa[_0x14e9('0x8')]=null;_0x5058aa['isReadResponseReceived']=!![];const _0x356a05=function(){_0x5058aa[_0x14e9('0x7')]=setTimeout(_0x27e3ca,0xbb8);};const _0x46d71f=function(){if(_0x5058aa['timeoutID']){clearTimeout(_0x5058aa['timeoutID']);}_0x5058aa['timeoutID']=null;};const _0x3c0e94=function(){if(_0x5058aa[_0x14e9('0x8')]){clearInterval(_0x5058aa['intervalID']);}_0x5058aa[_0x14e9('0x8')]=null;};_0x91cd58[_0x14e9('0x9')](_0x5058aa,_0x28556d,_0x1b7988);if(_0x3f598a){if(_0x3f598a['clienttype']==='tcp'){_0x520ce9=''+_0x3f598a[_0x14e9('0xa')]+_0x3f598a[_0x14e9('0xb')][_0x14e9('0xc')]()+'@'+_0x3f598a[_0x14e9('0xd')];}else{_0x520ce9=''+_0x3f598a['name']+_0x3f598a[_0x14e9('0xb')][_0x14e9('0xc')]()+'@'+_0x3f598a[_0x14e9('0xe')];}if(_0x5058aa['alltags']){_0x3f598a[_0x14e9('0xf')](_0x5058aa);_0x91cd58['setNodeStatusTo']('connecting',_0x5058aa);}else{_0x91cd58['setNodeStatusTo'](_0x14e9('0x10'),_0x5058aa);}}else{_0x91cd58[_0x14e9('0x11')](_0x14e9('0x10'),_0x5058aa);return;}_0x5058aa[_0x14e9('0x12')]=function(){if(!_0x5058aa[_0x14e9('0x8')]){if(_0x5058aa['alltags']){_0x91cd58[_0x14e9('0x11')](_0x14e9('0x13'),_0x5058aa);_0x5058aa[_0x14e9('0x8')]=setInterval(_0x5058aa[_0x14e9('0x14')],_0x70630['calc_rateByUnit'](_0x5058aa[_0x14e9('0x15')],_0x5058aa[_0x14e9('0x16')]));_0x1b7988['logInfo'](_0x14e9('0x17')+_0x5058aa[_0x14e9('0xa')]+_0x14e9('0x18')+_0x5058aa['id']+_0x14e9('0x19'),_0x5058aa);}else{_0x91cd58[_0x14e9('0x11')]('configError',_0x5058aa);}}};_0x5058aa['onModbusError']=function(_0x28b05e){_0x3c0e94();_0x4c95b8({'message':_0x28b05e});};_0x5058aa[_0x14e9('0x1a')]=function(){_0x3c0e94();_0x91cd58[_0x14e9('0x11')](_0x14e9('0x1b'),_0x5058aa);};_0x5058aa['onModbusInit']=function(){_0x91cd58[_0x14e9('0x11')](_0x14e9('0x1c'),_0x5058aa);};_0x3f598a['on'](_0x14e9('0x1d'),_0x5058aa[_0x14e9('0x1e')]);_0x3f598a['on']('mbconnected',_0x5058aa['onModbusConnect']);_0x3f598a['on']('mberror',_0x5058aa['onModbusError']);_0x3f598a['on'](_0x14e9('0x1f'),_0x5058aa[_0x14e9('0x1a')]);_0x5058aa[_0x14e9('0x14')]=function(){if(!_0x3f598a[_0x14e9('0x20')]){_0x91cd58[_0x14e9('0x11')](_0x14e9('0x21'),_0x5058aa);return;}if(_0x5058aa[_0x14e9('0x22')]){const _0x2e17d6=JSON[_0x14e9('0x23')](_0x5058aa['alltags']);const _0x3f718b=_0x2e17d6[_0x14e9('0x24')](_0x4c1d02=>_0x4c1d02['action']==='Read');if(_0x3f718b[_0x14e9('0x25')]){if(_0x5058aa[_0x14e9('0x26')]){const _0x324807={'topic':_0x14e9('0x27'),'from':_0x5058aa['name'],'payload':{'tags':_0x3f718b}};_0x3f598a[_0x14e9('0x28')](_0x14e9('0x29'),_0x324807,_0x5058aa[_0x14e9('0x2a')],_0x5058aa[_0x14e9('0x2b')]);}else{}_0x5058aa[_0x14e9('0x26')]=![];}else{}}else{_0x5058aa[_0x14e9('0x2c')](_0xba424c({'msg':_0x14e9('0x2d'),'status':_0x14e9('0x10'),'reset':![]}));}};_0x5058aa[_0x14e9('0x2a')]=function(_0x168663){_0x5058aa['isReadResponseReceived']=!![];const _0x2dffd7=_0x91cd58[_0x14e9('0x2e')](_0x168663,_0x5058aa,_0x520ce9);_0x1b7988['logInfo']('NODE\x20Name::'+_0x5058aa[_0x14e9('0xa')]+_0x14e9('0x2f')+_0x5058aa['id']+_0x14e9('0x30')+(_0x2dffd7[_0x14e9('0x31')]-_0x2dffd7[_0x14e9('0x32')])+_0x14e9('0x33')+_0x2dffd7[_0x14e9('0x31')]+_0x14e9('0x34'),_0x5058aa);if(_0x2dffd7[_0x14e9('0x35')]){if(_0x2dffd7[_0x14e9('0x31')]-_0x2dffd7[_0x14e9('0x32')]===0x0){_0x91cd58[_0x14e9('0x11')]('error',_0x5058aa);}else{_0x5058aa[_0x14e9('0x2c')]({'payload':_0x2dffd7['count']-_0x2dffd7['readErrorCount']+_0x14e9('0x33')+_0x2dffd7[_0x14e9('0x31')]+_0x14e9('0x36')});_0x91cd58['setNodeStatusTo'](_0x14e9('0x37'),_0x5058aa,'\x20('+(_0x2dffd7['count']-_0x2dffd7['readErrorCount'])+'\x20of\x20'+_0x2dffd7[_0x14e9('0x31')]+')');}}else{_0x91cd58[_0x14e9('0x11')](_0x14e9('0x37'),_0x5058aa);}_0x5058aa[_0x14e9('0x2c')]({'payload':_0x2dffd7[_0x14e9('0x38')]});_0x356a05();};_0x5058aa[_0x14e9('0x2b')]=function(_0x1539b0){_0x3c0e94();_0x498202(_0x1539b0);};function _0x46a854(_0x44bb1d,_0xade036){if(_0xade036[_0x14e9('0x25')]===Object[_0x14e9('0x39')](_0x44bb1d[_0x14e9('0x3a')][_0x14e9('0x3b')])['length']){const _0x5c95d8=_0xade036[_0x14e9('0x3c')](function(_0x33f84b){if(_0x44bb1d[_0x14e9('0x3a')]['write'][_0x14e9('0x3d')](_0x33f84b[_0x14e9('0xa')])){_0x33f84b[_0x14e9('0x3e')]=_0x44bb1d[_0x14e9('0x3a')][_0x14e9('0x3b')][_0x33f84b['name']];}else if(_0x44bb1d[_0x14e9('0x3a')][_0x14e9('0x3b')][_0x14e9('0x3d')](_0x33f84b[_0x14e9('0x3f')])){_0x33f84b[_0x14e9('0x3e')]=_0x44bb1d[_0x14e9('0x3a')]['write'][_0x33f84b[_0x14e9('0x3f')]];}else{}return _0x33f84b;});const _0x228069={'topic':_0x44bb1d[_0x14e9('0x40')]||_0x5058aa['id'],'payload':{'tags':_0x5c95d8}};_0x3f598a[_0x14e9('0x28')]('writeModbusTags',_0x228069,_0x5058aa[_0x14e9('0x41')],_0x5058aa[_0x14e9('0x42')]);}else{_0x5058aa[_0x14e9('0x2c')](_0xba424c({'msg':_0x14e9('0x43'),'status':_0x14e9('0x44'),'reset':!![]}));}}_0x5058aa['on']('input',function(_0x19d957){if(_0x5058aa['alltags']){const _0x53a13a=JSON[_0x14e9('0x23')](_0x5058aa[_0x14e9('0x22')]);if(!(_0x19d957&&_0x19d957[_0x14e9('0x3d')](_0x14e9('0x3a')))||_0x19d957[_0x14e9('0x3a')]===null){_0x5058aa['send'](_0xba424c({'msg':'Invalid\x20msg\x20payload','status':_0x14e9('0x44'),'reset':!![]}));return;}if(!_0x3f598a[_0x14e9('0x20')]){return;}if(typeof _0x19d957[_0x14e9('0x3a')]===typeof{}&&!Array[_0x14e9('0x45')](_0x19d957[_0x14e9('0x3a')])){const _0x18254b=_0x53a13a[_0x14e9('0x24')](_0x30b4bc=>_0x30b4bc[_0x14e9('0x46')]==='Write');if(_0x19d957['payload'][_0x14e9('0x3d')](_0x14e9('0x3b'))){_0x46a854(_0x19d957,_0x18254b);}else{_0x5058aa[_0x14e9('0x2c')](_0xba424c({'msg':_0x14e9('0x47'),'status':_0x14e9('0x44'),'reset':!![]}));}}else{_0x5058aa[_0x14e9('0x2c')](_0xba424c({'msg':_0x14e9('0x48'),'status':_0x14e9('0x44'),'reset':!![]}));}}else{_0x5058aa[_0x14e9('0x2c')](_0xba424c({'msg':'Tags\x20not\x20found','status':_0x14e9('0x44'),'reset':!![]}));}});_0x5058aa[_0x14e9('0x41')]=function(_0x557055){const _0x53b015=_0x91cd58[_0x14e9('0x49')](_0x557055,_0x5058aa,_0x520ce9,_0x1b7988);_0x1b7988[_0x14e9('0x4a')](_0x14e9('0x17')+_0x5058aa[_0x14e9('0xa')]+':NODE\x20ID::'+_0x5058aa['id']+_0x14e9('0x30')+(_0x53b015[_0x14e9('0x31')]-_0x53b015['writeErrorCount'])+_0x14e9('0x33')+_0x53b015['count']+_0x14e9('0x4b'),_0x5058aa);if(_0x53b015[_0x14e9('0x35')]){if(_0x53b015['count']-_0x53b015[_0x14e9('0x4c')]===0x0){_0x91cd58[_0x14e9('0x11')]('error',_0x5058aa);}else{_0x5058aa['send']({'payload':_0x53b015[_0x14e9('0x31')]-_0x53b015[_0x14e9('0x4c')]+_0x14e9('0x33')+_0x53b015[_0x14e9('0x31')]+_0x14e9('0x4d')});_0x91cd58[_0x14e9('0x11')](_0x14e9('0x37'),_0x5058aa,'\x20('+(_0x53b015[_0x14e9('0x31')]-_0x53b015[_0x14e9('0x4c')])+_0x14e9('0x4e')+_0x53b015[_0x14e9('0x31')]+')');}}else{_0x91cd58[_0x14e9('0x11')](_0x14e9('0x37'),_0x5058aa);}_0x5058aa['send']({'payload':_0x53b015[_0x14e9('0x38')]});_0x356a05();};_0x5058aa[_0x14e9('0x42')]=function(_0x514d0c){_0x498202(_0x514d0c);};_0x5058aa['on'](_0x14e9('0x4f'),function(){_0x3c0e94();_0x91cd58['setNodeStatusTo'](_0x14e9('0x1b'),_0x5058aa);});function _0x27e3ca(){const _0x4953c4=_0x3f598a[_0x14e9('0x50')]['getMachineState']();if(_0x4953c4===_0x14e9('0x51')){_0x91cd58['setNodeStatusTo'](_0x14e9('0x1c'),_0x5058aa);}else{_0x91cd58[_0x14e9('0x11')](_0x14e9('0x13'),_0x5058aa);}_0x46d71f();}function _0xba424c(_0x13ea46){_0x91cd58['setNodeStatusTo'](_0x13ea46[_0x14e9('0x52')],_0x5058aa);if(_0x13ea46[_0x14e9('0x53')]){_0x356a05();}_0x1b7988[_0x14e9('0x54')](_0x14e9('0x17')+_0x5058aa[_0x14e9('0xa')]+_0x14e9('0x2f')+_0x5058aa['id']+'::'+_0x13ea46[_0x14e9('0x55')],_0x5058aa);const _0x3fd860={'name':_0x5058aa[_0x14e9('0xa')],'id':_0x520ce9,'timestamp':new Date(),'error':{'msg':_0x13ea46['msg']}};return[{'payload':_0x3fd860}];}function _0x4c95b8(_0x227ee4){switch(_0x227ee4[_0x14e9('0x56')]||_0x227ee4){case _0x14e9('0x57'):case'Port\x20Not\x20Open':case'FSM\x20Reset\x20On\x20State\x20INIT':case'FSM\x20Reset\x20On\x20State\x20QUEUEING':case _0x14e9('0x58'):_0x5058aa['send'](_0xba424c({'msg':_0x14e9('0x59'),'status':'disconnected','reset':![]}));_0x3f598a[_0x14e9('0x28')](_0x14e9('0x5a'));break;case _0x14e9('0x5b'):_0x5058aa[_0x14e9('0x2c')](_0xba424c({'msg':_0x14e9('0x5c'),'status':_0x14e9('0x44'),'reset':![]}));_0x3f598a['emit']('reconnect');break;default:_0x5058aa['send'](_0xba424c({'msg':_0x227ee4[_0x14e9('0x56')]||_0x227ee4,'status':'error','reset':!![]}));}}function _0x498202(_0xffcd0){switch(_0xffcd0[_0x14e9('0x56')]||_0xffcd0){case _0x14e9('0x5d'):_0x5058aa[_0x14e9('0x2c')](_0xba424c({'msg':_0x14e9('0x5e'),'status':_0x14e9('0x44'),'reset':!![]}));break;case _0x14e9('0x5f'):_0x5058aa[_0x14e9('0x2c')](_0xba424c({'msg':_0x14e9('0x60'),'status':_0x14e9('0x44'),'reset':!![]}));break;case _0x14e9('0x61'):_0x5058aa[_0x14e9('0x2c')](_0xba424c({'msg':_0x14e9('0x62'),'status':'error','reset':!![]}));break;case'Modbus\x20exception\x204':_0x5058aa[_0x14e9('0x2c')](_0xba424c({'msg':_0x14e9('0x63'),'status':_0x14e9('0x44'),'reset':!![]}));break;case _0x14e9('0x64'):_0x5058aa['send'](_0xba424c({'msg':_0x14e9('0x64'),'status':_0x14e9('0x65'),'reset':!![]}));break;case _0x14e9('0x66'):_0x5058aa['send'](_0xba424c({'msg':_0x14e9('0x66'),'status':'Write\x20Error','reset':!![]}));break;default:_0x5058aa['send'](_0xba424c({'msg':_0xffcd0[_0x14e9('0x56')]||_0xffcd0,'status':'error','reset':!![]}));}}}_0x141354[_0x14e9('0x1')][_0x14e9('0x67')](_0x14e9('0x68'),_0x3f5d88);};