export function Thing(type, dna = {}, children = []) {
    return {
        type,
        dna,
        children,
    }
}