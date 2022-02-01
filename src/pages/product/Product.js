import React from'react';

import Workat from '../../components/atomic/Workat';
import ProductSpecific from '../../components/atomic/ProductSpecific';
import ManagementProduct from '../../components/atomic/ManagementProduct';
import Process from '../../components/atomic/Process';
import Strategies from '../../components/atomic/Strategies';
import CarPricing from '../../components/atomic/utilAtomic/CarPricing';
import JoinCompanies from '../../components/atomic/utilAtomic/JoinCompanie'
import Testimony from '../../components/atomic/Testimony';

export default function Product(){
    return(
        <>
            <Workat />
            <ProductSpecific />
            <ManagementProduct />
            <Process />
            <Strategies />
            <CarPricing />
            <Testimony />
            <JoinCompanies />
        </>
    );
}