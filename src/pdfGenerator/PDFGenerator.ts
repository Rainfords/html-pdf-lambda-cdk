import { PdfHelper } from './PdfHelper';
import { GeneratorFunction } from './types/GeneratorTypes';
import { getTemplate } from './templates/pdf-template';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { PDFOptions } from 'puppeteer-core';
import * as ReactDOMServer from 'react-dom/server';
import { TestComponent } from '../templates/TestComponent';
import React from 'react';
import { ComponentProps, renderComponent } from '../ssRenderer';

export class PDFGenerator {
  /**
   * This function returns the buffer for a generated PDF of manual
   * @param {any} event - The object that comes for lambda which includes the http's attributes
   * @returns {Array<any>} array of Structure Instructions
   */
  static createPDF: GeneratorFunction = async (event: APIGatewayProxyEventV2) => {
    try {
      // const html = getTemplate({ name: 'Ian' });

      // TODO Get payload from the event body
      const props: ComponentProps = {
        payload: {
          name: 'Ian',
        },
      };

      // Render the component to plain html static markup
      const html = renderComponent(TestComponent, props);

      // Set PDF Options
      const options: PDFOptions = {
        format: 'a4',
        printBackground: true,
        margin: { top: '1in', right: '1in', bottom: '1in', left: '1in' },
      };

      // Generate the PDF
      const pdf = await PdfHelper.getPDFBuffer(html, options);

      return {
        headers: {
          'Content-type': 'application/pdf',
        },
        statusCode: 200,
        body: pdf.toString('base64'),
        isBase64Encoded: true,
      };
    } catch (error) {
      console.error('Error : ', error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error,
          message: 'Something went wrong',
        }),
      };
    }
  };
}
