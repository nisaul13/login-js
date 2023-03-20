
function login(){
    let frm = window.document.getElementById("login");
    let user = frm.name.value;
    let pass = frm.password.value;
    console.log(user);
    if (user == "mimin" && pass == "mimin123"){
        alert("Selamat Datang Mimin, Anda Administrator");
    } else if(user == "budi" && pass == "budi123"){
        alert('Selamat Datang Budi, Anda Operator');
    } else{
        alert('Maaf Anda Gagal Login');
    }
}