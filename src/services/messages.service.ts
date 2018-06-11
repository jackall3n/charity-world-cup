import ApiService from './api.service'

class MessagesService {
    private apiService = new ApiService({
        baseURL: '/gateway/aws/securemessage/v1'
    });

    getUnread(advisorIdentifier: string): Promise<number> {
        return this.apiService.post<any>({
            url: 'unreadCount',
            authorise: true,
            body: {
                "context": {
                    "callerReference": "countUnreadMessage",
                    "channel": "UKWeb",
                    "initiatedBy": "CUSTOMER"
                },
                "partyRefNumber": advisorIdentifier
            }
        }).then(response => {
            let {messageCount} = response;
            return messageCount;
        })
    }
}

export default MessagesService;
