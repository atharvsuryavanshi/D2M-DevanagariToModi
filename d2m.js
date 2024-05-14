const devanagari = $('#devanagari');
const modi = $('#modi');
const convertBtn = $('#convert-btn');
const copyBtn = $('#copy-btn');

const scriptMap = {
    'अ': '𑘀', 'आ': '𑘁', 'इ': '𑘂', 'ई': '𑘃', 'उ': '𑘄', 'ऊ': '𑘅',
    'ऋ': '𑘆', 'ऋ': '𑘇', 'ऌ': '𑘈', 'ॡ': '𑘉', 'ए': '𑘊', 'ऐ': '𑘋',
    'ओ': '𑘌', 'औ': '𑘍',
    'ॲ': '𑘀𑙀', 'ऑ': '𑘁𑙀',
    'क': '𑘎', 'ख': '𑘏', 'ग': '𑘐', 'घ': '𑘑', 'ङ': '𑘒',
    'च': '𑘓', 'छ': '𑘔', 'ज': '𑘕', 'झ': '𑘖', 'ञ': '𑘗',
    'ट': '𑘘', 'ठ': '𑘙', 'ड': '𑘚', 'ढ': '𑘛', 'ण': '𑘜',
    'त': '𑘝', 'थ': '𑘞', 'द': '𑘟', 'ध': '𑘠', 'न': '𑘡',
    'प': '𑘢', 'फ': '𑘣', 'ब': '𑘤', 'भ': '𑘥', 'म': '𑘦',
    'य': '𑘧', 'र': '𑘨', 'ल': '𑘩', 'व': '𑘪',
    'श': '𑘫', 'ष': '𑘬', 'स': '𑘭', 'ह': '𑘮',
    'ळ': '𑘯',
    '्': '𑘿', 'ा': '𑘰', 'ि': '𑘱', 'ी': '𑘲', 'ु': '𑘳', 'ू': '𑘴',
    'ृ': '𑘵', 'ॄ': '𑘶', 'ॢ': '𑘷', 'ॣ': '𑘸', 'े': '𑘹', 'ै': '𑘺',
    'ो': '𑘻', 'ौ': '𑘼', 'ं': '𑘽', 'ः': '𑘾', 'ॅ': '𑙀',
    '१': '𑙑', '२': '𑙒', '३': '𑙓', '४': '𑙔', '५': '𑙕',
    '६': '𑙖', '७': '𑙗', '८': '𑙘', '९': '𑙙', '०': '𑙐',
    '!': '!', '"': '"', '#': '#', '$': '$', '%': '%', '&': '&',
    '\'': '\'', '(': '(', ')': ')', '*': '*', '+': '+', ',': ',',
    '-': '-', '.': '.', '/': '/', ':': ':', ';': ';', '<': '<',
    '=': '=', '>': '>', '?': '?', '@': '@', '[': '[', '\\': '\\',
    ']': ']', '^': '^', '_': '_', '`': '`', '{': '{', '|': '|',
    '}': '}', '~': '~', ' ': ' ', '\n': '\n', '\t': '\t'
}

$(document).ready(function () {
});

convertBtn.on('click', function () {
    const text = devanagari.val().trim();
    text === '' ? copyBtn.attr('disabled', true) : copyBtn.attr('disabled', false);
    let str = "";
    for (let c of text) {
        if (scriptMap[c]) {
            str += scriptMap[c];
        }
        else {
            str = `This text cannot be converted into Moḍī script because of letter '${c}'`;
            copyBtn.attr('disabled', true);
            break;
        }
    }
    modi.val(str);
});

copyBtn.on('click', function () {
    navigator.clipboard.writeText(modi.val()).then(function () {
        copyBtn.text("Copied");
        copyBtn.attr('disabled', true);
        setTimeout(function () {
            copyBtn.text("Copy");
            copyBtn.attr('disabled', false);
        }, 2000);
    }, function () {
        alert("Failed to copy text!");
    });
});