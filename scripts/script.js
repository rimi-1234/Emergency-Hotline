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

function hideInvalidAlert() {
    const alertDiv = document.getElementById("custom-invalid-alert");
    alertDiv.classList.add("hidden"); // Hide alert
}
function hideCopyNumberAlert() {
    const alertDiv = document.getElementById("custom-copyNumber-alert");
    alertDiv.classList.add("hidden"); // Hide alert
}
function showvalidAlert() {
    const alertDiv = document.getElementById("custom-valid-alert");
    alertDiv.classList.remove("hidden"); // Show alert
}
function showCopyValid() {
    const alertDiv = document.getElementById("custom-copyNumber-alert");
    alertDiv.classList.remove("hidden"); // Show alert
}

function hideValidAlert() {
    const alertDiv = document.getElementById("custom-valid-alert");
    alertDiv.classList.add("hidden"); // Hide alert
}
const itemsDetails = getelement('js-iteams-detail');
const alertDiv = document.getElementById("custom-invalid-alert");
alertDiv.classList.add("hidden");
const alertValidDiv = document.getElementById("custom-valid-alert");
alertValidDiv.classList.add("hidden");
const alertCopyNumber = document.getElementById("custom-copyNumber-alert");
alertCopyNumber.classList.add("hidden");
document.addEventListener('DOMContentLoaded', () => {
    itemsDetails.addEventListener('click', function (e) {

        // console.log( e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText);
        // console.log()


        if (e.target.className.includes('js-btn-heart')) {
            const insitialHeart = getelementInnerText('js-intiial-heart');


            const currentHeart = insitialHeart + 1;
            getelement('js-intiial-heart').innerText = currentHeart;
        }




        if ((e.target.closest('.js-call-btn'))) {
            console.log(e.target);




            const intialCoin = getelementInnerText('js-intial-coin');


            if (intialCoin < 20) {
                showInvalidAlert();


                return;
            }
            const serviceName = e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText;

            const now = new Date();
            const formatted = now.toLocaleTimeString();

            const emergencyNumber = e.target.parentNode.parentNode.parentNode.children[2].children[0].innerText;


            getelement('js-valid-text').innerText = `Calling ${serviceName} ${emergencyNumber}...`;
            showvalidAlert();
            const currentCoin = intialCoin - 20;


            getelement('js-intial-coin').innerText = currentCoin;
            const container = getelement('js-history-container');
            const div = document.createElement('div');
            div.innerHTML = ` <div class=" flex justify-between px-10 p-5 md:px-3 items-center bg-[#fafafa] m-5 mt-0 rounded-md">
                <div>
                  <h1 class="text-[16px]">${serviceName}</h1>
                  <p class="text-[#5C5C5C] font-normal text-[14px]">${emergencyNumber}</p>
                </div>
                <p class="text-[#5C5C5C] font-normal">${formatted}</p>
              </div>`

            container.appendChild(div);
        }


        if ((e.target.closest('.js-copy-btn'))) {





            const emergencyNumber = e.target.parentNode.parentNode.parentNode.children[2].children[0].innerText;
            console.log(emergencyNumber);


            navigator.clipboard.writeText(emergencyNumber).then(() => {

             

                const insitialCopy = getelementInnerText('js-copy-initial');


                const currentCopy = insitialCopy + 1;
                getelement('js-copy-initial').innerText = currentCopy;
                getelement('js-copy-text').innerText = `Copied number is ${emergencyNumber}`;
                showCopyValid();

            }).catch(err => {
                console.error('Failed to copy:', err);

            });




        }





    });
});


const clearBtn = getelement('js-clear-btn');
clearBtn.addEventListener('click', function (e) {
    // console.log('clear button clicked');

    const container = getelement('js-history-container');
    // console.log(container);

    container.innerHTML = '';

})
