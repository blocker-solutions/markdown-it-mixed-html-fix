/**
 * Fix Inline / Raw HTML tags followed by a link or image line break,
 *
 * Anytime a given scenario happens:
 *
 * ```
 * <some-tag>foo-bar</some-tag>
 * ![a](b.jpg)
 * ```
 *
 * A double line break is required between the raw HTML and the link block.
 */

// external regex declaration for the matcher.
const htmlBreakRegex = />\n/gi

// replace raw html single breaks with double breaks.
const replaceSingleBreakWithDoubleBreak = (src) => src.replace(htmlBreakRegex, '>\n\n')

// fix a block contents.
const fixBlockState = (state) => {
  state.src = replaceSingleBreakWithDoubleBreak(state.src)
}

// plugin apply method.
export default (md, options) => {
  // enable before normalize.
  md.core.ruler.before('normalize', 'fix-html-breaks', fixBlockState)
}
