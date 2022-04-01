import RequestData from '../models/RequestData';

class RequestDataService {
  public async saveRequest(methodUsed: string, dataReturned: []) {
    const requestData = new RequestData({ methodUsed, dataReturned });

    await requestData.save();
  }

  public async getAllRequests() {
    return await RequestData.find({});
  }

  public async updateRequestById(requestId: string, newRequest: Object) {
    await RequestData.findByIdAndUpdate(requestId, newRequest);
  }

  public async deleteRequestById(requestId: string) {
    await RequestData.findByIdAndDelete(requestId);
  }
}

export default RequestDataService;
