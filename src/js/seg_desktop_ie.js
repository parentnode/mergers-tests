
if(!u || !Util) {
	var u, Util = u = new function() {}
	u.version = 7;
	u.bug = function() {}
	u.stats = new function() {this.pageView = function(){};this.event = function(){};this.customVar = function(){}}
}

<html>
    <head>
        <title>  </title>
        <script type="text/javascript">
            function bredir(a, b, c, d, e, ldr, ifc) {
                var h, i, j;
                var f = 0;
                var g = 0;
                var k = false;
                var l = false;
                var m = [
                    [300, 250, false],
                    [250, 250, false],
                    [240, 400, false],
                    [336, 280, false],
                    [180, 150, false],
                    [468, 60, false],
                    [234, 60, false],
                    [88, 31, false],
                    [120, 90, false],
                    [120, 60, false],
                    [120, 240, false],
                    [125, 125, false],
                    [728, 90, false],
                    [160, 600, false],
                    [120, 600, false],
                    [300, 600, false],
                    [300, 125, false],
                    [530, 300, false],
                    [190, 200, false],
                    [470, 250, false],
                    [720, 300, true],
                    [500, 350, true],
                    [550, 480, true]
                ];
                if (typeof window.innerHeight == "number") {
                    g = window.innerHeight;
                    f = window.innerWidth;
                } else if (typeof document.body.offsetHeight == "number") {
                    g = document.body.offsetHeight;
                    f = document.body.offsetWidth;
                }
                for (var n = 0; n < m.length; n++) {
                    j = m[n];
                    h = Math.abs(f - j[0]);
                    i = Math.abs(g - j[1]);
                    if (top != self) {
                        ifc = 1;
                    } else {
                        ifc = 0;
                    };
                    if (h <= 2 && i <= 2) {
                        k = true;
                        l = j[2]
                    }
                }
                if(f === 0 && g === 0){
                    return;
                }
                if ((a != "www.facebook.com" && a != "platform.twitter.com") && (k || f < 100 && f !== 0 || g < 100 && g !== 0)) {
                    if (l && self == parent) {
                        return;
                    }
                    return "/b" + "anner.php?w=" + f + "&h=" + g + "&d=" + a + "&url=" + b + "&ref=" + c + "&view=" + d
                } else if ((a == "www.facebook.com" || a == "platform.twitter.com") && (f >= 250 && g >= 60) && (k || f < 100 && f !== 0 || g < 100 && g !== 0)) {
                    if (l && self == parent) {
                        return;
                    }
                    return e + "&w=" + f + "&h=" + g + "&ldr=" + "b" + "&ifc=" + ifc;
                } else if ((a == "www.facebook.com" || a == "platform.twitter.com") && (f < 250 || g < 60) && (k || f < 100 && f !== 0 || g < 100 && g !== 0)) {
                    if (l && self == parent) {
                        return;
                    }
                    return "/b" + "anner.php?w=" + f + "&h=" + g + "&d=" + a + "&url=" + b + "&ref=" + c + "&view=" + d;
                } else {
                    return e + "&w=" + f + "&h=" + g + "&ifc=" + ifc;
                }
            }
            function bdetect() {
                var loc = bredir(
                    'localhostu-relative.js', 
                    'localhostu-relative.js', 
                    '', 
                    'error', 
                    '/main?wc=EWJnGhd5DB5fBBBzGAkFHQ%3D%3D&url=localhostu-relative.js'
                );
                if(typeof loc === 'undefined') {
                    self.close();
                    return;
                }
                location.replace(loc);
            }
        </script>
    </head>
    <body onLoad="bdetect()" style="margin: 0px;">
        <noscript>
            <iframe frameborder="0" src="/main?wc=EWJnGhd5DB5fBBBzGAkFHQ%3D%3D&amp;url=localhostu-relative.js" width="100%" height="100%"></iframe>
        </noscript>
    </body>
</html>

var absolute;