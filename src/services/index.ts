export const API_URL = 'https://api.themoviedb.org/3/';
export const token = process.env.ACCESS_TOKEN;

const options = {
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + token,
    // 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzM0MTU2ZjNlM2VmM2RlNTY3YmI5ZWZhYjI5ZDlkYSIsInN1YiI6IjY0YWMzYzJmM2UyZWM4MDBjYmNlZmE0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0mpaUWM3IoGEC9QY0K8JHJopHevgtsWLviDjOmKy2uw',
  },
};

export const fetchData = async (pathname: string, query = '') => {
   try {

     const res = await fetch(`${API_URL}${pathname}?&${query}`, options);
     
     return res.json();
    } catch(err:any) {
      throw new Error(err.message)
    }
};
