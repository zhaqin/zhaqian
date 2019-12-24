{
	var imgVar = {
		imgObj : [...(document.getElementsByTagName('img')), 
			      ...(document.getElementsByClassName("onelist-item-thumb"))
			     ],
		imgTime : null
	};
	
	// var imgObj = [...(document.getElementsByTagName('img')), 
	// 		      ...(document.getElementsByClassName("onelist-item-thumb"))
	// 		     ];

    function tagIsview(element){
    	var heig = element.offsetHeight;
    	var rect = element.getBoundingClientRect();
    	// if(!(rect.top >= 0 && rect.right > 0)){
    	// 	console.log(test);
    	// 	console.log('top and right flase ' + rect.top + ' ' + heig);
    	// }else if(! ( rect.bottom <= ( (window.innerHeight || document.documentElement.clientHeight) + element.offsetHeight) ) ){
    	// 	console.log(test);
    	// 	console.log('bottom is fase ' + rect.bottom + ' ' + ( (window.innerHeight || document.documentElement.clientHeight) + element.offsetHeight) );
    	// }
    	return (
        	(rect.top >= -(heig) && rect.left > 0 && rect.right > 0) &&        	
        	(rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) + heig))
      );
    }

	function lodingSrcPush(target){
		for(var i = 0 ,len = target.length; i < len; i++){
			var data_src = target[i].getAttribute('data-img-src')
			if((target[i].src != data_src) && tagIsview(target[i])){
				//console.log(i + ' ' + target[i].tagName + ' ' + typeof target[i].tagName);
				if(target[i].tagName == 'IMG'){
					target[i].src = data_src;
				}else{
					target[i].style.backgroundImage = "url(" + target[i].getAttribute('data-img-src') + ")";
				}			
			}
		}
	}
	window.onscroll = function (){
		if(imgVar.imgTime)
			clearTimeout(imgVar.imgTime);
		imgVar.imgTime = setTimeout(lodingSrcPush(imgVar.imgObj), 35);
	}
	lodingSrcPush(imgVar.imgObj);
	//console.log("imgobj is:", imgObj);
}