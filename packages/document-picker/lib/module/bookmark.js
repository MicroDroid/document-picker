'use strict'

import { NativeDocumentPicker } from './spec/NativeDocumentPicker.js'

/**
 * Convert a file bookmark (that was obtained by selecting a file with long term
 * access requested) into a URI.
 */
export const bookmarkToURI = async (bookmark) => {
  return NativeDocumentPicker.bookmarkToURI(bookmark)
}
//# sourceMappingURL=bookmark.js.map
