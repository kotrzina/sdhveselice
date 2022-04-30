const fs = require('fs');

const templateFile = 'articles/ArticleTemplate.tsx.template'
let template = fs.readFileSync(templateFile, 'utf8');

const today = new Date()
const replacements = [
    {"from": "YEAR", to: today.getFullYear()},
    {"from": "MONTH", to: (today.getMonth() + 1).toString()},
    {"from": "DAY", to: today.getDate().toString()},
    {"from": "MONTH_PAD", to: (today.getMonth() + 1).toString().padStart(2, "0")},
    {"from": "DAY_PAD", to: today.getDate().toString().padStart(2, "0")},
]

replacements.forEach(replacement => {
    template = template.replaceAll('${' + replacement.from + '}', replacement.to)
})

const articleFileName = `Article${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, "0")}${today.getDate().toString().padStart(2, "0")}.tsx`

fs.writeFileSync(`articles/${articleFileName}`, template)

console.log(`Article generated: ${articleFileName}`)
console.log(`Do not forget to add the article to ArticleList!`)
