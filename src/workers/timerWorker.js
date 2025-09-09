self.onmessage = function (event) {
  console.log('WORKER RECIBIO: ', event.data);
  switch (event.data) {
    case 'FAVOR': {
      self.postMessage('Si, puedo hacerte un favor');
      break;
    }
    case 'DI_HOLA': {
      self.postMessage('OK: HOLA!');
      break;
    }
    case 'CERRAR': {
      self.postMessage('Esta bien, voy a cerrar');
      self.close();
      break;
    }
    default:
      self.postMessage('No entendi');
  }
};
