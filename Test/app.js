function changeFont (command) {
    document.execCommand(command, false, null);
}

function changeFontWithArg (command, arg) {
    document.execCommand(command, false, arg);
}

document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    editor.focus();
});





