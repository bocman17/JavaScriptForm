document.getElementById("test-form").addEventListener("submit", function(e) {
    // vypnutí výchozí chování formuláře
    e.preventDefault()

    // načtení hodnot z políček
    let firstName = e.target.elements.firstName.value
    let lastName = e.target.elements.lastName.value
    let email = e.target.elements.email.value

    // Vytvoříme odstavec a přidáme do něj hodnoty
    let paragraph = document.createElement("p")
    paragraph.innerHTML = `Jméno: ${firstName} <br> Příjmení: ${lastName} <br> Email: ${email}`
    document.getElementById("from-form").appendChild(paragraph)


    // po odeslání vymažeme obsah z políčka
    e.target.elements.firstName.value = ""
    e.target.elements.lastName.value = ""
    e.target.elements.email.value = ""
})