import serverInstance from '../index';

const app = serverInstance.getApp;
const apiBase = serverInstance.getApiBase;
const serverApp = serverInstance.getServerApp;

export { app, apiBase, serverApp };
