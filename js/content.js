$(document).ready(function () {

	var row = 1;

	var col = 1;

	//	load the mosaic content layout
	var mosaicController = MosaicController.getNewInstance();

	var layoutType = { 'herizontal' : col, 'vertical' : row };

	var infoArr = mosaicController.enterFullScreen( layoutType );

	//	initialize the mosaic layout

	//	load the program video
	var programController = ProgramController.getNewInstance();

	var programID = $("div#program-id").attr('data');;

	infoArr['program-id'] = programID;

	programController.outputProgram( infoArr );

});