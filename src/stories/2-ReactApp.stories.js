import React from 'react';
import App from '../App'

export default {
    title: 'App',
};

export const toStorybook = () =>
    <App/>;

toStorybook.story = {
    name: 'ReactApp',
};
