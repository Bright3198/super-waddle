function deleteListing() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("deleteModal").innerHTML = this.responseText;
        }
    };
    xmlhttp.send();
}    
