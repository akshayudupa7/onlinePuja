export const getOccassion = async () => {
    try {
      const val = await fetch(`http://localhost:3000/api/occassion`, {
        method: "GET",
      });
      const data = await val.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  