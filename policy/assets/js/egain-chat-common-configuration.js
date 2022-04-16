var initialTemplateName = "FCaqua1";

var egainDockChatParam = [{
  page: "",
  EntryPointId: "1000",
  Template: initialTemplateName
}, {
  page: "customer",
  EntryPointId: "1005",
  Template: initialTemplateName
}, {
  page: "login",
  EntryPointId: "1000",
  Template: initialTemplateName
}, {
  page: "enol",
  EntryPointId: "1001",
  Template: initialTemplateName
}, {
  page: "claimsenol",
  EntryPointId: "1001",
  Template: initialTemplateName
}, {
  page: "finance",
  EntryPointId: "1004",
  Template: initialTemplateName
}, {
  page: "adjustment",
  EntryPointId: "1005",
  Template: initialTemplateName
}];

var egainDockChat = egainDockChat || {};

/*eGain Chat Locale*/
egainDockChat.Locale = "en-US";
/*eGain template name*/
egainDockChat.Template = initialTemplateName;
/*Set to true to enable posting attributes to templates*/
egainDockChat.PostChatAttributes = true;
egainDockChat.IntegratedEntryPoint = "false";
/*Set to true if custom button is used to launch docked chat */
egainDockChat.UseCustomButton = true;
egainDockChat.IsChatLaunched = true;
/*eGain video chat parameters */
egainDockChat.VChatParams = '';
egainDockChat.ShouldShowChatIcon = false;
/*Method to set customer Parameters. To be called by client website. All the parameters specified in application-chat-defaults must be set here.*/
egainDockChat.SetCustomerParameters = function (egainAttributeName, attributeValue) {
  if (!egainDockChat.SetParameter) {
    egainDockChat.CallQueue = egainDockChat.CallQueue || [];
    egainDockChat.CallQueue.push({
      name: 'SetParameter',
      args: [egainAttributeName, attributeValue]
    });
  } else {
    egainDockChat.SetParameter(egainAttributeName, attributeValue);
  }
};

if (navigator.cookieEnabled) {
  if (localStorage.egChatInProgress) {
    adjustCustomButtonVisibility(false);
  }
  if (!window.sessionStorage["baseReferer"]) {
    window.sessionStorage["baseReferer"] = document.referrer;
  }
  egainDockChat.SetCustomerParameters("baseRefererURL", window.sessionStorage["baseReferer"]);
}

egainDockChat.SetCustomerParameters("refererURL", window.location.href);

var chatLaunched = false;
egainDockChat.setProperEndpoint = function () {
  var pageName = window.location.pathname.replace(/^\/|\/$/g, '');
  var urlSplit = pageName.split('/');

  for (let i = 0; i < egainDockChatParam.length; i++) {
    if ((pageName == egainDockChatParam[i].page || pageName + '/' == egainDockChatParam[i].page || urlSplit.includes(egainDockChatParam[i].page)) && (egainDockChatParam[i].page != "")) {
      if (egainDockChatParam[i].EntryPointId && egainDockChatParam[i].Template) {
        egainDockChat.EntryPointId = egainDockChatParam[i].EntryPointId;
        egainDockChat.Template = egainDockChatParam[i].Template;

        if (egainDockChatParam[i].dynamicHeader) {
          egainDockChat.SetCustomerParameters("parentPage", egainDockChatParam[i].page);
        }
      }
    }
  }
}

function attachToChatEvents() {
  var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

  eventer(messageEvent, function (e) {
    if (!isStringType(e.data) || e.data.indexOf('$') != -1) {
      return;
    }

    var message = tryParseJson(e.data);
    if (!message) {
      return;
    }
    if (message.Method == 'RESET_CHAT') {
      adjustCustomButtonVisibility(true);
    }

    if (message.Method == 'RESIZE_WINDOW') {
      if (message.Key === "EG_MAXIMIZE") {
        adjustCustomButtonVisibility(false);
      }
      else if (message.Key === "EG_MINIMIZE") {
        adjustCustomButtonVisibility(true);
      }
    }
  }, false);
};


if (!chatLaunched) {
  egainDockChat.EntryPointId = "1000";
  launchScript();
}
var launchElement;

function launchScript() {
  attachToChatEvents();
  adjustCustomButtonVisibility(true)

  egainDockChat.openChatWidget = function (overriddenEntryPoint) {
    egainDockChat.IsChatLaunched = true;
    startChat(overriddenEntryPoint);
  }
  if (!egainDockChat.UseCustomButton) {
    startChat();
  }

  function startChat(overriddenEntryPoint) {
    egainDockChat.setProperEndpoint();
    if (overriddenEntryPoint) {
      egainDockChat.EntryPointId = overriddenEntryPoint;
    }

    if (!egainDockChat.launchChat) {
      egainDockChat.CallQueue = egainDockChat.CallQueue || [];
      egainDockChat.CallQueue.push({
        name: 'launchChat',
        args: []
      });
    } else {
      egainDockChat.launchChat();
    }
  }
};

function tryParseJson(message) {
  try {
    var obj = JSON.parse(message);
    if (obj) {
      return obj;
    }

  } catch (e) {
  }

  return undefined;
};

function adjustCustomButtonVisibility(show) {
  var customDockButton = document.getElementsByClassName('egain-custom-chat-icon')[0];

  if (customDockButton) {
    customDockButton.style.display = show === true ? "block" : "none";
  }
  egainDockChat.ShouldShowChatIcon = show;
}

function isStringType(prop) {
  return typeof prop === 'string' || prop instanceof String;
}