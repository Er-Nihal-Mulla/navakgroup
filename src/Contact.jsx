import React, {useState} from 'react'

const Contact = () => {
        const[data, setData] = useState({
            fullname: '',
            phone:'',
            email:'',
            msg:'',
        });
        const InputEvent = (event) => {
            const {name, value} = event.target;
            setData((preVal) => {
                return{
                    ...preVal,
                    [name] : value, 
                }
            })
        };
        const formSubmit = (e) =>{
            e.preventDefault();
            alert(
                `My Name is ${data.fullname}. My Phone is ${data.phone}. My email is ${data.email}, Here is i want to say ${data.msg}`
                );
        };
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Contact Us </h1>
            </div>
            <div className='container contact_div'>
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto"> 
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1">Full Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1">Phone</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile Number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                                </div>
                                <div className='col-12'>
                                <button className="btn btn-outline-primary" type="submit" onClick={formSubmit}>Submit form</button>  
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;