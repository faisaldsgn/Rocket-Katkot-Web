gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.idToCallbackMap = new Map();
gdjs.StartCode.GDPlayObjects1_1final = [];

gdjs.StartCode.GDMade_9595By_9595MeObjects1= [];
gdjs.StartCode.GDMade_9595By_9595MeObjects2= [];
gdjs.StartCode.GDSkyObjects1= [];
gdjs.StartCode.GDSkyObjects2= [];
gdjs.StartCode.GDPlayerTitleObjects1= [];
gdjs.StartCode.GDPlayerTitleObjects2= [];
gdjs.StartCode.GDGameTitleENGObjects1= [];
gdjs.StartCode.GDGameTitleENGObjects2= [];
gdjs.StartCode.GDGameTitleARObjects1= [];
gdjs.StartCode.GDGameTitleARObjects2= [];
gdjs.StartCode.GDStartBGObjects1= [];
gdjs.StartCode.GDStartBGObjects2= [];
gdjs.StartCode.GDQuestionMarkObjects1= [];
gdjs.StartCode.GDQuestionMarkObjects2= [];
gdjs.StartCode.GDHowToBGObjects1= [];
gdjs.StartCode.GDHowToBGObjects2= [];
gdjs.StartCode.GDPlusObjects1= [];
gdjs.StartCode.GDPlusObjects2= [];
gdjs.StartCode.GDHowToENGObjects1= [];
gdjs.StartCode.GDHowToENGObjects2= [];
gdjs.StartCode.GDHowToARObjects1= [];
gdjs.StartCode.GDHowToARObjects2= [];
gdjs.StartCode.GDPlayObjects1= [];
gdjs.StartCode.GDPlayObjects2= [];
gdjs.StartCode.GDSaudiArabiaObjects1= [];
gdjs.StartCode.GDSaudiArabiaObjects2= [];
gdjs.StartCode.GDUsaObjects1= [];
gdjs.StartCode.GDUsaObjects2= [];
gdjs.StartCode.GDStartENGObjects1= [];
gdjs.StartCode.GDStartENGObjects2= [];
gdjs.StartCode.GDStartARObjects1= [];
gdjs.StartCode.GDStartARObjects2= [];
gdjs.StartCode.GDXObjects1= [];
gdjs.StartCode.GDXObjects2= [];
gdjs.StartCode.GDLinkedinObjects1= [];
gdjs.StartCode.GDLinkedinObjects2= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sky"), gdjs.StartCode.GDSkyObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartAR"), gdjs.StartCode.GDStartARObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartENG"), gdjs.StartCode.GDStartENGObjects1);
{for(var i = 0, len = gdjs.StartCode.GDStartENGObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDStartENGObjects1[i].getBehavior("Flash").Flash(0, null);
}
}
{for(var i = 0, len = gdjs.StartCode.GDStartARObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDStartARObjects1[i].getBehavior("Flash").Flash(0, null);
}
}
{for(var i = 0, len = gdjs.StartCode.GDSkyObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDSkyObjects1[i].getBehavior("Opacity").setOpacity(120);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13230316);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Press ▶︎ or Space to Start");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("اضغط ▶︎ أو مسافة للبدء");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("StartAR"), gdjs.StartCode.GDStartARObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartENG"), gdjs.StartCode.GDStartENGObjects1);
{for(var i = 0, len = gdjs.StartCode.GDStartENGObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDStartENGObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.StartCode.GDStartARObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDStartARObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Sky"), gdjs.StartCode.GDSkyObjects1);
{for(var i = 0, len = gdjs.StartCode.GDSkyObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDSkyObjects1[i].setXOffset(gdjs.StartCode.GDSkyObjects1[i].getXOffset() + (0.1));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.camera.layerIsVisible(runtimeScene, "How To"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Linkedin"), gdjs.StartCode.GDLinkedinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Made_By_Me"), gdjs.StartCode.GDMade_9595By_9595MeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.StartCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.StartCode.GDXObjects1);
{for(var i = 0, len = gdjs.StartCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayObjects1[i].setLayer("");
}
}
{for(var i = 0, len = gdjs.StartCode.GDXObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDXObjects1[i].setLayer("");
}
}
{for(var i = 0, len = gdjs.StartCode.GDLinkedinObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDLinkedinObjects1[i].setLayer("");
}
}
{for(var i = 0, len = gdjs.StartCode.GDMade_9595By_9595MeObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDMade_9595By_9595MeObjects1[i].setLayer("");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "How To");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Linkedin"), gdjs.StartCode.GDLinkedinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Made_By_Me"), gdjs.StartCode.GDMade_9595By_9595MeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.StartCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.StartCode.GDXObjects1);
{for(var i = 0, len = gdjs.StartCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDPlayObjects1[i].setLayer("How To");
}
}
{for(var i = 0, len = gdjs.StartCode.GDXObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDXObjects1[i].setLayer("How To");
}
}
{for(var i = 0, len = gdjs.StartCode.GDLinkedinObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDLinkedinObjects1[i].setLayer("How To");
}
}
{for(var i = 0, len = gdjs.StartCode.GDMade_9595By_9595MeObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDMade_9595By_9595MeObjects1[i].setLayer("How To");
}
}
}

}


{

gdjs.StartCode.GDPlayObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.StartCode.GDPlayObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.StartCode.GDPlayObjects2);
for (var i = 0, k = 0, l = gdjs.StartCode.GDPlayObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlayObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.StartCode.GDPlayObjects2[k] = gdjs.StartCode.GDPlayObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDPlayObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.StartCode.GDPlayObjects2.length; j < jLen ; ++j) {
        if ( gdjs.StartCode.GDPlayObjects1_1final.indexOf(gdjs.StartCode.GDPlayObjects2[j]) === -1 )
            gdjs.StartCode.GDPlayObjects1_1final.push(gdjs.StartCode.GDPlayObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.StartCode.GDPlayObjects1_1final, gdjs.StartCode.GDPlayObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13235476);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.StartCode.GDXObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDXObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDXObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDXObjects1[k] = gdjs.StartCode.GDXObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDXObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13236164);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://twitter.com/FaisalDsgn", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Linkedin"), gdjs.StartCode.GDLinkedinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDLinkedinObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDLinkedinObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDLinkedinObjects1[k] = gdjs.StartCode.GDLinkedinObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDLinkedinObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13236956);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.linkedin.com/in/faisalalmahmoud/", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuestionMark"), gdjs.StartCode.GDQuestionMarkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDQuestionMarkObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDQuestionMarkObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDQuestionMarkObjects1[k] = gdjs.StartCode.GDQuestionMarkObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDQuestionMarkObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13237852);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "How To");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Plus"), gdjs.StartCode.GDPlusObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDPlusObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDPlusObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDPlusObjects1[k] = gdjs.StartCode.GDPlusObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDPlusObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13238596);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "How To");
}
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDMade_9595By_9595MeObjects1.length = 0;
gdjs.StartCode.GDMade_9595By_9595MeObjects2.length = 0;
gdjs.StartCode.GDSkyObjects1.length = 0;
gdjs.StartCode.GDSkyObjects2.length = 0;
gdjs.StartCode.GDPlayerTitleObjects1.length = 0;
gdjs.StartCode.GDPlayerTitleObjects2.length = 0;
gdjs.StartCode.GDGameTitleENGObjects1.length = 0;
gdjs.StartCode.GDGameTitleENGObjects2.length = 0;
gdjs.StartCode.GDGameTitleARObjects1.length = 0;
gdjs.StartCode.GDGameTitleARObjects2.length = 0;
gdjs.StartCode.GDStartBGObjects1.length = 0;
gdjs.StartCode.GDStartBGObjects2.length = 0;
gdjs.StartCode.GDQuestionMarkObjects1.length = 0;
gdjs.StartCode.GDQuestionMarkObjects2.length = 0;
gdjs.StartCode.GDHowToBGObjects1.length = 0;
gdjs.StartCode.GDHowToBGObjects2.length = 0;
gdjs.StartCode.GDPlusObjects1.length = 0;
gdjs.StartCode.GDPlusObjects2.length = 0;
gdjs.StartCode.GDHowToENGObjects1.length = 0;
gdjs.StartCode.GDHowToENGObjects2.length = 0;
gdjs.StartCode.GDHowToARObjects1.length = 0;
gdjs.StartCode.GDHowToARObjects2.length = 0;
gdjs.StartCode.GDPlayObjects1.length = 0;
gdjs.StartCode.GDPlayObjects2.length = 0;
gdjs.StartCode.GDSaudiArabiaObjects1.length = 0;
gdjs.StartCode.GDSaudiArabiaObjects2.length = 0;
gdjs.StartCode.GDUsaObjects1.length = 0;
gdjs.StartCode.GDUsaObjects2.length = 0;
gdjs.StartCode.GDStartENGObjects1.length = 0;
gdjs.StartCode.GDStartENGObjects2.length = 0;
gdjs.StartCode.GDStartARObjects1.length = 0;
gdjs.StartCode.GDStartARObjects2.length = 0;
gdjs.StartCode.GDXObjects1.length = 0;
gdjs.StartCode.GDXObjects2.length = 0;
gdjs.StartCode.GDLinkedinObjects1.length = 0;
gdjs.StartCode.GDLinkedinObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
gdjs.StartCode.GDMade_9595By_9595MeObjects1.length = 0;
gdjs.StartCode.GDMade_9595By_9595MeObjects2.length = 0;
gdjs.StartCode.GDSkyObjects1.length = 0;
gdjs.StartCode.GDSkyObjects2.length = 0;
gdjs.StartCode.GDPlayerTitleObjects1.length = 0;
gdjs.StartCode.GDPlayerTitleObjects2.length = 0;
gdjs.StartCode.GDGameTitleENGObjects1.length = 0;
gdjs.StartCode.GDGameTitleENGObjects2.length = 0;
gdjs.StartCode.GDGameTitleARObjects1.length = 0;
gdjs.StartCode.GDGameTitleARObjects2.length = 0;
gdjs.StartCode.GDStartBGObjects1.length = 0;
gdjs.StartCode.GDStartBGObjects2.length = 0;
gdjs.StartCode.GDQuestionMarkObjects1.length = 0;
gdjs.StartCode.GDQuestionMarkObjects2.length = 0;
gdjs.StartCode.GDHowToBGObjects1.length = 0;
gdjs.StartCode.GDHowToBGObjects2.length = 0;
gdjs.StartCode.GDPlusObjects1.length = 0;
gdjs.StartCode.GDPlusObjects2.length = 0;
gdjs.StartCode.GDHowToENGObjects1.length = 0;
gdjs.StartCode.GDHowToENGObjects2.length = 0;
gdjs.StartCode.GDHowToARObjects1.length = 0;
gdjs.StartCode.GDHowToARObjects2.length = 0;
gdjs.StartCode.GDPlayObjects1.length = 0;
gdjs.StartCode.GDPlayObjects2.length = 0;
gdjs.StartCode.GDSaudiArabiaObjects1.length = 0;
gdjs.StartCode.GDSaudiArabiaObjects2.length = 0;
gdjs.StartCode.GDUsaObjects1.length = 0;
gdjs.StartCode.GDUsaObjects2.length = 0;
gdjs.StartCode.GDStartENGObjects1.length = 0;
gdjs.StartCode.GDStartENGObjects2.length = 0;
gdjs.StartCode.GDStartARObjects1.length = 0;
gdjs.StartCode.GDStartARObjects2.length = 0;
gdjs.StartCode.GDXObjects1.length = 0;
gdjs.StartCode.GDXObjects2.length = 0;
gdjs.StartCode.GDLinkedinObjects1.length = 0;
gdjs.StartCode.GDLinkedinObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
