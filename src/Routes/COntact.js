import {React, useEffect , useState} from 'react'

const COntact = () => {

    // ! scroll to top of the page everytime user come in thi page
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    //! objet for storing input data
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        msg: '',
    })  

    const getUserData = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUserData({ ...userData, [name]: value })
    } // !getting user data from input fields

    const postData = async (e) => {
        e.preventDefault() // !avoiding refresh of page after submittion

        const { name, email, msg } = userData //! object destructuring

        if (name && email && msg) {
            const res = await fetch('https://mystoredb-790e2-default-rtdb.firebaseio.com/contactform.json',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    msg,
                }),
            }
        ) //! storing data in firebase database and checkig did user fill every field

        if (res) {
            alert(`Thanks ${name} for write message for us`)
        }
        setUserData({
            name: '',
            email: '',
            msg: ''
        })
        } else {
            alert('Please fill every field')
        }
        
    } //! if user left blank any field it show pop that 'please fill every fields' 
    return (
        <div id="contact-container">
            <form method='POST'>
                <div class="contact-box">
                    <input value={userData.name} autoComplete="off" onChange={getUserData} type="text" id="name" name="name" placeholder="Enter Full Name" />
                    <input value={userData.email} type="email" autoComplete='off' onChange={getUserData} id="email" name="email" placeholder="Enter Your Email" />
                    <textarea value={userData.msg} name="msg" autoComplete='off' onChange={getUserData} id="textarea" cols="30" rows="15"
                        placeholder="Write a Message For Us"></textarea>
                    <input type="submit" onClick={postData} value="Submit" id="submit" />
                </div>
            </form>
        </div>
    )
}

export default COntact
