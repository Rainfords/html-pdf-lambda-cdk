import * as ReactDOMServer from 'react-dom/server';
import { ReactElement } from 'react';

export interface ComponentProps {
  payload: any;
}
export const renderComponent = (
  component: (componentProps: ComponentProps) => ReactElement,
  props: ComponentProps,
): string => {
  return ReactDOMServer.renderToStaticMarkup(component(props));
};
