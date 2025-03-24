const About=({data}) =>{
    return(
        <section className ="p-6 bg-gray-100">
            <h2 className="text-2xl font-bold text-center">About Me</h2>
            <p className="text-center mt-4">{data.bio}</p>
            <h3 className="text-xl font-bold mt-6">Contacts</h3>
            <p>Email:{data.contact.email}</p>
            <p>Phone:{data.contact.phone}</p>
            <p>Address:{data.contact.address}</p>
        </section>
    )
}

export default About;