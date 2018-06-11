import ApiService from './api.service'

class InstructionService {
  private apiService = new ApiService({
    baseURL: '/gateway/aws/instruction/v1'
  });

  getAll(clientId: string): Promise<any[]> {
    return this.apiService.post<any>({
      url: 'instruction/aws',
      authorise: true,
      body: {
        "startIndex": 1,
        "maxPageLimit": 50,
        "cdbs": [clientId],
        "fromDate": "",
        "toDate": "",
        "dateFilterLabel": "LAST_30_DAYS",
        "quotesStatus": [],
        "instructionTypes": [],
        "instructionStatus": [],
        "investmentType": "",
        "colName": "LAST_UPDATED",
        "ascSort": false,
        "searchText": "",
        "uan": "170224"
      }
    }).then(response => {
      let { instructions } = response;
      console.log(instructions);
      return instructions;
    })
  }
}

export default InstructionService;
