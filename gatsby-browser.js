import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';

import React from 'react';
import { Layout } from './src/components/Layout.js';

export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <Layout {...props}>{element}</Layout>
);
