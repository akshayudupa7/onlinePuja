export const postRegister = async (store:any) => {
    try {
      const val = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers as needed
          },
          body: JSON.stringify(store)
      },
    
  
      );
      const data = await val.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const postLogin = async (store:any) => {
    try {
      const val = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            // Add any other headers as needed
          },
          body: JSON.stringify(store)
      },
    
  
      );
      const data = await val.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  