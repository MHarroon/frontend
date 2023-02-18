axios({
    method: 'POST',
    url: 'http://127.0.0.1:8000/api/ApplicationForm',
    data: formData,
    headers: {
        'Content-Type': "multipart/form-data",
    },
  }).then(response => {
         console.log(response);
         // console.target.reset();
     })
     .catch(error => {
         console.log(error);
     });


    