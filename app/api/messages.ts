import { IMessage } from "../interface/message";
import apiClient from "./client";

const endpoint = "/messages";

const messagesApi = {
  send: (message: IMessage) => apiClient.post<IMessage>(endpoint, message),
};

export default messagesApi;
