import { useCallback, useRef, useState } from 'react';
import { getCompanyByURLEffect, createCustomerEffect, getCustomersByBranchEffect } from '../effects/customers';

const useCustomers = () => {
    const loading = useRef(false);
    const [company, setCompany] = useState([]);
    const [customer, setCustomer] = useState();
    const [representatives, setRepresentatives] = useState([]);

    const getCompanyByURL = useCallback(
        async (storedLink) => {
            try {
                loading.current = true;
                const response = await getCompanyByURLEffect(storedLink);
                setCompany(response.companie);
                loading.current = false;
            } catch (e) {
                console.error(`Error loading students`, e);
            }
        },
        [loading]
    );

    const createCustomer = useCallback(
        async (customer) => {
            try {
                loading.current = true;
                const response = await createCustomerEffect(customer);
                setCustomer(response.customer);
                loading.current = false;
            } catch (e) {
                console.error(`Error loading customer`, e);
            }
        },
        [loading]
    );

    const getRepresentativesByBranch = useCallback(
        async (customer) => {
            try {
                loading.current = true;
                const response = await getCustomersByBranchEffect(customer);
                let availableUsers = response.filter(item => item.isActive)
                setRepresentatives(availableUsers);
                return availableUsers
                loading.current = false;
            } catch (e) {
                console.error(`Error loading customers`, e);
            }
        },
        [loading]
    );

    const getRepresentatives = () => {
        return representatives
    }

    return {
        company,
        getCompanyByURL,
        createCustomer,
        customer,
        getRepresentativesByBranch,
        representatives,
        getRepresentatives
    };
};

export default useCustomers;
