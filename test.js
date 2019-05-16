function clearContainer() {
	    document
	        .querySelectorAll('#container [data-role="user"]')
	        .forEach(function(myNode) {
		console.log(myNode);
		           while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		}
	        });
}
