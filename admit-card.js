

let popupWindow = null;

function openImagePopup(link) {
    if (popupWindow === null || popupWindow.closed) {
        popupWindow = window.open(link.href, 'AdmitCardImagePopup', 'width=800, height=600');
    } else {
        popupWindow.focus();
    }

    return false; 
}
