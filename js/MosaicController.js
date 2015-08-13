var MosaicController = (function($) {

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

		var newInstance = Object.create(MosaicController) || {};

		return newInstance;

	};

	var generateLayout = function(typeArr) {

		//	set up block elemnt
		var herizontalNum = parseInt(typeArr['herizontal']);
		var verticalNum = parseInt(typeArr['vertical']);
		var herizontalPercent = (100 / herizontalNum) + "%";
		var verticalPercent = (100 / verticalNum) + "%";

		//	generate mosaic block elements
		var elemIDPrefix = "element-";
		var mosaicContent = $("#mosaic-content");
		for (var hIndex = 1; hIndex <= herizontalNum; hIndex++) {

			var elemIDRow = elemIDPrefix + hIndex + "-";

			for (var vIndex = 1; vIndex <= verticalNum; vIndex++) {

				var elementID = elemIDRow + vIndex;

				var elemContent = getElemContent();
				var elemName = elemContent['name']
				var elemID = elemContent['id']

				var blockElem = "<a href='./content.php?progID=" + elemID 
					+ "' class='prog-link'><div class='elements' id='" + elementID + "'><div>" 
					+ elemName + "</div></div></a>";

				mosaicContent.append(blockElem);

			}

		}

		$(".mosaic-content a").css({
			"height": verticalPercent,
			"width": herizontalPercent
		});

		return {
			'herizontal': typeArr['herizontal'],
			'vertical': typeArr['vertical']
		}

	};

	var getElemContent = function() {

		var contentIDMaps = {

			"中央一套": "cctv-1",

			"中央二套": "cctv-2",

			"中央三套": "cctv-3",

			"中央四套": "cctv-4",

			"中央五套": "cctv-5",

		};

		var contents = ["中央四套", "中央三套", "中央二套", "中央一套", "中央五套"]

		var randomNum = Math.round(Math.random() * 4);

		var content = contents[randomNum];

		return {
			'name': content,
			'id': contentIDMaps[content]
		};

	}

	//	make selected item full screen
	var enterFullScreen = function(itemInfoArr) {

		var mosaicContent = $("#mosaic-content");
		mosaicContent.html("");

		return {
			'herizontal': 1,
			'vertical': 1
		}

	}

	return {

		'getNewInstance': getNewInstance,

		'generateLayout': generateLayout,

		'enterFullScreen': enterFullScreen

	};

}(jQuery));