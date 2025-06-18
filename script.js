let header = document.querySelector('#header');
const textlogo = document.getElementById("text-logo")
window.addEventListener('scroll', () => {
    console.log("tutu")

    if (window.scrollY > 100) {
        header.classList.add('bg-vertfonce');
        textlogo.style.fill = "#fff"
    } else {
        header.classList.remove('bg-vertfonce');
        textlogo.style.fill = "#000"
    }
}
)



/*
Animation au scroll
*/
const images = document.querySelectorAll('.observe');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log("hey")
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
            console.log("intersection")
            // je referme l'accordeon actif
            closeActive()
            // J'ouvre le bon accordéon
            const id = entry.target.id.split("-")[1]
            console.log(id)

            const selected = document.querySelector("#acc-" + id)
            selected.classList.add("accordeon-open")
            if (selected) {
                const acc = selected.querySelector(".accordeon-content")
                acc.style.height = acc.children[0].clientHeight + "px"
            }

            // observer.unobserve(entry.target); // Ne plus observer une fois animée (optionnel)
        }
    });
}, {
    threshold: 1.0, // 100% visible
    // root: document.querySelector(".gauche"),
    //rootMargin: "16px"
});

images.forEach(img => {
    observer.observe(img);
});

function closeActive() {
    const tutu = document.querySelector(".accordeon-open")
    if (tutu) {
        tutu.children[1].style.height = "0px"
        tutu.classList.remove("accordeon-open")
    }

}
