export const getFooter = async () => {
    try {
      const val = await fetch(`http://localhost:3000/api/footer`, {
        method: "GET",
      });
      const data = await val.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  