const promise = new Promise((resolevel, reject) => {
    let data = [
        {
          "userId": 10,
          "title": "Article Title Number 1",
          "description": "Article Description Number 1"
        },
        {
          "userId": 5,
          "title": "Article Title Number 2",
          "description": "Article Description Number 2"
        },
        {
          "userId": 5,
          "title": "Article Title Number 3",
          "description": "Article Description Number 3"
        },
        {
          "userId": 5,
          "title": "Article Title Number 4",
          "description": "Article Description Number 4"
        },
        {
          "userId": 5,
          "title": "Article Title Number 5",
          "description": "Article Description Number 5"
        },
        {
          "userId": 5,
          "title": "Article Title Number 6",
          "description": "Article Description Number 6"
        },
        {
          "userId": 25,
          "title": "Article Title Number 7",
          "description": "Article Description Number 7"
        },
        {
          "userId": 25,
          "title": "Article Title Number 8",
          "description": "Article Description Number 8"
        },
        {
          "userId": 15,
          "title": "Article Title Number 9",
          "description": "Article Description Number 9"
        },
        {
          "userId": 15,
          "title": "Article Title Number 10",
          "description": "Article Description Number 10"
        }
      ];
      if(data.length >= 5){
        resolevel(data);
      } else {
        reject(Error("Not enough data available."));
      }
    
    });

    promise.then(
        (resolve)=>{
            resolve.length = 5;
            return console.log(resolve);
        }
        
    );