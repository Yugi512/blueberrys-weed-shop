import React, {useState, useEffect} from 'react'
//update user email password
//later figure out how to update and check to see if a username is available

interface user{
    // id: string
    username: string
    firstName: string
    lastName: string
    email: string
    // password: string
    // role: "USER" | "ADMIN" | null
    // lastActivityDate: string | null
    // createdAt: Date | null
    // modifiedAt: Date | null
}

// a button on the side of the displayed information that says add + and at the top will be the edit button but for now we just the add button and we have to make it so that the divs are collapsable, and so is the information, as in
// if there are many addresses added for one person then we either limit it to 2 or we make it so that we title them and index them when we retrieve the address and then we make it so that it only displays the first address line and then if the user presses on the div that has that address it will un collapse and show the address and wha not so basically look up a video on css styling how to make it happen but display all information first and foremost and add the forms to add stuff
// for later use
// {/*<div>*/}
// {/*    <label htmlFor="mobile">Mobile</label>*/}
// {/*    <input*/}
// {/*    id="mobile"*/}
// {/*    placeholder={`${userInfo.mobile}`}*/}
// {/*    />*/}
// {/*</div>*/}
// {/*<div>*/}
// {/*    <div>*/}
// {/*        <label htmlFor="old-password">Old Password</label>*/}
// {/*        <input*/}
// {/*            id="password"*/}
// {/*            placeholder={``}*/}
// {/*        />*/}
// {/*    </div>*/}
// {/*    <div>*/}
// {/*        <label htmlFor="new-password">New Password</label>*/}
// {/*        <input*/}
// {/*        id="password"*/}
// {/*        placeholder={``}*/}
// {/*        />*/}
// {/*    </div>*/}
// {/*</div>*/}


const UserInformation = ({username} : {username: string}) => {
    const [userInfo,setUserInfo] = useState<user | any>({
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    useEffect(() => {
            fetch(`http://localhost:3000/api/users/${username}`)
                .then(response => response.json())
                .then(data => setUserInfo({
                    userName: data[0].username,
                    firstName: data[0].firstName,
                    lastName: data[0].lastName,
                    email: data[0].email,
                }))
                .catch(e => console.log(e));
    }, []);

    function handleChange(event: any){
        setUserInfo({
            ...userInfo,
            [event.target.id]: event.target.value
        });
    }

    function handleSubmit(e:any){
        e.preventDefault();
        fetch(`http://localhost:3000/api/users/${username}`,
            {method: "PATCH",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(userInfo)
            })
            .then(response => response.json())
            .then(user => setUserInfo(user));
    }
    // console.log(userInfo);
    return (
        <div>
            <h1> Edit profile</h1>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input
                            id="userName"
                            type="text"
                            value={userInfo.userName}
                            placeholder={`${userInfo.userName!}`}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="first-name">First Name: </label>
                        <input
                            id="firstName"
                            type="text"
                            value={userInfo.firstName}
                            placeholder={`${userInfo.firstName!}`}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name: </label>
                        <input
                            id="lastName"
                            type="text"
                            value={userInfo.lastName}
                            placeholder={`${userInfo.lastName!}`}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            id="email"
                            type="text"
                            value={userInfo.email}
                            placeholder={`${userInfo.email!}`}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input type="submit" name="submit" value="Update Profile"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UserInformation
