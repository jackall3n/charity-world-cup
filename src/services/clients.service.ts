import ApiService from './api.service'

class ClientsService {
    private apiService = new ApiService({
        baseURL: '/aws/service/secure/client'
    });

    get() : Promise<any[]> {
        return this.apiService.get<any>({
            url: 'retrieve',
            authorise: true
        }).then(clients => {
            return clients.map(client => ({
                id: client.clientNumberNameDetails[0].clientNumber,
                name: {
                    full: client.clientName,
                    first: client.firstName,
                    last: client.lastName
                }
            }))
        })
    }
    
    getDetails(clientId) : Promise<any> {
        return this.apiService.post<any>({
            url: 'customer/details',
            baseURL: '/gateway/aws/client/v1',
            body: {
                clientNumbers: [clientId]
            },
            authorise: true
        }).then(details => {
            return details.investorViewDetails[0]
        })
    }
    
    getAccountSummary(clientId) : Promise<any> {
        return this.apiService.post<any>({
            url: 'acc-txns/v1/service/accounts-holdings',
            baseURL: '/gateway/aws/client',
            body: {
                customerNumber: clientId,
            },
            authorise: true
        }).then(accounts => {
            return accounts
        })
    }
    
    getTransactions(clientId) : Promise<any> {
        return this.apiService.post<any>({
            url: 'acc-txns/v1/service/transactions',
            baseURL: '/gateway/aws/client',
            body: {
                "helpLinkId":"helpDashboradTransactions",
                "cdb":clientId,
                "fromDate":null,
                "toDate":null,
                "fromInceptionDate":"10/02/2005",
                "toInceptionDate":null,
                "accountNumbers":[],
                "transactionTypes":[],
                "startIndex":1,
                "endIndex":50,
                "accountIndex":0,
                "transactionSortBy":"deal",
                "sortOrder":"Descending"
            },
            authorise: true
        }).then(transactions => {
            return transactions
        })
    }
}

export default ClientsService;