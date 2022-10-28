function GetPL() {
	var req=new XMLHttpRequest();req.open("GET","http://127.0.0.1:9090/status");req.send();
	req.onerror=function(){alert("Cannot Load Payload Because The BinLoader Server Is Not Running!");return;};
	req.onload=function(){
	 var responseJson=JSON.parse(req.responseText);
	 if(responseJson.status=="ready"){
	  getPayload(PLfile,function(req){if((req.status===200||req.status===304)&&req.response){sendPayload("http://127.0.0.1:9090",req.response);}});
	 }
	 else{alert("Can't Load Payload Because The BinLoader Server Is Busy!");return;}
	};
	var getPayload=function(pl,onLoadEndCallback){
	 var req=new XMLHttpRequest();req.open('GET',pl);req.send();req.responseType="arraybuffer";
	 req.onload=function(event){if(onLoadEndCallback)onLoadEndCallback(req,event);};
	};
	var sendPayload=function(url,data,onLoadEndCallback){
	 var req=new XMLHttpRequest();req.open("POST",url,true);req.send(data);
	 req.onload=function(event){
	  allset();
	  if(onLoadEndCallback)onLoadEndCallback(req,event);
	 };
	};
   }
   
   function allset() {
   log.innerHTML="Payload loaded"
   }