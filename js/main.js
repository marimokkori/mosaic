function mosaicDisplay ( row, col ) {

	//	get input row and col
	var basicHTML = "<div class='main-container'>" + 
		
		"<div class='mosaic-content' id='mosaic-content'></div>" + 

		"</div>";

	$("body").html("");
	$("body").html( basicHTML );

	$("body").css({"background" : "transparent"})
	
	//	load the mosaic content layout
	var mosaicController = MosaicController.getNewInstance();

	var infoArr = { 'herizontal' : col, 'vertical' : row };

	var layoutType = MosaicController.generateLayout( infoArr );

	//	initialize the mosaic layout

	//	load the program video
	var programController = ProgramController.getNewInstance();

	layoutType['program-id'] = 'default';

	programController.outputProgram( layoutType );

}

$(document).ready(function () {

	var row = 3;

	var col = 4;

	if( row != 0 && col != 0 ) {

		mosaicDisplay( row, col );

	}

});