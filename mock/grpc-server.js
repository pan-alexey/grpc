const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.resolve(process.cwd(), './proto/external.proto');

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const newsProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
server.addService(newsProto.external.ExternalService.service, {
  getTestList: (point, callback) => {
    callback(null, {
      list: [
        {
          id: point.request.id || -1,
          title: point.request.text || '',
          body: '3',
        },
      ],
    });
  },
  getTest: (_, callback) => {
    callback(null, {
      id: 1,
      title: '2',
      body: '3',
    });
  },
});

server.bindAsync(
  '127.0.0.1:50051',
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log('GRPC server running at http://127.0.0.1:50051');
    server.start();
  },
);
