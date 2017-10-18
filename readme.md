

PhoneSpeak Navigation Route


Root
====

Root Stack Nav
Tab Auth-Nav
Tab Home Nav
Stack Modal Nav

Route Auth-Nav
  ---Stack Nav
     ---Login Screen
     ---Signup Screen
  
Home Nav
  ---Tab Nav
	---Comm Stack Nav
	   ----Recent Comm Screen
           ----Chat Screen
           ----Call Screen (Modal)
           ----Conference Screen
           ----VoiceMail Screen
        ---Contact Stack Nav
           ----Chat Screen
           ----Call Screen
        ---Directory Stack Nav
           ----Chat Screen
           ----Call Screen
        ---Help Stack Nav
           ----FAQ Screen
           ----Docs Screen
           ----Support Screen
           
const makeRequest = async () => {
  try {
    // this parse may fail
    const data = JSON.parse(await getJSON())
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}


//for httpResources
mappedKeys = [],
			rurlData = /\{([^\}]+)\}/g,
			data = $.extend({}, options.data);


      settings.url = settings.url.replace(rurlData, function (m, key) {
			if (key in data) {
				mappedKeys.push(key);
				return data[key];
			}
		});


           
  	
	   	   
