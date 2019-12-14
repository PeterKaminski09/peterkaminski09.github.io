var toggle = function (element) {
	element.classList.toggle('hidden');
};

var toggleUnit = function(initiallyCollapsedId, initiallyExpandedId) {
	toggle(document.getElementById(initiallyCollapsedId));
	toggle(document.getElementById(initiallyExpandedId));
};

const IOS_COLLAPSED_SECTION = "ios-collapsed";
const IOS_EXPANDED_SECTION = "ios-expanded";
const WEB_COLLAPSED_SECTION = "web-collapsed";
const WEB_EXPANDED_SECTION = "web-expanded";
const ABOUT_COLLAPSED_SECTION = "about-collapsed";
const ABOUT_EXPANDED_SECTION = "about-expanded";

document.getElementById(IOS_COLLAPSED_SECTION).onclick = () => toggleUnit(IOS_COLLAPSED_SECTION, IOS_EXPANDED_SECTION);
document.getElementById("ios-pin").onclick = () => toggleUnit(IOS_COLLAPSED_SECTION, IOS_EXPANDED_SECTION);
document.getElementById(WEB_COLLAPSED_SECTION).onclick = () => toggleUnit(WEB_COLLAPSED_SECTION, WEB_EXPANDED_SECTION);
document.getElementById("web-pin").onclick = () => toggleUnit(WEB_COLLAPSED_SECTION, WEB_EXPANDED_SECTION);
document.getElementById(ABOUT_COLLAPSED_SECTION).onclick = () => toggleUnit(ABOUT_COLLAPSED_SECTION, ABOUT_EXPANDED_SECTION);
document.getElementById("about-pin").onclick = () => toggleUnit(ABOUT_COLLAPSED_SECTION, ABOUT_EXPANDED_SECTION);