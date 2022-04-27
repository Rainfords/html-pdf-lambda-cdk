// @ts-ignore
import * as chromium from 'chrome-aws-lambda';
import { GetPDFBuffer } from './types/HelperTypes';
import { PDFOptions } from 'puppeteer-core';

export class PdfHelper {
  static getPDFBuffer: GetPDFBuffer = async (
    html: string,
    options: PDFOptions,
  ) => {
    let browser = null;
    try {
      const executablePath = process.env.IS_OFFLINE
        ? undefined
        : await chromium.executablePath;

      // Create new chrome headless browser
      browser = await chromium.puppeteer.launch({
        headless: true,
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath,
      });

      // Create New Page
      const page = await browser.newPage();

      // Set Content and wait until its rendered
      await page.setContent(html, { waitUntil: 'domcontentloaded' });

      // Return the printed PDF
      return await page.pdf(options);
    } catch (error) {
      return Error(
        `There has been an error rendering a PDF, error was ${error}`,
      );
    } finally {
      if (browser !== null) {
        await browser.close();
      }
    }
  };
}
