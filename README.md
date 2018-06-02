# @blocker/markdown-it-mixed-html-fix

Fix Inline / Raw HTML tags followed by a link or image line break,

Anytime a given scenario happens:

```markdown
<some-tag>foo-bar</some-tag>
![a](b.jpg)
```

A double line break is required between the raw HTML and the link block.


### Install

```
npm install --save @blocker/markdown-it-mixed-html-fix
// or
yarn add @blocker/markdown-it-mixed-html-fix
```


### Usage

```
const MarkdownIt = require('markdown-it')
const htmlFix = require('@blocker/markdown-it-mixed-html-fix')

const md = new MarkdownIt()
md.use(htmlFix)
```
