
function Signin() {
    return (
        <div className='w-full h-screen min-h-fit p-10 bg-blue-100 grid place-items-center'>
            <form
                className='px-10 py-12 bg-white rounded w-80 flex flex-col gap-y-5 items-center'
                //onSubmit={handle_signin}
                method='POST'
            >
                <h1 className='text-3xl text-blue-600' >SignIn</h1>
                <input
                    className='inp w-72 sticky top-1 shadow-lg'
                    type={'text'}
                    name='Voter ID'
                    placeholder='Voter ID'
                //value={voterID}
                //onChange={(e) => { setVoterID(e.target.value) }}
                />
                <input
                    className='inp w-72 sticky top-1 shadow-lg'
                    type={'password'}
                    name='password'
                    placeholder='Password'
                //value={password}
                //onChange={(e) => { setPassword(e.target.value) }}
                />
                <button
                    name='submit'
                    type='submit'
                    className='btn bg-blue-600 text-white w-40 h-10 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out'
                >
                    Signin
                </button>
            </form>
        </div>
    )
}

export default Signin
