const DynamicRoute = async (props: any) => {
    console.log(props)
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.DynamicRoute}`)
    const response = await url.json()
    console.log("Single Book", response)

    return (
        <div>
            <h1 className="text-5xl text-center ml-36 container text-blue-900 mt-16 font-extrabold underline">
                Dynamic Route </h1> <br />

            <div className="text-lg font-serif text-center bg-gray-200 border-2 ">
                <p> Id= {response.id}</p>
                <p>Name= {response.name}</p>
                <p>userName= {response.username}</p>
                <p>Email= {response.email}</p> <br />
                <p className="font-bold">Address </p>
                <p>Street= {response.address.street}</p>
                <p>Suite= {response.address.suite}</p>
                <p>City= {response.address.city}</p>
                <p>Zipcode= {response.address.zipcode}</p> <br />
                <p className="font-bold">Geo</p>
                <p>lat= {response.address.geo.lat}</p>
                <p>lng= {response.address.geo.lng}</p> <br />
                <p>Phone= {response.phone}</p>
                <p>Website= {response.website}</p> <br />
                <p className="font-bold">Company</p>
                <p>Name= {response.company.name}</p>
                <p>CatchPhrase= {response.company.catchPhrase}</p> <br />
                <p className="font-bold">BS</p>
                <p>Bs= {response.company.bs}</p>
            </div>

        </div>
    )
}
export default DynamicRoute
