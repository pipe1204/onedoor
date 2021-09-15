import { getApi } from '../api';

export const getCompanyByURLEffect = async (storedLink) => {
    try {
        const response = await getApi().get(
            `customer/${storedLink}`
        );
        return response.data;
    } catch (e) {
        console.error(`Error loading company`, e);
        return [];
    }
};

export const createCustomerEffect = async (customer) => {
    try {
        const response = await getApi().post(
            `customer/registerLoginCustomer`, customer
        );
        return response.data;
    } catch (e) {
        console.error(`Error register customer`, e);
        return [];
    }
}

export const getCustomersByBranchEffect = async (branchId) => {
    try {
        const response = await getApi().get(
            `branchs/users/${branchId}`, {
            // headers: {'Authorization': 'Bearer' + }
        });
        return response.data.branch;
    } catch (e) {
        console.error(`Error getting customer`, e);
        return [];
    }
}