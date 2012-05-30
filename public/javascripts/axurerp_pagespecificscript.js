
var PageName = 'Home';
var PageId = 'p4256b56d1e71414f97ac985098ac2443'
document.title = 'Home';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $SelectedCheckbox1 = '';

var $SelectedCheckbox2 = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURI(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: Variable values were truncated.');
}

function GetQuerystring() {
    return encodeURI('#OnLoadVariable=' + $OnLoadVariable + '&SelectedCheckbox1=' + $SelectedCheckbox1 + '&SelectedCheckbox2=' + $SelectedCheckbox2 + '&CSUM=1');
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[SelectedCheckbox1\]\]/g, $SelectedCheckbox1);
  value = value.replace(/\[\[SelectedCheckbox2\]\]/g, $SelectedCheckbox2);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad() {

}

document.body.insertAdjacentHTML("afterBegin", "<div id='pd0u44NoteContainer' style='position:absolute;left:0;top:0;width:3000;z-index:500'></div>");
document.getElementById('pd0u44NoteContainer').style.visibility = document.getElementById('pd0u44').style.visibility;

eval(GetDynamicPanelScript('u44', 1));

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u51 = document.getElementById('u51');

x = 0;
y = 0;
u51ann.insertAdjacentHTML("afterBegin", "<div id='u51Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u51', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u51'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u51based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u51base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u51based = document.getElementById('u51based');
            
u51based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> On click this whole content will be converted into Italian language<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div><div class='anncontent'><span class='annfieldname'>Risk:</span> High<BR><BR></div>");

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u31 = document.getElementById('u31');

u31.style.cursor = 'pointer';
if (bIE) u31.attachEvent("onclick", Clicku31);
else u31.addEventListener("click", Clicku31, true);
function Clicku31(e)
{

if (true) {

	NewWindow("Terms and conditions.html" + GetQuerystring(), "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}

}

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="Login page.html" + GetQuerystring();

}

}

var u27 = document.getElementById('u27');

u27.style.cursor = 'pointer';
if (bIE) u27.attachEvent("onclick", Clicku27);
else u27.addEventListener("click", Clicku27, true);
function Clicku27(e)
{

if (true) {

	self.location.href="Login page.html" + GetQuerystring();

}

}

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u0 = document.getElementById('u0');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u49 = document.getElementById('u49');

x = 0;
y = 0;
u49ann.insertAdjacentHTML("afterBegin", "<div id='u49Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u49', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u49'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u49based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u49base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u49based = document.getElementById('u49based');
            
u49based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> On click this whole content will be converted into english language<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div><div class='anncontent'><span class='annfieldname'>Risk:</span> High<BR><BR></div>");

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{

if (true) {

	self.location.href="Contact Us.html" + GetQuerystring();

}

}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u34 = document.getElementById('u34');

var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u48 = document.getElementById('u48');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u44 = document.getElementById('u44');

var u33 = document.getElementById('u33');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u13 = document.getElementById('u13');

var u47 = document.getElementById('u47');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u41 = document.getElementById('u41');

x = 0;
y = 0;
u41ann.insertAdjacentHTML("afterBegin", "<div id='u41Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u41', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u41'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u41based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u41base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u41based = document.getElementById('u41based');
            
u41based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> After providing their dob by selecting day, month &amp; year, the user clicks this button.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Critical<BR><BR></div><div class='anncontent'><span class='annfieldname'>Risk:</span> High<BR><BR></div>");

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", u41Click);
else u41.addEventListener("click", u41Click, true);
document.body.insertAdjacentHTML("afterBegin", "<DIV class='intcases' id='u41LinksClick'></DIV>")
var u41LinksClick = document.getElementById('u41LinksClick');
function u41Click(e) 
{

	ToggleLinks(e, 'u41LinksClick');
}

u41LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clicku4c7c5d47093446cc9971c424c07d47da()'>if user gives invalid date format</div>")
function Clicku4c7c5d47093446cc9971c424c07d47da()
{

	SetPanelVisibilityu44("");

	ToggleLinks(window.event, 'u41LinksClick');
}

u41LinksClick.insertAdjacentHTML("beforeEnd", "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='Clickue20dd505e3314900af5df9c52d7b62b9()'>If user is valid but not logged in...</div>")
function Clickue20dd505e3314900af5df9c52d7b62b9()
{

	self.location.href="User valid date without login.html" + GetQuerystring();

	ToggleLinks(window.event, 'u41LinksClick');
}

var u53 = document.getElementById('u53');

x = 0;
y = 0;
u53ann.insertAdjacentHTML("afterBegin", "<div id='u53Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u53', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u53'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u53based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u53base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u53based = document.getElementById('u53based');
            
u53based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> On click this whole content will be converted into japanese language<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Important<BR><BR></div><div class='anncontent'><span class='annfieldname'>Risk:</span> High<BR><BR></div>");

var u21 = document.getElementById('u21');

u21.style.cursor = 'pointer';
if (bIE) u21.attachEvent("onclick", Clicku21);
else u21.addEventListener("click", Clicku21, true);
function Clicku21(e)
{

if (true) {

	self.location.href="About.html" + GetQuerystring();

}

}

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u7 = document.getElementById('u7');

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="FAQ.html" + GetQuerystring();

}

}

var u40 = document.getElementById('u40');

x = 0;
y = 0;
u40ann.insertAdjacentHTML("afterBegin", "<div id='u40Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u40', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u40'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u40based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u40base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u40based = document.getElementById('u40based');
            
u40based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User select his birth year here.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Critical<BR><BR></div><div class='anncontent'><span class='annfieldname'>Risk:</span> High<BR><BR></div>");

var u17 = document.getElementById('u17');

var u5 = document.getElementById('u5');

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="About.html" + GetQuerystring();

}

}

var u15 = document.getElementById('u15');

var u3 = document.getElementById('u3');

u3.style.cursor = 'pointer';
if (bIE) u3.attachEvent("onclick", Clicku3);
else u3.addEventListener("click", Clicku3, true);
function Clicku3(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

	window.location.reload();

}

}

var u1 = document.getElementById('u1');

var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{

if (true) {

	self.location.href="Tell a friend.html" + GetQuerystring();

}

}

var u43 = document.getElementById('u43');

x = 0;
y = 0;
u43ann.insertAdjacentHTML("afterBegin", "<div id='u43Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u43', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u43'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u43based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u43base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u43based = document.getElementById('u43based');
            
u43based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> This link just redirect to About page.<BR><BR></div>");

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	self.location.href="About.html" + GetQuerystring();

}

}
gv_vAlignTable['u43'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u39 = document.getElementById('u39');

x = 0;
y = 0;
u39ann.insertAdjacentHTML("afterBegin", "<div id='u39Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u39', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u39'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u39based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u39base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u39based = document.getElementById('u39based');
            
u39based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> user select birth month here<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Critical<BR><BR></div><div class='anncontent'><span class='annfieldname'>Risk:</span> High<BR><BR></div>");

var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

	window.location.reload();

}

}

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="Tell a friend.html" + GetQuerystring();

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u46 = document.getElementById('u46');

var u38 = document.getElementById('u38');

x = 0;
y = 0;
u38ann.insertAdjacentHTML("afterBegin", "<div id='u38Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u38', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u38'));

document.body.insertAdjacentHTML("afterBegin", "<div id='u38based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u38base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u38based = document.getElementById('u38based');
            
u38based.insertAdjacentHTML("beforeEnd", "<div class='anncontent'><span class='annfieldname'>Specification:</span> User selects his birth date here.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Status:</span> Proposed<BR><BR></div><div class='anncontent'><span class='annfieldname'>Benefit:</span> Critical<BR><BR></div><div class='anncontent'><span class='annfieldname'>Risk:</span> High<BR><BR></div>");

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{

if (true) {

	self.location.href="FAQ.html" + GetQuerystring();

}

}

if (window.OnLoad) OnLoad();
