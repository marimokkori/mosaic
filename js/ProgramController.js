var ProgramController = (function($) {

	var programsInfo = {

		'default': {

			'serviceID': 111,

			'frequency': 315000000,

			'symbolRate': 6875,

			'modulationMode': 64

		},
		
		'cctv-5-hd': {
			
			'serviceID':451,

			'frequency': 195000000,

			'symbolRate': 6875,

			'modulationMode': 128

		},

		'cctv-1': {

			'serviceID': 111,

			'frequency': 315000000,

			'symbolRate': 6875,

			'modulationMode': 64

		},

		'cctv-2': {

			'serviceID': 112,

			'frequency': 315000000,

			'symbolRate': 6875,

			'modulationMode': 64

		},

		'cctv-3': {

			'serviceID': 141,

			'frequency': 355000000,

			'symbolRate': 6875,

			'modulationMode': 64

		},

		'cctv-4': {

			'serviceID': 131,

			'frequency': 347000000,

			'symbolRate': 6875,

			'modulationMode': 64

		},

		'cctv-5': {

			'serviceID': 142,

			'frequency': 355000000,

			'symbolRate': 6875,

			'modulationMode': 64

		}

	};

	var objectCreate = function(arg) {

		if (!arg) {
			return {};
		}

		function obj() {};

		obj.prototype = arg;

		return new obj;

	};

	//	get object instance
	getNewInstance = function() {

		Object.create = Object.create || objectCreate;

		var newInstance = Object.create(ProgramController) || {};

		return newInstance;

	};

	outputProgram = function(typeArr) {

		programID = typeArr['program-id']

		var programInfo = programsInfo[programID];

		if (typeArr != null) {

			var programWidth = 1280 / typeArr['herizontal'];
			var programHeight = 720 / typeArr['vertical'];

			programInfo['mediaWidth'] = programWidth;
			programInfo['mediaHeight'] = programHeight;

		}

		/*setTimeout(function() {

			setProgramParas(programInfo);

		}, 500);*/
		alert(programInfo['serviceID']);

	};

	var setIPQAMParas = function(key, value) {

		var keyOfGlobalVar;

		if (key == 'serviceID') {

			keyOfGlobalVar = "SET_MEDIA_SERVICE_ID";

		} else if (key == 'frequency') {

			keyOfGlobalVar = "SET_MEDIA_FREQUENCY";

		} else if (key == 'symbolRate') {

			keyOfGlobalVar = "SET_MEDIA_SYMBOL_RATE";

		} else if (key == 'modulationMode') {

			keyOfGlobalVar = "SET_MEDIA_MODULATION_MODE";

		} else if (key == 'mediaLocationX') {

			keyOfGlobalVar = "SET_MEDIA_LOCATION_X";

		} else if (key == 'mediaLocationY') {

			keyOfGlobalVar = "SET_MEDIA_LOCATION_Y";

		} else if (key == "mediaHeight") {

			keyOfGlobalVar = "SET_MEDIA_HEIGHT";

		} else if (key == "mediaWidth") {

			keyOfGlobalVar = "SET_MEDIA_WIDTH";

		}

		iPanel.setGlobalVar(keyOfGlobalVar, '' + value);

	}

	var setProgramParas = function(programParas) {

		var parameters = programParas;

		for (var key in parameters) {

			//$('#debug-box').append("key: " + key + ", value: " + parameters[key]);
			//console.log("key: " + key + ", value: " + parameters[key]);
			if (key != "") {

				setIPQAMParas(key, parameters[key]);

			}

		}

		iPanel.setGlobalVar("SET_MEDIA_PLAY", 1);

	}

	return {

		'getNewInstance': getNewInstance,

		'outputProgram': outputProgram

	};

}(jQuery));
