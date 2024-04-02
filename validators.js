export function validateUsername(username) {
    let validatedUsername = username

    do {
        if (!validatedUsername || validatedUsername === null) {
            alert('Por favor introduce un nombre de usuario válido')
            validatedUsername = prompt("Elige un nombre de usuario")
        }
    }
    while (!validatedUsername || validatedUsername === null);


    return validatedUsername
}