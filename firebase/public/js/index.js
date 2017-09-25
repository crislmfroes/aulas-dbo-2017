const provider = new firebase.auth.GoogleAuthProvider();
const thumbnail = document.querySelector('a.thumbnail img');
const divLogado = document.querySelector('div.logado');
const divNaoLogado = document.querySelector('div.naologado');
document.querySelector('div.naologado a')
    .addEventListener('click', function (e) {
    firebase.auth().signInWithRedirect(provider);
});
document.querySelector('div.logado a').addEventListener('click', function (e) {
    firebase.auth().signOut().then(function () {
        onSignOut();
    }).catch(function (error) {
        console.log(error);
    });
});
firebase.auth().getRedirectResult().then(function (result) {
    let user = result.user;
    onLogin(user);
}).catch(function (error) {
    console.log(error);
});
function onLogin(user) {
    thumbnail.src = user.photoURL;
    divLogado.style.display = 'block';
    divNaoLogado.style.display = 'none';
}
function onSignOut() {
    divLogado.style.display = 'none';
    divNaoLogado.style.display = 'block';
}
