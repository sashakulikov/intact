var rect = new Path.Rectangle({
	 point: [0, 0],
	 size: [view.size.width, view.size.height],
	 fillColor: '#bebdbd'
	});
	rect.sendToBack();
	
	var spotlight = new Path.Circle({
	 center: [0,0],
	 radius: 340,
	 fillColor: Color('white', [0])
	});
	
	
	var gradientStops = [['#ffffff', 0], ['#ffffff', 0.1]];
	
	alpha = 1;
	for (i = 0; i < 90; i++) {
	 if (i < 30) {
	 alpha = alpha*(0.999-0.0001*i);
	 } if (i < 40) {
	 alpha = alpha*(0.999-0.0005*i);
	 } else if (i < 60) {
	 alpha = alpha*(0.97-0.0007*i);
	 } else {
	 alpha = alpha*(0.94-0.002*i)+0.0005;
	 }
	 var col = new Color(255, 255, 255-(i*3.5), alpha); 
	 gradientStops.push([col, 0.1+0.01*i]);
	};
	
	console.log(gradientStops)
	
	spotlight.fillColor = {
	 gradient: {
	 stops: gradientStops,
	 radial: true
	 },
	 origin: spotlight.position,
	 destination: spotlight.bounds.rightCenter
	};
	
	// spotlight.rasterize();
	
	view.onMouseMove = function(event) {
	 spotlight.translate(event.delta);
	};
	
	var intSVG = 'https://gist.githubusercontent.com/sashakulikov/245f48caa4993878a2ffa07bb650d289/raw/b020a02b05f05dfa0c534b5a82c6ccf0aa07025b/intact.svg';
	
	var intactSVG = new Group();
	
	project.importSVG(intSVG, function(item) {
	 var intactSVG = item;
	 item.translate(view.size.width/2, view.size.height/2);
	 item.scale(6);
	});
	
	// console.log(intactSVG.position)
	// intactSVG.translate(200,200);
	
	// console.log(intactSVG.position)
	// intactSVG.fillColor = 'black';
	
	
	
	// intactSVG.position(200,200);
	// intactSVG.fillColor('black');
	
	
	// var intact = new PointText({
	// point: [view.size.width/2, view.size.height/2],
	// content: 'INTACT',
	// justification: 'center',
	// fillColor: '#bebdbd',
	// fondFamily: 'Courier New',
	// fontWeight: 'bold',
	// fontSize: 75
	// });