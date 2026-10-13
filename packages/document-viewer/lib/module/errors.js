'use strict'

const UNABLE_TO_OPEN_FILE_TYPE = 'UNABLE_TO_OPEN_FILE_TYPE'
const NULL_PRESENTER = 'NULL_PRESENTER'
export const errorCodes = Object.freeze({
  UNABLE_TO_OPEN_FILE_TYPE,
  NULL_PRESENTER,
})
/**
 * TypeScript helper to check if an object has the `code` property.
 * This is used to avoid `as` casting when you access the `code` property on errors returned by the module.
 */
export const isErrorWithCode = (error) => {
  return error instanceof Error && 'code' in error
}
//# sourceMappingURL=errors.js.map
