import { configure } from '@storybook/react';
import '../src/index.css';
import requireContext from 'require-context.macro';

// automatically import all files ending in *.stories.js
configure(requireContext('../src', true, /\.stories\.js$/), module);
