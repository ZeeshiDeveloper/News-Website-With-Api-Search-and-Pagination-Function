import { useEffect } from "react";


const Stories = () => {
    let isLoading = true;
    let Api = "http://hn.algolia.com/api/v1/search?query=react";
    
    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)            
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchApiData(Api);
    },[]);    

    if(isLoading){
       return(
            <section>
                    <h2>
                        Loading....
                    </h2>
            </section>
       );
    }
  return (
    <div>
      <h2>Stories</h2>
    </div>
  )
}

export default Stories;