//--------------------------- importing required libaries ------------------------//
import Loader from "../Loader/loader";
import { Link } from "react-router-dom";
import { useValue } from "../../Context/context";
import Style from "./home.module.css";

//---------------------------- Home function ------------------------------------//
function Home() {
    const { contactList, deleteContact, isLoading } = useValue();
    if(isLoading) return <Loader/>

    return (
        <div className={Style.container}>
            <table>
                <thead>
                    <tr className={Style.table_head}>
                        {/*-------------------- table headings --------------------*/}
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Phone No.</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {contactList.map((contact, index)=> (
                    <tr key={index}>
                        {/*--------------------- table data -------------------------*/}
                        <td>{index+1}.</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        {/*---------------  buttonfor updation data -----------------*/}
                        <td>
                            <Link to={`edit/${contact.id}`} className={Style.edit_btn}>Edit</Link>
                        </td>
                        <td>
                            {/*------------- Button for deleteing data ---------------*/}
                            <Link onClick={()=>deleteContact(contact.id)} className={Style.dlt_btn}>Delete</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

//---------------------------- default exportor function ---------------------------//
export default Home;