window.addEventListener('DOMContentLoaded', function(){
    let input = document.querySelector("#input");
    input.addEventListener("input",endecode);
});

function endecode(){
    text = document.querySelector("#input").value;
    l = text.length;
    add_space_mono = false;

    // Decode
    let bin = "";
    let hex = ""
    for(var i=0; i < l; i++){
        bin_tmp = text.charCodeAt(i).toString(2);
        hex_tmp = text.charCodeAt(i).toString(16);

        let bin_len_tmp = 0;
        while(bin_len_tmp < bin_tmp.length){
            bin_len_tmp += 8
        }
        bin_char = ('00000000' + bin_tmp).slice(-bin_len_tmp)

        let hex_len_tmp = 0;
        while(hex_len_tmp < hex_tmp.length){
            hex_len_tmp += 2
        }
        hex_char = ('00' + hex_tmp).slice(-hex_len_tmp)

        bin += bin_char;
        hex += hex_char;
        // add spaces for each characters
    }

    let E_Binary = document.querySelector("#E_Binary");
    if(add_space_mono){
        E_Binary.value = bin.slice(0, -1);
    }else{
        E_Binary.value = bin;
    }

    let E_Hex = document.querySelector("#E_Hex");
    if(add_space_mono){
        E_Hex.value = hex.slice(0, -1);
    }else{
        E_Hex.value = hex;
    }

    let base64 = "";
    while(bin.length > 0){
        var tmp_bin = bin.slice(0,6).toString()
        if(tmp_bin.length < 6){
            tmp_bin = (tmp_bin + "000000").slice(0, 6);
        }
        var tmp_6 = parseInt(tmp_bin, 2);
        bin = bin.slice(6);
        if(0b000000 <= tmp_6 && tmp_6 <= 0b011001){
            var tmp_char = String.fromCharCode('A'.charCodeAt(0) + tmp_6);
        }else if(0b011010 <= tmp_6 && tmp_6 <= 0b110011){
            var tmp_char = String.fromCharCode('a'.charCodeAt(0) + tmp_6 - 0b011010);
        }else if(0b110100 <= tmp_6 && tmp_6 <= 0b111101) {
            var tmp_char = String.fromCharCode('0'.charCodeAt(0) + tmp_6 - 0b110100);
        }else if(tmp_6 == 0b111110){
            var tmp_char = '+';
        }else if(tmp_6 == 0b111111){
            var tmp_char = '-';
        }else{
            console.log('ERROR');
        }
        base64 += tmp_char;
    }
    console.log(base64);

    base64_pad_len = 0;
    while(base64_pad_len < base64.length){
        base64_pad_len += 4;
    }
    base64 = (base64 + "====").slice(0, base64_pad_len);
    let E_Base64 = document.querySelector("#E_Base64");
    E_Base64.value = base64;



}
