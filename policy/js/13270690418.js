/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={4773:function(n,t,e){var i;!function(r,o){"use strict";var a="function",u="undefined",s="object",c="model",f="name",l="type",d="vendor",v="version",h="architecture",p="console",g="mobile",m="tablet",_="smarttv",w="wearable",y={extend:function(n,t){var e={};for(var i in n)t[i]&&t[i].length%2==0?e[i]=t[i].concat(n[i]):e[i]=n[i];return e},has:function(n,t){return"string"==typeof n&&-1!==t.toLowerCase().indexOf(n.toLowerCase())},lowerize:function(n){return n.toLowerCase()},major:function(n){return"string"==typeof n?n.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(n){return n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},E={rgx:function(n,t){for(var e,i,r,u,c,f,l=0;l<t.length&&!c;){var d=t[l],v=t[l+1];for(e=i=0;e<d.length&&!c;)if(c=d[e++].exec(n))for(r=0;r<v.length;r++)f=c[++i],typeof(u=v[r])===s&&u.length>0?2==u.length?typeof u[1]==a?this[u[0]]=u[1].call(this,f):this[u[0]]=u[1]:3==u.length?typeof u[1]!==a||u[1].exec&&u[1].test?this[u[0]]=f?f.replace(u[1],u[2]):o:this[u[0]]=f?u[1].call(this,f,u[2]):o:4==u.length&&(this[u[0]]=f?u[3].call(this,f.replace(u[1],u[2])):o):this[u]=f||o;l+=2}},str:function(n,t){for(var e in t)if(typeof t[e]===s&&t[e].length>0){for(var i=0;i<t[e].length;i++)if(y.has(t[e][i],n))return"?"===e?o:e}else if(y.has(t[e],n))return"?"===e?o:e;return n}},b={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},I={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[f,v],[/(opios)[\/\s]+([\w\.]+)/i],[[f,"Opera Mini"],v],[/\s(opr)\/([\w\.]+)/i],[[f,"Opera"],v],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[f,v],[/(konqueror)\/([\w\.]+)/i],[[f,"Konqueror"],v],[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],[[f,"IE"],v],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[f,"Edge"],v],[/(yabrowser)\/([\w\.]+)/i],[[f,"Yandex"],v],[/(Avast)\/([\w\.]+)/i],[[f,"Avast Secure Browser"],v],[/(AVG)\/([\w\.]+)/i],[[f,"AVG Secure Browser"],v],[/(puffin)\/([\w\.]+)/i],[[f,"Puffin"],v],[/(focus)\/([\w\.]+)/i],[[f,"Firefox Focus"],v],[/(opt)\/([\w\.]+)/i],[[f,"Opera Touch"],v],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[f,"UCBrowser"],v],[/(comodo_dragon)\/([\w\.]+)/i],[[f,/_/g," "],v],[/(windowswechat qbcore)\/([\w\.]+)/i],[[f,"WeChat(Win) Desktop"],v],[/(micromessenger)\/([\w\.]+)/i],[[f,"WeChat"],v],[/(brave)\/([\w\.]+)/i],[[f,"Brave"],v],[/(whale)\/([\w\.]+)/i],[[f,"Whale"],v],[/(qqbrowserlite)\/([\w\.]+)/i],[f,v],[/(QQ)\/([\d\.]+)/i],[f,v],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[f,v],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[f,v],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[f,v],[/(MetaSr)[\/\s]?([\w\.]+)/i],[f],[/(LBBROWSER)/i],[f],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[v,[f,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[v,[f,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[f,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[f,v],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[v,[f,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[f,/(.+)/,"$1 WebView"],v],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[f,/(.+(?:g|us))(.+)/,"$1 $2"],v],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[v,[f,"Android Browser"]],[/(coc_coc_browser)\/([\w\.]+)/i],[[f,"Coc Coc"],v],[/(sailfishbrowser)\/([\w\.]+)/i],[[f,"Sailfish Browser"],v],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[f,v],[/(dolfin)\/([\w\.]+)/i],[[f,"Dolphin"],v],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[f,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[f,"Chrome"],v],[/(coast)\/([\w\.]+)/i],[[f,"Opera Coast"],v],[/fxios\/([\w\.-]+)/i],[v,[f,"Firefox"]],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[v,[f,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[v,f],[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],[[f,"GSA"],v],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[f,[v,E.str,b.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[f,v],[/(navigator|netscape)\/([\w\.-]+)/i],[[f,"Netscape"],v],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[f,v]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,y.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[h,/ower/,"",y.lowerize]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[h,y.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[c,d,[l,m]],[/applecoremedia\/[\w\.]+ \((ipad)/],[c,[d,"Apple"],[l,m]],[/(apple\s{0,1}tv)/i],[[c,"Apple TV"],[d,"Apple"],[l,_]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[d,c,[l,m]],[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],[c,[d,"Amazon"],[l,m]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[c,E.str,b.device.amazon.model],[d,"Amazon"],[l,g]],[/android.+aft([\w])(\sbuild\/|\))/i],[c,[d,"Amazon"],[l,_]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[c,d,[l,g]],[/\((ip[honed|\s\w*]+);/i],[c,[d,"Apple"],[l,g]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[d,c,[l,g]],[/\(bb10;\s(\w+)/i],[c,[d,"BlackBerry"],[l,g]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[c,[d,"Asus"],[l,m]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[d,"Sony"],[c,"Xperia Tablet"],[l,m]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[d,"Sony"],[l,g]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[d,c,[l,p]],[/android.+;\s(shield)\sbuild/i],[c,[d,"Nvidia"],[l,p]],[/(playstation\s[34portablevi]+)/i],[c,[d,"Sony"],[l,p]],[/(sprint\s(\w+))/i],[[d,E.str,b.device.sprint.vendor],[c,E.str,b.device.sprint.model],[l,g]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[d,[c,/_/g," "],[l,g]],[/(nexus\s9)/i],[c,[d,"HTC"],[l,m]],[/d\/huawei([\w\s-]+)[;\)]/i,/android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],[c,[d,"Huawei"],[l,g]],[/android.+(bah2?-a?[lw]\d{2})/i],[c,[d,"Huawei"],[l,m]],[/(microsoft);\s(lumia[\s\w]+)/i],[d,c,[l,g]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[c,[d,"Microsoft"],[l,p]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[d,"Microsoft"],[l,g]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[c,[d,"Motorola"],[l,g]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[c,[d,"Motorola"],[l,m]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[d,y.trim],[c,y.trim],[l,_]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[d,"Samsung"],[l,_]],[/\(dtv[\);].+(aquos)/i],[c,[d,"Sharp"],[l,_]],[/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|SM-P587|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[d,"Samsung"],c,[l,m]],[/smart-tv.+(samsung)/i],[d,[l,_],c],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[d,"Samsung"],c,[l,g]],[/sie-(\w*)/i],[c,[d,"Siemens"],[l,g]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[d,"Nokia"],c,[l,g]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[c,[d,"Acer"],[l,m]],[/android.+([vl]k\-?\d{3})\s+build/i],[c,[d,"LG"],[l,m]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[d,"LG"],c,[l,m]],[/linux;\snetcast.+smarttv/i,/lg\snetcast\.tv-201\d/i],[[d,"LG"],c,[l,_]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[c,[d,"LG"],[l,g]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[d,c,[l,m]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[c,[d,"Lenovo"],[l,m]],[/(lenovo)[_\s-]?([\w-]+)/i],[d,c,[l,g]],[/linux;.+((jolla));/i],[d,c,[l,g]],[/((pebble))app\/[\d\.]+\s/i],[d,c,[l,w]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[d,c,[l,g]],[/crkey/i],[[c,"Chromecast"],[d,"Google"],[l,_]],[/android.+;\s(glass)\s\d/i],[c,[d,"Google"],[l,w]],[/android.+;\s(pixel c)[\s)]/i],[c,[d,"Google"],[l,m]],[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],[c,[d,"Google"],[l,g]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,/android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[c,/_/g," "],[d,"Xiaomi"],[l,g]],[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],[[c,/_/g," "],[d,"Xiaomi"],[l,m]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[c,[d,"Meizu"],[l,g]],[/(mz)-([\w-]{2,})/i],[[d,"Meizu"],c,[l,g]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[c,[d,"OnePlus"],[l,g]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[c,[d,"RCA"],[l,m]],[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],[c,[d,"Dell"],[l,m]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[c,[d,"Verizon"],[l,m]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(\S(?:.*\S)?)\s+build/i],[[d,"Barnes & Noble"],c,[l,m]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[c,[d,"NuVision"],[l,m]],[/android.+;\s(k88)\sbuild/i],[c,[d,"ZTE"],[l,m]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[c,[d,"Swiss"],[l,g]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[c,[d,"Swiss"],[l,m]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[c,[d,"Zeki"],[l,m]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[d,"Dragon Touch"],c,[l,m]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[c,[d,"Insignia"],[l,m]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[c,[d,"NextBook"],[l,m]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[d,"Voice"],c,[l,g]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[d,"LvTel"],c,[l,g]],[/android.+;\s(PH-1)\s/i],[c,[d,"Essential"],[l,g]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[c,[d,"Envizen"],[l,m]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[d,c,[l,m]],[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],[c,[d,"MachSpeed"],[l,m]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[d,c,[l,m]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[c,[d,"Rotor"],[l,m]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[d,c,[l,m]],[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[c,[l,g]],[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[c,[l,m]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,y.lowerize],d,c],[/[\s\/\(](smart-?tv)[;\)]/i],[[l,_]],[/(android[\w\.\s\-]{0,9});.+build/i],[c,[d,"Generic"]],[/(phone)/i],[[l,g]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[v,[f,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[v,[f,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[f,v],[/rv\:([\w\.]{1,9}).+(gecko)/i],[v,f]],os:[[/(xbox);\s+xbox\s([^\);]+)/i,/microsoft\s(windows)\s(vista|xp)/i],[f,v],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[f,[v,E.str,b.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[f,"Windows"],[v,E.str,b.os.windows.version]],[/\((bb)(10);/i],[[f,"BlackBerry"],v],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[f,v],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[f,"Symbian"],v],[/\((series40);/i],[f],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[f,"Firefox OS"],v],[/crkey\/([\d\.]+)/i],[v,[f,"Chromecast"]],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[f,v],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[f,"Chromium OS"],v],[/(sunos)\s?([\w\.\d]*)/i],[[f,"Solaris"],v],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[f,v],[/(haiku)\s(\w+)/i],[f,v],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[v,/_/g,"."],[f,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[f,"Mac OS"],[v,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[f,v]]},A=function(n,t){if("object"==typeof n&&(t=n,n=o),!(this instanceof A))return new A(n,t).getResult();var e=n||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),i=t?y.extend(I,t):I;return this.getBrowser=function(){var n={name:o,version:o};return E.rgx.call(n,e,i.browser),n.major=y.major(n.version),n},this.getCPU=function(){var n={architecture:o};return E.rgx.call(n,e,i.cpu),n},this.getDevice=function(){var n={vendor:o,model:o,type:o};return E.rgx.call(n,e,i.device),n},this.getEngine=function(){var n={name:o,version:o};return E.rgx.call(n,e,i.engine),n},this.getOS=function(){var n={name:o,version:o};return E.rgx.call(n,e,i.os),n},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(n){return e=n,this},this};A.VERSION="0.7.24",A.BROWSER={NAME:f,MAJOR:"major",VERSION:v},A.CPU={ARCHITECTURE:h},A.DEVICE={MODEL:c,VENDOR:d,TYPE:l,CONSOLE:p,MOBILE:g,SMARTTV:_,TABLET:m,WEARABLE:w,EMBEDDED:"embedded"},A.ENGINE={NAME:f,VERSION:v},A.OS={NAME:f,VERSION:v},typeof t!==u?(n.exports&&(t=n.exports=A),t.UAParser=A):(i=function(){return A}.call(t,e,t,n))===o||(n.exports=i)}("object"==typeof window?window:this)},4558:function(n,t,e){var i=e(5826)(),r=e(9362);n.exports=function(n,t){function e(t){if(!(this instanceof e))return new e(t);try{throw new Error(t)}catch(o){o.name=n,this.stack=o.stack}i&&this.stack&&(this.stack=r(this.stack,n,t)),this.message=t||"",this.name=n}return e.prototype=new(t||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+n+": "+this.message+"]":"["+n+"]"},e.prototype.name=n,e}},9362:function(n){"use strict";n.exports=function(n,t,e){var i=t;return e&&(i+=": "+e),n=i+n.slice(n.indexOf("\n"))}},5826:function(n){"use strict";n.exports=function(){var n=new Error("yep");return!!n.stack&&"Error: yep\n"===n.stack.substr(0,11)}},8564:function(n,t,e){n.exports=function(){"use strict";function n(n){return"function"==typeof n||"object"==typeof n&&null!==n}function t(n){return"function"==typeof n}undefined;var i=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},r=0,o=undefined,a=undefined,u=function(n,t){y[r]=n,y[r+1]=t,2===(r+=2)&&(a?a(E):I())};function s(n){a=n}function c(n){u=n}var f="undefined"!=typeof window?window:undefined,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,v="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(E)}}function g(){return void 0!==o?function(){o(E)}:w()}function m(){var n=0,t=new d(E),e=document.createTextNode("");return t.observe(e,{characterData:!0}),function(){e.data=n=++n%2}}function _(){var n=new MessageChannel;return n.port1.onmessage=E,function(){return n.port2.postMessage(0)}}function w(){var n=setTimeout;return function(){return n(E,1)}}var y=new Array(1e3);function E(){for(var n=0;n<r;n+=2)(0,y[n])(y[n+1]),y[n]=undefined,y[n+1]=undefined;r=0}function b(){try{undefined;var n=e(3444);return o=n.runOnLoop||n.runOnContext,g()}catch(t){return w()}}var I=undefined;function A(n,t){var e=arguments,i=this,r=new this.constructor(R);r[S]===undefined&&Q(r);var o,a=i._state;return a?(o=e[a-1],u((function(){return $(a,r,o,i._result)}))):j(i,r,n,t),r}function T(n){var t=this;if(n&&"object"==typeof n&&n.constructor===t)return n;var e=new t(R);return U(e,n),e}I=v?p():d?m():h?_():f===undefined?b():w();var S=Math.random().toString(36).substring(16);function R(){}var k=void 0,N=1,D=2,C=new H;function O(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function P(n){try{return n.then}catch(t){return C.error=t,C}}function M(n,t,e,i){try{n.call(t,e,i)}catch(r){return r}}function L(n,t,e){u((function(n){var i=!1,r=M(e,t,(function(e){i||(i=!0,t!==e?U(n,e):B(n,e))}),(function(t){i||(i=!0,G(n,t))}),"Settle: "+(n._label||" unknown promise"));!i&&r&&(i=!0,G(n,r))}),n)}function V(n,t){t._state===N?B(n,t._result):t._state===D?G(n,t._result):j(t,undefined,(function(t){return U(n,t)}),(function(t){return G(n,t)}))}function F(n,e,i){e.constructor===n.constructor&&i===A&&e.constructor.resolve===T?V(n,e):i===C?(G(n,C.error),C.error=null):i===undefined?B(n,e):t(i)?L(n,e,i):B(n,e)}function U(t,e){t===e?G(t,O()):n(e)?F(t,e,P(e)):B(t,e)}function z(n){n._onerror&&n._onerror(n._result),q(n)}function B(n,t){n._state===k&&(n._result=t,n._state=N,0!==n._subscribers.length&&u(q,n))}function G(n,t){n._state===k&&(n._state=D,n._result=t,u(z,n))}function j(n,t,e,i){var r=n._subscribers,o=r.length;n._onerror=null,r[o]=t,r[o+N]=e,r[o+D]=i,0===o&&n._state&&u(q,n)}function q(n){var t=n._subscribers,e=n._state;if(0!==t.length){for(var i=undefined,r=undefined,o=n._result,a=0;a<t.length;a+=3)i=t[a],r=t[a+e],i?$(e,i,r,o):r(o);n._subscribers.length=0}}function H(){this.error=null}var Y=new H;function K(n,t){try{return n(t)}catch(e){return Y.error=e,Y}}function $(n,e,i,r){var o=t(i),a=undefined,u=undefined,s=undefined,c=undefined;if(o){if((a=K(i,r))===Y?(c=!0,u=a.error,a.error=null):s=!0,e===a)return void G(e,x())}else a=r,s=!0;e._state!==k||(o&&s?U(e,a):c?G(e,u):n===N?B(e,a):n===D&&G(e,a))}function W(n,t){try{t((function(t){U(n,t)}),(function(t){G(n,t)}))}catch(e){G(n,e)}}var X=0;function J(){return X++}function Q(n){n[S]=X++,n._state=undefined,n._result=undefined,n._subscribers=[]}function Z(n,t){this._instanceConstructor=n,this.promise=new n(R),this.promise[S]||Q(this.promise),i(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?B(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&B(this.promise,this._result))):G(this.promise,nn())}function nn(){return new Error("Array Methods must be provided an Array")}function tn(n){return new Z(this,n).promise}function en(n){var t=this;return i(n)?new t((function(e,i){for(var r=n.length,o=0;o<r;o++)t.resolve(n[o]).then(e,i)})):new t((function(n,t){return t(new TypeError("You must pass an array to race."))}))}function rn(n){var t=new this(R);return G(t,n),t}function on(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function an(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function un(n){this[S]=J(),this._result=this._state=undefined,this._subscribers=[],R!==n&&("function"!=typeof n&&on(),this instanceof un?W(this,n):an())}function sn(){var n=undefined;if("undefined"!=typeof e.g)n=e.g;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(r){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=n.Promise;if(t){var i=null;try{i=Object.prototype.toString.call(t.resolve())}catch(r){}if("[object Promise]"===i&&!t.cast)return}n.Promise=un}return Z.prototype._enumerate=function(){for(var n=this.length,t=this._input,e=0;this._state===k&&e<n;e++)this._eachEntry(t[e],e)},Z.prototype._eachEntry=function(n,t){var e=this._instanceConstructor,i=e.resolve;if(i===T){var r=P(n);if(r===A&&n._state!==k)this._settledAt(n._state,t,n._result);else if("function"!=typeof r)this._remaining--,this._result[t]=n;else if(e===un){var o=new e(R);F(o,n,r),this._willSettleAt(o,t)}else this._willSettleAt(new e((function(t){return t(n)})),t)}else this._willSettleAt(i(n),t)},Z.prototype._settledAt=function(n,t,e){var i=this.promise;i._state===k&&(this._remaining--,n===D?G(i,e):this._result[t]=e),0===this._remaining&&B(i,this._result)},Z.prototype._willSettleAt=function(n,t){var e=this;j(n,undefined,(function(n){return e._settledAt(N,t,n)}),(function(n){return e._settledAt(D,t,n)}))},un.all=tn,un.race=en,un.resolve=T,un.reject=rn,un._setScheduler=s,un._setAsap=c,un._asap=u,un.prototype={constructor:un,then:A,"catch":function(n){return this.then(null,n)}},un.polyfill=sn,un.Promise=un,un}()},560:function(n){"use strict";n.exports=function(n){var t,e={};if(!(n instanceof Object)||Array.isArray(n))throw new Error("keyMirror(...): Argument must be an object.");for(t in n)n.hasOwnProperty(t)&&(e[t]=t);return e}},2676:function(n){"use strict";n.exports=function(n,t,e,i){Object.defineProperty(n,t,{get:function(){var n=e.call(this);return Object.defineProperty(this,t,{value:n,enumerable:!!i,writable:!0}),n},set:function(n){return Object.defineProperty(this,t,{value:n,enumerable:!!i,writable:!0}),n},enumerable:!!i,configurable:!0})}},5036:function(n){"use strict";var t=Element.prototype,e=t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;n.exports=function(n,t){if(e)return e.call(n,t);for(var i=n.parentNode.querySelectorAll(t),r=0;r<i.length;r++)if(i[r]==n)return!0;return!1}},4087:function(n){!function(){function t(n,t){var e,i,r,o,a,u,s,c;for(e=3&n.length,i=n.length-e,r=t,a=3432918353,u=461845907,c=0;c<i;)s=255&n.charCodeAt(c)|(255&n.charCodeAt(++c))<<8|(255&n.charCodeAt(++c))<<16|(255&n.charCodeAt(++c))<<24,++c,r=27492+(65535&(o=5*(65535&(r=(r^=s=(65535&(s=(s=(65535&s)*a+(((s>>>16)*a&65535)<<16)&4294967295)<<15|s>>>17))*u+(((s>>>16)*u&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(s=0,e){case 3:s^=(255&n.charCodeAt(c+2))<<16;case 2:s^=(255&n.charCodeAt(c+1))<<8;case 1:r^=s=(65535&(s=(s=(65535&(s^=255&n.charCodeAt(c)))*a+(((s>>>16)*a&65535)<<16)&4294967295)<<15|s>>>17))*u+(((s>>>16)*u&65535)<<16)&4294967295}return r^=n.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=t;e.v2=function(n,t){for(var e,i=n.length,r=t^i,o=0;i>=4;)e=1540483477*(65535&(e=255&n.charCodeAt(o)|(255&n.charCodeAt(++o))<<8|(255&n.charCodeAt(++o))<<16|(255&n.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&n.charCodeAt(o+2))<<16;case 2:r^=(255&n.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&n.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=t,n.exports=e}()},8871:function(n,t,e){n=e.nmd(n),function(){var i,r="Expected a function",o="__lodash_hash_undefined__",a=9007199254740991,u="[object Arguments]",s="[object Array]",c="[object Boolean]",f="[object Date]",l="[object Error]",d="[object Function]",v="[object GeneratorFunction]",h="[object Map]",p="[object Number]",g="[object Object]",m="[object RegExp]",_="[object Set]",w="[object String]",y="[object Symbol]",E="[object WeakMap]",b="[object ArrayBuffer]",I="[object Float32Array]",A="[object Float64Array]",T="[object Int8Array]",S="[object Int16Array]",R="[object Int32Array]",k="[object Uint8Array]",N="[object Uint8ClampedArray]",D="[object Uint16Array]",C="[object Uint32Array]",O=/[&<>"'`]/g,x=RegExp(O.source),P=/\w*$/,M=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,V={};V[I]=V[A]=V[T]=V[S]=V[R]=V[k]=V[N]=V[D]=V[C]=!0,V[u]=V[s]=V[b]=V[c]=V[f]=V[l]=V[d]=V[h]=V[p]=V[g]=V[m]=V[_]=V[w]=V[E]=!1;var F={};F[u]=F[s]=F[b]=F[c]=F[f]=F[I]=F[A]=F[T]=F[S]=F[R]=F[h]=F[p]=F[g]=F[m]=F[_]=F[w]=F[y]=F[k]=F[N]=F[D]=F[C]=!0,F[l]=F[d]=F[E]=!1;var U={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},z={"function":!0,object:!0},B=z[typeof t]&&t&&!t.nodeType?t:i,G=z.object&&n&&!n.nodeType?n:i,j=G&&G.exports===B?B:i,q=on(B&&G&&"object"==typeof e.g&&e.g),H=on(z[typeof self]&&self),Y=on(z[typeof window]&&window),K=on(z[typeof this]&&this),$=q||Y!==(K&&K.window)&&Y||H||K||Function("return this")();function W(n,t){return n.set(t[0],t[1]),n}function X(n,t){return n.add(t),n}function J(n,t){return nn(It(n),Ae)}function Q(n,t){return!!n.length&&en(n,t,0)>-1}function Z(n,t,e){for(var i=-1,r=n.length;++i<r;)if(e(t,n[i]))return!0;return!1}function nn(n,t){for(var e=-1,i=t.length,r=n.length;++e<i;)n[r+e]=t[e];return n}function tn(n,t,e){for(var r=-1,o=n.length;++r<o;){var a=n[r],u=t(a);if(null!=u&&(s===i?u==u:e(u,s)))var s=u,c=a}return c}function en(n,t,e){if(t!=t)return function(n,t,e){var i=n.length,r=t+(e?0:-1);for(;e?r--:++r<i;){var o=n[r];if(o!=o)return r}return-1}(n,e);for(var i=e-1,r=n.length;++i<r;)if(n[i]===t)return i;return-1}function rn(n,t,e,i,r){return r(n,(function(n,r,o){e=i?(i=!1,n):t(e,n,r,o)})),e}function on(n){return n&&n.Object===Object?n:null}function an(n){return U[n]}function un(n){var t=!1;if(null!=n&&"function"!=typeof n.toString)try{t=!!(n+"")}catch(e){}return t}function sn(n,t){return n="number"==typeof n||L.test(n)?+n:-1,t=null==t?a:t,n>-1&&n%1==0&&n<t}var cn=Array.prototype,fn=Object.prototype,ln=Function.prototype.toString,dn=fn.hasOwnProperty,vn=0,hn=ln.call(Object),pn=fn.toString,gn=$._,mn=RegExp("^"+ln.call(dn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_n=$.Reflect,wn=$.Symbol,yn=$.Uint8Array,En=_n?_n.enumerate:i,bn=Object.getPrototypeOf,In=Object.getOwnPropertySymbols,An=Object.create,Tn=fn.propertyIsEnumerable,Sn=cn.splice,Rn=$.isFinite,kn=Object.keys,Nn=Math.max,Dn=Ot($,"Map"),Cn=Ot($,"Set"),On=Ot($,"WeakMap"),xn=Ot(Object,"create"),Pn=Dn?ln.call(Dn):"",Mn=Cn?ln.call(Cn):"",Ln=On?ln.call(On):"",Vn=wn?wn.prototype:i,Fn=Vn?Vn.valueOf:i;function Un(n){if(ue(n)&&!Zt(n)){if(n instanceof zn)return n;if(dn.call(n,"__wrapped__"))return function(n){var t=new zn(n.u,n.l);return t.I=It(n.I),t}(n)}return new zn(n)}function zn(n,t){this.u=n,this.I=[],this.l=!!t}function Bn(){}function Gn(n,t){return xn?n[t]!==i:dn.call(n,t)}function jn(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}function qn(n){var t=-1,e=n?n.length:0;for(this.T=new jn;++t<e;)this.push(n[t])}function Hn(n,t){var e=n.T;if(Lt(t)){var i=e.T;return("string"==typeof t?i.string:i.hash)[t]===o}return e.has(t)}function Yn(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}function Kn(n,t){var e=Xn(n,t);return!(e<0)&&(e==n.length-1?n.pop():Sn.call(n,e,1),!0)}function $n(n,t){var e=Xn(n,t);return e<0?i:n[e][1]}function Wn(n,t){return Xn(n,t)>-1}function Xn(n,t){for(var e=n.length;e--;)if(Xt(n[e][0],t))return e;return-1}function Jn(n,t,e){var i=Xn(n,t);i<0?n.push([t,e]):n[i][1]=e}function Qn(n,t,e,r){return n===i||Xt(n,fn[e])&&!dn.call(r,e)?t:n}function Zn(n,t,e){(e!==i&&!Xt(n[t],e)||"number"==typeof t&&e===i&&!(t in n))&&(n[t]=e)}function nt(n,t,e){var r=n[t];dn.call(n,t)&&Xt(r,e)&&(e!==i||t in n)||(n[t]=e)}function tt(n){return"function"==typeof n?n:Te}function et(n,t,e,r,o,a,s){var l;if(r&&(l=a?r(n,o,a,s):r(n)),l!==i)return l;if(!ae(n))return n;var E=Zt(n);if(E){if(l=function(n){var t=n.length,e=n.constructor(t);t&&"string"==typeof n[0]&&dn.call(n,"index")&&(e.index=n.index,e.input=n.input);return e}(n),!t)return It(n)}else{var O=Pt(n),x=O==d||O==v;if(ie(n))return function(n,t){if(t)return n.slice();var e=new n.constructor(n.length);return n.copy(e),e}(n,t);if(O==g||O==u||x&&!a){if(un(n))return a?n:{};if(l=function(n){return"function"!=typeof n.constructor||Vt(n)?{}:it(bn(n))}(x?{}:n),!t)return l=function(n,t){return n&&St(t,we(t),n)}(l,n),e?kt(n,l):l}else{if(!F[O])return a?n:{};l=function(n,t,e){var i=n.constructor;switch(t){case b:return Tt(n);case c:case f:return new i(+n);case I:case A:case T:case S:case R:case k:case N:case D:case C:return function(n,t){var e=t?Tt(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)}(n,e);case h:return function(n){return jt(function(n){var t=-1,e=Array(n.size);return n.forEach((function(n,i){e[++t]=[i,n]})),e}(n),W,new n.constructor)}(n);case p:case w:return new i(n);case m:return function(n){var t=new n.constructor(n.source,P.exec(n));return t.lastIndex=n.lastIndex,t}(n);case _:return jt(function(n){var t=-1,e=Array(n.size);return n.forEach((function(n){e[++t]=n})),e}(o=n),X,new o.constructor);case y:return r=n,Fn?Object(Fn.call(r)):{}}var r;var o}(n,O,t)}}s||(s=new Yn);var M=s.get(n);return M||(s.set(n,l),(E?ut:lt)(n,(function(i,o){nt(l,o,et(i,t,e,r,o,n,s))})),e&&!E?kt(n,l):l)}function it(n){return ae(n)?An(n):{}}function rt(n,t,e){if("function"!=typeof n)throw new TypeError(r);return setTimeout((function(){n.apply(i,e)}),t)}var ot,at,ut=(ot=lt,function(n,t){if(null==n)return n;if(!ne(n))return ot(n,t);for(var e=n.length,i=at?e:-1,r=Object(n);(at?i--:++i<e)&&!1!==t(r[i],i,r););return n});function st(n,t){var e=[];return ut(n,(function(n,i,r){t(n,i,r)&&e.push(n)})),e}function ct(n,t,e,i){i||(i=[]);for(var r=-1,o=n.length;++r<o;){var a=n[r];t>0&&te(a)&&(e||Zt(a)||Qt(a))?t>1?ct(a,t-1,e,i):nn(i,a):e||(i[i.length]=a)}return i}var ft=function(n){return function(t,e,i){for(var r=-1,o=Object(t),a=i(t),u=a.length;u--;){var s=a[n?u:++r];if(!1===e(o[s],s,o))break}return t}}();function lt(n,t){return n&&ft(n,t,we)}function dt(n,t){return st(t,(function(t){return re(n[t])}))}function vt(n,t,e,r,o){return n===t||(null==n||null==t||!ae(n)&&!ue(t)?n!=n&&t!=t:function(n,t,e,r,o,a){var d=Zt(n),v=Zt(t),h=s,_=s;d||(h=(h=pn.call(n))==u?g:h);v||(_=(_=pn.call(t))==u?g:_);var y=h==g&&!un(n),E=_==g&&!un(t),b=h==_;a||(a=[]);var I=Bt(a,(function(t){return t[0]===n}));if(I&&I[1])return I[1]==t;if(a.push([n,t]),b&&!y){var A=d||fe(n)?function(n,t,e,r,o,a){var u=-1,s=2&o,c=1&o,f=n.length,l=t.length;if(f!=l&&!(s&&l>f))return!1;var d=!0;for(;++u<f;){var v,h=n[u],p=t[u];if(v!==i){if(v)continue;d=!1;break}if(c){if(!At(t,(function(n){return h===n||e(h,n,r,o,a)}))){d=!1;break}}else if(h!==p&&!e(h,p,r,o,a)){d=!1;break}}return d}(n,t,e,r,o,a):function(n,t,e,i,r,o,a){switch(e){case c:case f:return+n==+t;case l:return n.name==t.name&&n.message==t.message;case p:return n!=+n?t!=+t:n==+t;case m:case w:return n==t+""}return!1}(n,t,h);return a.pop(),A}if(!(2&o)){var T=y&&dn.call(n,"__wrapped__"),S=E&&dn.call(t,"__wrapped__");if(T||S){A=e(T?n.value():n,S?t.value():t,r,o,a);return a.pop(),A}}if(!b)return!1;A=function(n,t,e,r,o,a){var u=2&o,s=we(n),c=s.length,f=we(t).length;if(c!=f&&!u)return!1;var l=c;for(;l--;){var d=s[l];if(!(u?d in t:dn.call(t,d)))return!1}var v=!0,h=u;for(;++l<c;){var p,g=n[d=s[l]],m=t[d];if(!(p===i?g===m||e(g,m,r,o,a):p)){v=!1;break}h||(h="constructor"==d)}if(v&&!h){var _=n.constructor,w=t.constructor;_==w||!("constructor"in n)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w||(v=!1)}return v}(n,t,e,r,o,a);return a.pop(),A}(n,t,vt,e,r,o))}function ht(n){var t=typeof n;return"function"==t?n:null==n?Te:("object"==t?mt:Et)(n)}function pt(n){n=null==n?n:Object(n);var t=[];for(var e in n)t.push(e);return t}function gt(n,t){var e=-1,i=ne(n)?Array(n.length):[];return ut(n,(function(n,r,o){i[++e]=t(n,r,o)})),i}function mt(n){var t=we(n);return function(e){var r=t.length;if(null==e)return!r;for(e=Object(e);r--;){var o=t[r];if(!(o in e)||!vt(n[o],e[o],i,3))return!1}return!0}}function _t(n,t,e,r,o){if(n!==t){var a=Zt(t)||fe(t)?i:ye(t);ut(a||t,(function(u,s){if(a&&(u=t[s=u]),ae(u))o||(o=new Yn),function(n,t,e,r,o,a,u){var s=n[e],c=t[e],f=u.get(c);if(f)return void Zn(n,e,f);var l=a?a(s,c,e+"",n,t,u):i,d=l===i;d&&(l=c,Zt(c)||fe(c)?Zt(s)?l=s:te(s)?l=It(s):(d=!1,l=et(c,!a)):function(n){if(!ue(n)||pn.call(n)!=g||un(n))return!1;var t=bn(n);if(null===t)return!0;var e=t.constructor;return"function"==typeof e&&e instanceof e&&ln.call(e)==hn}(c)||Qt(c)?Qt(s)?l=St(v=s,ye(v)):!ae(s)||r&&re(s)?(d=!1,l=et(c,!a)):l=s:d=!1);var v;u.set(c,l),d&&o(l,c,r,a,u);u["delete"](c),Zn(n,e,l)}(n,t,s,e,_t,r,o);else{var c=r?r(n[s],u,s+"",n,t,o):i;c===i&&(c=u),Zn(n,s,c)}}))}}function wt(n,t){return n=Object(n),jt(t,(function(t,e){return e in n&&(t[e]=n[e]),t}),{})}function yt(n,t){var e={};return function(n,t){null==n||ft(n,t,ye)}(n,(function(n,i){t(n,i)&&(e[i]=n)})),e}function Et(n){return function(t){return null==t?i:t[n]}}function bt(n,t,e){var i=-1,r=n.length;t<0&&(t=-t>r?0:r+t),(e=e>r?r:e)<0&&(e+=r),r=t>e?0:e-t>>>0,t>>>=0;for(var o=Array(r);++i<r;)o[i]=n[i+t];return o}function It(n){return bt(n,0,n.length)}function At(n,t){var e;return ut(n,(function(n,i,r){return!(e=t(n,i,r))})),!!e}function Tt(n){var t=new n.constructor(n.byteLength);return new yn(t).set(new yn(n)),t}En&&!Tn.call({valueOf:1},"valueOf")&&(pt=function(n){return function(n){for(var t,e=[];!(t=n.next()).done;)e.push(t.value);return e}(En(n))});var St=Rt;function Rt(n,t,e,i){e||(e={});for(var r=-1,o=t.length;++r<o;){var a=t[r];nt(e,a,i?i(e[a],n[a],a,e,n):n[a])}return e}function kt(n,t){return St(n,xt(n),t)}function Nt(n){return Wt((function(t,e){var r=-1,o=e.length,a=o>1?e[o-1]:i;for(a="function"==typeof a?(o--,a):i,t=Object(t);++r<o;){var u=e[r];u&&n(t,u,r,a)}return t}))}function Dt(n,t,e,i){if("function"!=typeof n)throw new TypeError(r);var o=1&t,a=function(n){return function(){var t=arguments,e=it(n.prototype),i=n.apply(e,t);return ae(i)?i:e}}(n);return function u(){for(var t=-1,r=arguments.length,s=-1,c=i.length,f=Array(c+r),l=this&&this!==$&&this instanceof u?a:n;++s<c;)f[s]=i[s];for(;r--;)f[s++]=arguments[++t];return l.apply(o?e:this,f)}}var Ct=Et("length");function Ot(n,t){var e=n[t];return function(n){if(null==n)return!1;if(re(n))return mn.test(ln.call(n));return ue(n)&&(un(n)?mn:M).test(n)}(e)?e:i}var xt=In||function(){return[]};function Pt(n){return pn.call(n)}function Mt(n){var t=n?n.length:i;return oe(t)&&(Zt(n)||ce(n)||Qt(n))?function(n,t){for(var e=-1,i=Array(n);++e<n;)i[e]=t(e);return i}(t,String):null}function Lt(n){var t=typeof n;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=n||null==n}function Vt(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||fn)}(Dn&&Pt(new Dn)!=h||Cn&&Pt(new Cn)!=_||On&&Pt(new On)!=E)&&(Pt=function(n){var t=pn.call(n),e=t==g?n.constructor:null,i="function"==typeof e?ln.call(e):"";if(i)switch(i){case Pn:return h;case Mn:return _;case Ln:return E}return t});var Ft=Wt((function(n,t){return Zt(n)||(n=null==n?[]:[Object(n)]),t=ct(t,1),J(n)}));function Ut(n){return n?n[0]:i}function zt(n){var t=Un(n);return t.l=!0,t}function Bt(n,t){return function(n,t,e,i){var r;return e(n,(function(n,e,o){if(t(n,e,o))return r=i?e:n,!1})),r}(n,ht(t),ut)}function Gt(n,t){return ut(n,tt(t))}function jt(n,t,e){return rn(n,ht(t),e,arguments.length<3,ut)}function qt(n,t){var e;if("function"!=typeof t)throw new TypeError(r);return n=de(n),function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=i),e}}var Ht=Wt((function(n,t,e){return Dt(n,33,t,e)})),Yt=Wt((function(n,t){return rt(n,1,t)})),Kt=Wt((function(n,t,e){return rt(n,ve(t)||0,e)}));var $t=Wt((function(n,t){return Dt(n,32,i,t)}));function Wt(n,t){if("function"!=typeof n)throw new TypeError(r);return t=Nn(t===i?n.length-1:de(t),0),function(){for(var e=arguments,i=-1,r=Nn(e.length-t,0),o=Array(r);++i<r;)o[i]=e[t+i];var a=Array(t+1);for(i=-1;++i<t;)a[i]=e[i];return a[t]=o,n.apply(this,a)}}function Xt(n,t){return n===t||n!=n&&t!=t}function Jt(n,t){return n>t}function Qt(n){return te(n)&&dn.call(n,"callee")&&(!Tn.call(n,"callee")||pn.call(n)==u)}var Zt=Array.isArray;function ne(n){return null!=n&&oe(Ct(n))&&!re(n)}function te(n){return ue(n)&&ne(n)}var ee,ie=(ee=!1,function(){return ee});function re(n){var t=ae(n)?pn.call(n):"";return t==d||t==v}function oe(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=a}function ae(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ue(n){return!!n&&"object"==typeof n}function se(n){return"number"==typeof n||ue(n)&&pn.call(n)==p}function ce(n){return"string"==typeof n||!Zt(n)&&ue(n)&&pn.call(n)==w}function fe(n){return ue(n)&&oe(n.length)&&!!V[pn.call(n)]}function le(n,t){return n<t}var de=Number,ve=Number;function he(n){return"string"==typeof n?n:null==n?"":n+""}var pe=Nt((function(n,t){St(t,we(t),n)})),ge=Nt((function(n,t){St(t,ye(t),n)})),me=Nt((function(n,t,e,i){Rt(t,ye(t),n,i)}));var _e=Wt((function(n){return n.push(i,Qn),me.apply(i,n)}));function we(n){var t=Vt(n);if(!t&&!ne(n))return function(n){return kn(Object(n))}(n);var e=Mt(n),i=!!e,r=e||[],o=r.length;for(var a in n)!dn.call(n,a)||i&&("length"==a||sn(a,o))||t&&"constructor"==a||r.push(a);return r}function ye(n){for(var t=-1,e=Vt(n),i=pt(n),r=i.length,o=Mt(n),a=!!o,u=o||[],s=u.length;++t<r;){var c=i[t];a&&("length"==c||sn(c,s))||"constructor"==c&&(e||!dn.call(n,c))||u.push(c)}return u}var Ee=Nt((function(n,t,e){_t(n,t,e)})),be=Wt((function(n,t){return null==n?{}:(t=gt(ct(t,1),String),wt(n,function(n,t,e,i){var r,o=-1,a=Q,u=!0,s=n.length,c=[],f=t.length;if(!s)return c;e&&(t=gt(t,(r=e,function(n){return r(n)}))),i?(a=Z,u=!1):t.length>=200&&(a=Hn,u=!1,t=new qn(t));n:for(;++o<s;){var l=n[o],d=e?e(l):l;if(u&&d==d){for(var v=f;v--;)if(t[v]===d)continue n;c.push(l)}else a(t,d,i)||c.push(l)}return c}(ye(n),t)))}));var Ie=Wt((function(n,t){return null==n?{}:wt(n,ct(t,1))}));function Ae(n){return n?function(n,t){return gt(t,(function(t){return n[t]}))}(n,we(n)):[]}function Te(n){return n}var Se,Re=ht;function ke(n,t,e){var i=we(t),r=dt(t,i);null!=e||ae(t)&&(r.length||!i.length)||(e=t,t=n,n=this,r=dt(t,we(t)));var o=!ae(e)||!("chain"in e)||e.chain,a=re(n);return ut(r,(function(e){var i=t[e];n[e]=i,a&&(n.prototype[e]=function(){var t=this.l;if(o||t){var e=n(this.u),r=e.I=It(this.I);return r.push({func:i,args:arguments,thisArg:n}),e.l=t,e}return i.apply(n,nn([this.value()],arguments))})})),n}zn.prototype=it(Un.prototype),zn.prototype.constructor=zn,Bn.prototype=xn?xn(null):fn,jn.prototype.clear=function(){this.T={hash:new Bn,map:Dn?new Dn:[],string:new Bn}},jn.prototype["delete"]=function(n){var t=this.T;return Lt(n)?function(n,t){return Gn(n,t)&&delete n[t]}("string"==typeof n?t.string:t.hash,n):Dn?t.map["delete"](n):Kn(t.map,n)},jn.prototype.get=function(n){var t=this.T;return Lt(n)?function(n,t){if(xn){var e=n[t];return e===o?i:e}return dn.call(n,t)?n[t]:i}("string"==typeof n?t.string:t.hash,n):Dn?t.map.get(n):$n(t.map,n)},jn.prototype.has=function(n){var t=this.T;return Lt(n)?Gn("string"==typeof n?t.string:t.hash,n):Dn?t.map.has(n):Wn(t.map,n)},jn.prototype.set=function(n,t){var e=this.T;return Lt(n)?function(n,t,e){n[t]=xn&&e===i?o:e}("string"==typeof n?e.string:e.hash,n,t):Dn?e.map.set(n,t):Jn(e.map,n,t),this},qn.prototype.push=function(n){var t=this.T;if(Lt(n)){var e=t.T;("string"==typeof n?e.string:e.hash)[n]=o}else t.set(n,o)},Yn.prototype.clear=function(){this.T={array:[],map:null}},Yn.prototype["delete"]=function(n){var t=this.T,e=t.array;return e?Kn(e,n):t.map["delete"](n)},Yn.prototype.get=function(n){var t=this.T,e=t.array;return e?$n(e,n):t.map.get(n)},Yn.prototype.has=function(n){var t=this.T,e=t.array;return e?Wn(e,n):t.map.has(n)},Yn.prototype.set=function(n,t){var e=this.T,i=e.array;i&&(i.length<199?Jn(i,n,t):(e.array=null,e.map=new jn(i)));var r=e.map;return r&&r.set(n,t),this},Un.assign=pe,Un.assignIn=ge,Un.before=qt,Un.bind=Ht,Un.chain=zt,Un.compact=function(n){return st(n,Boolean)},Un.concat=Ft,Un.create=function(n,t){var e=it(n);return t?pe(e,t):e},Un.defaults=_e,Un.defer=Yt,Un.delay=Kt,Un.filter=function(n,t){return st(n,ht(t))},Un.flatten=function(n){return(n?n.length:0)?ct(n,1):[]},Un.flattenDeep=function(n){return(n?n.length:0)?ct(n,Infinity):[]},Un.iteratee=Re,Un.keys=we,Un.map=function(n,t){return gt(n,ht(t))},Un.mapValues=function(n,t){var e={};return t=ht(t),lt(n,(function(n,i,r){e[i]=t(n,i,r)})),e},Un.matches=function(n){return mt(pe({},n))},Un.merge=Ee,Un.mixin=ke,Un.negate=function(n){if("function"!=typeof n)throw new TypeError(r);return function(){return!n.apply(this,arguments)}},Un.omit=be,Un.omitBy=function(n,t){return t=ht(t),yt(n,(function(n,e){return!t(n,e)}))},Un.once=function(n){return qt(2,n)},Un.partial=$t,Un.pick=Ie,Un.pickBy=function(n,t){return null==n?{}:yt(n,ht(t))},Un.slice=function(n,t,e){var r=n?n.length:0;return t=null==t?0:+t,e=e===i?r:+e,r?bt(n,t,e):[]},Un.sortBy=function(n,t){var e=0;return t=ht(t),gt(gt(n,(function(n,i,r){return{value:n,index:e++,criteria:t(n,i,r)}})).sort((function(n,t){return function(n,t){if(n!==t){var e=null===n,r=n===i,o=n==n,a=null===t,u=t===i,s=t==t;if(n>t&&!a||!o||e&&!u&&s||r&&s)return 1;if(n<t&&!e||!s||a&&!r&&o||u&&o)return-1}return 0}(n.criteria,t.criteria)||n.index-t.index})),Et("value"))},Un.tap=function(n,t){return t(n),n},Un.thru=function(n,t){return t(n)},Un.toArray=function(n){return ne(n)?n.length?It(n):[]:Ae(n)},Un.values=Ae,Un.extend=ge,ke(Un,Un),Un.clone=function(n){return ae(n)?Zt(n)?It(n):St(n,we(n)):n},Un.cloneDeep=function(n){return et(n,!0,!0)},Un.escape=function(n){return(n=he(n))&&x.test(n)?n.replace(O,an):n},Un.every=function(n,t,e){return function(n,t){var e=!0;return ut(n,(function(n,i,r){return e=!!t(n,i,r)})),e}(n,ht(t=e?i:t))},Un.find=Bt,Un.findIndex=function(n,t){return n&&n.length?function(n,t,e){for(var i=n.length,r=e?i:-1;e?r--:++r<i;)if(t(n[r],r,n))return r;return-1}(n,ht(t)):-1},Un.forEach=Gt,Un.forOwn=function(n,t){return n&&lt(n,tt(t))},Un.has=function(n,t){return null!=n&&dn.call(n,t)},Un.head=Ut,Un.identity=Te,Un.includes=function(n,t,e,i){n=ne(n)?n:Ae(n),e=e&&!i?de(e):0;var r=n.length;return e<0&&(e=Nn(r+e,0)),ce(n)?e<=r&&n.indexOf(t,e)>-1:!!r&&en(n,t,e)>-1},Un.indexOf=function(n,t,e){for(var i=n?n.length:0,r=((e="number"==typeof e?e<0?Nn(i+e,0):e:0)||0)-1,o=t==t;++r<i;){var a=n[r];if(o?a===t:a!=a)return r}return-1},Un.isArguments=Qt,Un.isArray=Zt,Un.isBoolean=function(n){return!0===n||!1===n||ue(n)&&pn.call(n)==c},Un.isDate=function(n){return ue(n)&&pn.call(n)==f},Un.isEmpty=function(n){if(ne(n)&&(Zt(n)||ce(n)||re(n.splice)||Qt(n)))return!n.length;for(var t in n)if(dn.call(n,t))return!1;return!0},Un.isEqual=function(n,t){return vt(n,t)},Un.isFinite=function(n){return"number"==typeof n&&Rn(n)},Un.isFunction=re,Un.isNaN=function(n){return se(n)&&n!=+n},Un.isNull=function(n){return null===n},Un.isNumber=se,Un.isObject=ae,Un.isRegExp=function(n){return ae(n)&&pn.call(n)==m},Un.isString=ce,Un.isUndefined=function(n){return n===i},Un.last=function(n){var t=n?n.length:0;return t?n[t-1]:i},Un.max=function(n){return n&&n.length?tn(n,Te,Jt):i},Un.min=function(n){return n&&n.length?tn(n,Te,le):i},Un.noConflict=function(){return $._===this&&($._=gn),this},Un.noop=function(){},Un.reduce=jt,Un.result=function(n,t,e){var r=null==n?i:n[t];return r===i&&(r=e),re(r)?r.call(n):r},Un.size=function(n){return null==n?0:(n=ne(n)?n:we(n)).length},Un.some=function(n,t,e){return At(n,ht(t=e?i:t))},Un.uniqueId=function(n){var t=++vn;return he(n)+t},Un.each=Gt,Un.first=Ut,ke(Un,(Se={},lt(Un,(function(n,t){dn.call(Un.prototype,t)||(Se[t]=n)})),Se),{chain:!1}),Un.VERSION="4.6.1",ut(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:cn)[n],e=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(n);Un.prototype[n]=function(){var n=arguments;return i&&!this.l?t.apply(this.value(),n):this[e]((function(e){return t.apply(e,n)}))}})),Un.prototype.toJSON=Un.prototype.valueOf=Un.prototype.value=function(){return n=this.u,jt(this.I,(function(n,t){return t.func.apply(t.thisArg,nn([n],t.args))}),n);var n},(Y||H||{})._=Un,B&&G&&(j&&((G.exports=Un)._=Un),B._=Un)}.call(this)},9524:function(n,t,e){n.exports=e(8871)._.noConflict()},529:function(n,t,e){var i=e(4087).v3,r=Math.pow(2,32),o=function(n,t){return(i(n,t)>>>0)/r};n.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(n,t){var e=i(n,t);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(n,t,e){return Math.floor(o(n,t)*e)},hashToReal:o,toByteString:function(n){var t=String.fromCharCode;return n.replace(/[\S\s]/gi,(function(n){n=n.charCodeAt(0);var e=t(255&n);return n>255&&(e=t(n>>>8&255)+e),n>65535&&(e=t(n>>>16)+e),e}))}}},2827:function(n,t){t.generate=function e(n){return n?(n^16*Math.random()>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},6704:function(n,t,e){var i=e(9524),r=e(1731).get("stores/audience_data"),o=e(2497),a=e(9422),u=e(9787),s=e(1507);function c(n){var t=["type","selector","attributes","value"],e=i.extend({},n);return e.changeSet=i.map(n.changeSet,(function(n){return i.pick(s.dereferenceChangeId(n),t)})),e}t.emitLayerDecided=function(n){var t=n.decisionTicket?n.decisionTicket.audienceIds:[],e=i.map(t,(function(n){return{id:n,name:r.get(n).name}})),u={type:a.TYPES.LIFECYCLE,name:"layerDecided",data:i.extend(n,{audiences:e})};var c=s.translateLayerEventToCampaignEvent(u);o.emit(u),o.emit(c)},t.emitViewActivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"viewActivated",data:n};var e=s.translateViewActivatedToPageActivated(t);o.emit(t),o.emit(e)},t.emitViewsActivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"viewsActivated",data:n};o.emit(t)},t.emitPageDeactivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"pageDeactivated",data:n};o.emit(t)},t.emitActivateEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var n={type:a.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(n)},t.emitOriginsSyncedEvent=function(){var n={type:a.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(n)},t.emitActionAppliedEvent=function(n){var t={type:n.type,campaignId:n.layerId,pageId:n.pageId,experimentId:n.experimentId,variationId:n.variationId};u.defineProperty(t,"changes",(function(){return c(n).changeSet}),"actionAppliedEvent");var e={type:a.TYPES.ACTION,name:"applied",data:t};o.emit(e)},t.emitActionsForDecisionAppliedEvent=function(n,t){var e={decision:n};u.defineProperty(e,"actions",(function(){return i.map(t,c)}),"appliedAllForDecisionEvent");var r={type:a.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(r)},t.emitSendEvents=function(){var n={type:a.TYPES.ANALYTICS,name:"sendEvents"};o.emit(n)},t.emitHoldEvents=function(){var n={type:a.TYPES.ANALYTICS,name:"holdEvents"};o.emit(n)}},2212:function(n,t,e){var i=e(9524),r=e(4570),o=e(9787),a=e(1507),u=e(8073),s=e(898);function c(n,t,e,r){var o=n.getLayerState(r),a=t.get(r),s=e.get();if(!o||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(u.isSingleExperimentPolicy(a.policy)&&o.decision.isLayerHoldback)return null;var c,f,l=o.decision.experimentId,d=o.decision.variationId;return l&&d&&(c=i.find(a.experiments,{id:l}))&&(f=i.find(c.variations,{id:d}))?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:c.name,id:c.id},variation:{name:f.name,id:f.id},isLayerHoldback:o.decision.isLayerHoldback}:null}function f(n,t,e,r,o,a){var c=[],f=n.getLayerStates();a.onlySingleExperiments&&(f=i.filter(f,(function(n){var e=t.get(n.layerId);return e&&u.isSingleExperimentPolicy(e.policy)})));var l=i.map(f,(function(n){var t=!!n.decision.variationId,e=n.decisionActivationId&&n.decisionActivationId===r.getActivationId(),o=s.getExperimentAndVariation(),a=o?o.variationId:null,u=t&&n.decision.variationId===a;return i.extend(n,{isActive:t&&e||u,visitorRedirected:u})})),d=o?i.filter(l,o):l;return i.each(d,(function(n){var r=function(n,t,e,r){var o,a,u=n.layerId,s=t.get(u)||{},c=i.map(s.experiments,(function(n){return i.pick(n,["id","name"])}));if(!r&&s.decisionMetadata&&s.decisionMetadata.offerConsistency)return;var f={id:u,campaignName:s.name||null,experiment:null,allExperiments:c,variation:null,reason:n.decision.reason,isActive:!!n.isActive,visitorRedirected:n.visitorRedirected,isInCampaignHoldback:n.decision.isLayerHoldback};n.decision&&n.decision.experimentId&&(o=i.find(s.experiments,{id:n.decision.experimentId}));o&&(f.experiment=i.pick(o,["id","name","campaignName"]));o&&n.decision.variationId&&(a=i.find(o.variations,{id:n.decision.variationId}));a&&(f.variation=i.pick(a,["id","name"]));var l=i.map(n.decisionTicket.audienceIds,(function(n){return i.pick(e.get(n),["id","name"])}));f.audiences=l,s.decisionMetadata&&s.decisionMetadata.offerConsistency&&(f.pageId=n.pageId);return f}(n,t,e,a.includeOfferConsistency);r&&c.push(r)})),c}t.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(n,t,e,r,u,s,c,f,l){var d={},v={},h={},p={audiences:n.getAudiencesMap(),events:e.getEventsMap(),campaigns:d,pages:u.getPagesMap(),experiments:v,variations:h,projectId:l.getProjectId(),snippetId:l.getSnippetId(),accountId:l.getAccountId(),dcpServiceId:l.getDCPServiceId(),revision:l.getRevision(),clientName:t.getClientName(),clientVersion:t.getClientVersion()},g=a.dereferenceChangeId;return i.each(r.getAll(),(function(n){o.defineProperty(d,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"changes",(function(){return i.map(n.changes,g)}),"campaign"),o.defineProperty(t,"experiments",(function(){return i.map(n.experiments,(function(n){return v[n.id]}))}),"campaign"),t}),"campaignMap","byId"),i.each(n.experiments,(function(n){o.defineProperty(v,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"changes",(function(){return i.map(n.changes,g)}),"experiment"),o.defineProperty(t,"variations",(function(){return i.map(n.variations,(function(n){return h[n.id]}))}),"experiment"),t}),"experimentMap","byId"),i.each(n.variations,(function(n){o.defineProperty(h,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"actions",(function(){return i.map(n.actions,(function(n){return i.extend({},n,{changes:i.map(n.changes,g)})}))}),"variation"),t}),"variationMap","byId")}))}))})),p.groups=s.getGroupsMap(),p}],t.visitor=["stores/visitor",function(n){return i.cloneDeep(n.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(n){return{randomId:n.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(n,t,e,o,a,l,d){return{getCampaignStates:function(r){var o={},a=f(e,t,n,l,r,{includeOfferConsistency:!1});return i.each(a,(function(n){o[n.id]=n})),o},getExperimentStates:function(r){var o=f(e,t,n,l,r,{includeOfferConsistency:!1,onlySingleExperiments:!0}),a=["audiences","variation","reason","visitorRedirected","isActive"];return i.reduce(o,(function(n,t){var e=t.allExperiments[0];return n[e.id]=i.extend({},i.pick(t,a),{id:e.id,experimentName:e.name,isInExperimentHoldback:t.isInCampaignHoldback}),n}),{})},getCampaignStateLists:function(r){var o={},a=f(e,t,n,l,r,{includeOfferConsistency:!0});return i.each(a,(function(n){var t=n.id;o[t]||(o[t]=[]),o[t].push(n)})),o},getPageStates:function(n){var t=a.getAll(),e=i.reduce(t,(function(n,t){var e=o.get(t.id);return n[t.id]=i.extend({},i.pick(e,["id","name","apiName","category","staticConditions","tags"]),i.pick(t,["isActive","metadata"])),n[t.id].isActive=!!n[t.id].isActive,n}),{});return n?i.pickBy(e,n):e},isGlobalHoldback:function(){return l.isGlobalHoldback()},getActivationId:function(){return l.getActivationId()},getVariationMap:function(){var n=e.getLayerStates(),r={};return i.each(n,(function(n){var e=t.get(n.layerId);if(n.decision&&n.decision.experimentId&&(r[n.decision.experimentId]={id:n.decision.variationId,name:null,index:null},e)){var o=i.find(e.experiments,{id:n.decision.experimentId});if(o&&n.decision.variationId)var a=i.find(o.variations,{id:n.decision.variationId}),u=i.findIndex(o.variations,{id:n.decision.variationId});a&&(r[n.decision.experimentId]={id:n.decision.variationId,name:a.name,index:u})}})),r},getActiveExperimentIds:function(){var n={};return i.each(this.getCampaignStateLists({isActive:!0}),(function(t){i.each(t,(function(t){n[t.experiment.id]=!0}))})),i.keys(n)},getRedirectInfo:function(){var n=s.getExperimentAndVariation();return n&&(n.referrer=s.getReferrer()),n},getDecisionString:function(n){if(!n)throw new Error("Must pass a config to getDecisionString");n=i.extend({maxLength:255,shouldCleanString:!1},n);var o=c(e,t,d,n.campaignId);return o?r.generateAnalyticsString(o.layer,o.experiment,o.variation,o.isLayerHoldback,n.maxLength,n.shouldCleanString):null},getDecisionObject:function(n){if(!n)throw new Error("Must pass a config to getDecisionObject");n=i.extend({maxLength:255,shouldCleanString:!1},n);var o=c(e,t,d,n.campaignId);if(!o)return null;var a=r.formatNamesAndIdsForAnalytics(o.layer,o.experiment,o.variation,n.shouldCleanString),s=i.mapValues(a.names,(function(t,e){return r.combineAndTruncateIdAndName(t,a.idStrings[e],n.maxLength)})),f={experiment:s.experiment,variation:s.variation};return u.isSingleExperimentPolicy(o.layer.policy)||i.extend(f,{campaign:s.layer,holdback:o.isLayerHoldback}),f}}}],t.utils=e(9448).create(),t.jquery=["env/jquery",function(n){return n}],t.event_emitter=e(3900)},9534:function(n,t,e){var i=e(8507),r=e(9031),o="optimizelyDataApi";t.registerFunction=function(n,t){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[n]||(e[n]=t)},t.unregisterFunction=function(n){var t=r.getGlobal(o);t&&t[n]&&(t[n]=function(){i.log('Ignoring attempt to call "'+o+"."+n+'" which has been unregistered.')})},t.getFunction=function(n){return r.getGlobal(o)[n]}},2372:function(n,t,e){var i=e(9524),r=e(8507),o=e(2212),a=e(1731),u=a.get("stores/plugins"),s=e(7913),c=e(2883),f=e(3162),l=[e(1439),e(200),e(8698)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];t.push=function(n,t){var e,o,a,u;if(!i.isArray(n)&&i.isObject(n))u=i.isUndefined(n.version)?1:n.version,e=n.type,a=[n];else if(i.isArray(n))u=0,e=n[0],a=n.slice(1);else{if(!i.isString(n))return r.warn("API / Ignoring non-array/object/string argument:",n),!1;u=0,e=n,a=[]}if(l[u]&&(o=l[u][e]),t&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,a),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+u+") with arguments:",a),!1;r.log('API / Executing: "'+e,'" with arguments:',a);try{o.apply(null,a),f.dispatch(s.RECORD_API_USAGE,{methodName:u?"v"+u+"."+e:e})}catch(c){r.error(c)}return!0},t.get=function(n){r.log('API / Getting module: "'+n+'"');var t=o[n];if(t?i.isArray(t)&&(t=a.evaluate(t)):t=u.getPlugin(c.PluginTypes.apiModules,n),t)return f.dispatch(s.RECORD_API_USAGE,{methodName:"get."+n}),t;r.warn('Module "'+n+'" not found.')}},9787:function(n,t,e){var i=e(2676),r=e(7913),o=e(3162),a=e(8507);t.defineProperty=function(n,t,e,u,s){i(n,t,(function(){var n=["prop",u,s||t].join(".");return a.debug('Evaluating getter: "'+n+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:n}),e()}),!0)}},1439:function(n,t,e){var i=e(9524),r=e(200);function o(n){var t,e={};if(n)if(a(n))t=Number(n);else{if("object"!=typeof n)throw new Error("tracker","Revenue argument",n,"not a number.");if("revenue"in(e=i.extend({},n))){if(!a(e.revenue))throw new Error("tracker","Revenue value",e.revenue,"not a number.");t=Number(e.revenue),delete e.revenue}}return i.isUndefined(t)||(e.revenue=t),e}function a(n){return i.isNumber(n)||i.isString(n)&&Number(n)==n}t.activateGeoDelayedExperiments=function(n,t){t||(t=n.lists?"odds":"cdn3"),r.dataFromSource({data:n,source:t})},t.activateSiteCatalyst=function(n){n&&n.sVariable&&r.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:n.sVariable}})},t.bucketUser=t.bucketVisitor=function(n,t){if(n&&t){var e={experimentId:String(n)};t>256?e.variationId=String(t):e.variationIndex=String(t),r.bucketVisitor(e)}},t.disable=function(n){r.disable({scope:n})},t.log=function(n){i.isUndefined(n)&&(n=!0),r.log({level:n?"INFO":"OFF"})},t.optOut=function(n){i.isUndefined(n)&&(n=!0),r.optOut({isOptOut:n})},t.setCookieDomain=function(n){r.cookieDomain({cookieDomain:n})},t.setCookieExpiration=function(n){r.cookieExpiration({cookieExpirationDays:n})},t.setDimensionValue=function(n,t){var e={};e[n]=t,r.user({attributes:e})},t.setUserId=function(n){r.user({userId:n})},t.storeThirdPartyData=function(n,t){r.dataFromSource({source:n,data:t})},t.trackEvent=function(n,t){r.event({eventName:n,tags:o(t)})}},1507:function(n,t,e){var i=e(9524),r=e(1731),o=e(5761),a=e(9787),u=r.get("stores/change_data");t.translateDecisionToCampaignDecision=function(n){return s(i.cloneDeep(n),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(n){var e={};return a.defineProperty(e,"campaign",(function(){return function(n){var e=i.cloneDeep(n);e.changes&&(e.changes=i.map(e.changes,t.dereferenceChangeId));e.experiments&&i.each(e.experiments,(function(n){n.changes&&(n.changes=i.map(n.changes,t.dereferenceChangeId)),n.variations&&i.each(n.variations,(function(n){n.actions&&i.each(n.actions,(function(n){n.changes&&(n.changes=i.map(n.changes,t.dereferenceChangeId))}))}))}));return e}(n.data.layer)}),"campaignEvent"),e.decisionTicket=n.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(n.data.decision),e.audiences=n.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},t.translateViewActivatedToPageActivated=function(n){return{type:"lifecycle",name:"pageActivated",data:{page:n.data.view}}},t.dereferenceChangeId=function(n){var t=u.getChange(n);return t?o.safeReference(t):n};var s=function(n,t){var e=i.omit(n,i.keys(t));return i.each(t,(function(t,i){e[t]=n[i]})),e}},9448:function(n,t,e){var i=e(5575).Promise,r=e(6408).t,o=e(4660).poll,a=e(3675).b,u=e(711).A;t.create=function(){return{observeSelector:r,poll:o,Promise:i,waitForElement:a,waitUntil:u}}},7955:function(n){n.exports={DEFAULT_INTERVAL:20}},6408:function(n,t,e){var i=e(9524),r=(e(7913),e(1731)),o=r.get("stores/directive"),a=e(4011),u=(e(2883),e(3162),e(2827).generate),s=e(4660),c=e(9031),f=(r.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),l={},d=function(n){d=function(){if(o.shouldObserveChangesIndefinitely()){var n={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=a.getDocumentElement(),e=new MutationObserver((function(){this.disconnect(),i.each(i.keys(l),h),this.observe(t,n)}));return function(r){var o=l[r];e.observe(t,n),o.cancelObservation=function(){delete l[r],i.isEmpty(l)&&e.disconnect()}}}return function(n){var t=s.poll(i.partial(h,n));l[n].cancelObservation=function(){t(),delete l[n]}}}(),d(n)};function v(n){var t=l[n];t&&t.cancelObservation&&t.cancelObservation()}function h(n){if(l[n]){if(function(n){var t=n.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-n.startTime>t)return!0;return!1}(l[n]))return 0===l[n].matchedCount&&i.isFunction(l[n].options.onTimeout)&&l[n].options.onTimeout(),void v(n);var t=document.querySelectorAll(l[n].selector);t.length&&(i.each(t,(function(t){t.S&&t.S[n]||l[n].callbackQueue.push(t)})),function(n){for(;l[n]&&l[n].callbackQueue.length;){var t=l[n].callbackQueue.shift();if(p(t,n),l[n].matchedCount=l[n].matchedCount+1,l[n].callback(t),l[n]&&l[n].options.once)return void v(n)}}(n))}}function p(n,t){n.S||(n.S={}),n.S[t]=!0}t.t=function(n,t,e){if(!function(n){try{document.querySelector(n)}catch(t){return!1}return!0}(n))throw new Error("observeSelector expects a valid css selector as its first argument");if(!i.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(e&&(!i.isObject(e)||i.isFunction(e)))throw new Error("observeSelector expects an object as its third argument");var r=u();return e=i.assign({},f,e||{}),l[r]={callback:t,callbackQueue:[],matchedCount:0,options:e,selector:n,startTime:Date.now()},d(r),c.setTimeout(i.bind(h,null,r),0),i.partial(v,r)}},4660:function(n,t,e){var i=e(9524),r=(e(7913),e(1731)),o=(e(2883),e(3162),e(2827).generate),a=e(9031),u=e(7955).DEFAULT_INTERVAL,s=(r.get("stores/rum"),{});function c(n){s[n]&&i.each(s[n].callbacks,(function(n){n.call(null)}))}function f(n,t){s[t]&&s[t].callbacks[n]&&(delete s[t].callbacks[n],i.some(s[t].callbacks)||(clearInterval(s[t].id),delete s[t]))}t.poll=function(n,t){i.isNumber(t)||(t=u),s[t]||(s[t]={callbacks:{},id:a.setInterval(i.partial(c,t),t)});var e=o();return s[t].callbacks[e]=n,i.partial(f,e,t)},t.cancelAll=function(){i.each(s,(function(n,t){clearInterval(n.id),delete s[t]}))}},3675:function(n,t,e){var i=e(5575).Promise,r=e(6408).t;t.b=function(n){return new i((function(t,e){r(n,t,{once:!0})}))}},711:function(n,t,e){var i=e(5575).Promise,r=e(4660).poll;t.A=function(n){return new i((function(t,e){if(n())t();else var i=r((function(){n()&&(i(),t())}))}))}},200:function(n,t,e){var i=e(9524),r=e(7913),o=e(2372),a=e(2212),u=e(4044),s=e(2883),c=e(7222),f=e(6704),l=e(3944),d=e(4623).U,v=e(7649),h=e(8721),p=(e(1783),e(2862)),g=e(2497),m=e(3162),_=e(5516),w=e(9722),y=e(8507),E=e(7273),b=(e(3180),e(5968)),I=e(3028),A=e(1731),T=A.get("stores/dimension_data"),S=A.get("stores/view"),R=A.get("stores/view_data"),k=A.get("stores/visitor_id"),N=A.get("stores/layer_data"),D=A.get("stores/directive"),C=!1,O=t.ApiListenerError=d("ApiListenerError");t.event=function(n){var t;switch(n.eventType){case"click":t=function(n){var t;n.eventData&&(t=p.create(n.eventData.id,n.eventData.apiName,"click",n.eventData));return function(){var n=c.trackClickEvent(t);n?y.log("API / Tracking click event:",n):y.log("API / Not tracking click event:",n)}}(n);break;case"decision":t=function(n){var t=n.eventData,e=w.createLayerState(t.layerId,t.experimentId,t.variationId,t.isLayerHoldback),i=w.createSingle(t.layerId,t.experimentId,t.variationId);return function(){w.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),y.log("API / Tracking decision event:",e),c.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(n);break;case"pageview":t=function(n){var t=b.create(n.eventData.id,n.eventData.apiName),e=b.createState(t.id);return function(){var n=c.trackViewActivation(t,e);n?y.log("API / Tracking pageview event:",n):y.log("API / Not tracking pageview event:",n)}}(n);break;default:t=function(n){var t;n.eventId&&(t=p.create(n.eventId,n.eventName,"custom"));return b.updateAllViewTags(),function(){c.trackCustomEvent(n.eventName,n.tags,t)?y.log("API / Tracking custom event:",n.eventName,n.tags):y.log("API / Not tracking custom event:",n.eventName)}}(n)}k.getBucketingId()?t():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:s.Lifecycle.postActivate,cleanupFn:t})},t.clientMetadata=function(n){},t.priorRedirectString=function(n){C},t.microsnippetError=function(n){},t.rum=function(n){m.dispatch(r.SET_RUM_DATA,n.eventData)},t.initialViewStates=function(n){var t=i.map(n.states,(function(n,t){return{id:t,isActive:n}}));b.registerViews(t)},t.page=function(n){var t=R.getByApiName(n.pageName);if(!t)throw new Error('Unknown page "'+n.pageName+'"');var e=!n.hasOwnProperty("isActive")||n.isActive,i=function(){e?b.activateViaAPI(t,n.tags):(b.deactivate(t),y.log("API / Deactivated Page",b.description(t)))};k.getBucketingId()?i():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:s.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(n){b.setGlobalTags(n.tags)},t.user=function(n){y.log("API / Setting visitor custom attributes:",n.attributes),i.each(n.attributes,(function(n,t){var e,i,r=t,o=T.getById(t)||T.getByApiName(t);o&&(r=o.id,e=o.apiName,i=o.segmentId||o.id);var a={id:i,value:n};e&&(a.name=e),x(r,a,!0)}))};var x=function(n,t,e){var i=[{key:e?["custom",n]:[n],value:t,metadata:{lastModified:v.now()}}],o=function(){m.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};k.getBucketingId()?o():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:s.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};t.optOut=function(n){var t=!n.hasOwnProperty("isOptOut")||n.isOptOut;h.setOptOut(t)},t.cookieExpiration=function(n){var t=n.cookieExpirationDays;t<90&&(y.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",90,", setting to minimum."),t=90),y.log("API / Setting cookie age to",t,"days."),m.dispatch(r.SET_COOKIE_AGE,86400*t)},t.extendCookieLifetime=function(n){n=i.extend({isEnabled:!0},n),y.log("API / Setting cookie automatic lifetime extension to",n.isEnabled),m.dispatch(r.SET_COOKIE_AUTO_REFRESH,n.isEnabled)},t.cookieDomain=function(n){y.log("API / Setting cookie domain to",n.cookieDomain),m.dispatch(r.SET_COOKIE_DOMAIN,n.cookieDomain)},t.disable=function(n){if(n.scope){if("tracking"!==n.scope)throw new Error('Unknown "scope" for disable: '+n.scope);y.log("API / Disabling tracking"),m.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else y.log("API / Disabling everything"),m.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(n){var t=n.level,e=n.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(e)&&(e=""),y.setLogMatcher(e),y.setLogLevel(t)},t.registerModule=function(n){var t="custom/"+n.moduleName;if(a[t]||o.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');E.registerApiModule(t,n.module)},t.dataFromSource=function(n){var t=n.source;l.makeAsyncRequest(t),l.resolveRequest(t,n.data)},t.addListener=function(n){if(!i.isFunction(n.handler))throw new Error("A handler function must be supplied");(n=i.omit(n,"type")).publicOnly=!0,n.emitErrors=!0;var t=n.handler;n.handler=function(n){try{return t(n)}catch(e){throw new O(e)}},g.on(n)},t.removeListener=function(n){if(!n.token)throw new Error("Must supply a token to removeListener");g.off(n.token)},t.load=function(n){n.data=i.extend({},n.data),u.normalizeClientData(n.data),m.dispatch(r.DATA_LOADED,{data:n.data})},t.integrationSettings=function(n){if(!n.id)throw new Error("id is required");if(!n.settings)throw new Error("settings is required");m.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},n.settings,{id:n.id}))},t.bucketVisitor=function(n){if(!n.variationId&&i.isUndefined(n.variationIndex)||n.variationId&&n.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!n.experimentId)throw new Error("An experimentId is required.");var t,e,r=n.campaignId;if(r){if(!(t=N.get(r)))throw new Error("Could not find layer "+r)}else if(!(r=(t=N.getLayerByExperimentId(n.experimentId)).id))throw new Error("Could not find layer for experiment "+n.experimentId);if(!(e=i.find(t.experiments,{id:n.experimentId})))throw new Error("Could not find experiment "+n.experimentId+" in layer "+r);var o=n.variationId;if(i.isUndefined(n.variationIndex)){if(!i.find(e.variations,{id:o}))throw new Error("Cound not find variation "+o+" in experiment "+n.experimentId)}else if(!(o=e.variations[n.variationIndex].id))throw new Error("Could not find variation at index "+n.variationIndex+" in experiment "+n.experimentId);I.updateVariationIdMap(r,n.experimentId,o),k.getBucketingId()&&I.persistVariationIdMap()},t.waitForOriginSync=function(n){if(!i.isArray(n.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+_.stringify(n.canonicalOrigins));i.each(n.canonicalOrigins,(function(n){if(!i.isString(n))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof n)})),m.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:n.canonicalOrigins})},t.disableCrossOrigin=function(){y.log("API / cross origin tracking is DISABLED"),m.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){D.shouldActivate()?(i.forEach(S.getActiveViewStates(),(function(n){b.deactivate(R.get(n.id))})),m.dispatch(r.RESET_VIEW_STATES),f.emitActivateEvent()):y.debug("Not activating.")},t.sendEvents=function(){f.emitSendEvents()},t.holdEvents=function(){f.emitHoldEvents()}},8698:function(){},2603:function(n,t,e){var i=e(9524),r=e(4623).U,o=t.ActivationCodeError=r("ActivationCodeError"),a=t.ProjectJSError=r("ProjectJSError"),u=e(7622),s=e(7913),c=e(7222),f=e(6704),l=e(5515),d=e(5315),v=e(4044),h=e(7649),p=e(343),g=e(1731),m=e(8721),_=e(4011),w=e(2883),y=e(2497),E=e(9422),b=e(7973),I=e(3162),A=e(5404),T=e(9722),S=e(6735).mM,R=e(8507),k=e(2409),N=e(1476),D=e(7273),C=e(94),O=e(5575).Promise,x=e(5740),P=e(3180),M=e(1281),L=e(855),V=e(5968),F=e(3028),U=e(9031),z=(g=e(1731)).get("stores/session"),B=g.get("stores/audience_data"),G=g.get("stores/action_data"),j=g.get("stores/cleanup"),q=g.get("stores/directive"),H=g.get("stores/global"),Y=g.get("stores/group_data"),K=g.get("stores/layer_data"),$=g.get("stores/layer"),W=g.get("stores/pending_events"),X=g.get("stores/plugins"),J=g.get("stores/rum"),Q=g.get("stores/visitor"),Z=g.get("stores/view_data"),nn=g.get("stores/view"),tn=g.get("stores/visitor_id"),en=g.get("stores/visitor_bucketing"),rn=g.get("stores/xdomain"),on=e(2372),an=e(1783),un=e(6980),sn=t;function cn(){var n=null;i.isNumber(n)&&0===K.getCount()?(R.log("Activating after delay of",n,"ms because no Experiments are running"),I.dispatch(s.SET_RUM_DATA,{data:{activateDfd:!0}}),U.setTimeout(f.emitActivateEvent,n)):f.emitActivateEvent()}function fn(n){an.handleError(n.data.error,n.data.metadata)}function ln(n,t){I.dispatch(s.SET_RUM_DATA,{data:{extras:{xdAttempt:n,xdError:t?t.toString():undefined}}})}function dn(n,t,e){n=n||[];var r=X.getAllPlugins(w.PluginTypes.visitorProfileProviders),o=H.getGlobalHoldbackThreshold(),a=Q.getVisitorProfile();F.populateLazyVisitorData(r,a);var u=tn.getBucketingId();if(!u)throw new Error("bucketingId not set");var s,c=Q.getVisitorProfile();t&&(s=en.getVariationIdMap()[t.id]);var f={bucketingId:u,visitorProfile:c,audiences:n,globalHoldback:o,preferredVariationMap:s,layer:t};return t&&e&&p.isPageIdRelevant(t)?i.map(e,(function(n){return p.createTicket(i.extend({},f,{pageId:n}))})):[p.createTicket(f)]}function vn(n,e,r,o){try{var a=function(n){return{bucketingId:tn.getBucketingId(),preferredLayerId:en.getPreferredLayerMap()[n.id]}}(o),u=p.decideGroup(o,a);if(u.reason)return R.debug("Not activating Group",A.description(o),"; reason:",u.reason),J.getSampleRum()&&I.dispatch(s.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),O.resolve();var c=K.get(u.layerId);if(!c)return R.debug("Visitor was bucketed into a Campaign ("+u.layerId+") which is not in this snippet"),O.resolve();var f=i.filter(c.pageIds,i.partial(i.includes,r));return i.isEmpty(f)?(R.debug("Not activating Group",A.description(o),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),O.resolve()):(J.getSampleRum()&&I.dispatch(s.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),t.decideAndExecuteLayerASAP(n,e,f,c))}catch(l){return R.error("Error getting decision for Group",A.description(o),"; ",l),O.reject(l)}}function hn(n,t){var e={};return i.each(n,(function(n){i.isArray(n)?i.extend(e,hn(n,t)):i.isObject(n)&&t[n.type]&&(e[n.type]=!0)})),e}function pn(n){var t=[];return i.each(n,(function(n){t.push(n.name,n)})),t}function gn(n){var t=j.getCleanupFns(n);if(t.length>0){for(;t.length>0;)t.shift()();I.dispatch(s.CLEAR_CLEANUP_FN,{lifecycle:n})}}t.initialize=function(n){return this.initGlobalStore(n.clientData),this.initializePlugins(n.plugins)},t.initGlobalStore=function(n){n=n;v.normalizeClientData(n),y.on({filter:{type:"error"},handler:fn}),I.dispatch(s.DATA_LOADED,{data:n}),R.log("Initialized with DATA:",n)},t.initializePlugins=function(n){if(i.isArray(window.optimizely)&&(window.optimizely=i.filter(window.optimizely,(function(n){var t=!0;return!on.push(n,t)}))),m.setOptOut(q.shouldOptOut()),!q.isDisabled()&&!q.shouldOptOut()){un.queueBeacons(),_.isReady()?I.dispatch(s.SET_DOMCONTENTLOADED):_.addReadyHandler((function(){I.dispatch(s.SET_DOMCONTENTLOADED)})),N.time("projectJS");var e=H.getProjectJS();if(i.isFunction(e))try{b.apply(e)}catch(v){R.error("Error while executing projectJS: ",v),d.emitError(new a(v))}N.timeEnd("projectJS"),i.each(n||[],(function(n){try{n(D)}catch(v){d.emitInternalError(v)}})),i.each(H.getPlugins()||[],(function(n){try{b.apply(n,[D])}catch(v){d.emitError(v)}})),P.load();var r=y.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Q.observe(F.persistVisitorProfile),$.observe(F.persistLayerStates),z.observe(F.persistSessionState),W.observe(k.persistPendingEvents),en.observe(F.persistVisitorBucketingStore),y.off(r)}});y.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),y.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var o=k.getPendingEvents();if(o&&(I.dispatch(s.LOAD_PENDING_EVENTS,{events:o}),k.retryPendingEvents(o)),y.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),f.emitInitializedEvent(),!q.shouldActivate())return O.resolve();var u=[];if(rn.isDisabled())cn();else{var c=t.initializeXDomainStorage();if(u.push(c),Boolean(rn.getCanonicalOrigins())){var l=M.makeTimeoutPromise(1e3);O.race([c,l])["catch"]((function(n){R.error("Failed to initialize xDomain storage: ",n)})).then(cn)["catch"](an.handleError)}else cn()}return O.all(u)}R.log("Controller / Is disabled")},t.activate=function(){try{var n=[];R.log("Activated client"),gn(w.Lifecycle.preActivate);var t=h.now();I.dispatch(s.ACTIVATE,{activationId:String(t),activationTimestamp:t});var e=Z.getAll();V.registerViews(e),F.setId(F.getOrGenerateId()),n.push(c.trackPostRedirectDecisionEvent()),I.dispatch(s.MERGE_VARIATION_ID_MAP,{variationIdMap:F.getVariationIdMap()}),I.dispatch(s.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:F.getPreferredLayerMap()}),gn(w.Lifecycle.postVisitorProfileLoad),n.push((v=X.getAllPlugins(w.PluginTypes.visitorProfileProviders),g=Q.getVisitorProfile(),F.populateEagerVisitorData(v,g)).then((function(){R.log("Populated visitor profile")})));var r=dn(),o=p.decideGlobal(r);R.log("Made global decision",r,"->",o),I.dispatch(s.RECORD_GLOBAL_DECISION,o);var a=c.trackClientActivation();a?R.log("Tracked activation event",a):R.log("Not tracking activation event");var u=sn.setUpViewActivation(e),l=[];return i.each(u,(function(n){l=l.concat(V.activateMultiple([n]))})),gn(w.Lifecycle.postViewsActivated),gn(w.Lifecycle.postActivate),f.emitActivatedEvent(),O.all(n).then((function(){y.emit({type:E.TYPES.LIFECYCLE,name:"activateDeferredDone"}),R.log("All immediate effects of activation resolved")}),d.emitError)}catch(m){return d.emitError(m),O.reject(m)}var v,g},sn.setUpViewActivation=function(n){var t=[];return i.each(n,(function(n){i.isBoolean(nn.getViewState(n.id).isActive)&&V.isActivationTypeImmediate(n.activationType)?R.debug("Skipping page: already evaluated, presumably at the edge",V.description(n)):V.shouldTriggerImmediately(n.activationType)?t.push(n):n.activationType===w.ViewActivationTypes.callback?(R.debug("Setting up conditional activation for Page",V.description(n)),sn.activateViewOnCallback(n)):n.activationType===w.ViewActivationTypes.polling?(R.debug("Setting up polling activation for Page",V.description(n)),C.pollFor(i.partial(b.apply,n.activationCode),null,i.partial(L.isTimedOut,h.now())).then((function(){V.activateMultiple([n])}))["catch"]((function(t){R.warn("Failed to activate view ",n,t)}))):n.activationType!==w.ViewActivationTypes.manual&&d.emitError(new Error("Unknown view activationType: "+n.activationType))})),t},sn.activateViewOnCallback=function(n){var t={pageId:n.id};Object.defineProperty(t,"isActive",{get:function(){return nn.isViewActive(n.id)}});try{b.apply(n.activationCode,[function(t){var e=i.extend({},t,{pageName:n.apiName,type:"page"});on.push(e)},t])}catch(r){var e=new o("("+r.toString()+") in activationCode for "+V.description(n));d.emitError(e,{originalError:r,userError:!0})}},t.onViewsActivated=function(n){var e,r=n.data.views,o=i.map(r,"id");try{if(!tn.getBucketingId())throw new Error("View activated with no visitorId set");var a=function(n){var e=K.getAllByPageIds(n),r=q.getForceVariationIds(),o=q.getForceAudienceIds(),a=!i.isEmpty(r);a&&R.log("Force variations are in use. Disabling mutual exclusivity.");var u=a?{individual:e}:i.reduce(e,(function(n,t){return t.groupId?n.groups[t.groupId]||(n.groups[t.groupId]=Y.get(t.groupId)):n.individual.push(t),n}),{groups:{},individual:[]});R.log("Deciding Campaigns/Experiments for Page(s)",n);var s=i.map(u.groups,A.description).join(", ");R.log("Groups:",s);var c=i.map(u.individual,T.description).join(", ");R.log("Campaigns/Experiments not in Groups (by Campaign id):",c);var f=i.map(u.groups,i.partial(vn,r,o,n))||[],l=i.map(u.individual,(function(e){var a=i.filter(e.pageIds,i.partial(i.includes,n));return t.decideAndExecuteLayerASAP(r,o,a,e)})),d=f.concat(l);return O.all(d).then((function(t){var e=i.filter(t,(function(n){return!!n}));return R.log("All Campaigns/Experiments for Page(s) (by Campaign id)",n,"resolved:",i.map(e,T.description).join(", ")),e}))}(o)["catch"](d.emitError);return e=O.all(i.map(r,(function(n){var t=function(){V.parseViewTags(n);var t=c.trackViewActivation(n);t?R.log("Tracked activation for Page",V.description(n),t):R.log("Not Tracking activation for Page",V.description(n))};return _.isReady()?O.resolve(t()):C.pollFor(_.isReady,1e3).then(t)}))),O.all([a,e])}catch(u){d.emitError(u)}},t.onPageDeactivated=function(n){var t=n.data.page,e=G.getAllActionIdsByPageId(t.id);i.each(e,(function(n){var e=G.getActionState(n);e&&(i.each(e,(function(n,e){if(n.cancel)try{n.cancel(),R.debug("Controller / Canceled change",e,"observation due to deactivation of page:",t)}catch(i){R.error("Controller / Error canceling change",e,"observation upon deactivation of page.",i)}if(t.undoOnDeactivation&&n.undo)try{n.undo(),R.debug("Controller / Undid change",e,"due to deactivation of page:",t)}catch(i){R.error("Controller / Error undoing change upon deactivation of page.",i)}})),I.dispatch(s.REMOVE_ACTION_STATE,{actionId:n}),R.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,n))}))},t.initializeApi=function(){var n={push:on.push};n.get=on.get;var t=window.optimizely;i.isArray(t)&&i.each(t,(function(t){n.push(t)})),n.data={note:"Obsolete, use optimizely.get('data') instead"},n.state={},window.optimizely=n},t.persistItemsWithId=function(n){return i.each(n,(function(n,t){F.checkKeyForVisitorId(t)&&S.setItem(t,n)})),n},t.initializeXDomainStorage=function(){var n=e(422),r=!!F.getCurrentId(),o=!!r&&F.hasSomeData();r?o?R.log("xd / Existing visitor; has data on this origin"):R.log("xd / Existing visitor; new to this origin"):R.log("xd / New visitor");var a=H.getAccountId(),u="https://a13270690418.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+a+"."),c="/client_storage/a"+a+".html";n.subscribe((function(n,t){F.checkKeyForVisitorId(n)&&S.setItem(n,t)}));var l=n.fetchAll().then((function(t){if(!tn.getVisitorIdLocator()){var e=rn.getCanonicalOrigins();if(e){var i=n.getXDomainUserId(t,e);i&&(R.log("Syncing cross-origin visitor randomId:",i),F.maybePersistVisitorId({randomId:i}))}}return F.deleteOldForeignData(),t})).then(t.persistItemsWithId).then((function(n){if(F.loadForeignData(),r&&!o){var t=!i.isEmpty(n);R.debug("xd / Loaded foreign data? ",t),ln(t)}R.log("Loaded visitor data from foreign origins"),f.emitOriginsSyncedEvent()}),(function(n){throw r&&!o&&(R.debug("xd / Failed to load foreign data:",n),ln(!1,n)),n}));return O.all([n.load(u,c)["catch"]((function(n){throw R.debug("xd / Failed to load iframe:",n),r&&!o&&ln(!1,n),n})),l["catch"]((function(n){R.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",n.message),R.debug("xd / Enqueuing sync to happen after visitorId set."),I.dispatch(s.ADD_CLEANUP_FN,{lifecycle:w.Lifecycle.postVisitorProfileLoad,cleanupFn:f.emitOriginsSyncedEvent})}))])},t.decideAndExecuteLayerASAP=function(n,e,r,o){return new O((function(a,d){try{!function(n,t,e,r,o){if(t.length||e.length)return void o(dn([],undefined,r));var a=T.relatedAudienceIds(n),u=i.reduce(a,(function(n,t){var e=B.get(t);return e&&n.push(e),n}),[]),c=X.getAllPlugins(w.PluginTypes.audienceMatchers);if(J.getSampleRum()){var f={};if(i.each(u,(function(n){i.extend(f,hn(n.conditions,c))})),!i.isEmpty(f)){var d=i.keys(f);I.dispatch(s.RECORD_AUDIENCE_USAGE,{audienceTypes:d,layerId:n.id})}}!function(n,t,e,r){var o=i.reduce(n,(function(n,e){return i.extend(n,l.requiredAudienceFieldsForConditions(e.conditions,t))}),{}),a=i.reduce(o,(function(n,t){if(i.isUndefined(F.getAttribute(t))){var e=F.getPendingAttributeValue(t);i.isUndefined(e)||n.push(e)}return n}),[]);if(0===a.length)return r();var u=[].concat(n),s=x.firstToResolve(i.map(a,(function(n){return O.resolve(n).then((function(){var n=Q.getVisitorProfile();if(u=i.filter(u,(function(e){return i.isUndefined(l.isInAudience(n,e,t))})),!i.isEmpty(u))throw new Error("At least one audience is still pending")}))})));O.race([s,new O((function(n,t){U.setTimeout(t,e)}))]).then((function(){R.log("Activating Campaign after pending Audiences resolved",n),r()}),(function(){R.log("Activating Campaign after timeout on Audiences",n),r()}))}(u,c,T.getActivationTimeout(n),(function(){var t=dn(u,n,r);i.map(t,(function(t){!function(n,t,e){var r=i.map(n.audienceIds,i.bind(B.get,B)),o=i.filter(t,(function(t){return!i.includes(n.audienceIds,t.id)}));R.log("When deciding Campaign",T.description(e),"visitor is in audiences:",pn(r),"and not in audiences:",pn(o))}(t,u,n)})),o(t)}))}(o,n,e,r,(function(l){i.each(l,(function(a){var l=a.pageId?[a.pageId]:r;R.debug("Deciding layer: ",o,"with decisionTicket: ",a,"and actionViewIds: ",l),function(n,e,r,o,a){var l=T.description(n);R.log("Activating Campaign",l,"on Page(s)",o),r.length&&(R.log("Applying force audienceIds:",r,"to Campaign",l),(a=i.cloneDeep(a)).audienceIds=r);var d=t.decideLayer(n,a,e),v=!(!e.length&&!r.length),h=t.getActionsForDecision(n,d,v),g=function(n,t){return i.filter(n,(function(n){return i.isUndefined(n.pageId)||i.includes(t,n.pageId)}))}(h.actions,o);h.maybeExecute&&function(n,t,e,r){var o=T.description(t);R.log("Preparing actions",n,"for Campaign",o,"on Page(s)",r),i.forEach(n,u.prepareAction)}(g,n,0,o);if(i.forEach(o,(function(){c.trackDecisionEvent(d,a)})),f.emitLayerDecided({layer:n,decisionTicket:a,decision:d}),d.error)throw d.error;if(J.getSampleRum()){I.dispatch(s.RECORD_LAYER_POLICY_USAGE,{policy:n.policy,layerId:n.id});var m=function(n){var t={};return i.each(n,(function(n){i.each(n.changeSet,(function(n){t[n.type]||(t[n.type]=!0)}))})),t}(h.actions);I.dispatch(s.RECORD_CHANGE_TYPE_USAGE,{changeTypes:i.keys(m),layerId:n.id}),i.isEmpty(n.integrationSettings)||I.dispatch(s.RECORD_INTEGRATION_USAGE,{integrations:T.getIntegrationTypes(n),layerId:n.id})}if(!p.isInCohort(d))return void R.log("Not activating Campaign: "+T.description(n)+"; not in the cohort because:",d.reason);h.maybeExecute&&function(n,t,e,r){var o=T.description(t);R.log("Executing actions",n,"for Campaign",o,"on Page(s)",r),O.all(i.map(n,(function(n){return u.executePreparedAction(n).then(i.partial(f.emitActionAppliedEvent,n))}))).then((function(){R.log("All page actions for",e,"applied:",n),f.emitActionsForDecisionAppliedEvent(e,n)}))["catch"]((function(n){R.warn("Error evaluating page actions for decision",e,"because:",n)}))}(g,n,d,o)}(o,n,e,l,a)})),a(o)}))}catch(v){R.error("Error getting decision for Campaign: "+T.description(o),v),d(v)}}))},t.decideLayer=function(n,t,e){var i;var r=T.description(n);i=e.length?p.getDummyLayerDecision(n,e):p.decideLayer(n,t);R.log("Recording decision for Campaign",r,t,"->",i),T.recordLayerDecision(n.id,t,i),i.variationId&&i.experimentId&&F.updateVariationIdMap(n.id,i.experimentId,i.variationId),n.groupId&&F.updatePreferredLayerMap(n.groupId,n.id);return i},t.getActionsForDecision=function(n,t,e){var i=T.description(n),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat(G.getLayerActions(t.layerId)||[],G.getExperimentActions(t.experimentId)||[],G.getExperimentVariationActions(t.experimentId,t.variationId)||[]),!e&&H.isGlobalHoldback())return R.log(r,i,"(visitor is in global holdback)"),o;if(t.isLayerHoldback)return R.log(r,i,"(visitor is in layer holdback)"),o;if(!t.experimentId||!t.variationId)return R.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,R.log("Got Actions for Campaign:",i,o.actions),o}},9856:function(n,t,e){var i=e(8564).Promise,r=e(7649),o=e(1731).get("stores/plugins"),a=e(2883),u=e(8507);t.create=function(n,t,e){var s={identifier:n.id,action:t,startTime:e||r.now()};try{var c=o.getPlugin(a.PluginTypes.changeAppliers,n.type);if(!c)throw new Error("Unrecognized change type "+n.type);return new c(n,s)}catch(f){return u.error("Change applier was never properly constructed:",f),{apply:function(){return i.reject(f)}}}}},3234:function(n){n.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},6407:function(n,t,e){var i=e(9524),r=e(3234).CHANGE_DATA_KEY;function o(n,t){return[n,t].join("_")}t.getData=function(n,t,e){var i=o(t,e);return n[r]&&n[r][i]?n[r][i]:null},t.hasData=function(n){return Boolean(n&&n[r]&&!i.isEmpty(n[r]))},t.removeData=function(n,t,e){n[r]&&delete n[r][o(t,e)]},t.setData=function(n,t,e,i){if("object"!=typeof i)throw new Error("setData expects an object");n[r]||(n[r]={}),n[r][o(t,e)]=i}},2555:function(n,t,e){var i=e(560);n.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},7622:function(n,t,e){var i=e(9524),r=e(7913),o=e(5315),a=e(3944),u=e(4623).U,s=e(7649),c=e(1731),f=e(3162),l=e(8507),d=e(5575).Promise,v=e(5541),h=c.get("stores/global"),p=c.get("stores/action_data"),g=c.get("stores/change_data"),m=c.get("stores/session"),_=e(9856);e(855).initialize();var w=u("ActionError");function y(n,t,e){if(p.getActionState(t.id)){var o=p.getChangeApplier(n.id,t.id);if(i.isUndefined(o)){var a={changeId:n.id,actionId:t.id,changeApplier:_.create(n,t,e)};f.dispatch(r.SET_CHANGE_APPLIER,a)}else l.warn("Action / Attempted to prepare a change which is already being applied: ",n)}else l.warn("Action / Attempted to prepare change for inactive action: ",t)}function E(n,t,e,r){if(!i.includes(r,t)){if(!n[t]){var u=g.getChange(t);if(!u){var c="Change with id "+t+" is absent";return r.length&&(c+=" but listed as a dependency for "+r[r.length-1]),void l.warn(c)}n[t]=new d((function(c){var f=i.map(u.dependencies||[],(function(i){return E(n,i,e,r.concat([t]))}));if(u.src){var h="change_"+u.src,m=a.makeAsyncRequest(h,(function(){return v.addScriptAsync("https://cdn.optimizely.com/public/13270690418/data"+u.src,(function(){a.resolveRequest(h)}))})).then((function(){var n=g.getChange(u.id);n||o.emitError(new w("Failed to load async change from src: "+u.src)),y(n,e,s.now())}));f.push(m)}d.all(f).then((function(){var n=s.now(),i=p.getChangeApplier(t,e.id);return i?(l.debug("Action / Applying change:",u),i.apply().then((function(t){t?l.log(t):l.debug("Action / Applied change for the first time in "+(s.now()-n)+"ms:",u),c()}))):(l.debug("Action / Not applying change ",t," - No changeApplier found."),void c())}))["catch"]((function(n){l.error("Action / Failed to apply change:",u,n),c()}))}))}return n[t]}l.error("Change with id "+t+" has circular dependencies: "+r.concat(t))}t.prepareAction=function(n){l.debug("Action / Preparing:",n),f.dispatch(r.ACTION_EXECUTED,{actionId:n.id,sessionId:m.getSessionId(),layerId:n.layerId,pageId:n.pageId,timestamp:s.now(),activationId:h.getActivationId()});var t=s.now();i.forEach(n.changeSet,(function(e){var o=i.isObject(e)?e.id:e,a=g.getChange(o);a||(f.dispatch(r.ADD_CHANGE,e),a=g.getChange(e.id)),a.src||y(a,n,t)}))},t.executePreparedAction=function(n){l.debug("Action / Executing:",n);var t={},e=i.map(n.changeSet,(function(e){var r=i.isObject(e)?e.id:e;return E(t,r,n,[])}));return d.all(e).then((function(){l.debug("changes for action id="+n.id+" applied")}))}},855:function(n,t,e){var i=e(3234),r=e(1731).get("stores/directive");function o(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}t.domReadyTime=null,t.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},t.isTimedOut=function(n){var e=Date.now();if(!t.domReadyTime||!n)return!1;var o=Math.max(n,t.domReadyTime);return r.isEditor()&&(o=t.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},7222:function(n,t,e){var i=e(9524),r=e(7913),o=e(5315),a=e(3345),u=e(7649),s=e(4725),c=e(1731),f=e(4011),l=e(2883),d=e(2517),v=e(2497),h=e(9422),p=e(677),g=e(3162),m=e(9722),_=e(8507),w=(e(1476),e(5575).Promise),y=e(898),E=e(3180),b=e(1281),I=e(744),A=e(2827),T=c.get("stores/client_metadata"),S=c.get("stores/global"),R=c.get("stores/session"),k=c.get("stores/view"),N=c.get("stores/plugins"),D=c.get("stores/layer"),C=c.get("stores/layer_data"),O=c.get("stores/observed_redirect"),x=c.get("stores/pending_redirect"),P=c.get("stores/visitor"),M=c.get("stores/directive"),L=c.get("stores/event_data"),V=c.get("stores/visitor_id");function F(n,t){return i.extend({},n,{isLayerHoldback:t,isGlobalHoldback:!1,clientName:i.isNull(n.clientName)?s.NAME:n.clientName,integrationStringVersion:i.isNull(n.integrationStringVersion)?1:n.integrationStringVersion,anonymizeIP:i.isNull(S.getAnonymizeIP())?undefined:S.getAnonymizeIP(),activationId:S.getActivationId(),decisionTicketAudienceIds:[],sessionId:R.getSessionId(),activeViewStates:[],userFeatures:B(P.getVisitorProfile()),layerStates:D.getLayerStatesForAnalytics()})}function U(n){var t=y.getReferrer()||f.getReferrer();return{eventId:A.generate(),timestamp:u.now(),revision:S.getRevision(),clientName:T.getClientName(),clientVersion:T.getClientVersion(),projectId:S.getProjectId(),accountId:S.getAccountId(),activationId:S.getActivationId(),sessionId:R.getSessionId(),isGlobalHoldback:S.isGlobalHoldback(),namespace:S.getNamespace(),referrer:t,visitorId:V.getRandomId(),activeViewStates:n.activeViewStates,layerStates:n.layerStates,userFeatures:B(n.visitorProfile)}}function z(n){var t,e;return n.pageId?(t=n.pageId,(e=k.getViewState(t))&&e.isActive?e.metadata:{}):{}}function B(n){var t=N.getAllPlugins(l.PluginTypes.visitorProfileProviders),e=i.filter(t,{shouldTrack:!0}),r={id:null,type:null,name:"",value:null,shouldIndex:!0};return i.reduce(e,(function(t,e){try{var o=e.provides,a=n[o],u=[];if(!i.isUndefined(a)){i.isObject(a)?u=i.map(a,(function(n,t){var e=i.isObject(n)?n:{value:n};return i.extend({},{type:o,name:t},e)})):u.push({type:o,value:a});var s=i(u).map((function(n){return i.pick(i.extend({},r,n),i.keys(r))})).filter((function(n){return!!n.value})).value();0,t=t.concat(s)}}catch(c){_.warn("Error evaluating userFeature against visitorProfile:",c)}return t}),[])}function G(n,t,e){var r=function(n,t){0;var e=[];return i.each(N.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(i,r){if(i[n]&&(!t||!i[t]))try{e.push({name:r,hookFn:c.evaluate(i[n])})}catch(o){_.error(o)}})),e}(n,e);_.debug("Found "+r.length+" analytics integrations defining a "+n+" hook"),_.debug("Calling each with data: ",t),i.each(r,(function(n){try{_.debug("Calling plugin: "+n.name),n.hookFn(t),_.debug("Called plugin: "+n.name)}catch(e){_.error(e)}}))}function j(n,t,e){var r=function(n,t){0;var e=[];return i.each(N.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(r,o){i.includes(t,r[n])&&e.push({name:o,hookFn:r.trackLayerDecision})})),e}(n,t);_.debug("Found "+r.length+" analytics integrations  defining a trackLayerDecision "+n+" timing of "+t.join("|")),_.debug("Calling each with data: ",e),i.each(r,(function(n){try{_.debug("Calling plugin: "+n.name),n.hookFn(e),_.debug("Called plugin: "+n.name)}catch(t){_.error(t)}}))}t.trackClientActivation=function(){if(M.shouldSendTrackingData()){var n,t=(n=U({activeViewStates:[],visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),i.extend(n,{eventTags:{}}));return G("onClientActivation",t),t}},t.trackCustomEvent=function(n,t,e){t=t||{},e||(e=L.getByApiName(n));var r=function(n,t,e){var r=U({activeViewStates:k.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),o=e&&e.pageId?z(e):k.getActiveViewTags(),a=i.extend({},o,t),u=e&&e.category?e.category:d.OTHER;return i.extend(r,{eventEntityId:e&&e.id,eventApiName:n,eventCategory:u,eventTags:a})}(n,t,e);var u={name:n,type:p.CUSTOM,category:r.eventCategory,tags:i.omit(r.eventTags,"revenue")};if(i.isUndefined(t.revenue)||(u.revenue=t.revenue),o.emitAnalyticsEvent({name:e?e.name||e.apiName:n,apiName:e?e.apiName:undefined,type:p.CUSTOM,tags:i.omit(r.eventTags,"revenue"),category:r.eventCategory,metrics:u.revenue?{revenue:u.revenue}:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent(u),G("onCustomEvent",r),r},t.trackDecisionEvent=function(n,t,e){e||(e=C.get(n.layerId));var o=A.generate();g.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:n.layerId,pageId:t.pageId,decisionId:o});var a=function(n,t,e,r){var o=null,a=null,s=null;if(t.experimentId){var c=i.find(r.experiments,{id:t.experimentId});if(c&&(o=c.name||null,s=c.integrationSettings,t.variationId)){var l=i.find(c.variations,{id:t.variationId});l&&(a=l.name||null)}}var d=y.getReferrer()||f.getReferrer();0;return{sessionId:R.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:V.getRandomId(),decisionId:n,activationId:S.getActivationId(),namespace:S.getNamespace(),timestamp:u.now(),pageId:e.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:o,layerId:t.layerId,layerName:r.name,layerPolicy:r.policy,accountId:S.getAccountId(),projectId:S.getProjectId(),revision:String(S.getRevision()),clientName:T.getClientName(),clientVersion:T.getClientVersion(),referrer:d,integrationStringVersion:r.integrationStringVersion||1,integrationSettings:i.extend({},r.integrationSettings,s)}}(o,n,t,e);var s=x.isExpectingRedirect(),c=x.getLayerId(),l=m.description(e);if(s&&c===e.id&&(E.persist(a,"COOKIE"),_.log("Relaying decision for redirect Campaign",l)),M.shouldSendTrackingData()){var d=F(a,n.isLayerHoldback);if(s&&c===e.id){var v=I.TrackLayerDecisionTimingFlags.preRedirectPolicy;d.timing=v,j(v,[I.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],d),_.log("Called trackLayerDecision for redirect Campaign",l,d)}else{v=I.TrackLayerDecisionTimingFlags.nonRedirectPolicy;d.timing=v,j(v,[I.NonRedirectPolicies.TRACK_IMMEDIATELY],d),_.log("Called trackLayerDecision for non-redirect Campaign",l,d)}}else _.log("Analytics / Not tracking decision for Campaign",m.description(e))},t.trackPostRedirectDecisionEvent=function(){if(!M.shouldSendTrackingData())return w.resolve();if(O.hasTracked())return w.resolve();var n=O.get();if(!n)return w.resolve();var t=F(n,!1),e=I.TrackLayerDecisionTimingFlags.postRedirectPolicy;t.timing=e,j(e,[I.PostRedirectPolicies.TRACK_IMMEDIATELY],t);var i=new w((function(n){var t=v.on({filter:{type:h.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){n(),v.off(t)}})})),o=b.makeTimeoutPromise(1e3);return w.race([i,o]).then((function(){_.log("Calling trackers after successful sync")}),(function(n){_.warn("Calling trackers after failed sync:",n)})).then((function(){(t=F(n,!1)).timing=I.TrackLayerDecisionTimingFlags.postRedirectPolicy,j(I.TrackLayerDecisionTimingFlags.postRedirectPolicy,[I.PostRedirectPolicies.TRACK_AFTER_SYNC],t),g.dispatch(r.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(n){_.error("Error when calling trackers after sync:",n)}))},t.trackClickEvent=function(n){var t=function(n){var t=U({activeViewStates:k.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),e=n.config&&n.config.selector?n.config.selector:n.eventFilter.selector,r=n.apiName,o=n.category||d.OTHER,a=n.id,u=z(n);return i.extend(t,{eventApiName:r,eventCategory:o,eventEntityId:a,eventTags:u,pageId:n.pageId,selector:e})}(n);var e={name:n.apiName,type:n.eventType,category:t.eventCategory,tags:t.eventTags};if(o.emitAnalyticsEvent({name:n.name||n.apiName,apiName:n?n.apiName:undefined,type:n.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent(e),G("onClickEvent",t),t},t.trackViewActivation=function(n,t){if(t||(t=k.getViewState(n.id)),t.isActive){var e=function(n,t){var e=U({activeViewStates:k.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()});return i.extend(e,{pageId:n.id,pageApiName:n.apiName,viewCategory:n.category,eventTags:t.metadata})}(n,t);if(o.emitAnalyticsEvent({name:n.name||e.pageApiName,apiName:e.pageApiName,type:p.PAGEVIEW,category:e.viewCategory,tags:e.eventTags,metrics:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent({name:e.pageApiName,type:p.PAGEVIEW,category:e.viewCategory,tags:e.eventTags}),g.dispatch(r.TRACK_VIEW_ACTIVATED_EVENT,{pageId:n.id,eventData:e}),G("onPageActivated",e),e}else _.debug("Inactive view passed to `trackViewActivation`")}},3180:function(n,t,e){var i=e(9524),r=e(7913),o=e(3109),a=e(5315),u=e(1731),s=e(2883),c=e(3162),f=e(8507),l=e(744),d=u.get("stores/plugins"),v=".",h=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(n){return i.map(n,encodeURIComponent).join(",")},encodeValueString:i.identity,decodeValueString:i.identity,valueFromValueString:function(n){return i.map(n.split(","),o.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(n,t){var e=null;if(n){var r=d.getPlugin(s.PluginTypes.analyticsTrackers,t);if(r&&i.isFunction(r.serializeSettings))try{e=r.serializeSettings(n)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",t,o)}}return e},valueFromValueString:function(n,t){var e=null,r=d.getPlugin(s.PluginTypes.analyticsTrackers,t);if(r&&i.isFunction(r.deserializeSettings))try{e=r.deserializeSettings(n)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",t,o)}return e},isNullable:!0}],p={},g={};i.forEach(h,(function(n){p[n.name]=n,g[n.relayName]=n})),t.persist=function(n,t){t===l.RedirectRelayMedia.COOKIE?function(n){try{var t=function(n){var t=[],e=i.reduce(n,(function(n,e,r){var o=p[r];return o?(o.isMulti?i.forEach(e,(function(t,e){t=o.valueToValueString?o.valueToValueString(t,e):String(t),i.isNull(t)||(t=(o.encodeValueString||encodeURIComponent)(t),n.push(encodeURIComponent(o.relayName+v+e)+"="+t))})):i.isNull(e)||(e=(o.valueToValueString||String)(e),e=(o.encodeValueString||encodeURIComponent)(e),n.push(o.relayName+"="+e)),n):(t.push(r),n)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields:",t);return e.sort(),e.join("&")}(n)}catch(e){return f.error("Relay / Error computing redirect relay cookie: ",e),void a.emitError(e)}f.debug("Relay / Setting redirect relay cookie:",t);try{o.set(s.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(e){f.error("Relay / Failed to set redirect relay cookie",e),a.emitError(e)}}(n):f.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(n){if(n||(n=function(){var n=o.get(s.COOKIES.REDIRECT,!1);if(n)return f.log("Relay / Found redirect cookie:",n),n}()),n){var t=function(n){var t={},e=n.split("&");return i.forEach(e,(function(n){var e=n.split("=");if(2===e.length){var r=o.safeDecodeURIComponent(e[0]),u=g[r];if(u||(u=i.find(h,(function(n){return n.isMulti&&0===r.indexOf(n.relayName+v)})))){var s=e[1];try{if(u.isMulti){t[u.name]=t[u.name]||{};var c=r.substring(u.relayName.length+v.length);s=(u.decodeValueString||o.safeDecodeURIComponent)(s),s=(u.valueFromValueString||i.identity)(s,c),t[u.name][c]=s}else s=(u.decodeValueString||o.safeDecodeURIComponent)(s),s=(u.valueFromValueString||i.identity)(s),t[u.name]=s}catch(l){return f.warn("Relay / Skipping segment due to decode or parse error:",n,l),void a.emitError(l)}}else f.warn("Relay / Skipping segment with unknown field identifier:",n,r)}else f.warn("Relay / Skipping invalid segment:",n)})),t}(n);if(t){var e=[];if(i.forEach(h,(function(n){(i.isNull(t[n.name])||i.isUndefined(t[n.name]))&&(n.isNullable?t[n.name]=null:(delete t[n.name],e.push(n.name)))})),!e.length)return c.dispatch(r.LOAD_REDIRECT_DATA,t),c.dispatch(r.ADD_CLEANUP_FN,{lifecycle:s.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var n,e;e=(n=t).pageId||undefined,c.dispatch(r.RECORD_LAYER_DECISION,{layerId:n.layerId,decision:{layerId:n.layerId,experimentId:n.experimentId,variationId:n.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:n.decisionTicketAudienceIds,bucketingId:n.visitorId,globalHoldback:0,preferredVariationMap:undefined,pageId:e,activationId:n.activationId},sessionId:n.sessionId,activationId:n.activationId,timestamp:n.timestamp,revision:n.revision,namespace:n.namespace,pageId:e}),c.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:n.layerId,pageId:e,decisionId:n.decisionId}),c.dispatch(r.ACTION_EXECUTED,{sessionId:n.sessionId,layerId:n.layerId,pageId:n.pageId,timestamp:n.timestamp,activationId:n.activationId})}}),t;f.error("Relay / Observed redirect data with missing fields:",e)}}}},5315:function(n,t,e){var i=e(2497);t.emitError=function(n,t,e){i.emit({type:"error",name:n.name||"Error",data:{error:n,metadata:t}},e||!1,!0)},t.emitInternalError=function(n,e){t.emitError(n,e,!0)},t.emitAnalyticsEvent=function(n,t){var e={type:"analytics",name:"trackEvent",data:n};i.emit(e,t)}},5515:function(n,t,e){var i=e(9524),r=e(1823),o=e(9299),a=e(8507),u=e(3028);function s(n,t){var e="function"==typeof n?n(t):n;return i.isString(e)&&(e=[e]),i.isArray(e)?e:(a.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function c(n){return n.name?n.name+" ("+n.id+")":n.id}t.isInAudience=function(n,t,e){var u,f=function(n,t){return function(e){var r=e.type,u=t[r];if(!u)throw new Error("Audience / No matcher found for type="+r);if(u.fieldsNeeded)for(var c=s(u.fieldsNeeded,e),f=0;f<c.length;f++){var l=c[f],d=o.getFieldValue(n,l);if(i.isUndefined(d))return void a.debug("Audience / Required field",l,"for type",r,"has no value")}a.debug("Matching condition:",e,"to values:",n);var v=u.match(n,e);if(!i.isUndefined(v))return!!v}}(n,e);a.groupCollapsed("Checking audience",t.name,t.id,t),a.debug("Visitor Profile:",n);try{var l=r.evaluate(t.conditions,f)}catch(d){u=d,l=!1}return a.groupEnd(),u&&a.error("Audience / Error evaluating audience",c(t),":",u),a.log("Is "+(l?"in":"NOT in")+" audience:",c(t)),l},t.requiredAudienceFieldsForConditions=function f(n,t){var e={};return i.each(n,(function(n){if(i.isArray(n))i.extend(e,f(n,t));else if(i.isObject(n)){var r=t[n.type];if(r){var o=s(r.fieldsNeeded,n);i.each(o,(function(n){e[u.serializeFieldKey(n)]=n}))}}})),e}},6641:function(n,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}},6699:function(n,t,e){var i=e(9524),r=e(6641),o=e(9299).getFieldValue,a=e(529);function u(n,t,e,o,a){this[r.FIELDS.NAME]=n,this[r.FIELDS.TYPE]=t,i.isString(e)&&e.trim().length>0&&(this[r.FIELDS.CATEGORY]=e),o&&i.keys(o).length>0&&(this[r.FIELDS.OPTIONS]=o),i.isUndefined(a)||(this[r.FIELDS.REVENUE]=a)}function s(n,t,e,o){this.eventBase=n,this[r.FIELDS.TIME]=t,i.isUndefined(e)||(this[r.FIELDS.SESSION_ID]=e),i.isUndefined(o)||(this[r.FIELDS.SESSION_INDEX]=o)}t.x=u,u.prototype.digest=function(){var n=function(n,t){return encodeURIComponent(n)+"="+encodeURIComponent(t)},t=[];if(t.push(n(r.FIELDS.NAME,this[r.FIELDS.NAME])),t.push(n(r.FIELDS.TYPE,this[r.FIELDS.TYPE])),this[r.FIELDS.CATEGORY]&&t.push(n(r.FIELDS.CATEGORY,this[r.FIELDS.CATEGORY])),this[r.FIELDS.REVENUE]&&t.push(n(r.FIELDS.REVENUE,this[r.FIELDS.REVENUE])),!this[r.FIELDS.OPTIONS])return t.join("&");var e=this[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(e),(function(n){return e.hasOwnProperty(n)}));o=o.sort();for(var a=0;a<o.length;a++)t.push(n(o[a],e[o[a]]));return t.join("&")},u.prototype.hash=function(){return this.hash_||(this.hash_=a.hashToHex(a.toByteString(this.digest()),a.Seed.BEHAVIOR_EVENT)),this.hash_},u.prototype.setHash=function(n){this.hash_=n},u.prototype.reHash=function(){this.hash_=null,this.hash()},u.prototype.equals=function(n){if(this.hash()!==n.hash())return!1;if(this[r.FIELDS.NAME]!==n[r.FIELDS.NAME]||this[r.FIELDS.TYPE]!==n[r.FIELDS.TYPE]||this[r.FIELDS.CATEGORY]!==n[r.FIELDS.CATEGORY]||this[r.FIELDS.REVENUE]!==n[r.FIELDS.REVENUE])return!1;if(!this[r.FIELDS.OPTIONS]&&!n[r.FIELDS.OPTIONS])return!0;var t=this[r.FIELDS.OPTIONS]||{},e=n[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(t),(function(n){return t.hasOwnProperty(n)})),a=i.filter(i.keys(e),(function(n){return e.hasOwnProperty(n)}));if(o.length!==a.length)return!1;for(var u=0;u<o.length;u++){var s=o[u];if(!e.hasOwnProperty(s)||t[s]!==e[s])return!1}return!0},u.prototype.getValueOrDefault=function(n,t){var e=o(this,n);return i.isUndefined(e)?t:e},u.prototype.setFieldValue=function(n,t){n!==r.FIELDS.NAME&&n!==r.FIELDS.TYPE&&n!==r.FIELDS.CATEGORY&&n!==r.FIELDS.REVENUE&&n!==r.FIELDS.OPTIONS||(this[n]=t,this.reHash())},t.j=s,s.prototype.getValueOrDefault=function(n,t){if(0===n.length)return this;var e={};e[r.FIELDS.TIME]=this[r.FIELDS.TIME],e[r.FIELDS.SESSION_ID]=this[r.FIELDS.SESSION_ID],e[r.FIELDS.SESSION_INDEX]=this[r.FIELDS.SESSION_INDEX];var a=o(e,n);return i.isUndefined(a)?this.eventBase.getValueOrDefault(n,t):a},s.prototype.setFieldValue=function(n,t){n===r.FIELDS.TIME||n===r.FIELDS.SESSION_ID||n===r.FIELDS.SESSION_INDEX?this[n]=t:this.eventBase.setFieldValue(n,t)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};s.prototype.readableEvent=function(){var n,t,e=function(n){return i.isString(n)?'"'+n+'"':n},o=this,a=[];i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.SESSION_ID],(function(r){n=c[r],t=o.getValueOrDefault([r]),i.isUndefined(t)||a.push(n+": "+e(t))}));var u=[];if(n=c[r.FIELDS.OPTIONS],t=o.getValueOrDefault([r.FIELDS.OPTIONS]),i.isUndefined(t)||(i.each(t,(function(n,t){u.push(t+": "+String(e(n)))})),a.push(n+": {\n\t\t"+u.join(",\n\t\t")+"\n\t}")),t=o.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(t)&&(t=e(new Date(t).toString())),!i.isUndefined(t)){a.push("timestamp: "+t)}return"{\n\t"+a.join(",\n\t")+"\n}"},s.prototype.toObject=function(n){var t,e,o={},a=this;i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.OPTIONS,r.FIELDS.SESSION_INDEX],(function(n){t=c[n],e=a.getValueOrDefault([n],n===r.FIELDS.OPTIONS?{}:undefined),i.isUndefined(e)||(o[t]=e)}));var u=c[r.FIELDS.OPTIONS],s=c[r.FIELDS.REVENUE];if(n&&n.revenueAsTag&&o[s]&&(o[u]=o[u]||{},o[u][s]=o[s],delete o[s]),e=a.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(e))if(n&&n.timeAsTimestamp){o.timestamp=new Date(e)}else{o.time=e}return o}},3345:function(n,t,e){var i=e(500);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.getEventCount=i.getEventCount},6092:function(n,t,e){var i=e(6699).j,r=e(7649),o=e(6641),a=e(6699).x;t.CURRENT_SESSION_INDEX=0;var u=18e5;function s(n,e){var i;i=t.isInSameSession(n,e)?n.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function c(n,e,i){var r,a=n.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=t.isInSameSession(e,n)?a:i?a+1:a-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}t.isInSameSession=function(n,t){var e=n.getValueOrDefault([o.FIELDS.TIME],0),i=t.getValueOrDefault([o.FIELDS.TIME],0);return Math.abs(e-i)<u},t.updateSessionId=function(n,t){if(n){var e=n.getValueOrDefault([o.FIELDS.TIME]),r=n.getValueOrDefault([o.FIELDS.SESSION_ID]),u=t.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?e:r,s(n=new i(new a("",""),e,r),t)}else t.setFieldValue(o.FIELDS.SESSION_ID,t.getValueOrDefault([o.FIELDS.TIME]))},t.updateSessionIndex=function(n,t){if(n){var e=n.getValueOrDefault([o.FIELDS.TIME]),r=n.getValueOrDefault([o.FIELDS.SESSION_INDEX]),u=t.getValueOrDefault([o.FIELDS.TIME]),s=n.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?0:r,s="number"!=typeof s?e:s,c(n=new i(new a("",""),e,s,r),t,!1)}else t.setFieldValue(o.FIELDS.SESSION_INDEX,0)},t.sessionize=function(n){var e=n.length;if(0!==e){n[0].setFieldValue(o.FIELDS.SESSION_ID,n[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)s(n[i-1],n[i]);var a=t.CURRENT_SESSION_INDEX,f=n[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>u&&(a+=1),n[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,a);for(i=e-1;i>0;i--)c(n[i],n[i-1],!0)}},t.reindexIfNecessary=function(n,t,e){function i(n){for(var t=0;t<n.length;t++){var e=n[t].getValueOrDefault([o.FIELDS.SESSION_INDEX]);n[t].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}}-1===n.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(t),i(e))},t.sessionSortPredicate=function(n,t){return n[o.FIELDS.TIME]-t[o.FIELDS.TIME]},t.applyMigrations=function(n){return!1}},500:function(n,t,e){var i=e(9524),r=e(7913),o=e(7649),a=e(2517),u=e(3162),s=e(8507),c=e(3028),f=t,l=e(6699).j,d=e(6641),v=e(6699).x,h=e(6092),p=e(1731),g=p.get("stores/visitor_events"),m=p.get("stores/visitor_events_manager"),_={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"};function w(n){u.dispatch(r.SET_VISITOR_EVENTS,n)}function y(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:n})}function E(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:n})}function b(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:n})}function I(){return g.getEvents()}function A(){return m.getBaseMap()}function T(){return m.getEventQueue()}function S(){return m.getLastEvent()}function R(){var n=I().concat(T()),t=!1;return n.length>1e3&&(n=n.slice(-1e3),t=!0),w(n),E([]),t}t.initialize=function(n,t){if(!m.getInitialized()){f.R(n,t);var e=I();e.length>0&&b(e[e.length-1]);var i=T();i.length>0&&b(i[i.length-1]),u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},t.addEvent=function(n){s.debug("Behavior store: adding event",n);var t=f.k(n);b(t),E(T().concat(t)),h.reindexIfNecessary(S(),I(),T()),f.N(T())},t.getEvents=function(){return T().length>0&&(R()&&h.sessionize(I()),f.D(I()),f.N(T())),I()},t.getEventCount=function(){return T().length+I().length},f.R=function(n,t){f.C(n,t)&&(f.D(I()),f.N(T())),h.sessionize(I())},f.C=function(n,t){if(0===n.length&&0===t.length)return w([]),E([]),!1;var e=!1,i=n[0]||t[0];return _.EVENTBASE in i?(w(f.O(n)),E(f.O(t))):(e=!0,w(f.P(n)),E(f.P(t))),T().length>0&&(R(),e=!0),w(f._updateBaseMapAndMaybeDedupe(I())),f._migrateEventBasesAndUpdateStore()&&(e=!0),e},f.P=function(n){for(var t=[],e=0;e<n.length;e++){var i=n[e],r=f.M(i);t[e]=new l(r,i[d.FIELDS.TIME])}return t},f._migrateEventBasesAndUpdateStore=function(){var n=!1,t=f.L();return h.applyMigrations(t)&&(n=!0,y({}),w(f._updateBaseMapAndMaybeDedupe(I())),E(f._updateBaseMapAndMaybeDedupe(T()))),n},f.V=function(){return o.now()},f.k=function(n){var t,e=n.name,i=n.type||"default",r=n.category||a.OTHER,o=n.tags||{};n.revenue&&(t=n.revenue);var u=new v(e,i,r,o,t);u=f.F(u);var s=f.V(),c=new l(u,s,-1);return h.updateSessionId(S(),c),h.updateSessionIndex(S(),c),c},f._updateBaseMapAndMaybeDedupe=function(n){for(var t=0;t<n.length;t++)n[t].eventBase=f.F(n[t].eventBase);return n},f.D=function(n){var t=f.B(n);c.persistBehaviorEvents(t)},f.N=function(n){var t=f.B(n);c.persistBehaviorEventQueue(t)},f.q=function(){var n;m.getCleared()||(w([]),E([]),f.D(I()),f.N(T()),y({}),b(null),n=!0,u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:n}))},f.F=function(n){var t=n.hash(),e=A(),r=e[t];if(i.isUndefined(r))return e[t]=[n],y(e),n;for(var o=0;o<r.length;o++)if(n.equals(r[o]))return r[o];return r.push(n),y(e),n},f.L=function(){var n=[],t=A();for(var e in t)t.hasOwnProperty(e)&&(n=n.concat(t[e]));return n},f.B=function(n){for(var t=function(n){var t={};t[d.FIELDS.NAME]=n.getValueOrDefault([d.FIELDS.NAME]),t[d.FIELDS.TYPE]=n.getValueOrDefault([d.FIELDS.TYPE]);var e=n.getValueOrDefault([d.FIELDS.CATEGORY]);i.isUndefined(e)||(t[d.FIELDS.CATEGORY]=e);var r=n.getValueOrDefault([d.FIELDS.REVENUE]);i.isUndefined(r)||(t[d.FIELDS.REVENUE]=r);var o=n.getValueOrDefault([d.FIELDS.OPTIONS]);return i.isUndefined(o)||(t[d.FIELDS.OPTIONS]=o),t},e=_,r=[],o="_idx_",a=0;a<n.length;a++){var u,s,c=n[a],f=c.eventBase;if(f.hasOwnProperty(o)){u=r[f._idx_];var l=c[d.FIELDS.TIME]-(u[e.TIMEBASE]||0);(s={})[e.DELTA]=l,s[e.INDEX]=a,u[e.TIMESTAMPS].push(s)}else(u={})[e.EVENTBASE]=t(c),u[e.HASH]=f.hash(),u[e.TIMEBASE]=c[d.FIELDS.TIME],(s={})[e.DELTA]=0,s[e.INDEX]=a,u[e.TIMESTAMPS]=[s],r.push(u),f._idx_=r.length-1}for(a=0;a<n.length;a++)delete n[a].eventBase._idx_;return r},f.M=function(n,t){var e=new v(n[d.FIELDS.NAME],n[d.FIELDS.TYPE],n[d.FIELDS.CATEGORY],n[d.FIELDS.OPTIONS],n[d.FIELDS.REVENUE]);return i.isUndefined(t)||e.setHash(t),e},f.O=function(n){for(var t=_,e=[],i=0;i<n.length;i++)for(var r=n[i],o=f.M(r[t.EVENTBASE],r[t.HASH]),a=r[t.TIMEBASE],u=r[t.TIMESTAMPS],s=0;s<u.length;s++){var c=u[s],d=new l(o,a+c[t.DELTA]);e[c[t.INDEX]]=d}return e},t.deserialize=function(n){return f.O(n)},t.mergeAllEvents=function(n){var t=[].concat.apply([],n);return t.sort(h.sessionSortPredicate),h.sessionize(t),t}},7913:function(n,t,e){var i=e(560);n.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},2883:function(n,t,e){var i=e(9524),r=e(560);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},t.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=r({blockTime:null}),t.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=r({XMLHttpRequest:null}),t.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.AllStorageKeys=i.assign({},t.StorageKeys,t.VisitorStorageKeys),t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},t.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"}},2517:function(n){n.exports={OTHER:"other"}},9422:function(n,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},677:function(n){n.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},744:function(n,t,e){var i=e(560);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})},3177:function(n,t,e){var i=e(529),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(n,t,e){return i.hashToInt(n+t,e,r)},t.isHoldback=function(n,e){return t.bucketingNumber(n,e.id,i.Seed.IGNORING)<(e.holdback||0)},t.chooseWeightedCandidate=function(n,e,r){for(var o=t.bucketingNumber(n,e,i.Seed.BUCKETING),a=0;a<r.length;a++)if(r[a].endOfRange>o)return r[a].entityId;throw new Error("Unable to choose candidate")}},2041:function(n,t,e){var i=e(9524),r=e(7913),o=e(3177),a=e(1823),u=e(2833).E,s=e(3162),c=e(8507);t.isValidExperiment=function(n,t){var e,r=i.partial(i.includes,n);return c.groupCollapsed("Decision / Evaluating audiences for experiment:",t,n),e=!t.audienceIds||a.evaluate(t.audienceIds,r),c.groupEnd(),c.debug("Decision / Experiment",t,"is valid?",e),e},t.selectVariation=function(n,t,e,a,f){if(!n.variations||0===n.variations.length)throw new u('No variations in selected experiment "'+n.id+'"');if(!n.weightDistributions&&n.variations.length>1)throw new u('On selected experiment "'+n.id+'", weightDistributions must be defined if # variations > 1');var l;if(n.bucketingStrategy&&"impression"===n.bucketingStrategy)if(1===n.variations.length)l=n.variations[0].id;else{var d=a;l=o.chooseWeightedCandidate(e+d,n.id,n.weightDistributions)}else if(l=1===n.variations.length?n.variations[0].id:o.chooseWeightedCandidate(e,n.id,n.weightDistributions),f&&f[n.id]){c.debug("Decision / Using preferredVariationMap to select variation for experiment:",n.id);var v=f[n.id];if(!i.find(n.variations,{id:v}))return s.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:n.id}),c.debug("Decision / Preferred variation:",v,"not found on experiment:",n.id,". Visitor not bucketed."),null;v!==l&&(s.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:n.id}),l=v)}var h=i.find(n.variations,{id:l});if(h)return c.debug("Decision / Selected variation:",h),h;throw new u('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(n,t){var e=i.find(n.experiments,{id:t});if(e)return e;throw new u("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(n,t){return c.debug("Decision / Checking variation:",n,"for actions on pageId:",t),!!i.find(n.actions,(function(n){return n.pageId===t&&!i.isEmpty(n.changes)}))}},2833:function(n,t){function e(n){this.message=n}e.prototype=new Error,t.E=e},343:function(n,t,e){var i=e(9524),r=e(7913),o=e(5315),a=e(5515),u=e(3177),s=e(2041),c=e(2833).E,f=e(1731),l=e(2883),d=e(3162),v=e(5404),h=e(9722),p=e(8507),g=e(8073),m=f.get("stores/plugins"),_=f.get("stores/global"),w=f.get("stores/layer_data");function y(n){var t=m.getPlugin(l.PluginTypes.deciders,n);if(i.isEmpty(t))throw new Error("No deciders found for policy: "+n);return t}t.isPageIdRelevant=function(n){if(!n)return!1;var t=y(n.policy);return i.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(n):!0===t.includePageIdInDecisionTicket},t.createTicket=function(n){var t,e,r,o=i.pick(n,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return i.extend(o,{audienceIds:(t=n.visitorProfile,e=n.audiences,r=m.getAllPlugins(l.PluginTypes.audienceMatchers),i.reduce(e,(function(n,e){return a.isInAudience(t,e,r)&&n.push(e.id),n}),[])),activationId:_.getActivationId()}),o},t.decideGlobal=function(n){return{isGlobalHoldback:u.isHoldback(n.bucketingId,{id:null,holdback:n.globalHoldback})}},t.decideGroup=function(n,t){p.debug("Decision / Deciding layer for group: ",v.description(n));var e,o,a=t.preferredLayerId,s=!!a;try{(e=u.chooseWeightedCandidate(t.bucketingId,n.id,n.weightDistributions))&&"None"!==e||(o='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(l){o="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(s&&(p.debug("Decision / Using preferredLayerMap to select layer for group:",v.description(n)),a!==e&&(d.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:n.id}),e=a)),o)return{layerId:null,reason:o};if(!i.find(n.weightDistributions,{entityId:e})){var f="Visitor was"+(s?" sticky-":" non-sticky ")+"bucketed into a campaign ("+e+") which is not in the group";if(!s)throw new c(f);return{layerId:null,reason:f}}return{layerId:e}},t.decideLayer=function(n,t){var e,r;p.debug("Deciding: ",n,t);var a=y(n.policy),f={layerId:n.id,experimentId:null,variationId:null,isLayerHoldback:u.isHoldback(t.bucketingId,n)};if(i.isEmpty(n.experiments))throw new c("No experiments in layer.");try{if(a.decideLayer){p.debug("Decision / Using decider's custom decideLayer.");var l=a.decideLayer(n,t);e=l.experiment,r=l.variation}else p.debug("Decision / Using default decideLayer behavior."),e=a.selectExperiment(n,t.audienceIds,t.bucketingId),r=s.selectVariation(e,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(d){d instanceof c?f.reason=d.message:f.error=d}return f.experimentId=e?e.id:null,f.variationId=r?r.id:null,f.error&&(f.error.name="DecisionEngineError",o.emitError(f.error)),f},t.getDummyLayerDecision=function(n,t){var e,i=function(n,t){for(var e=0;e<n.experiments.length;e++)for(var i=0;i<n.experiments[e].variations.length;i++)if(t.indexOf(n.experiments[e].variations[i].id)>-1)return{experimentId:n.experiments[e].id,variationId:n.experiments[e].variations[i].id};return null}(n,t);return i?(p.log("Decision / Applying force variation:",i.variationId,"to Campaign",h.description(n)),e={layerId:n.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(p.log("No variation matches ids:",t,"in Campaign",h.description(n)),e={layerId:n.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),e},t.isInCohort=function(n){if(!n.experimentId||!n.variationId)return!1;var t=w.get(n.layerId);return!(g.isSingleExperimentPolicy(t.policy)&&n.isLayerHoldback)}},1731:function(n,t,e){var i=e(9524),r=e(7290),o=e(3162),a=e(4339),u=r.create(),s={action_data:e(1881),async_request:e(3636),audience_data:e(4039),change_data:e(2984),cleanup:e(3976),client_metadata:e(6398),cookie_options:e(1225),event_data:e(4084),event_emitter:e(9504),dimension_data:e(6945),directive:e(2010),global:e(2738),history:e(9603),integration_settings:e(9973),layer:e(6895),layer_data:e(3546),log:e(4478),observed_redirect:e(1575),pending_events:e(7368),performance:e(9640),plugins:e(5571),provider_status:e(5499),pending_redirect:e(4837),rum:e(9391),sandbox:e(602),session:e(2150),tracker_optimizely:e(4667),ua_data:e(5233),view:e(1521),view_data:e(6163),visitor:e(7964),visitor_attribute_entity:e(9574),visitor_events:e(3820),visitor_events_manager:e(95),visitor_id:e(7311),visitor_bucketing:e(9807),xdomain:e(6018)};s.group_data=e(6511),o.registerStores(s),i.forOwn(s,(function(n,t){u.register("stores/"+t,o.getStore(t))})),u.register("core/plugins/matchers/key_value",a),n.exports=u},8721:function(n,t,e){var i=e(9524),r=e(7913),o=e(5315),a=e(3109),u=e(4623).U,s=e(2883),c=e(3162),f=e(8507),l=t.JSONParseError=u("JSONParseError"),d=e(3624),v=e(5516),h=e(9031),p="optimizely_show_preview",g="optimizely_disable",m="optimizely_editor",_="optimizely_p13n",w="optimizely_x_audiences",y="optimizely_x",E="optimizely_show_preview",b="optimizely_opt_out",I="optimizely_token",A="optimizely_force_tracking";t.populateDirectiveData=function(){var n,t,e,u;!function(){var n="OFF",t=d.getQueryParamValue("optimizely_log");if(t){var e=t.split(":");""!==e[0]&&(n=String(e[0]).toUpperCase()),"undefined"!=typeof e[1]&&f.setLogMatch(e[1])}f.setLogLevel(n)}(),function(){var n=h.getUserAgent()||"";if(!i.isString(n))return void f.warn("Directive / userAgent not a string");n=n.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],e=function(t){if(i.includes(n,t))return f.warn("Directive / Matches bot:",t),!0};i.some(t,e)&&(f.log("Directive / Disabling tracking"),c.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),n=Boolean(i.result(window.optimizely,"initialized")),c.dispatch(r.LOAD_DIRECTIVE,{alreadyInitialized:n}),c.dispatch(r.LOAD_DIRECTIVE,{mutationObserverAPISupported:h.isMutationObserverAPISupported()}),function(){var n=a.get(s.COOKIES.OPT_OUT),t=d.getQueryParamValue(b),e="You have successfully opted out of Optimizely for this domain.",i="You are NOT opted out of Optimizely for this domain.";if("true"===t||"false"===t){var o="true"===t;c.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:o}),h.alert(o?e:i)}else n&&c.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:"true"===n})}(),function(){var n=!1,t=[p,g];t.push(m);for(var e=0;e<t.length;e++)if("true"===d.getQueryParamValue(t[e])){f.warn("Directive / Not activating because "+t[e]+" is set."),n=!0;break}c.dispatch(r.LOAD_DIRECTIVE,{disabled:n})}(),function(){0;c.dispatch(r.LOAD_DIRECTIVE,{isEditor:!1})}(),function(){0;c.dispatch(r.LOAD_DIRECTIVE,{isPreview:!1})}(),function(){var n=d.getQueryParamValue(E);n&&f.log("Directive / Is legacy preview mode");c.dispatch(r.LOAD_DIRECTIVE,{isLegacyPreview:!!n})}(),function(){0;c.dispatch(r.LOAD_DIRECTIVE,{isSlave:!1})}(),function(){var n=h.getGlobal("optlyDesktop"),t=!(!n||i.isUndefined(n.p13nInner));t&&f.log("Directive / Is running in desktop app editor");c.dispatch(r.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}(),function(){var n="true"===d.getQueryParamValue(_);n&&f.log("Directive / Is running in editor");c.dispatch(r.LOAD_DIRECTIVE,{isRunningInV2Editor:n})}(),t=a.get(s.COOKIES.TOKEN)||null,e=d.getQueryParamValue(I)||t,c.dispatch(r.LOAD_DIRECTIVE,{projectToken:e}),function(){var n=a.get(s.COOKIES.PREVIEW),t=[],e=d.getQueryParamValue(w);if(e)t=a.safeDecodeURIComponent(e).split(",");else if(n)try{t=v.parse(n).forceAudienceIds}catch(h){var i=new l("Failed to parse previewCookie in registerForceAudienceIds: "+n),u={originalMessage:h.message,userError:!0};o.emitError(i,u)}t.length&&(f.log("Directive / Force Audience IDs:",t),c.dispatch(r.LOAD_DIRECTIVE,{forceAudienceIds:t}))}(),function(){var n=a.get(s.COOKIES.PREVIEW),t=[],e=d.getQueryParamValue(y);if(e)t=a.safeDecodeURIComponent(e).split(",");else if(n)try{t=v.parse(n).forceVariationIds}catch(h){var i=new l("Failed to parse previewCookie in registerForceVariationIds: "+n),u={originalMessage:h.message,userError:!0};o.emitError(i,u)}t.length&&(f.log("Directive / Force Variation IDs:",t),c.dispatch(r.LOAD_DIRECTIVE,{forceVariationIds:t}))}(),(u=d.getQueryParamValue(A))&&c.dispatch(r.LOAD_DIRECTIVE,{forceTracking:u})};t.setOptOut=function(n){n?(f.warn("Directive / Opting out"),a.set(s.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):a.remove(s.COOKIES.OPT_OUT),c.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:n})}},7649:function(n,t){t.now=function(){return+new Date}},4725:function(n,t){t.VERSION="0.174.0",t.NAME="js"},4011:function(n,t,e){var i=e(1731).get("stores/global");t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(n){document.cookie=n},t.querySelector=function(n){return document.querySelector(n)},t.querySelectorAll=function(n){return document.querySelectorAll(n)},t.parseUri=function(n){var e=t.createElement("a");return e.href=n,e},t.childrenOf=function(n){return Array.prototype.slice.call(n.querySelectorAll("*"))},t.createElement=function(n){return document.createElement(n)},t.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(n){return document.addEventListener("DOMContentLoaded",n),function(){t.removeReadyHandler(n)}},t.removeReadyHandler=function(n){return function(){document.removeEventListener("DOMContentLoaded",n)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(n){if("loading"!==t.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(n)},t.appendToHead=function(n){return t.appendTo(document.head,n)},t.appendTo=function(n,t){n.appendChild(t)},t.addEventListener=function(n,t,e){return document.addEventListener(n,t,e),function(){document.removeEventListener(n,t,e)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(n){for(var t=n.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}},6735:function(n,t,e){var i,r,o="optimizely_data",a=e(4623).U,u=e(6887),s=e(9031),c=a("StorageError");try{r=s.getGlobal("localStorage")}catch(f){throw new c("Unable to read localStorage: "+f.toString())}if(!r)throw new c("localStorage is undefined");i=u.create(r,o),t.mM=i},1832:function(n,t){t.create=function(n){return new MutationObserver(n)},t.observe=function(n,t,e){n.observe(t,e)}},6426:function(n,t,e){var i=e(5575).Promise,r=e(9031);t.estimateStorage=function(){var n=r.getGlobal("navigator");try{return n.storage.estimate()}catch(t){return i.resolve({usage:null,quota:null})}}},1476:function(n,t,e){var i=e(7913),r=e(4623).U,o=e(7649),a=e(3162),u=e(9031),s=e(1731).get("stores/rum"),c="optimizely:",f=t.Error=r("PerformanceError");function l(){return u.getGlobal("performance")}t.time=function(n){if(s.getSampleRum()){var t=l();if(t&&t.mark){var e=c+n;t.clearMarks(e+"Begin"),t.mark(e+"Begin")}}},t.timeEnd=function(n){if(s.getSampleRum()){var t=l();if(t&&t.mark){var e=c+n,r=t.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+n);t.clearMarks(e+"End"),t.mark(e+"End");var o=n+"Time",u=t.getEntriesByName(e+"End")[0].startTime-r[0].startTime;a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},t.now=function(){var n=l();return n?n.now():o.now()}},9031:function(n,t,e){var i=e(9524),r=e(8507);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(n){window.location.replace(n)},t.setGlobal=function(n,t){window[n]=t},t.getGlobal=function(n){return window[n]},t.getGlobalByPath=function(n){for(var t=n.split("."),e=window;t.length;)try{e=e[t.shift()]}catch(i){throw r.error("Attempted to access nonexistent property. Path ",n),new Error("Attempted to access nonexistent property. Path ",n)}return e},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(n){alert(n)},t.setTimeout=function(n,t){return setTimeout((function(){try{n()}catch(t){r.warn("Deferred function threw error:",t)}}),t)},t.setInterval=function(n,t){return setInterval((function(){try{n()}catch(t){r.warn("Polling function threw error:",t)}}),t)}},2862:function(n,t,e){var i=e(9524);t.create=function(n,t,e,r){return i.extend({category:"other"},r,{id:n,apiName:t,eventType:e})}},2497:function(n,t,e){var i=e(9524),r=e(2827),o=e(7913),a=e(5315),u=e(1731),s=e(3162),c=e(8507),f=u.get("stores/event_emitter");t.on=function(n){return n.token||(n.token=r.generate()),s.dispatch(o.ADD_EMITTER_HANDLER,n),n.token},t.off=function(n){s.dispatch(o.REMOVE_EMITTER_HANDLER,{token:n})},t.emit=function(n,t,e){var r=f.getHandlers(n,t);i.each(r,(function(i){try{i.handler.call({$di:u},n)}catch(r){!e&&i.emitErrors?(c.error("Error in handler for event:",n,r),a.emitError(r,null,t)):c.warn("Suppressed error in handler for event:",n,r)}}))}},3900:function(n,t,e){var i=e(2497);t.on=function(n){return n.publicOnly=!0,i.on(n)},t.off=i.off,t.emit=function(n){i.emit(n)}},7973:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(4558),di=__webpack_require__(1731),Logger=__webpack_require__(8507),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(n,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return n.apply(undefined,t)}catch(e){throw Logger.warn("Error applying function",n,"with args:",t,e),new ExecError(e)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}},3162:function(n,t,e){var i=e(3295);n.exports=i.create()},5404:function(n,t,e){var i=e(9524);t.description=function(n){var t=!!n.name?'"'+n.name+'" ':"",e=function(n){return i.map(n.weightDistributions,"entityId")}(n).join(", ");return t+"(id "+n.id+", campaigns: "+e+")"}},9722:function(n,t,e){var i=e(9524),r=e(7913),o=e(7649),a=e(1731),u=e(3162),s=a.get("stores/global"),c=a.get("stores/session");t.recordLayerDecision=function(n,t,e){return u.dispatch(r.RECORD_LAYER_DECISION,{layerId:n,decision:e,decisionTicket:t,sessionId:c.getSessionId(),activationId:s.getActivationId(),timestamp:o.now(),revision:s.getRevision(),namespace:s.getNamespace(),pageId:t.pageId}),e},t.relatedAudienceIds=function(n){var t={},e=["and","or","not"];return i.each(n.experiments,(function(n){i.each(i.flattenDeep(n.audienceIds),(function(n){i.includes(e,n)||(t[n]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(n){var t=n.activation;return t&&null!==t.timeout&&t.timeout!==undefined?t.timeout:2e3},t.description=function(n){return(n.name?'"'+n.name+'" ':"")+"("+n.id+")"},t.createSingle=function(n,t,e){return{id:n,policy:"single_experiment",holdback:0,experiments:[{id:t||"",variations:[{id:e||"",actions:[]}]}],integrationStringVersion:1}},t.createLayerState=function(n,t,e,i){return{layerId:n,decision:{layerId:n,experimentId:t,variationId:e,isLayerHoldback:i||!1},decisionTicket:{audienceIds:[]}}},t.getIntegrationTypes=function(n){return i.keys(i.reduce(i.keys(n.integrationSettings),(function(n,t){return i.isNaN(Number(t))||(t="custom"),n[t]=1,n}),{}))}},4184:function(n,t,e){var i=e(9524);t.y=function(n,t){if(!t)return 0;for(var e=t.toString().split("."),r=n.toString().split("."),o=0;o<e.length;o++){if(i.isUndefined(r[o]))return-1;if(isNaN(Number(r[o]))){if(r[o]!==e[o])return-1}else{if(Number(r[o])<Number(e[o]))return-1;if(Number(r[o])>Number(e[o]))return 1}}return 0}},1823:function(n,t,e){var i=e(9524),r=e(5516),o=e(8507),a="or",u="not";var s={};function c(n,t){var e;if(i.isArray(n)){var u,c;n[0]in s?(u=n[0],c=n.slice(1)):(u=a,c=n),o.groupCollapsed('Condition / Applying operator "'+u+'" with args',r.stringify(c));try{e=s[u](c,t),o.debug("Condition / Result:",e)}finally{o.groupEnd()}return e}return e=t(n),o.debug("Condition / Evaluated:",r.stringify(n),":",e),e}s["and"]=function(n,t){for(var e,r,o=0;o<n.length;o++){if(!1===(e=c(n[o],t)))return!1;i.isUndefined(e)&&(r=!0)}if(!r)return!0},s[a]=function(n,t){for(var e,r=!1,o=0;o<n.length;o++){if(!0===(e=c(n[o],t)))return!0;i.isUndefined(e)&&(r=!0)}if(!r)return!1},s[u]=function(n,t){if(1!==n.length)return!1;var e=c(n[0],t);return i.isUndefined(e)?void 0:!e},n.exports={evaluate:c}},7702:function(n,t,e){var i=e(9524),r=e(4773);function o(n){if((n=(n||"").toLowerCase())in s)return n;var t=i.keys(s);return i.find(t,(function(t){var e=s[t];return i.includes(e,n)}))||"unknown"}function a(n,t,e){return t||("unknown"===n?"unknown":e?"mobile":"desktop_laptop")}t.parseUA=function(n){var t=new r(n),e=t.getBrowser(),i=t.getOS(),s=t.getDevice(),f=(i.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=u(s.type,l,f);return{browser:{id:o(e.name),version:e.version},platform:{name:f,version:i.version},device:{model:c[s.model]||"unknown",type:a(l,s.type,d),isMobile:d}}};var u=function(n,t,e){if(i.includes(["mobile","tablet"],n))return!0;if(i.includes(["opera mini"],t))return!0;return!!i.includes(["android","blackberry","ios","windows phone"],e)},s={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},c={iPhone:"iphone",iPad:"ipad"}},7290:function(n,t,e){var i=e(9524);function r(){this.H={}}r.prototype.register=function(n,t){if(1!==arguments.length){if(this.H[n])throw new Error("Module already registered for: "+n);this.H[n]=t}else{var e=this;i.each(n,(function(n,t){e.register(t,n)}))}},r.prototype.get=function(n){return this.H[n]},r.prototype.getModuleKeys=function(){var n=this.H;return i.keys(n)},r.prototype.evaluate=function(n){var t=n.length,e=n.slice(0,t-1),r=n[t-1];if("function"!=typeof r)throw new Error("Evaluate must take a function as last element in array");var o=i.map(e,i.bind(this.get,this));return r.apply(null,o)},r.prototype.reset=function(){this.H={}},n.exports={create:function(){return new r}}},250:function(n,t,e){var i=e(9524);function r(n,t,e){this.Y=n,this.K=t,this.$=0,this.W=!1,this.X={},i.extend(this,e),this.J={},this.initialize&&this.initialize()}r.prototype.Z=function(n,t){var e=this.X[n];e&&"function"==typeof e&&e.call(this,t,n)},r.prototype.nn=function(){return i.cloneDeep(this.J)},r.prototype.on=function(n,t){this.X[n]=i.bind(t,this)},r.prototype.observe=function(n){return this.K.tn(this.Y,n)},r.prototype.emitChange=function(){this.W=!0,this.$++},r.prototype.hasChanges=function(){return this.W},r.prototype.resetChange=function(){this.W=!1},r.prototype.getStateId=function(){return this.$},r.prototype.en=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},n.exports=r},3295:function(n,t,e){var i=e(9524),r=e(250);function o(n){n=n||{},this.rn={},this.an={},this.un=0,this.sn=[],this.cn=[]}function a(n,t){return function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}}o.prototype.registerStores=function(n){i.forOwn(n,i.bind((function(n,t){this.rn[t]=new r(t,this,n)}),this))},o.prototype.getStore=function(n){return this.rn[n]},o.prototype.dispatch=function(n,t){this.dispatchId++,i.each(this.sn,i.bind((function(e){e.call(this,n,t)}),this)),i.forOwn(this.rn,(function(e){e.Z(n,t)})),i.each(this.cn,i.bind((function(e){e.call(this,n,t)}),this)),i.forOwn(this.rn,i.bind((function(n,t){n.hasChanges()&&this.an[t]&&(n.resetChange(),i.each(this.an[t],(function(t){t(n)})))}),this))},o.prototype.reset=function(){this.an={},i.forOwn(this.rn,(function(n,t){n.en()}))},o.prototype.getState=function(){var n={};return i.forOwn(this.rn,(function(t,e){n[e]=t.nn()})),n},o.prototype.onPreAction=function(n){var t=this.sn;return t.push(n),a(t,n)},o.prototype.onPostAction=function(n){var t=this.cn;return t.push(n),a(t,n)},o.prototype.tn=function(n,t){return this.an[n]||(this.an[n]=[]),this.an[n].push(t),a(this.an[n],t)},n.exports={create:function(n){return new o(n)}}},5516:function(n,t,e){var i=e(9524);function r(n){var t,e,r=[Array.prototype],o=[];i.each(r,(function(n){i.isUndefined(n.toJSON)||(o.push(n.toJSON),delete n.toJSON)}));try{t=n()}catch(a){e=a}finally{i.each(o,(function(n,t){r[t].toJSON=n}))}if(e)throw e;return t}t.stringify=function(){return r(i.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse},7384:function(n,t,e){var i=e(9524);t.hasMatch=function(n,t,e){var r=!i.isUndefined(e)&&null!==e,o=!i.isUndefined(n)&&null!==n;switch(t||(o?"exact":"exists")){case"exists":return r;case"exact":return r&&String(e)===n;case"substring":return r&&String(e).indexOf(n)>-1;case"regex":try{return!(!o||!r)&&new RegExp(n).test(String(e))}catch(f){}return!1;case"range":var a=n.split(":"),u=parseFloat(a[0]),s=parseFloat(a[1]),c=parseFloat(e);return c>=u&&c<=s;default:return!1}}},5575:function(n,t,e){n.exports=e(8564)},6887:function(n,t,e){var i=e(9524),r=e(8507);function o(n,t){this.fn=n,this.ln=t}o.prototype.dn=function(n){return[this.ln,n].join("$$")},o.prototype.vn=function(n){return n.replace(this.ln+"$$","")},o.prototype.setItem=function(n,t){try{this.fn.setItem(this.dn(n),t)}catch(e){r.warn("Failed to save",n,"to localStorage:",e)}},o.prototype.removeItem=function(n){this.fn.removeItem(this.dn(n))},o.prototype.getItem=function(n){var t=null;try{t=this.fn.getItem(this.dn(n))}catch(e){}return t},o.prototype.keys=function(){var n=i.keys(this.fn);return i.map(i.filter(n,i.bind((function(n){return i.includes(n,this.ln)}),this)),i.bind(this.vn,this))},o.prototype.allKeys=function(){return i.keys(this.fn)},o.prototype.allValues=function(){return i.values(this.fn)},n.exports={create:function(n,t){return new o(n,t)},mockStorage:{keys:function(){},getItem:function(n){},removeItem:function(n){},setItem:function(n,t){}}}},6237:function(n,t,e){var i=e(4011),r=e(2497),o=e(1832);t.createDOMChangedObserver=function(){var n=i.getDocumentElement(),t={type:"viewTrigger",name:"DOMChanged"},e=o.create((function(){r.emit(t,!0)}));o.observe(e,n,{attributes:!0,childList:!0,subtree:!0,characterData:!0})}},2409:function(n,t,e){var i=e(9524),r=e(5315),o=e(2883),a=e(5516),u=e(6735).mM,s=e(8507),c=e(812),f=e(1731).get("stores/pending_events"),l=o.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var n=f.getEventsString();u.setItem(l,n),e(422).setItem(l,n)}catch(t){s.warn("PendingEvents / Unable to set localStorage key, error was: ",t),r.emitInternalError(t)}},t.getPendingEvents=function(){try{return a.parse(u.getItem(l))}catch(n){return null}},t.retryPendingEvents=function(n){i.forOwn(n,(function(n,t){c.retryableRequest(n.data,t,n.retryCount)})),i.isEmpty(n)||s.log("Retried pending events: ",n)}},7273:function(n,t,e){var i=e(9524),r=e(7913),o=e(1731),a=e(2883),u=e(2497),s=e(3162);t.registerApiModule=function(n,t){i.isArray(t)&&(t=o.evaluate(t)),s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.apiModules,name:n,plugin:t})},t.registerDependency=function(n,t){o.get(n)||o.register(n,t)},t.registerVisitorProfileProvider=function(n){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.visitorProfileProviders,name:n.provides,plugin:n})},t.registerViewProvider=function(n){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewProviders,name:n.provides,plugin:n})},t.registerAudienceMatcher=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.audienceMatchers,name:n,plugin:t})},t.registerViewMatcher=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewMatchers,name:n,plugin:t})},t.registerAnalyticsTracker=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.analyticsTrackers,name:n,plugin:t})},t.registerViewTagLocator=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTagLocators,name:n,plugin:t})},t.registerAudiencePlugin=function(n){n.dependencies&&i.each(n.dependencies,(function(n,e){t.registerDependency(e,n)}));var e,r,a="vendor."+n.vendor;e=i.isString(n.provider)?o.get(n.provider)(n.vendor):i.isFunction(n.provider)?n.provider(n.vendor):i.cloneDeep(n.provider),t.registerVisitorProfileProvider(i.extend(e,{provides:a})),r=i.isString(n.matcher)?o.get(n.matcher):n.matcher;var u={fieldsNeeded:[a],match:function(n,t){return r(n[a],t)}};t.registerAudienceMatcher(a,u)},t.registerWidget=function(n){return i.isArray(n)&&(n=o.evaluate(n)),{showToken:u.on({filter:{type:"showWidget",name:n.widgetId},handler:n.showFn}),hideToken:u.on({filter:{type:"hideWidget",name:n.widgetId},handler:n.hideFn})}},t.registerChangeApplier=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.changeAppliers,name:n,plugin:t})},t.registerDecider=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.deciders,name:n,plugin:t})},t.registerEventImplementation=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.eventImplementations,name:n,plugin:t})},t.registerViewTrigger=function(n,t){s.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTriggers,name:n,plugin:t})}},4570:function(n,t,e){var i=e(9524),r=e(1731),o=":",a="holdback",u="treatment",s="",c=e(8507),f=e(8073);function l(n){return n.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}t.formatNamesAndIdsForAnalytics=function(n,t,e,o){var a={layer:n.name||s,experiment:t.name||s,variation:e.name||s};o&&(a=i.mapValues(a,l));var u,c=!n.integrationStringVersion||1===n.integrationStringVersion;if(a.experiment===s&&c)if(u=t.audienceIds,i.isEmpty(u)||!i.includes(["and","or","not"],u[0])){var f=r.get("stores/audience_data");a.experiment=function(n,t){return i.isEmpty(t)?"everyone_else":i.reduce(t,(function(t,e){var i=n.get(e);return i?t+l(i.name?i.name:i.id)+",":t}),"").slice(0,-1)}(f,t.audienceIds)}else a.experiment="Exp";return{names:a,idStrings:{layer:"("+l(n.id)+")",experiment:"("+l(t.id)+")",variation:"("+l(e.id)+")"}}},t.combineAndTruncateIdAndName=function(n,t,e){var i=e-t.length;if(i<0&&(c.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),n=s),n===s)return t;if(n.length>i){var r=Math.min(n.length,i);return(n=n.substring(0,r))+t}return n+" "+t},t.generateAnalyticsString=function(n,e,r,s,c,l){return n.integrationStringVersion&&2===n.integrationStringVersion?function(n,e,r,u,s,c){if(f.isSingleExperimentPolicy(n.policy)&&u)return;var l=!f.isSingleExperimentPolicy(n.policy)&&u,d=t.formatNamesAndIdsForAnalytics(n,e,r,c),v=[d.names.experiment,d.names.variation],h=[d.idStrings.experiment,d.idStrings.variation];f.isSingleExperimentPolicy(n.policy)||(v.unshift(d.names.layer),h.unshift(d.idStrings.layer));var p=i.reduce(h,(function(n,t){return n+t.length}),0),g=v.length-1+(l?1:0),m=p+g*o.length;l&&(m+=a.length);if(m>s)throw new Error("The analytics string size is too low to send the entity IDs.");for(var _=s-m,w=v.length,y=[],E=v.length-1;E>=0;E--){var b=v[E],I=Math.min(b.length,Math.floor(_/w));_-=I,w--,y.unshift(b.substring(0,I))}var A=i.map(y,(function(n,t){return n+h[t]}));l&&A.push(a);return A.join(o)}(n,e,r,s,c,l):function(n,e,r,s,c,l){var d=s?a:u,v=3*o.length,h=t.formatNamesAndIdsForAnalytics(n,e,r,l),p=h.names,g=h.idStrings,m=i.reduce(g,(function(n,t){return n+t.length}),0);if(m+v+d.length>c)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=c-m-v-d.length,w={};w.variation=Math.min(p.variation.length,Math.floor(_/3)),_-=w.variation,w.experiment=Math.min(p.experiment.length,Math.floor(_/2)),_-=w.experiment,w.layer=_;var y={};i.each(p,(function(n,t){y[t]=n.substring(0,w[t])}));var E=[];f.isSingleExperimentPolicy(n.policy)||E.push(y.layer+g.layer);return(E=E.concat([y.experiment+g.experiment,y.variation+g.variation,d])).join(o)}(n,e,r,s,c,l)}},9161:function(n,t,e){var i=e(9524);n.exports=function(n,t){n=function(n){var t=n.split("?");if(t[1]){var e=t[1].split("#"),r=e[0],a=e[1],u=r.split("&"),s=[];return i.each(u,(function(n){0!==n.indexOf(o)&&s.push(n)})),t[1]="",s.length>0&&(t[1]="?"+s.join("&")),a&&(t[1]+="#"+a),t.join("")}return n}(n);var e=t.value;switch(t.match){case"exact":return(n=s(n))===s(e);case"regex":try{return Boolean(n.match(e))}catch(r){}return!1;case"simple":return(n=u(n))===(e=u(e));case"substring":return n=s(n,!0),e=s(e,!0),-1!==n.indexOf(e);default:return!1}};var r=["www."],o="optimizely_",a=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function u(n){return s(function(n){var t=n.indexOf("?");return-1!==t&&(n=n.substring(0,t)),-1!==(t=n.indexOf("#"))&&(n=n.substring(0,t)),n}(n))}function s(n,t){n=(n=n.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var e=a.slice(0);t||(e=e.concat(r));for(var i=e.length,o=0;o<i;o++){var u=e[o],s=new RegExp("^"+u);n=n.replace(s,"")}return n}},4339:function(n,t,e){var i=e(9524),r=e(9299).getFieldValue,o=e(7384);n.exports=function(n,t){var e=r(n,t.name.split("."));return i.isArray(e)?i.some(e,i.partial(o.hasMatch,t.value,t.match)):o.hasMatch(t.value,t.match,e)}},5437:function(n,t,e){var i=e(3944),r=e(5541),o="cdn3";t.getIP=function(){return i.makeAsyncRequest(o,a).then((function(n){return n.ip}))},t.getIPDerivedGeolocation=function(){return i.makeAsyncRequest(o,a).then((function(n){return n.location}))};function a(){r.addScriptAsync("//cdn3.optimizely.com/js/geo4.js")}},1881:function(n,t,e){var i=e(9524),r=e(7913),o=e(5761),a=e(8507);n.exports={initialize:function(){this.J={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.hn),this.on(r.ACTION_EXECUTED,this.pn),this.on(r.SET_CHANGE_APPLIER,this.gn),this.on(r.REMOVE_ACTION_STATE,this.mn)},hn:function(n){var t=this;i.isEmpty(n.data.layers)||(i.each(n.data.layers,(function(n){var e;if(n.changes){var r="layerId:"+n.id;e={id:r,layerId:n.id,changeSet:n.changes,type:"layer"},o.deepFreeze(e),t.J.actions[r]=e}i.each(n.experiments,(function(r){if(r.changes){var a="experimentId:"+r.id;e={id:a,layerId:n.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},o.deepFreeze(e),t.J.actions[a]=e}i.each(r.variations,(function(a){i.each(a.actions,(function(i){var u=i.pageId||i.viewId,s=r.id+":"+a.id+":"+u;e={id:s,layerId:n.id,experimentId:r.id,variationId:a.id,pageId:u,changeSet:i.changes,type:"variation"},o.deepFreeze(e),t.J.actions[s]=e}))}))}))})),this.emitChange())},pn:function(n){var t=n.actionId;i.isUndefined(t)||this.J.actionState[t]||(this.J.actionState[t]={})},gn:function(n){var t=n.actionId,e=n.changeId;this.J.actionState[t]?this.J.actionState[t][e]=n.changeApplier:a.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},mn:function(n){delete this.J.actionState[n.actionId]},get:function(n){return o.safeReference(this.J.actions[n])},getActionState:function(n){return o.safeReference(this.J.actionState[n])},getByChangeId:function(n){return i.find(this.J.actions,{changeSet:[{id:n}]})},getAllActionIdsByPageId:function(n){return i.map(i.filter(this.J.actions,{pageId:n}),"id")},getChangeApplier:function(n,t){var e=this.J.actionState[t];if(e)return e[n]},getExperimentVariationActions:function(n,t){return o.safeReference(i.filter(this.J.actions,{experimentId:n,variationId:t}))},getLayerActions:function(n){return o.safeReference(i.filter(this.J.actions,{id:"layerId:"+n}))},getExperimentActions:function(n){return o.safeReference(i.filter(this.J.actions,{id:"experimentId:"+n}))},getAll:function(){return o.safeReference(i.values(this.J.actions))}}},3636:function(n,t,e){var i=e(7913);n.exports={initialize:function(){this.J={},this.on(i.REGISTER_ASYNC_DEFERRED,this._n),this.on(i.RESOLVE_DEFERRED,this.wn),this.on(i.REJECT_DEFERRED,this.yn)},getRequest:function(n){return this.J[n]},getPromise:function(n){var t=this.getRequest(n);if(t)return t.promise},_n:function(n){this.J[n.source]={promise:n.promise,resolver:n.resolver,rejecter:n.rejecter}},wn:function(n){var t=this.getRequest(n.source);if(!t)throw new Error("No request registered for source: "+n.source);t.resolver(n.resolveWith)},yn:function(n){var t=this.getRequest(n.source);if(!t)throw new Error("No request registered for source: "+n.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+n.source);t.rejecter(n.rejectWith)}}},4039:function(n,t,e){var i=e(9524),r=e(7913),o=e(5761);function a(n,t){return t||(t={}),n?(i.each(n,(function(n){if(!i.isString(n)){if(i.isObject(n)){var e=n.type,r=n.name||"_";t[e]||(t[e]={}),t[e][r]=!0}i.isArray(n)&&a(n,t)}})),t):t}n.exports={initialize:function(){this.J={audiences:{},featuresNeeded:{}},this.on(r.DATA_LOADED,this.hn)},hn:function(n){i.isEmpty(n.data.audiences)||(i.each(n.data.audiences,i.bind((function(n){o.deepFreeze(n),i.merge(this.J.featuresNeeded,a(n.conditions)),this.J.audiences[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.J.audiences))},getFeaturesNeeded:function(n){return o.safeReference(this.J.featuresNeeded[n]||{})},getAudiencesMap:function(){return o.safeReference(this.J.audiences)},get:function(n){return o.safeReference(this.J.audiences[n])},getAudienceName:function(n){return i.find(i.values(this.J.audiences),{id:n}).name||"Aud "+n}}},2984:function(n,t,e){var i=e(9524),r=e(7913),o=e(5761);n.exports={initialize:function(){this.J={},this.on(r.ADD_CHANGE,this.En),this.on(r.DATA_LOADED,this.hn)},getChange:function(n){return this.J[n]},hn:function(n){i.isEmpty(n.data.changes)||i.each(n.data.changes,i.bind(this.En,this))},En:function(n){o.deepFreeze(n),this.J[n.id]=n,this.emitChange()}}},3976:function(n,t,e){var i=e(9524),r=e(7913),o=e(2883);n.exports={initialize:function(){this.J={},i.each(o.Lifecycle,i.bind((function(n){this.J[n]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.bn),this.on(r.CLEAR_CLEANUP_FN,this.In)},getCleanupFns:function(n){return i.cloneDeep(this.J[n])},bn:function(n){this.J[n.lifecycle].push(n.cleanupFn),this.emitChange()},In:function(n){var t=this.J[n.lifecycle];if(n.cleanupFn){var e=t.indexOf(n.cleanupFn);e>-1&&(t.splice(e,1),this.emitChange())}else this.J[n.lifecycle]=[],this.emitChange()}}},6398:function(n,t,e){var i=e(7913),r=e(4725);n.exports={initialize:function(){this.J={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.An),this.on(i.SET_CLIENT_VERSION,this.Tn)},getClientName:function(){return this.J.name},getClientVersion:function(){return this.J.version},An:function(n){n&&(this.J.name=n),this.emitChange()},Tn:function(n){n&&(this.J.version=n),this.emitChange()}}},1225:function(n,t,e){var i=e(7913);n.exports={initialize:function(){this.J={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.Sn),this.on(i.SET_COOKIE_AGE,this.Rn),this.on(i.SET_COOKIE_AUTO_REFRESH,this.kn)},getCurrentDomain:function(){return this.J.currentDomain},getDefaultAgeInSeconds:function(){return this.J.defaultAgeSeconds},getAutoRefresh:function(){return this.J.autoRefresh},Sn:function(n){this.J.currentDomain=n,this.emitChange()},Rn:function(n){this.J.defaultAgeSeconds=n,this.emitChange()},kn:function(n){this.J.autoRefresh=n,this.emitChange()}}},6945:function(n,t,e){var i=e(9524),r=e(7913),o=e(5761);n.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.hn)},hn:function(n){i.isEmpty(n.data.dimensions)||(i.each(n.data.dimensions,i.bind((function(n){o.deepFreeze(n),this.J[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.J))},getById:function(n){return o.safeReference(this.J[n])},getByApiName:function(n){return o.safeReference(i.find(i.values(this.J),{apiName:n}))}}},2010:function(n,t,e){var i=e(9524),r=e(7913);n.exports={initialize:function(){this.J={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.Nn)},getAll:function(){return i.cloneDeep(this.J)},conflictInObservingChanges:function(){return!this.J.mutationObserverAPISupported},isDisabled:function(){return this.J.disabled},isEditor:function(){return this.J.isEditor},clientHasAlreadyInitialized:function(){return this.J.alreadyInitialized},getForceAudienceIds:function(){return this.J.forceAudienceIds},getForceVariationIds:function(){return this.J.forceVariationIds},getPreviewLayerIds:function(){return this.J.previewLayerIds},getProjectToken:function(){return this.J.projectToken},getForceTracking:function(){return this.J.forceTracking},shouldActivate:function(){return!this.J.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.J.isPreview},shouldBootstrapDataForEditor:function(){return this.J.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.J.isPreview||this.J.isLegacyPreview||!this.getProjectToken()||this.J.isEditor)},shouldBailForDesktopApp:function(){return!this.J.isEditor&&this.J.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.J.isSlave&&!this.J.isEditor&&this.J.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.J.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.J.shouldOptOut},shouldSendTrackingData:function(){return!this.J.trackingDisabled&&(!!this.J.forceTracking||!this.J.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.J.isSlave},isRunningInDesktopApp:function(){return this.J.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.J.isRunningInV2Editor},Nn:function(n){i.extend(this.J,n),this.emitChange()}}},4084:function(n,t,e){var i=e(9524),r=e(7913),o=e(5761);n.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.hn)},getAll:function(){return o.safeReference(i.values(this.J))},getEventsMap:function(){return o.safeReference(this.J)},get:function(n){return o.safeReference(this.J[n])},getByApiName:function(n){return o.safeReference(i.find(i.values(this.J),{apiName:n}))},getByPageId:function(n){return o.safeReference(i.filter(this.J,{pageId:n}))},hn:function(n){i.isEmpty(n.data.events)||(i.each(n.data.events,i.bind((function(n){n.pageId||(n.pageId=n.viewId),o.deepFreeze(n),this.J[n.id]=n}),this)),this.emitChange())}}},9504:function(n,t,e){var i=e(9524),r=e(7913);function o(n){var t=[];return n&&i.isObject(n)?(n.type&&t.push(n.type),t.push("|"),n.type&&n.name&&t.push(n.name),t.join("")):"|"}n.exports={initialize:function(){this.J={handlers:{}},this.on(r.ADD_EMITTER_HANDLER,this.Dn),this.on(r.REMOVE_EMITTER_HANDLER,this.Cn)},getHandlers:function(n,t){var e=[null,{type:n.type},{type:n.type,name:n.name}],r=[];return i.each(e,i.bind((function(n){var t=o(n),e=this.J.handlers[t];e&&(r=r.concat(e))}),this)),t&&(r=i.filter(r,(function(n){return!n.publicOnly}))),r},Dn:function(n){var t=o(n.filter);this.J.handlers[t]||(this.J.handlers[t]=[]),this.J.handlers[t].push({handler:n.handler,token:n.token,publicOnly:!!n.publicOnly,emitErrors:!!n.emitErrors}),this.emitChange()},Cn:function(n){var t=!1,e=n.token;i.forOwn(this.J.handlers,i.bind((function(n,r){var o=i.filter(n,(function(n){return n.token!==e}));o.length!==n.length&&(t=!0,this.J.handlers[r]=o)}),this)),t&&this.emitChange()}}},2738:function(n,t,e){var i=e(9524),r=e(7913),o=e(5761);n.exports={initialize:function(){this.J={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.On),this.on(r.ACTIVATE,this.xn),this.on(r.RECORD_GLOBAL_DECISION,this.Pn),this.on(r.SET_DOMCONTENTLOADED,this.Mn)},getRevision:function(){return this.J.revision},getGlobalHoldbackThreshold:function(){return this.J.holdback},getProjectId:function(){return this.J.projectId},getSnippetId:function(){return this.J.snippetId},getAccountId:function(){return this.J.accountId},getNamespace:function(){return this.J.namespace},getActivationId:function(){return this.J.activationId},getActivationTimestamp:function(){return this.J.activationTimestamp},getAnonymizeIP:function(){return this.J.anonymizeIP},isGlobalHoldback:function(){return!!this.J.isGlobalHoldback},getListTargetingKeys:function(){return this.J.listTargetingKeys.slice()},getDCPServiceId:function(){return this.J.dcpServiceId},getDCPKeyfieldLocators:function(){return this.J.dcpKeyfieldLocators},getRecommenderServices:function(){return this.J.recommenderServices},getProjectJS:function(){return this.J.projectJS},getPlugins:function(){return this.J.plugins},getExperimental:function(){return o.safeReference(this.J.experimental)},domContentLoadedHasFired:function(){return this.J.domContentLoaded},xn:function(n){this.J.activationId=n.activationId,this.J.activationTimestamp=n.activationTimestamp,this.J.isGlobalHoldback=null},Pn:function(n){var t=n.isGlobalHoldback;if(null!==this.J.isGlobalHoldback&&this.J.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.J.isGlobalHoldback=t,this.emitChange()},On:function(n){var t=i.pick(n.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==i.keys(t).length){i.extend(this.J,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},t),this.emitChange()}},Mn:function(){this.J.domContentLoaded=!0,this.emitChange()}}},6511:function(n,t,e){var i=e(9524),r=e(7913),o=e(5761);n.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.hn)},hn:function(n){i.isEmpty(n.data.groups)||(i.each(n.data.groups,i.bind((function(n){o.deepFreeze(n),this.J[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.J))},getGroupsMap:function(){return o.safeReference(this.J)},get:function(n){return o.safeReference(this.J[n])}}},9603:function(n,t,e){var i=e(9524),r=e(7913),o=e(9031);n.exports={initialize:function(){this.J={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.Ln),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.Vn)},getOriginalPushState:function(){return this.J.originalPushState},getOriginalReplaceState:function(){return this.J.originalReplaceState},Ln:function(){this.J.originalPushState||(this.J.originalPushState=i.bind(o.getGlobal("history").pushState,o.getGlobal("history")))},Vn:function(){this.J.originalReplaceState||(this.J.originalReplaceState=i.bind(o.getGlobal("history").replaceState,o.getGlobal("history")))}}},9973:function(n,t,e){var i=e(9524),r=e(7913);n.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.hn),this.on(r.SET_INTEGRATION_SETTINGS,this.Fn)},hn:function(n){i.isEmpty(n.data.integrationSettings)||(i.each(n.data.integrationSettings,i.bind((function(n){this.J[n.id]=n}),this)),this.emitChange())},Fn:function(n){var t=this.J[n.id];t?i.extend(t,n):this.J[n.id]=n},getAll:function(){return i.cloneDeep(i.values(this.J))},get:function(n){return i.cloneDeep(this.J[n])},getReference:function(n){return this.J[n]}}},6895:function(n,t,e){var i=e(9524),r=e(7913),o=e(8507),a="*";n.exports={initialize:function(){this.J={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.Un),this.on(r.RECORD_LAYER_DECISION,this.zn),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.Bn)},getLayerState:function(n,t){if(this.J[n]){var e=this.J[n];if(i.keys(e).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(e,{pageId:t})):i.cloneDeep(e["*"])}},getLayerStates:function(n){var t=[];for(var e in this.J)i.forEach(this.J[e],(function(e){(i.isUndefined(n)||e.namespace===n)&&t.push(i.cloneDeep(e))}));return t},getLayerStatesForAnalytics:function(){var n=[];for(var t in this.J)i.forEach(this.J[t],(function(t){n.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return n},Un:function(n){n.merge||(this.J={}),i.each(n.layerStates,i.bind((function(n){var t=n.layerId;n.pageId||(n.pageId=n.viewId);var e=n.pageId||a,r=this.J[t];if(i.isUndefined(r))this.J[t]={},this.J[t][e]=n;else{var o=r[e];(!o||n.decisionTimestamp>(o.decisionTimestamp||0))&&(this.J[t][e]=n)}}),this)),this.emitChange()},zn:function(n){var t={layerId:n.layerId,revision:n.revision,namespace:n.namespace,pageId:n.pageId,decisionTicket:n.decisionTicket,decision:n.decision,decisionActivationId:n.activationId,decisionTimestamp:n.timestamp,decisionEventId:null},e=this.J[n.layerId]||{};n.pageId?(delete e["*"],e[n.pageId]=t):(e={})["*"]=t,this.J[n.layerId]=e,this.emitChange()},Bn:function(n){var t=n.layerId,e=n.pageId||a;this.J[t]?this.J[t][e]?(this.J[t][e].decisionEventId=n.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",t)}}},3546:function(n,t,e){var i=e(9524),r=e(7913),o=e(5761),a=e(8073);n.exports={initialize:function(){this.J={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.hn)},hn:function(n){if(!i.isEmpty(n.data.layers)){var t=this;i.each(n.data.layers,(function(n){i.each(n.experiments,(function(e){n.pageIds||(n.pageIds=n.viewIds),e.campaignName||a.isSingleExperimentPolicy(n.policy)?a.isSingleExperimentPolicy(n.policy)&&n.groupId&&(e.groupId=n.groupId):e.campaignName=n.name,i.each(e.variations,(function(n){i.each(n.actions,(function(n){n.pageId||(n.pageId=n.viewId)})),t.J.variations[n.id]=n})),t.J.experiments[e.id]=e})),o.deepFreeze(n),t.J.layers[n.id]=n})),this.emitChange()}},getAll:function(){return o.safeReference(i.values(this.J.layers))},getCampaignsMap:function(){return o.safeReference(this.J.layers)},getExperimentsMap:function(){return o.safeReference(this.J.experiments)},getVariationsMap:function(){return o.safeReference(this.J.variations)},getCount:function(){return i.keys(this.J.layers).length},getAllByPageIds:function(n){return o.safeReference(i.filter(this.J.layers,(function(t){return i.some(n,i.partial(i.includes,t.pageIds))})))},get:function(n){return o.safeReference(this.J.layers[n])},getLayerByExperimentId:function(n){var t=i.find(this.J.layers,(function(t){return i.find(t.experiments,{id:n})}));return o.safeReference(t)},getExperimentByVariationId:function(n){var t;return i.some(this.J.layers,(function(e){return i.some(e.experiments,(function(e){return i.find(e.variations,{id:n})&&(t=e),t})),t})),o.safeReference(t)}}},4478:function(n,t,e){var i=e(7913);n.exports={initialize:function(){this.J={logs:[]},this.on(i.LOG,this.Gn)},getLogs:function(){return this.J.logs},Gn:function(n){this.J.logs.push(n),this.emitChange()},nn:function(){return this.J.logs.slice()}}},1575:function(n,t,e){var i=e(7913),r=e(5761);n.exports={initialize:function(){this.J={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.jn),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.qn)},get:function(){return r.safeReference(this.J.data)},hasTracked:function(){return this.J.hasTracked},jn:function(n){r.deepFreeze(n),this.J.data=n,this.J.hasTracked=!1,this.emitChange()},qn:function(){this.J.hasTracked=!0}}},7368:function(n,t,e){var i=e(9524),r=e(7913),o=e(5516);n.exports={initialize:function(){this.J={},this.on(r.SET_PENDING_EVENT,this.Hn),this.on(r.REMOVE_PENDING_EVENT,this.Yn),this.on(r.LOAD_PENDING_EVENTS,this.Kn)},getEvents:function(){return this.J},getEventsString:function(){return o.stringify(this.J)},Hn:function(n){i.keys(this.J).length>=1e3&&this.$n();var t=n.id,e=n.retryCount;this.J[t]&&this.J[t].retryCount===e||(this.J[t]={id:t,timeStamp:n.timeStamp,data:n.data,retryCount:e},this.emitChange())},Yn:function(n){delete this.J[n.id],this.emitChange()},Kn:function(n){this.J=n.events,this.$n(),this.emitChange()},$n:function(){for(var n=i.sortBy(this.J,"timeStamp"),t=0;t<=n.length-1e3;t++)delete this.J[n[t].id];this.emitChange()}}},4837:function(n,t,e){var i=e(9524),r=e(7913);n.exports={initialize:function(){this.J={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.jn)},isExpectingRedirect:function(){return i.isString(this.J.layerId)},getLayerId:function(){return this.J.layerId},jn:function(n){this.isExpectingRedirect()||(this.J.layerId=n.layerId,this.emitChange())}}},9640:function(n,t,e){var i=e(9524),r=e(7913),o=e(2883);n.exports={initialize:function(){this.J={},this.J[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Wn)},Wn:function(n){i.isUndefined(this.J[o.PerformanceData.performance_marks][n.name])&&(this.J[o.PerformanceData.performance_marks][n.name]=[]),this.J[o.PerformanceData.performance_marks][n.name].push(n.data),this.emitChange()},getMarks:function(){return i.mapValues(this.J[o.PerformanceData.performance_marks],(function(n){return i.map(n,(function(n){return[n.startTime,n.duration]}))}))},getDurationsFor:function(n){return i.reduce(n,i.bind((function(n,t){var e=this.J[o.PerformanceData.performance_marks][t];return e&&(n[t]=Math.round(i.reduce(e,(function(n,t){return n+t.duration}),0))),n}),this),{})}}},5571:function(n,t,e){var i=e(9524),r=e(7913),o=e(2883),a=e(8507);n.exports={initialize:function(){this.J=i.mapValues(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Xn)},Xn:function(n){var t=n.type,e=n.name,i=n.plugin;if(!t||!e)throw new Error("Missing information needed to register plugins: "+t+":"+e);if(!this.J[t])throw new Error("Invalid plugin type specified: "+t);this.J[t][e]=i,a.debug("Plugin Store: Registering Plugin :",n)},getAllPlugins:function(n){if(n){if(this.J[n])return this.J[n];throw new Error("Invalid plugin type: "+n)}return this.J},getPlugin:function(n,t){if(!t||!n)throw new Error("Missing plugin parameters");return this.getAllPlugins(n)[t]||null}}},5499:function(n,t,e){var i=e(9524),r=e(7913),o=e(9299);n.exports={initialize:function(){this.J={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.Jn)},getPendingAttributeValue:function(n){return n=i.isArray(n)?n.concat("pending"):[n,"pending"],o.getFieldValue(this.J,n)},Jn:function(n){o.setFieldValue(this.J,n.key,{pending:n.pending}),this.emitChange()}}},9391:function(n,t,e){var i=e(9524),r=e(7913);n.exports={initialize:function(){this.J={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.Qn),this.on(r.RECORD_API_USAGE,this.Zn),this.on(r.INITIALIZE_CHANGE_METRICS,this.nt),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.tt),this.on(r.RECORD_AUDIENCE_USAGE,this.et),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.it),this.on(r.RECORD_CHANGE_OVERHEATED,this.rt),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.ot),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.ut),this.on(r.RECORD_INTEGRATION_USAGE,this.st),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.ct),this.on(r.RECORD_LAYER_POLICY_USAGE,this.ft),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.dt),this.on(r.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.vt),this.on(r.RECORD_VISITOR_ID_LOCATOR_USAGE,this.ht),this.on(r.RECORD_VISITOR_ID_ERROR,this._t),this.on(r.RECORD_STICKY_BUCKETING_FEATURE,this.wt)},Qn:function(n){i.merge(this.J,n),this.emitChange()},Zn:function(n){this.J.apis[n.methodName]||(this.J.apis[n.methodName]=0),this.J.apis[n.methodName]++,this.emitChange()},nt:function(){i.isUndefined(this.J.data.extras.changeMacrotaskRate)&&(this.J.data.extras.changeMacrotaskRate=0),i.isUndefined(this.J.data.extras.numOverheatedChanges)&&(this.J.data.extras.numOverheatedChanges=0)},it:function(n){i.isUndefined(this.J.data.extras.changeMacrotaskRate)&&(this.J.data.extras.changeMacrotaskRate=0),n.changeMacrotaskRate>this.J.data.extras.changeMacrotaskRate&&(this.J.data.extras.changeMacrotaskRate=n.changeMacrotaskRate),this.emitChange()},rt:function(){i.isUndefined(this.J.data.extras.numOverheatedChanges)&&(this.J.data.extras.numOverheatedChanges=0),this.J.data.extras.numOverheatedChanges++,this.emitChange()},ut:function(n){this.J.DOMObservation[n.counterName]||(this.J.DOMObservation[n.counterName]=0),this.J.DOMObservation[n.counterName]++,this.emitChange()},yt:function(n,t,e){i.isUndefined(this.J.featuresNeeded[n])&&(this.J.featuresNeeded[n]={});var r=this.J.featuresNeeded[n];i.each(t,(function(n){r[n]||(r[n]={}),r[n][e]||(r[n][e]=!0)}))},st:function(n){this.yt("integrations",n.integrations,n.layerId)},ot:function(n){this.yt("changeTypes",n.changeTypes,n.layerId)},tt:function(n){this.yt("activationTypes",[n.activationType],n.entityId),this.emitChange()},dt:function(n){this.yt("viewFeatures",n.featuresUsed,n.entityId),this.emitChange()},ct:function(n){this.yt("layerFeatures",[n.feature],n.entityId),this.emitChange()},ft:function(n){this.yt("policy",[n.policy],n.layerId),this.emitChange()},et:function(n){this.yt("audiences",n.audienceTypes,n.layerId),this.emitChange()},vt:function(n){this.J.data.extras.viewsInitiallyActivatedCount=n.viewsInitiallyActivatedCount,this.emitChange()},ht:function(n){this.yt("visitorIdLocatorType",[n.visitorIdLocatorType],n.entityId),this.emitChange()},_t:function(n){this.J.data.extras.errorCustomVisitorId=n.isError,this.emitChange()},wt:function(n){this.yt("stickyBucketing",[n.feature],n.id)},getSampleRum:function(){return this.J.inRumSample},getRumId:function(){return this.J.id},getRumHost:function(){return this.J.RumHost},getApiData:function(){return this.J.apis},getDOMObservationData:function(){return this.J.DOMObservation},getRumData:function(){return i.cloneDeep(this.J.data)},getScriptSrc:function(){return this.J.src},getFeaturesNeededData:function(){var n=this.J.featuresNeeded,t={};return i.forOwn(n,(function(n,e){var r=i.keys(n);i.isEmpty(r)||(t[e]={}),i.forEach(r,(function(r){t[e][r]=i.keys(n[r]).length}))})),t}}},602:function(n,t,e){var i=e(7913);n.exports={initialize:function(){this.J={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.Et)},Et:function(n){if(!n.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.J.natives=n.sandboxedFunctions,this.J.initialized=!0,this.emitChange()},getAll:function(){return this.J.natives},get:function(n){if(!n)throw new Error("Missing name parameter");return this.J.natives[n]||null},isInitialized:function(){return this.J.initialized}}},2150:function(n,t,e){var i=e(9524),r=e(7913),o=e(7649),a=e(2827);n.exports={initialize:function(){this.J={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.bt),this.on(r.LOAD_SESSION_STATE,this.It)},getState:function(){return i.cloneDeep(this.J)},getSessionId:function(){return this.J.sessionId},It:function(n){this.J.sessionId=n.sessionId,this.J.lastSessionTimestamp=n.lastSessionTimestamp,this.emitChange()},bt:function(){var n=o.now(),t=this.J.lastSessionTimestamp;(!this.J.sessionId||n-t>18e5)&&(this.J.sessionId=a.generate()),this.J.lastSessionTimestamp=n,this.emitChange()}}},4667:function(n,t,e){var i=e(9524),r=e(7913);n.exports={initialize:function(){this.At(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.Tt),this.on(r.REGISTER_PREVIOUS_BATCH,this.St),this.on(r.REGISTER_TRACKER_VISITOR,this.Rt),this.on(r.REGISTER_TRACKER_EVENT,this.kt),this.on(r.REGISTER_TRACKER_DECISION,this.Nt),this.on(r.RESET_TRACKER_EVENTS,this.Dt),this.on(r.RESET_TRACKER_STORE,this.At),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.Ct),this.on(r.SET_TRACKER_POLLING,this.Ot),this.on(r.SET_TRACKER_BATCHING,this.xt),this.on(r.SET_TRACKER_SEND_EVENTS,this.Pt),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Mt),this.on(r.SET_TRACKER_DIRTY,this.Lt),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Vt)},getPersistableState:function(){return this.J.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.J.data,decisions:this.J.decisions,decisionEvents:this.J.decisionEvents,previousBatches:this.J.previousBatches}:{}:null},Mt:function(n){i.isEmpty(this.J.data)||i.isEmpty(n.data)||(this.Tt(),this.J.previousBatches.push(this.getEventBatch())),this.J.data=n.data||{},this.J.decisions=n.decisions||[],this.J.decisionEvents=n.decisionEvents||[],i.isEmpty(this.J.previousBatches)||i.isEmpty(n.previousBatches)?this.J.previousBatches=n.previousBatches||[]:this.J.previousBatches=this.J.previousBatches.concat(n.previousBatches),this.emitChange()},Lt:function(n){this.J.isDirty=n,this.emitChange()},kt:function(n){var t=this.Ft();!i.isEmpty(t.snapshots)&&i.isEmpty(this.J.decisionEvents)||this.Ut(),this.zt().events.push(n.event),this.J.decisions=n.decisions,this.Lt(!0)},Nt:function(n){this.J.decisionEvents.push(n.decisionEvent),this.J.decisions=n.decisions,this.Lt(!0)},Rt:function(n){i.isEmpty(this.J.data)?this.J.data=n.data:this.Tt(),this.J.data.visitors.push(n.visitor),this.J.decisions=n.decisions,this.J.decisionEvents=[],this.Lt(!0)},St:function(n){this.J.previousBatches.push(n),this.Lt(!0)},At:function(){this.J={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Dt:function(){var n=this.Ft();this.J.data.visitors=[n],n.snapshots=[],this.Lt(!0)},Ct:function(){this.J.previousBatches=[],this.Lt(!0)},Ot:function(n){this.J.polling=n,this.emitChange()},xt:function(n){this.J.shouldBatch=n,this.emitChange()},Pt:function(n){this.J.canSend=n,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.J.data)},getPreviousBatches:function(){return i.cloneDeep(this.J.previousBatches)},Bt:function(){return this.J.decisionEvents.slice()},Gt:function(){this.J.decisionEvents=[]},jt:function(){return this.J.decisions.slice()},isPolling:function(){return this.J.polling},shouldBatch:function(){return this.J.shouldBatch},zt:function(){return i.last(this.Ft().snapshots)},Ft:function(){return i.last(this.J.data.visitors)},Ut:function(){var n=this.Bt();this.Ft().snapshots.push({decisions:this.jt(),events:n}),this.Gt(),this.Lt(!0)},Tt:function(){this.J.decisionEvents.length>0&&this.Ut()},hasEventsToSend:function(){if(!i.isEmpty(this.J.decisionEvents))return!0;if(!i.isEmpty(this.J.data)&&i.some(this.J.data.visitors||[],(function(n){return n.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.J.previousBatches)},canSend:function(){return this.J.canSend},Vt:function(n){var t=this.Ft();t&&(t.attributes=n.attributes)}}},5233:function(n,t,e){var i=e(9524),r=e(7913);n.exports={initialize:function(){this.J={},this.on(r.SET_UA_DATA,this.hn)},hn:function(n){i.isEmpty(this.J)&&(this.J=n.data)},get:function(){return i.cloneDeep(this.J)}}},1521:function(n,t,e){var i=e(9524),r=e(7913),o=e(8507),a={globalTags:{},viewStates:{},shouldBatch:!1};n.exports={initialize:function(){this.J=i.cloneDeep(a),this.on(r.REGISTER_VIEWS,this.qt),this.on(r.SET_VIEW_ACTIVE_STATE,this.Ht),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Yt),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.Kt),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.$t),this.on(r.SET_GLOBAL_TAGS,this.Wt),this.on(r.RESET_VIEW_STATES,this.Xt),this.on(r.SET_VIEW_BATCHING,this.xt)},getAll:function(){var n={};for(var t in this.J.viewStates)n[t]=this.getViewState(t);return n},shouldBatch:function(){return this.J.shouldBatch},getViewState:function(n){var t=i.cloneDeep(this.J.viewStates[n]),e=this.J.globalTags;return t.metadata=i.extend({},t.parsedMetadata,e,t.userSuppliedMetadata),t},getActiveViewTags:function(){var n=this.getActiveViewStates(),t=i.map(n,(function(n){return n.metadata})),e=[{}].concat(t);return i.extend.apply(i,e)},getActivationEventId:function(n){return this.J.viewStates[n]?this.J.viewStates[n].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.J.viewStates,i.bind((function(n,t,e){return this.isViewActive(e)&&n.push(this.getViewState(e)),n}),this),[])},isViewActive:function(n){var t=this.J.viewStates[n];return t||o.warn("No Page registered with id",n),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.J.globalTags)},Xt:function(){this.J.viewStates={},this.emitChange()},qt:function(n){i.each(n.views,i.bind((function(n){var t=n.id;this.J.viewStates[t]={id:t,isActive:i.isBoolean(n.isActive)?n.isActive:null,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}),this)),this.emitChange()},Ht:function(n){var t=n.view.id;if(!this.J.viewStates[t])throw new Error("No view exists with id "+t);this.J.viewStates[t].isActive=n.isActive,n.isActive?this.J.viewStates[t].activatedTimestamp=n.timestamp:(this.J.viewStates[t].parsedMetadata={},this.J.viewStates[t].userSuppliedMetadata={}),this.emitChange()},Yt:function(n){var t=n.pageId;if(!this.J.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.J.viewStates[t].parsedMetadata,n.metadata),this.emitChange()},Kt:function(n){var t=n.pageId;if(!this.J.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.J.viewStates[t].userSuppliedMetadata,n.metadata),this.emitChange()},$t:function(n){var t=n.pageId;this.J.viewStates[t]&&(this.J.viewStates[t].activationEventId=n.eventData.eventId,this.emitChange())},Wt:function(n){i.extend(this.J.globalTags,n),this.emitChange()},xt:function(n){this.J.shouldBatch=n,this.emitChange()}}},6163:function(n,t,e){var i=e(9524),r=e(7913),o=e(5761);n.exports={initialize:function(){this.J={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.hn)},getAll:function(){return o.safeReference(i.values(this.J.views))},getPagesMap:function(){return o.safeReference(this.J.views)},get:function(n){return o.safeReference(this.J.views[n])},getByApiName:function(n){return o.safeReference(this.J.apiNamesToViews[n])},apiNameToId:function(n){var t=this.J.apiNamesToViews[n];if(t)return t.id},idToApiName:function(n){var t=this.J.views[n];if(t)return t.apiName},getNumberOfPages:function(){return i.keys(this.J.views).length},getAllViewsForActivationType:function(n){return i.filter(this.J.views,{activationType:n})},hn:function(n){i.isEmpty(n.data.views)||(i.each(n.data.views,i.bind((function(n){o.deepFreeze(n),this.J.views[n.id]=n,this.J.apiNamesToViews[n.apiName]=n}),this)),this.emitChange())}}},7964:function(n,t,e){var i=e(9524),r=e(7913),o=e(9299);n.exports={initialize:function(){this.J={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Jt),this.on(r.SET_VISITOR_ATTRIBUTES,this.Qt),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.Zt)},getVisitorProfile:function(){return this.J.profile},getVisitorProfileMetadata:function(){return this.J.metadata},getAttribute:function(n){var t=this.J.profile;return i.cloneDeep(o.getFieldValue(t,n))},getAttributeMetadata:function(n){return i.cloneDeep(this.J.metadata[n])},getVisitorIdFromAPI:function(){return this.J.visitorId},Zt:function(n){this.J.profile=n.profile,this.J.metadata=n.metadata,this.emitChange()},Qt:function(n){i.each(n.attributes,i.bind((function(n){var t=n.key;o.setFieldValue(this.J.profile,t,n.value),n.metadata&&i.forOwn(n.metadata,i.bind((function(n,e){o.setFieldValue(this.J.metadata,t.concat(e),n)}),this))}),this)),this.emitChange()},Jt:function(n){this.J.visitorId=n,this.emitChange()}}},9574:function(n,t,e){var i=e(9524),r=e(7913);n.exports={initialize:function(){this.J={},this.on(r.DATA_LOADED,this.ne)},getCustomBehavioralAttributes:function(){return i.filter(this.J,(function(n){return!!n.rule_json}))},getVisitorAttribute:function(n){var t=i.values(this.J);if(n.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(n.datasourceId)})),n.attributeName&&n.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(n.attributeId){var e=this.J[n.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+n.attributeId);return e}if(n.attributeName){var r=i.filter(t,{name:n.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+n.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+n.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},ne:function(n){i.isEmpty(n.data.visitorAttributes)||(i.each(n.data.visitorAttributes,i.bind((function(n){this.J[n.id]=n}),this)),this.emitChange())}}},9807:function(n,t,e){var i=e(9524),r=e(7913),o=e(5516);n.exports={initialize:function(){this.J={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.te),this.on(r.MERGE_VARIATION_ID_MAP,this.ee),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.re),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.oe)},getVariationIdMap:function(){return i.cloneDeep(this.J.variationIdMap)},getVariationIdMapString:function(){return o.stringify(this.J.variationIdMap)},te:function(n){var t=this.J.variationIdMap[n.layerId]||{};t[n.experimentId]!==n.variationId&&(t[n.experimentId]=n.variationId,this.J.variationIdMap[n.layerId]=t,this.emitChange())},ee:function(n){var t=this.getVariationIdMap(),e=n.variationIdMap;i.each(t||{},(function(n,t){e[t]?i.assign(e[t],n):e[t]=n})),this.J.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.J.preferredLayerMap)},getPreferredLayerMapString:function(){return o.stringify(this.J.preferredLayerMap)},getPreferredLayerId:function(n){return this.J.preferredLayerMap[n]},re:function(n){this.J.preferredLayerMap[n.groupId]!==n.layerId&&(this.J.preferredLayerMap[n.groupId]=n.layerId,this.emitChange())},oe:function(n){var t=this.getPreferredLayerMap(),e=n.preferredLayerMap;i.assign(e,t),this.J.preferredLayerMap=e,this.emitChange()}}},3820:function(n,t,e){e(9524);var i=e(7913);e(6699).j;n.exports={initialize:function(){this.J={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.hn),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.ae),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.ue)},getEvents:function(){return this.J.events},getForeignEvents:function(){return this.J.foreignEvents},getForeignEventQueues:function(){return this.J.foreignEventQueues},hn:function(n){this.J.events=n,this.emitChange()},ae:function(n){this.J.foreignEvents[n.key]=n.value},ue:function(n){this.J.foreignEventQueues[n.key]=n.value}}},95:function(n,t,e){var i=e(7913);n.exports={initialize:function(){this.J={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.se)},getBaseMap:function(){return this.J.baseMap},getEventQueue:function(){return this.J.eventQueue},getLastEvent:function(){return this.J.lastEvent},getCleared:function(){return this.J.cleared},getInitialized:function(){return this.J.initialized},se:function(n){this.J[n.key]=n.value}}},7311:function(n,t,e){var i=e(9524),r=e(7913);n.exports={initialize:function(){this.J={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.hn),this.on(r.DATA_LOADED,this.ce)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.J.randomId},getVisitorIdLocator:function(){return this.J.visitorIdLocator},hn:function(n){i.extend(this.J,n),this.emitChange()},ce:function(n){i.isEmpty(n.data.visitorIdLocator)||(this.J.visitorIdLocator=n.data.visitorIdLocator,this.emitChange())}}},6018:function(n,t,e){var i=e(9524),r=e(8507),o=e(7913);n.exports={initialize:function(){this.J={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.fe),this.on(o.XDOMAIN_ADD_FRAME,this.le),this.on(o.XDOMAIN_SET_MESSAGE,this.de),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this.ve),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.he),this.on(o.XDOMAIN_SET_DISABLED,this.pe)},getMessages:function(){return i.cloneDeep(this.J.messages)},getOffset:function(){return 0===this.J.messages.length?0:this.J.messages[0].data.id},getNextMessageId:function(){return this.J.messages.length+this.getOffset()},getMessageById:function(n){return this.J.messages[n-this.getOffset()]},getSubscribers:function(){return this.J.subscribers},getFrames:function(){return this.J.frames},getNextFrameId:function(){return this.J.frames.length},getDefaultFrame:function(){return this.J.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.J.canonicalOrigins)},isDisabled:function(){return this.J.disabled},fe:function(n){this.J.defaultFrame=n},le:function(n){this.J.frames.push(n)},de:function(n){for(this.J.messages[n.messageId-this.getOffset()]=n.message;this.J.messages.length>1e3;){var t=this.J.messages.shift();r.debug("XDomainStorage: Cleared old message: "+t.data.id)}},ve:function(n){this.J.subscribers.push(n.subscriber)},he:function(n){this.J.canonicalOrigins=n.canonicalOrigins},pe:function(n){this.J.disabled=n.disabled}}},3757:function(n,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},6351:function(n,t,e){var i=e(4623).U;t.Error=i("TagError")},6016:function(n,t,e){var i=e(2883).PluginTypes,r=e(1731).get("stores/plugins");t.getTagValue=function(n){var e=r.getPlugin(i.viewTagLocators,n.locatorType);if(!e)throw new t.Error("No locator registered for tag locatorType: "+n.locatorType);return e(n)},t.enums=e(3757),t.Error=e(6351).Error},3944:function(n,t,e){var i=e(7913),r=e(3162),o=e(5575).Promise,a=e(1731).get("stores/async_request");t.makeAsyncRequest=function(n,t){var e,u,s=a.getPromise(n);if(s)return s;var c=new o((function(n,t){e=n,u=t}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:n,promise:c,resolver:e,rejecter:u}),t&&t(),c},t.resolveRequest=function(n,t){r.dispatch(i.RESOLVE_DEFERRED,{source:n,resolveWith:t})},t.rejectRequest=function(n,t){r.dispatch(i.REJECT_DEFERRED,{source:n,rejectWith:t})}},3624:function(n,t,e){var i=e(6750),r=e(9031);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}},3109:function(n,t,e){var i=e(9524),r=e(4623).U,o=e(7649),a=e(4011),u=e(9031),s=e(7913),c=e(1731),f=e(3162),l=c.get("stores/cookie_options"),d=t.SetError=r("CookieSetError"),v=t.MismatchError=r("CookieMismatchError");t.getAll=function(n){var e,r,o,u,s;i.isUndefined(n)&&(n=!0),e=a.getCookieString().split(/\s*;\s*/);var c={};for(o=0;o<e.length;o++)if((u=(r=e[o]).indexOf("="))>0&&c[s=t.safeDecodeURIComponent(r.substring(0,u))]===undefined){var f=r.substring(u+1);n&&(f=t.safeDecodeURIComponent(f)),c[s]=f}return c},t.safeDecodeURIComponent=function(n){try{return decodeURIComponent(n)}catch(t){return n}},t.get=function(n,e){return t.getAll(e)[n]},t.set=function(n,e,r,c){r=i.extend({encodeValue:!0},r),!1!==c&&(c=!0);var g=[];if(i.isUndefined(r.domain)){var m=l.getCurrentDomain();m||(m=function(n,e){!1!==e&&(e=!0);for(var r,o,a=n.hostname.split("."),u=[],c=null,l=a.length-1;l>=0;l--)if(u.unshift(a[l]),r=u.join("."),!i.includes(h,r)){o={domain:e?"."+r:r};try{t.set(p,Math.random().toString(),o),t.remove(p,o),c=o.domain;break}catch(d){}}return f.dispatch(s.SET_COOKIE_DOMAIN,c),c}(u.getLocation(),!0)),r.domain=m}if(r.domain&&g.push("domain="+r.domain),i.isUndefined(r.path)&&(r.path="/"),r.path&&g.push("path="+r.path),i.isUndefined(r.expires)){var _=i.isUndefined(r.maxAge)?l.getDefaultAgeInSeconds():r.maxAge;r.expires=new Date(o.now()+1e3*_)}if(i.isUndefined(r.expires)||g.push("expires="+r.expires.toUTCString()),r.secure&&g.push("secure"),g=g.join(";"),a.setCookie(n+"="+(r.encodeValue?encodeURIComponent(e):e)+";"+g),c){var w=r.encodeValue,y=t.get(n,w);if(y!==e){if(!y)throw new d('Failed to set cookie "'+n+'"');throw new v('Expected "'+e+'" for "'+n+'", got "'+y+'"')}}},t.remove=function(n,e){for(var r=u.getLocation().hostname.split(".");r.length>0;)t.set(n,null,i.extend({},e,{domain:"."+r.join("."),expires:new Date(0)}),!1),r.shift()};var h=["optimizely.test"],p="optimizelyDomainTestCookie"},4623:function(n,t,e){var i=e(4558),r=i("InternalError");t.G=r,t.U=function(n){return i(n,r)}},3801:function(n,t,e){var i=e(9524),r=e(5575).Promise;n.exports=function(){var n,t,e=new r((function(e,i){n=e,t=i}));return e.resolve=function(){return n.apply(null,i.toArray(arguments)),e},e.reject=function(){return t.apply(null,i.toArray(arguments)),e},e}},5761:function(n,t,e){var i=e(9524);t.deepFreeze=function(n){},t.safeReference=function(n){return i.cloneDeep(n)}},9299:function(n,t,e){var i=e(9524);t.getFieldValue=function(n,t){i.isArray(t)||(t=[t]);for(var e=n,r=0;r<t.length;r++){var o=t[r];if(!i.isObject(e)||!e.hasOwnProperty(o))return;e=e[o]}return e},t.setFieldValue=function(n,t,e){if(!i.isArray(t)||i.isEmpty(t))throw new Error("Attempted to set an invalid key path: "+t);for(var r=n,o=0;o<t.length-1;o++){var a=t[o];i.isObject(r[a])||(r[a]={}),r=r[a]}r[t[t.length-1]]=e}},8507:function(n,t,e){var i=e(9524),r=e(7913),o=e(7649),a=e(2883),u=e(3162),s=e(5516);function c(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}c.prototype.ge=function(){return!i.isNull(this.logLevel)},c.prototype.setLogLevel=function(n){var t=this.me(n);null===t?console.error("Unknown log level: "+n):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},c.prototype.setLogMatcher=function(n){i.isString(n)?this.logMatcher=n:this.logMatcher="",this.logGroup=0},c.prototype.shouldLog=function(n){return this.ge()&&this.logLevel>=n},c.prototype.matchesLogMessage=function(n,t){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===n?this.logGroup++:"GROUPEND"===n&&this.logGroup--,!0;var r=i.some(t,(function(n){if(!i.isString(n))try{n=s.stringify(n)}catch(t){}return i.isString(n)&&i.includes(n,e)}));return r&&"GROUPSTART"===n&&this.logGroup++,r},c.prototype.storeLog=function(n,t){var e={logLevel:n,logMessage:t};u.dispatch(r.LOG,e)},c.prototype.flush=function(){var n=e(1731).get("stores/log");this.logGroup=0;var t=n.getLogs();i.each(t,i.bind((function(n){this._e(n.logLevel,n.logMessage,!0)}),this))},c.prototype._e=function(n,t,e){var r,o=n;if(console)switch(n){case"GROUPSTART":r=console.groupCollapsed,o=a.LogLevel.DEBUG;break;case"GROUPEND":r=console.groupEnd,o=a.LogLevel.DEBUG;break;case a.LogLevel.ERROR:r=console.error;break;case a.LogLevel.WARN:r=console.warn;break;case a.LogLevel.DEBUG:r=console.debug;break;default:r=console.log}try{e||this.ge()&&!this.shouldLog(o)||(i.isArray(t)&&i.isString(t[0])&&(t=this.we(t)),this.storeLog(n,t)),r&&this.shouldLog(o)&&this.matchesLogMessage(n,t)&&r.apply(console,t)}catch(u){console&&(console.error?console.error(u):console.log(u))}},c.prototype.debug=function(){this._e(a.LogLevel.DEBUG,[].slice.call(arguments))},c.prototype.log=function(){this._e(a.LogLevel.INFO,[].slice.call(arguments))},c.prototype.logAlways=function(){var n=this.we([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,n),this.storeLog(a.LogLevel.INFO,n)},c.prototype.warn=function(){this._e(a.LogLevel.WARN,[].slice.call(arguments))},c.prototype.error=function(n){var t=[].slice.call(arguments);1===t.length&&n.stack?(this._e(a.LogLevel.ERROR,[this.ye(),n]),this._e(a.LogLevel.INFO,[n.stack])):this._e(a.LogLevel.ERROR,t)},c.prototype.groupCollapsed=function(){this._e("GROUPSTART",[].slice.call(arguments))},c.prototype.groupEnd=function(){this._e("GROUPEND",[].slice.call(arguments))},c.prototype.we=function(n){var t=this.ye().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+n[0]].concat(n.slice(1))},c.prototype.ye=function(){return this.timebase?o.now()-this.timebase:0},c.prototype.me=function(n){return n&&("TRUE"===(n=n.toUpperCase())&&(n="INFO"),"FALSE"===n&&(n="OFF"),"ALL"===n&&(n="DEBUG"),!i.isUndefined(a.LogLevel[n]))?a.LogLevel[n]:null},n.exports=new c},6217:function(n,t,e){n.exports=e(5036)},8073:function(n,t){t.isSingleExperimentPolicy=function(n){return"single_experiment"===n||"multivariate"===n}},94:function(n,t,e){var i=e(9524),r=e(5575).Promise,o=e(9031);t.pollFor=function(n,t,e){var a,u;return i.isFunction(e)?u=e:(a=e||100,u=function(){return--a<-1}),t=t||50,new r((function(e,i){!function r(){var a;if(!u()){try{var s=n();if(s)return e(s)}catch(c){a=c}return o.setTimeout(r,t)}i(a||new Error("Poll timed out"))}()}))}},5740:function(n,t,e){var i=e(9524),r=e(5575).Promise;t.firstToResolve=function(n){return new r((function(t){i.each(n,(function(n){r.resolve(n).then(t,(function(){}))}))}))}},6750:function(n,t,e){var i=e(9524),r=e(9031);t.getQueryParams=function(){var n=r.getLocationSearch()||"";if(0===n.indexOf("?")&&(n=n.substring(1)),0===n.length)return[];for(var t=n.split("&"),e=[],i=0;i<t.length;i++){var o="",a="",u=t[i].split("=");u.length>0&&(o=u[0]),u.length>1&&(a=u[1]),e.push([o,a])}return e},t.getQueryParamValue=function(n){for(var e=t.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===n)return e[i][1];return undefined},t.queryStringFromMap=function(n){return i.map(n,(function(n,t){return t+"="+n})).join("&")}},2749:function(n,t,e){var i=e(9524),r=e(8507),o=e(9031);function a(n){this.windowLength=n,this.count=0,this.listeners={},this.isIncrementingTick=!1}a.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(i.bind((function(){this.isIncrementingTick=!1}),this),0))},a.prototype.increment=function(){this.count+=1,i.forEach(this.listeners[String(this.count)],(function(n){n()})),o.setTimeout(i.bind(this.decrement,this),this.windowLength)},a.prototype.decrement=function(){this.count-=1,this.count<0&&(r.warn("Decremented down to negative count: ",this.count),this.count=0)},a.prototype.addListener=function(n,t){this.listeners[n]||(this.listeners[n]=[]),this.listeners[n].push(t)},n.exports=a},898:function(n,t,e){var i=e(9524),r=e(1731).get("stores/observed_redirect");t.getReferrer=function(){var n=r.get();return n?n.referrer:null},t.getExperimentAndVariation=function(){var n=r.get();return n&&i.isString(n.variationId)?i.pick(n,["experimentId","variationId"]):null}},6625:function(n,t,e){var i=e(9524),r=e(7913),o=e(7649),a=e(1731),u=e(4011),s=e(2883),c=e(3162),f=e(8507),l=a.get("stores/sandbox"),d=e(9031);t.shouldSandbox=function(){return!1},t.get=function(n){if(!n)throw new Error("Name is required");if(t.shouldSandbox()){l.isInitialized()||v();var e=l.get(n);if(e)return e}return d.getGlobal(n)};var v=function(){try{var n="optimizely_"+o.now(),t=u.createElement("iframe");t.name=n,t.style.display="none",u.appendToHead(t);var e=t.contentWindow,a=t.contentDocument;a.write("<script><\/script>"),a.close();var l=i.mapValues(s.SandboxedFunctions,(function(n){return e[n]}));c.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l}),t.parentNode.removeChild(t)}catch(d){f.warn("Unable to create a sandbox: ",d)}}},5541:function(n,t,e){var i=e(4011),r=e(8507),o=e(812);t.addScriptAsync=function(n,t){var e=i.querySelector("head"),o=i.createElement("script");o.type="text/javascript",o.async=!0,o.src=n,t&&(o.onload=t),e.insertBefore(o,e.firstChild),r.debug("Asynchronously requesting "+n)},t.addScriptSync=function(n,e){try{var a="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==n.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+n);i.write('<script id="'+a+'" src="'+n+'"><\/script>');var u=i.querySelector("#"+a);if(!u)throw new Error("Document.write failed to append script");u.onload=e,u.onerror=function(i){r.warn("Failed to load script ("+n+") synchronously:",i),t.addScriptAsync(n,e)}}catch(s){r.debug("Document.write failed for "+n+": "+s.message);return o.request({url:n,async:!1,contentType:"text/plain",success:function(n){new Function(n.responseText)(),e&&e()}})["catch"]((function(i){r.error("Failed to load "+n+" via synchronous XHR: "+i.message),t.addScriptAsync(n,e)}))}}},1281:function(n,t,e){var i=e(5575).Promise,r=e(9031);t.makeTimeoutPromise=function(n){return new i((function(t,e){r.setTimeout((function(){e(new Error("Timed out after "+n+" ms"))}),n)}))}},8553:function(n,t,e){var i=e(9524),r=e(7702),o=e(9031),a=e(7913),u=e(1731),s=e(3162),c=u.get("stores/ua_data");t.get=function(){var n=c.get();return i.isEmpty(n)&&(n=r.parseUA(o.getUserAgent()),s.dispatch(a.SET_UA_DATA,{data:n})),n}},925:function(n,t){t.guessDomain=function(n,t){if(!n)return"";try{return t?n.match(/:\/\/(.[^/]+)/)[1]:n.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(e){return""}}},422:function(n,t,e){var i=e(9524),r=e(5575).Promise,o=e(7913),a=e(1731),u=e(3162),s=e(5315),c=e(4623).U,f=e(7649),l=e(4011),d=e(5516),v=e(94),h=e(3028),p=e(9031),g=e(8507),m=a.get("stores/xdomain"),_=t.Error=c("XDomainStorageError");function w(n){var t;if(i.find(m.getFrames(),{origin:n.origin})){try{t=d.parse(n.data)}catch(a){return void g.debug("XDomain","Ignoring malformed message event:",n)}if("ERROR"===t.type)u.dispatch(o.XDOMAIN_SET_DISABLED,{disabled:!0}),s.emitInternalError(new _("Xdomain Error: "+t.response));else if("SYNC"===t.type)i.each(m.getSubscribers(),(function(n){n(t.response.key,t.response.value)}));else{var e=m.getMessageById(t.id);if(!e){if(g.warn("XDomain","No stored message found for ID",t.id),i.isNumber(t.id)){var r=m.getNextMessageId();t.id>=r?s.emitInternalError(new _("Message ID is greater than expected maximum ID ("+t.id+">"+r+")")):t.id<0?s.emitInternalError(new _("Message ID is < 0: "+t.id)):s.emitInternalError(new _("No stored message found for message ID: "+t.id))}else s.emitInternalError(new _("Message ID is not a number: "+t.id));return}if(!e.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",t.id);e.resolver(t.response),u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:{data:{id:t.id,type:e.data.type,key:e.data.key},startTime:e.startTime,endTime:f.now()}})}}else g.debug("XDomain","No frame found for origin: "+n.origin)}function y(n,t){return t||(t=m.getDefaultFrame()),new r((function(e){var r={data:i.extend({},n,{id:m.getNextMessageId()}),resolver:e};t?m.isDisabled()||E(r,t):u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:r.data.id,message:r})}))}function E(n,t){var e=n.data;u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:n.data.id,message:i.extend({},n,{startTime:f.now()})}),t.target.postMessage(d.stringify(e),t.origin)}t.setItem=function(n,t,e){return y({type:"PUT",key:n,value:t},e)},t.getItem=function(n,t){return y({type:"GET",key:n},t)},t.fetchAll=function(n){return y({type:"GETALL"},n)},t.deleteData=function(n,t){return y({type:"DELETE",visitorId:n},t)},t.subscribe=function(n){u.dispatch(o.XDOMAIN_ADD_SUBSCRIBER,{subscriber:n})},t.loadIframe=function(n,t){return new r((function(e){var i=l.createElement("iframe");i.src=n+t,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:m.getNextFrameId(),target:i.contentWindow,origin:n,path:t};u.dispatch(o.XDOMAIN_ADD_FRAME,r),e(r)},l.appendTo(l.querySelector("body"),i)}))},t.getXDomainUserId=function(n,t){var e,r={},o=i.keys(n);return i.each(t,(function(n){r[n]=[],i.each(o,(function(t){var o=h.getUserIdFromKey(t,n);!e&&o&&(e=o),o&&!i.includes(r[n],o)&&r[n].push(o)}))})),g.debug("XDomain: Found userIds:",r),e},t.load=function(n,e){p.addEventListener("message",w);return v.pollFor((function(){return!!l.querySelector("body")})).then((function(){return t.loadIframe(n,e)})).then((function(n){u.dispatch(o.XDOMAIN_SET_DEFAULT_FRAME,n),m.isDisabled()||i.each(m.getMessages(),(function(t){t.startTime||E(t,n)}))}))}},812:function(n,t,e){var i=e(9524),r=e(7913),o=e(7649),a=e(3162),u=e(5516),s=e(8507),c=e(5575).Promise,f=e(6625);t.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},t.request=function(n){return n=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},n),new c((function(e,r){if(!t.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){n.success&&n.success(o),e(o)},o.onerror=function(){n.error&&n.error(o),r(o)},i.isObject(n.data)&&(n.data=u.stringify(n.data)),o.open(n.method,n.url,n.async),n.withCredentials&&(o.withCredentials=n.withCredentials),o.setRequestHeader("Content-Type",n.contentType),i.isObject(n.headers)&&i.forEach(n.headers,(function(n,t){o.setRequestHeader(t,n)})),o.send(n.data)}))},t.retryableRequest=function(n,e,u,f){if(!e)return c.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return c.reject(new Error("CORS is not supported."));i.isUndefined(f)&&(f=3),i.isUndefined(u)&&(u=0);var l={id:e,timeStamp:o.now(),data:n,retryCount:u};return a.dispatch(r.SET_PENDING_EVENT,l),s.debug("Sending event ",e),t.request(n).then((function(n){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),n}),(function(n){throw l.retryCount>=f?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),s.warn("Event ",l," could not be sent after ",f," attempts.")):(l.retryCount++,a.dispatch(r.SET_PENDING_EVENT,l),s.debug("Event ",l," failed to send, with error ",n," It will be retried ",f-u," times.")),n}))},t.sendBeacon=t.request},5968:function(n,t,e){var i=e(9524),r=e(7913),o=e(6704),a=e(1823),u=e(7649),s=e(1731),c=e(2883),f=e(677),l=e(3162),d=e(8507),v=e(6016),h=s.get("stores/event_data"),p=s.get("stores/plugins"),g=s.get("stores/rum"),m=s.get("stores/view"),_=s.get("stores/view_data");function w(n,t){i.forEach(n,(function(n){if(n.eventType!==f.CUSTOM){var e=p.getPlugin(c.PluginTypes.eventImplementations,n.eventType);e?t?e.attach(n):e.detach(n):d.warn("No implementation found for event type:",n.eventType,"needed for event:",n)}}))}t.parseViewTags=function(n){var e=t.evaluateViewTags(n);t.setParsedViewTags(n.id,e)},t.updateAllViewTags=function(){var n=m.getActiveViewStates();i.each(n,(function(n){var e=_.get(n.id);t.parseViewTags(e)}))},t.evaluateViewTags=function(n){return n.tags?i.reduce(n.tags,(function(n,t){try{n[t.apiName]=v.getTagValue(t)}catch(e){e instanceof v.Error?d.warn("Page / Ignoring unparseable tag",t,e):d.error(e)}return n}),{}):{}},t.createViewTicket=function(){var n={};return i.each(p.getAllPlugins(c.PluginTypes.viewProviders),(function(t){n[t.provides]=s.evaluate(t.getter)})),n},t.registerViews=function(n){l.dispatch(r.REGISTER_VIEWS,{views:n})},t.activateViaAPI=function(n,e){e&&t.setUserSuppliedViewTags(n.id,e),t.activateMultiple([n],e)},t.getViewsAndActivate=function(n){var e=_.getAllViewsForActivationType(n);t.activateMultiple(e)},t.activateMultiple=function(n,e){var a=[];return i.each(n,(function(n){var u=m.getViewState(n.id),s=t.createViewTicket();if(u.isActive)if(n.deactivationEnabled)try{t.hasValidStaticConditions(n,s)||t.deactivate(n)}catch(v){d.error("Page / Error evaluating whether to deactivate page ",t.description(n),v)}else d.log("Not activating Page, already active ",t.description(n));else{try{if(!t.hasValidStaticConditions(n,s))return i.isBoolean(u.isActive)||t.setViewActiveState(n,!1),void d.log("Page / Failed to match page conditions for "+t.description(n),n.staticConditions)}catch(v){return i.isBoolean(u.isActive)||t.setViewActiveState(n,!1),void d.error("Page / Error evaluating whether to activate page ",t.description(n),v)}if(a.push(n),t.setViewActiveState(n,!0),d.log("Activated Page",t.description(n)),o.emitViewActivated({view:n,metadata:e}),g.getSampleRum()){var f=n.activationType||c.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:f,entityId:n.id})}w(h.getByPageId(n.id),!0)}})),i.isEmpty(a)||o.emitViewsActivated({views:a}),a},t.deactivate=function(n){m.getViewState(n.id).isActive?(t.setViewActiveState(n,!1),d.log("Deactivated Page",t.description(n)),o.emitPageDeactivated({page:n}),w(h.getByPageId(n.id),!1)):d.log("Not deactivating Page, already inactive ",t.description(n))},t.setViewActiveState=function(n,t){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:n,timestamp:u.now(),isActive:t})},t.setGlobalTags=function(n){l.dispatch(r.SET_GLOBAL_TAGS,n)},t.setParsedViewTags=function(n,t){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:n,metadata:t})},t.setUserSuppliedViewTags=function(n,t){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:n,metadata:t})},t.hasValidStaticConditions=function(n,t){var e={};if(i.isEmpty(n.staticConditions))return!0;var o=p.getAllPlugins(c.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",n.staticConditions),d.debug("Matching to current value:",t);var u=a.evaluate(n.staticConditions,(function(n){var i=n.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[n.type]||(e[n.type]=!0)),r.match(t,n)}));return d.groupEnd(),g.getSampleRum()&&u&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:i.keys(e),entityId:n.id}),u},t.description=function(n){return'"'+n.name+'" ('+n.id+")"},t.isActivationTypeImmediate=function(n){return n===c.ViewActivationTypes.immediate||!n},t.shouldTriggerImmediately=function(n){return n===c.ViewActivationTypes.DOMChanged||n===c.ViewActivationTypes.URLChanged||n===c.ViewActivationTypes.immediate||!n},t.create=function(n,t){return{id:n,apiName:t,category:"other"}},t.createState=function(n){return{id:n,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},3028:function(n,t,e){var i,r=e(9524),o=e(3162),a=e(7913),u=e(3345),s=e(500),c=e(3109),f=e(7649),l=e(1731),d=e(2883),v=e(5516),h=e(9299),p=e(6735).mM,g=e(8507),m=e(5575).Promise,_=e(6750),w=e(2883).VisitorStorageKeys,y=e(9031);i=e(422);var E=l.get("stores/cookie_options"),b=l.get("stores/global"),I=l.get("stores/layer"),A=l.get("stores/plugins"),T=l.get("stores/rum"),S=l.get("stores/session"),R=l.get("stores/visitor_id"),k=l.get("stores/visitor_bucketing"),N=l.get("stores/visitor"),D=l.get("stores/provider_status");function C(n,t){if(t.getter){var e=t.provides;if(r.isArray(e)||(e=[e]),!(t.isSticky&&!r.isUndefined(h.getFieldValue(n,e)))){var i;try{var u=l.evaluate(t.getter);r.isFunction(u)&&(u=u((function(){return h.getFieldValue(n,e)}),(function(n){s(e,n)}))),r.isUndefined(u)||(t.isAsync?(i=u.then((function(n){s(e,n)}),(function(n){g.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',n)})),o.dispatch(a.SET_VISITOR_ATTRIBUTE_PENDING,{key:e,pending:i})):s(e,u))}catch(c){g.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+c.message)}return i}}function s(n,e){var i;t.attributionType&&(i=f.now()),o.dispatch(a.SET_VISITOR_ATTRIBUTES,{attributes:[{key:n,value:e,metadata:{lastModified:i}}]})}}function O(n){var t=M(n),e=p.getItem(t);return r.isString(e)&&(e=F(e)),e}function x(n){return n.layerId?n:{layerId:n.i,pageId:n.p,decisionTimestamp:n.t,decisionTicket:{audienceIds:n.a||[]},decision:{layerId:n.i,experimentId:n.x||null,variationId:n.v||null,isLayerHoldback:n.h||!1}}}function P(n,t,e){try{var r=M(n);e||(t=v.stringify(t));try{p.setItem(r,t)}catch(o){throw g.warn("Visitor / Unable to set localStorage key, error was:",o),new Error("Unable to set localStorage")}i.setItem(r,t)}catch(o){g.warn("Unable to persist visitor data:",o.message)}}function M(n){var e=R.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,n].join("$$")}function L(n,e){if(!R.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(V(n)){var i=t.getStorageKeyFromKey(n);if(r.includes(w,i)){var u=M(i);if(!(n.indexOf(u)<=0)&&(e=F(e)))if(i===w.EVENT_QUEUE)o.dispatch(a.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:n,value:s.deserialize(e)});else if(i===w.EVENTS)o.dispatch(a.SET_FOREIGN_VISITOR_EVENTS,{key:n,value:s.deserialize(e)});else if(i===w.LAYER_STATES)o.dispatch(a.LOAD_PERSISTED_LAYER_STATES,{layerStates:r.map(e,x),merge:!0});else if(i===w.VARIATION_MAP)o.dispatch(a.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(i===w.VISITOR_PROFILE){var c=e;r.each(["custom"],(function(n){var t=A.getPlugin(d.PluginTypes.visitorProfileProviders,n);if(t){if(c.profile&&c.metadata){var e=function(n,t,e){var i=N.getAttribute(t),o=N.getAttributeMetadata(t),a=n.profile[t],u=n.metadata[t];if(r.isEmpty(i))return{data:a,metadata:u};var s={};return r.forOwn(a,(function(n,t){var i,a;o&&o[t]&&(i=o[t].lastModified),u&&u[t]&&(a=u[t].lastModified),(e===d.AttributionTypes.FIRST_TOUCH&&i>=a||e===d.AttributionTypes.LAST_TOUCH&&a>=i||r.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=n,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}(c,n,t.attributionType);if(!r.isEmpty(e)){var i=[];r.forOwn(e.data,(function(t,r){var o=e.metadata[r],a={key:[n,r],value:t,metadata:o};i.push(a)})),o.dispatch(a.SET_VISITOR_ATTRIBUTES,{attributes:i})}}}else g.debug("Attribute type",n,"not used by any audiences")}))}}}}function V(n){return n.split("$$")[0].indexOf("://")>0}function F(n){try{return v.parse(n)}catch(t){return g.debug("Failed to parse: ",n,t),null}}t.getOrGenerateId=function(){return{randomId:t.getCurrentId()||"oeu"+f.now()+"r"+Math.random()}},t.getCurrentId=function(){var n=R.getVisitorIdLocator();return N.getVisitorIdFromAPI()||(n?function(n){var t,e=n.name;switch(n.type){case d.VisitorIdLocatorType.COOKIE:t=c.get(e);break;case d.VisitorIdLocatorType.JS_VARIABLE:t=y.getGlobalByPath(e);break;case d.VisitorIdLocatorType.LOCALSTORAGE:try{t=y.getGlobal("localStorage").getItem(e)}catch(i){throw new Error("Unable to read localStorage: "+i.toString())}break;case d.VisitorIdLocatorType.QUERY:t=_.getQueryParamValue(e)}try{if(!t)throw g.error("Visitor / Customer provided visitor id cannot be found. Type:",n.type," Name:",e),new Error("Failure to obtain visitor id from "+n.type);if(!r.isString(t)&&!r.isNumber(t))throw g.error("Visitor / Customer provided visitor id is not a string or number. Type:",n.type," Name:",e," Id Type:",typeof t),new Error("Customer provided visitor id is not a string or number")}catch(i){throw T.getSampleRum()&&o.dispatch(a.RECORD_VISITOR_ID_ERROR,{isError:!0}),i}T.getSampleRum()&&(o.dispatch(a.RECORD_VISITOR_ID_ERROR,{isError:!1}),o.dispatch(a.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:n.type,entityId:t}));return String(t)}(n):c.get(d.COOKIES.VISITOR_ID))},t.hasSomeData=function(){return p.keys().length>0},t.setId=function(n){var e=R.getBucketingId();o.dispatch(a.SET_VISITOR_ID,n),R.getBucketingId()!==e&&(!function(){!function(n,t){0;u.initializeStore(n,t)}(O(w.EVENTS)||[],O(w.EVENT_QUEUE)||[]);var n=(e=w.LAYER_STATES,i=R.getBucketingId(),s=[],c=new RegExp(i+"\\$\\$([^$]+?)\\$\\$"+e),r.each(p.keys(),(function(n){var t=n.match(c);if(t){var e={namespace:t[1],userId:i,item:F(p.getItem(n))};s.push(e)}})),s);var e,i,s,c;r.forEach(n,(function(n){n.item=r.map(n.item,x)})),l=n,v=[],r.each(l,(function(n){r.each(n.item,(function(t){t.namespace=n.namespace,v.push(t)}))})),g=v,o.dispatch(a.LOAD_PERSISTED_LAYER_STATES,{layerStates:r.filter(g,(function(n){return!!n.decision}))}),h=O(w.SESSION_STATE)||{},h=r.extend({lastSessionTimestamp:0,sessionId:null},h),o.dispatch(a.LOAD_SESSION_STATE,h),function(n){var t,e,i=A.getAllPlugins(d.PluginTypes.visitorProfileProviders),u=r.filter(i,(function(n){return r.isFunction(n.restorer)}));n.profile&&n.metadata?(t=n.profile,e=n.metadata):(t=n,e={});t=r.reduce(t,(function(n,t,e){var i=t,o=r.find(u,{provides:e});return o&&(i=o.restorer(t)),n[e]=i,n}),{}),o.dispatch(a.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:e})}(O(w.VISITOR_PROFILE)||{});var f=O(w.TRACKER_OPTIMIZELY);f&&(m=f,o.dispatch(a.SET_TRACKER_PERSISTABLE_STATE,m));var l,v;var h;var g;var m;t.loadForeignData(),t.removeLegacySessionStateCookies()}(),t.deleteOldLocalData(),i.deleteData(n));try{R.getVisitorIdLocator()||t.maybePersistVisitorId(n)}catch(s){if(g.error("Visitor / Unable to persist visitorId, disabling tracking"),o.dispatch(a.LOAD_DIRECTIVE,{trackingDisabled:!0}),s instanceof c.MismatchError)throw g.error("Visitor / Cookie not set to correct value:",s),new Error("Cookie mismatch error while persisting visitorId");throw s}t.refreshSession()},t.getVariationIdMap=function(){return O(w.VARIATION_MAP)||{}},t.updateVariationIdMap=function(n,t,e){o.dispatch(a.UPDATE_VARIATION_ID_MAP,{layerId:n,experimentId:t,variationId:e})},t.persistVariationIdMap=function(){var n=k.getVariationIdMapString();P(w.VARIATION_MAP,n,!0)},t.getPreferredLayerMap=function(){return O(w.LAYER_MAP)||{}},t.updatePreferredLayerMap=function(n,t){o.dispatch(a.UPDATE_PREFERRED_LAYER_MAP,{groupId:n,layerId:t})},t.persistTrackerOptimizelyData=function(n){P(w.TRACKER_OPTIMIZELY,n)},t.refreshSession=function(){o.dispatch(a.REFRESH_SESSION)},t.populateEagerVisitorData=function(n,e){var i=r.filter(n,(function(n){return!n.isLazy}));return t.populateVisitorData(i,e)},t.populateLazyVisitorData=function(n,e){var i=r.filter(n,(function(n){return n.isLazy}));return t.populateVisitorData(i,e)},t.populateVisitorData=function(n,t){t=t||{};var e=r.partial(C,t),i=r(n).filter({isAsync:!0}).map(e).filter().value();return r.forEach(r.filter(n,(function(n){return!n.isAsync})),e),i.length>0?m.all(i):m.resolve()},t.persistBehaviorEvents=function(n){P(w.EVENTS,n)},t.persistBehaviorEventQueue=function(n){P(w.EVENT_QUEUE,n)},t.getPersistedBehaviorEventCount=function(){var n=O(w.EVENTS)||[],t=O(w.EVENT_QUEUE)||[];return s.deserialize(n).length+s.deserialize(t).length},t.persistLayerStates=function(){var n=I.getLayerStates(t.getNamespace());n=r.map(n,(function(n){return r.omit(n,"namespace")})),P(w.LAYER_STATES,n)},t.persistSessionState=function(){P(w.SESSION_STATE,S.getState())},t.persistVisitorProfile=function(){P(w.VISITOR_PROFILE,function(){var n=N.getVisitorProfile(),t=N.getVisitorProfileMetadata(),e=A.getAllPlugins(d.PluginTypes.visitorProfileProviders);if(e){var i=r.reduce(e,(function(n,t){return t.provides&&(n[t.provides]=t),n}),{});n=r.omitBy(n,(function(n,t){var e=i[t];return e&&e.isTransient}))}return{profile:n,metadata:t}}())},t.persistVisitorBucketingStore=function(){var n;t.persistVariationIdMap(),n=k.getPreferredLayerMapString(),P(w.LAYER_MAP,n,!0)},t.getUserIdFromKey=function(n,e){var i;return r.includes(n,e)&&r.includes(n,"_")&&r.includes(n,"$$")&&r.includes(n.slice(n.indexOf("$$")),t.getNamespace())&&(i=n.slice(n.indexOf("_")+1,n.indexOf("$$"))),i},t.maybePersistVisitorId=function(n){n.randomId&&(E.getAutoRefresh()||t.getCurrentId()!==n.randomId?(c.set(d.COOKIES.VISITOR_ID,n.randomId),g.log("Persisting visitorId:",n.randomId)):g.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(n){return N.getAttribute(n)},t.getPendingAttributeValue=function(n){return D.getPendingAttributeValue(n)},t.isForeignKey=V,t.checkKeyForVisitorId=function(n){var e=R.getBucketingId()||t.getCurrentId(),i=t.getIdFromKey(n);return!i||i===e},t.getIdFromKey=function(n){var e=n.split("$$")[0],i=t.getStorageKeyFromKey(n);if(r.includes(d.StorageKeys,i))return null;var o=e.indexOf("_");return-1===o?e:e.substring(o+1)},t.getStorageKeyFromKey=function(n){var t,e=n.split("$$").pop();if(e.indexOf("://")>-1){var i=e.indexOf("_");t=e.substring(i+1)}else t=e;return r.includes(r.values(d.AllStorageKeys),t)?t:null},t.deleteOldLocalData=function(){var n=p.keys();r.each(n,(function(n){t.isForeignKey(n)||t.checkKeyForVisitorId(n)||p.removeItem(n)}))},t.deleteOldForeignData=function(){var n=p.keys();r.each(n,(function(n){t.isForeignKey(n)&&p.removeItem(n)}))},t.loadForeignData=function(){r.each(p.keys(),(function(n){var t=p.getItem(n);t&&L(n,t)}))},t.getNamespace=function(){return b.getNamespace()},t.serializeFieldKey=function(n){return r.isArray(n)?n.join("$$"):n},t.removeLegacySessionStateCookies=function(){var n=c.getAll();r.forEach(r.keys(n),(function(n){0===n.indexOf(d.COOKIES.SESSION_STATE+"$$")&&c.remove(n)}))}},4044:function(n,t,e){var i=e(9524),r=e(2883);t.normalizeClientData=function(n){!n.listTargetingKeys&&n.listTargetingCookies&&(n.listTargetingKeys=i.map(n.listTargetingCookies,(function(n){return{type:r.ListTargetingKeyTypes.COOKIE,key:n}})),delete n.listTargetingCookies)}},1263:function(n,t,e){e(1731).register("env/jquery",e(3104))},3104:function(n,t,e){var i,r=e(9031);try{i=$}catch(a){}var o=r.getGlobal("$");n.exports=i&&i!==o?i:o},1783:function(n,t,e){var i=e(9524),r=e(4623).G,o=e(7649),a=e(1731),u=e(4011),s=e(8507),c=e(9031),f=e(812),l=a.get("stores/client_metadata"),d=a.get("stores/global");function v(n){return n&&n.engine?n.engine:l.getClientName()}t.handleError=function(n,t){{var e=n.name||"Error",a=n.message||"",h=n.stack||null;n instanceof r&&(a instanceof Error?(a=a.message,h=n.message.stack):h=null);var p={timestamp:o.now(),clientEngine:v(t),clientVersion:l.getClientVersion(),accountId:d.getAccountId(),projectId:d.getProjectId(),errorClass:e,message:a,stacktrace:h},g=i.map(d.getExperimental(),(function(n,t){return{key:"exp_"+t,value:String(n)}}));function m(){return f.request({url:"https://errors.client.optimizely.com/log",method:"POST",data:p,contentType:"application/json"}).then((function(n){s.log("Error Monitor / Logged error with response: ",n)}),(function(n){s.error("Failed to log error, response was: ",n)}))}t&&i.forEach(t,(function(n,t){i.isObject(n)||g.push({key:t,value:String(n)})}),[]),i.isEmpty(g)||(p.metadata=g),s.error("Logging error",p),u.isLoaded()?m():c.addEventListener("load",m)}}},8803:function(n,t,e){var i=e(9524),r=e(7913),o=e(5315),a=e(3234),u=e(4623).U,s=e(6407),c=e(3801),f=e(1731).get("stores/directive"),l=e(4011),d=e(2555),v=e(3162),h=e(8507),p=e(2749),g=e(855),m=e(9448).create(),_=1e3,w=10,y=u("ChangeOverheatError");function E(n,t){if(this.change=n,this.identifier=t.identifier,this.startTime=t.startTime,f.shouldObserveChangesIndefinitely()){v.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new p(_);var e=i.isNull(w)?Number.POSITIVE_INFINITY:w;this.rateMeter.addListener(e,i.bind((function(){h.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),v.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new y("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:n.id,changeType:n.type,movingWindowMilliseconds:_,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(n){v.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:n})}),u))}}E.prototype.numberOfRootNodes=function(n){var t=document.createElement("div");return t.innerHTML=n,t.childNodes.length},E.prototype.getSiblingElements=function(n,t,e){for(var i=n,r=[],o=0;o<t;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},E.prototype.apply=function(){this.applyDeferred=c();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var n=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};f.shouldObserveChangesUntilTimeout()?t={timeout:i.partial(g.isTimedOut,this.startTime),onTimeout:n}:f.isEditor()&&m.waitUntil(i.partial(g.isTimedOut,this.startTime)).then(n,n),this.unobserveSelector=m.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),t);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},E.prototype.maybeApplyToElement=function(n){var t=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(n.hasAttribute(t))return h.debug("Not applying AppendChange to element",n,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),i.bind(this.applyOrReapplyToElement,this,n,t)(),this.applyDeferred.resolve()},E.prototype.applyOrReapplyToElement=function(n,t){var e;switch(this.change.operator){case d.DOMInsertionType.AFTER:e=d.insertAdjacentHTMLType.AFTER_END;break;case d.DOMInsertionType.APPEND:e=d.insertAdjacentHTMLType.BEFORE_END;break;case d.DOMInsertionType.BEFORE:e=d.insertAdjacentHTMLType.BEFORE_BEGIN;break;case d.DOMInsertionType.PREPEND:e=d.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=d.insertAdjacentHTMLType.BEFORE_END}n.insertAdjacentHTML(e,this.change.value),n.setAttribute(t,""),s.setData(n,this.change.id,this.identifier,[]);var r,o,a=this.numberOfRootNodes(this.change.value)-1;e===d.insertAdjacentHTMLType.BEFORE_END?(r=n.lastChild,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_BEGIN?(r=n.firstChild,o=this.getSiblingElements(r,a,!0)):e===d.insertAdjacentHTMLType.BEFORE_BEGIN?(r=n.previousSibling,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_END&&(r=n.nextSibling,o=this.getSiblingElements(r,a,!0)),o.unshift(r),i.each(o,i.bind((function(n){var e=n.nodeType===Node.ELEMENT_NODE?n:l.parentElement(n);e.setAttribute(t,"");var r=s.getData(e,this.change.id,this.identifier)||[];r.push(n),s.setData(e,this.change.id,this.identifier,r),i.each(l.childrenOf(e),(function(n){n.setAttribute(t,"")}))}),this))},E.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},E.prototype.undo=function(){var n=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id,t=document.querySelectorAll("["+n+"]");return i.each(t,i.bind((function(t){var e=s.getData(t,this.change.id,this.identifier)||[];i.each(e,(function(n){n.parentNode.removeChild(n)})),t.removeAttribute(n),s.removeData(t,this.change.id,this.identifier),i.each(l.childrenOf(t),(function(t){t.removeAttribute(n)}))}),this)),c().resolve(d.changeState.UNAPPLIED)},n.exports=function(n){n.registerChangeApplier(d.changeType.APPEND,E)}},3542:function(n,t,e){var i=e(9524),r=e(3801),o=e(2555),a=e(7973);function u(n,t){if(!i.isFunction(n.value))throw new Error("Custom code must be a function");this.change=n}u.prototype.apply=function(){var n=r();try{a.apply(this.change.value),n.resolve()}catch(t){n.reject(t)}return n},u.prototype.undo=function(){return r().resolve(o.changeState.IGNORED)},n.exports=function(n){n.registerChangeApplier(o.changeType.CUSTOM_CODE,u)}},5312:function(n,t,e){var i=e(2041),r=e(2833).E,o={selectExperiment:function(n,t,e){if(n.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=n.experiments[0];if(!i.isValidExperiment(t,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};n.exports=function(n){n.registerDecider("single_experiment",o),n.registerDecider("multivariate",o)}},1982:function(n,t,e){var i=e(9524),r=e(5315),o=e(4623).U,a=e(4011),u=e(6217),s=t.Error=o("ClickDelegateError");function c(n){this.handler=n,this.events=[],this.unlistenFn=null,this.clickHandler=i.bind((function(n){i.forEach(this.events,i.bind((function(t){try{var e=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;(function(n,t,e){var o=n.target,a=0;for(;o;){var c;try{c=u(o,t)}catch(l){var f={typeofElementValue:typeof o,nodeName:i.result(o,["nodeName"],null),nodeType:i.result(o,["nodeType"],null),targetName:i.result(n,["target","nodeName"],null),targetType:i.result(n,["target","nodeType"],null),numParentsTraversed:a,selector:t,errorMessage:l.message,eventId:e.id};return r.emitError(new s("Unable to evaluate match for element"),f),!1}if(c)return!0;o=o.parentElement,a++}return!1})(n,e,t)&&this.handler(t)}catch(o){r.emitError(new s("Unable to handle click for selector"+e+":"+o.message))}}),this))}),this)}c.prototype.listen=function(){this.unlistenFn=a.addEventListener("click",this.clickHandler,!0)},c.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},c.prototype.hasEvents=function(){return this.events.length>0},c.prototype.addEvent=function(n){this.events.push(n)},c.prototype.removeEvent=function(n){this.events=i.filter(this.events,(function(t){return t.apiName!==n.apiName}))},n.exports=c},9460:function(n,t,e){var i=e(7222),r=e(1982),o=e(8507),a=e(5968);function u(n){return"apiName: "+n.apiName+", selector: "+n.eventFilter.selector}n.exports=function(n){var t=new r((function(n){a.updateAllViewTags(),i.trackClickEvent(n)?o.log("Tracking click event:",n):o.log("Not tracking click event:",n)}));n.registerEventImplementation("click",{attach:function(n){t.hasEvents()||t.listen(),t.addEvent(n),o.debug("Started listening for click event ("+u(n)+"):",n)},detach:function(n){t.removeEvent(n),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+u(n)+"):",n)}})}},7325:function(n,t,e){var i=e(9524),r=e(5950),o=e(514),a=e(7306);function u(n,t){var e=o.buildFromSpecV0_1(t);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return a.execute(e[0],n)}function s(n,t){return i.map(n,(function(n){return i.isFunction(n.toObject)?n.toObject(t):n}))}function c(n,t){if(!n)return["Descriptor not defined"];var e=[];return n.count&&e.push('Unexpected "count" clause specified'),n.pick&&n.pick.modifier&&-1===t.indexOf(n.pick.modifier)&&e.push('Invalid "pick" modifier "'+n.pick.modifier+'"'),i.each(n.filters,(function(n){i.isUndefined(n.modifier)||e.push('Unexpected "filter" modifier "'+n.modifier+'"')})),e.length>0?e:void 0}function f(n,t){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(i.isUndefined(t))return s(r.getEvents(n),e);if(i.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return s(r.getEvents(n).slice(-t),e)}var a=c(t,i.values(o.RECENCY_FILTERS));if(a)throw new Error(a.join("\n"));return s(u(r.getEvents(n),t),e)}function l(n,t){if(!(t=i.cloneDeep(t)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||o.FREQUENCY_FILTERS.MOST_FREQUENT;var e=c(t,i.values(o.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return u(r.getEvents(n),t)}function d(n,t){var e=o.buildFromSpecV0_2(t),u=r.getEvents(n),c=s(a.execute(e,u),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(c=i.flatten(c)),t.reduce&&(c=c[0]),c}n.exports=["stores/visitor_events",function(n){return{getEvents:i.partial(f,n),getByFrequency:i.partial(l,n),query:i.partial(d,n)}}]},6280:function(n,t,e){n.exports=function(n){n.registerApiModule("behavior",e(7325))}},5693:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(7278)),n.registerAudienceMatcher("behavior",e(2688))}},2688:function(n,t,e){var i=e(9524),r=e(5516),o=e(514),a=e(7306);n.exports={fieldsNeeded:["events"],match:function(n,t){var e=[],u=r.parse(t.value);return e=i.isUndefined(u.version)?[u]:o.buildFromSpecV0_1(u),i.every(e,(function(t){return a.isSatisfied(t,n.events)}))}}},7278:function(n,t,e){var i=e(5950);n.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},2982:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(3997))}},3997:function(n,t,e){var i=e(9524),r=e(6178),o=e(5950),a=e(5516),u=e(514);n.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(n,t){var e=n.getProjectId(),s=i.filter(i.map(t.getCustomBehavioralAttributes(e),(function(n){try{return{id:n.id,granularity:r.GRANULARITY.ALL,rule:u.buildFromSpecV0_2(a.parse(n.rule_json))}}catch(t){return}}))),c=o.getEvents();return r.evaluate(s,c)}]}},4324:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(7679)),n.registerAudienceMatcher("first_session",e(2871))}},2871:function(n){n.exports={fieldsNeeded:["first_session"],match:function(n){return!!n.first_session}}},7679:function(n,t,e){var i=e(6641),r=e(5950),o=e(9299).getFieldValue,a=e(6092).CURRENT_SESSION_INDEX;n.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var n=r.getEvents();if(n&&n.length>0){var t=n[0];return o(t,[i.FIELDS.SESSION_INDEX])===a}return!0}]}},6178:function(n,t,e){var i=e(8507),r={FIELDS:e(6641).FIELDS},o=e(514),a=e(7306);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(n,e){var u={};if(0===e.length){for(var s=0;s<n.length;s++)u[n[s].id]=n[s].defaultValue;return u}var c=function(n){if(0===n.length)return[];for(var t=n.length-1,e=r.FIELDS.SESSION_ID,i=n[t][e];t>0&&i===n[t-1][e];)t--;return n.slice(t)}(e),f=function(n,t){if(0===n.length||t<=0)return[];var e=+new Date-t*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=n.length;i>0&&e<=n[i-1][r.FIELDS.TIME];)i--;return n.slice(i)}(e,60);for(s=0;s<n.length;s++){var l=n[s],d=e;l.granularity===t.GRANULARITY.CURRENT_SESSION?d=c:l.granularity===t.GRANULARITY.LAST_60_DAYS&&(d=f);try{var v=d;l.rule&&(v=a.execute(l.rule,d)),u[l.id]=l.defaultValue,1===v.length?u[l.id]=v[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",v.length,"results, expected 1")}catch(h){i.error("Behavior / Rule for",l.id,"failed with",h.message||"")}}return u}},5950:function(n,t,e){var i=e(9524),r=e(500),o=e(1731).get("stores/visitor_events");t.getEvents=function(){var n=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),e=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([n,t,e]);return a.slice(a.length-1e3)}},514:function(n,t,e){var i=t,r=e(9524),o={FIELDS:e(6641).FIELDS,FIELDS_V0_2:e(6641).FIELDS_V0_2},a=e(5516),u=e(8507),s=e(7306);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(n,t){return r.isString(t)&&(t=[t]),t=t||s.DEFAULT_FIELD,[s.generateAlias(n,t)]},i.groupField=function(n){return r.isString(n)&&(n=[n]),[(n=n||s.DEFAULT_FIELD).join(".")]};var c={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function f(n){return n=(n||"").toString().trim(),c[n]||n}function l(n,t,e){var a={where:t};if(n.count&&(a.limit=n.count),n.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var u=i.getFieldKeyPathForSource(n.name,e),s=i.aggregate("count"),c=i.aggregateField("count"),f=i.groupField(u);return r.extend(a,{select:[{field:f}],groupBy:i.groupBy([u]),aggregate:[s],orderBy:[{field:c,direction:"DESC"}]})}return r.extend(a,{orderBy:[{field:[o.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(n,t,e){return n=f(n),r.isString(t)&&(t=[t]),"exists"===n?{op:n,args:[{field:t}]}:{op:n,args:[{field:t},{value:e}]}},i.relativeTimeComparison=function(n,t){return{op:f(n),args:[{op:"-",args:[{eval:"now"},{field:[o.FIELDS.TIME]}]},{value:t*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(n){return r.isArray(n)?{op:"between",args:[{field:[o.FIELDS.TIME]},{value:[n[0]||+new Date(0),n[1]||+new Date]}]}:(u.error("Rule builder","rangeTimeComparison passed invalid range",n),null)},i.groupBy=function(n){for(var t=[],e=0;e<n.length;e++)t[e]={field:n[e]};return t},i.aggregate=function(n,t){return r.isString(t)&&(t=[t]),{op:n,args:[{field:t=t||s.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(n,t){t=t||i.SOURCE_TYPES.BEHAVIOR;var e=[];return r.isString(n)?(e=[n],t!==i.SOURCE_TYPES.BEHAVIOR||r.includes(r.values(o.FIELDS),n)||(e=[o.FIELDS.OPTIONS,n])):e=n,e},i.buildFromSpecV0_1=function(n){if(!(n.action||n.filters&&0!==n.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+a.stringify(n));var t=i.fieldComparison("gt",o.FIELDS.TIME,0),e=[],s=[];if(n.action&&(s.push(i.fieldComparison("eq",o.FIELDS.NAME,n.action.value)),n.action.type&&s.push(i.fieldComparison("eq",o.FIELDS.TYPE,n.action.type))),n.time)if("last_days"===n.time.type)s.push(i.relativeTimeComparison("lte",n.time.days));else if("range"===n.time.type){var c=i.rangeTimeComparison([n.time.start,n.time.stop]);c&&s.push(c)}else u.error("Rule builder",'Audience spec has bad "time" type',n.time.type);if(t={op:"and",args:s},n.count&&e.push({where:i.fieldComparison(n.count.comparator,"0",n.count.value),from:{select:[{field:i.aggregateField("count")}],where:t,aggregate:[i.aggregate("count")]}}),n.filters&&r.each(n.filters,(function(r){var a,u,c=i.getFieldKeyPathForSource(r.name,n.source);if(r.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(a=i.aggregate("count"),u=i.aggregateField("count")):r.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(a=i.aggregate("max",o.FIELDS.TIME),u=i.aggregateField("max",o.FIELDS.TIME)),a){var f=c,l=i.groupField(f);e.push({where:i.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:l}],where:t,groupBy:i.groupBy([f]),aggregate:[a],orderBy:[{field:u,direction:"DESC"}],limit:1}})}else s.push(i.fieldComparison(r.comparator,c,r.value))})),n.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+a.stringify(n));return[l(n.pick,t,n.source)]}return e.length>0?e:[{where:t}]},i.buildFromSpecV0_2=function(n){!function(n){var t=[];if(r.isUndefined(n))throw new Error("rule is undefined");if(!r.isObject(n))throw new Error("rule is not an Object");"0.2"!==n.version&&t.push('version: not "0.2"');n.filter&&(r.isArray(n.filter)?r.each(n.filter,(function(n,e){var r=i.validateFieldKeyPathV0_2(n.field,i.FieldPurpose.FILTER);r&&t.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(n.comparator,n.value);o&&t.push("filter["+e+"]: "+o)})):t.push("filter: not an array"));var e=[],o=[];n.sort&&(n.reduce&&n.reduce.aggregator&&"nth"!==n.reduce.aggregator&&t.push("sort: superfluous because we can apply aggregator "+a.stringify(n.reduce.aggregator)+" to unsorted items"),r.isArray(n.sort)?r.each(n.sort,(function(n,u){var s=i.validateFieldKeyPathV0_2(n.field,i.FieldPurpose.SORT);s&&t.push("sort["+u+"]: "+s),n.field&&"frequency"===n.field[0]?e.push(n):o.push(n);var c=function(n){var t="direction "+(a.stringify(n)||String(n));if(!r.includes(["ascending","descending"],n))return t+' is not "ascending" or "descending"'}(n.direction);c&&t.push("sort["+u+"]: "+c)})):t.push("sort: not an array"),e.length&&o.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!n.pick&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(n.pick){n.reduce&&"count"===n.reduce.aggregator&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var u=i.validateFieldKeyPathV0_2(n.pick.field);u&&t.push("pick: "+u)}if(n.reduce){var s=n.reduce.aggregator,c="aggregator "+(a.stringify(s)||String(s)),f=n.reduce.n,l="index "+(a.stringify(f)||String(f));r.includes(["sum","avg","max","min","count","nth"],s)||t.push("reduce: "+c+" is unknown"),r.includes(["sum","avg","max","min"],s)&&(n.pick||t.push("reduce: "+c+" is impossible to use because no values have been picked")),"nth"===s?((!r.isNumber(f)||isNaN(f)||parseInt(f,10)!==f||f<0)&&t.push("reduce: "+l+" is not a non-negative integer (mandated by "+c+")"),n.sort||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):r.isUndefined(f)||t.push("reduce: "+l+" is defined (not mandated by "+c+")")}if(t.length)throw new Error(t.join("\n"))}(n);var t={where:{op:"and",args:r.map(n.filter||[],(function(n){return"age"===n.field[0]?i.relativeTimeComparison(n.comparator||"eq",n.value/i.MILLIS_IN_A_DAY):i.fieldComparison(n.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(n.field),n.value)}))}};if(n.reduce&&"count"===n.reduce.aggregator)return r.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],o=[];if(n.sort&&(r.each(n.sort,(function(n){r.includes(["ascending","descending"],n.direction)&&(r.includes(["time","age"],n.field[0])&&o.push(n),"frequency"===n.field[0]&&e.push(n))})),o.length&&!e.length&&(t.orderBy=r.filter(r.map(o,(function(n){return"time"===n.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===n.direction?"ASC":"DESC"}:"age"===n.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===n.direction?"DESC":"ASC"}:void 0}))))),n.pick&&n.pick.field){var u=i.convertFieldKeyPathFromSpecV0_2(n.pick.field);if(n.reduce&&r.includes(["avg","max","min","sum"],n.reduce.aggregator))return r.extend(t,{aggregate:[{op:n.reduce.aggregator,args:[{field:u}]}],select:[{field:[s.generateAlias(n.reduce.aggregator,u)]}]});t=e.length?r.extend(t,{groupBy:[{field:u}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[u.join(".")]}]}):r.extend(t,{select:[{field:u}]})}if(n.reduce&&"nth"===n.reduce.aggregator){var c=n.reduce.n;if(r.isNumber(c)&&c>=0&&Number(c)===Math.floor(Number(c)))return r.extend(t,{offset:c,limit:1})}return t},i.convertFieldKeyPathFromSpecV0_2=function(n){return"tags"===n[0]&&"revenue"===n[1]?["r"]:[o.FIELDS_V0_2[n[0]]].concat(n.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(n,t){var e="field "+(a.stringify(n)||String(n));if(!r.isArray(n)||!r.every(n,r.isString))return e+" is not an array of strings";if("tags"===n[0]&&n.length>2||"tags"!==n[0]&&n.length>1)return e+" includes too many strings";if("tags"===n[0]&&n.length<2)return e+" does not specify an exact tag";if(n.length<1)return e+" does not specify a top-level field";var u=r.keys(o.FIELDS_V0_2),s=["age","frequency"];return t===i.FieldPurpose.FILTER&&(u.push("age"),s=["frequency"]),t===i.FieldPurpose.SORT&&(u=["time","age","frequency"],s=["name","type","category","tags"]),r.includes(s,n[0])?e+" is not supported here":r.includes(u,n[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(n,t){var e="comparator "+(a.stringify(n)||String(n)),i="value "+(a.stringify(t)||String(t));if(!r.isString(n)&&!r.isUndefined(n))return e+" is not a string";switch(n){case undefined:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!r.isNumber(t))return i+" is not a number (mandated by "+e+")";break;case"in":if(!r.isArray(t))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(r.isArray(t)&&2===t.length&&r.isNumber(t[0])&&r.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!(r.isString(t)||r.isArray(t)&&2===t.length&&r.isString(t[0])&&r.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(!r.isUndefined(t))return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},7306:function(n,t,e){var i=e(9524),r=e(2883),o=e(8507),a=i.bind(o.log,o),u=e(7649),s=e(9299).getFieldValue,c=e(5516),f=function(n,t,e){if(n.getValueOrDefault)return n.getValueOrDefault(t,e);if(!i.isArray(t))return e;var r=s(n,t);return void 0===r&&(r=e),r},l=function(n){return"string"==typeof n?n.trim().toLowerCase():n};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(n){var t=i.map(n,l);return t[0]==t[1]},is:function(n){return n[0]===n[1]},gt:function(n){return n[0]>n[1]},lt:function(n){return n[0]<n[1]},gte:function(n){return n[0]>=n[1]},lte:function(n){return n[0]<=n[1]},"in":function(n){var t=i.map(n[1]||[],l);return i.includes(t,l(n[0]))},between:function(n){return n[1][0]<=n[0]&&n[0]<=n[1][1]},contains:function(n){var t=i.map(n,(function(n){return"string"==typeof n?n.toLowerCase():n}));return-1!==(t[0]||"").indexOf(t[1])},regex:function(n){try{var t,e;return i.isString(n[1])?(t=n[1],e="i"):(t=n[1][0]||"",e=n[1][1]||""),new RegExp(t,e).test(n[0])}catch(r){return o.error("Rules",'In operator "regex", error: '+(r.message||"invalid RegExp /"+[t,e].join("/"))),!1}},exists:function(n){return"undefined"!=typeof n[0]},and:function(n){return i.every(n,(function(n){return n}))},or:function(n){return i.some(n,(function(n){return n}))},not:function(n){return!n[0]}},t.arithmeticOperators={"+":function(n){return(n[0]||0)+(n[1]||0)},"-":function(n){return(n[0]||0)-(n[1]||0)},"/":function(n){return(n[0]||0)/(n[1]||1)},"%":function(n){return(n[0]||0)%(n[1]||1)}},t.aggregateOperators={sum:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r},avg:function(n,e){if(0===e.length)return 0;for(var i=n[0]||t.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r/e.length},max:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,f(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,f(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(n,t){return t.length}};var d={now:function(){return u.now()}},v=function(n,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return f(n,e.field);if(e.hasOwnProperty("eval"))return e.eval in d?d[e.eval]():void o.error("Rules","Unknown function: "+e.eval);if(e.op){var r,a=(r=e.op)in t.booleanOperators?t.booleanOperators[r]:r in t.arithmeticOperators?t.arithmeticOperators[r]:null;if(a){var u=i.partial(v,n),s=e.args||[];return a(i.map(s,(function(n){return u(n)})),n)}o.error("Rules","Unknown operator: "+e.op)}else o.error("Rules","No operator specified: "+c.stringify(e))};t.generateAlias=function(n,t){return"_"+n+"_"+t.join(".")};t.rewrite=function(n){var e=[],r={};function a(n,u){if(i.isArray(n)&&("and"!==n[0]&&"or"!==n[0]&&"not"!==n[0]&&o.error("Rules","Unexpected operation "+n[0]+". Continuing optimistically."),n={op:n[0],args:n.slice(1)}),n.hasOwnProperty("field")||n.hasOwnProperty("value")||n.hasOwnProperty("eval"))return n;if(u&&n.op in t.aggregateOperators){var s=(n.args&&n.args[0]||{}).field||t.DEFAULT_FIELD,c=t.generateAlias(n.op,s);return c in r||(e.push({op:n.op,args:n.args}),r[c]=!0),{field:[c]}}for(var f=[],l=n.args||[],d=0;d<l.length;d++)f[d]=a(l[d],u);return{op:n.op,args:f}}var u={};n.hasOwnProperty(t.clause.WHERE)&&(u[t.clause.WHERE]=a(n[t.clause.WHERE],!1)),n.hasOwnProperty(t.clause.HAVING)&&(u[t.clause.HAVING]=a(n[t.clause.HAVING],!0)),(n.hasOwnProperty(t.clause.AGGREGATE)||e.length>0)&&(u[t.clause.AGGREGATE]=(n[t.clause.AGGREGATE]||[]).concat(e));for(var s=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],c=0;c<s.length;c++)n.hasOwnProperty(s[c])&&(u[s[c]]=n[s[c]]);return n.hasOwnProperty(t.clause.FROM)&&(u[t.clause.FROM]=t.rewrite(n[t.clause.FROM])),u};var h=function(n,e){e=e||0;var r=[];if(n.hasOwnProperty(t.clause.WHERE)?n[t.clause.WHERE].op?n[t.clause.WHERE].op in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),n.hasOwnProperty(t.clause.HAVING)&&(n[t.clause.HAVING].op?n[t.clause.HAVING].op in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),n.hasOwnProperty(t.clause.GROUP_BY)&&!n.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),n.hasOwnProperty(t.clause.SELECT)){var o=n[t.clause.SELECT];if(i.isArray(o))for(var a=0;a<o.length;a++)o[a].op&&o[a].op in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+o[a].op+'" specified in selector at index '+a);else r.push("SELECT clause must be an array")}if(n.hasOwnProperty(t.clause.OFFSET)){var u=n[t.clause.OFFSET];(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("OFFSET must be a non-negative integer")}if(n.hasOwnProperty(t.clause.LIMIT)){var s=n[t.clause.LIMIT];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&r.push("LIMIT must be a non-negative integer")}return e>0&&(r=i.map(r,(function(n){return"Sub-rule "+e+": "+n}))),n.hasOwnProperty(t.clause.FROM)&&(r=r.concat(h(n[t.clause.FROM],e+1))),r},p=function(n,e){var r,u,s,l=e;if(n.hasOwnProperty(t.clause.FROM)&&(o.debug("Evaluating FROM clause:",n[t.clause.FROM]),l=p(n[t.clause.FROM],l),o.debug("Results after FROM:",l)),o.debug("Evaluating WHERE clause:",n[t.clause.WHERE]),l=i.filter(l,(function(e){return v(e,n[t.clause.WHERE])})),o.debug("Results after WHERE:",l),n.hasOwnProperty(t.clause.AGGREGATE)){o.debug("Evaluating AGGREGATE clause:",n[t.clause.AGGREGATE]);var d=function(n,t){var e={};if(void 0===n||!i.isArray(n)||0===n.length)return e["*"]={fieldValues:{},events:t},e;for(var r=i.map(n,(function(n){return n.field})),o=0;o<t.length;o++){for(var a=t[o],u=[],s={},l=0;l<r.length;l++){var d=r[l],v=f(a,d),h=d.join(".");s[h]=v,u.push(encodeURIComponent(h)+"="+encodeURIComponent(c.stringify(v)))}var p=u.join("&");e.hasOwnProperty(p)||(e[p]={fieldValues:s,events:[]}),e[p].events.push(a)}return e}(n[t.clause.GROUP_BY],l);l=function(n,t){var e=[];return i.each(n,(function(n,r){var o=i.extend({},n.fieldValues),a=t[r]||{};i.extend(o,a),e.push(o)})),e}(d,(r=n[t.clause.AGGREGATE],u=d,s={},i.each(u,(function(n,e){s[e]={};for(var i=0;i<r.length;i++){var a=r[i],u=a.op;if(u in t.aggregateOperators){var c=(a.args&&a.args[0]||{}).field||t.DEFAULT_FIELD,f=t.generateAlias(u,c),l=t.aggregateOperators[u]([c],n.events);s[e][f]=l}else o.error("Rules","Unknown aggregate operator "+u)}})),s)),o.debug("Results after AGGREGATE:",l)}n.hasOwnProperty(t.clause.HAVING)&&(o.debug("Evaluating HAVING clause:",n[t.clause.HAVING]),l=i.filter(l,(function(e){return v(e,n[t.clause.HAVING])})),o.debug("Results after HAVING:",l)),n.hasOwnProperty(t.clause.ORDER_BY)&&(o.debug("Evaluating ORDER_BY clause:",n[t.clause.ORDER_BY]),l=function(n,t){return i.isArray(n)?0===n.length?t:t.sort((function(t,e){for(var i=0;i<n.length;i++){var r=n[i],o="ASC"===(r.direction||"ASC")?1:-1,a=r.field,u=f(t,a,0),s=f(e,a,0);if(u<s)return-o;if(u>s)return o}return 0})):(a("Rules","groupBy rule must be an array"),t)}(n[t.clause.ORDER_BY],l),o.debug("Results after ORDER_BY:",l));var h,g=0;return n.hasOwnProperty(t.clause.OFFSET)&&(o.debug("Evaluating OFFSET clause:",n[t.clause.OFFSET]),g=Number(n[t.clause.OFFSET])),n.hasOwnProperty(t.clause.LIMIT)&&(o.debug("Evaluating LIMIT clause:",n[t.clause.LIMIT]),h=g+Number(n[t.clause.LIMIT])),(g>0||!i.isUndefined(h))&&(l=l.slice(g,h),o.debug("Results after OFFSET/LIMIT:",l)),n.hasOwnProperty(t.clause.SELECT)&&(o.debug("Evaluating SELECT clause:",n[t.clause.SELECT]),l=function(n,t){return i.map(t,(function(t){return i.map(n,(function(n){return v(t,n)}))}))}(n[t.clause.SELECT],l),o.debug("Results after SELECT:",l)),l};t.execute=function(n,e){n=t.rewrite(n),o.shouldLog(r.LogLevel.DEBUG)&&o.groupCollapsed("Evaluating Behavioral Rule"),o.debug("Rule:",n,c.stringify(n)),o.debug("Events:",e);var i=h(n);if(i.length>0)throw new Error("Rule "+c.stringify(n)+" has violations: "+i.join("\n"));var a=p(n,e);return o.debug("Rule result:",a),o.shouldLog(r.LogLevel.DEBUG)&&o.groupEnd(),a},t.isSatisfied=function(n,e){try{return t.execute(n,e).length>0}catch(i){return o.error("Rules","Error "+i.toString()+" while evaluating rule "+c.stringify(n)),!1}}},9777:function(n,t,e){n.exports=function(n){n.registerDependency("sources/browser_id",e(5257)),n.registerVisitorProfileProvider(e(8585)),n.registerVisitorProfileProvider(e(1394)),n.registerAudienceMatcher("browser_version",e(7585))}},7585:function(n,t,e){var i=e(4184).y;n.exports={fieldsNeeded:["browserVersion","browserId"],match:function(n,t){var e=t.value,r=n.browserId,o=n.browserVersion;if(0===e.indexOf(r)){var a=e.substr(r.length);return 0===i(o,a)}return!1}}},8585:function(n){n.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(n){return n.getId()}]}},1394:function(n){n.exports={provides:"browserVersion",getter:["sources/browser_id",function(n){return n.getVersion()}]}},5257:function(n,t,e){var i=e(8553);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}},4165:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(4474)),n.registerAudienceMatcher("campaign",e(562))}},562:function(n,t,e){var i=e(7384);n.exports={fieldsNeeded:["campaign"],match:function(n,t){return i.hasMatch(t.value,t.match,n.campaign)}}},4474:function(n,t,e){var i=e(3624);n.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},6005:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(1478));var t=e(2315);n.registerAudienceMatcher("custom_attribute",t),n.registerAudienceMatcher("custom_dimension",t)}},2315:function(n,t,e){var i=e(9524),r=e(7384);t.match=function(n,t){var e;return n.custom&&(e=n.custom[t.name]),i.isObject(e)&&(e=e.value),r.hasMatch(t.value,t.match,e)}},1478:function(n,t,e){var i=e(9524),r=e(2883),o=e(8507),a=e(1731).get("stores/dimension_data");n.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(n){return i.reduce(n,(function(n,t,e){var r=e,u=a.getByApiName(e),s=a.getById(e);return i.isObject(t)?(!t.id&&u&&(s=u,r=u.id,i.extend(t,{id:s.segmentId||s.id})),t.name||s&&s.apiName&&(t.name=s.apiName),t.id||s||o.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),n[r]=t,n):(o.error('Unable to restore custom attribute "'+e+'" because value is not an object'),n)}),{})},shouldTrack:!0}},4234:function(n,t,e){n.exports=function(n){n.registerDependency("sources/device",e(4152)),n.registerVisitorProfileProvider(e(4522)),n.registerAudienceMatcher("device",e(558))}},558:function(n){n.exports={fieldsNeeded:["device"],match:function(n,t){return n.device===t.value}}},4522:function(n){n.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(n){return n.getDevice()}]}},4152:function(n,t,e){var i=e(8553);t.getDevice=function(){var n=i.get().device;return"unknown"!==n.model?n.model:"tablet"===n.type?"tablet":n.isMobile?"mobile":"desktop"}},3102:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(9444)),n.registerAudienceMatcher("device_type",e(575))}},575:function(n){n.exports={fieldsNeeded:["device_type"],match:function(n,t){return n.device_type===t.value}}},9444:function(n,t,e){var i=e(8553);n.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var n=i.get().device;switch(n.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return n.type;default:return"other"}}]}},3684:function(n,t){var e=t.m=function(n){this.cidrString=n.trim();var t=i(this.cidrString);if(null===t)throw new Error("Invalid CIDR specification");this.maskedAddress=t.maskedAddress,this.mask=t.mask};e.prototype.containsIP=function(n){var t=r(n);if(null===t)throw new Error("Invalid ip: "+n);for(var e=0;e<4;e++)if((t[e]&this.mask[e])!==this.maskedAddress[e])return!1;return!0};var i=function(n){var t=n.split("/");if(2!==t.length)return null;var e=parseInt(t[1],10);if(isNaN(e)||e<0||e>32)return null;var i=r(t[0]);if(null===i)return null;for(var o=u(e),a=0;a<4;a++)i[a]=i[a]&o[a];return{maskedAddress:i,mask:o}},r=function(n){var t=n.split(".");if(4!==t.length)return null;for(var e=[],i=0;i<4;i++){var r=o(t[i]);if(null===r)return null;e[i]=r}return e},o=function(n){if(n.length>3)return null;var t=parseInt(n,10);return isNaN(t)||n!==t.toString()||t<0||t>255?null:t},a=[0,128,192,224,240,248,252,254,255],u=function(n){if(n<0||n>32)return null;for(var t=[],e=0;e<4;e++)t[e]=0;var i=Math.floor(n/8),r=n%8;for(e=0;e<i;e++)t[e]=255;return i<4&&(t[i]=a[r]),t}},3936:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(8193)),n.registerAudienceMatcher("ip",e(6458))}},6458:function(n,t,e){var i=e(3684).m;n.exports={fieldsNeeded:["IP"],match:function(n,t){if(!n.hasOwnProperty("IP"))return!1;var e=n.IP,r=t.value;switch(t.match){case"prefix":if(0===e.indexOf(r))return!0;break;case"regex":try{var o=new RegExp(r)}catch(a){return!1}if(o.test(e))return!0;break;case"cidr":try{return new i(r).containsIP(e)}catch(a){return!1}break;default:if(e===r&&""!==e)return!0}return!1}}},8193:function(n,t,e){var i=e(5437);n.exports={isAsync:!0,provides:"IP",getter:[function(){return i.getIP()}]}},79:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(3030)),n.registerAudienceMatcher("referrer",e(584))}},584:function(n,t,e){var i=e(9161);t.fieldsNeeded=["referrer"],t.match=function(n,t){return null!==n.referrer&&i(n.referrer,t)}},3030:function(n,t,e){var i=e(4011),r=e(898);n.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var n=r.getReferrer()||i.getReferrer();return""===n&&(n=null),n}]}},6232:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(4920)),n.registerAudienceMatcher("source_type",e(334))}},334:function(n,t,e){var i=e(7384);t.fieldsNeeded=["source_type"],t.match=function(n,t){return i.hasMatch(t.value,t.match,n.source_type)}},4920:function(n,t,e){var i=e(3624),r=e(4011),o=e(898),a=e(925),u=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];n.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(n,t){var e=n(),s=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var n=o.getReferrer()||r.getReferrer(),t=0;t<u.length;t++){var e=u[t];if(n.match(e))return"search"}return n&&a.guessDomain(n)!==a.guessDomain(i.getUrl())?"referral":"direct"}();(function(n,t){return!n||"direct"!==t})(e,s)&&t(s)}}]}},6039:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(8391)),n.registerVisitorProfileProvider(e(9791)),n.registerAudienceMatcher("time_and_day",e(7070))}},7070:function(n,t,e){var i=e(391);t.fieldsNeeded=["currentTimestamp"],t.match=function(n,t){return i.test(t.value,new Date(n.currentTimestamp))}},8391:function(n,t,e){var i=e(7649);n.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},9791:function(n){n.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},391:function(n,t,e){var i=e(9524);function r(n){var t=n.split(":");if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+n);return 60*parseInt(t[0],10)+parseInt(t[1],10)}t.test=function(n,t){var e=function(n){var t=n.split("_");if(3!==t.length)throw new Error("Invalid time and day string "+n);var e=t[2].split(",");return{start_time:t[0],end_time:t[1],days:e}}(n),o=r(e.start_time),a=r(e.end_time),u=60*t.getHours()+t.getMinutes(),s=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][t.getDay()];return u>=o&&u<=a&&i.includes(e.days,s)}},2739:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(7460))}},7460:function(n){n.exports={provides:"visitorId",getter:["stores/visitor_id",function(n){return n.getRandomId()}]}},2768:function(n,t,e){var i=e(9524),r=e(5516),o=e(8507),a=e(94),u=e(898),s=e(744),c=e(9031),f="adobe_analytics",l="optimizelyLayerEvent",d=e(1731),v=e(4570),h=d.get("stores/integration_settings");var p=function(n,t){var e;return a.pollFor((function(){var n=h.getReference(f);return e=i.extend({},n,t),function(n,t){if(t.sVariableReference)return t.sVariableReference||null;var e=t.sVariable?t.sVariable:"s";return n.getGlobal(e)}(c,e)}),200,50).then((function(t){var r,o,a=e.site_catalyst_eVar||null,s=e.site_catalyst_prop||null;a&&(r="eVar"+a),s&&(o="prop"+s),function(n){i.each(["events","linkTrackEvents","linkTrackVars"],(function(t){i.isString(n[t])||(n[t]="")}))}(t);var c=t.linkTrackVars.split(",");r&&(n=n.substring(0,255),t[r]=n,-1===c.indexOf(r)&&c.push(r)),o&&(t[o]=n,-1===c.indexOf(o)&&c.push(o));var f=u.getReferrer();if(f&&(t.referrer=f),-1===t.linkTrackVars.indexOf("events")&&c.push("events"),t.linkTrackVars=i.filter(c).join(","),-1===t.linkTrackEvents.indexOf(l)){var d=t.linkTrackEvents.split(",");d.push(l),t.linkTrackEvents=i.filter(d).join(",")}if(-1===t.events.indexOf(l)){var v=t.events.split(",");v.push(l),t.events=i.filter(v).join(",")}t.tl(!0,"o","OptimizelyLayerDecision")}))},g={preRedirectPolicy:s.PreRedirectPolicies.PERSIST_BEFORE_REDIRECT,postRedirectPolicy:s.PostRedirectPolicies.TRACK_IMMEDIATELY,nonRedirectPolicy:s.NonRedirectPolicies.TRACK_IMMEDIATELY,trackLayerDecision:function(n){var t=n.integrationSettings;if(t&&t[f]&&n.experimentId&&n.variationId){var e={id:n.layerId,name:n.layerName,policy:n.layerPolicy,integrationStringVersion:n.integrationStringVersion},i={id:n.experimentId,name:n.experimentName},r={id:n.variationId,name:n.variationName},a=n.isLayerHoldback,u=v.generateAnalyticsString(e,i,r,a,255,!0);if(u)return p(u,t[f])["catch"]((function(n){o.warn("Tracker for",f,"failed:",n)}))}},serializeSettings:r.stringify,deserializeSettings:r.parse};n.exports=function(n){n.registerAnalyticsTracker("adobe_analytics",g)}},305:function(n,t,e){var i=e(9524),r=e(5315),o=e(2827),a=e(7913),u=e(4623).U,s=e(5516),c=e(8507),f=e(744),l=e(3028),d=e(9031),v=e(812),h=e(1731),p=(e(4011),e(2497)),g=e(9422),m=e(3162),_=h.get("stores/global"),w=h.get("stores/tracker_optimizely"),y=t.Error=u("OptimizelyTrackerError"),E="client_activation",b="campaign_activated",I="view_activated",A={revenue:{validate:O,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:O,sanitize:Math.floor,excludeFeature:!0},value:{validate:O,sanitize:i.identity}},T="AUTO",S=[function(){return function(n){P(function(n){return i.extend({entity_id:n.pageId,key:n.pageApiName,timestamp:n.timestamp,uuid:n.eventId,type:I},D(n.eventTags))}(n),n.userFeatures,K(n.layerStates))}}],R=[function(){return function(n){!function(n){var t=i.isNull(_.getAnonymizeIP())?undefined:_.getAnonymizeIP(),e={account_id:n.accountId,anonymize_ip:t,client_name:n.clientName,client_version:n.clientVersion,project_id:n.projectId,visitors:[]};e.revision=n.revision;e.enrich_decisions=!0;var r={session_id:L(n.sessionId),visitor_id:n.visitorId,attributes:[],snapshots:[]},o=K(n.layerStates);m.dispatch(a.REGISTER_TRACKER_VISITOR,{data:e,visitor:r,decisions:o}),Y()}(n),P(function(n){return{entity_id:null,type:E,uuid:n.eventId,timestamp:n.timestamp}}(n),n.userFeatures,K(n.layerStates))}}],k=[function(){return function(n){var t;P((t=n,i.extend({entity_id:t.eventEntityId,key:t.eventApiName,timestamp:t.timestamp,uuid:t.eventId,type:t.eventCategory},D(t.eventTags))),n.userFeatures,K(n.layerStates))}}],N=[function(){return function(n){var t;P((t=n,i.extend({entity_id:t.eventEntityId,key:t.eventApiName,timestamp:t.timestamp,uuid:t.eventId,type:t.eventCategory},D(t.eventTags))),n.userFeatures,K(n.layerStates))}}];function D(n){var t=i.keys(A),e=i.omit(n,t),o=i.pick(n,t);function a(n,t,e){try{C(t),n[e]=t}catch(i){r.emitError(new y("Bad value for eventTags["+e+"]: "+i.message))}return n}var u=i.reduce(e,a,{}),s=i.reduce(o,(function(n,t,e){var i=A[e];i.excludeFeature||a(u,t,e);try{i.validate(t),n[e]=i.sanitize(t),u[e]=n[e]}catch(o){r.emitError(new y("Bad value for eventMetrics["+e+"]: "+o.message))}return n}),{});return s.tags=u,s}function C(n){if(null==n)throw new Error("Feature value is null");if("object"==typeof n){var t;try{t=s.stringify(n)}catch(e){}throw new Error('Feature value is complex: "'+t||0)}}function O(n){if(null==n)throw new Error("Metric value is null");if(!i.isNumber(n))throw new Error("Metric value is not numeric")}function x(n){return i.reduce(n,(function(n,t){try{0,C(t.value),n.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){c.warn("Error evaluating user feature",t,e)}return n}),[])}function P(n,t,e){m.dispatch(a.REGISTER_TRACKER_EVENT,{event:n,decisions:e}),M(t),Y()}function M(n){var t=x(n);m.dispatch(a.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function L(n){return T}function V(){if(w.canSend()){var n=w.hasEventsToSend(),t=w.hasPreviousBatchesToSend();n||t?(t&&(i.each(w.getPreviousBatches(),F),m.dispatch(a.RESET_TRACKER_PREVIOUS_BATCHES)),n&&(m.dispatch(a.FINALIZE_BATCH_SNAPSHOT),F(w.getEventBatch()),m.dispatch(a.RESET_TRACKER_EVENTS))):c.debug("Not sending events because there are no events to send")}else c.debug("Not sending events (holding)")}function F(n){c.debug("Sending ticket:",n);var t=o.generate();v.retryableRequest({url:"https://logx.optimizely.com/v1/events",method:"POST",data:U(n)},t)}function U(n){return i.extend({},i.pick(n,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:i.map(n.visitors,z)})}function z(n){return{visitor_id:n.visitor_id,session_id:T,attributes:i.map(n.attributes,B),snapshots:i.map(n.snapshots,G)}}function B(n){return H(n,{entity_id:"e",key:"k",type:"t",value:"v"})}function G(n){var t=n.events;return t=function(n){var t=i.reduce(n,(function(n,t){var e;if(n[e=t.type===I&&i.isEmpty(t.tags)&&i.isEmpty(i.pick(t,i.keys(A)))?t.type:t.uuid]){var r=n[e].timestamp;t.timestamp>r&&(r=t.timestamp),n[e]=i.extend({},n[e],{key:n[e].key+"-"+(t.key||""),entity_id:n[e].entity_id+"-"+t.entity_id,timestamp:r})}else n[e]=t;return n}),{});return i.values(t)}(t),{activationTimestamp:_.getActivationTimestamp(),decisions:i.map(n.decisions,j),events:i.map(t,q)}}function j(n){return H(n,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function q(n){return n.key===b&&(n.type=b,delete n.key),H(n,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function H(n,t){return i.reduce(n,(function(n,e,i){return i in t&&(n[t[i]||i]=e),n}),{})}function Y(){if(w.shouldBatch()){if(!w.isPolling()){d.setTimeout((function n(){V(),w.isPolling()&&d.setTimeout(n,1e3)}),1e3),m.dispatch(a.SET_TRACKER_POLLING,!0),d.setTimeout((function(){m.dispatch(a.SET_TRACKER_BATCHING,!1),m.dispatch(a.SET_TRACKER_POLLING,!1)}),1e4)}}else V()}function K(n){return i.map(n,(function(n){return{campaign_id:n.layerId,experiment_id:n.decision.experimentId,variation_id:n.decision.variationId,is_campaign_holdback:n.decision.isLayerHoldback}}))}function $(){var n=w.getPersistableState();if(n)try{c.debug("Persisting pending batch:",n),l.persistTrackerOptimizelyData(n),m.dispatch(a.SET_TRACKER_DIRTY,!1)}catch(t){c.debug("Failed to persist pending batch:",t)}}var W={trackLayerDecision:function(n){n.timing===f.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(n){var t=x(n.userFeatures),e={account_id:n.accountId,anonymize_ip:n.anonymizeIP,client_name:n.clientName,client_version:n.clientVersion,project_id:n.projectId,visitors:[{session_id:L(n.sessionId),visitor_id:n.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:n.layerId,experiment_id:n.experimentId,variation_id:n.variationId,is_campaign_holdback:n.isLayerHoldback}],events:[{uuid:n.decisionId,entity_id:n.layerId,timestamp:n.timestamp,type:b}]}]}]};m.dispatch(a.REGISTER_PREVIOUS_BATCH,e),Y()}(n):function(n){var t={entity_id:n.layerId,type:b,uuid:n.decisionId,timestamp:n.timestamp};m.dispatch(a.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:K(n.layerStates)}),M(n.userFeatures),Y()}(n)},postRedirectPolicy:f.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:f.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:S,onClientActivation:R,onClickEvent:N,onCustomEvent:k};n.exports=function(n){n.registerAnalyticsTracker("optimizely",W),p.on({filter:{type:g.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0),w.isPolling()||V()}}),p.on({filter:{type:g.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!1)}}),m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0);var t=p.on({filter:{type:"lifecycle",name:"activated"},handler:function(){w.observe($),p.off(t)}})}},9679:function(n){var t={match:function(n,t){return!!document.querySelector(t.value)}};n.exports=function(n){n.registerViewMatcher("element_present",t)}},1986:function(n,t,e){n.exports=function(n){n.registerViewProvider(e(763)),n.registerViewMatcher("url",e(9105))}},9105:function(n,t,e){var i=e(9161);n.exports={fieldsNeeded:["url"],match:function(n,t){return i(n.url,t)}}},763:function(n,t,e){var i=e(3624);n.exports={provides:"url",getter:[function(){return i.getUrl()}]}},9726:function(n,t,e){var i=e(4011),r=e(2883),o=e(2497),a=e(6237),u=e(5968),s={token:undefined,setUpObserver:function(){a.createDOMChangedObserver(),this.token=o.on({filter:{type:"viewTrigger",name:"DOMChanged"},handler:function(){u.getViewsAndActivate(r.ViewActivationTypes.DOMChanged)}})},turnOffObserver:function(){o.off(this.token)}};n.exports=function(n){i.isReady()?s.setUpObserver():i.addReadyHandler(s.setUpObserver),n.registerViewTrigger("DOMChanged",s)}},8884:function(n,t,e){var i=e(9524),r=e(7913),o=e(1731),a=e(2883),u=e(2497),s=e(3162),c=o.get("stores/history"),f=e(8507),l=e(5575).Promise,d=e(5968),v=e(9031);function h(n){u.emit({type:"viewTrigger",name:"URLChanged",data:{source:n,newURL:v.getHref()}},!0)}n.exports=function(n){(function(){function n(){var n=c.getOriginalPushState().apply(this,arguments);return l.resolve().then((function(){h("pushState")}))["catch"]((function(n){f.error("Error while wrapPushState: ",n)})),n}s.dispatch(r.ENSURE_ORIGINAL_PUSHSTATE),v.getGlobal("history").pushState=n})(),function(){function n(){var n=c.getOriginalReplaceState().apply(this,arguments);return l.resolve().then((function(){h("replaceState")}))["catch"]((function(n){f.error("Error while wrapReplaceState: ",n)})),n}s.dispatch(r.ENSURE_ORIGINAL_REPLACESTATE),v.getGlobal("history").replaceState=n}(),v.addEventListener("popstate",p,!1),v.addEventListener("hashchange",g,!1),u.on({filter:{type:"viewTrigger",name:"URLChanged"},handler:function(){d.getViewsAndActivate(a.ViewActivationTypes.URLChanged)}}),n.registerViewTrigger("URLChanged")};var p=i.partial(h,"popstate"),g=i.partial(h,"hashchange")},7675:function(n,t,e){var i=e(9524),r=e(1731),o=e(2497),a=e(9422),u=e(9031),s=r.get("stores/directive"),c="optimizelyPreview",f=function(n){u.getGlobal(c).push(n)};t.initialize=function(n){s.isSlave()&&function(n){var t=!1;if(i.isArray(window.optimizely)&&i.each(window.optimizely,(function(e){i.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===n&&(t=!0)})),!t)throw new Error("Preview projectId: "+n+" does not match expected")}(n),o.on({filter:{type:a.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),o.on({filter:{type:"error"},publicOnly:!0,handler:f})},t.setupPreviewGlobal=function(){u.getGlobal(c)||u.setGlobal(c,[])},t.pushToPreviewGlobal=function(n){f(n)}},6980:function(n,t,e){var i=e(9524),r=e(2827),o=e(3944),a=e(3345),u=e(7649),s=e(4011),c=e(3162),f=e(6735).mM,l=e(8507),d=e(6426),v=e(5575).Promise,h=e(3028),p=e(9031),g=e(812),m=e(7913),_=e(2883),w=e(1731),y=w.get("stores/async_request"),E=w.get("stores/client_metadata"),b=w.get("stores/global"),I=w.get("stores/rum"),A=w.get("stores/performance"),T=w.get("stores/xdomain"),S=w.get("stores/view_data"),R=e(2372),k="https://rum.optimizely.com/rum",N="1.0";function D(n){return i.isEmpty(n)?v.resolve():(t=function(){return g.request({url:k,method:"POST",data:n,withCredentials:!0}).then((function(n){return o.resolveRequest("RUM_FIRST_BEACON",n),n}))["catch"]((function(n){throw l.error("POST to client-rum failed:",n),o.rejectRequest("RUM_FIRST_BEACON",n),n}))},(e=y.getPromise("RUM_FIRST_BEACON"))?e.then(t):o.makeAsyncRequest("RUM_FIRST_BEACON",t));var t,e}function C(){try{return!s.querySelector("body")}catch(n){return null}}function O(){var n=p.getGlobal("performance"),t=n?n.timing:{},e=A.getMarks()||{},r=I.getApiData(),o=I.getDOMObservationData(),a=R.get("state").getActiveExperimentIds(),u=I.getFeaturesNeededData(),c=s.parseUri(I.getScriptSrc()),l=I.getRumData()||{},v=l.extras||{};i.assign(v,{apiCalls:r,DOMObservationData:o,paintTimings:P(),activeExperimentIds:a,numPages:S.getNumberOfPages(),snippet:{scheme:c.protocol.slice(0,-1),host:c.host,path:c.pathname},networkInfo:x(),experimental:b.getExperimental(),featuresNeeded:u,beacon:{cjsOnload:!0}});var g=p.getGlobal("Prototype");g&&!i.isUndefined(g.Version)&&(v.prototypeJS=g.Version);var m=!1;m=!0;var _=T.getFrames();_.length&&(v.xdFramesLoaded=_.length);var w={id:I.getRumId(),v:N,project:b.getSnippetId()||b.getProjectId(),navigationTimings:t,userTimings:e,xd:m,apis:i.keys(r),extras:v,sampleRate:l.sampleRate};(function(){var n=f.keys(),t=i.filter(i.map(n,(function(n){var t=h.getStorageKeyFromKey(n);return t?{key:n,isForeign:h.isForeignKey(n),category:t,size:n.length+f.getItem(n).length}:null}))),e=i.reduce(t,(function(n,t){var e=t.key,i=h.getIdFromKey(e);return i?((t.isForeign?n.foreign:n.local)[i]=!0,n):n}),{local:{},foreign:{}}),r=i.chain(t).filter({isForeign:!0}).reduce((function(n,t){return n[t.key.split("_")[0]]=!0,n}),{}).value(),o={local:0,foreign:0},a={local:{},foreign:{}};i.forEach(t,(function(n){var t=n.isForeign?"foreign":"local";o[t]+=n.size,a[t][n.category]||(a[t][n.category]=0),a[t][n.category]+=n.size}));var u={numKeys:f.allKeys().length,sizeKeys:f.allKeys().toString().length,sizeValues:f.allValues().toString().length,idCounts:{local:i.keys(e.local).length,foreign:i.keys(e.foreign).length},foreignOriginCount:i.keys(r).length,byteTotals:o,byteTotalsByCategory:a};return d.estimateStorage().then((function(n){return i.assign(u,{storageEstimate:n})}))})().then((function(n){D(i.assign(w,{lsMetrics:n}))}))}function x(){var n=p.getGlobal("navigator");if(n&&n.connection)return i.pick(n.connection,["downlink","rtt","effectiveType"])}function P(){var n=p.getGlobal("performance");if(n)try{var t=n.getEntriesByType("paint");if(i.isEmpty(t))return;return i.reduce(t,(function(n,t){return n[t.name]=Math.round(t.startTime),n}),{})}catch(e){return}}t.initialize=function(){var n,t=r.generate().replace(/-/g,"");n=Math.random()<.01;var e=function(){var n=s.getCurrentScript();if(n)return n.src}();c.dispatch(m.SET_RUM_DATA,{id:t,RumHost:k,inRumSample:n,src:e,data:{id:t,sync:C(),timebase:u.now(),sampleRate:.01,url:e,extras:{initialDOMState:s.getReadyState()}}})},t.queueBeacons=function(){return I.getSampleRum()?(function(){try{p.getGlobal("requestAnimationFrame")((function(){var n=I.getRumData().timebase;c.dispatch(m.SET_RUM_DATA,{data:{render:u.now()-(n||0)}})}))}catch(n){return}}(),s.isLoaded()?p.setTimeout(O,3e3):p.addEventListener("load",O),new v((function(n,t){p.setTimeout((function(){(function(){!function(){var n={id:I.getRumId(),v:N,account:b.getAccountId(),project:b.getSnippetId()||b.getProjectId(),snippet:b.getSnippetId(),revision:b.getRevision(),clientVersion:E.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},t=h.getPersistedBehaviorEventCount(),e=a.getEventCount();n.numBehaviorEvents=e;var r=e-t;i.extend(n.extras,{behaviorEventCountDiff:r,behaviorEventCountDecreased:r<0}),i.assign(n,function(){var n=p.getGlobal("performance");if(!n)return;var t,e=I.getScriptSrc();try{if(e){l.debug("Using derived script src: ",e);var r=n.getEntriesByName(e);r.length>0&&(t=r[0])}if(!t){var o=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;l.debug("Scanning resource timing entries with regex");var a=n.getEntriesByType("resource");t=i.find(a,(function(n){return o.test(n.name)}))}if(t)return i.mapValues(_.ResourceTimingAttributes,(function(n,e){var i=t[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?i||[]:void 0}))}catch(u){return}}(),A.getDurationsFor(i.values(_.RUMPerformanceTimingAttributes))),c.dispatch(m.SET_RUM_DATA,{data:n})}();var n=I.getRumData();n.extras=n.extras||{},n.extras.beacon={cjsTimeout:!0},!1;return D(n=i.pickBy(n,(function(n){return!i.isUndefined(n)})))})().then(n,t)}),3e3)}))["catch"]((function(n){l.warn("RUM / Error sending data:",n)}))):v.resolve()}},3444:function(){}},__webpack_module_cache__={};function __webpack_require__(n){var t=__webpack_module_cache__[n];if(t!==undefined)return t.exports;var e=__webpack_module_cache__[n]={id:n,loaded:!1,exports:{}};return __webpack_modules__[n].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),__webpack_require__.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n};var __webpack_exports__={};!function(){try{!function(){window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(6980).initialize();var n=__webpack_require__(1476),t=__webpack_require__(8507),e=__webpack_require__(1731);__webpack_require__(1263);var i=e.get("stores/directive");if(!__webpack_require__(812).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var r,o=__webpack_require__(9534),a=__webpack_require__(8721),u=__webpack_require__(5541),s={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {"adobe_analytics": {"sVariable": "", "site_catalyst_eVar": "57", "site_catalyst_prop": null}}, "integrationStringVersion": 2, "viewIds": ["20896213849", "20955310568", "20969870633"], "experiments": [{"weightDistributions": [{"entityId": "20791092561", "endOfRange": 10000}], "audienceName": "[CONV] Exclude IE,Exclude Uptrends Traffic", "name": "[CONV] [LIVE] FCN 2.9 - Multicar banner quote page ", "bucketingStrategy": null, "variations": [{"id": "20795131386", "actions": [{"viewId": "20955310568", "changes": [{"dependencies": [], "type": "custom_code", "id": "877529B0-0ED8-441A-85FF-7F07A66B23BB", "value": function($){(function () {

    var
        currentLocation = document.location.href,
        oldHref,
        bodyList = document.querySelector("body")
        , observer = new MutationObserver(function (mutations) {

            mutations.forEach(function (mutation) {
                currentLocation = document.location.href;

                if (currentLocation != oldHref && currentLocation.includes('customer/dashboard')) {
                    mainExperiment();
                }
                else if (currentLocation.includes('/privatecar/quote/welcome')) {
                    window.addEventListener('click', function(e){
                        if(e.target.innerText == 'Find out more'){
                            window['optimizely'] = window['optimizely'] || [];
                            window['optimizely'].push({
                                type: "event",
                                eventName: "welcomePageCtaClick",
                                tags: {
                                    revenue: 0, // Optional in cents as integer (500 == $5.00)
                                    value: 0.00 // Optional as float
                                }
                            });
                        }
                    })
                }

                oldHref = currentLocation;
            });
        });

    var config = {
        childList: true,
        subtree: true
    };

    if (currentLocation.includes('customer/dashboard')) {
        mainExperiment();
        observer.observe(bodyList, config);
    }
    else if (currentLocation.includes('customer/login/accountlogin')) {
        observer.observe(bodyList, config);
    }
    else if (currentLocation.includes('/privatecar/quote/welcome')) {
        window.addEventListener('click', function(e){
            if(e.target.innerText == 'Find out more'){
                window['optimizely'] = window['optimizely'] || [];
                window['optimizely'].push({
                    type: "event",
                    eventName: "welcomePageCtaClick",
                    tags: {
                        revenue: 0, // Optional in cents as integer (500 == $5.00)
                        value: 0.00 // Optional as float
                    }
                });
            }
        })
    }


    function mainExperiment() {
        var maxCalls = 0,
            checkElement = window.setInterval(function () {
                var panels = document.querySelector('app-promo > div');
                if (maxCalls < 20) {
                    maxCalls++;
                    if (panels) {
                        clearInterval(checkElement);
                        panels.classList.add('fcn-21-container');
                        experimentCode(panels);
                    }
                }
                else {
                    clearInterval(checkElement);
                }
            }, 50);
    }

    function experimentCode() {
        var button = document.querySelector('app-promo > div > div:nth-child(1) > div > div > button');
        if (button) {
            button.addEventListener('click', function () {
                window['optimizely'] = window['optimizely'] || [];
                window['optimizely'].push({
                    type: "event",
                    eventName: "multicarQuoteClick",
                    tags: {
                        revenue: 0, // Optional in cents as integer (500 == $5.00)
                        value: 0.00 // Optional as float
                    }
                });
            });
        }
    }
})();
}}]}], "name": "Original"}, {"id": "20791092561", "actions": [{"viewId": "20896213849", "changes": [{"dependencies": [], "type": "custom_code", "id": "367ED6F9-1AFE-451A-BDAA-7CB723146FF6", "value": function($){// document.cookie = "cfQA=true; max-age=30000; path=/;";

(function(){
    console.log('conv 2.9');
    var
        currentLocation = document.location.href,
        oldHref,
        called = false,
        bodyList = document.querySelector("body")
        , observer = new MutationObserver(function (mutations) {
    
            mutations.forEach(function () {
    
                currentLocation = window.location.href.split('?')[0];
    
                if(currentLocation != oldHref){
    
                    if(currentLocation.includes('privatecar/quote/quote') || currentLocation.includes('/privatecar/quote/welcome')){
                        if(!called){
                            insertPanel();
                            called = true;
                        }
                        if(currentLocation.includes('/privatecar/quote/welcome')){
                            window.addEventListener('click', function(e){
                                if(e.target.closest('#fcn29-welcome-cta')){
                                    console.log('welcome page CTA Clicked');
                                    window['optimizely'] = window['optimizely'] || [];
                                    window['optimizely'].push({
                                      type: "event",
                                      eventName: "welcomePageCtaClick",
                                      tags: {
                                        revenue: 0, // Optional in cents as integer (500 == $5.00)
                                        value: 0.00 // Optional as float
                                      }
                                    });
                                    window.location.href = 'https://www.1stcentralinsurance.com/multicar?campaign=C0000001';
                                }
                            })
                        }
                    }
                    else{
                        called = false;
                    }
                }
                else if(currentLocation.includes('privatecar/payment/confirm')){
                    insertPanel();
                    called = false;
                }
                oldHref = currentLocation;
            });
        });
    
    var config = {
        childList: true,
        subtree: true
    };
    
    
    observer.observe(bodyList, config);
    
    var currentUrl;
    var panels;
    var added = false;
    var addedWelcome = false;
    
    function checkElement(selector, success){
        var check = window.setInterval(function(){
            var element = document.querySelector(selector);
            if(element){
                clearInterval(check);
                if(success){
                    success;
                }
            }
        }, 50)
    }
    function insertPanel(){
        console.log('insert panel called')
        currentUrl = window.location.href;
        // Confirmation
        if(currentUrl.includes('/privatecar/payment/confirm') || currentUrl.includes('/privatecar/apipayment/confirm')){
            var inserted = document.querySelector('.fcn-21-container');
            var wait = window.setInterval(function(){
                panels = document.querySelector('#create-a-login');
                if(panels && !added){
                    clearInterval(wait);
                    panels.classList.add('fcn-21-container');
                    experimentCode(panels);
                    added = true;
                }
            }, 50);
    
        }
        
        // Quote page
        else if(currentUrl.includes('/privatecar/quote/quote')){
            panels = document.querySelector('app-quote-details');
            panels.classList.add('fcn-21-container');
            checkElement('app-quote-details > div.col-12.pb-3.pl-0.pr-0', experimentCode(panels));
        }
        // Welcome page
        else if(currentUrl.includes('/privatecar/quote/welcome')){
            
            var inserted = document.querySelector('.fcn-21-container');
    
            var wait = window.setInterval(function(){
                panels = document.querySelector('app-welcome > div > div.row.mt-3.mb-4');
                if(panels && !inserted){
                    clearInterval(wait);
                    addedWelcome = true;
                    panels.classList.add('fcn-21-container');
                    experimentCode(panels);
                    checkElement('app-welcome > div > div.row.mt-3.mb-4.fcn-21-container > div:nth-child(3)', (function(){
                        document.querySelector('app-welcome > div > div.row.mt-3.mb-4.fcn-21-container > div:nth-child(3)').remove();
                    })());
                }

            })

            
        }
    }
    
    
    function experimentCode(panels){
        var originalPanel;
        var updatePanel;
        if(currentLocation.includes('privatecar/payment/confirm')){
            originalPanel = document.querySelector('#create-a-login > div > div');
            updatePanel = originalPanel.cloneNode(true);
            updatePanel.classList.add('fcn21-panel');
            updatePanel.id = 'fcn21-confirm-container'
            updatePanel.innerHTML = generateHtml();
        }
        else if(currentLocation.includes('/privatecar/quote/quote')){
            originalPanel = panels.querySelector('div'),
            updatePanel = originalPanel.cloneNode(true);
            updatePanel.classList.add('fcn21-panel');
            updatePanel.classList.add('fcn21-width-100');
            updatePanel.id = 'fcn21-quote-container'
            updatePanel.classList.add('mb-4');
            updatePanel.classList.remove('p-0');
            updatePanel.classList.remove('p-1');
            updatePanel.classList.remove('pb-3');
            updatePanel.classList.remove('col-lg-6');
            updatePanel.classList.remove('py-3');
            updatePanel.innerHTML = generateHtml();
        }
        else{
            originalPanel = panels.querySelector('div'),
            updatePanel = originalPanel.cloneNode(true);
            updatePanel.classList.add('fcn21-panel');
            updatePanel.classList.add('mb-4');
            updatePanel.classList.remove('p-0');
            updatePanel.innerHTML = generateHtml();
        }
    
        if(currentUrl.includes('/privatecar/quote/welcome')){
            document.querySelector('.fcn-21-container > div.container.p-0').insertAdjacentElement('afterend', updatePanel);
        }
        else if(currentLocation.includes('privatecar/payment/confirm')){
            document.querySelector('#create-a-login > div > h3').insertAdjacentElement('beforebegin', updatePanel);
        }
        else{
            originalPanel.insertAdjacentElement('afterend', updatePanel);
        }
    
        if(currentUrl.includes('/privatecar/quote/quote')){
            insertPopup();
            var element = document.querySelector('.fcn21-panel');
            element.addEventListener('click', function(){
                var popup = document.querySelector('.fcn29-popup');
                var continueCta = popup.querySelector('.fcn29-popup-cta');
                var close = popup.querySelector('.fcn29-close');
                popup.style.display = 'block';
                close.addEventListener('click', function(){
                    popup.style.display = 'none';
                })
                continueCta.addEventListener('click', function(){
                    popup.style.display = 'none';
                })
            })
            checkElement('#fcn29-quote-cta', (function(){
                document.addEventListener('click', function(e){
                    if(e.target.closest('#fcn29-quote-wrapper')){
                        console.log('')
                        window['optimizely'] = window['optimizely'] || [];
                        window['optimizely'].push({
                          type: "event",
                          eventName: "quotePageCtaClick",
                          tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                          }
                        });   
                    }
                })
            })())
        }
    }
    
    // insertPanel();
    
    
    function generateHtml(){
        if(currentUrl.includes('/privatecar/quote/quote')){
            return '\
                <div id="fcn29-quote-wrapper" class="fcn21-wrapper">\
                    <img id="fcn29-background-desktop" class="fcn21-background fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.9/fcn29-background.png" alt="">\
                    <img id="fcn29-background-mobile" class="fcn21-background fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-background.png" alt="">\
                    <div id="fcn21-quote-image" class="fcn21-icon fcn29-cta-click">\
                        <img class="fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                    </div>\
                    <div class="fcn21-text fcn29-cta-click">\
                        <h2 _ngcontent-tse-c139="" class="fcn29-cta-click heading-delta fcn21-desktop-title">Save £50 on each additional car with our multicar deal</h2>\
                        <div class="fcn21-title fcn29-cta-click">\
                            <img class="fcn21-mob-img fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                            <h2 _ngcontent-tse-c139="" class="heading-delta">Save £50 on each additional car with our multicar deal</h2>\
                        </div>\
                        <p _ngcontent-tse-c139="" id="fcn29-quote-text" class="panel-text mb-4">To secure this deal, follow the instructions on the confirmation page once you\'ve purchased your policy.</p>\
                        <a target="__blank" id="fcn29-quote-cta">Find out more</a>\
                    </div>\
                </div>\
            ';
        }
        else if(currentUrl.includes('/privatecar/payment/confirm') || currentUrl.includes('/privatecar/apipayment/confirm')){
            return '\
                <div id="fcn29-confirm" class="fcn21-wrapper">\
                    <img class="fcn21-background" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-background.png" alt="">\
                    <div class="fcn21-icon">\
                        <img src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                    </div>\
                    <div class="fcn21-text">\
                        <h2 _ngcontent-tse-c139="" class="heading-delta fcn21-desktop-title">Save £50 on each additional car with our multicar deal</h2>\
                        <div class="fcn21-title">\
                            <img class="fcn21-mob-img" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                            <h2 _ngcontent-tse-c139="" class="heading-delta">Save £50 on each additional car with our multicar deal</h2>\
                        </div>\
                        <p _ngcontent-tse-c139="" class="panel-text mb-4">Create a login below to find out more about our multicar deal.</p>\
                    </div>\
                </div>\
            ';
        }
        else if(currentUrl.includes('/privatecar/quote/welcome')){
            return '\
                <div id="fcn29-welcome" class="fcn21-wrapper">\
                    <img class="fcn21-background" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-background.png" alt="">\
                    <div class="fcn21-icon">\
                        <img src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                    </div>\
                    <div class="fcn21-text">\
                        <h2 _ngcontent-tse-c139="" class="heading-delta fcn21-desktop-title">Save £50 on each additional car with our multicar deal</h2>\
                        <div class="fcn21-title">\
                            <img class="fcn21-mob-img" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                            <h2 _ngcontent-tse-c139="" class="heading-delta">Save £50 on each additional car with our multicar deal</h2>\
                        </div>\
                        <p _ngcontent-tse-c139="" class="panel-text mb-4">Don’t forget, you can get a £50 discount for each additional vehicle you or anyone in your household insures with us.</p>\
                        <a id="fcn29-welcome-cta">Find out more</a>\
                    </div>\
                </div>\
            ';
        }
    }
    
    
    function insertPopup(){
        var html = '\
        <div class="fcn29-modal">\
            <h3>£50 off when you insure an additional car with us</h3>\
            <img src="https://cfactory-img.s3.amazonaws.com/FCN/2.9/fcn29-car.png" alt="">\
            <p>\
                <span class="fcn29-bolder">\
                    Step 1\
                </span>\
                - Purchase this quote for your first car\
            </p>\
            <p>\
                <span class="fcn29-bolder">\
                    Step 2\
                </span>\
                - Look out for the multicar banner on the payment confirmation page \
            </p>\
            <p>\
                <span class="fcn29-bolder">\
                    Step 3\
                </span>\
                - Follow the instructions on how to claim your discount for an additional car\
            </p>\
            <a class="fcn29-popup-cta">\
                Continue with my quote\
            </a>\
            <img class="fcn29-close" src="https://cfactory-img.s3.amazonaws.com/FCN/2.9/fcn29-close.png">\
        </div>\
        ';
    
        var newElement = document.createElement('div');
        var body = document.querySelector('body');
        newElement.innerHTML = html;
        newElement.classList.add('fcn29-popup');
        newElement.style.display = 'none';
        body.appendChild(newElement);
    
    }
})()
}}, {"value": "<style>body > app-root > div > app-layout > div > section > div > app-dashboard > div > div:nth-child(4) > hr{\n    display: none !important;\n}\n.custom-box-2-fcn410{\n  margin-top: 15px !important;\n}\n\n#main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.mt-3.d-flex.d-lg-none.flex-row{\n  display: none !important;\n}\n\n#fcn21-hidden{\n    display: none !important;\n}\n.fcn21-mob-img{\n    display: none;\n}\n.fcn-21-container{\n    flex-direction: column !important;\n    margin-top: 0.5rem !important;\n}\n.fcn21-title{\n    display: none;\n}\n\n.fcn21-panel{\n    position: relative;\n    overflow: hidden;\n    flex: auto;\n    width: 100%;\n}\n\n.fcn21-width-100{\n    max-width: 100%;\n}\n\n.fcn21-panel div{\n    position: relative;\n}\n\n.fcn21-wrapper{\n    position: relative;\n    background-color: #46154D !important;\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: center;\n    overflow: hidden;\n    margin: 0 !important;\n    border-radius: 5px;\n}\n\n.fcn21-background{\n    position: absolute;\n    top: 6%;\n    height: 104%;\n    right: 10%;\n    width: 100%;\n}\n\n.fcn21-text h2, .fcn21-text p{\n    color: white !important;\n}\n\n.fcn21-icon {\n    height: 100%;\n}\n\n.fcn21-icon img{\n    width: 79px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 20px;\n}\n\n.fcn21-text{\n    padding-top: 15px;\n    width: 83%;\n    margin-bottom: 15px !important;\n}\n.fcn21-text h2{\n    font-size: 19.5px !important;\n}\n\n.fcn21-text p{\n    font-size: 15px;\n    margin-bottom: 19px !important;\n}\n\n\n/* quote page */\n\n#fcn21-quote-container{\n    margin-bottom: 0 !important;\n}\n\n#fcn29-quote-wrapper{\n    cursor: pointer !important;\n    margin-top: 1rem !important;\n}\n\n#fcn21-quote-image{\n    margin: 20px !important;\n}\n\n#fcn29-background-mobile{\n    display: none;\n}\n\n#fcn29-quote-wrapper .fcn21-text h2{\n    font-size: 18.5px !important;\n}\n\n#fcn29-quote-wrapper .fcn21-quote-image img{\n    width: 70px;\n    height: 70px;\n    margin-left: 10px !important;\n    margin-right: 10px !important;\n}\n\n#fcn29-quote-text{\n    font-size: 14px;\n    margin-bottom: 0 !important;\n    width: 90%;\n}\n\n#fcn21-quote-image img{\n    margin: 0 !important;\n    width: 40px;\n    height: 40px;\n}\n\n#fcn29-quote-cta{\n    background-color: #F8F8F8;\n    color: #008162;\n    width: 162px;\n    text-align: center;\n    height: 33px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px;\n    border: 1px solid #008162;\n    margin-top: 18px;\n    text-decoration: none;\n}\n\n\n@media only screen and (max-width: 600px) {\n    #fcn29-quote-cta{\n        margin-right: auto;\n        margin-left: 5%;\n        display: flex;\n    }\n}\n\n.fcn29-popup{\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.4);\n    justify-content: center;\n    align-items: center;\n    z-index: 2000;\n    overflow: scroll;\n    padding-top: 5vh;\n}\n\n.fcn29-modal{\n    width: 49%;\n    min-width: 338px;\n    max-width: 588px;\n    height: auto;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.fcn29-modal img{\n    width: 24%;\n    max-width: 143px;\n    margin-top: 6%;\n}\n\n.fcn29-modal h3, .fcn29-modal p{\n    text-align: center;\n}\n\n.fcn29-bolder{\n    font-weight: bold;\n    font-family: Din Bold,-apple-system,Arial,Helvetica Neue,sans-serif;\n}\n.fcn29-modal p{\n    width: 83%;\n    text-align: left;\n    font-size: 22.5px !important;\n    margin-bottom: 2%;\n}\n\nbody > div.fcn29-popup > div > p:nth-child(3){\n    margin-top: 4%;\n}\n\n\n.fcn29-modal h3{\n    width: 83%;\n    font-size: 34px !important;\n    font-style: normal;\n    margin-top: 11%;\n    font-family: Din Bold,Verdana,sans-serif !important;\n    color: #46154D;\n}\n\n.fcn29-popup-cta{\n    background: #00B388 !important;\n    color: white !important;\n    width: 272px;\n    text-align: center;\n    font-size: 19px;\n    padding-top: 18px;\n    padding-bottom: 18px;\n    border-radius: 5px;\n    margin-top: 4%;\n    margin-bottom: 8.5% !important;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.fcn29-close{\n    margin: 0 !important;\n    width: 23px !important;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    cursor: pointer;\n}\n\n/* Payment confirm page */\n#fcn21-confirm-container{\n    margin-bottom: 1rem !important;\n    margin-top: 1rem !important;\n}\n#fcn29-confirm{\n    max-width: auto;\n    border-radius: 5px;\n    cursor: default;\n}\n#fcn29-confirm > div.fcn21-icon > img{\n    margin: 20px;\n}\n#fcn29-confirm > div.fcn21-text > p{\n    margin-bottom: 0 !important;\n    font-family: Din,Verdana,sans-serif !important;\n}\n\n\n#fcn29-confirm .fcn21-background{\n    left: 0;\n    width: 70%;\n}\n\n\n#fcn29-confirm .fcn21-title{\n    display: none !important;\n}\n\n@media only screen and (max-width: 600px){\n    #fcn29-background-mobile{\n        display: block;\n        height: 130%;\n        right: 14%;\n    }\n    #fcn29-background-desktop{\n        display: none;\n    }\n    \n    #fcn29-confirm .fcn21-background{\n        width: 90%;\n        left: 0;\n    }\n    #fcn29-confirm{\n        margin-bottom: 20px !important;\n        padding-top: 20px;\n        padding-bottom: 20px;\n    }\n    #fcn29-confirm .fcn21-icon{\n        display: flex !important;\n    }\n    #fcn29-confirm .fcn21-icon img{\n        width: 70px;\n        height: 70px;\n        margin: 15px;\n    }\n    #fcn29-confirm .fcn21-text p{\n        margin-bottom: 0 !important;\n        width: 100%;\n    }\n    #fcn29-confirm .fcn21-icon{\n        display: none;\n    }\n    #fcn29-confirm .fcn21-desktop-title{\n        display: block !important;\n    }\n}\n\n\n/* ----------------------------------------- */\n\n\n/* Welcome page */\n\n#fcn29-welcome {\n    padding: 10px;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n#fcn29-welcome .fcn21-background{\n    position: absolute;\n    top: 6%;\n    height: 100%;\n    right: 50%;\n    width: 50%;\n    max-width: 1000px;\n}\n\n#fcn29-welcome > div.fcn21-text > p{\n    font-family: Din,Verdana,sans-serif !important;\n    font-weight: light;\n}\n\n#fcn29-welcome .fcn21-icon img{\n    margin: 15px !important;\n}\n\n#fcn29-welcome .panel-text{\n    margin-bottom: 0 !important;\n}\n\n#fcn29-welcome-cta{\n    background-color: #F8F8F8;\n    color: #008162;\n    width: 162px;\n    text-align: center;\n    height: 33px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px;\n    border: 1px solid #008162;\n    margin-top: 18px;\n}\n\n@media only screen and (max-width: 990px) {\n    #fcn29-welcome{\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n    #fcn29-welcome .fcn21-background{\n        width: 100%;\n        right: 20%;\n    }\n}\n@media only screen and (max-width: 990px) {\n    #fcn29-welcome .fcn21-background{\n        width: 100%;\n        right: 5%;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    #fcn29-welcome-cta{\n        margin-right: auto;\n        margin-left: 6%;\n    }\n}\n/* ----------------------------------------- */\n\n\n@media only screen and (max-width: 990px) {\n    body > div.fcn29-popup > div > p:nth-child(3) {\n        margin-top: 7%;\n    }\n    .fcn29-popup{\n        z-index: 2000;\n    }\n    .fcn29-modal{\n        width: 60%;\n    }\n    .fcn29-modal h3{\n        font-size: 24.5px !important;\n        line-height: 30px !important;\n        margin-top: 13%;\n    }\n    .fcn29-modal p{\n        font-size: 17px !important;\n        width: 78%;\n        margin-bottom: 3%;\n        line-height: 24px !important;\n    }\n    .fcn29-modal img{\n        max-width: 200px;\n        width: 32%;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    body > div.fcn29-popup > div > p:nth-child(3) {\n        margin-top: 10%;\n    }\n    .fcn29-modal h3{\n        font-size: 20.5px !important;\n        line-height: 30px !important;\n        margin-top: 21%;\n        width: 72%;\n    }\n    .fcn29-modal img {\n        max-width: 250px;\n        width: 29%;\n        margin-top: 0%;\n    }\n    .fcn29-modal p{\n        width: 72%;\n        margin-bottom: 4%;\n    }\n    .fcn29-popup-cta{\n        margin-top: 7%;\n        margin-bottom: 14.5% !important;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    #fcn29-welcome {\n        padding: 0px;\n    }\n    .fcn21-background {\n        height: 98%;\n        right: 14%;\n    }\n    .fcn21-desktop-title{\n        display: none;\n    }\n    .fcn21-title{\n        display: flex;\n    }\n    .fcn21-title h2{\n        margin-top: 13px !important;\n        width: 71%;\n        font-size: 17px !important;\n        line-height: 25px;    \n    }\n    .fcn21-icon{\n        display: none;\n    }\n    .fcn21-mob-img{\n        display: flex;\n        width: 45px;\n        height: 45px;\n        margin: 5% 5% 5% 6%;\n    }\n    .fcn21-text {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n    }\n    .fcn21-text p {\n        font-size: 15.5px;\n        margin-bottom: 19px !important;\n        width: 87%;\n        padding-right: 1px;\n        text-align: left;\n    }\n    .fcn21-text button{\n        width: 88%;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "2BB21819-9AB1-4730-8B4B-3359EFBAF89E"}]}, {"viewId": "20955310568", "changes": [{"dependencies": [], "type": "custom_code", "id": "022B7D39-11F1-4635-AB34-822960466AAE", "value": function($){// document.cookie = "cfQA=true; max-age=30000; path=/;";

(function(){
    console.log('conv 2.9');
    var
        currentLocation = document.location.href,
        oldHref,
        called = false,
        bodyList = document.querySelector("body")
        , observer = new MutationObserver(function (mutations) {
    
            mutations.forEach(function () {
    
                currentLocation = window.location.href.split('?')[0];
    
                if(currentLocation != oldHref){
    
                    if(currentLocation.includes('privatecar/quote/quote') || currentLocation.includes('/privatecar/quote/welcome')){
                        if(!called){
                            insertPanel();
                            called = true;
                        }
                        if(currentLocation.includes('/privatecar/quote/welcome')){
                            window.addEventListener('click', function(e){
                                if(e.target.closest('#fcn29-welcome-cta')){
                                    console.log('welcome page CTA Clicked');
                                    window['optimizely'] = window['optimizely'] || [];
                                    window['optimizely'].push({
                                      type: "event",
                                      eventName: "welcomePageCtaClick",
                                      tags: {
                                        revenue: 0, // Optional in cents as integer (500 == $5.00)
                                        value: 0.00 // Optional as float
                                      }
                                    });
                                    window.location.href = 'https://www.1stcentralinsurance.com/multicar?campaign=C0000001';
                                }
                            })
                        }
                    }
                    else{
                        called = false;
                    }
                }
                else if(currentLocation.includes('privatecar/payment/confirm')){
                    insertPanel();
                    called = false;
                }
                oldHref = currentLocation;
            });
        });
    
    var config = {
        childList: true,
        subtree: true
    };
    
    
    observer.observe(bodyList, config);
    
    var currentUrl;
    var panels;
    var added = false;
    var addedWelcome = false;
    
    function checkElement(selector, success){
        var check = window.setInterval(function(){
            var element = document.querySelector(selector);
            if(element){
                clearInterval(check);
                if(success){
                    success;
                }
            }
        }, 50)
    }
    function insertPanel(){
        console.log('insert panel called')
        currentUrl = window.location.href;
        // Confirmation
        if(currentUrl.includes('/privatecar/payment/confirm') || currentUrl.includes('/privatecar/apipayment/confirm')){
            var inserted = document.querySelector('.fcn-21-container');
            var wait = window.setInterval(function(){
                panels = document.querySelector('#create-a-login');
                if(panels && !added){
                    clearInterval(wait);
                    panels.classList.add('fcn-21-container');
                    experimentCode(panels);
                    added = true;
                }
            }, 50);
    
        }
        
        // Quote page
        else if(currentUrl.includes('/privatecar/quote/quote')){
            panels = document.querySelector('app-quote-details');
            panels.classList.add('fcn-21-container');
            checkElement('app-quote-details > div.col-12.pb-3.pl-0.pr-0', experimentCode(panels));
        }
        // Welcome page
        else if(currentUrl.includes('/privatecar/quote/welcome')){
            
            var inserted = document.querySelector('.fcn-21-container');
    
            var wait = window.setInterval(function(){
                panels = document.querySelector('app-welcome > div > div.row.mt-3.mb-4');
                if(panels && !inserted){
                    clearInterval(wait);
                    addedWelcome = true;
                    panels.classList.add('fcn-21-container');
                    experimentCode(panels);
                    checkElement('app-welcome > div > div.row.mt-3.mb-4.fcn-21-container > div:nth-child(3)', (function(){
                        document.querySelector('app-welcome > div > div.row.mt-3.mb-4.fcn-21-container > div:nth-child(3)').remove();
                    })());
                }

            })

            
        }
    }
    
    
    function experimentCode(panels){
        var originalPanel;
        var updatePanel;
        if(currentLocation.includes('privatecar/payment/confirm')){
            originalPanel = document.querySelector('#create-a-login > div > div');
            updatePanel = originalPanel.cloneNode(true);
            updatePanel.classList.add('fcn21-panel');
            updatePanel.id = 'fcn21-confirm-container'
            updatePanel.innerHTML = generateHtml();
        }
        else if(currentLocation.includes('/privatecar/quote/quote')){
            originalPanel = panels.querySelector('div'),
            updatePanel = originalPanel.cloneNode(true);
            updatePanel.classList.add('fcn21-panel');
            updatePanel.classList.add('fcn21-width-100');
            updatePanel.id = 'fcn21-quote-container'
            updatePanel.classList.add('mb-4');
            updatePanel.classList.remove('p-0');
            updatePanel.classList.remove('p-1');
            updatePanel.classList.remove('pb-3');
            updatePanel.classList.remove('col-lg-6');
            updatePanel.classList.remove('py-3');
            updatePanel.innerHTML = generateHtml();
        }
        else{
            originalPanel = panels.querySelector('div'),
            updatePanel = originalPanel.cloneNode(true);
            updatePanel.classList.add('fcn21-panel');
            updatePanel.classList.add('mb-4');
            updatePanel.classList.remove('p-0');
            updatePanel.innerHTML = generateHtml();
        }
    
        if(currentUrl.includes('/privatecar/quote/welcome')){
            document.querySelector('.fcn-21-container > div.container.p-0').insertAdjacentElement('afterend', updatePanel);
        }
        else if(currentLocation.includes('privatecar/payment/confirm')){
            document.querySelector('#create-a-login > div > h3').insertAdjacentElement('beforebegin', updatePanel);
        }
        else{
            originalPanel.insertAdjacentElement('afterend', updatePanel);
        }
    
        if(currentUrl.includes('/privatecar/quote/quote')){
            insertPopup();
            var element = document.querySelector('.fcn21-panel');
            element.addEventListener('click', function(){
                var popup = document.querySelector('.fcn29-popup');
                var continueCta = popup.querySelector('.fcn29-popup-cta');
                var close = popup.querySelector('.fcn29-close');
                popup.style.display = 'block';
                close.addEventListener('click', function(){
                    popup.style.display = 'none';
                })
                continueCta.addEventListener('click', function(){
                    popup.style.display = 'none';
                })
            })
            checkElement('#fcn29-quote-cta', (function(){
                document.addEventListener('click', function(e){
                    if(e.target.closest('#fcn29-quote-wrapper')){
                        console.log('')
                        window['optimizely'] = window['optimizely'] || [];
                        window['optimizely'].push({
                          type: "event",
                          eventName: "quotePageCtaClick",
                          tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                          }
                        });   
                    }
                })
            })())
        }
    }
    
    // insertPanel();
    
    
    function generateHtml(){
        if(currentUrl.includes('/privatecar/quote/quote')){
            return '\
                <div id="fcn29-quote-wrapper" class="fcn21-wrapper">\
                    <img id="fcn29-background-desktop" class="fcn21-background fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.9/fcn29-background.png" alt="">\
                    <img id="fcn29-background-mobile" class="fcn21-background fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-background.png" alt="">\
                    <div id="fcn21-quote-image" class="fcn21-icon fcn29-cta-click">\
                        <img class="fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                    </div>\
                    <div class="fcn21-text fcn29-cta-click">\
                        <h2 _ngcontent-tse-c139="" class="fcn29-cta-click heading-delta fcn21-desktop-title">Save £50 on each additional car with our multicar deal</h2>\
                        <div class="fcn21-title fcn29-cta-click">\
                            <img class="fcn21-mob-img fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                            <h2 _ngcontent-tse-c139="" class="heading-delta">Save £50 on each additional car with our multicar deal</h2>\
                        </div>\
                        <p _ngcontent-tse-c139="" id="fcn29-quote-text" class="panel-text mb-4">To secure this deal, follow the instructions on the confirmation page once you\'ve purchased your policy.</p>\
                        <a target="__blank" id="fcn29-quote-cta">Find out more</a>\
                    </div>\
                </div>\
            ';
        }
        else if(currentUrl.includes('/privatecar/payment/confirm') || currentUrl.includes('/privatecar/apipayment/confirm')){
            return '\
                <div id="fcn29-confirm" class="fcn21-wrapper">\
                    <img class="fcn21-background" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-background.png" alt="">\
                    <div class="fcn21-icon">\
                        <img src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                    </div>\
                    <div class="fcn21-text">\
                        <h2 _ngcontent-tse-c139="" class="heading-delta fcn21-desktop-title">Save £50 on each additional car with our multicar deal</h2>\
                        <div class="fcn21-title">\
                            <img class="fcn21-mob-img" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                            <h2 _ngcontent-tse-c139="" class="heading-delta">Save £50 on each additional car with our multicar deal</h2>\
                        </div>\
                        <p _ngcontent-tse-c139="" class="panel-text mb-4">Create a login below to find out more about our multicar deal.</p>\
                    </div>\
                </div>\
            ';
        }
        else if(currentUrl.includes('/privatecar/quote/welcome')){
            return '\
                <div id="fcn29-welcome" class="fcn21-wrapper">\
                    <img class="fcn21-background" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-background.png" alt="">\
                    <div class="fcn21-icon">\
                        <img src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                    </div>\
                    <div class="fcn21-text">\
                        <h2 _ngcontent-tse-c139="" class="heading-delta fcn21-desktop-title">Save £50 on each additional car with our multicar deal</h2>\
                        <div class="fcn21-title">\
                            <img class="fcn21-mob-img" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                            <h2 _ngcontent-tse-c139="" class="heading-delta">Save £50 on each additional car with our multicar deal</h2>\
                        </div>\
                        <p _ngcontent-tse-c139="" class="panel-text mb-4">Don’t forget, you can get a £50 discount for each additional vehicle you or anyone in your household insures with us.</p>\
                        <a id="fcn29-welcome-cta">Find out more</a>\
                    </div>\
                </div>\
            ';
        }
    }
    
    
    function insertPopup(){
        var html = '\
        <div class="fcn29-modal">\
            <h3>£50 off when you insure an additional car with us</h3>\
            <img src="https://cfactory-img.s3.amazonaws.com/FCN/2.9/fcn29-car.png" alt="">\
            <p>\
                <span class="fcn29-bolder">\
                    Step 1\
                </span>\
                - Purchase this quote for your first car\
            </p>\
            <p>\
                <span class="fcn29-bolder">\
                    Step 2\
                </span>\
                - Look out for the multicar banner on the payment confirmation page \
            </p>\
            <p>\
                <span class="fcn29-bolder">\
                    Step 3\
                </span>\
                - Follow the instructions on how to claim your discount for an additional car\
            </p>\
            <a class="fcn29-popup-cta">\
                Continue with my quote\
            </a>\
            <img class="fcn29-close" src="https://cfactory-img.s3.amazonaws.com/FCN/2.9/fcn29-close.png">\
        </div>\
        ';
    
        var newElement = document.createElement('div');
        var body = document.querySelector('body');
        newElement.innerHTML = html;
        newElement.classList.add('fcn29-popup');
        newElement.style.display = 'none';
        body.appendChild(newElement);
    
    }
})()
}}, {"value": "<style>.fcn29body.custom-monthly-selected #fcn21-quote-container{\n  top: 40px;\n}\n.fcn29body.custom-monthly-selected #fcn29-quote-wrapper{\n  margin-top: 0 !important;\n}\n\n.fcn29body.custom-monthly-selected app-why-choose-us-new{\n  margin-top: 0 !important;\n}\n\n@media only screen and (max-width: 995px) {\n  .fcn29body.custom-monthly-selected #fcn21-quote-container{\n    top: 0px;\n    margin-bottom: 20px !important;\n  }\n}\n\n\n\nbody > app-root > div > app-layout > div > section > div > app-dashboard > div > div:nth-child(4) > hr{\n    display: none !important;\n}\n.custom-box-2-fcn410{\n  margin-top: 15px !important;\n}\n\n#main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.mt-3.d-flex.d-lg-none.flex-row{\n  display: none !important;\n}\n\n#fcn21-hidden{\n    display: none !important;\n}\n.fcn21-mob-img{\n    display: none;\n}\n.fcn-21-container{\n    flex-direction: column !important;\n    margin-top: 0.5rem !important;\n}\n.fcn21-title{\n    display: none;\n}\n\n.fcn21-panel{\n    position: relative;\n    overflow: hidden;\n    flex: auto;\n    width: 100%;\n    z-index: 1000;\n}\n\n.fcn21-width-100{\n    max-width: 100%;\n}\n\n.fcn21-panel div{\n    position: relative;\n}\n\n.fcn21-wrapper{\n    position: relative;\n    background-color: #46154D !important;\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: center;\n    overflow: hidden;\n    margin: 0 !important;\n    border-radius: 5px;\n}\n\n.fcn21-background{\n    position: absolute;\n    top: 6%;\n    height: 104%;\n    right: 10%;\n    width: 100%;\n}\n\n.fcn21-text h2, .fcn21-text p{\n    color: white !important;\n}\n\n.fcn21-icon {\n    height: 100%;\n}\n\n.fcn21-icon img{\n    width: 79px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 20px;\n}\n\n.fcn21-text{\n    padding-top: 15px;\n    width: 83%;\n    margin-bottom: 15px !important;\n}\n.fcn21-text h2{\n    font-size: 19.5px !important;\n}\n\n.fcn21-text p{\n    font-size: 15px;\n    margin-bottom: 19px !important;\n}\n\n\n/* quote page */\n\n#fcn21-quote-container{\n    margin-bottom: 0 !important;\n}\n\n#fcn29-quote-wrapper{\n    cursor: pointer !important;\n    margin-top: 1rem !important;\n}\n\n#fcn21-quote-image{\n    margin: 20px !important;\n}\n\n#fcn29-background-mobile{\n    display: none;\n}\n\n#fcn29-quote-wrapper .fcn21-text h2{\n    font-size: 18.5px !important;\n}\n\n#fcn29-quote-wrapper .fcn21-quote-image img{\n    width: 70px;\n    height: 70px;\n    margin-left: 10px !important;\n    margin-right: 10px !important;\n}\n\n#fcn29-quote-text{\n    font-size: 14px;\n    margin-bottom: 0 !important;\n    width: 90%;\n}\n\n#fcn21-quote-image img{\n    margin: 0 !important;\n    width: 40px;\n    height: 40px;\n}\n\n#fcn29-quote-cta{\n    background-color: #F8F8F8;\n    color: #008162;\n    width: 162px;\n    text-align: center;\n    height: 33px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px;\n    border: 1px solid #008162;\n    margin-top: 18px;\n    text-decoration: none;\n}\n\n@media only screen and (min-width: 1025px) {\n  .custom-annual-selected #fcn29-quote-wrapper, .custom-monthly-selected #fcn29-quote-wrapper{\n    margin-top: 3rem !important;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n    .custom-annual-selected #fcn21-quote-container{\n        margin-bottom: -100px !important;\n        margin-top: 100px !important;\n    }\n  .custom-monthly-selected #fcn21-quote-container{\n            margin-top: 20px !important;\n  }\n}\n\n\n\n@media only screen and (max-width: 600px) {\n    #fcn29-quote-cta{\n        margin-right: auto;\n        margin-left: 5%;\n        display: flex;\n    }\n}\n\n.fcn29-popup{\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.4);\n    justify-content: center;\n    align-items: center;\n    z-index: 2000;\n    overflow: scroll;\n    padding-top: 5vh;\n}\n\n.fcn29-modal{\n    width: 49%;\n    min-width: 338px;\n    max-width: 588px;\n    height: auto;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.fcn29-modal img{\n    width: 24%;\n    max-width: 143px;\n    margin-top: 6%;\n}\n\n.fcn29-modal h3, .fcn29-modal p{\n    text-align: center;\n}\n\n.fcn29-bolder{\n    font-weight: bold;\n    font-family: Din Bold,-apple-system,Arial,Helvetica Neue,sans-serif;\n}\n.fcn29-modal p{\n    width: 83%;\n    text-align: left;\n    font-size: 22.5px !important;\n    margin-bottom: 2%;\n}\n\nbody > div.fcn29-popup > div > p:nth-child(3){\n    margin-top: 4%;\n}\n\n\n.fcn29-modal h3{\n    width: 83%;\n    font-size: 34px !important;\n    font-style: normal;\n    margin-top: 11%;\n    font-family: Din Bold,Verdana,sans-serif !important;\n    color: #46154D;\n}\n\n.fcn29-popup-cta{\n    background: #00B388 !important;\n    color: white !important;\n    width: 272px;\n    text-align: center;\n    font-size: 19px;\n    padding-top: 18px;\n    padding-bottom: 18px;\n    border-radius: 5px;\n    margin-top: 4%;\n    margin-bottom: 8.5% !important;\n    cursor: pointer;\n    text-decoration: none;\n}\n.fcn29-popup-cta:hover{\n  background-color: #00a17a!important;\n    border-color: #00a17a!important;\n}\n\n.fcn29-close{\n    margin: 0 !important;\n    width: 23px !important;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    cursor: pointer;\n}\n\n/* Payment confirm page */\n#fcn21-confirm-container{\n    margin-bottom: 1rem !important;\n    margin-top: 1rem !important;\n}\n#fcn29-confirm{\n    max-width: auto;\n    border-radius: 5px;\n    cursor: default;\n}\n#fcn29-confirm > div.fcn21-icon > img{\n    margin: 20px;\n}\n#fcn29-confirm > div.fcn21-text > p{\n    margin-bottom: 0 !important;\n    font-family: Din,Verdana,sans-serif !important;\n}\n\n\n#fcn29-confirm .fcn21-background{\n    left: 0;\n    width: 70%;\n}\n\n\n#fcn29-confirm .fcn21-title{\n    display: none !important;\n}\n\n@media only screen and (max-width: 600px){\n    #fcn29-background-mobile{\n        display: block;\n        height: 130%;\n        right: 14%;\n    }\n    #fcn29-background-desktop{\n        display: none;\n    }\n    \n    #fcn29-confirm .fcn21-background{\n        width: 90%;\n        left: 0;\n    }\n    #fcn29-confirm{\n        margin-bottom: 20px !important;\n        padding-top: 20px;\n        padding-bottom: 20px;\n    }\n    #fcn29-confirm .fcn21-icon{\n        display: flex !important;\n    }\n    #fcn29-confirm .fcn21-icon img{\n        width: 70px;\n        height: 70px;\n        margin: 15px;\n    }\n    #fcn29-confirm .fcn21-text p{\n        margin-bottom: 0 !important;\n        width: 100%;\n    }\n    #fcn29-confirm .fcn21-icon{\n        display: none;\n    }\n    #fcn29-confirm .fcn21-desktop-title{\n        display: block !important;\n    }\n}\n\n\n/* ----------------------------------------- */\n\n\n/* Welcome page */\n\n#fcn29-welcome {\n    padding: 10px;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n#fcn29-welcome .fcn21-background{\n    position: absolute;\n    top: 6%;\n    height: 100%;\n    right: 50%;\n    width: 50%;\n    max-width: 1000px;\n}\n\n#fcn29-welcome > div.fcn21-text > p{\n    font-family: Din,Verdana,sans-serif !important;\n    font-weight: light;\n}\n\n#fcn29-welcome .fcn21-icon img{\n    margin: 15px !important;\n}\n\n#fcn29-welcome .panel-text{\n    margin-bottom: 0 !important;\n}\n\n#fcn29-welcome-cta{\n    background-color: #F8F8F8;\n    color: #008162;\n    width: 162px;\n    text-align: center;\n    height: 33px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px;\n    border: 1px solid #008162;\n    margin-top: 18px;\n}\n\n@media only screen and (max-width: 990px) {\n    #fcn29-welcome{\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n    #fcn29-welcome .fcn21-background{\n        width: 100%;\n        right: 20%;\n    }\n}\n@media only screen and (max-width: 990px) {\n    #fcn29-welcome .fcn21-background{\n        width: 100%;\n        right: 5%;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    #fcn29-welcome-cta{\n        margin-right: auto;\n        margin-left: 6%;\n    }\n}\n/* ----------------------------------------- */\n\n\n@media only screen and (max-width: 990px) {\n    body > div.fcn29-popup > div > p:nth-child(3) {\n        margin-top: 7%;\n    }\n    .fcn29-popup{\n        z-index: 2000;\n    }\n    .fcn29-modal{\n        width: 60%;\n    }\n    .fcn29-modal h3{\n        font-size: 24.5px !important;\n        line-height: 30px !important;\n        margin-top: 13%;\n    }\n    .fcn29-modal p{\n        font-size: 17px !important;\n        width: 78%;\n        margin-bottom: 3%;\n        line-height: 24px !important;\n    }\n    .fcn29-modal img{\n        max-width: 200px;\n        width: 32%;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    body > div.fcn29-popup > div > p:nth-child(3) {\n        margin-top: 10%;\n    }\n    .fcn29-modal h3{\n        font-size: 20.5px !important;\n        line-height: 30px !important;\n        margin-top: 21%;\n        width: 72%;\n    }\n    .fcn29-modal img {\n        max-width: 250px;\n        width: 29%;\n        margin-top: 0%;\n    }\n    .fcn29-modal p{\n        width: 72%;\n        margin-bottom: 4%;\n    }\n    .fcn29-popup-cta{\n        margin-top: 7%;\n        margin-bottom: 14.5% !important;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    #fcn29-welcome {\n        padding: 0px;\n    }\n    .fcn21-background {\n        height: 98%;\n        right: 14%;\n    }\n    .fcn21-desktop-title{\n        display: none;\n    }\n    .fcn21-title{\n        display: flex;\n    }\n    .fcn21-title h2{\n        margin-top: 13px !important;\n        width: 71%;\n        font-size: 17px !important;\n        line-height: 25px;    \n    }\n    .fcn21-icon{\n        display: none;\n    }\n    .fcn21-mob-img{\n        display: flex;\n        width: 45px;\n        height: 45px;\n        margin: 5% 5% 5% 6%;\n    }\n    .fcn21-text {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n    }\n    .fcn21-text p {\n        font-size: 15.5px;\n        margin-bottom: 19px !important;\n        width: 87%;\n        padding-right: 1px;\n        text-align: left;\n    }\n    .fcn21-text button{\n        width: 88%;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "5E6772FB-28D5-4EA6-AA2B-37D5624FBB8F"}]}, {"viewId": "20969870633", "changes": [{"dependencies": [], "type": "custom_code", "id": "900B2F9C-B1F8-4FE5-872F-CF1D4BB07F52", "value": function($){// document.cookie = "cfQA=true; max-age=30000; path=/;";

(function(){
    console.log('conv 2.9');
    var
        currentLocation = document.location.href,
        oldHref,
        called = false,
        bodyList = document.querySelector("body")
        , observer = new MutationObserver(function (mutations) {
    
            mutations.forEach(function () {
    
                currentLocation = window.location.href.split('?')[0];
    
                if(currentLocation != oldHref){
    
                    if(currentLocation.includes('privatecar/quote/quote') || currentLocation.includes('/privatecar/quote/welcome')){
                        if(!called){
                            insertPanel();
                            called = true;
                        }
                        if(currentLocation.includes('/privatecar/quote/welcome')){
                            window.addEventListener('click', function(e){
                                if(e.target.closest('#fcn29-welcome-cta')){
                                    console.log('welcome page CTA Clicked');
                                    window['optimizely'] = window['optimizely'] || [];
                                    window['optimizely'].push({
                                      type: "event",
                                      eventName: "welcomePageCtaClick",
                                      tags: {
                                        revenue: 0, // Optional in cents as integer (500 == $5.00)
                                        value: 0.00 // Optional as float
                                      }
                                    });
                                    window.location.href = 'https://www.1stcentralinsurance.com/multicar?campaign=C0000001';
                                }
                            })
                        }
                    }
                    else{
                        called = false;
                    }
                }
                else if(currentLocation.includes('privatecar/payment/confirm')){
                    insertPanel();
                    called = false;
                }
                oldHref = currentLocation;
            });
        });
    
    var config = {
        childList: true,
        subtree: true
    };
    
    
    observer.observe(bodyList, config);
    
    var currentUrl;
    var panels;
    var added = false;
    var addedWelcome = false;
    
    function checkElement(selector, success){
        var check = window.setInterval(function(){
            var element = document.querySelector(selector);
            if(element){
                clearInterval(check);
                if(success){
                    success;
                }
            }
        }, 50)
    }
    function insertPanel(){
        console.log('insert panel called')
        currentUrl = window.location.href;
        // Confirmation
        if(currentUrl.includes('/privatecar/payment/confirm') || currentUrl.includes('/privatecar/apipayment/confirm')){
            var inserted = document.querySelector('.fcn-21-container');
            var wait = window.setInterval(function(){
                panels = document.querySelector('#create-a-login');
                if(panels && !added){
                    clearInterval(wait);
                    panels.classList.add('fcn-21-container');
                    experimentCode(panels);
                    added = true;
                }
            }, 50);
    
        }
        
        // Quote page
        else if(currentUrl.includes('/privatecar/quote/quote')){
            panels = document.querySelector('app-quote-details');
            panels.classList.add('fcn-21-container');
            checkElement('app-quote-details > div.col-12.pb-3.pl-0.pr-0', experimentCode(panels));
        }
        // Welcome page
        else if(currentUrl.includes('/privatecar/quote/welcome')){
            
            var inserted = document.querySelector('.fcn-21-container');
    
            var wait = window.setInterval(function(){
                panels = document.querySelector('app-welcome > div > div.row.mt-3.mb-4');
                if(panels && !inserted){
                    clearInterval(wait);
                    addedWelcome = true;
                    panels.classList.add('fcn-21-container');
                    experimentCode(panels);
                    checkElement('app-welcome > div > div.row.mt-3.mb-4.fcn-21-container > div:nth-child(3)', (function(){
                        document.querySelector('app-welcome > div > div.row.mt-3.mb-4.fcn-21-container > div:nth-child(3)').remove();
                    })());
                }

            })

            
        }
    }
    
    
    function experimentCode(panels){
        var originalPanel;
        var updatePanel;
        if(currentLocation.includes('privatecar/payment/confirm')){
            originalPanel = document.querySelector('#create-a-login > div > div');
            updatePanel = originalPanel.cloneNode(true);
            updatePanel.classList.add('fcn21-panel');
            updatePanel.id = 'fcn21-confirm-container'
            updatePanel.innerHTML = generateHtml();
        }
        else if(currentLocation.includes('/privatecar/quote/quote')){
            originalPanel = panels.querySelector('div'),
            updatePanel = originalPanel.cloneNode(true);
            updatePanel.classList.add('fcn21-panel');
            updatePanel.classList.add('fcn21-width-100');
            updatePanel.id = 'fcn21-quote-container'
            updatePanel.classList.add('mb-4');
            updatePanel.classList.remove('p-0');
            updatePanel.classList.remove('p-1');
            updatePanel.classList.remove('pb-3');
            updatePanel.classList.remove('col-lg-6');
            updatePanel.classList.remove('py-3');
            updatePanel.innerHTML = generateHtml();
        }
        else{
            originalPanel = panels.querySelector('div'),
            updatePanel = originalPanel.cloneNode(true);
            updatePanel.classList.add('fcn21-panel');
            updatePanel.classList.add('mb-4');
            updatePanel.classList.remove('p-0');
            updatePanel.innerHTML = generateHtml();
        }
    
        if(currentUrl.includes('/privatecar/quote/welcome')){
            document.querySelector('.fcn-21-container > div.container.p-0').insertAdjacentElement('afterend', updatePanel);
        }
        else if(currentLocation.includes('privatecar/payment/confirm')){
            document.querySelector('#create-a-login > div > h3').insertAdjacentElement('beforebegin', updatePanel);
        }
        else{
            originalPanel.insertAdjacentElement('afterend', updatePanel);
        }
    
        if(currentUrl.includes('/privatecar/quote/quote')){
            insertPopup();
            var element = document.querySelector('.fcn21-panel');
            element.addEventListener('click', function(){
                var popup = document.querySelector('.fcn29-popup');
                var continueCta = popup.querySelector('.fcn29-popup-cta');
                var close = popup.querySelector('.fcn29-close');
                popup.style.display = 'block';
                close.addEventListener('click', function(){
                    popup.style.display = 'none';
                })
                continueCta.addEventListener('click', function(){
                    popup.style.display = 'none';
                })
            })
            checkElement('#fcn29-quote-cta', (function(){
                document.addEventListener('click', function(e){
                    if(e.target.closest('#fcn29-quote-wrapper')){
                        console.log('')
                        window['optimizely'] = window['optimizely'] || [];
                        window['optimizely'].push({
                          type: "event",
                          eventName: "quotePageCtaClick",
                          tags: {
                            revenue: 0, // Optional in cents as integer (500 == $5.00)
                            value: 0.00 // Optional as float
                          }
                        });   
                    }
                })
            })())
        }
    }
    
    // insertPanel();
    
    
    function generateHtml(){
        if(currentUrl.includes('/privatecar/quote/quote')){
            return '\
                <div id="fcn29-quote-wrapper" class="fcn21-wrapper">\
                    <img id="fcn29-background-desktop" class="fcn21-background fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.9/fcn29-background.png" alt="">\
                    <img id="fcn29-background-mobile" class="fcn21-background fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-background.png" alt="">\
                    <div id="fcn21-quote-image" class="fcn21-icon fcn29-cta-click">\
                        <img class="fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                    </div>\
                    <div class="fcn21-text fcn29-cta-click">\
                        <h2 _ngcontent-tse-c139="" class="fcn29-cta-click heading-delta fcn21-desktop-title">Save £50 on each additional car with our multicar deal</h2>\
                        <div class="fcn21-title fcn29-cta-click">\
                            <img class="fcn21-mob-img fcn29-cta-click" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                            <h2 _ngcontent-tse-c139="" class="heading-delta">Save £50 on each additional car with our multicar deal</h2>\
                        </div>\
                        <p _ngcontent-tse-c139="" id="fcn29-quote-text" class="panel-text mb-4">To secure this deal, follow the instructions on the confirmation page once you\'ve purchased your policy.</p>\
                        <a target="__blank" id="fcn29-quote-cta">Find out more</a>\
                    </div>\
                </div>\
            ';
        }
        else if(currentUrl.includes('/privatecar/payment/confirm') || currentUrl.includes('/privatecar/apipayment/confirm')){
            return '\
                <div id="fcn29-confirm" class="fcn21-wrapper">\
                    <img class="fcn21-background" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-background.png" alt="">\
                    <div class="fcn21-icon">\
                        <img src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                    </div>\
                    <div class="fcn21-text">\
                        <h2 _ngcontent-tse-c139="" class="heading-delta fcn21-desktop-title">Save £50 on each additional car with our multicar deal</h2>\
                        <div class="fcn21-title">\
                            <img class="fcn21-mob-img" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                            <h2 _ngcontent-tse-c139="" class="heading-delta">Save £50 on each additional car with our multicar deal</h2>\
                        </div>\
                        <p _ngcontent-tse-c139="" class="panel-text mb-4">Create a login below to find out more about our multicar deal.</p>\
                    </div>\
                </div>\
            ';
        }
        else if(currentUrl.includes('/privatecar/quote/welcome')){
            return '\
                <div id="fcn29-welcome" class="fcn21-wrapper">\
                    <img class="fcn21-background" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-background.png" alt="">\
                    <div class="fcn21-icon">\
                        <img src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                    </div>\
                    <div class="fcn21-text">\
                        <h2 _ngcontent-tse-c139="" class="heading-delta fcn21-desktop-title">Save £50 on each additional car with our multicar deal</h2>\
                        <div class="fcn21-title">\
                            <img class="fcn21-mob-img" src="https://cfactory-img.s3.amazonaws.com/FCN/2.1/fcn21-car.png" alt="">\
                            <h2 _ngcontent-tse-c139="" class="heading-delta">Save £50 on each additional car with our multicar deal</h2>\
                        </div>\
                        <p _ngcontent-tse-c139="" class="panel-text mb-4">Don’t forget, you can get a £50 discount for each additional vehicle you or anyone in your household insures with us.</p>\
                        <a id="fcn29-welcome-cta">Find out more</a>\
                    </div>\
                </div>\
            ';
        }
    }
    
    
    function insertPopup(){
        var html = '\
        <div class="fcn29-modal">\
            <h3>£50 off when you insure an additional car with us</h3>\
            <img src="https://cfactory-img.s3.amazonaws.com/FCN/2.9/fcn29-car.png" alt="">\
            <p>\
                <span class="fcn29-bolder">\
                    Step 1\
                </span>\
                - Purchase this quote for your first car\
            </p>\
            <p>\
                <span class="fcn29-bolder">\
                    Step 2\
                </span>\
                - Look out for the multicar banner on the payment confirmation page \
            </p>\
            <p>\
                <span class="fcn29-bolder">\
                    Step 3\
                </span>\
                - Follow the instructions on how to claim your discount for an additional car\
            </p>\
            <a class="fcn29-popup-cta">\
                Continue with my quote\
            </a>\
            <img class="fcn29-close" src="https://cfactory-img.s3.amazonaws.com/FCN/2.9/fcn29-close.png">\
        </div>\
        ';
    
        var newElement = document.createElement('div');
        var body = document.querySelector('body');
        newElement.innerHTML = html;
        newElement.classList.add('fcn29-popup');
        newElement.style.display = 'none';
        body.appendChild(newElement);
    
    }
})()
}}, {"value": "<style>body > app-root > div > app-layout > div > section > div > app-dashboard > div > div:nth-child(4) > hr{\n    display: none !important;\n}\n.custom-box-2-fcn410{\n  margin-top: 15px !important;\n}\n\n#main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.mt-3.d-flex.d-lg-none.flex-row{\n  display: none !important;\n}\n\n#fcn21-hidden{\n    display: none !important;\n}\n.fcn21-mob-img{\n    display: none;\n}\n.fcn-21-container{\n    flex-direction: column !important;\n    margin-top: 0.5rem !important;\n}\n.fcn21-title{\n    display: none;\n}\n\n.fcn21-panel{\n    position: relative;\n    overflow: hidden;\n    flex: auto;\n    width: 100%;\n}\n\n.fcn21-width-100{\n    max-width: 100%;\n}\n\n.fcn21-panel div{\n    position: relative;\n}\n\n.fcn21-wrapper{\n    position: relative;\n    background-color: #46154D !important;\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: center;\n    overflow: hidden;\n    margin: 0 !important;\n    border-radius: 5px;\n}\n\n.fcn21-background{\n    position: absolute;\n    top: 6%;\n    height: 104%;\n    right: 10%;\n    width: 100%;\n}\n\n.fcn21-text h2, .fcn21-text p{\n    color: white !important;\n}\n\n.fcn21-icon {\n    height: 100%;\n}\n\n.fcn21-icon img{\n    width: 79px;\n    margin-top: 20px;\n    margin-left: 30px;\n    margin-right: 20px;\n}\n\n.fcn21-text{\n    padding-top: 15px;\n    width: 83%;\n    margin-bottom: 15px !important;\n}\n.fcn21-text h2{\n    font-size: 19.5px !important;\n}\n\n.fcn21-text p{\n    font-size: 15px;\n    margin-bottom: 19px !important;\n}\n\n\n/* quote page */\n\n#fcn21-quote-container{\n    margin-bottom: 0 !important;\n}\n\n#fcn29-quote-wrapper{\n    cursor: pointer !important;\n    margin-top: 1rem !important;\n}\n\n#fcn21-quote-image{\n    margin: 20px !important;\n}\n\n#fcn29-background-mobile{\n    display: none;\n}\n\n#fcn29-quote-wrapper .fcn21-text h2{\n    font-size: 18.5px !important;\n}\n\n#fcn29-quote-wrapper .fcn21-quote-image img{\n    width: 70px;\n    height: 70px;\n    margin-left: 10px !important;\n    margin-right: 10px !important;\n}\n\n#fcn29-quote-text{\n    font-size: 14px;\n    margin-bottom: 0 !important;\n    width: 90%;\n}\n\n#fcn21-quote-image img{\n    margin: 0 !important;\n    width: 40px;\n    height: 40px;\n}\n\n#fcn29-quote-cta{\n    background-color: #F8F8F8;\n    color: #008162;\n    width: 162px;\n    text-align: center;\n    height: 33px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px;\n    border: 1px solid #008162;\n    margin-top: 18px;\n    text-decoration: none;\n}\n\n\n@media only screen and (max-width: 600px) {\n    #fcn29-quote-cta{\n        margin-right: auto;\n        margin-left: 5%;\n        display: flex;\n    }\n}\n\n.fcn29-popup{\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.4);\n    justify-content: center;\n    align-items: center;\n    z-index: 2000;\n    overflow: scroll;\n    padding-top: 5vh;\n}\n\n.fcn29-modal{\n    width: 49%;\n    min-width: 338px;\n    max-width: 588px;\n    height: auto;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\n.fcn29-modal img{\n    width: 24%;\n    max-width: 143px;\n    margin-top: 6%;\n}\n\n.fcn29-modal h3, .fcn29-modal p{\n    text-align: center;\n}\n\n.fcn29-bolder{\n    font-weight: bold;\n    font-family: Din Bold,-apple-system,Arial,Helvetica Neue,sans-serif;\n}\n.fcn29-modal p{\n    width: 83%;\n    text-align: left;\n    font-size: 22.5px !important;\n    margin-bottom: 2%;\n}\n\nbody > div.fcn29-popup > div > p:nth-child(3){\n    margin-top: 4%;\n}\n\n\n.fcn29-modal h3{\n    width: 83%;\n    font-size: 34px !important;\n    font-style: normal;\n    margin-top: 11%;\n    font-family: Din Bold,Verdana,sans-serif !important;\n    color: #46154D;\n}\n\n.fcn29-popup-cta{\n    background: #00B388 !important;\n    color: white !important;\n    width: 272px;\n    text-align: center;\n    font-size: 19px;\n    padding-top: 18px;\n    padding-bottom: 18px;\n    border-radius: 5px;\n    margin-top: 4%;\n    margin-bottom: 8.5% !important;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.fcn29-close{\n    margin: 0 !important;\n    width: 23px !important;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    cursor: pointer;\n}\n\n/* Payment confirm page */\n#fcn21-confirm-container{\n    margin-bottom: 1rem !important;\n    margin-top: 1rem !important;\n}\n#fcn29-confirm{\n    max-width: auto;\n    border-radius: 5px;\n    cursor: default;\n}\n#fcn29-confirm > div.fcn21-icon > img{\n    margin: 20px;\n}\n#fcn29-confirm > div.fcn21-text > p{\n    margin-bottom: 0 !important;\n    font-family: Din,Verdana,sans-serif !important;\n}\n\n\n#fcn29-confirm .fcn21-background{\n    left: 0;\n    width: 70%;\n}\n\n\n#fcn29-confirm .fcn21-title{\n    display: none !important;\n}\n\n@media only screen and (max-width: 600px){\n    #fcn29-background-mobile{\n        display: block;\n        height: 130%;\n        right: 14%;\n    }\n    #fcn29-background-desktop{\n        display: none;\n    }\n    \n    #fcn29-confirm .fcn21-background{\n        width: 90%;\n        left: 0;\n    }\n    #fcn29-confirm{\n        margin-bottom: 20px !important;\n        padding-top: 20px;\n        padding-bottom: 20px;\n    }\n    #fcn29-confirm .fcn21-icon{\n        display: flex !important;\n    }\n    #fcn29-confirm .fcn21-icon img{\n        width: 70px;\n        height: 70px;\n        margin: 15px;\n    }\n    #fcn29-confirm .fcn21-text p{\n        margin-bottom: 0 !important;\n        width: 100%;\n    }\n    #fcn29-confirm .fcn21-icon{\n        display: none;\n    }\n    #fcn29-confirm .fcn21-desktop-title{\n        display: block !important;\n    }\n}\n\n\n/* ----------------------------------------- */\n\n\n/* Welcome page */\n\n#fcn29-welcome {\n    padding: 10px;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n#fcn29-welcome .fcn21-background{\n    position: absolute;\n    top: 6%;\n    height: 100%;\n    right: 50%;\n    width: 50%;\n    max-width: 1000px;\n}\n\n#fcn29-welcome > div.fcn21-text > p{\n    font-family: Din,Verdana,sans-serif !important;\n    font-weight: light;\n}\n\n#fcn29-welcome .fcn21-icon img{\n    margin: 15px !important;\n}\n\n#fcn29-welcome .panel-text{\n    margin-bottom: 0 !important;\n}\n\n#fcn29-welcome-cta{\n    background-color: #F8F8F8;\n    color: #008162;\n    width: 162px;\n    text-align: center;\n    height: 33px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px;\n    border: 1px solid #008162;\n    margin-top: 18px;\n}\n\n@media only screen and (max-width: 990px) {\n    #fcn29-welcome{\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n    #fcn29-welcome .fcn21-background{\n        width: 100%;\n        right: 20%;\n    }\n}\n@media only screen and (max-width: 990px) {\n    #fcn29-welcome .fcn21-background{\n        width: 100%;\n        right: 5%;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    #fcn29-welcome-cta{\n        margin-right: auto;\n        margin-left: 6%;\n    }\n}\n/* ----------------------------------------- */\n\n\n@media only screen and (max-width: 990px) {\n    body > div.fcn29-popup > div > p:nth-child(3) {\n        margin-top: 7%;\n    }\n    .fcn29-popup{\n        z-index: 2000;\n    }\n    .fcn29-modal{\n        width: 60%;\n    }\n    .fcn29-modal h3{\n        font-size: 24.5px !important;\n        line-height: 30px !important;\n        margin-top: 13%;\n    }\n    .fcn29-modal p{\n        font-size: 17px !important;\n        width: 78%;\n        margin-bottom: 3%;\n        line-height: 24px !important;\n    }\n    .fcn29-modal img{\n        max-width: 200px;\n        width: 32%;\n    }\n}\n\n@media only screen and (max-width: 500px) {\n    body > div.fcn29-popup > div > p:nth-child(3) {\n        margin-top: 10%;\n    }\n    .fcn29-modal h3{\n        font-size: 20.5px !important;\n        line-height: 30px !important;\n        margin-top: 21%;\n        width: 72%;\n    }\n    .fcn29-modal img {\n        max-width: 250px;\n        width: 29%;\n        margin-top: 0%;\n    }\n    .fcn29-modal p{\n        width: 72%;\n        margin-bottom: 4%;\n    }\n    .fcn29-popup-cta{\n        margin-top: 7%;\n        margin-bottom: 14.5% !important;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    #fcn29-welcome {\n        padding: 0px;\n    }\n    .fcn21-background {\n        height: 98%;\n        right: 14%;\n    }\n    .fcn21-desktop-title{\n        display: none;\n    }\n    .fcn21-title{\n        display: flex;\n    }\n    .fcn21-title h2{\n        margin-top: 13px !important;\n        width: 71%;\n        font-size: 17px !important;\n        line-height: 25px;    \n    }\n    .fcn21-icon{\n        display: none;\n    }\n    .fcn21-mob-img{\n        display: flex;\n        width: 45px;\n        height: 45px;\n        margin: 5% 5% 5% 6%;\n    }\n    .fcn21-text {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n    }\n    .fcn21-text p {\n        font-size: 15.5px;\n        margin-bottom: 19px !important;\n        width: 87%;\n        padding-right: 1px;\n        text-align: left;\n    }\n    .fcn21-text button{\n        width: 88%;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "E517DF4F-6CB0-4C9A-B68F-9BB2BE37EAD9"}]}], "name": "Variation #1"}], "audienceIds": ["and", "18254111393", "18631160125"], "changes": null, "id": "20744901467", "integrationSettings": null}], "id": "20756583850", "weightDistributions": null, "name": "[CONV] [LIVE] FCN 2.9 - Multicar banner quote page ", "groupId": null, "commitId": "21391070720", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"adobe_analytics": {"sVariable": "", "site_catalyst_eVar": "58", "site_catalyst_prop": null}}, "integrationStringVersion": 2, "viewIds": ["21361320658"], "experiments": [{"weightDistributions": [{"entityId": "21102200054", "endOfRange": 5000}, {"entityId": "21111620995", "endOfRange": 10000}], "audienceName": "Exclude Uptrends Traffic", "name": "[CONV] [LIVE] FCN 4.8 - Monthly breakdown of Annual Price", "bucketingStrategy": null, "variations": [{"id": "21102200054", "actions": [], "name": "Original"}, {"id": "21111620995", "actions": [{"viewId": "21361320658", "changes": [{"dependencies": [], "type": "custom_code", "id": "6C42D8DF-7199-4A00-939B-7DA0B8B26111", "value": function($){(function (croco) {
    console.log('4.8 ... is fired');


    setTimeout(function () {
        console.log('4.8 loop');
        var config = {
            va: 'b',
            id: '1176',
            s3: '1stcentralinsurance'
        };

        croco(config, function (win, doc, q, qs, qsa, ready, applied, css, asset) {
            function waitElement(a,b){if(document.querySelector(a)){b();}else{setTimeout(function(){waitElement(a,b);},0);}}


            setInterval(function(){
                if (document.querySelector('input[nam="source-code"]') &&
                        document.querySelector('input[nam="source-code"]').value !== 'FC000016' &&
                        document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1 &&
                        document.querySelector('[data-uptrends-id="choose-annual-top"]') && document.querySelector('[data-uptrends-id="choose-annual-top"]').classList.contains('active')){
                            variant();
                        }
            }, 50);
    
    
            function style() {
                css([
                    // ' [data-adobelaunch-id="dns-quote-paymentMethod-annualPrice"] ~ .row.justify-content-center.align-items-center.p-3.grow.d-none.d-lg-flex, .croco-d-none { display: none !important; }',
                    // ' .payment-method-box[data-uptrends-id=choose-monthly-top]>.d-none.d-lg-block.croco-d-none.d-lg-block { display: none !important; }',
                    // // ' .col-lg-1.d-none.d-xl-inline-block.p-xs-0 { display: none !important; }',
                    // ' .totalCostOutput, .annualCostOutput { text-align: left; font-size: 19px; margin-top: 2px; margin-bottom: 18px; font-family: Din,Verdana,sans-serif; }',
                    // ' .totalCostOutput b, .annualCostOutput b { font-family: Din Bold,Verdana,sans-serif; }',
                    // ' .totalCostOutput { padding-left: 21px; }',
                    // ' .annualCostOutput { padding-left: 0;}',
                    // ' .payment-method-box[data-uptrends-id=choose-annual-top] .payment-btn { margin-top: 0; }',
                    // ' .totalCostOutput + .payment-btn, .annualCostOutput + .payment-btn { margin: 0 auto 8px; width: 94%; padding-top: 10.5px !important; padding-bottom: 10.5px !important; padding-left: 17px !important;}',
                    // '@media (min-width: 922px) {',
                    // ' body:not(.new-theme) .totalCostOutput + .payment-btn .rounded-circle, body:not(.new-theme) .annualCostOutput + .payment-btn .rounded-circle { min-width: 17px; height: 17px; top: -3px; position: relative; font-size: 10px; line-height: 1; padding-top: 3px; }',
                    // ' body:not(.new-theme) .annualCostOutput + .payment-btn .rounded-circle { top: 0px; }',
                    // '}',
                    // '@media screen and (min-width: 1200px) {',
                    // ' .payment-method-box { height: 219px !important; }',
                    // ' .payment-method-container { height: 220px !important; }',
                    // '}',
                    // '@media screen and (max-width: 767px) {',
                    // ' .totalCostOutput, .annualCostOutput { text-align: center; font-size: 12px; padding-left: 0; margin-top: -3px; margin-bottom: 8px;}',
                    // ' .totalCostOutput b, .annualCostOutput b { display: block; }',
                    // '}',
                    // ''
                ]);
            }
    
            function IsJsonString(str) {
    
                try {
    
                    JSON.parse(str);
    
                } catch (e) {
    
                    return false;
                }
    
                return true;
            }
    
            function renderAnnuallyPlan(totalPrice) {
                console.log('4.8 render annually plan called');
                // document.querySelector('[data-uptrends-id="annualprice"]');
                var annualCost = qs('[data-uptrends-id="annualprice"]');
                var annualCostInner = annualCost.querySelector('.whole-digit').innerHTML + annualCost.querySelector('.fraction-digit').innerHTML;
                var annualCostOutput = annualCostInner.substr(1);
                if(annualCostOutput.includes(',')){
                    annualCostOutput = annualCostOutput.replace(',', '');
                }
                annualCostDigit = (Number(annualCostOutput) / 11).toFixed(2);
                var className = 'annualCostOutput';
                if(!qs('.' + className)) {
                    var totalCostOutput = q('<div>', {'class': className});
                    var currPrice = totalPrice ? totalPrice : annualCostDigit;
                    var html = 
                    '<span>Equivalent to just <b>{{pound}}<span class="price">{{annualCount}}</span>/month<b></span>';
                    totalCostOutput.innerHTML = html.replace(/{{pound}}/, annualCostInner.substr(0, 1)).replace(/{{annualCount}}/, currPrice);
                    annualCost.parentNode.insertBefore(totalCostOutput, annualCost.nextSibling);
                }
               
            }
            function renderMonthlyPlan(PlanTotalPrice) {
                console.log('4.8 render monthly plan called');
                var annualCost = qs('[data-uptrends-id="annualprice"]');
                var annualCostInner = annualCost.querySelector('.whole-digit').innerHTML + annualCost.querySelector('.fraction-digit').innerHTML;
                // var totalCost = qs('[data-uptrends-id="total-cost"]');
                var totalCost = qs('#quote-side-summary > div.row > div:nth-child(7) > strong');
                if(!totalCost){
                    totalCost = qs('#quote-side-summary > div:nth-child(2) > div > div.col-3.d-block.d-xl-flex.justify-content-end.pl-0 > strong');
                }
                var monthlyPrice = qs('[data-uptrends-id="monthlyprice"]');
                var className = 'totalCostOutput';
                if(!qs('.' + className)) {
                    var totalCostOutput = q('<div>', {'class': className});
                    var currPrice = PlanTotalPrice ? PlanTotalPrice : totalCost.innerHTML.substr(1);
                    // var currPrice = PlanTotalPrice ? PlanTotalPrice : totalCost.querySelector('strong').innerHTML.substr(1);
                    var html = 
                    '<span>Total annual cost: <b>{{pound}}<span class="price">{{totalCost}}</span></b></span>';
                    totalCostOutput.innerHTML = html.replace(/{{pound}}/, annualCostInner.substr(0, 1)).replace(/{{totalCost}}/, currPrice);
                    monthlyPrice.parentNode.insertBefore(totalCostOutput, monthlyPrice.nextSibling);
                }
            }
    
            function pricesOutput() {
                // var totalCost = qs('[data-uptrends-id="total-cost"]');
                var totalCost = qs('#quote-side-summary > div.row > div:nth-child(7) > strong');

                if(totalCost) {
                    var monthlyInfoContainer = totalCost.closest('div.d-none.d-lg-block');
                    monthlyInfoContainer.classList.add('croco-d-none');
        
                    renderMonthlyPlan();
                    renderAnnuallyPlan();
                }
                else{
                    totalCost = qs('#quote-side-summary > div:nth-child(2) > div > div.col-3.d-block.d-xl-flex.justify-content-end.pl-0 > strong');
                    renderMonthlyPlan();
                    renderAnnuallyPlan();
                }
            }
    
            function updateMonthlyPrice(PlanTotalPrice) {
                if(qs('.totalCostOutput')) {
                    var totalPrice = qs('.totalCostOutput').querySelector('.price');
                    if(totalPrice) {
                        totalPrice.innerHTML = PlanTotalPrice;
                    }
                }
            }
    
            function updateAnnuallyPrice(TotalPrice) {
                if(qs('.annualCostOutput')) {
                    var annualPrice = qs('.annualCostOutput').querySelector('.price');
                    if(annualPrice) {
                        annualPrice.innerHTML = (TotalPrice / 11).toFixed(2);
                    }
                }
            }
    
            function updatePrices(response) {
                    var PlanTotalPrice = response.Data.QuotePrice.PlanTotalPrice;
                    var TotalPrice =  response.Data.QuotePrice.TotalPrice;
                    if(PlanTotalPrice) {
                        updateMonthlyPrice(PlanTotalPrice);
                    }
                    if(TotalPrice) {
                        updateAnnuallyPrice(TotalPrice);
                    }
            }

            function ancilliaryCard() {

                return q('.ancillary-card');
    
            }

            function cvAncillaryDetails() {

                var ancillaryDetails = sessionStorage.getItem('cvAncillaryDetails');
    
                if ( ancillaryDetails ) {
                    return JSON.parse(ancillaryDetails);
                }
    
                return null;
    
            }

            function addPrice(response) {

                var $cards = ancilliaryCard();
    
                var ancillaryDetails = response ? response.Data.AncillaryDetails || response.Data.Workflow.AncillaryDetails : cvAncillaryDetails();
    
                var ancillaryData = {
                    PA: [],
                    HC: [],
                    EP: []
                };
    
                var ids = [
                    'pa',
                    'hc',
                    'ep'
                ];

                
                if ($cards && ancillaryDetails && !q('.cdk-overlay-backdrop')) {
                    console.log($cards && ancillaryDetails && !q('.cdk-overlay-backdrop'));
    
                    ancillaryDetails.forEach(function(details){
                        ids.forEach(function(id){
                            if (details.Abbreviation === id.toUpperCase()) { 
                                ancillaryData[details.Abbreviation].push(details);
                            }
                        });
                    });
    
                    (Array.isArray($cards) ? $cards : [$cards]).forEach(function($card){
    
                        var $title = q('h3.ancillary-title', $card),
                            $texts = q('.ancillary-text', $card);
    
                        if ($title.nextElementSibling) {
                            $title.nextElementSibling.classList.add('zi-5');
                        }
    
                        if ($title && ancillaryData[$card.getAttribute('id').toUpperCase()]) {
    
                            if (q('.price-start', $title.parentElement)) {
    
                                q('.price-start', $title.parentElement).remove();
    
                            }
    
                            ancillaryData[$card.getAttribute('id').toUpperCase()].forEach(function(detail, i) {
    
                                if (i === 0) {
                                    $title.parentElement.append(
                                        renderPrice( isAnnual() ? detail.TotalPrice : detail.MonthlyPrice, ancillaryData[$card.getAttribute('id').toUpperCase()])
                                    );
                                }
    
                                if ($texts && !isAnnual()) {
    
                                    (Array.isArray($texts) ? $texts : [$texts]).forEach(function($text, x) {
                                        if (!q('.price-year', $text) && i === x) { 
                                            $text.appendChild(
                                                renderPricePerYear(detail.TotalPrice)
                                            );
                                        }
                                    });
    
                                }
    
                            });
                        }
    
                    });
    
                } else {
    
                    setTimeout(function() {
                       addPrice(response);
                    });
    
                }
    
            }
    
            function variant() {
              console.log('4.8 variant called');
                // var xhr = new XMLHttpRequest();
                // xhr.withCredentials = true;
    
                // xhr.addEventListener("readystatechange", function() {
                //     if(this.readyState === 4) {
                //         // just pass ajaxcomplete has the same data
                //     }
                // });
    
                    // var totalCost = qs('[data-uptrends-id="total-cost"]');
                    var totalCost = qs('#quote-side-summary > div.row > div:nth-child(7) > strong');
                    if(totalCost) {
                        var monthlyInfoContainer = totalCost.closest('div.d-none.d-lg-block');
                        monthlyInfoContainer.classList.add('croco-d-none');
                    }
                    else{
                        totalCost = qs('#quote-side-summary > div:nth-child(2) > div > div.col-3.d-block.d-xl-flex.justify-content-end.pl-0 > strong');
                        var monthlyInfoContainer = totalCost.closest('div.d-none.d-lg-block');
                        monthlyInfoContainer.classList.add('croco-d-none');
                    }
    
                    pricesOutput();
                    // addPrice();
    
                    // xhr.open("GET", location.origin.replace('quote', 'api') + "/CustomerWeb/CustomerDigital/api/workflow/get/true");
                    // xhr.send();
    
            }
    
            function ajaxComplete1(callback) {
                var send = XMLHttpRequest.prototype.send;
                XMLHttpRequest.prototype.send = function () {
                    this.addEventListener('load', function () {
                        callback(this, arguments);
                    });
                    return send.apply(this, arguments);
                };
            }
    
            function events() {

                var selectionFlag;
                setInterval(function(){
                    var currentSelection = Boolean(document.querySelector('div[data-uptrends-id="choose-monthly-top"].bg-secondary'));
                    if(currentSelection !== selectionFlag){
                        selectionFlag = currentSelection;
                        console.log('4.8 selection changed, calling pricesoutput function');
                        // pricesOutput();
                        variant();
                        // updatePrices(response);
                    }
                }, 50);

                // ajaxComplete1(function(xhr) {
                    
                //     if (IsJsonString(xhr.response)) {
                //         console.log(xhr.response);
                //         var response = JSON.parse(xhr.response);
                //         if (response && response.Data && response.Data.QuotePrice) {
                            
                //             // clearTimeout(this.pt);
    
                //             console.log('here, calling pricesoutput function');
                //             pricesOutput();
                //             updatePrices(response);
                            
                //             // addPrice(response);
                //         }
                //     }
                   
    
                // });
            }

            // Else run in doc ready
            ready(function () {
                if (!applied()) {
                    style();

                    // waitElement('[data-uptrends-id="total-cost"]', function () {
                    waitElement('#quote-side-summary', function () {
                        variant();
                        events();
                    });
                    
                }
            });
    
            // if (!applied()) {
            //     style();
            //     variant();
            //     events();
            // }
    
        });
        
    });

})(function(b,m){var h=window,l=document,j=document.querySelector.bind(document),c=document.querySelectorAll.bind(document);var d=("croco-"+b.id+"-"+b.va).toLowerCase(),a="//ta-client-assets.s3.amazonaws.com/"+b.s3+"/"+b.id;function i(n,p){var q;if(!n){return null;}if(n instanceof Window||n instanceof Document){return n;}if(n.match(/(<\w+>)/g)){q=l.createElement(n.replace(/(<|>)/g,""));if(typeof p==="object"){for(var o in p){if(o.toUpperCase()==="HTML"){q.innerHTML=p[o];}else{q.setAttribute(o,p[o]);}}}return q;}else{if(p){p=p[0]||p;q=p.querySelectorAll(n);}else{q=c(n);}}return q.length>1?Array.prototype.slice.call(q):(q.length==1?q[0]:null);}function g(n){var o="";n.forEach(function(q,p){if(q.charAt(0)===" "){o+="."+d+" "+q+" ";}else{o+=q+" ";}});j("head").appendChild(i("<style>",{html:o}));}function k(n){if(typeof n!=="function"){return;}if(l.readyState==="interactive"||l.readyState==="complete"){return n();}l.addEventListener("DOMContentLoaded",n,false);}function f(o){var n=j("html");if(h.location.search.indexOf("run=false")!==-1){if(!o){return 1;}}if(!n.classList.contains(d)){n.classList.add(d);return 0;}return 1;}function e(n){return a+"/"+n;}h.croco=i;m(h,l,i,j,c,k,f,g,e);});
}}, {"value": "<style>div[data-uptrends-id=\"choose-monthly-top\"] .row{\n  display: none !important;\n}\n[data-uptrends-id=\"choose-monthly-top\"] .payment-btn{\n    text-align: center;\n}\n\n.custom-annual-selected app-why-choose-us-new{\n  margin-top: 50px !important;\n}\n\n@media only screen and (min-width: 1200px){\n  .custom-annual-selected app-why-choose-us-new{\n    margin-top: 120px !important;\n  }\n}\n\n#main-content > app-quote-page > div > app-quote-standard > div > div > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div > div:nth-child(2) > div.bg-white.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.text-secondary.transition-all > div.row, #main-content > app-quote-page > div > app-quote-standard > div > div > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0.ng-star-inserted > app-payment-method > div > div:nth-child(1) > div.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.transition-all.ng-star-inserted.bg-white.text-secondary > div.row, #main-content > app-quote-page > div > app-quote-standard > div > div > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div > div:nth-child(1) > div.bg-white.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.text-secondary.transition-all > div.row, #main-content > app-quote-page > div > app-quote-standard > div > div > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div > div:nth-child(1) > div.active.bg-secondary.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.text-white.transition-all > div.row{\n    display : none !important;\n  }\n  /* here */\n  #main-content > app-quote-page > div > app-quote-standard > div > div > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3 > app-payment-method > div > div:nth-child(1) > div.bg-white.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.text-secondary.transition-all > div.row{\n    display: none !important;\n  }\n  \n  #main-content > app-quote-page > app-quote-standard > div > div > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div > div:nth-child(2) > div.active.align-items-center.bg-secondary.border-secondary.card.col-6.d-flex.justify-content-center.mr-md-3.p-3.payment-method-box.pointer.shadow.text-white.transition-all > div.annualCostOutput > span, #main-content > app-quote-page > app-quote-standard > div > div > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div > div:nth-child(2) > div.active.align-items-center.bg-secondary.border-secondary.card.col-6.d-flex.justify-content-center.mr-md-3.p-3.payment-method-box.pointer.shadow.text-white.transition-all > div.annualCostOutput > span > b > span, #main-content > app-quote-page > div > app-quote-standard > div > div > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div > div:nth-child(2) > div.active.align-items-center.bg-secondary.border-secondary.card.col-6.d-flex.justify-content-center.mr-md-3.p-3.payment-method-box.pointer.shadow.text-white.transition-all > div.annualCostOutput > span, #main-content > app-quote-page > div > app-quote-standard > div > div > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div > div:nth-child(2) > div.active.align-items-center.bg-secondary.border-secondary.card.col-6.d-flex.justify-content-center.mr-md-3.p-3.payment-method-box.pointer.shadow.text-white.transition-all > div.annualCostOutput > span > b > span {\n      color: white !important;\n      width: 100%;\n      text-align: center;\n  }\n  #main-content>app-quote-page>app-quote-standard>div>div.row.col-12.p-0.m-0.mb-3>div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0>app-quote-details>div.col-12.pb-3.pl-0.pr-0>app-payment-method>div.col-12.m-0.p-0.payment-method-container.row>div.d-flex.justify-content-between.pl-0.p-xs-0.col-12>div.bg-white.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.text-secondary.transition-all>div.row, #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.transition-all.active.bg-secondary.text-white > div.row {\n      display: none !important;\n  }\n  body.fcn-48.custom-monthly-selected #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.active.bg-secondary.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.text-white.transition-all > div.row{\n    display: flex !important;\n  }\n  \n  body.fcn-48.custom-monthly-selected #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.active.bg-secondary.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.text-white.transition-all > div.row > div{\n    display: block !important;\n    padding-left: 15px !important;\n  }\n  \n  /* body.fcn-48.custom-monthly-selected .totalCostOutput{\n    display: none !important;\n  } */\n  \n  .payment-method-box[data-uptrends-id=choose-monthly-top]>.d-none.d-lg-block.croco-d-none.d-lg-block {\n      display: none !important;\n  }\n  \n  .col-lg-1.d-none.d-xl-inline-block.p-xs-0 {\n      display: none !important;\n  }\n  \n  .totalCostOutput, .annualCostOutput {\n      /* text-align: left; */\n      text-align: center !important;\n      font-size: 19px !important;\n      margin-top: 2px !important;\n      margin-bottom: 18px !important;\n      font-family: Din, Verdana, sans-serif;\n  }\n  .totalCostOutput span{\n      /* text-align: left; */\n      text-align: center;\n      font-size: 19px !important;\n      margin-top: 2px !important;\n      /* margin-bottom: 18px !important; */\n      margin-right: 3px !important;\n      width: 100%;\n      text-align: center;\n      /* font-family: Din Bold, Verdana, sans-serif !important; */\n  }\n  .annualCostOutput span {\n      /* text-align: left; */\n      text-align: center;\n      font-size: 19px !important;\n      margin-top: 2px !important;\n      /* margin-bottom: 18px !important;\n      margin-right: 3px !important; */\n      width: 100%;\n      text-align: center;\n      /* font-family: Din Bold, Verdana, sans-serif !important; */\n  }\n  \n  .totalCostOutput b, .annualCostOutput b {\n      font-family: Din Bold, Verdana, sans-serif !important;\n  }\n  \n  .totalCostOutput {\n      /* padding-left: 21px; */\n  }\n  \n  .annualCostOutput {\n      padding-left: 0;\n  }\n  \n  .payment-method-box[data-uptrends-id=choose-annual-top] .payment-btn {\n      margin-top: 0;\n  }\n  \n  .totalCostOutput+.payment-btn, .annualCostOutput+.payment-btn {\n      margin: 0 auto 8px;\n      width: 94%;\n      padding-top: 10.5px !important;\n      padding-bottom: 10.5px !important;\n      padding-left: 17px !important;\n  }\n  \n  .price{\n      font-family: Din Bold, Verdana, sans-serif !important;\n  }\n  \n  .pay-annually-box{\n    display: none !important;\n  }\n  \n  body.fcn-48.custom-annual-selected .totalCostOutput{\n    width: 100% !important;\n  }\n  \n  body.fcn-48.custom-monthly-selected .totalCostOutput{\n    width: fit-content !important;\n  }\n  \n  \n  @media (min-width: 922px) {\n      body:not(.new-theme) .totalCostOutput+.payment-btn .rounded-circle, body:not(.new-theme) .annualCostOutput+.payment-btn .rounded-circle {\n          min-width: 17px;\n          height: 17px;\n          top: -3px;\n          position: relative;\n          font-size: 10px;\n          line-height: 1;\n          padding-top: 3px;\n      }\n      body:not(.new-theme) .annualCostOutput+.payment-btn .rounded-circle {\n          top: 0px;\n      }\n  }\n  \n  @media screen and (min-width: 1200px) {\n      .payment-method-box {\n          height: 219px !important;\n      }\n  }\n  \n  @media screen and (max-width: 767px) {\n      .totalCostOutput, .annualCostOutput {\n          text-align: center;\n          font-size: 12px;\n          padding-left: 0;\n          /* margin-top: -3px !important;\n          margin-bottom: 8px !important; */\n          width: 100%;\n          line-height: 15px;\n      }\n    .totalCostOutput span, .annualCostOutput span {\n      font-size: 11px !important;\n    }\n      .totalCostOutput b, .annualCostOutput b {\n          display: inline-block;\n      }\n    \n    #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.active.bg-secondary.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.text-white.transition-all, #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.align-items-center.bg-white.border-secondary.card.col-6.d-flex.justify-content-center.mr-md-3.p-3.payment-method-box.pointer.shadow.text-secondary.transition-all, #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.transition-all.bg-white.text-secondary, #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.align-items-center.border-secondary.card.col-6.d-flex.justify-content-center.mr-md-3.p-3.payment-method-box.pointer.shadow.transition-all.active.bg-secondary.text-white{\n      padding: 5px !important;\n    }\n    \n    #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.align-items-center.bg-white.border-secondary.card.col-6.d-flex.justify-content-center.mr-md-3.p-3.payment-method-box.pointer.shadow.text-secondary.transition-all > div.payment-price.text-center.DinBold, #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.active.bg-secondary.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.text-white.transition-all > div.payment-price.text-center.DinBold, #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.transition-all.bg-white.text-secondary > div.payment-price.text-center.DinBold, #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.align-items-center.border-secondary.card.col-6.d-flex.justify-content-center.mr-md-3.p-3.payment-method-box.pointer.shadow.transition-all.active.bg-secondary.text-white > div.payment-price.text-center.DinBold{\n      margin-bottom: 0 !important;\n    }\n    #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.align-items-center.bg-white.border-secondary.card.col-6.d-flex.justify-content-center.mr-md-3.p-3.payment-method-box.pointer.shadow.text-secondary.transition-all > div.align-items-center.btn-light-grey-secondary.d-flex.justify-content-center.mb-2.mt-auto.p-2.payment-btn.rounded.text-secondary.transition-all.w-100, #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.active.bg-secondary.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.text-white.transition-all > div.DinBold.active.align-items-center.bg-secondary-purple.border-none.d-flex.justify-content-center.mb-2.mt-auto.p-2.payment-btn.rounded.text-white.transition-all, #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.align-items-center.border-secondary.card.col-6.d-flex.justify-content-center.mr-md-3.p-3.payment-method-box.pointer.shadow.transition-all.active.bg-secondary.text-white > div.align-items-center.d-flex.justify-content-center.mb-2.mt-auto.p-2.payment-btn.rounded.transition-all.w-100.active.bg-secondary-purple.border-none.text-white, #main-content > app-quote-page > app-quote-standard > div > div.row.col-12.p-0.m-0.mb-3 > div.col-lg-7.mt-3.d-inline-block.pl-0.pr-0.p-xs-0 > app-quote-details > div.col-12.pb-3.pl-0.pr-0 > app-payment-method > div.col-12.m-0.p-0.payment-method-container.row > div.d-flex.justify-content-between.pl-0.p-xs-0.col-12 > div.border-secondary.card.col-6.d-flex.justify-content-start.mr-md-3.p-3.payment-method-box.pointer.shadow.transition-all.bg-white.text-secondary > div.DinBold.align-items-center.d-flex.justify-content-center.mb-2.mt-auto.p-2.payment-btn.rounded.transition-all.btn-light-grey-secondary.text-secondary{\n      margin-right: 4% !important;\n      margin-left: 4% !important;\n      margin-top: auto !important;\n      width: 91% !important;\n    }\n  }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "4A8A3224-A3C3-4600-BB3E-674C75D48106"}]}], "name": "Variation #1"}], "audienceIds": ["and", "18631160125"], "changes": null, "id": "21117660691", "integrationSettings": null}], "id": "21115890781", "weightDistributions": null, "name": "[CONV] [LIVE] FCN 4.8 - Monthly breakdown of Annual Price", "groupId": null, "commitId": "21324092354", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"adobe_analytics": {"sVariable": "", "site_catalyst_eVar": "59", "site_catalyst_prop": null}}, "integrationStringVersion": 2, "viewIds": ["21347081219"], "experiments": [{"weightDistributions": [{"entityId": "21338430698", "endOfRange": 5000}, {"entityId": "21355070236", "endOfRange": 10000}], "audienceName": "Exclude Uptrends Traffic", "name": "[CONV] [LIVE] FCN 4.13 - Decoy pricing (painted door)", "bucketingStrategy": null, "variations": [{"id": "21338430698", "actions": [{"viewId": "21347081219", "changes": []}], "name": "Original"}, {"id": "21355070236", "actions": [{"viewId": "21347081219", "changes": [{"dependencies": [], "type": "custom_code", "id": "76A444A9-C4DA-4AC0-B09F-23DC5FA4CBE5", "value": function($){(function(){
    console.log('FCN 4.13 - V1 JS NEW');
    var config = {
        originalSelector: '#policy-upgrade > section > div:nth-child(4)',
        newImgSrc: 'https://cfactory-img.s3.amazonaws.com/FCN/4.13/premierPlus.png',
        newInnerHtml: function(ngvalue){
            var output = '\
            <p '+ ngvalue +'class="scheme-text w-100" style="margin-bottom: 0 !important;"> Our standard cover PLUS <br _ngcontent-yrt-c104="">\
                <span '+ ngvalue +' >\
                    <img '+ ngvalue +' src="assets/1stCentral/images/svg/RAC.svg" alt="RAC icon" class="product-upgrade-rac-icon">\
                </span> Breakdown Cover and \
                Legal Expenses Cover PLUS Enhanced Hire Car Cover and Personal Accident\
            </p>';
            return output;
        },
        innerTextSelector: '.scheme-info',
        dropdownHtml: function(ngvalue){
            var output = '\
            <div '+ ngvalue +'="" class="scheme-info-container bg-light-grey w-100 p-3 pr-5 position-relative fcn413dropdown" style="display: none">\
                <img _ngcontent-qsg-c104="" src="assets/1stCentral/images/svg/x-cross-black.svg" alt="x" tabindex="0" role="button" class="rounded-circle close-icon additional-info-close p-1" data-adobelaunch-id="dns-quote-hideSchemeInfoFCP">\
                <h2>Thanks for your interest</h2>\
                Unfortunately this product is not available yet. You can still add the Hire Car and Personal Accident enhancements further down on this page.\
                <br>\
                <br>\
                We’re always updating our products to serve our customers\' needs. Thank you for your feedback!\
            </div>';
            return output;
        },
        popupHtml: '<div class="fcn413popup_container" style="display: none;">\
            <div class="fcn413popup">\
                <img src="assets/1stCentral/images/svg/x-cross-black.svg" alt="x" tabindex="0" role="button" class="fcn413popup_close">\
                <h2 _ngcontent-ief-c135="" class="welcome-text col-lg-12 text-secondary-purple p-0 sessioncamhidetext">Thanks for your interest</h2>\
                <p>\
                Unfortunately this product is not available yet. You can still add the Hire Car and Personal Accident enhancements further down on this page.\
                <br>\
                <br>\
                We’re always updating our products to serve our customers\' needs. Thank you for your feedback!\
                </p>\
            </div>\
        </div>',
        sendEvent: function(apiName){
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                type: "event",
                eventName: apiName,
            });
        },
        clicked: false
    };
    var infoOpened = false;

    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            checkRenewal(true);
        } catch (e) {
            console.log(e);
        }
    };

    checkRenewal(false);

    function checkRenewal(keepChecking) {
        if ((document.querySelector('img[alt="1st Central Standard Policy logo"]') || window.sessionStorage.getItem('fcn413viewed')) && document.location.href.includes('privatecar/quote/quote') && document.querySelector(config.originalSelector) && !document.querySelector('.fcn413clone')){
            initVar();
        }
        else if (keepChecking) {
            setTimeout(function () {
                checkRenewal(keepChecking);
            }, 50);
        }
    }

    var checkAnnualMonthly = window.setInterval(function(){
        if(document.querySelector('.fcn413price')){

            var price = document.querySelector('.fcn413price');
            if(document.querySelector('[data-uptrends-id="choose-monthly-top"].bg-secondary')){
                if(price.innerHTML != '£6.01 extra per month'){
                    price.innerHTML = '£6.01 extra per month';
                }
            }
            if(document.querySelector('[data-uptrends-id="choose-annual-top"].bg-secondary')){
                if(price.innerHTML != '£72.02 extra per year'){
                    price.innerHTML = '£72.02 extra per year';
                }
            }
        }
    }, 100)

    function initVar(){
        var elementToClone = document.querySelector(config.originalSelector);
        if(elementToClone.classList.contains('active')){
            elementToClone = document.querySelector('#policy-upgrade > section > div:nth-child(3)');
        }
        var clone = elementToClone.cloneNode(true),
            content = clone.querySelector(config.innerTextSelector);
            ngContentValue = Array.prototype.slice.call(content.attributes)[0].localName;
            // Gets the ngcontent value from the original element for styling purposes
        window.sessionStorage.setItem('fcn413viewed', true);
        clone.querySelector('img').src = config.newImgSrc;
        clone.classList.add('fcn413clone');
        clone.querySelector('.scheme-price-area p').classList.add('fcn413price');
        clone.querySelector('.scheme-text').innerHTML = config.newInnerHtml(ngContentValue);
        clone.querySelector('.scheme-price-area p').innerHTML = '£72.02 extra per year';
        clone.insertAdjacentHTML('beforeend', config.dropdownHtml(ngContentValue));
        elementToClone.parentNode.appendChild(clone);
        var inserted = document.querySelector('.fcn413clone');
        inserted.querySelectorAll('*').forEach(function(el){
            el.setAttribute(ngContentValue, '');
        });
        
        document.querySelector('body').insertAdjacentHTML('beforeend', config.popupHtml);
        if(window.sessionStorage.getItem('fcn413clicked')){
            document.querySelector('.fcn413clone .btn').setAttribute('style', 'color: rgba(166, 166, 166) !important; border: 1px solid rgba(208, 208, 206, 1) !important; pointer-events: none !important;');
        }
    }
    
    document.addEventListener('click', function(e){
        var target = e.target;
        if(target.closest('.fcn413clone .btn') && !config.clicked){
            config.sendEvent('fcn413upgradeClick');
            document.querySelector('.fcn413popup_container').style.display = 'flex';
            target.closest('.fcn413clone .btn').setAttribute('style', 'color: rgba(166, 166, 166) !important; border: 1px solid rgba(208, 208, 206, 1) !important; pointer-events: none !important;');
            window.sessionStorage.setItem('fcn413clicked', true);
            config.clicked = true;
        }
        if(target.closest('.fcn413popup_close') || target.classList.contains('fcn413popup_container')){
            document.querySelector('.fcn413popup_container').style.display = 'none';
        }
        if(target.closest('.fcn413clone .close-icon')){
            target.closest('.fcn413clone').querySelector('.scheme-info-container').style.display = 'none';
            infoOpened = false;
        }
        if(target.closest('.fcn413clone .info-icon')){
            config.sendEvent('fcn413iconClick');
            if(infoOpened){
                target.closest('.fcn413clone').querySelector('.scheme-info-container').style.display = 'none';
                infoOpened = false;
            }
            else{
                target.closest('.fcn413clone').querySelector('.scheme-info-container').style.display = 'block';
                infoOpened = true;
            }
        }
    });
})();
}}, {"value": "<style>.fcn413popup_container{\n    position: fixed;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n    z-index: 100;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n.fcn413popup{\n    position: relative;\n    background-color: white;\n    width: 90%;\n    max-width: 573px;\n    border-radius: 6px;\n    padding: 40px;\n    text-align: center;\n}\n.fcn413popup_container .fcn413popup_close{\n    position: absolute;\n    top: 10%;\n    right: 5%;\n    width: 22px;\n    cursor: pointer;\n}\n\n.fcn413popup h2{\n    color: #46154d!important;\n    font-family: Justus Pro Bold Italic,Rockwell,Cambria,Georgia,serif !important;\n    font-size: 30px;\n}\n\n.fcn413popup p{\n    font-size: 20px;\n    font-weight: 400 !important;\n    font-family: Din !important;\n    margin-bottom: 0 !important;\n}\n\n.fcn413dropdown h2{\n    font-size: 16px;\n    font-weight: 900;\n    font-family: Din Bold,Verdana,sans-serif;\n    margin-bottom: 5px;\n}\n\n.fcn413dropdown img{\n    top: 1.1rem !important;\n    width: 27px !important;\n    height: 27px !important;\n}\n\n@media only screen and (max-width: 600px) {\n    .fcn413popup{\n        padding: 22px;\n        padding-top: 50px;\n    }\n\n    .fcn413popup_container .fcn413popup_close{\n        top: 7%;\n        width: 18px;\n    }\n\n    .fcn413popup h2{\n        font-size: 20px;\n    }\n    \n    .fcn413popup p{\n        font-size: 16px;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "6035F2F7-9412-4513-9C4F-07F1DA05489C"}]}], "name": "Variation #1"}], "audienceIds": ["and", "18631160125"], "changes": null, "id": "21312401298", "integrationSettings": null}], "id": "21327531473", "weightDistributions": null, "name": "[CONV] [LIVE] FCN 4.13 - Decoy pricing (painted door)", "groupId": "21403700118", "commitId": "21371790087", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"adobe_analytics": {"sVariable": "", "site_catalyst_eVar": "56", "site_catalyst_prop": null}}, "integrationStringVersion": 2, "viewIds": ["21362152035"], "experiments": [{"weightDistributions": [{"entityId": "21403740245", "endOfRange": 2500}, {"entityId": "21380380591", "endOfRange": 5000}, {"entityId": "21415300306", "endOfRange": 7500}, {"entityId": "21405170953", "endOfRange": 10000}], "audienceName": "Exclude Uptrends Traffic", "name": "[CONV] [LIVE] FCN 4.15 - Fixed price", "bucketingStrategy": null, "variations": [{"id": "21403740245", "actions": [{"viewId": "21362152035", "changes": []}], "name": "Original"}, {"id": "21380380591", "actions": [{"viewId": "21362152035", "changes": [{"dependencies": [], "type": "custom_code", "id": "93EE1E03-73B4-455F-99A9-B1D4800C68C2", "value": function($){// https://cfactory-img.s3.amazonaws.com/FCN/4.13/fcn415_tick.png

(function(){
    console.log('FCN 4.15 - V1 JS');
    var config = {
        originalSelector: 'app-why-choose-us-new',
        html: '\
        <div class="fcn415_container">\
            <p class="fcn415_title">\
                <img src="https://cfactory-img.s3.amazonaws.com/FCN/4.13/fcn413_tick.png" alt="">\
                Get a 3-year price promise\
            </p>\
            <p class="fcn415_subtitle">\
                If nothing changes, we won\'t increase your price.\
            </p>\
            <a class="fcn415_cta">\
                Continue with 3-year price promise\
            </a>\
        </div>',
        popupHtml: '\
        <div class="fcn415popup_container" style="display: none;">\
            <div class="fcn415popup">\
                <img src="assets/1stCentral/images/svg/x-cross-black.svg" alt="x" tabindex="0" role="button" class="fcn415popup_close">\
                <h2 _ngcontent-ief-c135="" class="welcome-text col-lg-12 text-secondary-purple p-0 sessioncamhidetext">Thanks for your interest</h2>\
                <p>\
                    Unfortunately this option isn’t available yet. We’re always updating our offerings to best serve the needs of our customers. Thank you for your feedback!\
                </p>\
            </div>\
        </div>',
        sendEvent: function(apiName){
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                type: "event",
                eventName: apiName,
            });
        },
        clicked: false
    };

    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            checkRenewal(true);
        } catch (e) {
            // console.log(e);
        }
    };

    checkRenewal(false);

    function checkRenewal(keepChecking) {
        if (!document.querySelector('app-header-value-journey') && document.location.href.includes('privatecar/quote/quote') && document.querySelector('[data-uptrends-id="choose-monthly-top"]') && document.querySelector('[data-uptrends-id="choose-annual-top"]')){
            console.log('FCN 4.15 - Init Var Called');
            initVar();
        }
        else if (keepChecking) {
            setTimeout(function () {
                checkRenewal(keepChecking);
            }, 50);
        }
    }


    function initVar(){
        document.querySelector('body').insertAdjacentHTML('beforeend', config.popupHtml);
        var insertHere = document.querySelector('app-quote-details > div.col-12.pb-3.ng-star-inserted');
        
        if(!document.querySelector('.fcn415_container')){
            insertHere.insertAdjacentHTML('beforeend', config.html);
        }

        if(window.sessionStorage.getItem('fcn415clicked')){
            var check = setInterval(function(){
                if(document.querySelector('.fcn415_cta')){
                    clearInterval(check);
                    document.querySelector('.fcn415_cta').setAttribute('style', 'background: rgba(193, 193, 193, 1); border: 1px solid rgba(208, 208, 206, 1) !important; pointer-events: none !important;');
                    document.querySelector('.fcn415_cta').innerText = 'Not available yet';
                }
            }, 50);
        }
    }
    
    document.addEventListener('click', function(e){
        var target = e.target;
        if(target.closest('.fcn415_cta')){
            document.querySelector('.fcn415popup_container').style.display = 'flex';
            target.closest('.fcn415_cta').setAttribute('style', 'background: rgba(193, 193, 193, 1); border: 1px solid rgba(208, 208, 206, 1) !important; pointer-events: none !important;');
            target.closest('.fcn415_cta').innerText = 'Not available yet';
            window.sessionStorage.setItem('fcn415clicked', true);
            config.clicked = true;
            config.sendEvent('fcn415continueFixed');
        }
        if(target.closest('.fcn415popup_close') || target.classList.contains('fcn415popup_container')){
            document.querySelector('.fcn415popup_container').style.display = 'none';
        }
        if(target.closest('.fcn415clone .close-icon')){
            target.closest('.fcn415clone').querySelector('.scheme-info-container').style.display = 'none';
        }
    });
})();
}}]}], "name": "Variation #1"}, {"id": "21415300306", "actions": [{"viewId": "21362152035", "changes": [{"dependencies": [], "type": "custom_code", "id": "84D9551B-0EFE-47FC-9738-374F6C85C55D", "value": function($){// https://cfactory-img.s3.amazonaws.com/FCN/4.13/fcn415_tick.png

(function(){
    console.log('FCN 4.15 - V2 JS');
    var config = {
        originalSelector: 'app-why-choose-us-new',
        html: '\
        <div class="fcn415_container">\
            <p class="fcn415_title">\
                <img src="https://cfactory-img.s3.amazonaws.com/FCN/4.13/fcn413_tick.png" alt="">\
                Get a 3-year price promise\
            </p>\
            <p class="fcn415_subtitle">\
            If nothing changes, we won\'t increase your price. Get your quote locked in for the next 3 years for just £15 extra per year.\
            </p>\
            <a class="fcn415_cta">\
                Continue with 3-year price promise\
            </a>\
        </div>',
        popupHtml: '\
        <div class="fcn415popup_container" style="display: none;">\
            <div class="fcn415popup">\
                <img src="assets/1stCentral/images/svg/x-cross-black.svg" alt="x" tabindex="0" role="button" class="fcn415popup_close">\
                <h2 _ngcontent-ief-c135="" class="welcome-text col-lg-12 text-secondary-purple p-0 sessioncamhidetext">Thanks for your interest</h2>\
                <p>\
                    Unfortunately this option isn’t available yet. We’re always updating our offerings to best serve the needs of our customers. Thank you for your feedback!\
                </p>\
            </div>\
        </div>',
        sendEvent: function(apiName){
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                type: "event",
                eventName: apiName,
            });
        },
        clicked: false
    };


    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            checkRenewal(true);
        } catch (e) {
            // console.log(e);
        }
    };

    checkRenewal(false);

    function checkRenewal(keepChecking) {
        if (!document.querySelector('app-header-value-journey') && document.location.href.includes('privatecar/quote/quote') && document.querySelector('[data-uptrends-id="choose-monthly-top"]') && document.querySelector('[data-uptrends-id="choose-annual-top"]')){
            console.log('FCN 4.15 - Init Var Called');
            initVar();
        }
        else if (keepChecking) {
            setTimeout(function () {
                checkRenewal(keepChecking);
            }, 50);
        }
    }


    function initVar(){
        document.querySelector('body').insertAdjacentHTML('beforeend', config.popupHtml);
        var insertHere = document.querySelector('app-quote-details > div.col-12.pb-3.ng-star-inserted');
        if(!document.querySelector('.fcn415_container')){
            insertHere.insertAdjacentHTML('beforeend', config.html);
        }

        if(window.sessionStorage.getItem('fcn415clicked')){
            var check = setInterval(function(){
                if(document.querySelector('.fcn415_cta')){
                    clearInterval(check);
                    document.querySelector('.fcn415_cta').setAttribute('style', 'background: rgba(193, 193, 193, 1); border: 1px solid rgba(208, 208, 206, 1) !important; pointer-events: none !important;');
                    document.querySelector('.fcn415_cta').innerText = 'Not available yet';
                }
            }, 50);
        }
    }
    
    document.addEventListener('click', function(e){
        var target = e.target;
        if(target.closest('.fcn415_cta')){
            document.querySelector('.fcn415popup_container').style.display = 'flex';
            target.closest('.fcn415_cta').setAttribute('style', 'background: rgba(193, 193, 193, 1); border: 1px solid rgba(208, 208, 206, 1) !important; pointer-events: none !important;');
            target.closest('.fcn415_cta').innerText = 'Not available yet';
            window.sessionStorage.setItem('fcn415clicked', true);
            config.clicked = true;
            config.sendEvent('fcn415continueFixed');
        }
        if(target.closest('.fcn415popup_close') || target.classList.contains('fcn415popup_container')){
            document.querySelector('.fcn415popup_container').style.display = 'none';
        }
        if(target.closest('.fcn415clone .close-icon')){
            target.closest('.fcn415clone').querySelector('.scheme-info-container').style.display = 'none';
        }
    });
})();
}}]}], "name": "Variation #2"}, {"id": "21405170953", "actions": [{"viewId": "21362152035", "changes": [{"dependencies": [], "type": "custom_code", "id": "49583A8E-CDCD-4E7C-B908-F03171C0769D", "value": function($){// https://cfactory-img.s3.amazonaws.com/FCN/4.13/fcn415_tick.png

(function(){
    console.log('FCN 4.15 - V3 JS');
    var config = {
        originalSelector: 'app-why-choose-us-new',
        html: '\
        <div class="fcn415_container">\
            <p class="fcn415_title">\
                <img src="https://cfactory-img.s3.amazonaws.com/FCN/4.13/fcn413_tick.png" alt="">\
                Get a 3-year price promise\
            </p>\
            <p class="fcn415_subtitle">\
            If nothing changes, we won\'t increase your price. Get your quote locked in for the next 3 years for just £25 extra per year.\
            </p>\
            <a class="fcn415_cta">\
                Continue with 3-year price promise\
            </a>\
        </div>',
        popupHtml: '\
        <div class="fcn415popup_container" style="display: none;">\
            <div class="fcn415popup">\
                <img src="assets/1stCentral/images/svg/x-cross-black.svg" alt="x" tabindex="0" role="button" class="fcn415popup_close">\
                <h2 _ngcontent-ief-c135="" class="welcome-text col-lg-12 text-secondary-purple p-0 sessioncamhidetext">Thanks for your interest</h2>\
                <p>\
                    Unfortunately this option isn’t available yet. We’re always updating our offerings to best serve the needs of our customers. Thank you for your feedback!\
                </p>\
            </div>\
        </div>',
        sendEvent: function(apiName){
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                type: "event",
                eventName: apiName,
            });
        },
        clicked: false
    };

    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            checkRenewal(true);
        } catch (e) {
            // console.log(e);
        }
    };

    checkRenewal(false);


    function checkRenewal(keepChecking) {
        if (!document.querySelector('app-header-value-journey') && document.location.href.includes('privatecar/quote/quote') && document.querySelector('[data-uptrends-id="choose-monthly-top"]') && document.querySelector('[data-uptrends-id="choose-annual-top"]')){
            console.log('FCN 4.15 - Init Var Called');
            initVar();
        }
        else if (keepChecking) {
            setTimeout(function () {
                checkRenewal(keepChecking);
            }, 50);
        }
    }

    function initVar(){
        document.querySelector('body').insertAdjacentHTML('beforeend', config.popupHtml);
        var insertHere = document.querySelector('app-quote-details > div.col-12.pb-3.ng-star-inserted');
        if(!document.querySelector('.fcn415_container')){
            insertHere.insertAdjacentHTML('beforeend', config.html);
        }
        if(window.sessionStorage.getItem('fcn415clicked')){
            var check = setInterval(function(){
                if(document.querySelector('.fcn415_cta')){
                    clearInterval(check);
                    document.querySelector('.fcn415_cta').setAttribute('style', 'background: rgba(193, 193, 193, 1); border: 1px solid rgba(208, 208, 206, 1) !important; pointer-events: none !important;');
                    document.querySelector('.fcn415_cta').innerText = 'Not available yet';
                }
            }, 50);
        }
    }
    
    document.addEventListener('click', function(e){
        var target = e.target;
        if(target.closest('.fcn415_cta')){
            document.querySelector('.fcn415popup_container').style.display = 'flex';
            target.closest('.fcn415_cta').setAttribute('style', 'background: rgba(193, 193, 193, 1); border: 1px solid rgba(208, 208, 206, 1) !important; pointer-events: none !important;');
            target.closest('.fcn415_cta').innerText = 'Not available yet';
            window.sessionStorage.setItem('fcn415clicked', true);
            config.clicked = true;
            config.sendEvent('fcn415continueFixed');
        }
        if(target.closest('.fcn415popup_close') || target.classList.contains('fcn415popup_container')){
            document.querySelector('.fcn415popup_container').style.display = 'none';
        }
        if(target.closest('.fcn415clone .close-icon')){
            target.closest('.fcn415clone').querySelector('.scheme-info-container').style.display = 'none';
        }
    });
})();
}}]}], "name": "Variation #3"}], "audienceIds": ["and", "18631160125"], "changes": null, "id": "21401780252", "integrationSettings": null}], "id": "21390050448", "weightDistributions": null, "name": "[CONV] [LIVE] FCN 4.15 - Fixed price", "groupId": "21403700118", "commitId": "21396550647", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.fcn415_trustbox .fcn415_container{\n    margin-top: 20px;\n}\n.fcn415_container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid rgba(166, 84, 159, 1);\n    border-radius: 4.4px;\n    padding-top: 24px;\n    padding-bottom: 24px;\n    font-size: 22px;\n    box-shadow: 0px 3.47026px 3.47026px rgba(0, 0, 0, 0.18);\n    text-align: center;\n    margin-top: 40px;\n}\n.fcn415_title{\n    color: #46154D;\n    font-size: 22px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: Din Bold,Verdana,sans-serif;\n    margin-bottom: 1px;\n}\n.fcn415_title img{\n    width: 19.3px;\n    margin-right: 8px;\n}\n.fcn415_subtitle{\n    text-align: center;\n    font-family: Din,Verdana,sans-serif !important;\n    font-size: 16px;\n    margin-bottom: 21px;\n    width: 95%;\n    color: #46154D;\n}\n.fcn415_cta{\n    background-color: #A6549F;\n    color: white !important;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    padding-right: 40px;\n    padding-left: 40px;\n    border-radius: 3.5px;\n    font-size: 16px;\n    width: 90%;\n    max-width: 336px;\n    text-align: center;\n}\n\n/* ------------------------------------- */\n\n.fcn415popup_container{\n    position: fixed;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100%;\n    z-index: 1000;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n.fcn415popup{\n    position: relative;\n    background-color: white;\n    width: 90%;\n    max-width: 573px;\n    border-radius: 6px;\n    padding: 40px;\n    text-align: center;\n    padding-top: 70px;\n}\n.fcn415popup_container .fcn415popup_close{\n    position: absolute;\n    top: 13%;\n    right: 7%;\n    width: 22px;\n    cursor: pointer;\n}\n\n.fcn415popup h2{\n    color: #46154d!important;\n    font-family: Justus Pro Bold Italic,Rockwell,Cambria,Georgia,serif !important;\n    font-size: 30px;\n    margin-bottom: 10px;\n}\n\n.fcn415popup p{\n    font-size: 20px;\n    font-weight: 400 !important;\n    font-family: Din !important;\n    margin-bottom: 0 !important;\n}\n\n.fcn415dropdown h2{\n    font-size: 16px;\n    font-weight: 900;\n    font-family: Din Bold,Verdana,sans-serif;\n    margin-bottom: 5px;\n}\n\n.fcn415dropdown img{\n    top: 1.1rem !important;\n    width: 27px !important;\n    height: 27px !important;\n}\n\n@media only screen and (max-width: 900px) {\n    .fcn415_container{\n        margin-top: 15px;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    .fcn415popup{\n        padding: 22px;\n        padding-top: 50px;\n    }\n    .fcn415popup_container{\n        padding-left: 20px;\n        padding-right: 20px;\n    }\n    .fcn415popup_container .fcn415popup_close{\n        top: 7%;\n        width: 18px;\n    }\n\n    .fcn415popup h2{\n        font-size: 20px;\n    }\n    \n    .fcn415popup p{\n        font-size: 16px;\n    }\n\n    .fcn415_cta{\n        padding-left: 5px;\n        padding-right: 5px;\n        padding-top: 15px;\n        padding-bottom: 15px;\n        width: 90%;\n        text-align: center;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "A9CB66F2-AC1F-4BB5-93E8-09A35D2309F6"}]}], "visitorIdLocator": null, "listTargetingKeys": [], "groups": [{"weightDistributions": [{"entityId": "21390050448", "endOfRange": 5000}, {"entityId": "21327531473", "endOfRange": 10000}], "id": "21403700118", "name": "FCN 4.15 + FCN 4.13"}], "views": [{"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "quote.1stcentralinsurance.com/privatecar/payment/bankdetails", "match": "simple"}]], "activationType": "url_changed", "name": "New bank details", "apiName": "13270690418_new_bank_details", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15370770718"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "url_changed", "name": "New quote page", "apiName": "13270690418_new_quote_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "15374920238"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "quote.1stcentralinsurance.com/privatecar/payment/instalmentcarddetails", "match": "simple"}]], "activationType": "url_changed", "name": "New instalment card details", "apiName": "13270690418_new_instalment_card_details", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15382850285"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "quote.1stcentralinsurance.com/privatecar/payment/carddetails", "match": "simple"}]], "activationType": "url_changed", "name": "New card details", "apiName": "13270690418_new_card_details", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15384500280"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "/consumer/login/retrievelogin", "match": "simple"}]], "name": "Retrieve quote login", "apiName": "13270690418_retrieve_quote_login", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15392900138"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "quote.1stcentralinsurance.com/privatecar/quote/importantstatements", "match": "simple"}]], "activationType": "url_changed", "name": "New Important Statements", "apiName": "13270690418_new_important_statements", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15407300039"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "dom_changed", "name": "Any quote page", "apiName": "13270690418_any_quote_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "15429850056"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.1stcentralinsurance.com/privatecar/newquote/car", "match": "simple"}]], "name": "Car details step 1", "apiName": "13270690418_car_details_step_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15445420083"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "/additional-car", "match": "substring"}]], "name": "Campaign Second car discount", "apiName": "13270690418_campaign_second_car_discount", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15446950932"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "/privatecar/payment/confirm", "match": "substring"}], ["or", {"type": "url", "value": "/privatecar/apipayment/confirm", "match": "substring"}]], "activationType": "url_changed", "name": "Policy confirmation page", "apiName": "13270690418_policy_confirmation_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15463040088"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.1stcentralinsurance.com/", "match": "simple"}]], "name": "Homepage", "apiName": "13270690418_homepage", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15721510164"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "/Customer/Account", "match": "substring"}]], "name": "Portal Home", "apiName": "13270690418_portal_home", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16886885955"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "element_present", "value": ".sticky-side-element .traffic-image[alt=\"1CentralPlus_240x120\"],.sticky-side-element .traffic-image[alt=\"1CentralPremier_240x120\"]"}]], "activationType": "dom_changed", "name": "Quote Page - Plus & Premier", "apiName": "13270690418_quote_page__plus__premier", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "17022474336"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "element_present", "value": ".sticky-side-element .traffic-image[alt=\"1stcentralinsurance\"]"}], ["or", {"type": "url", "value": "quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "dom_changed", "name": "Quote Page - Standard Visitors (Excludes Plus & Premier)", "apiName": "13270690418_quote_page__standard_visitors_excludes_plus__premier", "tags": [], "undoOnDeactivation": true, "deactivationEnabled": true, "id": "17027574581"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "element_present", "value": ".sticky-side-element .traffic-image[alt=\"1CentralPlus_240x120\"],.sticky-side-element .traffic-image[alt=\"1CentralPremier_240x120\"],.sticky-side-element .traffic-image[alt=\"1CentralLegal_240x120\"]"}], ["or", {"type": "url", "value": "quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "dom_changed", "name": "Quote Page - Plus, Premier & Legal", "apiName": "13270690418_quote_page__plus_premier__legal", "tags": [], "undoOnDeactivation": true, "deactivationEnabled": true, "id": "17429560633"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.1stcentralinsurance.com/get-in-contact", "match": "simple"}, {"type": "url", "value": "https://help.1stcentralinsurance.com/", "match": "simple"}]], "name": "Contact us + FAQ home", "apiName": "13270690418_contact_us__faq_home", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17563520411"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "element_present", "value": "#policy-upgrade"}]], "activationType": "dom_changed", "name": "Quote Page with #policy-upgrade", "apiName": "13270690418_quote_page_with_policyupgrade", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "17757631259"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.1stcentralinsurance.com/get-in-contact", "match": "simple"}]], "name": "Contact page", "apiName": "13270690418_contact_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17829421118"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.1stcentralinsurance.com/", "match": "simple"}, {"type": "url", "value": "https://www.1stcentralinsurance.com/get-in-contact", "match": "simple"}]], "name": "Home + Contact", "apiName": "13270690418_home__contact", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17836250041"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote page [Aggregators] (excl. renewals)", "apiName": "13270690418_conv_quote_page_excl_renewals", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var cvAggregators = ['meer-spacestation.co.uk', 'quotezone.co.uk', 'compareni.com', 'comparethemarket.com', 'confused.com', 'gocompare', 'uswitch.com', 'moneysupermarket.com', 'mustard.co.uk'];
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);

			checkRenewal(true);
		} catch (e) {
			console.log(e);
		}
	};

	checkRenewal(false);

	function checkRenewal(keepChecking) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016') {
            for(var i = 0; i < cvAggregators.length; i++){
                if(document.referrer.indexOf(cvAggregators[i]) > -1){
                    activate();       
                }
            }
		} else if (keepChecking) {
			setTimeout(function() {
				checkRenewal(keepChecking);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "17926793058"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "1stcentralinsurance.com", "match": "substring"}]], "activationType": "callback", "name": "[CONV] Sitewide (Excl. Renewals)", "apiName": "13270690418_conv_sitewide", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    window.springBoard = window.springBoard || {};

    window.springBoard.createCookie = function(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        var cDomain = typeof window.springBoard.cookieDomain !== 'undefined' ? window.springBoard.cookieDomain : (document.location.host.indexOf("www.") == 0) ? document.location.host.substr(3, document.location.host.length) : document.location.host;
        document.cookie = escape(name) + "=" + escape(value) + expires + ";domain=" + cDomain + ";path=/" + (document.location.protocol == "https:" ? "; secure" : "");

        return null;
    };

    window.springBoard.readCookie = function(name) {
        var nameEQ = escape(name) + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
        }
        return null;
    };

	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);

			checkRenewal(true);
		} catch (e) {
			console.log(e);
		}
	};

	checkRenewal(false);

	function checkRenewal(keepChecking) {
		var cvPathname = window.location.pathname;
        if(window.location.href.indexOf('quote.1stcentralinsurance.com') >-1 && (cvPathname === '/privatecar/quote/quote' || cvPathname === '/privatecar/quote/importantstatements' || cvPathname === '/privatecar/payment/bankdetails')){
            if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016') {
				window.springBoard.createCookie('cvActivate');
				activate();
            } else if (keepChecking) {
                setTimeout(function() {
                    checkRenewal(keepChecking);
                }, 50);
            }
		} else if(cvPathname === '/privatecar/payment/confirm'){
			if(window.springBoard.readCookie('cvActivate')){
				activate();
			}
        } else {
			activate();
		}
	} 
}
, "deactivationEnabled": false, "id": "17943800228"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "quote.1stcentralinsurance.com/privatecar/quote/importantstatements", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Important Statements (excl. renewals)", "apiName": "13270690418_conv_important_statements_excl_renewals", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);

			checkRenewal(true);
		} catch (e) {
			console.log(e);
		}
	};

	checkRenewal(false);

	function checkRenewal(keepChecking) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016') {
			activate();
		} else if (keepChecking) {
			setTimeout(function() {
				checkRenewal(keepChecking);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "17957741481"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/importantstatements", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Statements page (excl. renewals)", "apiName": "13270690418_conv_statements_page_excl_renewals", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);

			checkRenewal(true);
		} catch (e) {
			console.log(e);
		}
	};

	checkRenewal(false);

	function checkRenewal(keepChecking) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016') {
            activate();       
		} else if (keepChecking) {
			setTimeout(function() {
				checkRenewal(keepChecking);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "17970082416"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}, {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/importantstatement", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote page and Statement page (excl. renewals)", "apiName": "13270690418_conv_quote_page_and_statement_page_excl_renewals", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);

			checkRenewal(true);
		} catch (e) {
			console.log(e);
		}
	};

	checkRenewal(false);

	function checkRenewal(keepChecking) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016') {
            activate();       
		} else if (keepChecking) {
			setTimeout(function() {
				checkRenewal(keepChecking);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "18032870396"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote page (excl. renewals)", "apiName": "13270690418_conv_quote_page_excl_renewals_1", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);

			checkRenewal(true);
		} catch (e) {
			console.log(e);
		}
	};

	checkRenewal(false);

	function checkRenewal(keepChecking) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016') {
            activate();       
		} else if (keepChecking) {
			setTimeout(function() {
				checkRenewal(keepChecking);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "18035962061"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote page (excl. renewals & excl. Third Party)", "apiName": "13270690418_conv_quote_page_excl_renewals__excl_third_party", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);

			checkRenewal(true);
		} catch (e) {
			console.log(e);
		}
	};

	checkRenewal(false);

	function checkRenewal(keepChecking) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016' && document.querySelectorAll('app-cover-details .details-card-table.striped-rows .row.py-1 .col-7.col-lg-8.text-right').length > 5) {
			if(document.querySelectorAll('app-cover-details .details-card-table.striped-rows .row.py-1 .col-7.col-lg-8.text-right')[0].innerHTML.trim() === 'Comprehensive'){
				activate();   
			}    
		} else if (keepChecking) {
			setTimeout(function() {
				checkRenewal(keepChecking);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "18062501249"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/payment/bankdetails", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Bank Details page (excl. renewals)", "apiName": "13270690418_conv_bank_details_page_excl_renewals", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);

			checkRenewal(true);
		} catch (e) {
			console.log(e);
		}
	};

	checkRenewal(false);

	function checkRenewal(keepChecking) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016') {
            activate();       
		} else if (keepChecking) {
			setTimeout(function() {
				checkRenewal(keepChecking);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "18145171164"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "/oops-error", "match": "substring"}]], "activationType": "url_changed", "name": "[CONV] Oops error", "apiName": "13270690418_conv_oops_error", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "18217065143"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote page (excl. renewals & excl. Third Party & excl. Value customers)", "apiName": "13270690418_conv_quote_page_excl_renewals__excl_third_party__exc", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);

			checkRenewal(true);
		} catch (e) {
			console.log(e);
		}
	};

	checkRenewal(false);

	function checkRenewal(keepChecking) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016' && document.querySelectorAll('app-cover-details .details-card-table.striped-rows .row.py-1 .col-7.col-lg-8.text-right').length > 5 && document.querySelectorAll('app-source-of-sale .badge-pill > .traffic-image:not(.source)') && document.querySelectorAll('app-source-of-sale .badge-pill > .traffic-image:not(.source)')[0].src.indexOf('1CentralValue') < 0) {
			if(document.querySelectorAll('app-cover-details .details-card-table.striped-rows .row.py-1 .col-7.col-lg-8.text-right')[0].innerHTML.trim() === 'Comprehensive'){
				activate();   
			}    
		} else if (keepChecking) {
			setTimeout(function() {
				checkRenewal(keepChecking);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "18259813396"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote page (excl. renewals & excl. Third Party & excl. Value customers & excl. Premier customers)", "apiName": "13270690418_conv_quote_page_excl_renewals__excl_third_party__e_1", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);

			checkRenewal(true);
		} catch (e) {
			console.log(e);
		}
	};

	checkRenewal(false);

	function checkRenewal(keepChecking) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016' && document.querySelectorAll('app-cover-details .details-card-table.striped-rows .row.py-1 .col-7.col-lg-8.text-right').length > 5 && document.querySelectorAll('app-source-of-sale .badge-pill > .traffic-image:not(.source)') && document.querySelectorAll('app-source-of-sale .badge-pill > .traffic-image:not(.source)')[0].src.indexOf('1CentralValue') < 0 && document.querySelectorAll('app-source-of-sale .badge-pill > .traffic-image:not(.source)')[0].src.indexOf('1CentralPremier') < 0) {
			if(document.querySelectorAll('app-cover-details .details-card-table.striped-rows .row.py-1 .col-7.col-lg-8.text-right')[0].innerHTML.trim() === 'Comprehensive'){
				activate();   
			}    
		} else if (keepChecking) {
			setTimeout(function() {
				checkRenewal(keepChecking);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "18506533319"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}, {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/importantstatements", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote page and Statement page (excl. renewals) & (excl. Central Value Page)", "apiName": "13270690418_conv_quote_page_and_statement_page_excl_renewals__ex", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);
			window.currentTime = new Date().getTime();
			checkRenewal(true, window.currentTime);
		} catch (e) {
			console.log(e);
		}
	};
	window.currentTime = new Date().getTime();
	checkRenewal(true, window.currentTime);
	function checkRenewal(keepChecking, currentTime) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016' && document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1) {
console.log('campaing:FCN2');
            activate(); 
		} else if (keepChecking && (new Date().getTime() - currentTime)/1000 < 4){
			setTimeout(function() {
				checkRenewal(keepChecking, currentTime);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "18622250698"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://u-fci-a-quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "[CONV][UAT] Quote page (excl. renewals)", "apiName": "13270690418_conv_quote_pages_excl_renewals_confusedcom", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);

			checkRenewal(true);
		} catch (e) {
			console.log(e);
		}
	};

	checkRenewal(false);

	function checkRenewal(keepChecking) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016') {
            activate();       
		} else if (keepChecking) {
			setTimeout(function() {
				checkRenewal(keepChecking);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "18634054327"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://my.1stcentralinsurance.com", "match": "substring"}]], "activationType": "callback", "name": "[Pull] FCUX-18 Portal Account + Dashboard", "apiName": "13270690418_pull_fcux18_portal_account__dashboard", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var waitForCorrectPage;
	if (!waitForCorrectPage) {
		waitForCorrectPage = setInterval(function () {
			if (window.location.href.indexOf("/customer/account") > -1 || window.location.href.indexOf("/customer/dashboard") > -1) {
				clearInterval(waitForCorrectPage);
				waitForCorrectPage = null;

				activate();
			}
		}, 25);
	}
}
, "deactivationEnabled": false, "id": "18972230749"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}, {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/importantstatements", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote page and Statement page (excl. renewals) & (excl. Central Value Page) & (excl. confused.com)", "apiName": "13270690418_httpsquote1stcentralinsurancecomprivatecarquotequote", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);
			window.currentTime = new Date().getTime();
			checkRenewal(true, window.currentTime);
		} catch (e) {
			console.log(e);
		}
	};
	window.currentTime = new Date().getTime();
	checkRenewal(true, window.currentTime);
	function checkRenewal(keepChecking, currentTime) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016' && document.querySelector('input[nam="source-code"]').value !== 'FC000006' && document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1) {
console.log('campaing:FCN2');
            activate(); 
		} else if (keepChecking && (new Date().getTime() - currentTime)/1000 < 4){
			setTimeout(function() {
				checkRenewal(keepChecking, currentTime);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "19320240843"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}, {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/importantstatements", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote page and Statement page (excl. renewals) & (excl. GoCompare & Central Value Page)", "apiName": "13270690418_conv_quote_page_and_statement_page_excl_renewals___1", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);
			window.currentTime = new Date().getTime();
			checkRenewal(true, window.currentTime);
		} catch (e) {
			console.log(e);
		}
	};
	window.currentTime = new Date().getTime();
	checkRenewal(true, window.currentTime);
	function checkRenewal(keepChecking, currentTime) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000007' && document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1) {
console.log('campaing:FCN2');
            activate(); 
		} else if (keepChecking && (new Date().getTime() - currentTime)/1000 < 4){
			setTimeout(function() {
				checkRenewal(keepChecking, currentTime);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "19335593790"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}, {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/importantstatements", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote page and Statement page (excl. renewals) & (excl. Central Value Page) & (excl. Go Complare)", "apiName": "13270690418_conv_quote_page_and_statement_page_excl_renewals___2", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);
			window.currentTime = new Date().getTime();
			checkRenewal(true, window.currentTime);
		} catch (e) {
			console.log(e);
		}
	};
	window.currentTime = new Date().getTime();
	checkRenewal(true, window.currentTime);
	function checkRenewal(keepChecking, currentTime) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016' && document.querySelector('input[nam="source-code"]').value !== 'FC000007' && document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1) {
console.log('campaing:FCN2');
            activate(); 
		} else if (keepChecking && (new Date().getTime() - currentTime)/1000 < 4){
			setTimeout(function() {
				checkRenewal(keepChecking, currentTime);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "19441191050"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote Page & Help Page  (excl. renewals & excl. Third Party & Value)", "apiName": "13270690418_conv_quote_page__help_page__excl_renewals__excl_thir", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);

            checkRenewal(true);
        } catch (e) {
            console.log(e);
        }
    };

    checkRenewal(true, window.currentTime);
    window.currentTime = new Date().getTime();
    function checkRenewal(keepChecking) {
        if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016' && document.querySelectorAll('app-cover-details .details-card-table.striped-rows .row.py-1 .col-7.col-lg-8.text-right').length > 5) {
            if(document.querySelectorAll('app-cover-details .details-card-table.striped-rows .row.py-1 .col-7.col-lg-8.text-right')[0].innerHTML.trim() === 'Comprehensive'){
                activate();   
            }    
        }
        else if (keepChecking && (new Date().getTime() - currentTime)/1000 < 4){
            setTimeout(function() {
                checkRenewal(keepChecking, currentTime);
            }, 50);
        }
    } 
}
, "deactivationEnabled": false, "id": "19724780106"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/customer/account", "match": "substring"}, {"type": "url", "value": "/customer/dashboard", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN 3.2 portal pages", "apiName": "13270690418_conv_fcn_32_portal_pages", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);
			window.currentTime = new Date().getTime();
			checkURL(true, window.currentTime);
		} catch (e) {
			console.log(e);
		}
	};

	window.currentTime = new Date().getTime();

	checkURL(true, window.currentTime);

	function checkURL(keepChecking, currentTime) {
		var isYourPolicyPage = window.location.href.indexOf("/customer/account") > -1,
			isDashboardPage = window.location.href.indexOf("/customer/dashboard") > -1;

		if (isYourPolicyPage || isDashboardPage) {
			activate();
		} else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
			setTimeout(function () {
				checkURL(keepChecking, currentTime);
			}, 50);
		}
	}
}
, "deactivationEnabled": false, "id": "19951285187"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "Quote Page (EXCLUDE renewals, central value, third party, and annual pre-selected)", "apiName": "13270690418_quote_page_exclude_renewals_central_value_third_part", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    try {
        //if (window.springBoard.readCookie("cfQA") === "true") {
            var oldPushState = window.history.pushState;
            window.history.pushState = function (data) {
                oldPushState.apply(this, arguments);
                checkRenewal(true);
            };
            checkRenewal(true);
        //}
    } catch (e) {
        console.log(e);
    }

    function checkRenewal(keepChecking) {
        if (
            document.querySelector('input[nam="source-code"]') &&
            document.querySelector('input[nam="source-code"]').value !== "FC000016" &&
            document.querySelectorAll(
                "app-cover-details .details-card-table.striped-rows .row.py-1 .col-7.col-lg-8.text-right"
            ).length > 5 &&
            document.querySelectorAll(
                "app-source-of-sale .badge-pill > .traffic-image:not(.source)"
            ) &&
            document
                .querySelectorAll("app-source-of-sale .badge-pill > .traffic-image:not(.source)")[0]
                .src.indexOf("1CentralValue") < 0 &&
            document.querySelector('.payment-method-box[data-uptrends-id="choose-monthly-top"]')
        ) {
            if (
                document
                    .querySelectorAll(
                        "app-cover-details .details-card-table.striped-rows .row.py-1 .col-7.col-lg-8.text-right"
                    )[0]
                    .innerHTML.trim() === "Comprehensive" &&
                document.querySelector(
                    '.payment-method-box.bg-secondary[data-uptrends-id="choose-monthly-top"]'
                )
            ) {
                activate();
            }
        } else if (keepChecking) {
            setTimeout(function () {
                checkRenewal(keepChecking);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "20010016897"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "[CONV] Quote Page (excluding renewals & central value)", "apiName": "13270690418_conv_quote_page_excluding_renewals__central_value", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	try {
			var oldPushState = window.history.pushState;
			window.history.pushState = function (data) {
				oldPushState.apply(this, arguments);
				checkRenewal(true);
			};
			checkRenewal(true);
	} catch (e) {
		//console.log(e);
	}

	function checkRenewal(keepChecking) {
		try {
			if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== "FC000016" &&
				document.querySelectorAll("app-source-of-sale .badge-pill > .traffic-image:not(.source)") && document.querySelectorAll("app-source-of-sale .badge-pill > .traffic-image:not(.source)")[0].src.indexOf("1CentralValue") < 0) {
				activate();
			} else if (keepChecking) {
				setTimeout(function () {
					checkRenewal(keepChecking);
				}, 50);
			}
		} catch (e) {
			//console.log(e);
		}
	}
}
, "deactivationEnabled": false, "id": "20044107192"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "[CONV]FCN 2.7 Quote Page", "apiName": "13741700055_convfcn_27_quote_page_1", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	var exclusionCodes = ['FC000026', 'FC100006', 'FC000016', 'FC100029', 'FC100037', 'FC000001', 'FC000004'];
	try {
		var oldPushState = window.history.pushState;
		window.history.pushState = function (data) {
			oldPushState.apply(this, arguments);
			checkRenewal(true);
		};
		checkRenewal(true);	
	} catch (e) {
		//console.log(e);
	}

	function checkRenewal(keepChecking) {
		try {
			if (document.querySelector('input[nam="source-code"]') && exclusionCodes.indexOf(document.querySelector('input[nam="source-code"]').value) < 0) {
				activate();
			} else if (keepChecking) {
				setTimeout(function () {
					checkRenewal(keepChecking);
				}, 50);
			}
		} catch (e) {
			//console.log(e);
		}
	}
}
, "deactivationEnabled": false, "id": "20181925407"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "FCN-4.7 Targeting", "apiName": "13270690418_fcn47_targeting", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  //console.log("page setup");
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);
			window.currentTime = new Date().getTime();
			checkRenewal(true, window.currentTime);
		} catch (e) {
			//console.log(e);
		}
	};
	window.currentTime = new Date().getTime();
	checkRenewal(true, window.currentTime);
	function checkRenewal(keepChecking, currentTime) {
		if (document.querySelector('input[nam="source-code"]') && document.querySelector('input[nam="source-code"]').value !== 'FC000016' && document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1) {
//console.log('campaing:FCN4.7');
            activate(); 
		} else if (keepChecking && (new Date().getTime() - currentTime)/1000 < 4){
			setTimeout(function() {
				checkRenewal(keepChecking, currentTime);
			}, 50);
		}
	} 
}
, "deactivationEnabled": false, "id": "20243918766"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.1stcentralinsurance.com/privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN 6.2 Quote Page (excl. Renewal customers & Direct customer)", "apiName": "13270690418_conv_fcn_62_quote_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  	var exclusionCodes = ['FC000026', 'FC100006', 'FC000016', 'FC100029', 'FC100037', 'FC000001', 'FC000004'];
	try {
      //console.log('cookie running');
			var oldPushState = window.history.pushState;
			window.history.pushState = function (data) {
				oldPushState.apply(this, arguments);
				checkRenewal(true);
			};
			checkRenewal(true);
		
	} catch (e) {
		//console.log(e);
	}
	// var exclusionCodes = ['FC000026', 'FC100006', 'FC000016', 'FC100029', 'FC100037', 'FC000001', 'FC000004'];


	function checkRenewal(keepChecking) {
		try {
			if (document.querySelector('input[nam="source-code"]') && exclusionCodes.indexOf(document.querySelector('input[nam="source-code"]').value) < 0) {
				activate();
			} else if (keepChecking) {
				setTimeout(function () {
					checkRenewal(keepChecking);
				}, 50);
			}
		} catch (e) {
			//console.log(e);
		}
	}
}
, "deactivationEnabled": false, "id": "20275842562"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://my.1stcentralinsurance.com/", "match": "simple"}]], "name": "Your Account Login Page", "apiName": "13270690418_your_account_login_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20291411778"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/", "match": "substring"}]], "name": "[CONV] Quote Funnel", "apiName": "13270690418_conv_quote_funnel", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20421874564"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "URL Targeting for [CONV] [QA] FCN 4.9", "apiName": "13270690418_url_targeting_for_conv_qa_fcn_49", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	//console.log("FCN 4.9 page setup");
	var oldPushState = window.history.pushState;
	window.history.pushState = function (data) {
		try {
			oldPushState.apply(this, arguments);
			window.currentTime = new Date().getTime();
			checkRenewal(true, window.currentTime);
		} catch (e) {
			console.log(e);
		}
	};
	window.currentTime = new Date().getTime();
	checkRenewal(true, window.currentTime);
	function checkRenewal(keepChecking, currentTime) {
		if (document.querySelector('input[nam="source-code"]') &&
			document.querySelector('input[nam="source-code"]').value !== 'FC000016' &&
			document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1 &&
			document.querySelector('.payment-method-box.active') &&
			window.sessionStorage.getItem('cvAncillaryDetails')) {
			//console.log('campaing:FCN4.9');
			activate();
		} else if (keepChecking && (new Date().getTime() - currentTime)/1000 < 4){
			setTimeout(function() {
				checkRenewal(keepChecking, currentTime);
			}, 50);
		}
	}
}
, "deactivationEnabled": false, "id": "20431729638"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "[CONV]FCN 6.2 Quote Page", "apiName": "13270690418_convfcn_62_quote_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var exclusionCodes = ['FC000026', 'FC100006', 'FC000016', 'FC100029', 'FC100037', 'FC000001', 'FC000004'];
    try {
        var oldPushState = window.history.pushState;
        window.history.pushState = function (data) {
            oldPushState.apply(this, arguments);
            checkRenewal(true);
        };
        checkRenewal(true);
    } catch (e) {
        console.log(e);
    }
    // var exclusionCodes = ['FC000026', 'FC100006', 'FC000016', 'FC100029', 'FC100037', 'FC000001', 'FC000004'];


    function checkRenewal(keepChecking) {
        try {
            if (document.querySelector('input[nam="source-code"]') && exclusionCodes.indexOf(document.querySelector('input[nam="source-code"]').value) < 0) {
                activate();
            } else if (keepChecking) {
                setTimeout(function () {
                    checkRenewal(keepChecking);
                }, 50);
            }
        } catch (e) {
            console.log(e);
        }
    }
}
, "deactivationEnabled": false, "id": "20433605150"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/payment/confirm", "match": "simple"}]], "name": "Pay monthly users - 6. Policy Purchased [CONV] NEW", "apiName": "13270690418_pay_monthly_users__6_policy_purchased_conv_new", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20435560125"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "quote.1stcentralinsurance.com/privatecar/payment/confirm", "match": "simple"}]], "name": "Pay annually users - 6. Policy Purchased [CONV] NEW", "apiName": "13270690418_pay_annually_users__6_policy_purchased_conv_new", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20512751566"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "URL Targeting for [CONV] FCN 5.12 - Ancillary Wording and Demand CTAs", "apiName": "13270690418_url_targeting_for_conv_fcn_512__ancillary_wording_an", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */
function callbackFn(activate, options) {
    console.log("FCN 5.12 page setup");
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {
            console.log(e);
        }
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);
    function checkRenewal(keepChecking, currentTime) {
        try {
            if (document.querySelectorAll('.ancillary-card').length > 0 &&
                document.querySelectorAll('#cta-btn').length > 0 &&
                (document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image').src.includes('1stcentralinsurance') ||
                document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image').src.includes('CentralPlus') ||
                document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image').src.includes('CentralLegal') ||
                document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image').src.includes('CentralPremier'))) {
                console.log('FCN-5.12 activate');
                activate();
            } else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
                setTimeout(function () {
                    checkRenewal(keepChecking, currentTime);
                }, 50);
            }
        } catch(err) {console.log('1st Central Value Excluded');}
    }
}
, "deactivationEnabled": false, "id": "20523955722"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN - 5.14 - Quote Pages", "apiName": "13270690418_conv_fcn__514__quote_pages", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {
            console.log(e);
        }
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);
    function checkRenewal(keepChecking, currentTime) {
        if (document.querySelectorAll('app-header-value-journey app-quote-reference').length > 0) {
            activate();
        } else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
            setTimeout(function () {
                checkRenewal(keepChecking, currentTime);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "20764312270"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://my.1stcentralinsurance.com/customer/login/accountlogin", "match": "simple"}, {"type": "url", "value": "https://my.1stcentralinsurance.com/customer/dashboard", "match": "simple"}]], "name": "[CONV] FCN 2.10 - Targeting", "apiName": "13270690418_conv_fcn_21__targeting", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20795180447"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "[CONV] Privatecar Quote Funnel", "apiName": "13270690418_conv_privatecar_quote_funnel", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
    console.log('In activation of 2.9');
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {
            console.log(e);
        }
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);
    function checkRenewal(keepChecking, currentTime) {
        console.log('page changed in FCN-2.9');
        if (document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image') && document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image')
            .src.indexOf('CentralValue') === -1 && document.querySelectorAll('.payment-method-box:nth-of-type(1) > header').length == 0) {
            activate();
            console.log('FCN-2.9 activated');
        } else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
            setTimeout(function () {
                checkRenewal(keepChecking, currentTime);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "20819100061"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "privatecar/quote/welcome", "match": "substring"}]], "name": "[CONV] FCN 2.9 - Welcome Page", "apiName": "13270690418_conv_fcn_29__welcome_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20896213849"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "privatecar/quote/quote", "match": "substring"}, {"type": "url", "value": "payment/confirm", "match": "substring"}, {"type": "url", "value": "apipayment/confirm", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN 6.3 - Quote Page Targeting", "apiName": "13270690418_conv_fcn_63__quote_page_targeting", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

 function callbackFn(activate, options) {
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {}
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);
    function checkRenewal(keepChecking, currentTime) {
        try{
            if (document.querySelector('input[nam="source-code"]') &&
                !document.querySelector('body').innerHTML.includes('Third') &&
                document.querySelector('input[nam="source-code"]').value !== 'FC000016' &&
                document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1 &&
                document.querySelector('.payment-method-box.active')) {
                console.log('campaign:FCN6.3 - Activated');
                activate();
            }else if(window.location.href.includes('/payment/confirm') || window.location.href.includes('/apipayment/confirm')){
                if(window.sessionStorage.getItem('fcn63viewed')){
                    console.log('FCN 6.3 - Payment Confirm - Activated');
                    activate();
                }
            }
            else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
                setTimeout(function () {
                    checkRenewal(keepChecking, currentTime);
                }, 50);
            }
        }
        catch(e){}
    }
}
, "deactivationEnabled": false, "id": "20906433760"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/oops-error", "match": "substring"}]], "name": "[CONV] Oops error (1)", "apiName": "13741700055_conv_oops_error_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20913972538"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/oops-error", "match": "substring"}]], "name": "[CONV] Oops error (2)", "apiName": "13741700055_conv_oops_error_2", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20917323471"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN-4.10 - Quote Page", "apiName": "13270690418_conv_fcn410__quote_page", "tags": [], "undoOnDeactivation": false, "activationCode": // Substring: /privatecar/quote/quote

function callbackFn(activate, options) {
    console.log('In activation of 4.10');
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {
            console.log(e);
        }
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);

    function checkRenewal(keepChecking, currentTime) {
        if (document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image') && document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image')
            .src.indexOf('CentralValue') === -1) {
            activate();
            console.log('FCN-4.10 activated');
        } else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
            setTimeout(function () {
                checkRenewal(keepChecking, currentTime);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "20919852776"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "1stcentralinsurance.com", "match": "substring"}]], "activationType": "callback", "name": "[CONV] Sitewide", "apiName": "13270690418_conv_sitewide_1", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

 function callbackFn(activate, options) {
    console.log("FCN AA Test");
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {
            console.log(e);
        }
    };
    // Get current time
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);
    var url = window.location.href;
    function checkRenewal(keepChecking, currentTime) {
        console.log('AA test checking');

        if(url !== window.location.href){
            activate();
            url = window.location.href;
        }
        else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
            setTimeout(function () {
                checkRenewal(keepChecking, currentTime);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "20929283518"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN 2.9 - Quote Funnel", "apiName": "13270690418_conv_fcn_29__quote_funnel", "tags": [], "undoOnDeactivation": false, "activationCode": // Substring: /privatecar/quote/quote

function callbackFn(activate, options) {
    console.log('In activation of 2.9');
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {
            console.log(e);
        }
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);

    function checkRenewal(keepChecking, currentTime) {
        if (document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image') && document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image')
            .src.indexOf('CentralValue') === -1) {
            activate();
            console.log('FCN-2.9 activated');
        } else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
            setTimeout(function () {
                checkRenewal(keepChecking, currentTime);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "20955310568"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/privatecar/quote/quote", "match": "substring"}, {"type": "url", "value": "payment/confirm", "match": "substring"}, {"type": "url", "value": "apipayment/confirm", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN 6.4 - Information about upgrades ", "apiName": "13270690418_conv_fcn_64__information_about_upgrades_", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {
            console.log(e);
        }
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);

    function checkRenewal(keepChecking, currentTime) {
        if (document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image') && document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image')
            .src.indexOf('CentralValue') === -1) {
            activate();
            console.log('FCN-6.4 activated');
        }
        else if(window.location.href.includes('/payment/confirm') || window.location.href.includes('/apipayment/confirm')){
            if(window.sessionStorage.getItem('fcn64viewed')){
                console.log('FCN-6.4 confirm page activated');
                activate();
            }
        }else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
            setTimeout(function () {
                checkRenewal(keepChecking, currentTime);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "20962251114"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/privatecar/quote/quote", "match": "substring"}, {"type": "url", "value": "payment/confirm", "match": "substring"}, {"type": "url", "value": "apipayment/confirm", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN 4.10 - Quote Page", "apiName": "13270690418_conv_fcn_410__quote_page", "tags": [], "undoOnDeactivation": false, "activationCode": // Substring: /privatecar/quote/quote

function callbackFn(activate, options) {
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {
            console.log(e);
        }
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);

    function checkRenewal(keepChecking, currentTime) {
        if (document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image') && document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image')
            .src.indexOf('CentralValue') === -1) {
            activate();
            console.log('FCN-4.10 activated');
        } else if(window.location.href.includes('/payment/confirm') || window.location.href.includes('/apipayment/confirm')){
            if(window.sessionStorage.getItem('fcn410viewed')){
                console.log('FCN-4.10 Policy Confirmation Page');
                activate();
            }
        }else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
            setTimeout(function () {
                checkRenewal(keepChecking, currentTime);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "20966270740"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "/privatecar/payment/confirm", "match": "substring"}], ["or", {"type": "url", "value": "/privatecar/apipayment/confirm", "match": "substring"}]], "activationType": "url_changed", "name": "Policy confirmation page", "apiName": "13270690418_policy_confirmation_page_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20969870633"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/privatecar/quote/quote", "match": "substring"}, {"type": "url", "value": "payment/confirm", "match": "substring"}, {"type": "url", "value": "apipayment/confirm", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN-1.5 - Value Page Excl. Renewals NEW", "apiName": "13270690418_conv_fcn15__value_page_excl_renewals_new", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            checkRenewal(true);
        } catch (e) {
            console.log(e);
        }
    };

    checkRenewal(false);

    function checkRenewal(keepChecking) {
        if (document.querySelector('app-header-value-journey')) {
            console.log('FCN 1.5 - Activated');
            activate();
        } else if(window.location.href.includes('payment/confirm') || window.location.href.includes('apipayment/confirm')){
            if(window.sessionStorage.getItem('fcn15viewed') == 'true'){
                console.log('FCN 1.5 - Payment Confirm Page Activated');
                activate();
            }
        }
        else if (keepChecking) {
            setTimeout(function () {
                checkRenewal(keepChecking);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "20997540136"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN-1.5 - Value Page Excl. Renewals", "apiName": "13270690418_conv_fcn15__value_page_excl_renewals", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    if (document.cookie.includes('cfQA=true')) {
        var oldPushState = window.history.pushState;
        window.history.pushState = function (data) {
            try {
                oldPushState.apply(this, arguments);
                checkRenewal(true);
            } catch (e) {
                console.log(e);
            }
        };

        checkRenewal(false);

        function checkRenewal(keepChecking) {
            console.log('FCN 1.5 - Renewal');
            if (document.querySelector('app-header-value-journey')) {
                console.log('FCN 1.5 - Activated');
                activate();
            } else if (keepChecking) {
                setTimeout(function () {
                    checkRenewal(keepChecking);
                }, 50);
            }
        }
    }
}
, "deactivationEnabled": false, "id": "20997930067"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "payment/confirm", "match": "substring"}, {"type": "url", "value": "apipayment/confirm", "match": "substring"}, {"type": "url", "value": "privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "FCN AA - Targeting", "apiName": "13270690418_fcn_aa__targeting", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

 function callbackFn(activate, options) {
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {}
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);
    function checkRenewal(keepChecking, currentTime) {
        try{
            if (document.querySelector('input[nam="source-code"]') &&
                !document.querySelector('body').innerHTML.includes('Third') &&
                document.querySelector('input[nam="source-code"]').value !== 'FC000016' &&
                document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1 &&
                document.querySelector('.payment-method-box.active')) {
                console.log('campaign:FCN AA - Activated');
                activate();
            }else if(window.location.href.includes('/payment/confirm') || window.location.href.includes('/apipayment/confirm')){
                console.log('FCN AA - Payment Confirm - Activated');
                activate();
            }
            else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
                setTimeout(function () {
                    checkRenewal(keepChecking, currentTime);
                }, 50);
            }
        }
        catch(e){}
    }
}
, "deactivationEnabled": false, "id": "21008500687"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "URL Targeting for [CONV] FCN 1.6 - No.1 Car Insurance Provider", "apiName": "13270690418_url_targeting_for_conv_fcn_16__no1_car_insurance_pro", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
    console.log('In activation of 1.6');
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {
            console.log(e);
        }
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);

    function checkRenewal(keepChecking, currentTime) {
        if (document.querySelectorAll('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image').length > 0 && 
            document.querySelector('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image').src.indexOf('CentralValue') === -1) {
            activate();
            console.log('FCN-1.6 activated');
        }else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
            setTimeout(function () {
                checkRenewal(keepChecking, currentTime);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "21014114188"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "customer/account", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN 0.4 - Account Policy Page", "apiName": "13270690418_conv_fcn_04__account_policy_page", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
    console.log("FCN 0.4 page setup");
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {
            console.log(e);
        }
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);
    function checkRenewal(keepChecking, currentTime) {
        if (document.querySelector('app-auto-renewal-settings')){
            console.log('fcn 0.4 activated');
            activate();
        } else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
            setTimeout(function () {
                checkRenewal(keepChecking, currentTime);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "21085270119"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "URL Targeting for [CONV] FCN 4.8 - Monthly breakdown of Annual Price", "apiName": "13270690418_url_targeting_for_conv_fcn_48__monthly_breakdown_of_", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
	if (window.springBoard.readCookie('cfQA')) {
		console.log("FCN 4.8 page setup");
		var oldPushState = window.history.pushState;
		window.history.pushState = function (data) {
			try {
				oldPushState.apply(this, arguments);
				window.currentTime = new Date().getTime();
				checkRenewal(true, window.currentTime);
			} catch (e) {
				console.log(e);
			}
		};
		window.currentTime = new Date().getTime();
		checkRenewal(true, window.currentTime);
		function checkRenewal(keepChecking, currentTime) {
			if (document.querySelector('input[nam="source-code"]') && 
				document.querySelector('input[nam="source-code"]').value !== 'FC000016' && 
				document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1 && 
				document.querySelector('[data-uptrends-id="choose-annual-top"]').classList.contains('active')) {
				console.log('campaing:FCN 4.8');
				activate(); 
			} else if (keepChecking && (new Date().getTime() - currentTime)/1000 < 4){
				setTimeout(function() {
					checkRenewal(keepChecking, currentTime);
				}, 50);
			}
		}
	} else {
		console.log('Create the cfQA cookie to see the Optimizely experiments');
	}
}
, "deactivationEnabled": false, "id": "21111890792"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "NEW URL Targeting for [CONV] FCN 4.8 - Monthly breakdown of Annual Price", "apiName": "13270690418_new_url_targeting_for_conv_fcn_48__monthly_breakdown", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
		console.log("FCN 4.8 page setup");
		var oldPushState = window.history.pushState;
		window.history.pushState = function (data) {
			try {
				oldPushState.apply(this, arguments);
				window.currentTime = new Date().getTime();
				checkRenewal(true, window.currentTime);
			} catch (e) {
				console.log(e);
			}
		};
		window.currentTime = new Date().getTime();
		checkRenewal(true, window.currentTime);
		function checkRenewal(keepChecking, currentTime) {
			if (document.querySelector('input[nam="source-code"]') &&
				document.querySelector('input[nam="source-code"]').value !== 'FC000016' &&
				document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1 &&
				document.querySelector('[data-uptrends-id="choose-annual-top"]').classList.contains('active')) {
				console.log('campaing:FCN 4.8');
				activate();
			} else if (keepChecking && (new Date().getTime() - currentTime)/1000 < 4){
				setTimeout(function() {
					checkRenewal(keepChecking, currentTime);
				}, 50);
			}
		}
}
, "deactivationEnabled": false, "id": "21116610571"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN 9.0 - Standard Policy Quote Page", "apiName": "13270690418_conv_fcn_90__standard_policy_quote_page", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            checkRenewal(true);
        } catch (e) {
            console.log(e);
        }
    };

    checkRenewal(false);

    function checkRenewal(keepChecking) {
        console.log('FCN 9.0 - Renewal');
        if (document.querySelector('img[alt="1st Central Standard Policy logo"]') && document.location.href.includes('privatecar/quote/quote')){
            console.log('FCN 9.0 - Activated');
            activate();
        }
        else if (keepChecking) {
            setTimeout(function () {
                checkRenewal(keepChecking);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "21153720107"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "/privatecar/quote/quote", "match": "substring"}, {"type": "url", "value": "/privatecar/quote/extracover", "match": "substring"}, {"type": "url", "value": "/privatecar/quote/productupgrade", "match": "substring"}]], "activationType": "callback", "name": "URL Targeting for [CONV] FCN 6.6 - Premier Interstitial", "apiName": "13270690418_url_targeting_for_conv_fcn_66__premier_interstitial", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
    console.log('In activation of 6.6');
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            window.currentTime = new Date().getTime();
            checkRenewal(true, window.currentTime);
        } catch (e) {
            console.log(e);
        }
    };
    window.currentTime = new Date().getTime();
    checkRenewal(true, window.currentTime);

    function checkRenewal(keepChecking, currentTime) {
        if (document.querySelectorAll('app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image').length === 0 &&
            document.referrer.indexOf('1stcentralinsurance') === -1 &&
            document.referrer !== '') {
            activate();
            console.log('FCN-6.6 activated');
        } else if (keepChecking && (new Date().getTime() - currentTime) / 1000 < 4) {
            setTimeout(function () {
                checkRenewal(keepChecking, currentTime);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "21208850439"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "1stcentralinsurance.com/help-support", "match": "substring"}]], "name": "Help Support Page", "apiName": "13270690418_help_support_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "21253760423"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "FCN 4.13 - Targeting", "apiName": "13270690418_fcn_413__targeting", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            checkRenewal(true);
        } catch (e) {
            console.log(e);
        }
    };

    checkRenewal(false);

    function checkRenewal(keepChecking) {
        console.log('FCN 4.13 - Renewal');
        if (document.querySelector('img[alt="1st Central Standard Policy logo"]') && document.location.href.includes('privatecar/quote/quote') || window.sessionStorage.getItem('fcn413viewed')){
            console.log('FCN 4.13 - Activated');
            activate();
        }
        else if (keepChecking) {
            setTimeout(function () {
                checkRenewal(keepChecking);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "21347081219"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://quote.1stcentralinsurance.com/privatecar/quote/quote", "match": "simple"}]], "activationType": "callback", "name": "URL Targeting for [NEW-03/22] [CONV] [QA] FCN 4.8 - Monthly breakdown of Annual Price", "apiName": "13270690418_url_targeting_for_new0322_conv_qa_fcn_48__monthly_br", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
		console.log("FCN 4.8 page setup");
		var oldPushState = window.history.pushState;
		window.history.pushState = function (data) {
			try {
				oldPushState.apply(this, arguments);
				window.currentTime = new Date().getTime();
				checkRenewal(true, window.currentTime);
			} catch (e) {
				console.log(e);
			}
		};
		window.currentTime = new Date().getTime();
		checkRenewal(true, window.currentTime);
		function checkRenewal(keepChecking, currentTime) {
			if (document.querySelector('input[nam="source-code"]') &&
				document.querySelector('input[nam="source-code"]').value !== 'FC000016' &&
				document.querySelector("app-source-of-sale#source-of-sale .border.badge-pill:last-of-type img.traffic-image").src.indexOf('CentralValue') === -1 &&
				document.querySelector('[data-uptrends-id="choose-annual-top"]') && document.querySelector('[data-uptrends-id="choose-annual-top"]').classList.contains('active')) {
				console.log('campaing:FCN 4.8');
				activate();
			} else if (keepChecking && (new Date().getTime() - currentTime)/1000 < 4){
				setTimeout(function() {
					checkRenewal(keepChecking, currentTime);
				}, 50);
			}
		}
}
, "deactivationEnabled": false, "id": "21361320658"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "privatecar/quote/quote", "match": "substring"}]], "activationType": "callback", "name": "[CONV] FCN 4.15 - targeting", "apiName": "13270690418_conv_fcn_415__targeting", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var oldPushState = window.history.pushState;
    window.history.pushState = function (data) {
        try {
            oldPushState.apply(this, arguments);
            checkRenewal(true);
        } catch (e) {
            // console.log(e);
        }
    };

    checkRenewal(false);

    function checkRenewal(keepChecking) {
        console.log('FCN 4.15 - Renewal');
        if (document.querySelector('img[alt="1st Central Standard Policy logo"]') && document.location.href.includes('privatecar/quote/quote')){
            console.log('FCN 4.15 - Activated');
            activate();
        }
        else if (keepChecking) {
            setTimeout(function () {
                checkRenewal(keepChecking);
            }, 50);
        }
    }
}
, "deactivationEnabled": false, "id": "21362152035"}], "projectId": "13270690418", "namespace": "13270690418", "tagGroups": [], "integrationSettings": [], "interestGroups": [], "dimensions": [{"segmentId": null, "id": "17948171495", "apiName": "Referring site vs Non-referring site", "name": "Referring site vs Non-referring site"}, {"segmentId": null, "id": "17959512268", "apiName": "Aggregator vs Non-Aggregator", "name": "Aggregator vs Non-Aggregator"}, {"segmentId": null, "id": "17971471730", "apiName": "Clicked through from main quote page", "name": "Clicked through from main quote page"}, {"segmentId": null, "id": "18230970616", "apiName": "Monthly vs Annual", "name": "Monthly vs Annual"}, {"segmentId": null, "id": "18941311865", "apiName": "Clickthrough from Statement Page", "name": "Clickthrough from Statement Page"}, {"segmentId": null, "id": "20019246967", "apiName": "Aggregator with promotion banner vs all other traffic", "name": "Aggregator with promotion banner vs all other traffic "}, {"segmentId": null, "id": "20689570397", "apiName": "Age", "name": "Age [CONV]"}, {"segmentId": null, "id": "20701730333", "apiName": "cvUserSeesPopup", "name": "User sees popup [CONV] [8.0]"}, {"segmentId": null, "id": "20890863456", "apiName": "productSegment", "name": "Product Segment [CONV]"}, {"segmentId": null, "id": "20975021335", "apiName": "no_product_segment", "name": "No product segment"}], "audiences": [{"conditions": ["and", ["or", ["not", ["or", {"value": "ie", "type": "browser_version", "name": null, "match": null}]]]], "id": "18254111393", "name": "[CONV] Exclude IE"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "37.235.60.161", "type": "ip", "name": null, "match": "exact"}, {"value": "188.65.74.52", "type": "ip", "name": null, "match": "exact"}, {"value": "217.196.146.37", "type": "ip", "name": null, "match": "exact"}, {"value": "185.244.212.214", "type": "ip", "name": null, "match": "exact"}, {"value": "193.110.248.20", "type": "ip", "name": null, "match": "exact"}, {"value": "193.110.248.22", "type": "ip", "name": null, "match": "exact"}, {"value": "81.95.119.11", "type": "ip", "name": null, "match": "exact"}, {"value": "77.243.191.61", "type": "ip", "name": null, "match": "exact"}, {"value": "185.59.17.175", "type": "ip", "name": null, "match": "exact"}, {"value": "185.164.35.23", "type": "ip", "name": null, "match": "exact"}, {"value": "185.148.147.95", "type": "ip", "name": null, "match": "exact"}, {"value": "213.169.149.134", "type": "ip", "name": null, "match": "exact"}, {"value": "77.93.208.23", "type": "ip", "name": null, "match": "exact"}, {"value": "82.103.128.245", "type": "ip", "name": null, "match": "exact"}, {"value": "77.247.111.36", "type": "ip", "name": null, "match": "exact"}, {"value": "35.228.155.42", "type": "ip", "name": null, "match": "exact"}, {"value": "185.103.110.150", "type": "ip", "name": null, "match": "exact"}, {"value": "93.174.195.236", "type": "ip", "name": null, "match": "exact"}, {"value": "91.216.228.150", "type": "ip", "name": null, "match": "exact"}, {"value": "178.170.41.67", "type": "ip", "name": null, "match": "exact"}, {"value": "178.170.40.150", "type": "ip", "name": null, "match": "exact"}, {"value": "217.182.195.34", "type": "ip", "name": null, "match": "exact"}, {"value": "54.36.123.176", "type": "ip", "name": null, "match": "exact"}, {"value": "94.247.28.245", "type": "ip", "name": null, "match": "exact"}, {"value": "188.172.245.26", "type": "ip", "name": null, "match": "exact"}, {"value": "188.172.245.230", "type": "ip", "name": null, "match": "exact"}, {"value": "195.154.28.177", "type": "ip", "name": null, "match": "exact"}, {"value": "51.159.30.31", "type": "ip", "name": null, "match": "exact"}, {"value": "51.159.30.175", "type": "ip", "name": null, "match": "exact"}, {"value": "163.172.110.103", "type": "ip", "name": null, "match": "exact"}, {"value": "213.246.58.48", "type": "ip", "name": null, "match": "exact"}, {"value": "213.246.39.161", "type": "ip", "name": null, "match": "exact"}, {"value": "46.31.195.69", "type": "ip", "name": null, "match": "exact"}, {"value": "37.59.32.110", "type": "ip", "name": null, "match": "exact"}, {"value": "62.138.14.201", "type": "ip", "name": null, "match": "exact"}, {"value": "82.165.158.38", "type": "ip", "name": null, "match": "exact"}, {"value": "80.239.175.138", "type": "ip", "name": null, "match": "exact"}, {"value": "80.239.175.136", "type": "ip", "name": null, "match": "exact"}, {"value": "37.60.204.10", "type": "ip", "name": null, "match": "exact"}, {"value": "109.69.64.25", "type": "ip", "name": null, "match": "exact"}, {"value": "109.69.66.45", "type": "ip", "name": null, "match": "exact"}, {"value": "81.20.140.210", "type": "ip", "name": null, "match": "exact"}, {"value": "85.88.13.26", "type": "ip", "name": null, "match": "exact"}, {"value": "89.163.153.36", "type": "ip", "name": null, "match": "exact"}, {"value": "89.163.135.90", "type": "ip", "name": null, "match": "exact"}, {"value": "89.163.146.55", "type": "ip", "name": null, "match": "exact"}, {"value": "136.243.24.72", "type": "ip", "name": null, "match": "exact"}, {"value": "178.63.14.126", "type": "ip", "name": null, "match": "exact"}, {"value": "46.165.240.37", "type": "ip", "name": null, "match": "exact"}, {"value": "37.58.57.91", "type": "ip", "name": null, "match": "exact"}, {"value": "84.16.234.194", "type": "ip", "name": null, "match": "exact"}, {"value": "188.94.27.154", "type": "ip", "name": null, "match": "exact"}, {"value": "188.94.27.156", "type": "ip", "name": null, "match": "exact"}, {"value": "81.3.23.227", "type": "ip", "name": null, "match": "exact"}, {"value": "81.3.23.226", "type": "ip", "name": null, "match": "exact"}, {"value": "81.169.191.4", "type": "ip", "name": null, "match": "exact"}, {"value": "81.169.191.6", "type": "ip", "name": null, "match": "exact"}, {"value": "81.169.191.18", "type": "ip", "name": null, "match": "exact"}, {"value": "88.99.193.111", "type": "ip", "name": null, "match": "exact"}, {"value": "185.3.233.48", "type": "ip", "name": null, "match": "exact"}, {"value": "185.3.233.47", "type": "ip", "name": null, "match": "exact"}, {"value": "185.3.232.150", "type": "ip", "name": null, "match": "exact"}, {"value": "213.136.66.61", "type": "ip", "name": null, "match": "exact"}, {"value": "213.136.66.90", "type": "ip", "name": null, "match": "exact"}, {"value": "130.185.109.26", "type": "ip", "name": null, "match": "exact"}, {"value": "130.185.109.16", "type": "ip", "name": null, "match": "exact"}, {"value": "109.235.61.161", "type": "ip", "name": null, "match": "exact"}, {"value": "46.227.57.21", "type": "ip", "name": null, "match": "exact"}, {"value": "78.108.36.46", "type": "ip", "name": null, "match": "exact"}, {"value": "195.56.171.7", "type": "ip", "name": null, "match": "exact"}, {"value": "46.22.130.142", "type": "ip", "name": null, "match": "exact"}, {"value": "188.241.178.82", "type": "ip", "name": null, "match": "exact"}, {"value": "77.81.232.186", "type": "ip", "name": null, "match": "exact"}, {"value": "158.58.173.8", "type": "ip", "name": null, "match": "exact"}, {"value": "37.252.253.22", "type": "ip", "name": null, "match": "exact"}, {"value": "185.221.175.228", "type": "ip", "name": null, "match": "exact"}, {"value": "89.46.72.60", "type": "ip", "name": null, "match": "exact"}, {"value": "81.31.151.97", "type": "ip", "name": null, "match": "exact"}, {"value": "109.248.149.165", "type": "ip", "name": null, "match": "exact"}, {"value": "46.166.165.78", "type": "ip", "name": null, "match": "exact"}, {"value": "94.242.222.100", "type": "ip", "name": null, "match": "exact"}, {"value": "185.173.227.17", "type": "ip", "name": null, "match": "exact"}, {"value": "213.214.121.213", "type": "ip", "name": null, "match": "exact"}, {"value": "185.113.196.214", "type": "ip", "name": null, "match": "exact"}, {"value": "178.217.84.4", "type": "ip", "name": null, "match": "exact"}, {"value": "188.241.149.95", "type": "ip", "name": null, "match": "exact"}, {"value": "66.212.22.2", "type": "ip", "name": null, "match": "exact"}, {"value": "37.97.223.120", "type": "ip", "name": null, "match": "exact"}, {"value": "5.182.210.227", "type": "ip", "name": null, "match": "exact"}, {"value": "5.182.210.168", "type": "ip", "name": null, "match": "exact"}, {"value": "185.69.100.241", "type": "ip", "name": null, "match": "exact"}, {"value": "213.206.252.57", "type": "ip", "name": null, "match": "exact"}, {"value": "46.182.221.24", "type": "ip", "name": null, "match": "exact"}, {"value": "95.211.176.129", "type": "ip", "name": null, "match": "exact"}, {"value": "95.211.176.134", "type": "ip", "name": null, "match": "exact"}, {"value": "46.249.47.10", "type": "ip", "name": null, "match": "exact"}, {"value": "31.204.152.10", "type": "ip", "name": null, "match": "exact"}, {"value": "185.145.63.225", "type": "ip", "name": null, "match": "exact"}, {"value": "176.56.235.232", "type": "ip", "name": null, "match": "exact"}, {"value": "62.122.255.177", "type": "ip", "name": null, "match": "exact"}, {"value": "46.29.218.162", "type": "ip", "name": null, "match": "exact"}, {"value": "185.90.61.19", "type": "ip", "name": null, "match": "exact"}, {"value": "212.7.217.44", "type": "ip", "name": null, "match": "exact"}, {"value": "54.36.175.139", "type": "ip", "name": null, "match": "exact"}, {"value": "109.71.46.159", "type": "ip", "name": null, "match": "exact"}, {"value": "188.208.32.66", "type": "ip", "name": null, "match": "exact"}, {"value": "95.213.193.66", "type": "ip", "name": null, "match": "exact"}, {"value": "185.175.158.146", "type": "ip", "name": null, "match": "exact"}, {"value": "5.188.199.212", "type": "ip", "name": null, "match": "exact"}, {"value": "131.153.41.138", "type": "ip", "name": null, "match": "exact"}, {"value": "131.153.96.186", "type": "ip", "name": null, "match": "exact"}, {"value": "37.252.246.26", "type": "ip", "name": null, "match": "exact"}, {"value": "185.183.106.51", "type": "ip", "name": null, "match": "exact"}, {"value": "82.223.102.190", "type": "ip", "name": null, "match": "exact"}, {"value": "185.230.124.42", "type": "ip", "name": null, "match": "exact"}, {"value": "77.230.214.40", "type": "ip", "name": null, "match": "exact"}, {"value": "185.127.131.8", "type": "ip", "name": null, "match": "exact"}, {"value": "81.93.149.230", "type": "ip", "name": null, "match": "exact"}, {"value": "188.212.109.152", "type": "ip", "name": null, "match": "exact"}, {"value": "185.133.205.98", "type": "ip", "name": null, "match": "exact"}, {"value": "85.118.207.140", "type": "ip", "name": null, "match": "exact"}, {"value": "46.21.97.221", "type": "ip", "name": null, "match": "exact"}, {"value": "37.120.209.150", "type": "ip", "name": null, "match": "exact"}, {"value": "179.43.168.230", "type": "ip", "name": null, "match": "exact"}, {"value": "185.19.29.13", "type": "ip", "name": null, "match": "exact"}, {"value": "37.35.107.70", "type": "ip", "name": null, "match": "exact"}, {"value": "82.195.249.99", "type": "ip", "name": null, "match": "exact"}, {"value": "152.89.162.170", "type": "ip", "name": null, "match": "exact"}, {"value": "195.242.213.234", "type": "ip", "name": null, "match": "exact"}, {"value": "37.247.103.10", "type": "ip", "name": null, "match": "exact"}, {"value": "185.84.181.48", "type": "ip", "name": null, "match": "exact"}, {"value": "176.103.48.42", "type": "ip", "name": null, "match": "exact"}, {"value": "81.27.82.99", "type": "ip", "name": null, "match": "exact"}, {"value": "134.19.161.36", "type": "ip", "name": null, "match": "exact"}, {"value": "62.128.207.214", "type": "ip", "name": null, "match": "exact"}, {"value": "77.68.81.80", "type": "ip", "name": null, "match": "exact"}, {"value": "109.228.61.195", "type": "ip", "name": null, "match": "exact"}, {"value": "78.129.209.245", "type": "ip", "name": null, "match": "exact"}, {"value": "212.38.169.106", "type": "ip", "name": null, "match": "exact"}, {"value": "37.220.21.50", "type": "ip", "name": null, "match": "exact"}, {"value": "23.106.36.46", "type": "ip", "name": null, "match": "exact"}, {"value": "77.240.14.105", "type": "ip", "name": null, "match": "exact"}, {"value": "217.64.114.108", "type": "ip", "name": null, "match": "exact"}, {"value": "45.85.194.114", "type": "ip", "name": null, "match": "exact"}, {"value": "78.129.191.59", "type": "ip", "name": null, "match": "exact"}, {"value": "78.129.191.58", "type": "ip", "name": null, "match": "exact"}, {"value": "109.73.65.78", "type": "ip", "name": null, "match": "exact"}, {"value": "217.194.217.82", "type": "ip", "name": null, "match": "exact"}, {"value": "213.175.208.81", "type": "ip", "name": null, "match": "exact"}, {"value": "199.119.216.173", "type": "ip", "name": null, "match": "exact"}, {"value": "199.119.216.174", "type": "ip", "name": null, "match": "exact"}, {"value": "142.44.137.201", "type": "ip", "name": null, "match": "exact"}, {"value": "192.99.201.172", "type": "ip", "name": null, "match": "exact"}, {"value": "167.114.172.11", "type": "ip", "name": null, "match": "exact"}, {"value": "66.11.155.244", "type": "ip", "name": null, "match": "exact"}, {"value": "5.149.253.60", "type": "ip", "name": null, "match": "exact"}, {"value": "5.149.253.58", "type": "ip", "name": null, "match": "exact"}, {"value": "71.19.249.62", "type": "ip", "name": null, "match": "exact"}, {"value": "201.131.127.49", "type": "ip", "name": null, "match": "exact"}, {"value": "131.100.0.46", "type": "ip", "name": null, "match": "exact"}, {"value": "216.31.10.17", "type": "ip", "name": null, "match": "exact"}, {"value": "54.191.1.120", "type": "ip", "name": null, "match": "exact"}, {"value": "67.198.232.5", "type": "ip", "name": null, "match": "exact"}, {"value": "131.153.3.66", "type": "ip", "name": null, "match": "exact"}, {"value": "64.42.181.66", "type": "ip", "name": null, "match": "exact"}, {"value": "167.160.88.242", "type": "ip", "name": null, "match": "exact"}, {"value": "23.100.43.234", "type": "ip", "name": null, "match": "exact"}, {"value": "155.254.18.23", "type": "ip", "name": null, "match": "exact"}, {"value": "8.39.234.147", "type": "ip", "name": null, "match": "exact"}, {"value": "192.34.84.114", "type": "ip", "name": null, "match": "exact"}, {"value": "199.217.106.186", "type": "ip", "name": null, "match": "exact"}, {"value": "89.40.216.20", "type": "ip", "name": null, "match": "exact"}, {"value": "192.154.255.94", "type": "ip", "name": null, "match": "exact"}, {"value": "104.129.29.106", "type": "ip", "name": null, "match": "exact"}, {"value": "107.150.29.18", "type": "ip", "name": null, "match": "exact"}, {"value": "23.226.133.218", "type": "ip", "name": null, "match": "exact"}, {"value": "64.79.74.170", "type": "ip", "name": null, "match": "exact"}, {"value": "66.206.18.178", "type": "ip", "name": null, "match": "exact"}, {"value": "104.37.172.15", "type": "ip", "name": null, "match": "exact"}, {"value": "173.248.147.42", "type": "ip", "name": null, "match": "exact"}, {"value": "104.244.211.34", "type": "ip", "name": null, "match": "exact"}, {"value": "66.219.109.57", "type": "ip", "name": null, "match": "exact"}, {"value": "155.130.131.55", "type": "ip", "name": null, "match": "exact"}, {"value": "131.100.2.22", "type": "ip", "name": null, "match": "exact"}, {"value": "162.218.229.10", "type": "ip", "name": null, "match": "exact"}, {"value": "162.218.229.74", "type": "ip", "name": null, "match": "exact"}, {"value": "69.195.132.146", "type": "ip", "name": null, "match": "exact"}, {"value": "66.85.74.178", "type": "ip", "name": null, "match": "exact"}, {"value": "185.230.126.75", "type": "ip", "name": null, "match": "exact"}, {"value": "37.120.147.34", "type": "ip", "name": null, "match": "exact"}, {"value": "162.248.241.118", "type": "ip", "name": null, "match": "exact"}, {"value": "98.143.158.202", "type": "ip", "name": null, "match": "exact"}, {"value": "96.44.135.106", "type": "ip", "name": null, "match": "exact"}, {"value": "162.210.193.146", "type": "ip", "name": null, "match": "exact"}, {"value": "162.255.139.34", "type": "ip", "name": null, "match": "exact"}, {"value": "23.82.136.7", "type": "ip", "name": null, "match": "exact"}, {"value": "67.227.191.24", "type": "ip", "name": null, "match": "exact"}, {"value": "35.237.30.7", "type": "ip", "name": null, "match": "exact"}, {"value": "23.134.192.238", "type": "ip", "name": null, "match": "exact"}, {"value": "72.9.99.138", "type": "ip", "name": null, "match": "exact"}, {"value": "209.222.96.82", "type": "ip", "name": null, "match": "exact"}, {"value": "199.223.252.230", "type": "ip", "name": null, "match": "exact"}, {"value": "172.241.166.217", "type": "ip", "name": null, "match": "exact"}, {"value": "64.120.28.206", "type": "ip", "name": null, "match": "exact"}, {"value": "216.107.128.21", "type": "ip", "name": null, "match": "exact"}, {"value": "35.232.135.107", "type": "ip", "name": null, "match": "exact"}, {"value": "98.142.100.58", "type": "ip", "name": null, "match": "exact"}, {"value": "76.72.160.244", "type": "ip", "name": null, "match": "exact"}, {"value": "184.164.147.82", "type": "ip", "name": null, "match": "exact"}, {"value": "184.95.58.82", "type": "ip", "name": null, "match": "exact"}, {"value": "216.151.1.166", "type": "ip", "name": null, "match": "exact"}, {"value": "69.10.173.5", "type": "ip", "name": null, "match": "exact"}, {"value": "69.10.173.18", "type": "ip", "name": null, "match": "exact"}, {"value": "50.115.117.138", "type": "ip", "name": null, "match": "exact"}, {"value": "208.131.139.207", "type": "ip", "name": null, "match": "exact"}, {"value": "97.79.158.145", "type": "ip", "name": null, "match": "exact"}, {"value": "71.6.201.70", "type": "ip", "name": null, "match": "exact"}, {"value": "209.216.230.229", "type": "ip", "name": null, "match": "exact"}, {"value": "69.94.133.37", "type": "ip", "name": null, "match": "exact"}, {"value": "23.81.180.15", "type": "ip", "name": null, "match": "exact"}, {"value": "162.244.35.17", "type": "ip", "name": null, "match": "exact"}, {"value": "213.179.204.132", "type": "ip", "name": null, "match": "exact"}, {"value": "208.115.124.74", "type": "ip", "name": null, "match": "exact"}, {"value": "209.90.225.154", "type": "ip", "name": null, "match": "exact"}, {"value": "199.189.84.141", "type": "ip", "name": null, "match": "exact"}, {"value": "148.72.169.67", "type": "ip", "name": null, "match": "exact"}, {"value": "66.232.106.200", "type": "ip", "name": null, "match": "exact"}, {"value": "207.244.109.178", "type": "ip", "name": null, "match": "exact"}, {"value": "192.96.204.132", "type": "ip", "name": null, "match": "exact"}, {"value": "62.12.114.120", "type": "ip", "name": null, "match": "exact"}, {"value": "154.70.207.186", "type": "ip", "name": null, "match": "exact"}, {"value": "197.85.7.199", "type": "ip", "name": null, "match": "exact"}, {"value": "169.1.20.84", "type": "ip", "name": null, "match": "exact"}, {"value": "102.130.121.30", "type": "ip", "name": null, "match": "exact"}, {"value": "152.136.83.99", "type": "ip", "name": null, "match": "exact"}, {"value": "39.96.11.13", "type": "ip", "name": null, "match": "exact"}, {"value": "148.70.61.24", "type": "ip", "name": null, "match": "exact"}, {"value": "94.191.70.200", "type": "ip", "name": null, "match": "exact"}, {"value": "183.134.217.66", "type": "ip", "name": null, "match": "exact"}, {"value": "39.104.208.124", "type": "ip", "name": null, "match": "exact"}, {"value": "47.105.158.31", "type": "ip", "name": null, "match": "exact"}, {"value": "101.230.13.254", "type": "ip", "name": null, "match": "exact"}, {"value": "43.247.70.173", "type": "ip", "name": null, "match": "exact"}, {"value": "139.220.243.82", "type": "ip", "name": null, "match": "exact"}, {"value": "116.255.154.205", "type": "ip", "name": null, "match": "exact"}, {"value": "43.249.37.183", "type": "ip", "name": null, "match": "exact"}, {"value": "103.93.17.35", "type": "ip", "name": null, "match": "exact"}, {"value": "103.24.202.152", "type": "ip", "name": null, "match": "exact"}, {"value": "103.39.132.138", "type": "ip", "name": null, "match": "exact"}, {"value": "103.252.44.250", "type": "ip", "name": null, "match": "exact"}, {"value": "43.251.180.14", "type": "ip", "name": null, "match": "exact"}, {"value": "164.52.195.81", "type": "ip", "name": null, "match": "exact"}, {"value": "103.28.15.182", "type": "ip", "name": null, "match": "exact"}, {"value": "121.50.45.209", "type": "ip", "name": null, "match": "exact"}, {"value": "34.97.109.254", "type": "ip", "name": null, "match": "exact"}, {"value": "160.16.187.8", "type": "ip", "name": null, "match": "exact"}, {"value": "202.239.38.158", "type": "ip", "name": null, "match": "exact"}, {"value": "31.204.145.174", "type": "ip", "name": null, "match": "exact"}, {"value": "37.252.244.74", "type": "ip", "name": null, "match": "exact"}, {"value": "172.107.248.114", "type": "ip", "name": null, "match": "exact"}, {"value": "103.18.246.22", "type": "ip", "name": null, "match": "exact"}, {"value": "103.152.255.116", "type": "ip", "name": null, "match": "exact"}, {"value": "125.209.111.229", "type": "ip", "name": null, "match": "exact"}, {"value": "103.19.16.7", "type": "ip", "name": null, "match": "exact"}, {"value": "103.254.154.21", "type": "ip", "name": null, "match": "exact"}, {"value": "139.99.124.184", "type": "ip", "name": null, "match": "exact"}, {"value": "37.252.243.26", "type": "ip", "name": null, "match": "exact"}, {"value": "119.59.110.168", "type": "ip", "name": null, "match": "exact"}, {"value": "203.170.129.205", "type": "ip", "name": null, "match": "exact"}, {"value": "103.199.17.102", "type": "ip", "name": null, "match": "exact"}, {"value": "45.248.79.74", "type": "ip", "name": null, "match": "exact"}, {"value": "45.248.79.75", "type": "ip", "name": null, "match": "exact"}, {"value": "118.127.3.85", "type": "ip", "name": null, "match": "exact"}, {"value": "111.125.181.28", "type": "ip", "name": null, "match": "exact"}, {"value": "221.121.139.27", "type": "ip", "name": null, "match": "exact"}, {"value": "221.121.156.27", "type": "ip", "name": null, "match": "exact"}, {"value": "221.121.154.217", "type": "ip", "name": null, "match": "exact"}, {"value": "139.99.149.37", "type": "ip", "name": null, "match": "exact"}, {"value": "40.122.150.170", "type": "ip", "name": null, "match": "exact"}, {"value": "168.205.94.10", "type": "ip", "name": null, "match": "exact"}, {"value": "190.103.177.82", "type": "ip", "name": null, "match": "exact"}, {"value": "186.250.243.146", "type": "ip", "name": null, "match": "exact"}, {"value": "45.179.88.29", "type": "ip", "name": null, "match": "exact"}, {"value": "187.45.179.74", "type": "ip", "name": null, "match": "exact"}, {"value": "37.252.239.34", "type": "ip", "name": null, "match": "exact"}, {"value": "185.50.105.199", "type": "ip", "name": null, "match": "exact"}, {"value": "185.50.104.136", "type": "ip", "name": null, "match": "exact"}, {"value": "45.224.128.107", "type": "ip", "name": null, "match": "exact"}, {"value": "69.94.133.38", "type": "ip", "name": null, "match": "exact"}, {"value": "131.100.1.42", "type": "ip", "name": null, "match": "exact"}, {"value": "142.202.136.223", "type": "ip", "name": null, "match": "exact"}, {"value": "188.172.252.50", "type": "ip", "name": null, "match": "exact"}, {"value": "168.195.218.158", "type": "ip", "name": null, "match": "exact"}, {"value": "157.175.35.24", "type": "ip", "name": null, "match": "exact"}, {"value": "41.215.242.250", "type": "ip", "name": null, "match": "exact"}, {"value": "213.227.181.18", "type": "ip", "name": null, "match": "exact"}, {"value": "46.151.208.152", "type": "ip", "name": null, "match": "exact"}, {"value": "176.125.231.70", "type": "ip", "name": null, "match": "exact"}, {"value": "37.235.60.161|188.65.74.52|217.196.146.37|185.244.212.214|193.110.248.20| 193.110.248.22|81.95.119.11|77.243.191.61| 91.207.57.98|185.59.17.175|185.164.35.23|185.148.147.95|213.169.149.134|77.93.208.23|82.103.128.245|77.247.111.36|35.228.155.42|185.103.110.150|81.175.163.36|91.216.228.150|178.170.41.67| 178.170.40.150|217.182.195.34|54.36.123.176|94.247.28.245|188.172.245.26| 188.172.245.230|195.154.28.177| 51.159.30.31| 51.159.30.175|163.172.110.103|213.246.58.48| 213.246.39.161|46.31.195.69|37.59.32.110|62.138.14.201|82.165.158.38|80.239.175.138| 80.239.175.136|37.60.204.10| 37.60.204.11|109.69.64.25| 109.69.66.45|81.20.140.210| 85.88.13.26|89.163.153.36| 89.163.135.90| 89.163.146.55|87.118.90.122|136.243.24.72| 178.63.14.126|46.165.240.37| 37.58.57.91| 84.16.234.194|188.94.27.154| 188.94.27.156|81.3.23.227| 81.3.23.226|81.169.191.4| 81.169.191.6| 81.169.191.18|185.3.233.48| 185.3.233.47| 185.3.232.150|213.136.66.61| 213.136.66.90|130.185.109.26| 130.185.109.16|109.235.61.161|46.227.57.21|78.108.36.46|195.56.171.7|46.22.130.142| 188.241.178.82|77.81.232.186|158.58.173.8|37.252.253.22|185.221.175.228|89.46.72.60|81.31.151.97|109.248.149.165|46.166.165.78|94.242.222.100|185.173.227.17|213.214.121.213| 185.113.196.214|178.217.84.4| 188.241.149.95| 66.212.22.2| 37.97.223.120| 5.182.210.227| 5.182.210.168|185.69.100.241|213.206.252.57|46.182.221.24|95.211.176.129| 95.211.176.134|46.249.47.10|31.204.152.10| 185.145.63.225|185.183.33.195| 185.183.33.196|176.56.235.232|62.122.255.177|46.29.218.162|84.247.50.74|212.7.217.44| 54.36.175.139|109.71.46.159|188.208.32.66|95.213.193.66|185.175.158.146|5.188.199.212|131.153.41.138| 131.153.96.186|37.252.246.26|185.183.106.51|82.223.102.190|185.230.124.42|77.230.214.40|185.127.131.8|81.93.149.230|188.212.109.152|185.133.205.98|85.118.207.140|46.21.97.221| 37.120.209.150|179.43.168.230|185.19.29.13|37.35.107.70|82.195.249.99|152.89.162.170| 195.242.213.234|37.247.103.10|185.84.181.48|176.103.48.42|81.27.82.99|134.19.161.36|62.128.207.214| 62.128.194.219|77.68.81.80| 109.228.61.195|78.129.209.245| 78.129.209.253|212.38.169.106| 37.220.21.50| 23.106.36.46| 51.89.192.122|77.240.14.105| 217.64.114.108|45.85.194.114|78.129.191.59| 78.129.191.58|109.73.65.78|217.194.217.82| 217.194.217.83|213.175.208.81|199.119.216.173| 199.119.216.174|142.44.137.201| 192.99.201.172|167.114.172.11|66.11.155.244| 5.149.253.60| 5.149.253.58|71.19.249.62| 71.19.249.155|201.131.127.49|131.100.0.46|8.28.86.204|54.191.1.120|131.153.187.42| 131.153.3.66|64.42.181.66| 167.160.88.242| 104.129.24.50|40.122.150.170|23.100.43.234|155.254.18.23| 8.39.234.147|192.34.84.114| 199.217.106.186|89.40.216.20|192.154.255.94|104.129.29.106| 107.150.29.18|23.226.133.218|64.79.74.178|66.206.18.178| 104.37.172.15|173.248.147.42|104.244.211.34|66.219.109.57|155.130.131.55|131.100.2.22|162.218.229.10| 162.218.229.74|69.195.132.146| 66.85.74.178|185.230.126.75| 37.120.147.34| 45.89.173.186|162.248.241.118|98.143.158.202| 96.44.135.106| 167.160.160.178|162.210.193.146|162.255.139.34| 23.82.136.7|67.227.191.24|35.237.30.7|23.134.192.238|72.9.99.138| 209.222.96.82| 199.223.252.230| 212.103.48.178|172.241.166.217| 64.120.28.206|216.107.128.21|35.232.135.107|98.142.100.58|76.72.160.244|184.164.147.82| 184.95.58.82|216.151.1.166|69.10.173.5| 69.10.173.18|69.94.133.38|68.169.41.196| 208.131.139.207|97.79.158.145|71.6.201.70| 209.216.230.229|69.94.133.37| 23.81.180.15|162.244.35.17|213.179.204.132|208.115.124.74| 209.90.225.154| 173.0.59.114|209.126.120.70| 148.72.169.67|66.232.106.200|207.244.109.178| 192.96.204.132|154.27.80.218| 154.27.80.219|62.12.114.120|154.70.207.186|197.85.7.199|169.1.20.84| 102.130.121.30|101.201.208.194| 39.96.11.13|148.70.61.24|94.191.70.200|183.134.217.66|39.104.208.124|47.105.158.31|101.230.13.254|43.247.70.173|139.220.243.82|116.255.154.205|43.249.37.183| 209.58.185.57|103.93.17.35|103.24.202.152|103.39.132.138|103.252.44.250|43.251.180.14|164.52.195.81|103.28.15.182|121.50.45.209|34.97.109.254|160.16.187.8|202.239.38.158|31.204.145.174|37.252.244.74| 172.107.248.114|103.18.246.22|103.152.255.116|125.209.111.229|103.19.16.7|103.254.154.21| 139.99.124.184|37.252.243.26|119.59.110.168| 203.170.129.205|103.199.17.102|45.248.79.74| 45.248.79.75|118.127.3.85|116.206.229.106|221.121.139.27|221.121.156.27| 221.121.156.229|221.121.154.217| 139.99.149.37|49.50.250.78| 49.50.246.154|168.205.94.10|190.103.177.82|186.250.243.146|45.179.88.29|187.45.179.74|37.252.239.34|185.50.105.199| 185.50.104.136|45.224.128.107|37.252.251.38|131.100.1.42|190.123.44.20|188.172.252.50|168.195.218.158|157.175.35.24|41.215.242.250|213.227.181.18|46.151.208.152|176.125.231.70", "type": "ip", "name": null, "match": "regex"}]]]], "id": "18631160125", "name": "Exclude Uptrends Traffic"}], "anonymizeIP": true, "projectJS": function(){/***********************************************************************/
/* FCN Project JS Changelist - updated 22 December 2021               */
/* - Moved purchase metrics to top of block, in case of code halting because of errors                                                 */
/***********************************************************************/

/********* SpringBoard start *************/
// Springboard v4.0
window.springBoard = window.springBoard || {};

window.springBoard.urlParams;

window.springBoard.revision = 4.0;

/**
 * Function to create browser cookies
 * @param  {string}     name    Name of the cookie
 * @param  {string}     value   Value fo the cookie
 * @param  {integer}    days    Length of cookie in days. Leave blank to never expire
 * @return {null}
 */
window.springBoard.createCookie = function (name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else var expires = "";
	var cDomain = typeof window.springBoard.cookieDomain !== 'undefined' ? window.springBoard.cookieDomain : (document.location.host.indexOf("www.") == 0) ? document.location.host.substr(3, document.location.host.length) : document.location.host;
	document.cookie = escape(name) + "=" + escape(value) + expires + ";domain=" + cDomain + ";path=/" + (document.location.protocol == "https:" ? "; secure" : "");

	return null;
};

/**
 * Function to read values of browser cookies
 * @param  {string}     name    Name of cookie to read
 * @return {string|null}        Value of cookie. Returns null if cookie doesn't exist
 */
window.springBoard.readCookie = function (name) {
	var nameEQ = escape(name) + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
	}
	return null;
};

/**
 * Function to delete a browser cookie
 * @param  {string}     name    Name of cookie to delete
 * @return {null}
 */
window.springBoard.eraseCookie = function (name) {
	window.springBoard.createCookie(name, "", -1);

	return null;
};

/**
 * Function to add custom CSS to a page
 * @param {string}      css     A string of CSS to add to a page
 */
window.springBoard.addCss = function (css) {
	var head = document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	head.appendChild(style);
};

/**
 * Function to add custom Javascript to a page
 * @param {string}  js   The string of Javascript to add
 */
window.springBoard.addJS = function (js) {
	var head = document.getElementsByTagName('head')[0],
		script = document.createElement('script');

	script.type = 'text/javascript';
	script.src = js;
	head.appendChild(script);
};

/**
 * Function to set URL parameters
 *
 */
window.onpopstate = function () {
	var match,
		pl = /\+/g, // Regex for replacing addition symbol with a space
		search = /([^&=]+)=?([^&]*)/g,
		decode = function (s) {
			return decodeURIComponent(s.replace(pl, " "));
		},
		query = window.location.search.substring(1);

	window.springBoard.urlParams = {};
	while (match = search.exec(query))
		window.springBoard.urlParams[decode(match[1])] = decode(match[2]);
};
window.onpopstate();

// Check if in QA and add/remove cookie
window.springBoard.checkCookies = function () {
	if (window.springBoard.urlParams['cfQA']) {
		var cfQA = window.springBoard.urlParams['cfQA'].toLowerCase();
		if (cfQA == "true") {
			window.springBoard.createCookie('cfQA', 'true');
		}
		if (cfQA == "false") {
			window.springBoard.eraseCookie('cfQA');
		}
	}

	// Check if in Disabled Optimizely mode and add/remove cookie
	if (window.springBoard.urlParams['cvDisable']) {
		var cvDisable = window.springBoard.urlParams['cvDisable'].toLowerCase();
		if (cvDisable == "true") {
			window.springBoard.createCookie('cvDisable', 'true');
			window.optimizely = window.optimizely || [];
			window.optimizely.push(["disable"]);
		}
		if (cvDisable == "false") {
			window.springBoard.eraseCookie('cvDisable');
		}
	}

	// Disabled Window Display
	if (window.springBoard.readCookie('cvDisable') == 'true') {
		document.title = "[DISABLED] " + document.title;
	}
};
window.springBoard.checkCookies();

/**
 * Send GA Event
 *
 */
window.springBoard.sendGAEvent = function (eventObject) {
	if (typeof window.ga !== "undefined" && typeof eventObject !== 'undefined' && typeof eventObject.category !== 'undefined' && typeof eventObject.action !== 'undefined' && typeof eventObject.label !== 'undefined') {
		var gaName = typeof eventObject.gaName !== 'undefined' ? eventObject.gaName : '';

		var gaObj = {
			'hitType': gaName + "event",
			'eventCategory': eventObject.category,
			'eventAction': eventObject.action,
			'eventLabel': eventObject.label
		};

		if (typeof eventObject.nonInteraction !== 'undefined' && eventObject.nonInteraction) {
			gaObj.nonInteraction = 1;
		}

		if (typeof eventObject.value !== 'undefined' && eventObject.value) {
			gaObj.eventValue = eventObject.value;
		}

		window.ga(gaName + 'send', gaObj);
	}
};

/**
 * jQuery on alternative
 *
 */
window.springBoard.on = function (eventType, selector, action) {
	document.addEventListener(eventType, function (e) {
		var target = e.target;
		if (target.matches(selector)) {
			action(e);
		} else {
			while (target && target.parentNode !== document) {
				target = target.parentNode;
				if (!target) {
					return;
				} // If element doesn't exist

				if (target.matches(selector)) {
					action(e);
				}
			}
		}
	});
};

/**
 * jQuery getScript alternative
 *
 */
window.springBoard.getScript = function (source, callback) {
	var script = document.createElement('script');
	var prior = document.getElementsByTagName('script')[0];
	script.async = 1;

	script.onload = script.onreadystatechange = function (_, isAbort) {
		if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
			script.onload = script.onreadystatechange = null;
			script = undefined;

			if (!isAbort) {
				if (callback) callback();
			}
		}
	};

	script.src = source;
	prior.parentNode.insertBefore(script, prior);
};

/**
 * jQuery ajaxComplete alternative
 *
 */
window.springBoard.ajaxComplete = function (callback) {
	var send = XMLHttpRequest.prototype.send;
	XMLHttpRequest.prototype.send = function () {
		this.addEventListener('load', function () {
			callback(this, arguments);
		});
		return send.apply(this, arguments);
	};
};
/********* SpringBoard End *************/

// Tracking
var cvCurrentUrl = window.location.href;

cvTrackingOnUrlChange();

// Check for URL change
var checkUrlChange = setInterval(function () {
	if (window.location.href !== cvCurrentUrl) {
		cvCurrentUrl = window.location.href;
		cvTrackingOnUrlChange();
	}
}, 100);

function cvTrackingOnUrlChange() {
	var cvWaitForOptimizely;
	if (!cvWaitForOptimizely) {
		cvWaitForOptimizely = setInterval(function () {
			if (typeof window.optimizely !== 'undefined' && typeof window.optimizely.get('utils') !== 'undefined') {
				clearInterval(cvWaitForOptimizely);
				cvWaitForOptimizely = null;

				window.optimizely = window.optimizely || [];
				var utils = window.optimizely.get('utils');
				var cvUrl = window.location.pathname;

				// Fire goals on Payment Confirmation page
				if (cvUrl.indexOf('/privatecar/payment/confirm') > -1) {
					// Policy confirmation
					window.optimizely.push({
						type: 'event',
						eventName: 'cv_policy_purchased'
					});

					if (window.localStorage.getItem('cvPolicyOption')) {
						var cvPolicyOption = window.localStorage.getItem('cvPolicyOption');

						window.optimizely.push({
							type: 'event',
							eventName: 'cv_check_policy_option_' + cvPolicyOption
						});

						window.localStorage.removeItem('cvPolicyOption');
					}

					if (window.localStorage.getItem('cvPaymentType')) {
						var cvPaymentOption = window.localStorage.getItem('cvPaymentType');

						window.optimizely.push({
							type: 'event',
							eventName: 'cv_check_payment_option_' + cvPaymentOption
						});

						window.localStorage.removeItem('cvPaymentType');
					}

					// Enhanced Cover Popup
					if (window.localStorage.getItem('cvEnhancedCoverPopup')) {
						window.optimizely.push({
							type: 'event',
							eventName: 'cv_enhanced_cover_popup'
						});
					}

					if (window.localStorage.getItem('cvEnhancedCoverPopup')) {
						window.optimizely.push({
							type: 'event',
							eventName: 'cv_check_enhanced_cover_popup'
						});

						window.localStorage.removeItem('cvEnhancedCoverPopup');
					}

					// Excess Protect Cover
					if (window.localStorage.getItem('cvExcessProtectCover')) {
						window.optimizely.push({
							type: 'event',
							eventName: 'cv_excess_protect_cover_selected'
						});

						window.optimizely.push({
							type: 'event',
							eventName: 'cv_enhanced_cover_selected'
						});

						window.localStorage.removeItem('cvExcessProtectCover');
					}

					// Hire Car Cover
					if (window.localStorage.getItem('cvHireCarCover')) {
						window.optimizely.push({
							type: 'event',
							eventName: 'cv_hire_car_cover_selected'
						});

						window.optimizely.push({
							type: 'event',
							eventName: 'cv_enhanced_cover_selected'
						});

						window.localStorage.removeItem('cvHireCarCover');
					}

					// Personal Accident Cover
					if (window.localStorage.getItem('cvPersonalAccidentCover')) {
						window.optimizely.push({
							type: 'event',
							eventName: 'cv_personal_accident_cover_selected'
						});

						window.optimizely.push({
							type: 'event',
							eventName: 'cv_enhanced_cover_selected'
						});

						window.localStorage.removeItem('cvPersonalAccidentCover');
					}
				}

				// Set Cookies for payment selected and policy options
				utils.waitForElement('#cta-btn').then(function (continueBtn) {
					continueBtn.addEventListener('click', function () {

						// Payment selected
						if (window.location.pathname.indexOf('privatecar/quote/quote') > -1) {
							if (document.querySelectorAll('.card.shadow .payment-type-btn').length > 1 || (document.querySelector('input[data-uptrends-id="choose-monthly-top"]') && window.getComputedStyle(document.querySelector('input[data-uptrends-id="choose-monthly-top"]'), ':before').display === 'block')) {
								window.localStorage.setItem('cvPaymentType', 'monthly');
							} else {
								window.localStorage.setItem('cvPaymentType', 'annually');
							}

							// Policy option
							var policyOptValue;
							if (document.querySelector('img[class="traffic-image"]')) {
								policyOptValue = document.querySelector('img[class="traffic-image"]').src,
									policyOptValue = policyOptValue.indexOf('1CentralPlus') > -1 ? 'plus' : policyOptValue.indexOf('1CentralLegal') > -1 ? 'legal' : policyOptValue.indexOf('1CentralPremier') > -1 ? 'premier' : 'standard';
							} else {
								policyOptValue = 'value';
							}

							window.localStorage.setItem('cvPolicyOption', policyOptValue);
						}

						// Value funnel ancillaries
						if (window.location.pathname.indexOf('/privatecar/quote/ancillaries') > -1) {
							// Check Excess Protect Cover
							if (document.querySelectorAll('#ep.ancillary-card.selected').length > 0 || (document.querySelector('input[id="\'excessProtect_true\'"]') && document.querySelector('input[id="\'excessProtect_true\'"]').checked === true)) {
								window.localStorage.setItem('cvExcessProtectCover', 'true');
							} else {
								window.localStorage.removeItem('cvExcessProtectCover');
							}

							// Check Hire Car Cover
							if (document.querySelectorAll('#hc.ancillary-card.selected').length > 0 || (document.querySelector('input[id="\'hireCar_true\'"]') && document.querySelector('input[id="\'hireCar_true\'"]').checked === true)) {
								window.localStorage.setItem('cvHireCarCover', 'true');
							} else {
								window.localStorage.removeItem('cvHireCarCover');
							}

							// Check Personal Accident Cover
							if (document.querySelectorAll('#pc.ancillary-card.selected').length > 0 || (document.querySelector('input[id="\'personalAccident_true\'"]') && document.querySelector('input[id="\'personalAccident_true\'"]').checked === true)) {
								window.localStorage.setItem('cvPersonalAccidentCover', 'true');
							} else {
								window.localStorage.removeItem('cvPersonalAccidentCover');
							}
						}

						// Main funnel ancillaries
						if (window.location.pathname.indexOf('/privatecar/quote/quote') > -1) {
							// Check Excess Protect Cover
							if (document.querySelector('app-excess-protect app-add-remove-ancillary-box .bg-secondary-grape')) {
								window.localStorage.setItem('cvExcessProtectCover', 'true');
							} else {
								window.localStorage.removeItem('cvExcessProtectCover');
							}

							// Check Hire Car Cover
							if (document.querySelector('app-hire-car app-add-remove-ancillary-box .bg-secondary-grape')) {
								window.localStorage.setItem('cvHireCarCover', 'true');
							} else {
								window.localStorage.removeItem('cvHireCarCover');
							}

							// Check Personal Accident Cover
							if (document.querySelector('app-personal-accident app-add-remove-ancillary-box .bg-secondary-grape')) {
								window.localStorage.setItem('cvPersonalAccidentCover', 'true');
							} else {
								window.localStorage.removeItem('cvPersonalAccidentCover');
							}
						}

						if (document.querySelector('input#dateOfBirth') && document.querySelector('input#dateOfBirth').value !== "") {
							var cvDoB = document.querySelector('input#dateOfBirth').value,
								cvDobYear = parseInt(cvDoB.substring(cvDoB.lastIndexOf('/')+1)),
								cvCurrentDate = new Date(),
								cvCurrentYear = cvCurrentDate.getFullYear(),
								cvAge = cvCurrentYear - cvDobYear,
								cvAgeGroup;

							if (16 <= cvAge && cvAge <= 20) {
								cvAgeGroup = "16-20";
							} else if (20 <= cvAge && cvAge <= 24) {
								cvAgeGroup = "20-24";
							} else if (25 <= cvAge && cvAge <= 29) {
								cvAgeGroup = "25-29";
							} else if (30 <= cvAge && cvAge <= 34) {
								cvAgeGroup = "30-34";
							} else if (35 <= cvAge && cvAge <= 39) {
								cvAgeGroup = "35-39";
							} else if (40 <= cvAge && cvAge <= 44) {
								cvAgeGroup = "40-44";
							} else if (45 <= cvAge && cvAge <= 49) {
								cvAgeGroup = "45-49";
							} else if (50 <= cvAge && cvAge <= 54) {
								cvAgeGroup = "50-54";
							} else if (55 <= cvAge && cvAge <= 59) {
								cvAgeGroup = "55-59";
							} else if (60 <= cvAge && cvAge <= 64) {
								cvAgeGroup = "60-64";
							} else if (65 <= cvAge && cvAge <= 69) {
								cvAgeGroup = "65-69";
							} else if (70 <= cvAge && cvAge <= 74) {
								cvAgeGroup = "70-74";
							} else if (75 <= cvAge && cvAge <= 79) {
								cvAgeGroup = "75-79";
							} else if (80 <= cvAge && cvAge <= 84) {
								cvAgeGroup = "80-84";
							} else if (cvAge >= 85) {
								cvAgeGroup = "85+";
							}

							if (cvAgeGroup) {
								window.optimizely.push({
									type: 'user',
									attributes: {
										'Age': cvAgeGroup
									}
								});
							}
						}
					});
				});

				// Clicks on monthly payment option
				utils.waitForElement('div[data-adobelaunch-id="choose-monthly-top"]').then(function (monthlyCTA) {
					monthlyCTA.addEventListener('click', function () {
						window.optimizely.push({
							type: 'event',
							eventName: 'cv_pay_monthly_click'
						});
					});
				});

				// Clicks on monthly payment option - Value
				utils.waitForElement('app-payment-method-new fieldset div > div').then(function (monthlyCTA) {
					monthlyCTA.addEventListener('click', function () {
						window.optimizely.push({
							type: 'event',
							eventName: 'cv_pay_monthly_click'
						});
					});
				});

				// Pageviews
				if (cvUrl.indexOf('/privatecar/newquote/car') > -1) {
					try {
						window.optimizely.push({
							type: 'event',
							eventName: 'cv_your_car_visits'
						});
					} catch (err) {
						console.dir(err);
					}
				}

				if (cvUrl.indexOf('/privatecar/newquote/driver') > -1) {
					window.optimizely.push({
						type: 'event',
						eventName: 'cv_drivers_page'
					});
				}

				if (cvUrl.indexOf('/privatecar/newquote/cover') > -1) {
					window.optimizely.push({
						type: 'event',
						eventName: 'cv_cover_page'
					});
				}

				if (cvUrl.indexOf('/privatecar/quote/quote') > -1) {
					window.optimizely.push({
						type: 'event',
						eventName: 'cv_quote_page'
					});
				}

				if (cvUrl.indexOf('/privatecar/quote/importantstatements') > -1) {
					window.optimizely.push({
						type: 'event',
						eventName: 'cv_important_statements_page'
					});
				}

				// Clicked through from main quote page - segment
				if (cvUrl.indexOf('/privatecar/quote/quote') > -1) {
					window.springBoard.on('click', '#cta-btn', function () {
						window.optimizely.push({
							"type": "user",
							"attributes": {
								"Clicked through from main quote page": "Clicked Forward"
							}
						});
					});

					utils.waitForElement('.ancillary-overlay-inner h3.text-secondary-purple').then(function (cvOption) {
						var cvEnhancedOpt = cvOption.innerHTML;

						window.springBoard.on('click', '.ancillary-overlay-inner .ancillary-btn', function () {
							window.springBoard.createCookie('cvEnhancedCoverPopup', cvEnhancedOpt);
							window.springBoard.createCookie('cvEnhancedCover', 'true');
							window.localStorage.setItem('cvEnhancedCoverPopup', cvEnhancedOpt);
							window.localStorage.setItem('cvEnhancedCover', 'true');
							// Check if add-on is removed
							window.springBoard.on('click', '.ancillary-btn.white.underline', function (e) {
								var cvRemovedVal = e.target.closest('.ancillary-card').querySelector('.text-secondary-purple').innerHTML;
								if (window.springBoard.readCookie('cvEnhancedCoverPopup') && cvRemovedVal === window.springBoard.readCookie('cvEnhancedCoverPopup')) {
									window.springBoard.eraseCookie('cvEnhancedCoverPopup');
									window.springBoard.eraseCookie('cvEnhancedCover');
								}
								if (window.localStorage.getItem('cvEnhancedCoverPopup') && cvRemovedVal === window.localStorage.getItem('cvEnhancedCoverPopup')) {
									window.localStorage.removeItem('cvEnhancedCoverPopup');
									window.localStorage.removeItem('cvEnhancedCover');
								}
							});
						});
					});
				}

				// Aggregator vs Non-aggregator, Referrer vs Non Referrer, Aggregator with promotion banner vs all other traffic
				if (cvUrl.indexOf('/privatecar/quote/quote') > -1) {
					var cvAggregators = ['meer-spacestation.co.uk', 'quotezone.co.uk', 'compareni.com', 'comparethemarket.com', 'confused.com', 'gocompare', 'uswitch.com', 'moneysupermarket.com', 'mustard.co.uk'];

					for (var i = 0; i < cvAggregators.length; i++) {
						if (document.referrer.indexOf(cvAggregators[i]) > -1) {
							window.optimizely.push({
								"type": "user",
								"attributes": {
									"Aggregator vs Non-Aggregator": "Aggregator"
								}
							});

							window.optimizely.push({
								"type": "user",
								"attributes": {
									"Referring site vs Non-referring site": "Referrer"
								}
							});
							break;
						} else if (document.referrer.indexOf('1stcentralinsurance.com') > -1) {
							window.optimizely.push({
								"type": "user",
								"attributes": {
									"Referring site vs Non-referring site": "Non-referrer"
								}
							});

							window.optimizely.push({
								"type": "user",
								"attributes": {
									"Aggregator vs Non-Aggregator": "Non-Aggregator"
								}
							});
							break;
						} else {
							window.optimizely.push({
								"type": "user",
								"attributes": {
									"Referring site vs Non-referring site": "Other"
								}
							});

							window.optimizely.push({
								"type": "user",
								"attributes": {
									"Aggregator vs Non-Aggregator": "Non-Aggregator"
								}
							});
						}
					}

					// Aggregator with promotion banner vs all other traffic
					(function () {
						function waitUntil(predicate, success, error) {
							var int = setInterval(function () {
								if (predicate()) {
									clearInterval(int);
									int = null;
									success();
								}
							}, 500);
							setTimeout(function () {
								if (int !== null) {
									clearInterval(int);
									if (typeof (error) === 'function') {
										error();
									}
								}
							}, 10000);
						}

						function pushAttribute(val) {
							window.optimizely = window.optimizely || [];
							window.optimizely.push({
								'type': 'user',
								'attributes': {
									'Aggregator with promotion banner vs all other traffic': val
								}
							});
						}
						if (window.location.pathname.indexOf('privatecar/quote/quote') > -1) {
							waitUntil(function () {
								return document.querySelector('img.traffic-image.source, .new-breadcrumbs .container > .row.col-12.p-0 > .pl-0 > .col-12.p-0');
							}, function () {
								var imgSrc = document.querySelector('img.traffic-image.source').getAttribute('src');
								if (imgSrc.indexOf('FC000012') !== -1) {
									pushAttribute('promotion banner');
								} else {
									pushAttribute('other traffic');
								}
							});
						}
					}());
				}

				// Clicked through from statement page - goal
				window.springBoard.on('click', '#cta-btn', function () {
					if (window.location.pathname.indexOf('/privatecar/quote/importantstatements') > -1) {
						window.optimizely.push({
							type: 'event',
							eventName: 'cv_clicked_through_from_statement_page'
						});
					}

					if (cvUrl.indexOf('/privatecar/quote/quote') > -1) {
						window.optimizely.push({
							"type": "user",
							"attributes": {
								"Clicked through from main quote page": "Clicked Forward"
							}
						});
					}
				});

				// Fire goals on user portal page views:

				// MTAs completed - CONV
				if (cvUrl.indexOf("/adjustment/payment/paymentconfirmed") > -1) {
					window.optimizely.push({
						type: "event",
						eventName: "cv_portal_arrival_mta_complete",
					});
				}

				// Select page arrival - CONV
				if (cvUrl.indexOf("/adjustment/home/adjustmentchanges") > -1) {
					window.optimizely.push({
						type: "event",
						eventName: "cv_portal_arrival_select",
					});
				}

				// Quote for adjustments page arrival - CONV
				if (cvUrl.indexOf("/adjustment/result/quote") > -1) {
					window.optimizely.push({
						type: "event",
						eventName: "cv_portal_arrival_quote_for_adjustments",
					});
				}

				// Your policy page arrival - CONV
				if (cvUrl.indexOf("/customer/account") > -1) {
					window.optimizely.push({
						type: "event",
						eventName: "cv_portal_arrival_policy",
					});
				}

				// Change page arrival - CONV
				if (cvUrl.indexOf("/adjustment/home/changedetails") > -1) {
					window.optimizely.push({
						type: "event",
						eventName: "cv_portal_arrival_change",
					});
				}

				// Customer portal HP page arrival - CONV
				if (cvUrl.indexOf("/customer/dashboard") > -1) {
					window.optimizely.push({
						type: "event",
						eventName: "cv_portal_arrival_hp",
					});
				}
			}
		}, 50);
	}
}

// Intercept requests

/***
if (window.location.href.indexOf('quote.1stcentralinsurance.com') > -1) {
	(function (XHR) {
		try {
			var send = XHR.prototype.send;

			XHR.prototype.send = function (data) {
				this.addEventListener('load', function () {
					if (this.readyState == 4 && typeof this.responseURL !== 'undefined') {
						if (this.responseURL.indexOf('/CustomerWeb/CustomerDigital/api/workflow/get/true') > -1) {
							var response = JSON.parse(this.responseText).Data.AncillaryDetails;

							if (!window.sessionStorage.getItem('cvAncillaryDetails') || (window.sessionStorage.getItem('cvAncillaryDetails') && (window.sessionStorage.getItem('cvAncillaryDetails') !== JSON.stringify(response)))) {
								window.sessionStorage.setItem('cvAncillaryDetails', JSON.stringify(response));
							}
						}
					}
				});
				return send.apply(this, arguments);
			};
		} catch(e) {
			//console.log(e);
		}
	})(XMLHttpRequest);
}
***/
}, "visitorAttributes": [], "enableForceParameters": true, "accountId": "13270690418", "events": [{"category": "other", "name": "Add legal", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_add_legal", "id": "15670880808", "eventFilter": {"filterType": "target_selector", "selector": "[data-adobelaunch-id=\"ancillary-list\"] [data-adobelaunch-id=\"le-add\"]"}}, {"category": "other", "name": "Add Excess Protect 500", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_add_excess_protect_500", "id": "15674470265", "eventFilter": {"filterType": "target_selector", "selector": "[data-adobelaunch-id=\"ep-500-add\"]"}}, {"category": "other", "name": "Add Breakdown 2", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_breakdown_2", "id": "15680740869", "eventFilter": {"filterType": "target_selector", "selector": "[data-adobelaunch-id=\"bd2-add\"]"}}, {"category": "other", "name": "Add NCD", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_add_ncd", "id": "15684650477", "eventFilter": {"filterType": "target_selector", "selector": "[data-adobelaunch-id=\"ncd-add\"]"}}, {"category": "other", "name": "Add Breakdown 1", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_breakdown_1", "id": "15702460595", "eventFilter": {"filterType": "target_selector", "selector": "[data-adobelaunch-id=\"bd1-add\"]"}}, {"category": "other", "name": "Click continue button", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_click_continue_button", "id": "15702640242", "eventFilter": {"filterType": "target_selector", "selector": "#cta-btn"}}, {"category": "other", "name": "Add Excess protect 300", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_add_excess_protect_300", "id": "15709170423", "eventFilter": {"filterType": "target_selector", "selector": "[data-adobelaunch-id=\"ep-300-add\"]"}}, {"category": "other", "name": "Add excess protect 750", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_add_excess_protect_750", "id": "15715160214", "eventFilter": {"filterType": "target_selector", "selector": "[data-adobelaunch-id=\"ep-750-add\"]"}}, {"category": "other", "name": "Add personal accident", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_add_personal_accident", "id": "15717130581", "eventFilter": {"filterType": "target_selector", "selector": "[data-adobelaunch-id=\"pa-add\"]"}}, {"category": "other", "name": "Add excess protect 1000", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_add_excess_protect_1000", "id": "15721140363", "eventFilter": {"filterType": "target_selector", "selector": "[data-adobelaunch-id=\"ep-1000-add\"]"}}, {"category": "other", "name": "Add Breakdown 3", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_breakdown_3", "id": "15723000634", "eventFilter": {"filterType": "target_selector", "selector": "[data-adobelaunch-id=\"bd3-add\"]"}}, {"category": "other", "name": "Add hire car", "eventType": "click", "viewId": "15374920238", "apiName": "13270690418_add_hire_car", "id": "15723000658", "eventFilter": {"filterType": "target_selector", "selector": "[data-adobelaunch-id=\"hc-add\"]"}}, {"category": "other", "name": "1. Your Car Visits [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_your_car_visits", "id": "17906432464", "eventFilter": null}, {"category": "other", "name": "3. Your Cover Visits [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_cover_page", "id": "17906921571", "eventFilter": null}, {"category": "other", "name": "4. Your Quote visits [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_quote_page", "id": "17923463665", "eventFilter": null}, {"category": "other", "name": "Pay monthly click - 5. your quote step [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_pay_monthly_click", "id": "17932044130", "eventFilter": null}, {"category": "other", "name": "2. The Drivers Visits [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_drivers_page", "id": "17934301845", "eventFilter": null}, {"category": "other", "name": "6. Purchased enhancement through popup [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_enhanced_cover_popup", "id": "17940214044", "eventFilter": null}, {"category": "other", "name": "6. Policy Purchased [CONV] New", "eventType": "custom", "viewId": null, "apiName": "cv_policy_purchased", "id": "17940893949", "eventFilter": null}, {"category": "other", "name": "NEW Enhanced cover chosen - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_check_enhanced_cover_selected", "id": "17940894292", "eventFilter": null}, {"category": "other", "name": "NEW Plus - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_check_policy_option_plus", "id": "17944653380", "eventFilter": null}, {"category": "other", "name": "Enhanced cover chosen - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_enhanced_cover_selected", "id": "17946032375", "eventFilter": null}, {"category": "other", "name": "NEW 6. Purchased enhancement through popup [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_check_enhanced_cover_popup", "id": "17953265385", "eventFilter": null}, {"category": "other", "name": "5a. Purchase Statement Visits [CONV] New", "eventType": "custom", "viewId": null, "apiName": "cv_important_statements_page", "id": "17959692646", "eventFilter": null}, {"category": "other", "name": "NEW Pay annually users - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_check_payment_option_annually", "id": "17965992387", "eventFilter": null}, {"category": "other", "name": "5.b. Clicked through from statement page [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_clicked_through_from_statement_page", "id": "17967820723", "eventFilter": null}, {"category": "other", "name": "NEW Pay monthly users - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_check_payment_option_monthly", "id": "17970700342", "eventFilter": null}, {"category": "other", "name": "NEW Premier - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_check_policy_option_premier", "id": "17979142808", "eventFilter": null}, {"category": "other", "name": "NEW Legal - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_check_policy_option_legal", "id": "17981861869", "eventFilter": null}, {"category": "other", "name": "NEW Standard - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_check_policy_option_standard", "id": "17982680319", "eventFilter": null}, {"category": "other", "name": "Q1 Yes | Q2 No - Bank Details question [CONV] 0.1", "eventType": "custom", "viewId": null, "apiName": "conv_q1y_q2n", "id": "18788600193", "eventFilter": null}, {"category": "other", "name": "Q1 & Q2 No - Bank Details question [CONV] 0.1", "eventType": "custom", "viewId": null, "apiName": "conv_q1_q2_no", "id": "18802300074", "eventFilter": null}, {"category": "other", "name": "Q1 No | Q2 Yes - Bank Details question [CONV] 0.1", "eventType": "custom", "viewId": null, "apiName": "conv_q1n_q2y", "id": "18807760218", "eventFilter": null}, {"category": "other", "name": "Q1 & Q2 Yes - Bank Details question [CONV] 0.1", "eventType": "custom", "viewId": null, "apiName": "conv_q1_q2_yes", "id": "18817410156", "eventFilter": null}, {"category": "other", "name": "Clicked on Customer Help link on quote page [CONV] [6.0]", "eventType": "custom", "viewId": null, "apiName": "FCN60ClickonCustomerHelp", "id": "19736111906", "eventFilter": null}, {"category": "other", "name": "Clicked on FAQs link on quote page [CONV] [6.0]", "eventType": "custom", "viewId": null, "apiName": "FCN60ClickonFAQ", "id": "19741692273", "eventFilter": null}, {"category": "other", "name": "Select page arrival - CONV", "eventType": "custom", "viewId": null, "apiName": "cv_portal_arrival_select", "id": "19930244522", "eventFilter": null}, {"category": "other", "name": "MTAs completed - CONV", "eventType": "custom", "viewId": null, "apiName": "cv_portal_arrival_mta_complete", "id": "19932276045", "eventFilter": null}, {"category": "other", "name": "Customer portal HP page arrival - CONV", "eventType": "custom", "viewId": null, "apiName": "cv_portal_arrival_hp", "id": "19936644357", "eventFilter": null}, {"category": "other", "name": "Your policy page change CTA click - CONV - 3.2", "eventType": "custom", "viewId": null, "apiName": "cv-3_2-cta-click-your-policy", "id": "19943403677", "eventFilter": null}, {"category": "other", "name": "Quote for adjustments page arrival - CONV", "eventType": "custom", "viewId": null, "apiName": "cv_portal_arrival_quote_for_adjustments", "id": "19949324788", "eventFilter": null}, {"category": "other", "name": "Your policy page arrival - CONV", "eventType": "custom", "viewId": null, "apiName": "cv_portal_arrival_policy", "id": "19955043942", "eventFilter": null}, {"category": "other", "name": "Change page arrival - CONV", "eventType": "custom", "viewId": null, "apiName": "cv_portal_arrival_change", "id": "19958964449", "eventFilter": null}, {"category": "other", "name": "Customer portal HP change CTA click - CONV - 3.2", "eventType": "custom", "viewId": null, "apiName": "cv-3_2-cta-click-portal-hp", "id": "19961014181", "eventFilter": null}, {"category": "other", "name": "[CONV] FCUX-18 Clicks on Opt-Out link", "eventType": "custom", "viewId": null, "apiName": "conv_fcux_18_clicks_on_opt_out_link", "id": "20000690961", "eventFilter": null}, {"category": "other", "name": "Clicks on sticky summary box - CONV (mobile) [FCN 4.5]", "eventType": "custom", "viewId": null, "apiName": "clicks_on_sticky_summary_box_mobile", "id": "20017715464", "eventFilter": null}, {"category": "other", "name": "Clicks on RAC cover upgrade CTAs - CONV", "eventType": "custom", "viewId": null, "apiName": "click_rac_cover_ugrade_cta_5_9", "id": "20081557887", "eventFilter": null}, {"category": "other", "name": "Clicks on Upgrade cover options CTAs [5.9]- CONV  ", "eventType": "custom", "viewId": null, "apiName": "click_ugrade_cover_options_cta_5_9", "id": "20087446883", "eventFilter": null}, {"category": "other", "name": "Clicks on \"Go to my quote\" CTA - CONV - 2.7", "eventType": "custom", "viewId": null, "apiName": "Clicks_on_Go_to_my_quote_CTA_CONV_2_7", "id": "20108291582", "eventFilter": null}, {"category": "other", "name": "Clicks on 'email me my quote link' - CONV - 4.7", "eventType": "custom", "viewId": null, "apiName": "clicksOnEmailMeMyQuoteLinkFcn47", "id": "20249378468", "eventFilter": null}, {"category": "other", "name": "[CONV] Click on Email me my Quote", "eventType": "click", "viewId": "20243918766", "apiName": "13270690418_click_on_email_me_my_quote", "id": "20258060264", "eventFilter": {"filterType": "target_selector", "selector": ".email-quote-box"}}, {"category": "other", "name": "Clicks on \"Go to my quote\" CTA - CONV - 6.2", "eventType": "custom", "viewId": null, "apiName": "Clicks_on_Go_to_my_quote_CTA_CONV_6_2", "id": "20290420683", "eventFilter": null}, {"category": "other", "name": "Hire car sale - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_hire_car_cover_selected", "id": "20319084005", "eventFilter": null}, {"category": "other", "name": "Excess protect sale - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_excess_protect_cover_selected", "id": "20323451350", "eventFilter": null}, {"category": "other", "name": "Personal Accident sale - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_personal_accident_cover_selected", "id": "20333140267", "eventFilter": null}, {"category": "other", "name": "NEW Value - 6. Policy Purchased [CONV]", "eventType": "custom", "viewId": null, "apiName": "cv_check_policy_option_value", "id": "20403151319", "eventFilter": null}, {"category": "other", "name": "Clicks on Upgrade cover options CTAs - CONV", "eventType": "custom", "viewId": null, "apiName": "upgradeCoverOptionClicks", "id": "20427596680", "eventFilter": null}, {"category": "other", "name": "Clicks on 'Yes, show me more' dropdown - CONV - 4.9 ", "eventType": "custom", "viewId": null, "apiName": "conv_clicks_on_yes_show_me_more", "id": "20435860475", "eventFilter": null}, {"category": "other", "name": "Clicks on 'Yes, show me more' CTA/link [CONV] [5.12]", "eventType": "custom", "viewId": null, "apiName": "yesShowMore_ctaClick", "id": "20519877916", "eventFilter": null}, {"category": "other", "name": "Clicks on 'I don't want...' link [CONV] [5.12]", "eventType": "custom", "viewId": null, "apiName": "idw_ctaClick", "id": "20534447622", "eventFilter": null}, {"category": "other", "name": "Visit Page: Aggregator vs non Aggregator", "eventType": "custom", "viewId": null, "apiName": "13741700055_aggregator_vs_non_aggregator", "id": "20537841219", "eventFilter": null}, {"category": "other", "name": "Clicks on 'Add Extras' /Continue CTA [VALUE] [CONV] [4.12]", "eventType": "custom", "viewId": null, "apiName": "continueOrExtrasCtaClick", "id": "20588840231", "eventFilter": null}, {"category": "other", "name": "Clicks on 'Review & Pay' link [VALUE] [CONV] [4.12]", "eventType": "custom", "viewId": null, "apiName": "reviewAndPayLink", "id": "20627160177", "eventFilter": null}, {"category": "other", "name": "All in one homepage 'make a change' CTA click - CONV - 5.10", "eventType": "custom", "viewId": null, "apiName": "makeChangeCtaClickFCN510", "id": "20646850353", "eventFilter": null}, {"category": "other", "name": "Clicks on 'help' - CONV", "eventType": "custom", "viewId": null, "apiName": "clicksOnHelpFCN510", "id": "20654720330", "eventFilter": null}, {"category": "other", "name": "Document uploads - CONV", "eventType": "custom", "viewId": null, "apiName": "documentUploadsFCN510", "id": "20658100181", "eventFilter": null}, {"category": "other", "name": "Clicks on \"See more info\" CTA [CONV] [8.0]", "eventType": "custom", "viewId": null, "apiName": "clickSeeMoreInfo", "id": "20658531136", "eventFilter": null}, {"category": "other", "name": "Document downloads - CONV", "eventType": "custom", "viewId": null, "apiName": "documentDownloadsFCN510", "id": "20660490569", "eventFilter": null}, {"category": "other", "name": "Change payment details - CONV", "eventType": "custom", "viewId": null, "apiName": "changePaymentDetailsFCN510", "id": "20664220344", "eventFilter": null}, {"category": "other", "name": "Multicar discount tile clicks - CONV", "eventType": "custom", "viewId": null, "apiName": "multiCarDiscountTileClick", "id": "20681180489", "eventFilter": null}, {"category": "other", "name": "Confirmed change details page visits [CONV]", "eventType": "custom", "viewId": null, "apiName": "confirmedChangeDetailsPageVisit", "id": "20704040522", "eventFilter": null}, {"category": "other", "name": "Clicks on 'Choose Monthly' - CONV", "eventType": "custom", "viewId": null, "apiName": "clickOnChooseMonthly", "id": "20765861260", "eventFilter": null}, {"category": "other", "name": "Clicks on the \"Get a Multicar quote\" CTA [CONV] [2.10]", "eventType": "custom", "viewId": null, "apiName": "multicarQuoteClick", "id": "20780660752", "eventFilter": null}, {"category": "other", "name": "Clicks on \"Find out more\" CTA on the Welcome page [CONV] [2.9]", "eventType": "custom", "viewId": null, "apiName": "welcomePageCtaClick", "id": "20784550436", "eventFilter": null}, {"category": "other", "name": "Clicks on \"Find out more\" CTA on quote page banner [CONV] [2.9]", "eventType": "custom", "viewId": null, "apiName": "quotePageCtaClick", "id": "20789012069", "eventFilter": null}, {"category": "other", "name": "Purchase Policy after 2.10 Banner Click", "eventType": "custom", "viewId": null, "apiName": "cv_21_banner_clicked", "id": "20789531216", "eventFilter": null}, {"category": "other", "name": "Clicks on Choose Annual - CONV - 4.10", "eventType": "custom", "viewId": null, "apiName": "clickOnChooseAnnual", "id": "20799242039", "eventFilter": null}, {"category": "other", "name": "Clicks on 'standard benefits' link [CONV]  RHbjz82jz8Mi9UEDq2VZK", "eventType": "custom", "viewId": null, "apiName": "clickOnStdBenefits_RHbjz82jz8Mi9UEDq2VZK", "id": "20900132705", "eventFilter": null}, {"category": "other", "name": "Clicks on 'show more' dropdown - CONV [6.4]", "eventType": "custom", "viewId": null, "apiName": "clickOnShowMoreFCN_6_4", "id": "20905975452", "eventFilter": null}, {"category": "other", "name": "Clicks on 'standard benefits' link [CONV] [6.4]", "eventType": "custom", "viewId": null, "apiName": "clickOnStdBenefits", "id": "20914770375", "eventFilter": null}, {"category": "other", "name": "Clicks on 'show more' dropdown - CONV [6.4 KfgyPjQQVhmsV5fLpevSh", "eventType": "custom", "viewId": null, "apiName": "clickOnShowMoreFCN_6_4_KfgyPjQQVhmsV5fLpevSh", "id": "20921135297", "eventFilter": null}, {"category": "other", "name": "Clicks on 'standard benefits' link [CONV]  2BwLfvfAkU6TtzWozwanU", "eventType": "custom", "viewId": null, "apiName": "clickOnStdBenefits_2BwLfvfAkU6TtzWozwanU", "id": "20927395146", "eventFilter": null}, {"category": "other", "name": "Clicks on 'show more' dropdown - CONV [6.4 H6GkRt5k2cccCP2PzEGDZ", "eventType": "custom", "viewId": null, "apiName": "clickOnShowMoreFCN_6_4_H6GkRt5k2cccCP2PzEGDZ", "id": "20937192650", "eventFilter": null}, {"category": "other", "name": "[CONV] FCN AA Test - Policy Purchased Test Metric", "eventType": "custom", "viewId": null, "apiName": "aaTestPurchaseMetric", "id": "20951670118", "eventFilter": null}, {"category": "other", "name": "[CONV] FCN 6.3 - Policy Purchase", "eventType": "custom", "viewId": null, "apiName": "fcn63policyPurchased", "id": "20968091397", "eventFilter": null}, {"category": "other", "name": "[CONV] FCN 4.10 - Policy Purchase", "eventType": "custom", "viewId": null, "apiName": "fcn41policyPurchased", "id": "20974050498", "eventFilter": null}, {"category": "other", "name": "[CONV] FCN 6.4 - Policy Purchased", "eventType": "custom", "viewId": null, "apiName": "fcn64policyPurchased", "id": "20983400815", "eventFilter": null}, {"category": "other", "name": "Clicks on Trustpilot logo [CONV] [1.5]", "eventType": "custom", "viewId": null, "apiName": "fcn15trustpilotLogo", "id": "20990910060", "eventFilter": null}, {"category": "other", "name": "[CONV] FCN 1.5 - Policy Purchased", "eventType": "custom", "viewId": null, "apiName": "fcn15policyPurchased", "id": "21005630139", "eventFilter": null}, {"category": "other", "name": "Clicks on carousel arrows [CONV] [1.5]", "eventType": "custom", "viewId": null, "apiName": "fcn15carouselClick", "id": "21011390332", "eventFilter": null}, {"category": "other", "name": "Clicks on the No.1 'i' icon [CONV] [1.6]", "eventType": "custom", "viewId": null, "apiName": "headline_iClick", "id": "21058620894", "eventFilter": null}, {"category": "other", "name": "Click on 'Choose Annually' - CONV - 4.8", "eventType": "custom", "viewId": null, "apiName": "13741700055_click_on_choose_annually__conv__48", "id": "21102010501", "eventFilter": null}, {"category": "other", "name": "Clicks on 'Yes' on 6.6 interstital [CONV] [6.6]", "eventType": "custom", "viewId": null, "apiName": "fcn66_cvInterstitialYes", "id": "21228530061", "eventFilter": null}, {"category": "other", "name": "Clicks on 'No' on the 6.6 interstitial [CONV] [6.6]", "eventType": "custom", "viewId": null, "apiName": "fcn66_cvInterstitialNo", "id": "21241000583", "eventFilter": null}, {"category": "other", "name": "Clicks on 'Upgrade' to Premier Plus [CONV] [4.13]", "eventType": "custom", "viewId": null, "apiName": "fcn413upgradeClick", "id": "21300470845", "eventFilter": null}, {"category": "other", "name": "Clicks on the 'i' icon on Premier Plus upgrade tile [CONV] [4.13]", "eventType": "custom", "viewId": null, "apiName": "fcn413iconClick", "id": "21337170670", "eventFilter": null}, {"category": "other", "name": "Clicks on \"Continue with fixed price\" CTA [CONV] [4.15]", "eventType": "custom", "viewId": null, "apiName": "fcn415continueFixed", "id": "21399960304", "eventFilter": null}], "experimental": {"trimPages": false}, "revision": "4971"},c=__webpack_require__(2603),f="initializeOptimizelyPreview";if(c.initGlobalStore(s),a.populateDirectiveData(),i.clientHasAlreadyInitialized())t.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(i.shouldBailForDesktopApp())t.log("Main / Disabling because of desktop app.");else if(i.conflictInObservingChanges())t.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(i.shouldLoadInnie())o.registerFunction("getProjectId",(function(){return s.projectId})),o.registerFunction("getAccountId",(function(){return s.accountId})),u.addScriptAsync("https://app.optimizely.com/js/innie.js"),t.log("Main / Disabling in favor of the editor client.");else if(i.shouldLoadPreview())(i.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:s}),t.log("Main / Disabling in favor of the preview client."),__webpack_require__(7675).setupPreviewGlobal(),__webpack_require__(7675).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:s}),i.isSlave()||(o.registerFunction("getProjectId",(function(){return s.projectId})),u.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/js/preview2/13270690418.js"));else if(i.shouldBootstrapDataForPreview()){o.registerFunction(f,(function(n){p(n),o.unregisterFunction(f)}));var l=i.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:o.getFunction("getProjectId")();d=i.getProjectToken(),v=l,h=i.getPreviewLayerIds(),r="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",d).replace("__PROJECT_ID__",v).replace("__PREVIEW_LAYER_IDS__",h.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0),u.addScriptSync(r),__webpack_require__(7675).setupPreviewGlobal(),u.addScriptAsync("/dist/js/preview_ui.js")}else i.shouldBootstrapDataForEditor()?(o.registerFunction(f,(function(n){p(n),o.unregisterFunction(f)})),u.addScriptAsync(window.optimizely_editor_data_endpoint)):i.shouldInitialize()&&p(s);var d,v,h;n.timeEnd("block")}function p(n){var t=[__webpack_require__(2739)];t.push(__webpack_require__(5693)),t.push(__webpack_require__(2982)),t.push(__webpack_require__(4324)),t.push(__webpack_require__(6280)),t.push(__webpack_require__(9777)),t.push(__webpack_require__(4165)),t.push(__webpack_require__(6005)),t.push(__webpack_require__(4234)),t.push(__webpack_require__(3102)),t.push(__webpack_require__(3936)),t.push(__webpack_require__(79)),t.push(__webpack_require__(6232)),t.push(__webpack_require__(6039)),t.push(__webpack_require__(2768)),t.push(__webpack_require__(305)),t.push(__webpack_require__(1986)),t.push(__webpack_require__(9679)),t.push(__webpack_require__(9726)),t.push(__webpack_require__(8884)),t.push(__webpack_require__(9460)),t.push(__webpack_require__(8803)),t.push(__webpack_require__(3542)),t.push(__webpack_require__(5312)),c.initializePlugins(t)}}()}catch(n){try{__webpack_require__(1783).handleError(n)}catch(t){console.log(t)}}}()})();