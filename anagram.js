// ANAGRAM
// RETURN TRUE IF ANAGRAM AND FALSE IF NOT

// An anagram is going to be 2 strings that we pass in and they have to have the same exact characters
// Example
// 'elbow' === 'below'
// 'Dormitory' === 'dirty room'
// They have the same characters


function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2)
}

// Helper function
function formatStr(str) {
    return str 
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

const output = isAnagram('elbow', 'below');

console.log(output);