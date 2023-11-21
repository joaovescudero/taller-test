function licenseKeyFormatting(S, K) {
    S = S.replace(/-/g, "").toUpperCase();
    const totalChars = S.length;
    const firstGroupLength = totalChars % K !== 0 ? totalChars % K : K;
    let result = S.slice(0, firstGroupLength);
    for (let i = firstGroupLength; i < totalChars; i += K) {
        result += "-" + S.slice(i, i + K);
    }
    return result;
}

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
console.log(licenseKeyFormatting("2-5g-3-J", 2));
