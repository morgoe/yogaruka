/* Make all external links open in new tabs */
initExternalLinks();
function initExternalLinks() {
	$(document.links).filter(function() {
		return this.hostname != window.location.hostname;
	}).attr('target', '_blank');
}