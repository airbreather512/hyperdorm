export function TextButton(text, onClick) {
    return Thing("button", { onClick }, [ text ])
}

export function IconButton(icon, onClick) {
    return Thing("button", { onClick }, [ icon ])
}
