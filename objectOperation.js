const user = {
    name: "Yagnesh",
    age: 33,
    gender: "male",
  };
  
  // Mutable -> change original object -> low performace process -> mamory managemeent
  // Immutable -> wont change original object -> performace is good -> low memmory management
  
  // React -> facebook -> immutable
  // Vue -> immutable
  // angular -> google -> immutable
  
  // Crud operation using immutable
  
  // add property
  // spread operator
  const newUser = { ...user, education: "gradute" };
  console.log("🚀 ~ file: Untitled-1 ~ line 20 ~ newUser", newUser)
  
  const updateUser = {...user, age: 30}
  
  console.log("🚀 ~ file: Untitled-1 ~ line 23 ~ updateUser", updateUser)
  
  // read property
  // 1st option
  console.log(user.age)
  // 2nd option
  console.log(user['age'])
  // 3rd option
  // descructuring
  const { age } = user;
  console.log(age)
  
  // alias of property
  const name = "RUSS";
  const { name: userName } = user;
  console.log("🚀 ~ file: Untitled-1 ~ line 37 ~ userName", userName)
  
  const { name: abc, ...restUser } = user;
  console.log("🚀 ~ file: Untitled-1 ~ line 41 ~ restUser", restUser)
  console.log("🚀 ~ file: Untitled-1 ~ line 41 ~ abc", abc)
  
  