gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.idToCallbackMap = new Map();
gdjs.GameCode.GDExitObjects2_1final = [];

gdjs.GameCode.GDPlayerObjects2_1final = [];

gdjs.GameCode.GDWallBottomObjects2_1final = [];

gdjs.GameCode.GDWallTopObjects2_1final = [];

gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDWallTopObjects1= [];
gdjs.GameCode.GDWallTopObjects2= [];
gdjs.GameCode.GDWallTopObjects3= [];
gdjs.GameCode.GDWallTopObjects4= [];
gdjs.GameCode.GDWallBottomObjects1= [];
gdjs.GameCode.GDWallBottomObjects2= [];
gdjs.GameCode.GDWallBottomObjects3= [];
gdjs.GameCode.GDWallBottomObjects4= [];
gdjs.GameCode.GDRespwanTopObjects1= [];
gdjs.GameCode.GDRespwanTopObjects2= [];
gdjs.GameCode.GDRespwanTopObjects3= [];
gdjs.GameCode.GDRespwanTopObjects4= [];
gdjs.GameCode.GDRespwanBottomObjects1= [];
gdjs.GameCode.GDRespwanBottomObjects2= [];
gdjs.GameCode.GDRespwanBottomObjects3= [];
gdjs.GameCode.GDRespwanBottomObjects4= [];
gdjs.GameCode.GDScoreObjects1= [];
gdjs.GameCode.GDScoreObjects2= [];
gdjs.GameCode.GDScoreObjects3= [];
gdjs.GameCode.GDScoreObjects4= [];
gdjs.GameCode.GDFlashObjects1= [];
gdjs.GameCode.GDFlashObjects2= [];
gdjs.GameCode.GDFlashObjects3= [];
gdjs.GameCode.GDFlashObjects4= [];
gdjs.GameCode.GDRestartENGObjects1= [];
gdjs.GameCode.GDRestartENGObjects2= [];
gdjs.GameCode.GDRestartENGObjects3= [];
gdjs.GameCode.GDRestartENGObjects4= [];
gdjs.GameCode.GDRestartBGObjects1= [];
gdjs.GameCode.GDRestartBGObjects2= [];
gdjs.GameCode.GDRestartBGObjects3= [];
gdjs.GameCode.GDRestartBGObjects4= [];
gdjs.GameCode.GDSkyObjects1= [];
gdjs.GameCode.GDSkyObjects2= [];
gdjs.GameCode.GDSkyObjects3= [];
gdjs.GameCode.GDSkyObjects4= [];
gdjs.GameCode.GDTimeObjects1= [];
gdjs.GameCode.GDTimeObjects2= [];
gdjs.GameCode.GDTimeObjects3= [];
gdjs.GameCode.GDTimeObjects4= [];
gdjs.GameCode.GDWatter1Objects1= [];
gdjs.GameCode.GDWatter1Objects2= [];
gdjs.GameCode.GDWatter1Objects3= [];
gdjs.GameCode.GDWatter1Objects4= [];
gdjs.GameCode.GDWatter2Objects1= [];
gdjs.GameCode.GDWatter2Objects2= [];
gdjs.GameCode.GDWatter2Objects3= [];
gdjs.GameCode.GDWatter2Objects4= [];
gdjs.GameCode.GDWatter3Objects1= [];
gdjs.GameCode.GDWatter3Objects2= [];
gdjs.GameCode.GDWatter3Objects3= [];
gdjs.GameCode.GDWatter3Objects4= [];
gdjs.GameCode.GDTutENGObjects1= [];
gdjs.GameCode.GDTutENGObjects2= [];
gdjs.GameCode.GDTutENGObjects3= [];
gdjs.GameCode.GDTutENGObjects4= [];
gdjs.GameCode.GDTutARObjects1= [];
gdjs.GameCode.GDTutARObjects2= [];
gdjs.GameCode.GDTutARObjects3= [];
gdjs.GameCode.GDTutARObjects4= [];
gdjs.GameCode.GDRestartARObjects1= [];
gdjs.GameCode.GDRestartARObjects2= [];
gdjs.GameCode.GDRestartARObjects3= [];
gdjs.GameCode.GDRestartARObjects4= [];
gdjs.GameCode.GDScoreTitleENGObjects1= [];
gdjs.GameCode.GDScoreTitleENGObjects2= [];
gdjs.GameCode.GDScoreTitleENGObjects3= [];
gdjs.GameCode.GDScoreTitleENGObjects4= [];
gdjs.GameCode.GDScoreTitleARObjects1= [];
gdjs.GameCode.GDScoreTitleARObjects2= [];
gdjs.GameCode.GDScoreTitleARObjects3= [];
gdjs.GameCode.GDScoreTitleARObjects4= [];
gdjs.GameCode.GDRedoObjects1= [];
gdjs.GameCode.GDRedoObjects2= [];
gdjs.GameCode.GDRedoObjects3= [];
gdjs.GameCode.GDRedoObjects4= [];
gdjs.GameCode.GDGameBGObjects1= [];
gdjs.GameCode.GDGameBGObjects2= [];
gdjs.GameCode.GDGameBGObjects3= [];
gdjs.GameCode.GDGameBGObjects4= [];
gdjs.GameCode.GDExitObjects1= [];
gdjs.GameCode.GDExitObjects2= [];
gdjs.GameCode.GDExitObjects3= [];
gdjs.GameCode.GDExitObjects4= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.GameCode.GDExitObjects2);
gdjs.copyArray(runtimeScene.getObjects("Redo"), gdjs.GameCode.GDRedoObjects2);
gdjs.copyArray(runtimeScene.getObjects("Sky"), gdjs.GameCode.GDSkyObjects2);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(160);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}
{for(var i = 0, len = gdjs.GameCode.GDSkyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSkyObjects2[i].getBehavior("Opacity").setOpacity(120);
}
}
{gdjs.evtsExt__CameraShake__SetLayerShakable.func(runtimeScene, true, "", null);
}
{for(var i = 0, len = gdjs.GameCode.GDRedoObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRedoObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDExitObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDExitObjects2[i].deleteFromScene(runtimeScene);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14899396);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutAR"), gdjs.GameCode.GDTutARObjects2);
gdjs.copyArray(runtimeScene.getObjects("TutENG"), gdjs.GameCode.GDTutENGObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Screen Tap or Space to Boost");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("انقر الشاشة أو زر المسافة للدفع للأعلى");
}
{for(var i = 0, len = gdjs.GameCode.GDTutENGObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutENGObjects2[i].setX(gdjs.GameCode.GDTutENGObjects2[i].getX() + (32));
}
}
{for(var i = 0, len = gdjs.GameCode.GDTutARObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutARObjects2[i].setX(gdjs.GameCode.GDTutARObjects2[i].getX() + (32));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TutAR"), gdjs.GameCode.GDTutARObjects2);
gdjs.copyArray(runtimeScene.getObjects("TutENG"), gdjs.GameCode.GDTutENGObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTutENGObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutENGObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDTutARObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutARObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14901484);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Juhani Junkala [Chiptune Adventures] 2. Stage2.wav", true, 8, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sky"), gdjs.GameCode.GDSkyObjects2);
{for(var i = 0, len = gdjs.GameCode.GDSkyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSkyObjects2[i].setXOffset(gdjs.GameCode.GDSkyObjects2[i].getXOffset() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 1000));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.GameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}
}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14906292);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("TutAR"), gdjs.GameCode.GDTutARObjects2);
gdjs.copyArray(runtimeScene.getObjects("TutENG"), gdjs.GameCode.GDTutENGObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Jump");
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].setAngle(325);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Flapping", false, 12, gdjs.randomFloatInRange(0.25, 1));
}
{for(var i = 0, len = gdjs.GameCode.GDTutENGObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutENGObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDTutARObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutARObjects2[i].hide();
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallTopObjects2Objects = Hashtable.newFrom({"WallTop": gdjs.GameCode.GDWallTopObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallBottomObjects2Objects = Hashtable.newFrom({"WallBottom": gdjs.GameCode.GDWallBottomObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallTopObjects2Objects = Hashtable.newFrom({"WallTop": gdjs.GameCode.GDWallTopObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallBottomObjects2Objects = Hashtable.newFrom({"WallBottom": gdjs.GameCode.GDWallBottomObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallTopObjects1Objects = Hashtable.newFrom({"WallTop": gdjs.GameCode.GDWallTopObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallBottomObjects1Objects = Hashtable.newFrom({"WallBottom": gdjs.GameCode.GDWallBottomObjects1});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].rotateTowardAngle(90, 150, runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].behaviorActivated("PlatformerObject") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("WallBottom"), gdjs.GameCode.GDWallBottomObjects2);
gdjs.copyArray(runtimeScene.getObjects("WallTop"), gdjs.GameCode.GDWallTopObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallTopObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallBottomObjects2Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RespwanBottom"), gdjs.GameCode.GDRespwanBottomObjects2);
gdjs.copyArray(runtimeScene.getObjects("RespwanTop"), gdjs.GameCode.GDRespwanTopObjects2);
/* Reuse gdjs.GameCode.GDWallBottomObjects2 */
/* Reuse gdjs.GameCode.GDWallTopObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDRespwanTopObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRespwanTopObjects2[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallTopObjects2Objects, null);
}
}
{for(var i = 0, len = gdjs.GameCode.GDRespwanBottomObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRespwanBottomObjects2[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallBottomObjects2Objects, null);
}
}
{for(var i = 0, len = gdjs.GameCode.GDWallTopObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWallTopObjects2[i].setZOrder(4);
}
}
{for(var i = 0, len = gdjs.GameCode.GDWallBottomObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWallBottomObjects2[i].setZOrder(4);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallBottom"), gdjs.GameCode.GDWallBottomObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallTop"), gdjs.GameCode.GDWallTopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallTopObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallBottomObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDWallBottomObjects1 */
/* Reuse gdjs.GameCode.GDWallTopObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDWallTopObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWallTopObjects1[i].addForce(-(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))), 0, 0);
}
}
{for(var i = 0, len = gdjs.GameCode.GDWallBottomObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWallBottomObjects1[i].addForce(-(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))), 0, 0);
}
}
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Faster", 25, null);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Timer") <= 150;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RespwanBottom"), gdjs.GameCode.GDRespwanBottomObjects2);
gdjs.copyArray(runtimeScene.getObjects("RespwanTop"), gdjs.GameCode.GDRespwanTopObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(32);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).sub(0.2);
}
{for(var i = 0, len = gdjs.GameCode.GDRespwanTopObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRespwanTopObjects2[i].getBehavior("ObjectSpawner").SetSpawnPeriod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)), null);
}
}
{for(var i = 0, len = gdjs.GameCode.GDRespwanBottomObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRespwanBottomObjects2[i].getBehavior("ObjectSpawner").SetSpawnPeriod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)), null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Point", 60, null);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Score", false, 16, 0.8);
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallTopObjects3Objects = Hashtable.newFrom({"WallTop": gdjs.GameCode.GDWallTopObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallBottomObjects3Objects = Hashtable.newFrom({"WallBottom": gdjs.GameCode.GDWallBottomObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallTopObjects3Objects = Hashtable.newFrom({"WallTop": gdjs.GameCode.GDWallTopObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallBottomObjects3Objects = Hashtable.newFrom({"WallBottom": gdjs.GameCode.GDWallBottomObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRedoObjects3Objects = Hashtable.newFrom({"Redo": gdjs.GameCode.GDRedoObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExitObjects3Objects = Hashtable.newFrom({"Exit": gdjs.GameCode.GDExitObjects3});
gdjs.GameCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RestartAR"), gdjs.GameCode.GDRestartARObjects3);
gdjs.copyArray(runtimeScene.getObjects("RestartENG"), gdjs.GameCode.GDRestartENGObjects3);
{for(var i = 0, len = gdjs.GameCode.GDRestartENGObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRestartENGObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.GameCode.GDRestartARObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRestartARObjects3[i].hide();
}
}
}

}


};gdjs.GameCode.asyncCallback14919204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.GameCode.GDExitObjects3.length = 0;

gdjs.GameCode.GDRedoObjects3.length = 0;

{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRedoObjects3Objects, 385, 300, "Restart");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDExitObjects3Objects, 764, 24, "Restart");
}
{for(var i = 0, len = gdjs.GameCode.GDRedoObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRedoObjects3[i].getBehavior("Scale").setScale(6);
}
}
{for(var i = 0, len = gdjs.GameCode.GDExitObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDExitObjects3[i].getBehavior("Scale").setScale(4);
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Restart");
}

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.idToCallbackMap.set(14919204, gdjs.GameCode.asyncCallback14919204);
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.4), (runtimeScene) => (gdjs.GameCode.asyncCallback14919204(runtimeScene, asyncObjectsList)), 14919204, asyncObjectsList);
}
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.GameCode.GDTimeObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTimeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTimeObjects2[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), null));
}
}
}

}


{

gdjs.GameCode.GDPlayerObjects2.length = 0;

gdjs.GameCode.GDWallBottomObjects2.length = 0;

gdjs.GameCode.GDWallTopObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDPlayerObjects2_1final.length = 0;
gdjs.GameCode.GDWallBottomObjects2_1final.length = 0;
gdjs.GameCode.GDWallTopObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("WallTop"), gdjs.GameCode.GDWallTopObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallTopObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDWallTopObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDWallTopObjects2_1final.indexOf(gdjs.GameCode.GDWallTopObjects3[j]) === -1 )
            gdjs.GameCode.GDWallTopObjects2_1final.push(gdjs.GameCode.GDWallTopObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("WallBottom"), gdjs.GameCode.GDWallBottomObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallBottomObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDWallBottomObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDWallBottomObjects2_1final.indexOf(gdjs.GameCode.GDWallBottomObjects3[j]) === -1 )
            gdjs.GameCode.GDWallBottomObjects2_1final.push(gdjs.GameCode.GDWallBottomObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2_1final, gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(gdjs.GameCode.GDWallBottomObjects2_1final, gdjs.GameCode.GDWallBottomObjects2);
gdjs.copyArray(gdjs.GameCode.GDWallTopObjects2_1final, gdjs.GameCode.GDWallTopObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14916028);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Hit", false, 16, gdjs.randomFloatInRange(0.25, 1));
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}
}

}


{

gdjs.GameCode.GDPlayerObjects2.length = 0;

gdjs.GameCode.GDWallBottomObjects2.length = 0;

gdjs.GameCode.GDWallTopObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDPlayerObjects2_1final.length = 0;
gdjs.GameCode.GDWallBottomObjects2_1final.length = 0;
gdjs.GameCode.GDWallTopObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("WallTop"), gdjs.GameCode.GDWallTopObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallTopObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDWallTopObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDWallTopObjects2_1final.indexOf(gdjs.GameCode.GDWallTopObjects3[j]) === -1 )
            gdjs.GameCode.GDWallTopObjects2_1final.push(gdjs.GameCode.GDWallTopObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("WallBottom"), gdjs.GameCode.GDWallBottomObjects3);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallBottomObjects3Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDWallBottomObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDWallBottomObjects2_1final.indexOf(gdjs.GameCode.GDWallBottomObjects3[j]) === -1 )
            gdjs.GameCode.GDWallBottomObjects2_1final.push(gdjs.GameCode.GDWallBottomObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDPlayerObjects2_1final.indexOf(gdjs.GameCode.GDPlayerObjects3[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects2_1final.push(gdjs.GameCode.GDPlayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2_1final, gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(gdjs.GameCode.GDWallBottomObjects2_1final, gdjs.GameCode.GDWallBottomObjects2);
gdjs.copyArray(gdjs.GameCode.GDWallTopObjects2_1final, gdjs.GameCode.GDWallTopObjects2);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flash"), gdjs.GameCode.GDFlashObjects2);
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setString(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), null));
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
}
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].activateBehavior("PlatformerObject", false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("255;255;255", 0.01, "Flash", "Forward", 0, null);
}
}
{gdjs.evtsExt__CameraShake__StartShaking.func(runtimeScene, 0.2, null);
}
{gdjs.evtsExt__CameraShake__StopShaking.func(runtimeScene, 0.2, null);
}

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}
}

}


{

gdjs.GameCode.GDExitObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDExitObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.GameCode.GDExitObjects3);
for (var i = 0, k = 0, l = gdjs.GameCode.GDExitObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDExitObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDExitObjects3[k] = gdjs.GameCode.GDExitObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDExitObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDExitObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDExitObjects2_1final.indexOf(gdjs.GameCode.GDExitObjects3[j]) === -1 )
            gdjs.GameCode.GDExitObjects2_1final.push(gdjs.GameCode.GDExitObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDExitObjects2_1final, gdjs.GameCode.GDExitObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14923212);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDExitObjects2 */
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Start");
}
{for(var i = 0, len = gdjs.GameCode.GDExitObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDExitObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Redo"), gdjs.GameCode.GDRedoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDRedoObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDRedoObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDRedoObjects1[k] = gdjs.GameCode.GDRedoObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDRedoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14924108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Exit"), gdjs.GameCode.GDExitObjects1);
/* Reuse gdjs.GameCode.GDRedoObjects1 */
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}
{for(var i = 0, len = gdjs.GameCode.GDRedoObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRedoObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDExitObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDWallTopObjects1.length = 0;
gdjs.GameCode.GDWallTopObjects2.length = 0;
gdjs.GameCode.GDWallTopObjects3.length = 0;
gdjs.GameCode.GDWallTopObjects4.length = 0;
gdjs.GameCode.GDWallBottomObjects1.length = 0;
gdjs.GameCode.GDWallBottomObjects2.length = 0;
gdjs.GameCode.GDWallBottomObjects3.length = 0;
gdjs.GameCode.GDWallBottomObjects4.length = 0;
gdjs.GameCode.GDRespwanTopObjects1.length = 0;
gdjs.GameCode.GDRespwanTopObjects2.length = 0;
gdjs.GameCode.GDRespwanTopObjects3.length = 0;
gdjs.GameCode.GDRespwanTopObjects4.length = 0;
gdjs.GameCode.GDRespwanBottomObjects1.length = 0;
gdjs.GameCode.GDRespwanBottomObjects2.length = 0;
gdjs.GameCode.GDRespwanBottomObjects3.length = 0;
gdjs.GameCode.GDRespwanBottomObjects4.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScoreObjects3.length = 0;
gdjs.GameCode.GDScoreObjects4.length = 0;
gdjs.GameCode.GDFlashObjects1.length = 0;
gdjs.GameCode.GDFlashObjects2.length = 0;
gdjs.GameCode.GDFlashObjects3.length = 0;
gdjs.GameCode.GDFlashObjects4.length = 0;
gdjs.GameCode.GDRestartENGObjects1.length = 0;
gdjs.GameCode.GDRestartENGObjects2.length = 0;
gdjs.GameCode.GDRestartENGObjects3.length = 0;
gdjs.GameCode.GDRestartENGObjects4.length = 0;
gdjs.GameCode.GDRestartBGObjects1.length = 0;
gdjs.GameCode.GDRestartBGObjects2.length = 0;
gdjs.GameCode.GDRestartBGObjects3.length = 0;
gdjs.GameCode.GDRestartBGObjects4.length = 0;
gdjs.GameCode.GDSkyObjects1.length = 0;
gdjs.GameCode.GDSkyObjects2.length = 0;
gdjs.GameCode.GDSkyObjects3.length = 0;
gdjs.GameCode.GDSkyObjects4.length = 0;
gdjs.GameCode.GDTimeObjects1.length = 0;
gdjs.GameCode.GDTimeObjects2.length = 0;
gdjs.GameCode.GDTimeObjects3.length = 0;
gdjs.GameCode.GDTimeObjects4.length = 0;
gdjs.GameCode.GDWatter1Objects1.length = 0;
gdjs.GameCode.GDWatter1Objects2.length = 0;
gdjs.GameCode.GDWatter1Objects3.length = 0;
gdjs.GameCode.GDWatter1Objects4.length = 0;
gdjs.GameCode.GDWatter2Objects1.length = 0;
gdjs.GameCode.GDWatter2Objects2.length = 0;
gdjs.GameCode.GDWatter2Objects3.length = 0;
gdjs.GameCode.GDWatter2Objects4.length = 0;
gdjs.GameCode.GDWatter3Objects1.length = 0;
gdjs.GameCode.GDWatter3Objects2.length = 0;
gdjs.GameCode.GDWatter3Objects3.length = 0;
gdjs.GameCode.GDWatter3Objects4.length = 0;
gdjs.GameCode.GDTutENGObjects1.length = 0;
gdjs.GameCode.GDTutENGObjects2.length = 0;
gdjs.GameCode.GDTutENGObjects3.length = 0;
gdjs.GameCode.GDTutENGObjects4.length = 0;
gdjs.GameCode.GDTutARObjects1.length = 0;
gdjs.GameCode.GDTutARObjects2.length = 0;
gdjs.GameCode.GDTutARObjects3.length = 0;
gdjs.GameCode.GDTutARObjects4.length = 0;
gdjs.GameCode.GDRestartARObjects1.length = 0;
gdjs.GameCode.GDRestartARObjects2.length = 0;
gdjs.GameCode.GDRestartARObjects3.length = 0;
gdjs.GameCode.GDRestartARObjects4.length = 0;
gdjs.GameCode.GDScoreTitleENGObjects1.length = 0;
gdjs.GameCode.GDScoreTitleENGObjects2.length = 0;
gdjs.GameCode.GDScoreTitleENGObjects3.length = 0;
gdjs.GameCode.GDScoreTitleENGObjects4.length = 0;
gdjs.GameCode.GDScoreTitleARObjects1.length = 0;
gdjs.GameCode.GDScoreTitleARObjects2.length = 0;
gdjs.GameCode.GDScoreTitleARObjects3.length = 0;
gdjs.GameCode.GDScoreTitleARObjects4.length = 0;
gdjs.GameCode.GDRedoObjects1.length = 0;
gdjs.GameCode.GDRedoObjects2.length = 0;
gdjs.GameCode.GDRedoObjects3.length = 0;
gdjs.GameCode.GDRedoObjects4.length = 0;
gdjs.GameCode.GDGameBGObjects1.length = 0;
gdjs.GameCode.GDGameBGObjects2.length = 0;
gdjs.GameCode.GDGameBGObjects3.length = 0;
gdjs.GameCode.GDGameBGObjects4.length = 0;
gdjs.GameCode.GDExitObjects1.length = 0;
gdjs.GameCode.GDExitObjects2.length = 0;
gdjs.GameCode.GDExitObjects3.length = 0;
gdjs.GameCode.GDExitObjects4.length = 0;

gdjs.GameCode.eventsList7(runtimeScene);
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDWallTopObjects1.length = 0;
gdjs.GameCode.GDWallTopObjects2.length = 0;
gdjs.GameCode.GDWallTopObjects3.length = 0;
gdjs.GameCode.GDWallTopObjects4.length = 0;
gdjs.GameCode.GDWallBottomObjects1.length = 0;
gdjs.GameCode.GDWallBottomObjects2.length = 0;
gdjs.GameCode.GDWallBottomObjects3.length = 0;
gdjs.GameCode.GDWallBottomObjects4.length = 0;
gdjs.GameCode.GDRespwanTopObjects1.length = 0;
gdjs.GameCode.GDRespwanTopObjects2.length = 0;
gdjs.GameCode.GDRespwanTopObjects3.length = 0;
gdjs.GameCode.GDRespwanTopObjects4.length = 0;
gdjs.GameCode.GDRespwanBottomObjects1.length = 0;
gdjs.GameCode.GDRespwanBottomObjects2.length = 0;
gdjs.GameCode.GDRespwanBottomObjects3.length = 0;
gdjs.GameCode.GDRespwanBottomObjects4.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScoreObjects3.length = 0;
gdjs.GameCode.GDScoreObjects4.length = 0;
gdjs.GameCode.GDFlashObjects1.length = 0;
gdjs.GameCode.GDFlashObjects2.length = 0;
gdjs.GameCode.GDFlashObjects3.length = 0;
gdjs.GameCode.GDFlashObjects4.length = 0;
gdjs.GameCode.GDRestartENGObjects1.length = 0;
gdjs.GameCode.GDRestartENGObjects2.length = 0;
gdjs.GameCode.GDRestartENGObjects3.length = 0;
gdjs.GameCode.GDRestartENGObjects4.length = 0;
gdjs.GameCode.GDRestartBGObjects1.length = 0;
gdjs.GameCode.GDRestartBGObjects2.length = 0;
gdjs.GameCode.GDRestartBGObjects3.length = 0;
gdjs.GameCode.GDRestartBGObjects4.length = 0;
gdjs.GameCode.GDSkyObjects1.length = 0;
gdjs.GameCode.GDSkyObjects2.length = 0;
gdjs.GameCode.GDSkyObjects3.length = 0;
gdjs.GameCode.GDSkyObjects4.length = 0;
gdjs.GameCode.GDTimeObjects1.length = 0;
gdjs.GameCode.GDTimeObjects2.length = 0;
gdjs.GameCode.GDTimeObjects3.length = 0;
gdjs.GameCode.GDTimeObjects4.length = 0;
gdjs.GameCode.GDWatter1Objects1.length = 0;
gdjs.GameCode.GDWatter1Objects2.length = 0;
gdjs.GameCode.GDWatter1Objects3.length = 0;
gdjs.GameCode.GDWatter1Objects4.length = 0;
gdjs.GameCode.GDWatter2Objects1.length = 0;
gdjs.GameCode.GDWatter2Objects2.length = 0;
gdjs.GameCode.GDWatter2Objects3.length = 0;
gdjs.GameCode.GDWatter2Objects4.length = 0;
gdjs.GameCode.GDWatter3Objects1.length = 0;
gdjs.GameCode.GDWatter3Objects2.length = 0;
gdjs.GameCode.GDWatter3Objects3.length = 0;
gdjs.GameCode.GDWatter3Objects4.length = 0;
gdjs.GameCode.GDTutENGObjects1.length = 0;
gdjs.GameCode.GDTutENGObjects2.length = 0;
gdjs.GameCode.GDTutENGObjects3.length = 0;
gdjs.GameCode.GDTutENGObjects4.length = 0;
gdjs.GameCode.GDTutARObjects1.length = 0;
gdjs.GameCode.GDTutARObjects2.length = 0;
gdjs.GameCode.GDTutARObjects3.length = 0;
gdjs.GameCode.GDTutARObjects4.length = 0;
gdjs.GameCode.GDRestartARObjects1.length = 0;
gdjs.GameCode.GDRestartARObjects2.length = 0;
gdjs.GameCode.GDRestartARObjects3.length = 0;
gdjs.GameCode.GDRestartARObjects4.length = 0;
gdjs.GameCode.GDScoreTitleENGObjects1.length = 0;
gdjs.GameCode.GDScoreTitleENGObjects2.length = 0;
gdjs.GameCode.GDScoreTitleENGObjects3.length = 0;
gdjs.GameCode.GDScoreTitleENGObjects4.length = 0;
gdjs.GameCode.GDScoreTitleARObjects1.length = 0;
gdjs.GameCode.GDScoreTitleARObjects2.length = 0;
gdjs.GameCode.GDScoreTitleARObjects3.length = 0;
gdjs.GameCode.GDScoreTitleARObjects4.length = 0;
gdjs.GameCode.GDRedoObjects1.length = 0;
gdjs.GameCode.GDRedoObjects2.length = 0;
gdjs.GameCode.GDRedoObjects3.length = 0;
gdjs.GameCode.GDRedoObjects4.length = 0;
gdjs.GameCode.GDGameBGObjects1.length = 0;
gdjs.GameCode.GDGameBGObjects2.length = 0;
gdjs.GameCode.GDGameBGObjects3.length = 0;
gdjs.GameCode.GDGameBGObjects4.length = 0;
gdjs.GameCode.GDExitObjects1.length = 0;
gdjs.GameCode.GDExitObjects2.length = 0;
gdjs.GameCode.GDExitObjects3.length = 0;
gdjs.GameCode.GDExitObjects4.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
