(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+1Ym":function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=function(e){return e.Unknown="",e.BeforeWeStart="incident-details/before-we-start",e.IncidentDate="incident-details/date-of-claim",e.ConfirmPolicy="incident-details/confirm-policy",e.ConfirmVehicle="incident-details/confirm-vehicle",e.YourDetails="incident-details/your-details",e.IncidentType="incident-details/type-of-incident",e.DamageToGlassOnly="incident-details/damage-to-glass-only",e.ConfirmDriver="incident-details/confirm-driver",e.SelectTheftKind="incident-details/theft/theft-claim",e.NumberOfPanesBroken="incident-details/glass/panes-number",e.TheftResultedInAccident="incident-details/theft/resulted-in-accident",e.HowManyVehiclesTookPart="incident-details/accident-claim",e.HighLevelCircumstancesOfIncident="incident-details/incident-circumstances",e.TheftFromLocation="incident-details/incident-location",e.EmergencyServicesDeployed="incident-details/emergency-services-deployed",e.VehicleUseQuestion="incident-details/vehicle-use",e.AccidentLocation="incident-details/incident-location",e.VehicleCurrentLocation="your-vehicle/vehicle-location",e.VehicleMileage="your-vehicle/vehicle-mileage",e.VehicleSustainAnyDamage="your-vehicle/resulted-in-damage",e.VehicleDamage="your-vehicle/vehicle-damage",e.AnyPersonalBelongingsDamagedOrStolen="your-vehicle/any-personal-belongings",e.PersonalBelongingsDetails="your-vehicle/theft-personal-belongings",e.VehicleBeenRecovered="your-vehicle/vehicle-recovered",e.CarSafeAndSecure="your-vehicle/car-safe-and-secure",e.OurPassengers="your-passengers/passengers-details",e.PassengerSeatingPosition="your-passengers/passengers-position",e.OurVehicleInjuries="your-passengers/injured-passengers",e.ThirdParties="third-parties/parties-involved",e.TPPassengers="third-parties/passengers-details",e.TPInjuries="third-parties/injured-passengers",e.Witness="third-parties/witness-details",e.FireCauseDamageQuestion="third-parties/fire-cause-damage",e.FootageAndEvidence="third-parties/footage-and-evidence",e.ClaimSummary="claim-summary/summary",e.RepairOptions="claim-summary/repair-options",e.LossValuation="claim-summary/loss-valuation",e.ClaimSubmitted="claim-summary/confirm-submit",e}({})},"6I3D":function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i("su/z"),r=i("+1Ym");function o(e){const t=r.a,i=n.g;return t[Object.keys(t).find(t=>t===i[e])]}},C4IG:function(e,t,i){"use strict";i.d(t,"a",function(){return o});var n=i("wOsm"),r=i("fXoL");let o=(()=>{class e{constructor(e,t){this.renderer=e,this.iconName="",this.element=t}ngOnInit(){this.element&&(this.renderer.removeClass(this.element.nativeElement,this.incidentIcon(this.incidentData.incidentType,this.incidentData.incidentCauseType)),this.renderer.addClass(this.element.nativeElement,this.incidentIcon(this.incidentData.incidentType,this.incidentData.incidentCauseType)))}ngOnDestroy(){this.element&&this.renderer.removeClass(this.element.nativeElement,this.incidentIcon(this.incidentData.incidentType,this.incidentData.incidentCauseType))}incidentIcon(e,t){switch(e){case n.e.Accident:switch(t){case n.b.WaterImmersionDamage:case n.b.Weather:this.iconName="waterweather";break;case n.b.AccidentCausedByVehicleDefect:this.iconName="mechanical";break;default:this.iconName="accident"}break;case n.e.Theft:this.iconName="theft";break;case n.e.Vandalism:this.iconName="vandalism";break;case n.e.WaterWeather:this.iconName="waterweather";break;case n.e.Fire:this.iconName="fire";break;case n.e.Key:this.iconName="key";break;case n.e.Glass:this.iconName="glass";break;case n.e.Mechanical:this.iconName="mechanical";break;default:this.iconName=""}return`icon-incident-${this.iconName}`}}return e.\u0275fac=function(t){return new(t||e)(r.Rb(r.E),r.Rb(r.l))},e.\u0275dir=r.Mb({type:e,selectors:[["","appEnolIncidentIcon",""]],inputs:{incidentData:"incidentData"}}),e})()},MODb:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=function(e){return e[e.Unknown=0]="Unknown",e[e.TheftFromInsuredVehicle=1]="TheftFromInsuredVehicle",e[e.TheftOfInsuredVehicle=2]="TheftOfInsuredVehicle",e[e.AttemptedTheftOfInsuredVehicle=3]="AttemptedTheftOfInsuredVehicle",e[e.TheftOfInsuredVehicleResultingInAccident=4]="TheftOfInsuredVehicleResultingInAccident",e[e.AccidentCausedByVehicleDefect=5]="AccidentCausedByVehicleDefect",e[e.WaterImmersionDamage=6]="WaterImmersionDamage",e[e.Glass=7]="Glass",e[e.ReplacementLocks=8]="ReplacementLocks",e[e.MaliciousDamage=9]="MaliciousDamage",e[e.MaliciousDamageOrVandalism=10]="MaliciousDamageOrVandalism",e[e.Riot=11]="Riot",e[e.Fire=12]="Fire",e[e.Weather=14]="Weather",e[e.InsuredVehicleDamagedStationary=15]="InsuredVehicleDamagedStationary",e[e.InsuredVehicleLeftRoad=16]="InsuredVehicleLeftRoad",e[e.ChangingLanes=17]="ChangingLanes",e[e.DamageByDebrisFromVehicleOrFallingObject=18]="DamageByDebrisFromVehicleOrFallingObject",e[e.DamageCausedByWeightOfInsuredVehicle=19]="DamageCausedByWeightOfInsuredVehicle",e[e.EmergingFromParkedPositionOrOpeningDoor=20]="EmergingFromParkedPositionOrOpeningDoor",e[e.InsuredAttemptedToAvoidCollision=21]="InsuredAttemptedToAvoidCollision",e[e.InsuredStrikesParkedThirdPartyVehicle=22]="InsuredStrikesParkedThirdPartyVehicle",e[e.InsuredVehicleCollidedWithAnimal=23]="InsuredVehicleCollidedWithAnimal",e[e.InsuredVehicleCollidedWithCyclist=24]="InsuredVehicleCollidedWithCyclist",e[e.InsuredVehicleCollidedWithPedestrian=25]="InsuredVehicleCollidedWithPedestrian",e[e.ThirdPartyVehicleStruckInRearByInsuredVehicle=26]="ThirdPartyVehicleStruckInRearByInsuredVehicle",e[e.InsuredVehicleHitWhilstParkedOrUnattended=27]="InsuredVehicleHitWhilstParkedOrUnattended",e[e.InsuredVehicleStruckInRearByThirdPartyVehicle=28]="InsuredVehicleStruckInRearByThirdPartyVehicle",e[e.JunctionCollisionNotLightsControlled=29]="JunctionCollisionNotLightsControlled",e[e.JunctionCollisionLightsControlled=30]="JunctionCollisionLightsControlled",e[e.LoadingOrUnloadingAccidents=31]="LoadingOrUnloadingAccidents",e[e.MultiVehicleFrontOrRearShunt=32]="MultiVehicleFrontOrRearShunt",e[e.RoundaboutCollision=33]="RoundaboutCollision",e[e.VehicleCollisionWhilstReversing=34]="VehicleCollisionWhilstReversing",e[e.VehicleComingInOppositeDirectionOrHead=35]="VehicleComingInOppositeDirectionOrHead",e[e.Key=36]="Key",e[e.InsuredVehicleOvertaking=37]="InsuredVehicleOvertaking",e[e.ThirdPartyVehicleOnMajorRoadInsuredVehicleTurningAcrossPath=38]="ThirdPartyVehicleOnMajorRoadInsuredVehicleTurningAcrossPath",e[e.ThirdPartyVehicleOvertaking=39]="ThirdPartyVehicleOvertaking",e[e.InsuredVehicleOnMajorRoadThirdPartyVehicleTurningAcrossPath=40]="InsuredVehicleOnMajorRoadThirdPartyVehicleTurningAcrossPath",e[e.EmergingFromParkedPosition=41]="EmergingFromParkedPosition",e[e.HitWhilstParked=42]="HitWhilstParked",e[e.LostControlNoThirdPartyInvolved=43]="LostControlNoThirdPartyInvolved",e[e.OpeningDoor=44]="OpeningDoor",e[e.Overtaking=45]="Overtaking",e[e.RoadConditions=46]="RoadConditions",e[e.TurningAcrossPathNotJunction=47]="TurningAcrossPathNotJunction",e[e.OtherVehicleFailedtoSeeOrFailedToKeepProperLookup=48]="OtherVehicleFailedtoSeeOrFailedToKeepProperLookup",e[e.OtherVehicleFailedToGiveWay=49]="OtherVehicleFailedToGiveWay",e[e.TheOtherVehicleChangedLane=50]="TheOtherVehicleChangedLane",e[e.ThirdPartyOvertakingAnotherVehiclePulledIntoPath=51]="ThirdPartyOvertakingAnotherVehiclePulledIntoPath",e[e.TwoCarsColliding=52]="TwoCarsColliding",e[e.MoreThanTwoCarsInvolved=53]="MoreThanTwoCarsInvolved",e[e.OneCarInvolvedWithOtherRoadUser=54]="OneCarInvolvedWithOtherRoadUser",e[e.MotorcycleBicycleHitWhilstStationary=55]="MotorcycleBicycleHitWhilstStationary",e[e.HitByVehicleTravellingInOppositeDirection=56]="HitByVehicleTravellingInOppositeDirection",e[e.WereFilteringPastSlowStationaryTraffic=57]="WereFilteringPastSlowStationaryTraffic",e[e.Other=999]="Other",e}({})},Ns8M:function(e,t,i){"use strict";i.d(t,"a",function(){return d});var n=i("06WG"),r=i("ROHl"),o=i("vkgz"),a=i("JIr8"),s=i("lJxs"),c=i("UXun"),l=i("wOsm"),u=i("fXoL");let d=(()=>{class e extends r.a{constructor(){super(...arguments),this._isWorkflowCompleted=!1}get claimNumber(){return this._claimNumber}get claimId(){return this._claimId}get incidentType(){return this._incidentType}get incidentCauseType(){return this._incidentCauseType}get claimWebProgress(){return this._claimWebProgress}get noThirdPartyPresent(){return this._noThirdPartyPresent}get tpClaimWithinWorkingHours(){return this._tpClaimWithinWorkingHours}get isNotificationOnly(){return this._isNotificationOnly}get selectedPolicyPublicKey(){return this._selectedPolicyPublicKey}get steps(){return this._steps}get isWorkflowCompleted(){return this._isWorkflowCompleted}get claimProcessingResult(){return this._claimProcessingResult}get isWeatherWaterType(){return this._isWeatherWaterType}getPageHeaderPrefix(){let e="";switch(this.incidentType){case l.e.Accident:switch(this.incidentCauseType){case l.b.WaterImmersionDamage:e+="Water";break;case l.b.Weather:e+="Weather";break;case l.b.AccidentCausedByVehicleDefect:e+="Mechanical";break;default:e+=this._isWeatherWaterType?"Incident":"Accident"}break;case l.e.Theft:switch(this.incidentCauseType){case l.b.AttemptedTheftOfInsuredVehicle:e+="Attempted theft";break;case l.b.TheftFromInsuredVehicle:e+="Theft from vehicle";break;default:e+="Theft"}break;case l.e.Fire:e+="Fire";break;case l.e.Vandalism:e+="Vandalism";break;default:e+="Incident"}return e}getPageHeaderPrefixWithClaim(){return this.getPageHeaderPrefix()+" claim"}isCurrentStepAfter(e){return this.claimWebProgress>=e}getWorkflowSummary$(){return this.get("enol/claim/currentWorkflow").pipe(Object(o.a)(e=>this.saveData(e.data)),Object(a.a)(n.a.handleJsonResultError()))}getWorkflowSteps$(e=!1){return!e&&this.steps$||(this.steps$=this.get("enol/claim/currentWorkflow").pipe(Object(o.a)(e=>this.saveData(e.data)),Object(s.a)(e=>e.data.steps),Object(c.a)())),this.steps$}submitClaim$(){return this.post("enol/claim/submitClaim").pipe(Object(a.a)(n.a.handleJsonResultError()))}saveData(e){this._claimNumber=e.claimNumber,this._claimId=e.claimId,this._incidentType=e.incidentType,this._incidentCauseType=e.causeId,this._claimWebProgress=e.claimWebProgress,this._noThirdPartyPresent=e.noThirdPartyPresent,this._tpClaimWithinWorkingHours=e.tpClaimWithinWorkingHours,this._isNotificationOnly=e.isNotificationOnly,this._steps=e.steps,this._selectedPolicyPublicKey=e.selectedPolicyPublicKey,this._isWorkflowCompleted=e.isWorkflowCompleted,this._claimProcessingResult=e.claimProcessingResult,this._isWeatherWaterType=e.isWeatherWaterType}}return e.\u0275fac=function(t){return h(t||e)},e.\u0275prov=u.Nb({token:e,factory:e.\u0275fac}),e})();const h=u.Zb(d)},OjZt:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=function(e){return e[e.IncidentDetails=0]="IncidentDetails",e[e.YourVehicle=1]="YourVehicle",e[e.YourPassengers=2]="YourPassengers",e[e.ThirdParties=3]="ThirdParties",e[e.ClaimSummary=4]="ClaimSummary",e}({})},SqS2:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=function(e){return e[e.Unknown=0]="Unknown",e[e.QualificationQuestionNotPassed=1]="QualificationQuestionNotPassed",e[e.RecentClaimExistsForPolicy=2]="RecentClaimExistsForPolicy",e[e.VehicleNotFromPolicy=3]="VehicleNotFromPolicy",e[e.MissingCover=4]="MissingCover",e[e.OtherDriver=5]="OtherDriver",e[e.MultipleVehicleIncident=6]="MultipleVehicleIncident",e[e.CarIsNotSafeAndSecure=7]="CarIsNotSafeAndSecure",e[e.GlassClaimWithOnePane=8]="GlassClaimWithOnePane",e[e.KeyClaim=9]="KeyClaim",e[e.NoAvailablePolicyForIncidentDate=10]="NoAvailablePolicyForIncidentDate",e[e.CustomerCanNotRegisterAnotherNewClaim=11]="CustomerCanNotRegisterAnotherNewClaim",e[e.PolicyWasNotConfirmed=12]="PolicyWasNotConfirmed",e[e.GlassClaimTwoOrMorePanes=13]="GlassClaimTwoOrMorePanes",e[e.ClaimValidationErrors=14]="ClaimValidationErrors",e[e.ClaimSubmissionProblem=15]="ClaimSubmissionProblem",e[e.CancelClaimProblem=16]="CancelClaimProblem",e[e.GlassClaimWithOnePaneNoCover=17]="GlassClaimWithOnePaneNoCover",e}({})},YyUd:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i("fXoL");let r=(()=>{class e{transform(e,t){var i;return null===(i=null==t?void 0:t.find(t=>t.key===e))||void 0===i?void 0:i.value}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=n.Qb({name:"getValueByKey",type:e,pure:!0}),e})()},aL6y:function(e,t,i){"use strict";i.d(t,"a",function(){return d});var n=i("fXoL"),r=i("ofXK"),o=i("3Pt+");const a=function(e){return{invalid:e}};function s(e,t){if(1&e&&(n.Vb(0),n.Xb(1,"div",5),n.Sb(2,"input",6),n.Xb(3,"label",7),n.Lc(4),n.Wb(),n.Wb(),n.Ub()),2&e){const e=t.$implicit,i=n.ic(2);n.Ab(1),n.pc("ngClass",n.uc(15,a,i.controlIsInvalid)),n.Ab(1),n.sc("id","",i.getIdPrefix,"_",e.key,""),n.Eb("data-adobelaunch-id","",i.adobeTrackingPrefix,"-",i.getIdPrefix,"_",e.key,""),n.pc("name",i.controlName)("value",e.key)("formControlName",i.controlName),n.Bb("disabled",i.isDisabled(e.key)),n.Ab(1),n.sc("for","",i.getIdPrefix,"_",e.key,""),n.sc("id","",i.getIdPrefix,"_",e.key,"_label"),n.Ab(1),n.Mc(e.value)}}function c(e,t){if(1&e&&(n.Xb(0,"fieldset",2),n.Xb(1,"div",3),n.Jc(2,s,5,17,"ng-container",4),n.Wb(),n.Wb()),2&e){const e=n.ic();n.Fb(e.cssClasses),n.pc("id",e.getIdPrefix)("formGroup",e.form),n.Ab(2),n.pc("ngForOf",e.valuesCollection)}}function l(e,t){if(1&e&&(n.Vb(0),n.Xb(1,"div",8),n.Sb(2,"input",9),n.Sb(3,"span",10),n.Xb(4,"label",11),n.Lc(5),n.Wb(),n.Wb(),n.Ub()),2&e){const e=t.$implicit,i=n.ic(2);n.Ab(2),n.sc("id","",i.getIdPrefix,"_",e.key,""),n.Eb("data-adobelaunch-id","",i.adobeTrackingPrefix,"-",i.getIdPrefix,"_",e.key,""),n.pc("name",i.controlName)("value",e.key)("formControlName",i.controlName),n.Ab(2),n.sc("for","",i.getIdPrefix,"_",e.key,""),n.sc("id","",i.getIdPrefix,"_",e.key,"_label"),n.Ab(1),n.Mc(e.value)}}function u(e,t){if(1&e&&(n.Xb(0,"fieldset",2),n.Jc(1,l,6,13,"ng-container",4),n.Wb()),2&e){const e=n.ic();n.pc("id",e.getIdPrefix)("formGroup",e.form),n.Ab(1),n.pc("ngForOf",e.valuesCollection)}}let d=(()=>{class e{constructor(){this.buttonType="button"}get controlIsInvalid(){return!(!this.form||!this.controlName)&&this.form.get(this.controlName).invalid&&this.form.get(this.controlName).dirty}get getIdPrefix(){return this.prefixControlName?this.prefixControlName+"."+this.controlName:this.controlName}isDisabled(e){return this.keysToDisable&&this.keysToDisable.indexOf(e)>-1||null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Lb({type:e,selectors:[["app-radio-buttons-group"]],inputs:{form:"form",valuesCollection:"valuesCollection",keysToDisable:"keysToDisable",controlName:"controlName",cssClasses:"cssClasses",buttonType:"buttonType",prefixControlName:"prefixControlName",adobeTrackingPrefix:"adobeTrackingPrefix"},decls:2,vars:2,consts:[[3,"id","class","formGroup",4,"ngIf"],[3,"id","formGroup",4,"ngIf"],[3,"id","formGroup"],[1,"form-row","form-inline"],[4,"ngFor","ngForOf"],[1,"form-check","form-check-inline",3,"ngClass"],["type","radio",1,"form-check-input","form-check-input-button",3,"name","value","id","formControlName"],[3,"for","id"],[1,"form-check"],["type","radio",1,"form-check-input",3,"name","value","id","formControlName"],[1,"ie-only","ie-radio-circle"],[1,"form-check-label",3,"for","id"]],template:function(e,t){1&e&&(n.Jc(0,c,3,6,"fieldset",0),n.Jc(1,u,2,3,"fieldset",1)),2&e&&(n.pc("ngIf","button"===t.buttonType),n.Ab(1),n.pc("ngIf","circle"===t.buttonType))},directives:[r.p,o.s,o.j,r.o,r.n,o.x,o.b,o.r,o.h],styles:[".form-row[_ngcontent-%COMP%]{margin:0}.form-row[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{-ms-flex:0 0 0;flex:0 0 0}.form-row[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%] + .form-check[_ngcontent-%COMP%]{margin-top:0!important}.form-check[_ngcontent-%COMP%]   .ie-radio-circle[_ngcontent-%COMP%]{top:.8rem}.form-inline[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%]{width:auto}.form-check-inline[_ngcontent-%COMP%]{margin-right:1rem}.form-check-inline[_ngcontent-%COMP%]:last-child{margin-right:0}.form-check-inline[_ngcontent-%COMP%]   .form-check-input-button[_ngcontent-%COMP%]{border:0;margin-right:0}.form-check.invalid[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{background-color:rgba(231,19,26,.05);border-color:#e7131a;color:#e7131a}.form-check-input-button[_ngcontent-%COMP%]{height:0!important;left:-9999px;position:absolute;width:0!important;visibility:hidden}.form-check-input-button[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{border-radius:.25rem;background-color:#f8f8f8;border:1px solid #0ba88d;color:#008162;font-size:17px;font-size:1.0625rem;font-weight:600;line-height:1.5;padding:.5rem 1rem;text-align:center;text-decoration:none;top:auto;vertical-align:middle;cursor:pointer;min-width:100px}.form-check-input-button[_ngcontent-%COMP%] + label.hover[_ngcontent-%COMP%], .form-check-input-button[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:hover{background-color:#d8f3ec;border-color:#0ba88d;color:#206d63}.form-check-input-button[_ngcontent-%COMP%] + label.focus[_ngcontent-%COMP%], .form-check-input-button[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:focus{background-color:#d8f3ec;border-color:#0ba88d;color:#206d63;box-shadow:0 0 .125rem .125rem rgba(11,168,141,.75)}.form-check-input-button.disabled[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], .form-check-input-button[_ngcontent-%COMP%]:disabled + label[_ngcontent-%COMP%]{cursor:default;opacity:.65;background-color:#f8f8f8;border-color:#42383b;color:#42383b}.form-check-input-button[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background-color:#0ba88d;border-color:#0ba88d;color:#fff}.form-check-input-button[_ngcontent-%COMP%]:checked.disabled + label[_ngcontent-%COMP%], .form-check-input-button[_ngcontent-%COMP%]:checked:disabled + label[_ngcontent-%COMP%]{cursor:default;opacity:.65;background-color:#42383b;border-color:#42383b;color:#f8f8f8}@media (max-width:380px){#ukResidency[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%]{margin-top:.5em!important;margin-bottom:.5em!important}#ukResidency[_ngcontent-%COMP%]   .form-check-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding-left:.4em!important;padding-right:.4em!important}}@media screen and (max-width:575px){.narrow-buttons-mobile[_ngcontent-%COMP%]   .form-check-input-button[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{min-width:58px;padding:.5294117647rem}.multiple-buttons[_ngcontent-%COMP%]   .form-check-input-button[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{margin-bottom:10px}}@media screen and (min-width:768px){.form-check-input-button[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{padding:.5294117647rem 1.4117647059rem;min-width:auto}}@media screen and (min-width:992px){.form-check-input-button[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{padding:.5294117647rem 1.7058823529rem}}.pop-up-buttons[_ngcontent-%COMP%]   .form-check-input-button[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{min-width:75px}"]}),e})()},h7a8:function(e,t,i){"use strict";i.d(t,"a",function(){return g}),i.d(t,"c",function(){return h}),i.d(t,"b",function(){return y});var n=i("eIep"),r=i("nYR2"),o=i("LRne"),a=i("fXoL"),s=i("tyNb"),c=i("06WG"),l=i("ROHl"),u=i("JIr8"),d=i("tk/3");let h=(()=>{class e extends l.a{constructor(e){super(e),this.httpClient=e}deleteWorkflow$(){return this.post("enol/fnol/deleteWorkflow").pipe(Object(u.a)(c.a.handleJsonResultError()))}initializeWorkflow$(){return this.post("enol/fnol/initializeWorkflow").pipe(Object(u.a)(c.a.handleJsonResultError()))}getWorkflowSummary$(){return this.get("enol/claim/currentWorkflow").pipe(Object(u.a)(c.a.handleJsonResultError()))}checkIfWorkflowExists$(){return null==this.cachedCheckIfWorkflowExistsResponse&&(this.cachedCheckIfWorkflowExistsResponse=this.get("enol/fnol/checkIfWorkflowExists").pipe(Object(u.a)(c.a.handleJsonResultError()))),this.cachedCheckIfWorkflowExistsResponse}getBreadcrumbs$(){return this.get("enol/fnol/getBreadcrumbs",null).pipe(Object(u.a)(c.a.handleJsonResultError()))}raiseClaimWebFnolWorkflowCriteriaNotMatchedEvent$(e){return this.post("enol/fnol/raiseClaimWebFnolWorkflowCriteriaNotMatchedEvent",e).pipe(Object(u.a)(c.a.handleJsonResultError()))}}return e.\u0275fac=function(t){return new(t||e)(a.bc(d.b))},e.\u0275prov=a.Nb({token:e,factory:e.\u0275fac}),e})();var m=i("WlVc"),f=i("Ns8M");let g=(()=>{class e{constructor(e,t,i,n){this.router=e,this.workflowService=t,this.loadingOverlayService=i,this.currentWorkflowSerice=n}navigate(e){if(this.loadingOverlayService.show(),e.raiseEvent&&e.shouldDeleteWorkflow)this.workflowService.raiseClaimWebFnolWorkflowCriteriaNotMatchedEvent$({type:e.type,subtype:e.subtype,additionalData:e.additionalData}).pipe(Object(n.a)(()=>this.workflowService.deleteWorkflow$().pipe(Object(n.a)(()=>this.refreshWorkflowSummary$()))),Object(r.a)(()=>this.loadingOverlayService.close())).subscribe(t=>this.navigateToGetInTouchPage(e.type,e.subtype,e.additionalData));else if(e.raiseEvent)this.workflowService.raiseClaimWebFnolWorkflowCriteriaNotMatchedEvent$({type:e.type,subtype:e.subtype,additionalData:e.additionalData}).pipe(Object(r.a)(()=>this.loadingOverlayService.close())).subscribe(()=>this.navigateToGetInTouchPage(e.type,e.subtype,e.additionalData));else{if(!e.shouldDeleteWorkflow)return this.loadingOverlayService.close(),this.navigateToGetInTouchPage(e.type,e.subtype,e.additionalData);this.workflowService.deleteWorkflow$().pipe(Object(n.a)(()=>this.refreshWorkflowSummary$()),Object(r.a)(()=>this.loadingOverlayService.close())).subscribe(()=>this.navigateToGetInTouchPage(e.type,e.subtype,e.additionalData))}}refreshWorkflowSummary$(){return this.currentWorkflowSerice?this.currentWorkflowSerice.getWorkflowSummary$():Object(o.a)(!1)}navigateToGetInTouchPage(e,t,i){const n=null==i?void 0:i.find(e=>"policyKey"===e.key);return this.router.navigate(["/enol/get-in-touch"],{queryParams:{t:e,s:t,policyKey:n?n.value:null}})}}return e.\u0275fac=function(t){return new(t||e)(a.bc(s.g),a.bc(h),a.bc(m.a),a.bc(f.a,8))},e.\u0275prov=a.Nb({token:e,factory:e.\u0275fac}),e})();var p=i("lJxs");let y=(()=>{class e extends l.a{constructor(e){super(e),this.httpClient=e}getVehicle$(){return this.get("enol/policy/carDetails").pipe(Object(p.a)(e=>{if(e.isSuccess)return e.data},Object(u.a)(c.a.handleJsonResultError())))}}return e.\u0275fac=function(t){return new(t||e)(a.bc(d.b))},e.\u0275prov=a.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},iNeq:function(e,t,i){"use strict";i.d(t,"a",function(){return u});var n=i("tk/3"),r=i("06WG"),o=i("ROHl"),a=i("lJxs"),s=i("JIr8"),c=i("UXun"),l=i("fXoL");let u=(()=>{class e extends o.a{constructor(e){super(e),this.customerSummaryUrl="enol/claim/customerSummary",this.continueWorkflowUrl="enol/fnol/continueWorkflow",this.anyClaimsOnPolicyUrl="claims/anyonpolicy",this.claimsSummaryUrl="claims/claimsSummary",this.ongoingClaimDetailsUrl="enol/fnol/getOngoingClaimDetails",this.addNoteUrl="claims/addNote",this.hasIncidentHappenedInUkCountryUrl="enol/claim/hasIncidentHappenedInUkCountry"}getCustomerSummary$(){return this.get(this.customerSummaryUrl).pipe(Object(a.a)(e=>{if(e.isSuccess)return e.data},Object(s.a)(r.a.handleJsonResultError())))}continueWorkflow$(){return this.post(this.continueWorkflowUrl).pipe(Object(s.a)(r.a.handleJsonResultError()))}anyClaimsOnPolicy$(e){const t=(new n.e).set("policyId",e);return this.get(this.anyClaimsOnPolicyUrl,null,t).pipe(Object(a.a)(e=>{if(e.isSuccess)return e.data},Object(s.a)(r.a.handleJsonResultError())),Object(c.a)())}getOngoingClaimDetails$(){return this.get(this.ongoingClaimDetailsUrl,null).pipe(Object(a.a)(e=>{if(e.isSuccess)return e.data},Object(s.a)(r.a.handleJsonResultError())),Object(c.a)())}getClaimsSummary$(e=!1){const t=(new n.e).set("raiseVisitedEvent",String(e));return this.get(this.claimsSummaryUrl,null,t).pipe(Object(a.a)(e=>{if(e.isSuccess)return e.data},Object(s.a)(r.a.handleJsonResultError())),Object(c.a)())}addNote$(e){return this.post(this.addNoteUrl,e,null,null).pipe(Object(s.a)(r.a.handleJsonResultError()))}hasIncidentHappenedInUkCountry$(){return this.get(this.hasIncidentHappenedInUkCountryUrl).pipe(Object(a.a)(e=>{if(e.isSuccess)return e.data},Object(s.a)(r.a.handleJsonResultError())))}}return e.\u0275fac=function(t){return new(t||e)(l.bc(n.b))},e.\u0275prov=l.Nb({token:e,factory:e.\u0275fac}),e})()},m1ZC:function(e,t,i){"use strict";i.d(t,"a",function(){return c});var n=i("06WG"),r=i("ROHl"),o=i("JIr8"),a=i("fXoL"),s=i("tk/3");let c=(()=>{class e extends r.a{constructor(e){super(e),this.httpClient=e,this.cancelClaimUrl="enol/claim/cancelClaim",this.cancelDraftClaimUrl="enol/claim/cancelDraftClaim"}cancelClaim(){return this.post(this.cancelClaimUrl).pipe(Object(o.a)(n.a.handleJsonResultError()))}cancelDraftClaim(){return this.post(this.cancelDraftClaimUrl).pipe(Object(o.a)(n.a.handleJsonResultError()))}}return e.\u0275fac=function(t){return new(t||e)(a.bc(s.b))},e.\u0275prov=a.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},rHOx:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=function(e){return e[e.Unknown=0]="Unknown",e[e.Accident=1]="Accident",e[e.Theft=2]="Theft",e[e.Glass=3]="Glass",e[e.Key=4]="Key",e[e.Vandalism=5]="Vandalism",e[e.Fire=8]="Fire",e[e.WaterWeather=9]="WaterWeather",e[e.Mechanical=10]="Mechanical",e}({})},"su/z":function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return r}),i.d(t,"c",function(){return o}),i.d(t,"d",function(){return a}),i.d(t,"e",function(){return s}),i.d(t,"f",function(){return c.a}),i.d(t,"g",function(){return l}),i.d(t,"h",function(){return u}),i.d(t,"i",function(){return d});var n=function(e){return e[e.Unknown=0]="Unknown",e[e.One=1]="One",e[e.Two=2]="Two",e[e.Three=3]="Three",e[e.Four=4]="Four",e[e.All=5]="All",e[e.None=6]="None",e}({}),r=function(e){return e[e.Unknown=0]="Unknown",e[e.Domestic=1]="Domestic",e[e.Wild=2]="Wild",e[e.Farm=3]="Farm",e}({}),o=function(e){return e[e.Unknown=0]="Unknown",e[e.CarMotorVehicleClaimItem=1]="CarMotorVehicleClaimItem",e[e.MotorcycleMotorVehicleClaimItem=2]="MotorcycleMotorVehicleClaimItem",e[e.BusCoachMotorVehicleClaimItem=3]="BusCoachMotorVehicleClaimItem",e[e.PropertyClaimItem=4]="PropertyClaimItem",e[e.AnimalInjuryClaimItem=5]="AnimalInjuryClaimItem",e[e.PedestrianPersonalInjuryClaimItem=6]="PedestrianPersonalInjuryClaimItem",e[e.BicycleNonMotorVehicleClaimItem=7]="BicycleNonMotorVehicleClaimItem",e[e.PersonalEffectsClaimItem=8]="PersonalEffectsClaimItem",e[e.ICEClaimItem=9]="ICEClaimItem",e[e.LEIClaimItem=10]="LEIClaimItem",e[e.KeyClaimItem=11]="KeyClaimItem",e[e.StorageClaimItem=12]="StorageClaimItem",e[e.VehicleGlassClaimItem=13]="VehicleGlassClaimItem",e[e.CaravanMotorVehicleClaimItem=14]="CaravanMotorVehicleClaimItem",e[e.LorryMotorVehicleClaimItem=15]="LorryMotorVehicleClaimItem",e[e.MinibusMotorVehicleClaimItem=16]="MinibusMotorVehicleClaimItem",e[e.VanMotorVehicleClaimItem=17]="VanMotorVehicleClaimItem",e[e.StreetFurnitureClaimItem=18]="StreetFurnitureClaimItem",e[e.MotorhomeClaimItem=19]="MotorhomeClaimItem",e[e.CarSeatsClaimItem=20]="CarSeatsClaimItem",e[e.HeavyPlantMotorVehicleClaimItem=21]="HeavyPlantMotorVehicleClaimItem",e[e.UnknownVehicleClaimItem=22]="UnknownVehicleClaimItem",e[e.BodilyInjuryClaimItem=23]="BodilyInjuryClaimItem",e}({}),a=function(e){return e[e.Unknown=0]="Unknown",e[e.SoftSubmit=1]="SoftSubmit",e[e.ClaimValuation=2]="ClaimValuation",e[e.RepairOptions=3]="RepairOptions",e}({}),s=function(e){return e[e.Unknown=0]="Unknown",e[e.NotInSafeAndSecureLocation=1]="NotInSafeAndSecureLocation",e[e.NotDrivingCarOnCustomerPolicy=2]="NotDrivingCarOnCustomerPolicy",e[e.AnsweredNoToOneOrMoreOfPreQualifyingQuestions=3]="AnsweredNoToOneOrMoreOfPreQualifyingQuestions",e[e.InvalidCarOnCustomerPolicy=4]="InvalidCarOnCustomerPolicy",e[e.SelectedPolicyCannotBeSaved=5]="SelectedPolicyCannotBeSaved",e[e.NumberOfDaysPolicyInLiveForRegisteringTheClaim=6]="NumberOfDaysPolicyInLiveForRegisteringTheClaim",e}({}),c=i("SqS2"),l=function(e){return e[e.Unknown=0]="Unknown",e[e.BeforeWeStart=1]="BeforeWeStart",e[e.IncidentDate=2]="IncidentDate",e[e.ConfirmPolicy=3]="ConfirmPolicy",e[e.ConfirmVehicle=4]="ConfirmVehicle",e[e.YourDetails=5]="YourDetails",e[e.IncidentType=6]="IncidentType",e[e.ConfirmDriver=7]="ConfirmDriver",e[e.SelectTheftKind=8]="SelectTheftKind",e[e.NumberOfPanesBroken=9]="NumberOfPanesBroken",e[e.TheftResultedInAccident=10]="TheftResultedInAccident",e[e.HowManyVehiclesTookPart=11]="HowManyVehiclesTookPart",e[e.HighLevelCircumstancesOfIncident=12]="HighLevelCircumstancesOfIncident",e[e.TheftFromLocation=13]="TheftFromLocation",e[e.EmergencyServicesDeployed=14]="EmergencyServicesDeployed",e[e.VehicleUseQuestion=15]="VehicleUseQuestion",e[e.AccidentLocation=16]="AccidentLocation",e[e.VehicleBeenRecovered=17]="VehicleBeenRecovered",e[e.VehicleCurrentLocation=18]="VehicleCurrentLocation",e[e.VehicleMileage=19]="VehicleMileage",e[e.VehicleSustainAnyDamage=20]="VehicleSustainAnyDamage",e[e.VehicleDamage=21]="VehicleDamage",e[e.AnyPersonalBelongingsDamagedOrStolen=22]="AnyPersonalBelongingsDamagedOrStolen",e[e.PersonalBelongingsDetails=23]="PersonalBelongingsDetails",e[e.CarSafeAndSecure=24]="CarSafeAndSecure",e[e.OurPassengers=25]="OurPassengers",e[e.PassengerSeatingPosition=26]="PassengerSeatingPosition",e[e.OurVehicleInjuries=27]="OurVehicleInjuries",e[e.ThirdParties=28]="ThirdParties",e[e.Witness=29]="Witness",e[e.ClaimSummary=30]="ClaimSummary",e[e.RepairOptions=31]="RepairOptions",e[e.LossValuation=32]="LossValuation",e[e.FireCauseDamageQuestion=33]="FireCauseDamageQuestion",e[e.FootageAndEvidence=34]="FootageAndEvidence",e[e.ClaimSubmitted=35]="ClaimSubmitted",e[e.DamageToGlassOnly=36]="DamageToGlassOnly",e}({}),u=function(e){return e[e.Unknown=0]="Unknown",e[e.Policyholder=1]="Policyholder",e[e.NamedDriver=2]="NamedDriver",e[e.Unattended=3]="Unattended",e[e.Other=4]="Other",e}({}),d=(i("OjZt"),function(e){return e[e.Unknown=0]="Unknown",e[e.LeftRearWheel=1]="LeftRearWheel",e[e.LeftUnderside=2]="LeftUnderside",e[e.LeftFrontWheel=3]="LeftFrontWheel",e[e.RearLeft=4]="RearLeft",e[e.LeftBackseat=5]="LeftBackseat",e[e.Left=6]="Left",e[e.FrontLeft=7]="FrontLeft",e[e.LeftMirror=8]="LeftMirror",e[e.LeftRoof=9]="LeftRoof",e[e.Rear=10]="Rear",e[e.RearWindowDamage=11]="RearWindowDamage",e[e.RoofDamage=12]="RoofDamage",e[e.WindscreenDamage=13]="WindscreenDamage",e[e.FrontBonnet=14]="FrontBonnet",e[e.Front=15]="Front",e[e.RightRoof=16]="RightRoof",e[e.RearRight=17]="RearRight",e[e.RightBackseat=18]="RightBackseat",e[e.Right=19]="Right",e[e.RightMirror=20]="RightMirror",e[e.FrontRight=21]="FrontRight",e[e.RightRearWheel=22]="RightRearWheel",e[e.RightUnderside=23]="RightUnderside",e[e.RightFrontWheel=24]="RightFrontWheel",e}({}))},tXNG:function(e,t,i){"use strict";i.d(t,"a",function(){return a});var n=i("fXoL"),r=i("ofXK");function o(e,t){if(1&e&&(n.Xb(0,"div",1),n.Sb(1,"span",2),n.Xb(2,"div",3),n.Lc(3),n.Wb(),n.Wb()),2&e){const e=n.ic();n.Ab(3),n.Mc(e.getErrorMessage())}}let a=(()=>{class e{constructor(){}isControlInvalid(){return!this.control||this.control.dirty&&this.control.invalid}getErrorMessage(){return this.control.errors?this.chechErrorType()||this.defaultMessage:""}chechErrorType(){switch(Object.keys(this.control.errors)[0]){case"required":return this.requiredMessage;case"pattern":case"email":return this.patternMessage;case"min":case"minlength":return this.minMaxMessage?this.minMaxMessage:this.minMessage;case"max":case"maxlength":return this.minMaxMessage?this.minMaxMessage:this.maxMessage;case"bsDate":return this.control.errors.bsDate.minDate&&this.minMessage?this.minMessage:this.control.errors.bsDate.maxDate&&this.maxMessage?this.maxMessage:this.defaultMessage;case"duplicate":return this.duplicateMessage;case"mustMatch":return this.mustMatchMessage;case"minItem":return this.minItemMessage;case"serverError":return this.control.errors.serverError;default:return this.defaultMessage}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Lb({type:e,selectors:[["app-validation-message"]],inputs:{control:"control",requiredMessage:"requiredMessage",defaultMessage:"defaultMessage",patternMessage:"patternMessage",minMessage:"minMessage",maxMessage:"maxMessage",minMaxMessage:"minMaxMessage",duplicateMessage:"duplicateMessage",mustMatchMessage:"mustMatchMessage",minItemMessage:"minItemMessage"},decls:1,vars:1,consts:[["class","error-message text-primary col-12 pl-1 mt-1",4,"ngIf"],[1,"error-message","text-primary","col-12","pl-1","mt-1"],[1,"icon","icon-functional","icon-brand-red","icon-alert"],[1,"message-text"]],template:function(e,t){1&e&&n.Jc(0,o,4,1,"div",0),2&e&&n.pc("ngIf",(t.isControlInvalid()||t.control.hasError("serverError"))&&t.getErrorMessage())},directives:[r.p],styles:[".icon-alert[_ngcontent-%COMP%]{position:absolute;top:3px}.message-text[_ngcontent-%COMP%]{padding-left:20px}"]}),e})()},tkaF:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=function(e){return e[e.Accreditation=0]="Accreditation",e[e.AlarmType=1]="AlarmType",e[e.AlcoholReadingType=2]="AlcoholReadingType",e[e.ClaimType=3]="ClaimType",e[e.CommercialVehicleTrailerType=4]="CommercialVehicleTrailerType",e[e.CommercialVehicleUse=5]="CommercialVehicleUse",e[e.CompanyStatus=6]="CompanyStatus",e[e.Construction=7]="Construction",e[e.ConvictionType=8]="ConvictionType",e[e.Country=9]="Country",e[e.Cover=10]="Cover",e[e.CoverNoteIssueReason=11]="CoverNoteIssueReason",e[e.DriverCompanyCarUsageType=12]="DriverCompanyCarUsageType",e[e.DrivingFrequency=13]="DrivingFrequency",e[e.DrivingLicenseType=14]="DrivingLicenseType",e[e.DwellingType=15]="DwellingType",e[e.EmployersBusinessCategory=16]="EmployersBusinessCategory",e[e.EmploymentType=17]="EmploymentType",e[e.ExcessType=18]="ExcessType",e[e.FinancialLegalProblems=19]="FinancialLegalProblems",e[e.FinancialLegalProblemsV2=20]="FinancialLegalProblemsV2",e[e.Gender=21]="Gender",e[e.GeneralFacilities=22]="GeneralFacilities",e[e.HouseholdClaimType=23]="HouseholdClaimType",e[e.HouseholdCover=24]="HouseholdCover",e[e.HouseholdDwellingType=25]="HouseholdDwellingType",e[e.InsuranceType=26]="InsuranceType",e[e.InsurerName=27]="InsurerName",e[e.InterestedParty=28]="InterestedParty",e[e.ListedBuildingIndicator=29]="ListedBuildingIndicator",e[e.LocationVehicleKeptOvernight=30]="LocationVehicleKeptOvernight",e[e.LossType=31]="LossType",e[e.MaritalStatus=32]="MaritalStatus",e[e.MbSecurityDevice=33]="MbSecurityDevice",e[e.MedicalCondition=34]="MedicalCondition",e[e.MethodOfHeating=35]="MethodOfHeating",e[e.MotoringOrganisationMembership=36]="MotoringOrganisationMembership",e[e.NCDCoverCode=37]="NCDCoverCode",e[e.NCDIntroductoryEntitlementReason=38]="NCDIntroductoryEntitlementReason",e[e.NCDType=39]="NCDType",e[e.OccupancyType=40]="OccupancyType",e[e.Occupation=41]="Occupation",e[e.OffenceCode=42]="OffenceCode",e[e.OwnershipType=43]="OwnershipType",e[e.PaymentFrequency=44]="PaymentFrequency",e[e.PaymentMethod=45]="PaymentMethod",e[e.PaymentType=46]="PaymentType",e[e.PeriodUnits=47]="PeriodUnits",e[e.PermittedDrivers=48]="PermittedDrivers",e[e.PersonalCoverType=49]="PersonalCoverType",e[e.PhysicalProtection=50]="PhysicalProtection",e[e.PolicyClass=51]="PolicyClass",e[e.PositionOfStructure=52]="PositionOfStructure",e[e.PostcodeType=53]="PostcodeType",e[e.PreviousInsurancePaymentPeriod=54]="PreviousInsurancePaymentPeriod",e[e.ProposerRelationship=55]="ProposerRelationship",e[e.ProposerType=56]="ProposerType",e[e.Qualification=57]="Qualification",e[e.ReasonProposalPending=58]="ReasonProposalPending",e[e.RefrigerationUnitTypes=59]="RefrigerationUnitTypes",e[e.RoofConstruction=60]="RoofConstruction",e[e.SafeModels=61]="SafeModels",e[e.SecurityDeviceApprovalStatus=62]="SecurityDeviceApprovalStatus",e[e.SecurityDeviceInstaller=63]="SecurityDeviceInstaller",e[e.SecurityMakeAndModel=64]="SecurityMakeAndModel",e[e.SoftwareSupplier=65]="SoftwareSupplier",e[e.Title=66]="Title",e[e.Trade=67]="Trade",e[e.TypeOfBonusDiscount=68]="TypeOfBonusDiscount",e[e.Unknown=69]="Unknown",e[e.Use=70]="Use",e[e.UseOutputOnly=71]="UseOutputOnly",e[e.VehicleBodyType=72]="VehicleBodyType",e[e.VehicleColour=73]="VehicleColour",e[e.VehicleDriveIndicator=74]="VehicleDriveIndicator",e[e.VehicleFinish=75]="VehicleFinish",e[e.VehicleFuelType=76]="VehicleFuelType",e[e.VehicleManufacturer=77]="VehicleManufacturer",e[e.VehicleModel=78]="VehicleModel",e[e.VehicleModification=79]="VehicleModification",e[e.VehicleOwnerKeeper=80]="VehicleOwnerKeeper",e[e.VehicleTransmissionType=81]="VehicleTransmissionType",e[e.VehicleValueIndicator=82]="VehicleValueIndicator",e[e.WallConstruction=83]="WallConstruction",e[e.YesNo=84]="YesNo",e[e.MotorcycleVehicleManufacturer=85]="MotorcycleVehicleManufacturer",e[e.MotorcycleVehicleModel=86]="MotorcycleVehicleModel",e[e.CommercialVehicleManufacturer=87]="CommercialVehicleManufacturer",e[e.CommercialVehicleModel=88]="CommercialVehicleModel",e[e.ExtendedVehicleManufacturer=89]="ExtendedVehicleManufacturer",e[e.ExtendedVehicleModel=90]="ExtendedVehicleModel",e[e.UKCountries=91]="UKCountries",e[e.DrivingRestrictions=92]="DrivingRestrictions",e[e.NCDProtected=93]="NCDProtected",e[e.VehicleAgeIdentifier=94]="VehicleAgeIdentifier",e[e.LocationVehicleKeptDuringDay=95]="LocationVehicleKeptDuringDay",e}({})},wOsm:function(e,t,i){"use strict";i.d(t,"f",function(){return n}),i.d(t,"a",function(){return r}),i.d(t,"b",function(){return o.a}),i.d(t,"c",function(){return a}),i.d(t,"d",function(){return s}),i.d(t,"e",function(){return c.a});var n=function(e){return e[e.Unknown=0]="Unknown",e[e.One=1]="One",e[e.More=2]="More",e}({}),r=function(e){return e.One="One",e.Two="Two",e.More="More",e}({}),o=i("MODb"),a=function(e){return e[e.Unknown=0]="Unknown",e[e.CauseStep=1]="CauseStep",e[e.SubcauseStep=2]="SubcauseStep",e[e.IncidentDetailsStep=3]="IncidentDetailsStep",e}({}),s=function(e){return e[e.Map=0]="Map",e[e.Address=1]="Address",e}({}),c=i("rHOx")}}]);