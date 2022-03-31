import RequestData from '../models/RequestData';

class RequestDataService {
  async saveRequest(methodUsed: string, dataReturned: []) {
    const requestData = new RequestData({ methodUsed, dataReturned });

    await requestData.save();
  }

  async getAllRequests() {
    return await RequestData.find({});
  }

  async updateRequestById(requestId: string, newRequest: Object) {
    await RequestData.findByIdAndUpdate(requestId, newRequest);
  }

  async deleteRequestById(requestId: string) {
    await RequestData.findByIdAndDelete(requestId);
  }
}

export default RequestDataService;
