import { React, useState, useEffect, useContext } from 'react'
import { Link , useHistory} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import { signResolver } from "../utils/Validator/signupresolver";
import VisibilityIcon from '@material-ui/icons//Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@mui/material/CircularProgress';
import {auth} from '../utils/firebase/indexxx'
import {authContext} from '../Authenticaton/AuthProvider'

const SingupPage = () => {
    //!changing state for showing and hiding password
    const [showHidePass, setshowHidePass] = useState(true) 

    //!changing state for showing and hiding password
    const [showHideConfirmPass, setshowHideConfirmPass] = useState(true) 

    // !showing and hide spinner
    const [spinner, setspinner] = useState(true) 
    const history = useHistory()

    //! structuring elements from react-hook-form
    const {
        register,
        handleSubmit,
        formState:
        { errors,
          isSubmitting
        },
        setError,
        clearErrors
    } = useForm({ resolver: signResolver }); 

    const onSubmit = ({email,password}) => {
        //!Firebase
        clearErrors('API_ERROR')
        setspinner(false)
        auth.createUserWithEmailAndPassword(email,password).then(()=>{
            setspinner(true)
            history.push('/')
        }).catch((err)=>{
            setspinner(true)
            setError('API_ERROR',{
                message: err.message
            })
        })
    }

    //! checking if user already loged in then redirect to home page
    const {user} = useContext(authContext)
    useEffect(() => {
        if(user){
            history.push('/')
        }
    }, [user,history]) 
    return (
        <div className="main-signup-container">
            <form className="main-signup-form" onSubmit={handleSubmit(onSubmit)}>
                <div className='singup-container'>
                    <div className="singup-img-part">
                        <img src="imges/10.png" alt="photo" />
                    </div>
                    <div className="singup-details-part">
                        <div className="singup-details-part-items">
                            <div className="signupHeading">
                                <h1>Sign Up</h1>
                            </div>
                            <div className="signup-fulname signup-input-fields">
                                <TextField
                                    sx={{ width: '75%' }}
                                    id="standard-basic"
                                    type='text'
                                    name='name'
                                    label="Full Name"
                                    variant="standard"
                                    autoComplete='off'
                                    {...register('name')} />
                                {errors.name && <p style={{ color: 'red', fontSize: '0.7rem' }}>{errors.name.message}</p>}
                            </div>
                            <div className="signup-email signup-input-fields">
                                <TextField
                                    sx={{ width: '75%' }}
                                    id="filled-password-input"
                                    name='email' label="email"
                                    variant="standard"
                                    autoComplete='off'
                                    {...register('email')} />
                                {errors.email ? 
                                <p style={{ color: 'red', fontSize: '0.7rem' }}>{errors.email.message}</p>
                                 : <p></p>
                                 }
                            </div>
                            <div className="signup-pass signup-input-fields">
                                {
                                    showHidePass ?
                                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                            <TextField
                                                sx={{ width: '75%' }}
                                                id="standard-password-input"
                                                name='password'
                                                label="Password"
                                                type="password"
                                                autoComplete="off"
                                                variant="standard"
                                                {...register('password')}
                                            />
                                            <VisibilityIcon 
                                            onClick={() => { 
                                                setshowHidePass(false) 
                                                }}
                                                 style={{ 
                                                     position: 
                                                     'relative', 
                                                     top: '1.6vw', 
                                                     right: '1.6vw' 
                                                     }} />
                                        </Box> :
                                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                            <TextField
                                                sx={{ width: '75%' }}
                                                id="standard-password-input"
                                                name='password'
                                                label="Password"
                                                type="text"
                                                autoComplete="off"
                                                variant="standard"
                                                {...register('password')}
                                            />
                                            <VisibilityOffIcon 
                                            onClick={() => { 
                                                setshowHidePass(true) 
                                                }} 
                                                style={{ 
                                                    position: 'relative', 
                                                    top: '1.6vw', 
                                                    right: '1.6vw' }} />
                                        </Box>
                                }
                                {errors.password ? 
                                <p style={{ 
                                    color: 'red', 
                                    fontSize: '0.7rem' 
                                    }}>
                                    {errors.password.message}</p> : 
                                    <p></p>}
                            </div>
                            <div className="signup-confirmPass signup-input-fields">
                            {
                                showHideConfirmPass ? 
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <TextField
                                    sx={{ width: '75%' }}
                                    id="standard-password-input"
                                    name='confirmPass'
                                    label="Confirm Password"
                                    type="password"
                                    autoComplete="off"
                                    variant="standard"
                                    {...register('confirmPass')}
                                />
                                <VisibilityIcon 
                                onClick={() => {
                                    setshowHideConfirmPass(false) }} 
                                    style={{ 
                                        position: 'relative', 
                                        top: '1.6vw', 
                                        right: '1.6vw' 
                                        }} /> 
                                </Box>:
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <TextField
                                    sx={{ width: '75%' }}
                                    id="standard-password-input"
                                    name='confirmPass'
                                    label="Confirm Password"
                                    type="text"
                                    autoComplete="off"
                                    variant="standard"
                                    {...register('confirmPass')}
                                />
                                <VisibilityOffIcon 
                                onClick={() => {
                                    setshowHideConfirmPass(true) }} 
                                    style={{ 
                                        position: 'relative', 
                                        top: '1.6vw', 
                                        right: '1.6vw' 
                                        }} />
                                </Box>
                            }
                                
                                {errors.confirmPass 
                                ? <p style={{ 
                                    color: 'red', 
                                    fontSize: '0.7rem' 
                                    }}>
                                    {errors.confirmPass.message}</p> : 
                                    <p></p>}
                            </div>
                            <div className="signup-btns">
                                <div className="signup-check-box-btn">
                                    <input
                                        type="checkbox"
                                        name="check"
                                        id="check" />
                                    <label htmlFor="check">I agree terms and condition</label>
                                </div>
                                <div className="sign-btn">
                                    <button isLoading = {isSubmitting} className='comman-btn'>Sign Up</button>
                                </div>
                                    {spinner?<p></p>:<p> <CircularProgress sx={{marginTop:'2vw', marginLeft:'7vw'}} /></p>}
                                    <p style={{color:'red', 
                                    position:'relative', 
                                    width:'20vw',
                                    top:'3vw', 
                                    textAlign:'center'
                                    }}> 
                                    {errors.API_ERROR && errors.API_ERROR.message} 
                                    </p>
                            </div>
                            <Link to="/login">Already have an Account</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SingupPage
