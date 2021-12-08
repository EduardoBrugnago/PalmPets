interface Response {
  token: string;
  user: {
    email: string;
    name: string;
  } | null;
}

interface FindingEmail {
  user: {
    email: string;
    password: string;
    name: string;
  }
}

const userList = [
  {
      token: '123asd123',
      user: {
        email: 'admin@admin.com',
        password: 'admin',
        name: 'eduardo',
      },
  },
  {
      token: '678asd678',
      user: {
        email: 'admin2@admin.com',
        password: 'admin2',
        name: 'eduardo',
      },
  },
  {
      token: '456asd456',
      user: {
        email: 'eduvsk0@gmail.com',
        password: '1234',
        name: 'eduardo',
      },
  },
]


export async function signIn(user): Promise<Response> { 
  const userSignIn = await userList.find(item => item.user.email == user.email )

  if(userSignIn ? true : false) {
    if(user.password == userSignIn.user.password) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            token: userSignIn.token,
            user: {
              email: userSignIn.user.email,
              name: userSignIn.user.name,
            },
          });
        }, 1000);
      });
    } else {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(undefined);
        }, 1000);
      });
    }
  }  
}

