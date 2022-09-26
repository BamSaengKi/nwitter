import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import { doc, addDoc, collection, getDocs, onSnapshot, query, orderBy, QuerySnapshot } from "firebase/firestore";
const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  // const getNweets = async () => {
  //   const dbnweets = await getDocs(collection(dbService, "nweets"));
  //   // dbnweets.forEach((document) => console.log(document.data()))
  //   dbnweets.forEach((document) => {
  //     const nweetsObject = {
  //       ...document.data(),
  //       id: document.id,
  //     };
  //     setNweets((prev) => [document.data(), ...prev]);
  //   });
  // };


  useEffect(() => {
    // getNweets();
    const q = query(collection(dbService, "nweets")
    );
    onSnapshot(q, (Snapshot)=>{
      const nweetArray = Snapshot.docs.map((document)=>({
        
          id : document.id,
          ...document.data(),
        
      }));
      setNweets(nweetArray)
    })
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "nweets"), {
        text : nweet,
        createdAt: Date.now(),
        creatorId : userObj.uid,
      });
      console.log("Success");
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("Something worng");
      console.log("Error adding document: ", error);
    }
    setNweet("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
