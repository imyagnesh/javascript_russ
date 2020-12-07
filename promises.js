// Promise
// resolve, reject, pending

const Login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("token");
      }, 2000);
    });
  };
  
  const Login1 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("token");
        }, 3000);
      });
    };
  
    const Login2 = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("token");
        }, 1000);
      });
    };
  
  const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject(`getData`);
      }, 1000);
    });
  };
  
  // const getData1 = (data) => {
  //     return new Promise((resolve, reject) => {
  //         resolve(`get data 1 ${data}`)
  //     })
  // }
  
  const callApi = async () => {
    try {
      console.time('prom')
      // execute all your promise parallaly
      const prom = await Promise.race([
          Login(),
          Login1(),
          Login2()
      ])
      console.log(prom)
      console.timeEnd('prom')
      } catch (error) {
          console.log(error);
    }
  };
  
  callApi();
  
  console.log("hello");
  
  // old javascript
  // Login()
  // .then(data => {
  //     getData(data)
  //     .then(res => {
  //         getData1(res)
  //         .then(res1 => {
  //             console.log(res1)
  //         })
  //     })
  // })

  // Normal Promise
// Promise.all
// Promse.allSettled
// Promise.race
// Promise.any

// async -> await function
// To execute any promise have to append await keyword
// have to make function as async
// for error handling use try/catch
  