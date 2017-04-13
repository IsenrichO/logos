
/*
 * Constant are most recognizable in that they are referred to using ALL-CAPS, in
 *  line with what JavaScript best practices dictates for true constants. Certain
 *  caveats bear mention:
 *
 *  > Some constants may be used in any of a variety of different but (within loosely
 *    defined bounds of precision) are collectively equivalent. These varietals may
 *    be recognized based on the presence of a here-defined standardized suffix.
 *    1.) The `_EXP` suffix is used to convey that the referred-to constant is given
 *        in its EXPanded for (usually up to 35 decimal places) and is most appropriate
 *        where non-arbitrary, higher degrees of precision are required (e.g., in
 *        contexts of mathematical analysis).
 *    2.) The `_ID` suffix is used to convey that the referred-to constant is given
 *        in the form of an IDentity expression; that is to say, as an exact equivalent
 *        whose value is held as an expression rather than a non-terminating or repeating
 *        (and, therefore, non-exact) decimal approximation.
 *    3.) The `_JS` suffix is used to convey that the referred-to constant is given
 *        as the equivalently, native JavaScript representation of the same contained
 *        as a static property of the `Math` object.
 *
 *  > Inline comments are included following many constants and are intended to provide
 *    greater context into what a particular constant (or a particular representation
 *    of some constant) is intended to do. In particular, those constants whose values
 *    are held as truncated floats (i.e., a decimal approximation) will often be
 *    followed with a short comment that includes some number followed by the `d.p.`
 *    abbreviation [<NUMBER> d.p.]. This signifies that said constant is given to
 *    NUMBER Decimal Places.
 */
