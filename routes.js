import React from 'react';
import Header from './Component/Header';
import Quanly_app from './Component/quanly_app';
import Letan_app from './Component/letan_app';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Header />
    },
    {
        path : '/letan',
        exact : false,
        main : () => <Letan_app />
    },
    {
        path : '/quanly',
        exact : false,
        main : () => <Quanly_app />
    }
];

export default routes;