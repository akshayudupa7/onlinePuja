export const getEventByCategory = async (id:any) => {
    try {
      const val = await fetch(`http://localhost:3000/api/event-by-category?id=${id}`, {
        method: "GET",
      });
      const data = await val.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  

  export const getEventByDetail = async (id:any) => {
    try {
      const val = await fetch(`http://localhost:3000/api/event-by-detail?id=${id}`, {
        method: "GET",
      });
      const data = await val.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getReview= async () => {
    try {
      const val = await fetch(`http://localhost:3000/api/review`, {
        method: "GET",
      });
      const data = await val.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getChoose= async () => {
    try {
      const val = await fetch(`http://localhost:3000/api/choose`, {
        method: "GET",
      });
      const data = await val.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  

  export const getProfile= async () => {
    try {
      const val = await fetch(`http://localhost:3000/api/profile`, {
        method: "GET",
      });
      const data = await val.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  