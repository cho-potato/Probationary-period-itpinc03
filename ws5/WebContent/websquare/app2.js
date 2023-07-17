(function() {
    var promiseObj = WebSquare.startApplication(WebSquareExternal.w2xPath);
    promiseObj.then(function(resolve, reject){
        // to do
    });
})();
/*
window.onload = init;

function init() {
    
	try{
        WebSquare.startApplication(WebSquareExternal.w2xPath);
    } catch(e) {
        alert(e.message);
    }
}
*/