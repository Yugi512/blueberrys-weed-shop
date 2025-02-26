import React, {useEffect, useState} from 'react'
// make it like feels good page but moe aesthetically pleasing and with cooler visuals
interface userAddress{
    id: string,
    userID: string
    addressLineOne: string | null
    addressLineTwo: string | null
    city: string
    state: string
    zip: string
}
// in the body we will have to add the id of the user
// we must retrieve the users id and pass it in as the users ID that's in the state, that's if we don't manually pass it into the body of the post request

const UserAddress = ({username} : {username: string}) => {
    // const [isTrue, setIsTrue] = useState<boolean>(true)
    const [addressID, setAddressID] = useState<Pick<userAddress, 'id' | any>>({
        id: null
    })
    const [userAddress,setUserAddress] = useState<Pick<userAddress, 'userID' | 'state' | 'zip' | 'city' | 'addressLineOne' | 'addressLineTwo' | any>> ({
        userID: null,
        addressLineOne: null,
        addressLineTwo: null,
        city: null,
        state: null,
        zip: null,
    });

    useEffect(() => {
        fetch(`http://localhost:3000/api/address/${username}`)
            .then(response => response.json())
            .then(data => {
                setAddressID(data[0].id)
                setUserAddress({
                    userID: data[0].userID,
                    addressLineOne: data[0].addressLineOne,
                    addressLineTwo: data[0].addressLineTwo,
                    city: data[0].city,
                    state: data[0].state,
                    zip: data[0].zip,
                })
                // if(addressID) return setIsTrue(false)
            })
            .catch(err => console.error(err));
        fetch(`http://localhost:3000/api/users/${username}`)
            .then(response => response.json())
            .then(data => setUserAddress({
                userID: data[0].id,
            }))
            .catch(err => console.error(err));
    }, []);

    // function clickChangesMethodRequest(){
    //     setIsTrue(!isTrue)
    // }
// click button should change a little icon, so to add will be a plus sign and then to edit will be a pencil icon one of the square ones for both like you know what I mean


    function handleChange(event: any){
        setUserAddress({
            ...userAddress,
            [event.target.id]: event.target.value
        });
    }

    function handleSubmit(e:any){
        e.preventDefault();
        fetch(`http://localhost:3000/api/address/${username}`,
            {method: `PATCH`,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify(userAddress),
            })
            .then(response => response.json())
            .then(address => setUserAddress(address));
    }
    // mobile needs to be adjusted to be formatted properly and verified
    //
    // console.log(addressID);
    console.log(userAddress.length);
    return (
        <div>
            <h1>Edit Address</h1>
            {/*<button onClick={clickChangesMethodRequest}>edit</button>*/}
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="address-one">address line one: </label>
                        <input
                            id="addressLineOne"
                            type="text"
                            value={userAddress.addressLineOne}
                            placeholder={`${userAddress.addressLineOne!}`}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="first-name">address line two (optional): </label>
                        <input
                            id="addressLineTwo"
                            type="text"
                            value={userAddress.addressLineTwo}
                            placeholder={`${userAddress.addressLineTwo!}`}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name">City: </label>
                        <input
                            id="city"
                            type="text"
                            value={userAddress.city}
                            placeholder={`${userAddress.city!}`}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">State: </label>
                        <input
                            id="state"
                            type="text"
                            value={userAddress.state}
                            placeholder={`${userAddress.state!}`}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="Zip">Zip: </label>
                        <input
                            id="zip"
                            type="text"
                            value={userAddress.zip}
                            placeholder={`${userAddress.zip!}`}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input type="submit" name="submit" value="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserAddress
