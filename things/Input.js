export function TextInput(ghost = "", auto = "") {
    return Thing("input", {
        type: "text",
        placeholder: ghost,
        value: auto
    })
}

export function PasswordInput(ghost = "", auto = "") {
    return Thing("input", {
        type: "password",
        placeholder: ghost,
        value: auto
    })
}

export function FileInput(formats = "") {
    return Thing("input", {
        type: "file",
        accept: formats
    })
}

export function TelephoneInput(ghost = "", auto = "") {
    return Thing("input", {
        type: "tel",
        placeholder: ghost,
        value: auto
    })
}
