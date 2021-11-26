class MyUploadAdapter {
  constructor(loader, axios) {
    this.loader = loader;
    this.axios = axios;
  }

  // Starts the upload process.
  upload() {
    return this.loader.file.then((file) => {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', file);
        this.axios
          .$post('/uploads', formData)
          .then((res) => {
            resolve({ default: res.data.url });
          })
          .catch((e) => {
            reject(new Error('Something went wrong'));
          });
      });
    });
  }
}

export default (editor, axios) => {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader, axios);
  };
};
