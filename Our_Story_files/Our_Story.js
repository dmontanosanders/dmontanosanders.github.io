// Created by iWeb 2.0.4 local-build-20110118

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWStrokeParts([{rect:new IWRect(-6,6,12,185),url:'Our_Story_files/stroke.png'},{rect:new IWRect(-6,-6,12,12),url:'Our_Story_files/stroke_1.png'},{rect:new IWRect(6,-6,250,12),url:'Our_Story_files/stroke_2.png'},{rect:new IWRect(256,-6,12,12),url:'Our_Story_files/stroke_3.png'},{rect:new IWRect(256,6,12,185),url:'Our_Story_files/stroke_4.png'},{rect:new IWRect(256,191,12,13),url:'Our_Story_files/stroke_5.png'},{rect:new IWRect(6,191,250,13),url:'Our_Story_files/stroke_6.png'},{rect:new IWRect(-6,191,12,13),url:'Our_Story_files/stroke_7.png'}],new IWSize(262,197)),shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(0.0000,-1.0000),color:'#000000',opacity:0.500000}),stroke_0:new IWPhotoFrame([IWCreateImage('Our_Story_files/NewTravel_C_TL.png'),IWCreateImage('Our_Story_files/NewTravel_S_T.png'),IWCreateImage('Our_Story_files/NewTravel_C_TR.png'),IWCreateImage('Our_Story_files/NewTravel_S_R.png'),IWCreateImage('Our_Story_files/NewTravel_C_BR.png'),IWCreateImage('Our_Story_files/NewTravel_S_B.png'),IWCreateImage('Our_Story_files/NewTravel_C_BL.png'),IWCreateImage('Our_Story_files/NewTravel_S_L.png')],null,1,0.752632,71.000000,0.000000,62.000000,62.000000,83.000000,9.000000,73.000000,77.000000,8.000000,8.000000,8.000000,9.000000,null,null,null,0.400000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Our_Story_files/Our_StoryMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
