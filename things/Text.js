export function Para(text) {
    return Thing("p", {}, [ text ])
}

export function Header(text, level = 1) {
    return Thing(`h${level}`, {}, [ text ])
}