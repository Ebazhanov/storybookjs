import { configure } from '@storybook/react';
import '../src/index.css';
import requireContext from 'require-context.macro';

const req = requireContext('../src/components', true, /\.stories\.js$/);
configure(req, module);
