function frames(minutes, fps) {
	if(minutes !== undefined && fps !== undefined){
		return (minutes * 60 * fps);
	}else{
		return 0;
	}
}