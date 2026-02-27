import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const PostApiDemo1 = () => {
    const { register, handleSubmit, reset } = useForm()
    const addUser = async (data) => {
        try {
        const userObj = {
            name: data.name,
            age: Number(data.age), 
            email: data.email,
            password: data.password,
            isActive: data.isActive === 'true',
        }
            const res = await axios.post('https://node5.onrender.com/user/user/', userObj)
            console.log(res.data)
            alert("User Added Successfully ")
            reset()
        } catch (error) {
            console.log(error);
            console.log(error.respose?.data || error.message)
            alert('Something went wrong !')
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>POST API DEMO 1</h1>
            <form onSubmit={handleSubmit(addUser)}>
                <div>
                    <label>Name:</label>
                    <input type="text" {...register("name", {required: true})} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" {...register("email", {required: true})} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" {...register("age", {required: true})} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" {...register("password", {required: true})} />
                </div>
                <div>
                    <label>isActive:</label>
                    {/* <input type="text" placeholder='Enter only true or false' {...register("isActive")}/> */}
                    <select {...register("isActive", { required: true })}>
                        <option value="">Select</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default PostApiDemo1