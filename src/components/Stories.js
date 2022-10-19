import { useContext } from "react";
import { AppContext } from "./context";


const Stories = () => {
  const {hits, removeItem, isLoading} = useContext(AppContext);

    
    if(isLoading){
       return(
            <section>
                    <h1>
                        Loading....
                    </h1>
            </section>
       );
    }


  return (
    <div>
      <h2>My Tech News Stories</h2>
      {hits.map(current => {
        const {title, author, objectID, url, num_comments} = current;
        return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments}</span> comments
              </p>
              <div className="card-button">
                <a href={url} target="_blank">
                  Read More
                </a>
                <a href="#" onClick={() => removeItem(objectID)}>
                  Remove
                </a>                
              </div>
            </div>
        );
      })}
    </div>
  )
}

export default Stories;