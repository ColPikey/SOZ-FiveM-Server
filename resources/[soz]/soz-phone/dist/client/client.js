!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";(function(e){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.verifyExportArgType=t.onNpwdEvent=t.RegisterNuiProxy=t.playerLoaded=t.RegisterNuiCB=void 0;const o=n(3),s=n(4);t.default=class{constructor(e){this._defaultSettings={promiseTimeout:15e3},this.setSettings(e)}setSettings(e){this._settings=Object.assign(Object.assign({},this._defaultSettings),e)}emitNetPromise(e,...t){return new Promise((n,i)=>{let s=!1;setTimeout(()=>{s=!0,i(`${e} has timed out after ${this._settings.promiseTimeout} ms`)},this._settings.promiseTimeout);const a=(0,o.uuidv4)(),r=`${e}:${a}`;emitNet(e,r,...t);const l=e=>{removeEventListener(r,l),s||n(e)};onNet(r,l)})}};t.RegisterNuiCB=(e,t)=>{RegisterNuiCallbackType(e),on("__cfx_nui:"+e,t)};t.playerLoaded=()=>new Promise(t=>{const n=setInterval(()=>{e.isPlayerLoaded&&t(n)},50)}).then(e=>clearInterval(e));t.RegisterNuiProxy=n=>{RegisterNuiCallbackType(n),on("__cfx_nui:"+n,(o,a)=>i(void 0,void 0,void 0,(function*(){e.isPlayerLoaded||(yield(0,t.playerLoaded)());try{const e=yield s.ClUtils.emitNetPromise(n,o);a(e)}catch(e){console.error("Error encountered while listening to resp. Error:",e),a({status:"error"})}})))};t.onNpwdEvent=(e,t)=>{onNet(e,t)};t.verifyExportArgType=(e,t,n)=>{const i=typeof t;if(!n.includes(i))throw new Error(`Export ${e} was called with incorrect argument type (${n.join(", ")}. Passed: ${t}, Type: ${i})`)}}).call(this,n(2))},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendSocietyEvent=t.sendCameraEvent=t.sendContactsEvent=t.sendMarketplaceEvent=t.sendNotesEvent=t.sendMessageEvent=t.sendMessage=void 0;const o=i(n(6));function s(e,t,n){return SendNUIMessage({app:e,method:t,data:n})}t.sendMessage=s,t.sendMessageEvent=function(e,t={}){return s(o.default.MESSAGES,e,t)},t.sendNotesEvent=function(e,t={}){return s(o.default.NOTES,e,t)},t.sendMarketplaceEvent=function(e,t={}){s(o.default.MARKETPLACE,e,t)},t.sendContactsEvent=function(e,t={}){s(o.default.CONTACTS,e,t)},t.sendCameraEvent=function(e,t={}){s(o.default.CAMERA,e,t)},t.sendSocietyEvent=function(e,t={}){s(o.default.SOCIETIES,e,t)}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uuidv4=t.Delay=void 0;t.Delay=e=>new Promise(t=>setTimeout(t,e));t.uuidv4=()=>{let e="";for(let t=0;t<32;t+=1)switch(t){case 8:case 20:e+="-",e+=(16*Math.random()|0).toString(16);break;case 12:e+="-",e+="4";break;case 16:e+="-",e+=(4*Math.random()|8).toString(16);break;default:e+=(16*Math.random()|0).toString(16)}return e}},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ClUtils=t.config=void 0;const o=i(n(0));t.config=JSON.parse(LoadResourceFile(GetCurrentResourceName(),"config.json")),n(5),n(16),n(18),n(19),n(21),n(22),n(24),n(26),n(28),n(30),n(13),n(8),n(33),t.ClUtils=new o.default},function(e,t,n){"use strict";(function(e){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.hidePhone=t.showPhone=void 0;const o=n(1),s=n(9),a=n(4),r=n(7),l=n(0),c=n(10),E=n(3),d=n(8);e.isPhoneOpen=!1,e.isPhoneDrowned=!1,e.isPhoneDisabled=!1,e.isPlayerLoaded=!1;const u=e.exports;onNet(s.PhoneEvents.SET_PLAYER_LOADED,t=>{e.isPlayerLoaded=t,t?emitNet("banking:server:updatePhoneBalance"):(0,o.sendMessage)("PHONE",s.PhoneEvents.UNLOAD_CHARACTER,{})}),RegisterKeyMapping(a.config.general.toggleCommand,"Afficher le téléphone","keyboard",a.config.general.toggleKey),setTimeout(()=>{emit("chat:addSuggestion",""+a.config.general.toggleCommand,"Toggle displaying your cellphone")},1e3);t.showPhone=()=>i(void 0,void 0,void 0,(function*(){e.isPhoneOpen=!0;const t=(()=>{let e=GetClockHours(),t=GetClockMinutes();return e<10&&(e="0"+e),t<10&&(t="0"+t),`${e}:${t}`})();yield r.animationService.openPhone(),emitNet(s.PhoneEvents.FETCH_CREDENTIALS),SetCursorLocation(.9,.922),(0,o.sendMessage)("PHONE",s.PhoneEvents.SET_VISIBILITY,!0),(0,o.sendMessage)("PHONE",s.PhoneEvents.SET_TIME,t),SetNuiFocus(!0,!0),SetNuiFocusKeepInput(!0),emit("npwd:disableControlActions",!0)}));t.hidePhone=()=>i(void 0,void 0,void 0,(function*(){e.isPhoneOpen=!1,(0,o.sendMessage)("PHONE",s.PhoneEvents.SET_VISIBILITY,!1),yield r.animationService.closePhone(),SetNuiFocus(!1,!1),SetNuiFocusKeepInput(!1),emit("npwd:disableControlActions",!1)})),RegisterCommand(a.config.general.toggleCommand,()=>i(void 0,void 0,void 0,(function*(){e.isPhoneDisabled||(yield function(){return i(this,void 0,void 0,(function*(){if(a.config.PhoneAsItem.enabled){if(!(yield S()))return void u["soz-hud"].DrawNotification("Vous n'avez pas de téléphone","error")}if(e.isPhoneOpen)return yield(0,t.hidePhone)();yield(0,t.showPhone)()}))}())})),!1),RegisterCommand("phone:restart",()=>i(void 0,void 0,void 0,(function*(){yield(0,t.hidePhone)(),(0,o.sendMessage)("PHONE","phoneRestart",{})})),!1);const S=()=>i(void 0,void 0,void 0,(function*(){const e=yield Promise.resolve(u[a.config.PhoneAsItem.exportResource][a.config.PhoneAsItem.exportFunction]());if("number"!=typeof e&&"boolean"!=typeof e)throw new Error("You must return either a boolean or number from your export function");return!!e}));onNet(s.PhoneEvents.SEND_CREDENTIALS,(e,t)=>{(0,o.sendMessage)("SIMCARD",s.PhoneEvents.SET_NUMBER,e),(0,o.sendMessage)("SOCIETY_SIMCARD",s.PhoneEvents.SET_SOCIETY_NUMBER,t),a.ClUtils.emitNetPromise(c.SettingsEvents.SET_AVATAR).then(e=>{(0,o.sendMessage)("AVATAR",c.SettingsEvents.SET_AVATAR,e.data)})}),on("onResourceStop",e=>{e===GetCurrentResourceName()&&((0,o.sendMessage)("PHONE",s.PhoneEvents.SET_VISIBILITY,!1),(0,o.sendMessage)("PHONE",s.PhoneEvents.SET_AVAILABILITY,!1),SetNuiFocus(!1,!1),r.animationService.endPhoneCall(),r.animationService.closePhone(),ClearPedTasks(PlayerPedId()),(0,d.removePhoneProp)())}),onNet("QBCore:Client:OnPlayerLoaded",()=>i(void 0,void 0,void 0,(function*(){const e=yield S();(0,o.sendMessage)("PHONE",s.PhoneEvents.SET_AVAILABILITY,e)}))),onNet("QBCore:Player:SetPlayerData",e=>i(void 0,void 0,void 0,(function*(){"object"==typeof e.items&&(e.items=Object.values(e.items));const t=e.items.find(e=>"phone"===e.name);(0,o.sendMessage)("PHONE",s.PhoneEvents.SET_AVAILABILITY,!!t)}))),(0,l.RegisterNuiCB)(s.PhoneEvents.CLOSE_PHONE,(e,n)=>i(void 0,void 0,void 0,(function*(){yield(0,t.hidePhone)(),n()}))),(0,l.RegisterNuiCB)(s.PhoneEvents.TOGGLE_KEYS,({keepGameFocus:t},n)=>i(void 0,void 0,void 0,(function*(){e.isPhoneOpen&&SetNuiFocusKeepInput(t),n({})}))),setTick(()=>i(void 0,void 0,void 0,(function*(){const n=IsPedSwimming(PlayerPedId());n?(e.isPhoneDisabled=!0,e.isPhoneDrowned=!0,e.isPhoneOpen&&(yield(0,t.hidePhone)()),(0,o.sendMessage)("PHONE",s.PhoneEvents.SET_AVAILABILITY,!1)):!n&&e.isPhoneDrowned&&(e.isPhoneDisabled=!1,e.isPhoneDrowned=!1,(0,o.sendMessage)("PHONE",s.PhoneEvents.SET_AVAILABILITY,!0)),e.isPhoneOpen&&u.progressbar.IsDoingAction()&&(yield(0,t.hidePhone)()),yield(0,E.Delay)(1e3)})))}).call(this,n(2))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={MESSAGES:"MESSAGES",NOTES:"NOTES",MARKETPLACE:"MARKETPLACE",CONTACTS:"CONTACTS",CAMERA:"CAMERA",SOCIETIES:"SOCIETIES",SOCIETY_MESSAGES:"SOCIETY_MESSAGES",TWITCH_NEWS:"TWITCH_NEWS"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animationService=void 0;const i=n(15);t.animationService=new i.AnimationService},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.removePhoneProp=t.newPhoneProp=void 0;const o=n(3);let s=0,a=!1;function r(){0!=s&&(DeleteEntity(s),s=0,a=!1)}t.newPhoneProp=()=>i(void 0,void 0,void 0,(function*(){if(r(),a)a&&console.log("prop already created");else{for(RequestModel("soz_prop_phone");!HasModelLoaded("soz_prop_phone");)yield(0,o.Delay)(1);const e=PlayerPedId(),[t,n,i]=GetEntityCoords(e,!0);s=CreateObject(GetHashKey("soz_prop_phone"),t,n,i+.2,!0,!0,!0),SetNetworkIdCanMigrate(ObjToNet(s),!1);const r=GetPedBoneIndex(e,28422);AttachEntityToEntity(s,e,r,0,0,0,0,0,-0,!0,!0,!1,!0,1,!0),a=!0}})),t.removePhoneProp=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorStringKeys=t.PhoneEvents=t.PHONE_NUMBER_REGEX=void 0,t.PHONE_NUMBER_REGEX=/^([0-9]{3}-[0-9]{4})|([0-9]{7})$/,function(e){e.OPEN_APP="npwd:openApp",e.OPEN_PHONE="npwd:open",e.CLOSE_PHONE="npwd:close",e.UNLOAD_CHARACTER="npwd:unloadCharacter",e.SET_AVAILABILITY="npwd:setAvailability",e.SET_VISIBILITY="npwd:setVisibility",e.ADD_SNACKBAR_ALERT="npwd:setSnackarAlert",e.SET_NUMBER="npwd:setNumber",e.SET_SOCIETY_NUMBER="npwd:setSocietyNumber",e.SET_PHONE_READY="npwd:phoneReady",e.SET_CONFIG="npwd:setPhoneConfig",e.SET_TIME="npwd:setGameTime",e.SEND_CREDENTIALS="npwd:sendCredentials",e.FETCH_CREDENTIALS="npwd:getCredentials",e.TOGGLE_KEYS="npwd:toggleAllControls",e.SET_PLAYER_LOADED="npwd:setPlayerLoaded"}(t.PhoneEvents||(t.PhoneEvents={})),function(e){e.SERVER_ERROR="GENERAL_SERVER_ERROR",e.DELETE_FAILED="DELETE_FAILED",e.ADD_FAILED="ADD_FAILED",e.UPDATE_FAILED="UPDATED_FAILED",e.FETCH_FAILED="FETCH_FAILED"}(t.ErrorStringKeys||(t.ErrorStringKeys={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsEvents=void 0,function(e){e.UPDATE_PICTURE="npwd:updateProfilePicture",e.SET_AVATAR="npwd:setAvatar"}(t.SettingsEvents||(t.SettingsEvents={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ContactEvents=t.ContactsDatabaseLimits=void 0,function(e){e[e.number=20]="number",e[e.display=255]="display"}(t.ContactsDatabaseLimits||(t.ContactsDatabaseLimits={})),function(e){e.GET_CONTACTS="npwd:getContacts",e.ADD_CONTACT="npwd:addContacts",e.UPDATE_CONTACT="npwd:updateContact",e.DELETE_CONTACT="npwd:deleteContact",e.ADD_CONTACT_EXPORT="npwd:addContactExport"}(t.ContactEvents||(t.ContactEvents={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotesEvents=void 0,function(e){e.ADD_NOTE="npwd:addNote",e.FETCH_ALL_NOTES="npwd:fetchAllNotes",e.DELETE_NOTE="npwd:deleteNote",e.UPDATE_NOTE="npwd:updateNote",e.ADD_NOTE_EXPORT="npwd:addNoteExport"}(t.NotesEvents||(t.NotesEvents={}))},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.initializeCallHandler=void 0;const o=n(14),s=n(31),a=n(7),r=n(32),l=n(0),c=n(4),E=n(5),d=new s.CallService;t.initializeCallHandler=(e,t)=>i(void 0,void 0,void 0,(function*(){if(!d.isInCall())try{const n=yield c.ClUtils.emitNetPromise(o.CallEvents.INITIALIZE_CALL,e);if(a.animationService.startPhoneCall(),"ok"!==n.status)return t(n);const{transmitter:i,isTransmitter:s,receiver:r,isUnavailable:l}=n.data;d.handleStartCall(i,r,s,l),t({status:"ok"})}catch(e){console.error(e),t({status:"error",errorMsg:"CLIENT_TIMED_OUT"})}})),(0,l.RegisterNuiCB)(o.CallEvents.INITIALIZE_CALL,t.initializeCallHandler),(0,r.onNetTyped)(o.CallEvents.START_CALL,e=>{const{transmitter:t,isTransmitter:n,receiver:i,isUnavailable:o}=e;d.handleStartCall(t,i,n,o)}),(0,l.RegisterNuiCB)(o.CallEvents.ACCEPT_CALL,(e,t)=>{a.animationService.startPhoneCall(),(0,r.emitNetTyped)(o.CallEvents.ACCEPT_CALL,e),t({})}),(0,r.onNetTyped)(o.CallEvents.WAS_ACCEPTED,e=>{d.handleCallAccepted(e)}),(0,l.RegisterNuiCB)(o.CallEvents.REJECTED,(e,t)=>{(0,r.emitNetTyped)(o.CallEvents.REJECTED,e),t({})}),onNet(o.CallEvents.WAS_REJECTED,()=>i(void 0,void 0,void 0,(function*(){d.handleRejectCall(),a.animationService.endPhoneCall()}))),(0,l.RegisterNuiCB)(o.CallEvents.END_CALL,(e,t)=>i(void 0,void 0,void 0,(function*(){try{const n=yield c.ClUtils.emitNetPromise(o.CallEvents.END_CALL,e);"error"===n.status&&console.error(n.errorMsg),d.handleEndCall(),t({})}catch(e){console.error(e),t({status:"error",errorMsg:"CLIENT_TIMED_OUT"})}a.animationService.endPhoneCall()}))),onNet(o.CallEvents.WAS_ENDED,()=>{d.handleEndCall(),a.animationService.endPhoneCall()}),onNet("ems:client:onDeath",()=>{d.handleEndCall(),a.animationService.endPhoneCall(),(0,E.hidePhone)()}),(0,l.RegisterNuiProxy)(o.CallEvents.FETCH_CALLS),onNet(o.CallEvents.SEND_ALERT,e=>{d.handleSendAlert(e)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CallEvents=t.CallRejectReasons=void 0,function(e){e[e.DECLINED=0]="DECLINED",e[e.BUSY_LINE=1]="BUSY_LINE"}(t.CallRejectReasons||(t.CallRejectReasons={})),function(e){e.INITIALIZE_CALL="npwd:beginCall",e.START_CALL="npwd:startCall",e.ACCEPT_CALL="npwd:acceptCall",e.END_CALL="npwd:endCall",e.WAS_ENDED="npwd:callEnded",e.WAS_ACCEPTED="npwd:callAccepted",e.REJECTED="npwd:rejectCall",e.WAS_REJECTED="npwd:callRejected",e.FETCH_CALLS="npwd:fetchCalls",e.SET_CALLER="npwd:setCaller",e.SET_CALL_MODAL="npwd:callModal",e.SEND_ALERT="npwd:callSetAlert"}(t.CallEvents||(t.CallEvents={}))},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.AnimationService=t.AnimationState=void 0;const o=n(8),s=n(3);var a;!function(e){e[e.ON_CALL=0]="ON_CALL",e[e.PHONE_OPEN=1]="PHONE_OPEN",e[e.ON_CAMERA=2]="ON_CAMERA"}(a=t.AnimationState||(t.AnimationState={}));t.AnimationService=class{constructor(){this.onCall=!1,this.phoneOpen=!1,this.onCamera=!1}createAnimationInterval(){this.animationInterval=setInterval(()=>i(this,void 0,void 0,(function*(){const e=PlayerPedId();this.onCall?this.handleCallAnimation(e):this.phoneOpen&&!this.onCamera&&this.handleOpenAnimation(e)})),250)}setPhoneState(e,t){switch(e){case a.ON_CALL:this.onCall=t;break;case a.PHONE_OPEN:this.phoneOpen=t;break;case a.ON_CAMERA:this.onCamera=t}this.onCall||this.phoneOpen?this.animationInterval||this.createAnimationInterval():this.animationInterval&&(clearInterval(this.animationInterval),this.animationInterval=null)}handleCallAnimation(e){IsPedInAnyVehicle(e,!0)?this.handleOnCallInVehicle(e):this.handleOnCallNormal(e)}handleOpenAnimation(e){IsPedInAnyVehicle(e,!0)?this.handleOpenVehicleAnim(e):this.handleOpenNormalAnim(e)}handleCallEndAnimation(e){IsPedInAnyVehicle(e,!0)?this.handleCallEndVehicleAnim(e):this.handleCallEndNormalAnim(e)}handleCloseAnimation(e){IsPedInAnyVehicle(e,!0)?this.handleCloseVehicleAnim(e):this.handleCloseNormalAnim(e)}openPhone(){return i(this,void 0,void 0,(function*(){(0,o.newPhoneProp)(),this.onCall||this.handleOpenAnimation(PlayerPedId()),this.setPhoneState(a.PHONE_OPEN,!0)}))}closePhone(){return i(this,void 0,void 0,(function*(){(0,o.removePhoneProp)(),this.setPhoneState(a.PHONE_OPEN,!1),this.onCall||this.handleCloseAnimation(PlayerPedId())}))}startPhoneCall(){return i(this,void 0,void 0,(function*(){this.handleCallAnimation(PlayerPedId()),this.setPhoneState(a.ON_CALL,!0)}))}endPhoneCall(){return i(this,void 0,void 0,(function*(){this.handleCallEndAnimation(PlayerPedId()),this.setPhoneState(a.ON_CALL,!1)}))}openCamera(){return i(this,void 0,void 0,(function*(){this.setPhoneState(a.ON_CAMERA,!0)}))}closeCamera(){return i(this,void 0,void 0,(function*(){this.setPhoneState(a.ON_CAMERA,!1)}))}loadAnimDict(e){return i(this,void 0,void 0,(function*(){for(RequestAnimDict(e);!HasAnimDictLoaded(e);)yield(0,s.Delay)(100)}))}handleOpenVehicleAnim(e){return i(this,void 0,void 0,(function*(){const t="anim@cellphone@in_car@ps",n="cellphone_text_in";yield this.loadAnimDict(t),IsEntityPlayingAnim(e,t,n,3)||(emit("inventory:client:StoreWeapon"),TaskPlayAnim(e,t,n,7,-1,-1,50,0,!1,!1,!1))}))}handleOpenNormalAnim(e){return i(this,void 0,void 0,(function*(){const t="cellphone@",n="cellphone_text_in";yield this.loadAnimDict(t),IsEntityPlayingAnim(e,t,n,3)||(emit("inventory:client:StoreWeapon"),TaskPlayAnim(e,t,n,8,-1,-1,50,0,!1,!1,!1))}))}handleCloseVehicleAnim(e){return i(this,void 0,void 0,(function*(){const t="anim@cellphone@in_car@ps";StopAnimTask(e,t,"cellphone_text_in",1),StopAnimTask(e,t,"cellphone_call_to_text",1),(0,o.removePhoneProp)()}))}handleCloseNormalAnim(e){return i(this,void 0,void 0,(function*(){const t="cellphone@",n="cellphone_text_out";StopAnimTask(e,t,"cellphone_text_in",1),yield(0,s.Delay)(100),yield this.loadAnimDict(t),TaskPlayAnim(e,t,n,7,-1,-1,50,0,!1,!1,!1),yield(0,s.Delay)(200),StopAnimTask(e,t,n,1),(0,o.removePhoneProp)()}))}handleOnCallInVehicle(e){return i(this,void 0,void 0,(function*(){const t="anim@cellphone@in_car@ps",n="cellphone_call_listen_base";IsEntityPlayingAnim(e,t,n,3)||(yield this.loadAnimDict(t),TaskPlayAnim(e,t,n,3,3,-1,49,0,!1,!1,!1))}))}handleOnCallNormal(e){return i(this,void 0,void 0,(function*(){const t="cellphone@",n="cellphone_call_listen_base";IsEntityPlayingAnim(e,t,n,3)||(yield this.loadAnimDict(t),TaskPlayAnim(e,t,n,3,3,-1,49,0,!1,!1,!1))}))}handleCallEndVehicleAnim(e){return i(this,void 0,void 0,(function*(){const t="anim@cellphone@in_car@ps";StopAnimTask(e,t,"cellphone_call_listen_base",1),yield this.loadAnimDict(t),TaskPlayAnim(e,t,"cellphone_call_to_text",1.3,5,-1,50,0,!1,!1,!1)}))}handleCallEndNormalAnim(e){return i(this,void 0,void 0,(function*(){IsEntityPlayingAnim(e,"cellphone@","cellphone_call_listen_base",49)&&(yield this.loadAnimDict("cellphone@"),TaskPlayAnim(e,"cellphone@","cellphone_call_to_text",2.5,8,-1,50,0,!1,!1,!1))}))}}},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(17),s=n(1),a=n(3);onNet("phone:client:bank:updateBalance",(e,t,n)=>i(void 0,void 0,void 0,(function*(){yield(0,a.Delay)(3e3),(0,s.sendMessage)("BANK",o.BankEvents.SEND_CREDENTIALS,{name:e,account:t,balance:n})})))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BankEvents=void 0,function(e){e.GET_CREDENTIALS="npwd:getBankCredentials",e.SEND_CREDENTIALS="npwd:sendBankCredentials",e.FETCH_TRANSACTIONS="npwd:fetchAllTransactions",e.TRANSACTION_NOTIFICATION="npwd:bankTransactionNotification",e.TRANSACTION_ALERT="npwd:bankTransactionAlert",e.SEND_ALERT="npwd:sendBankAlert",e.SEND_NOTIFICATION="npwd:sendBankNotification"}(t.BankEvents||(t.BankEvents={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(11),o=n(0);(0,o.RegisterNuiProxy)(i.ContactEvents.GET_CONTACTS),(0,o.RegisterNuiProxy)(i.ContactEvents.ADD_CONTACT),(0,o.RegisterNuiProxy)(i.ContactEvents.DELETE_CONTACT),(0,o.RegisterNuiProxy)(i.ContactEvents.UPDATE_CONTACT)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(20),o=n(0),s=n(1);(0,o.RegisterNuiProxy)(i.MarketplaceEvents.FETCH_LISTING),(0,o.RegisterNuiProxy)(i.MarketplaceEvents.ADD_LISTING),(0,o.RegisterNuiProxy)(i.MarketplaceEvents.DELETE_LISTING),(0,o.RegisterNuiProxy)(i.MarketplaceEvents.REPORT_LISTING),onNet(i.MarketplaceEvents.BROADCAST_ADD,e=>{(0,s.sendMarketplaceEvent)(i.MarketplaceEvents.BROADCAST_ADD,e)}),onNet(i.MarketplaceEvents.BROADCAST_DELETE,e=>{(0,s.sendMarketplaceEvent)(i.MarketplaceEvents.BROADCAST_DELETE,e)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MarketplaceEvents=t.ListingTypeResp=t.MarketplaceDatabaseLimits=void 0,function(e){e[e.title=255]="title",e[e.description=255]="description",e[e.url=255]="url"}(t.MarketplaceDatabaseLimits||(t.MarketplaceDatabaseLimits={})),function(e){e.DUPLICATE="duplicate"}(t.ListingTypeResp||(t.ListingTypeResp={})),function(e){e.ADD_LISTING="npwd:addListing",e.FETCH_LISTING="npwd:fetchAllListings",e.DELETE_LISTING="npwd:marketplaceDeleteListing",e.DELETE_LISTINGS_ON_DROP="npwd:marketplaceDeleteListingsOnDrop",e.REPORT_LISTING="npwd:reportListing",e.BROADCAST_ADD="npwd:sendMarketplaceBroadcastAdd",e.BROADCAST_DELETE="npwd:sendMarketplaceBroadcastDelete"}(t.MarketplaceEvents||(t.MarketplaceEvents={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(12),o=n(0);(0,o.RegisterNuiProxy)(i.NotesEvents.ADD_NOTE),(0,o.RegisterNuiProxy)(i.NotesEvents.FETCH_ALL_NOTES),(0,o.RegisterNuiProxy)(i.NotesEvents.UPDATE_NOTE),(0,o.RegisterNuiProxy)(i.NotesEvents.DELETE_NOTE)},function(e,t,n){"use strict";(function(e){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(23),s=n(3),a=n(1),r=n(4),l=n(7),c=n(0),E=e.exports;let d=!1,u=!0,S=!1;(0,c.RegisterNuiCB)(o.PhotoEvents.ENTER_CAMERA,(e,t)=>i(void 0,void 0,void 0,(function*(){for(yield l.animationService.openCamera(),emit("npwd:disableControlActions",!1),d=!0,CreateMobilePhone(1),CellCamActivate(!0,!0),emit(o.PhotoEvents.ENTER_CAMERA);d;)yield(0,s.Delay)(0),!u&&IsControlJustPressed(0,176)&&(u=!0,SetNuiFocus(!0,!0)),u&&(DisableControlAction(0,1,!0),DisableControlAction(0,2,!0))}))),(0,c.RegisterNuiCB)(o.PhotoEvents.TAKE_PHOTO,(e,t)=>i(void 0,void 0,void 0,(function*(){const e=yield v();t(e),u=!0,SetNuiFocus(!0,!0)}))),(0,c.RegisterNuiCB)(o.PhotoEvents.TOGGLE_CAMERA,(e,t)=>i(void 0,void 0,void 0,(function*(){var e;S=!S,e=S,Citizen.invokeNative("0x2491A93618B7D838",e),u=!0,SetNuiFocus(!0,!0)}))),(0,c.RegisterNuiCB)(o.PhotoEvents.TOGGLE_CONTROL_CAMERA,(e,t)=>i(void 0,void 0,void 0,(function*(){u=!u,SetNuiFocus(u,u)}))),(0,c.RegisterNuiCB)(o.PhotoEvents.EXIT_CAMERA,(t,n)=>i(void 0,void 0,void 0,(function*(){S=!1,u=!0,d=!1,SetNuiFocus(e.isPhoneOpen,e.isPhoneOpen),yield _(),emit(o.PhotoEvents.EXIT_CAMERA),emit("npwd:disableControlActions",e.isPhoneOpen),yield l.animationService.closeCamera()})));const v=()=>i(void 0,void 0,void 0,(function*(){ClearHelp(!0),yield(0,s.Delay)(0);const e=yield C();return DestroyMobilePhone(),CellCamActivate(!1,!1),l.animationService.openPhone(),emit("npwd:disableControlActions",!0),yield(0,s.Delay)(200),e})),_=()=>i(void 0,void 0,void 0,(function*(){(0,a.sendCameraEvent)(o.PhotoEvents.CAMERA_EXITED),yield l.animationService.closeCamera(),emit("npwd:disableControlActions",!0),DestroyMobilePhone(),CellCamActivate(!1,!1)})),C=()=>new Promise((e,t)=>{E["screenshot-basic"].requestScreenshotUpload(GetConvar("soz_public_api_endpoint","https://api.soz.zerator.com")+"/graphql","GQL",{encoding:r.config.images.imageEncoding,headers:{authorization:"Bearer "+LocalPlayer.state.SozJWTToken}},n=>i(void 0,void 0,void 0,(function*(){try{let t=JSON.parse(n);for(const e of r.config.images.returnedDataIndexes)t=t[e];const i=yield r.ClUtils.emitNetPromise(o.PhotoEvents.UPLOAD_PHOTO,GetConvar("soz_public_endpoint","https://soz.zerator.com")+t);e(i)}catch(e){t(e.message)}})))});(0,c.RegisterNuiProxy)(o.PhotoEvents.FETCH_PHOTOS),(0,c.RegisterNuiProxy)(o.PhotoEvents.DELETE_PHOTO)}).call(this,n(2))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PhotoEvents=void 0,function(e){e.ENTER_CAMERA="phone:camera:enter",e.TAKE_PHOTO="phone:camera:take",e.TOGGLE_CAMERA="phone:camera:toggle",e.EXIT_CAMERA="phone:camera:exit",e.TOGGLE_CONTROL_CAMERA="phone:camera:toggleControl",e.CAMERA_EXITED="npwd:cameraExited",e.TAKE_PHOTO_SUCCESS="npwd:TakePhotoSuccess",e.UPLOAD_PHOTO="npwd:UploadPhoto",e.FETCH_PHOTOS="npwd:FetchPhotos",e.DELETE_PHOTO="npwd:deletePhoto"}(t.PhotoEvents||(t.PhotoEvents={}))},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(25),s=n(1),a=n(0);(0,a.RegisterNuiProxy)(o.MessageEvents.FETCH_MESSAGE_CONVERSATIONS),(0,a.RegisterNuiProxy)(o.MessageEvents.FETCH_MESSAGES),(0,a.RegisterNuiProxy)(o.MessageEvents.CREATE_MESSAGE_CONVERSATION),(0,a.RegisterNuiProxy)(o.MessageEvents.DELETE_CONVERSATION),(0,a.RegisterNuiProxy)(o.MessageEvents.SEND_MESSAGE),(0,a.RegisterNuiCB)(o.MessageEvents.SET_WAYPOINT,(e,t)=>i(void 0,void 0,void 0,(function*(){0!==e.x&&0!==e.y&&SetNewWaypoint(parseInt(e.x),parseInt(e.y))}))),(0,a.RegisterNuiCB)(o.MessageEvents.GET_POSITION,(e,t)=>i(void 0,void 0,void 0,(function*(){const[e,n,i]=GetEntityCoords(PlayerPedId(),!0);t({data:{x:e,y:n}})}))),(0,a.RegisterNuiCB)(o.MessageEvents.GET_DESTINATION,(e,t)=>i(void 0,void 0,void 0,(function*(){const[e,n,i]=GetBlipInfoIdCoord(GetFirstBlipInfoId(8));t({data:{x:e,y:n}})}))),onNet(o.MessageEvents.SEND_MESSAGE_SUCCESS,e=>{(0,s.sendMessageEvent)(o.MessageEvents.SEND_MESSAGE_SUCCESS,e)}),onNet(o.MessageEvents.CREATE_MESSAGE_BROADCAST,e=>{(0,s.sendMessageEvent)(o.MessageEvents.CREATE_MESSAGE_BROADCAST,e)}),onNet(o.MessageEvents.CREATE_MESSAGE_CONVERSATION_SUCCESS,e=>{(0,s.sendMessageEvent)(o.MessageEvents.CREATE_MESSAGE_CONVERSATION_SUCCESS,e)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessageEvents=void 0,function(e){e.FETCH_MESSAGE_CONVERSATIONS="npwd:fetchMessageGroups",e.FETCH_MESSAGE_GROUPS_SUCCESS="npwd:fetchMessageGroupsSuccess",e.FETCH_MESSAGE_GROUPS_FAILED="npwd:fetchMessageGroupsFailed",e.CREATE_MESSAGE_CONVERSATION="npwd:createMessageGroup",e.CREATE_MESSAGE_CONVERSATION_SUCCESS="npwd:createMessageConversationSuccess",e.CREATE_MESSAGE_GROUP_SUCCESS="npwd:createMessageGroupSuccess",e.CREATE_MESSAGE_GROUP_FAILED="npwd:createMessageGroupFailed",e.SEND_MESSAGE="npwd:sendMessage",e.SEND_MESSAGE_SUCCESS="npwd:sendMessageSuccess",e.SEND_MESSAGE_FAILED="npwd:sendMessageFailed",e.FETCH_MESSAGES="npwd:fetchMessages",e.FETCH_MESSAGES_SUCCESS="npwd:fetchMessagesSuccess",e.FETCH_MESSAGES_FAILED="npwd:fetchMessagesFailed",e.FETCH_INITIAL_MESSAGES="npwd:fetchInitialMessages",e.ACTION_RESULT="npwd:setMessagesAlert",e.CREATE_MESSAGE_BROADCAST="createMessagesBroadcast",e.SET_MESSAGE_READ="npwd:setReadMessages",e.DELETE_CONVERSATION="nwpd:deleteConversation",e.GET_POSITION="nwpd:getCurrentPosition",e.GET_DESTINATION="nwpd:getCurrentDestination",e.SET_WAYPOINT="nwpd:setWaypoint"}(t.MessageEvents||(t.MessageEvents={}))},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(27),s=n(0),a=n(1),r=i(n(6));(0,s.RegisterNuiProxy)(o.SocietyEvents.SEND_SOCIETY_MESSAGE),(0,s.RegisterNuiProxy)(o.SocietyEvents.FETCH_SOCIETY_MESSAGES),(0,s.RegisterNuiProxy)(o.SocietyEvents.RESET_SOCIETY_MESSAGES),(0,s.RegisterNuiProxy)(o.SocietyEvents.UPDATE_SOCIETY_MESSAGE),onNet(o.SocietyEvents.CREATE_MESSAGE_BROADCAST,e=>{(0,a.sendMessage)(r.default.SOCIETY_MESSAGES,o.SocietyEvents.CREATE_MESSAGE_BROADCAST,e)}),onNet(o.SocietyEvents.RESET_SOCIETY_MESSAGES,()=>{(0,a.sendMessage)(r.default.SOCIETY_MESSAGES,o.SocietyEvents.RESET_SOCIETY_MESSAGES,null)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SocietyNumberList=t.SocietyEvents=t.SocietiesDatabaseLimits=void 0,function(e){e[e.message=255]="message"}(t.SocietiesDatabaseLimits||(t.SocietiesDatabaseLimits={})),function(e){e.UPDATE_SOCIETY_MESSAGE="npwd:updateSocietyMessage",e.SEND_SOCIETY_MESSAGE="npwd:sendSocietyMessage",e.FETCH_SOCIETY_MESSAGES="npwd:fetchSocietyMessage",e.RESET_SOCIETY_MESSAGES="npwd:resetSocietyMessage",e.SEND_SOCIETY_MESSAGE_SUCCESS="npwd:sendSocietyMessageSuccess",e.CREATE_MESSAGE_BROADCAST="npwd:createSocietyMessagesBroadcast"}(t.SocietyEvents||(t.SocietyEvents={})),t.SocietyNumberList={fbi:"555-FBI",lspd:"555-LSPD",lsmc:"555-LSMC",bcso:"555-BCSO",news:"555-NEWS",garbage:"555-BLUEBIRD",taxi:"555-CARLJR",food:"555-MARIUS",oil:"555-MTP","cash-transfer":"555-STONK",bennys:"555-BENNYS",upw:"555-UPW",pawl:"555-PAWL"}},function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),s=n(1),a=i(n(6)),r=n(29);(0,o.RegisterNuiProxy)(r.TwitchNewsEvents.FETCH_NEWS),onNet(r.TwitchNewsEvents.CREATE_NEWS_BROADCAST,e=>{(0,s.sendMessage)(a.default.TWITCH_NEWS,r.TwitchNewsEvents.CREATE_NEWS_BROADCAST,e)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TwitchNewsEvents=t.SocietiesDatabaseLimits=void 0,function(e){e[e.message=255]="message"}(t.SocietiesDatabaseLimits||(t.SocietiesDatabaseLimits={})),function(e){e.FETCH_NEWS="phone:app:news:fetchNews",e.CREATE_NEWS_BROADCAST="phone:app:news:createNewsBroadcast",e.API_NEWS_BROADCAST="soz-api:server:AddFlashNews"}(t.TwitchNewsEvents||(t.TwitchNewsEvents={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(10);(0,n(0).RegisterNuiProxy)(i.SettingsEvents.UPDATE_PICTURE)},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.CallService=void 0;const i=n(14);e.exports;class o{constructor(){this.currentCall=0,this.currentCallData=null}static sendCallAction(e,t){SendNUIMessage({app:"CALL",method:e,data:t})}isInCall(){return 0!==this.currentCall}openCallModal(e){o.sendCallAction(i.CallEvents.SET_CALL_MODAL,e)}handleRejectCall(){this.isInCall()||(this.openCallModal(!1),o.sendCallAction(i.CallEvents.SET_CALLER,null))}handleStartCall(e,t,n,o){if(this.isInCall())return emitNet(i.CallEvents.REJECTED,e,i.CallRejectReasons.BUSY_LINE);this.openCallModal(!0),SendNUIMessage({app:"CALL",method:i.CallEvents.SET_CALLER,data:{active:!0,transmitter:e,receiver:t,isTransmitter:n,accepted:!1,isUnavailable:o}})}handleCallAccepted(e){this.currentCall=e.channelId,this.currentCallData=e,emitNet("voip:server:call:start",e.transmitter,e.receiver),o.sendCallAction(i.CallEvents.SET_CALLER,e)}handleEndCall(){var e;(null===(e=this.currentCallData)||void 0===e?void 0:e.is_accepted)&&emitNet("voip:server:call:end"),this.currentCall=0,this.currentCallData=null,this.openCallModal(!1),o.sendCallAction(i.CallEvents.SET_CALLER,null)}handleSendAlert(e){SendNUIMessage({app:"DIALER",method:i.CallEvents.SEND_ALERT,data:e})}}t.CallService=o}).call(this,n(2))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.emitNetTyped=t.onNetTyped=t.clean=t.getSource=void 0;t.getSource=()=>e.source;t.clean=e=>e?e.replace(/[^0-9a-z]/gi,""):e;t.onNetTyped=(e,t)=>onNet(e,t);t.emitNetTyped=(e,t,n)=>{if(n)return emitNet(e,n,t);emitNet(e,t)}}).call(this,n(2))},function(e,t,n){"use strict";(function(e){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,s){function a(e){try{l(i.next(e))}catch(e){s(e)}}function r(e){try{l(i.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),s=n(9),a=n(0),r=n(13),l=n(11),c=n(12),E=n(5),d=e.exports;d("openApp",e=>{(0,a.verifyExportArgType)("openApp",e,["string"]),(0,o.sendMessage)("PHONE",s.PhoneEvents.OPEN_APP,e)}),d("setPhoneVisible",t=>i(void 0,void 0,void 0,(function*(){(0,a.verifyExportArgType)("setPhoneVisible",t,["boolean","number"]);const n=e.isPhoneDisabled,i=e.isPhoneOpen;if(n&&!t&&i)return;!!t?yield(0,E.showPhone)():yield(0,E.hidePhone)()}))),d("isPhoneVisible",()=>e.isPhoneOpen),d("setPhoneFocus",e=>{SetNuiFocus(e,e),SetNuiFocusKeepInput(e)}),d("setPhoneDisabled",t=>{(0,a.verifyExportArgType)("setPhoneVisible",t,["boolean","number"]);const n=!!t;e.isPhoneDisabled=n}),d("isPhoneDisabled",()=>e.isPhoneDisabled),d("startPhoneCall",e=>{(0,a.verifyExportArgType)("startPhoneCall",e,["string"]),(0,r.initializeCallHandler)({receiverNumber:e})}),d("fillNewContact",e=>{(0,a.verifyExportArgType)("fillNewContact",e,["object"]),(0,o.sendContactsEvent)(l.ContactEvents.ADD_CONTACT_EXPORT,e)}),d("fillNewNote",e=>{(0,a.verifyExportArgType)("fillNewNOte",e,["object"]),(0,o.sendNotesEvent)(c.NotesEvents.ADD_NOTE_EXPORT,e)})}).call(this,n(2))}]);