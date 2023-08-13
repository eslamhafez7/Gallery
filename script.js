let images = document.images;
let currentPopup = null;


function getPopUp(imgs) {
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", () => {
            if(currentPopup) {
                currentPopup.remove()
            }
            let imgWrapper = document.createElement("div")
            imgWrapper.classList.add("img-wrapper");
            document.body.appendChild(imgWrapper);
            let wrapperImage = document.createElement("img");
            wrapperImage.classList.add("wrapper-image")
            wrapperImage.src = imgs[i].src;
            imgWrapper.appendChild(wrapperImage);
            let infoDiv = document.createElement("div");
            infoDiv.classList.add("info-div");
            imgWrapper.appendChild(infoDiv);
            let imgTitle = document.createElement("h3");
            imgTitle.textContent = `Product Title ${i+1}`
            let imgDescription = document.createElement("p");
            imgDescription.textContent = `
            Discover the exquisite details of our product. Crafted with care and precision, this item brings elegance and functionality together. Whether you're seeking style or substance, our product offers both in abundance. Experience the quality that sets us apart.${i + 1}
            `;
            infoDiv.appendChild(imgTitle);
            infoDiv.appendChild(imgDescription);
            let price = document.createElement("span");
            price.textContent = `Price is ${i * 20} $`;
            infoDiv.appendChild(price);
            let cartButton = document.createElement("button");
            cartButton.classList.add("cart-btn");
            cartButton.textContent = "Add To Cart";
            infoDiv.appendChild(cartButton)
            let close = document.createElement("span");
            close.classList.add("close");
            imgWrapper.appendChild(close);
            close.textContent = 'X'
            close.addEventListener("click", () => {
                close.parentElement.remove();
            })

            let count = document.createElement("span");
            count.classList.add("count");
            count.textContent = `${i + 1}`
            imgWrapper.appendChild(count);
            currentPopup = imgWrapper;
        })
    }
}
getPopUp(images);