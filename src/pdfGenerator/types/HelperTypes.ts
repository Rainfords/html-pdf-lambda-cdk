/**
 * This function returns the generated buffer for a PDF file
 *
 * @param {string} html - Manual Content as HTML string
 * @param {PDFOptions} options - Options to create a PDF file
 * @returns {Promise<Buffer | Error>}
 */
import { PDFOptions } from 'puppeteer-core';

export type GetPDFBuffer = (
  html: string,
  options: PDFOptions,
) => Promise<Buffer | Error>;
