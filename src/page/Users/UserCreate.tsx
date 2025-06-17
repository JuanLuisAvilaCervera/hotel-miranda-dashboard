import React, { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Page } from "../../components/common/page";
import { Button, InputButton } from "../../components/common/Buttons";
import { FormElement, FormInput, FormTextArea } from "../../components/common/Forms/Form";
import {  useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { YMDtoMDY } from "../../global/dateFormating";
import { UserInterface } from "../../interfaces/userInterface";
import { CreateUser } from "./UserThunk";
import { getUsersData, getUsersStatus } from "./UserSlice";

export const UserCreate = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    
    const [state , setState] = useState("");

    const userStatus : string = useSelector(getUsersStatus);
    const userData : string = useSelector(getUsersData)

    const curr = new Date();

    interface CreatedUser{
        first_name: string,
        last_name: string,
        photo: string,
        start_date: Date,
        email: string,
        job_description: string,
        contact: string,
        active: boolean,
    }

    const [newUser , setUser] = useState<CreatedUser>({
        first_name : "",
        last_name : "",
        photo: "",
        start_date: new Date(),
        email: "",
        job_description: "",
        contact: "",
        active: true,

    })

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(newUser.first_name !== "" && newUser.last_name !== "" && newUser.photo !== "" && newUser.email !== "" && newUser.job_description !== "" && newUser.contact !== ""){
            //create new Booking.
            const user : UserInterface = {
                first_name : newUser.first_name,
                last_name : newUser.last_name,
                photo : newUser.photo,
                start_date : new Date(),
                email : newUser.email,
                job_description : newUser.job_description,
                contact : newUser.contact,
                active : newUser.active
            }
            dispatch(CreateUser(user))
            navigate("/users")
        }
        
    }

    // useEffect(() => {
    //     console.log(userStatus)
    //     if(userStatus === "fulfilled"){
    //         navigate("/users")
    //     }
    // }, [])

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {

        const name = event.target.name;
        const value =  event.target.value;
        setUser({...newUser, [name] : value});
    }



    return <Page $alignment="">
        <FormElement onSubmit={handleSubmit}>
            <h1>Add New User</h1>
            <label> First Name</label>
            <FormInput name="first_name" type="text"  onChange={handleChange}/>
            <label> Last Name</label>
            <FormInput name="last_name" type="text"  onChange={handleChange}/>
            <label>Photo</label>
            <FormInput name="photo" type="text"  onChange={handleChange}/>
            <label>Email</label>
            <FormInput name="email" type="text"  onChange={handleChange}/>
            <label>Job Description</label>
            <FormInput name="job_description" type="text"  onChange={handleChange}/>
            <label>Contact</label>
            <FormInput name="contact" type="text"  onChange={handleChange}/>
            <div>
                <InputButton type="submit" name="Add New Booking" $backgroundcolor=""/>
                <Button onClick={ () => navigate("/bookings")} color={"white"} $backgroundcolor={"red"}>Cancel</Button>
            </div>
            
        </FormElement>
    </Page>
}