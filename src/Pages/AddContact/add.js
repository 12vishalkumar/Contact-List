//----------------------------- importing required libaries ---------------------------//
import { useValue } from "../../Context/context";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Style from "./add.module.css";

//----------------------------- Add function ------------------------------------------//
function Add() {

    const { contactList, 
        setContactList,
        nameRef, emailRef, numberRef,
        handleClear } = useValue();
    const navigate = useNavigate();

    //----------------------- Function to create contact -----------------------------//
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const number = numberRef.current.value;

        const isPresent = contactList.find(contact => contact.phone === number)
        if(isPresent) {
            toast.info("Contact Exists!");
        } else {
            const newContactList = [...contactList];
            newContactList.push({
                id: contactList[contactList.length-1].id +1,
                name, email, phone:number
            });
            toast.success("Contact Added Successfully!");
            setContactList(newContactList);
        }
        navigate("/");
        handleClear();
    }


    return (
        <div className={Style.container}>
            <p className={Style.title}>Add Contact</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name" ref={nameRef} required />
                <input type="email" placeholder="Enter Email" ref={emailRef} required />
                <input type="tel" placeholder="Enter Phone number" ref={numberRef} required />
                <button type="submit" className={Style.save_btn}>Save</button>
                <button type="reset" className={Style.cnl_btn}>Reset</button>
            </form>
        </div>
    )
}

//-------------------------- default exportor function ----------------------//
export default Add;