var getPayload = function(payload, onLoadEndCallback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', payload);
  xhr.send();
  xhr.responseType = "arraybuffer";
  xhr.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(xhr, event);
  };
}

var sendPayload = function(url, data, onLoadEndCallback) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.send(data);

  xhr.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(xhr, event);
  };
}

function LoadviaGoldhen(PLfile){
  var PS4IP = document.getElementById("psip").value;
		var xhr = new XMLHttpRequest();
    xhr.open("POST", `http://${PS4IP}:9090/status`);
		xhr.send();
		xhr.onerror = function(){
			progress.style = "color: rgb(255, 0, 0);";
			progress.innerHTML = "Sending Error, First Enable Binloader Server from GoldHEN Settings.";
			window.alert('Sending Error, First Enable Binloader Server from GoldHEN Settings.');
			return;
		};
		xhr.onload = function(){
			var responseJson = JSON.parse(xhr.responseText);
			if (responseJson.status=="ready"){
		  getPayload(PLfile, function (xhr) {
				if ((xhr.status === 200 || xhr.status === 304) && xhr.response) {
				   //Sending bins via IP POST Method
           sendPayload(`http://${PS4IP}:9090`, xhr.response, function (xhr) {
            if (xhr.status === 200) {
              progress.innerHTML="Payload Loaded.";
					   }else{
						progress.innerHTML="Can't send the payload.";
               return;
              }
					})
				}
			});
			}
			else {
				alert("Cannot Load Payload Because binloader Server Is Busy.");
				return;
			}
		};
	}
