var SandboxBridge = function() {
    this.invokeFunction = function (functionName, args) {
        if (!functionName) {
            console.error("Missing sandbox function name");
            return;
        }
        
        var url = "sandbox://" + functionName;
        
        var pairs = buildQueryPairsFromArguments(args);
        if (pairs.length > 0) {
            url += "?" + pairs.join("&");
        }
    
        openSandboxURL(url);
    };
    
    function buildQueryPairsFromArguments(args) {
        if (!args) {
            return [];
        }
        
        var pairs = [];
        
        for (arg in args) {
            var value = args[arg];
            var pair = arg + "=" + value;
            pairs.push(pair);
        }
        
        return pairs;
    };
    
    var newFrameElm = null;
    function openSandboxURL(src) {
        if 
        var newFrameElm = document.createElement("IFRAME");
    //    var request = new XMLHttpRequest();
    //    request.open("POST", src);
    //    request.send();
         var rootElm = document.documentElement;
         
         newFrameElm.setAttribute("src",src);
         rootElm.appendChild(newFrameElm);
         //remove the frame now
         // newFrameElm.parentNode.removeChild(newFrameElm);
    
         console.log(src);
    };
};

var b = new SandboxBridge();
b.invokeFunction();