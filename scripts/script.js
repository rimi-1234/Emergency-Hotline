function getelement(ID) {
    const element = document.getElementById(ID);
    return element;
}
function getelementInnerText(ID) {
    const element = document.getElementById(ID).innerText;
    return Number(element);
}
function showInvalidAlert() {
    const alertDiv = document.getElementById("custom-invalid-alert");
    alertDiv.classList.remove("hidden"); // Show alert
}

function hideAlert() {
    const alertDiv = document.getElementById("custom-invalid-alert");
    alertDiv.classList.add("hidden"); // Hide alert
}
const itemsDetails = getelement('js-iteams-detail');
const alertDiv = document.getElementById("custom-invalid-alert");
alertDiv.classList.add("hidden");
itemsDetails.addEventListener('click', function (e) {

    // console.log( e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText);
    // console.log()
   

    if (e.target.closest(".js-call-btn")) {
        const intialCoin = getelementInnerText('js-intial-coin');


        if (intialCoin < 20) {
             showInvalidAlert()
            return;
        }

        const currentCoin = intialCoin - 20;


        getelement('js-intial-coin').innerText = currentCoin;




    }
    if (e.target.className.includes('js-btn-heart')) {
        const insitialHeart = getelementInnerText('js-intiial-heart');


        const currentHeart = insitialHeart + 1;
        getelement('js-intiial-heart').innerText = currentHeart;
    }


})