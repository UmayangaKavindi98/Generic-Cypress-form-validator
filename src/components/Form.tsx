
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserFormSchemaWithAddress } from '../models/User'
import type { UserFormWithAddress } from '../models/User'

export default function Form() {
    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors, isValid }
    } = useForm<UserFormWithAddress>({
        resolver: zodResolver(UserFormSchemaWithAddress)
    })

    const onSubmit: SubmitHandler<UserFormWithAddress> = (data) => {
        console.log(data.name)
        console.log(data)
    }

    console.log(isValid)

    return (
        <>
           
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col max-w-3xl gap-2 mx-auto"
            >

                <label htmlFor="name"
                    className="text-xl text-white"
                >Name:</label>
                <input id="name" type="text" {...register("name")}
                    className="rounded-md text-xl p-2"
                  
                />
                {errors.name &&
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start" data-cy="nameError">
                        {errors.name?.message}
                    </p>}

                <label htmlFor="username"
                    className="text-xl text-white"
                >Username:</label>
                <input id="username" type="text" {...register("username")}
                    className="rounded-md text-xl p-2"
                
                />
                {errors.username &&
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start" data-cy="userNameError">
                        {errors.username?.message}
                    </p>}

                <label htmlFor="email"
                    className="text-xl text-white"
                >Email:</label>
                <input id="email" type="email" {...register("email")}
                    className="rounded-md text-xl p-2"
             
                />
                {errors.email &&
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start" data-cy="emailError">
                        {errors.email?.message}
                    </p>}

                <label htmlFor="phone" className="text-xl text-white">
                    Phone:
                </label>
                <input type="tel" {...register("phone")}
                    className="rounded-md text-xl p-2"
                   
                />
                {errors.phone &&
                    <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start" data-cy="phoneError">
                        {errors.phone?.message}
                    </p>}


                <button type="submit" className="text-3xl bg-gray-300 p-2 rounded-md max-w-[10rem]">
                    Submit
                </button>

            </form>
        </>
    )
}