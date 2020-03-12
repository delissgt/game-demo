import axios from 'axios';

const backUrl = "http://localhost:5000";


export const EndPoints = (values) => {
    const data = {
        name: values["name"],
        enrollment : values['enrollment'],
        password: values['password'],
        role: 'student'
    };

  axios.post(backUrl+'/student', data)
      .then((response) => {
          console.log('response back', response);
      })
      .catch((error) => {
          console.log('ERROR', error);
      });
};
